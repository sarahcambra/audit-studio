/**
 * api/scan.js — Thin job dispatcher (Vercel serverless)
 *
 * Responsibilities:
 *   1. Validate the request
 *   2. Create a scan_job record in Supabase (status: 'running')
 *   3. Fire a POST to the scan worker (fire-and-forget — don't await)
 *   4. Return { jobId } immediately
 *
 * The scan worker (scan-worker/index.js) handles all the slow Playwright work
 * and writes results directly to Supabase. The frontend polls Supabase for
 * job completion via useScanRunner → pollJobStatus.
 *
 * Required env vars (Vercel):
 *   VITE_SUPABASE_URL          — Supabase project URL
 *   SUPABASE_SERVICE_ROLE_KEY  — Service role key
 *   SCAN_WORKER_URL            — e.g. https://your-worker.railway.app
 *   SCAN_WORKER_SECRET         — Shared Bearer token with the worker
 */

import { supabase, assertEnv } from './lib/supabaseClient.js'

// JWT verification uses the service role client — supabase.auth.getUser(jwt)
// works with any client type and validates the token against Supabase Auth.

// Rate limit: max scans per user per window
const RATE_LIMIT_MAX    = 10
const RATE_LIMIT_WINDOW = 60 // seconds

export default async function handler(req, res) {
  try {
    return await _handler(req, res)
  } catch (err) {
    console.error('[scan] Unhandled exception:', err?.stack ?? err?.message ?? err)
    if (!res.headersSent) {
      return res.status(500).json({ error: 'Internal server error', message: err?.message })
    }
  }
}

async function _handler(req, res) {
  console.log('[scan] _handler entered. method:', req.method, 'has-auth:', !!req.headers?.['authorization'])

  // ── Guard: ensure required env vars are present ───────────────────────────────
  try {
    assertEnv()
  } catch (envErr) {
    console.error('[scan] Missing environment variable:', envErr.message)
    return res.status(503).json({
      error: 'Server misconfiguration',
      message: envErr.message,
    })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // ── Auth: verify the caller's session JWT ────────────────────────────────────
  const jwt = req.headers['authorization']?.replace('Bearer ', '')
  if (!jwt) {
    return res.status(401).json({ error: 'Missing authorization token' })
  }

  let user
  try {
    const { data, error: authError } = await supabase.auth.getUser(jwt)
    if (authError || !data?.user) {
      console.error('[scan] JWT verification failed:', authError?.message ?? 'no user returned')
      return res.status(401).json({ error: 'Invalid or expired session. Please sign in again.' })
    }
    user = data.user
  } catch (authErr) {
    console.error('[scan] supabase.auth.getUser threw:', authErr.message)
    return res.status(500).json({ error: 'Authentication check failed', message: authErr.message })
  }

  const {
    auditId,
    scanType,
    url,
    selector,
    steps,
    scanName,
    wcagVersion,
    conformanceLevel,
    activeSCList,
  } = req.body

  if (!auditId || !scanType || !url) {
    return res.status(400).json({ error: 'Missing required fields: auditId, scanType, url' })
  }

  // ── Ownership: verify the authenticated user owns this audit ─────────────────
  const { data: audit, error: auditError } = await supabase
    .from('audits')
    .select('id')
    .eq('id', auditId)
    .eq('user_id', user.id)
    .single()

  if (auditError || !audit) {
    return res.status(403).json({ error: 'Audit not found or access denied.' })
  }

  // ── Rate limiting: max 10 scans per user per 60 seconds ──────────────────────
  // Join through audits so the window is per-user, not per-audit.
  // Use created_at (set by the DB at insert time) — more reliable than started_at
  // which is only set once the worker picks up the job.
  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW * 1000).toISOString()
  const { count } = await supabase
    .from('scan_jobs')
    .select('id, audits!inner(user_id)', { count: 'exact', head: true })
    .eq('audits.user_id', user.id)
    .gte('created_at', windowStart)

  if (count >= RATE_LIMIT_MAX) {
    return res.status(429).json({
      error: `Rate limit exceeded. Maximum ${RATE_LIMIT_MAX} scans per minute.`,
      retryAfter: RATE_LIMIT_WINDOW,
    })
  }

  const workerUrl    = process.env.SCAN_WORKER_URL
  const workerSecret = process.env.SCAN_WORKER_SECRET

  if (!workerUrl) {
    return res.status(503).json({
      error: 'Scan worker not configured',
      message: 'Set SCAN_WORKER_URL in your Vercel environment variables. See scan-worker/README.md for setup instructions.',
    })
  }

  // ── 1. Create the scan_job record ────────────────────────────────────────────
  // Create with 'pending' — the worker sets it to 'running' when it starts.
  // This way a job stuck at 'pending' (e.g. worker unreachable) is visually
  // distinct from one the worker actively has in-flight ('running').
  const { data: jobData, error: jobError } = await supabase
    .from('scan_jobs')
    .insert({
      audit_id:   auditId,
      scan_type:  scanType,
      url,
      selector:   scanType === 'component' ? selector : null,
      flow_steps: scanType === 'flow'      ? steps    : null,
      status:     'pending',
      started_at: null,
    })
    .select('id')
    .single()

  if (jobError || !jobData) {
    console.error('[scan] Failed to create scan job:', jobError?.message ?? 'no data returned')
    return res.status(500).json({ error: 'Failed to create scan job', message: jobError?.message ?? 'No job data returned' })
  }

  const jobId = jobData.id
  console.log('[scan] Job created:', jobId)

  // ── 2. Log scan started ───────────────────────────────────────────────────────
  // PostgrestFilterBuilder is thenable (.then/.finally) but may not have .catch —
  // use .then(null, noop) which is the PromiseLike-compatible equivalent.
  void supabase.from('audit_activity_log').insert({
    audit_id:    auditId,
    user_id:     user.id, // use verified server-side user ID, never trust client
    action:      'scan_started',
    description: `${scanType} scan queued for ${url}`,
    metadata:    { scanType, jobId },
  }).then(null, () => {}) // non-fatal fire-and-forget

  // ── 3. Fire request to the scan worker (no await) ────────────────────────────
  // The worker responds with 202 immediately and runs the scan asynchronously.
  // We don't wait for this — the frontend polls Supabase for the result.
  const workerPayload = {
    jobId,
    auditId,
    userId: user.id,
    scanType,
    url,
    selector,
    steps,
    scanName,
    wcagVersion,
    conformanceLevel,
    activeSCList,
  }

  console.log('[scan] Calling worker at:', `${workerUrl}/scan`)
  console.log('[scan] Worker payload:', { jobId, auditId, scanType, url: url.slice(0, 60) + '...' })

  // Fire worker request but give it a moment to start before returning
  const workerPromise = fetch(`${workerUrl}/scan`, {
    method:  'POST',
    headers: {
      'Content-Type':  'application/json',
      ...(workerSecret ? { 'Authorization': `Bearer ${workerSecret}` } : {}),
    },
    body: JSON.stringify(workerPayload),
  }).then(async response => {
    console.log('[scan] Worker response status:', response.status)
    if (!response.ok) {
      const text = await response.text()
      console.error('[scan] Worker error response:', text)
      throw new Error(`Worker returned ${response.status}: ${text}`)
    }
    console.log('[scan] Worker accepted job', jobId)
  }).catch(err => {
    // If the worker is unreachable or returns error, mark the job as failed
    console.error('[scan] Worker request failed for job', jobId, '—', err.message)
    void supabase.from('scan_jobs').update({
      status:        'error',
      error_message: `Worker error: ${err.message}`,
      completed_at:  new Date(),
    }).eq('id', jobId).then(null, () => {})
  })

  // ── 4. Wait briefly for worker request to start, then return ─────────────────────
  // Vercel serverless may freeze pending promises after response, so we ensure
  // the fetch has actually started before returning
  console.log('[scan] Waiting for worker request to start...')
  await Promise.race([
    workerPromise.catch(() => {}), // Ignore errors here, caught above
    new Promise(r => setTimeout(r, 500)) // Max 500ms wait
  ])

  console.log('[scan] Returning 200 for job:', jobId)
  return res.status(200).json({ jobId })
}
