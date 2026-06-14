/**
 * functions/handlers/scan.js — Thin job dispatcher
 * Ported from api/scan.js (Vercel) → Firebase Cloud Functions v2
 *
 * Env vars (Firebase Functions config):
 *   SUPABASE_URL             — Supabase project URL
 *   SUPABASE_SERVICE_ROLE_KEY — Service role key
 *   SCAN_WORKER_URL          — Cloud Run worker URL
 *   SCAN_WORKER_SECRET       — Shared Bearer token
 */

import { supabase, assertEnv } from '../lib/supabaseClient.js'

const RATE_LIMIT_MAX    = 10
const RATE_LIMIT_WINDOW = 60 // seconds

export default async function handler(req, res) {
  // CORS — allow the Firebase Hosting origin
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') return res.status(204).send('')

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
  try {
    assertEnv()
  } catch (envErr) {
    console.error('[scan] Missing environment variable:', envErr.message)
    return res.status(503).json({ error: 'Server misconfiguration', message: envErr.message })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const jwt = req.headers['authorization']?.replace('Bearer ', '')
  if (!jwt) {
    return res.status(401).json({ error: 'Missing authorization token' })
  }

  let user
  try {
    const { data, error: authError } = await supabase.auth.getUser(jwt)
    if (authError || !data?.user) {
      return res.status(401).json({ error: 'Invalid or expired session. Please sign in again.' })
    }
    user = data.user
  } catch (authErr) {
    return res.status(500).json({ error: 'Authentication check failed', message: authErr.message })
  }

  const { auditId, scanType, url, selector, steps, scanName, wcagVersion, conformanceLevel, activeSCList } = req.body

  if (!auditId || !scanType || !url) {
    return res.status(400).json({ error: 'Missing required fields: auditId, scanType, url' })
  }

  const { data: audit, error: auditError } = await supabase
    .from('audits')
    .select('id')
    .eq('id', auditId)
    .eq('user_id', user.id)
    .single()

  if (auditError || !audit) {
    return res.status(403).json({ error: 'Audit not found or access denied.' })
  }

  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW * 1000).toISOString()
  const { count, error: rateErr } = await supabase
    .from('scan_jobs')
    .select('id, audits!inner(user_id)', { count: 'exact', head: true })
    .eq('audits.user_id', user.id)
    .gte('created_at', windowStart)

  // FIX (#3): fail CLOSED, not open. Previously the query error was ignored and
  // `count` could be null → `null >= MAX` is false → rate limiting silently
  // disabled on any error. Now we reject the request if the check itself fails.
  if (rateErr) {
    console.error('[scan] Rate-limit count query failed:', rateErr.message)
    return res.status(503).json({ error: 'Rate limit check unavailable. Please retry shortly.' })
  }

  if ((count ?? 0) >= RATE_LIMIT_MAX) {
    return res.status(429).json({
      error: `Rate limit exceeded. Maximum ${RATE_LIMIT_MAX} scans per minute.`,
      retryAfter: RATE_LIMIT_WINDOW,
    })
  }

  const workerUrl    = process.env.SCAN_WORKER_URL
  const workerSecret = process.env.SCAN_WORKER_SECRET

  if (!workerUrl) {
    return res.status(503).json({ error: 'Scan worker not configured. Set SCAN_WORKER_URL.' })
  }

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
    return res.status(500).json({ error: 'Failed to create scan job', message: jobError?.message })
  }

  const jobId = jobData.id

  void supabase.from('audit_activity_log').insert({
    audit_id:    auditId,
    user_id:     user.id,
    action:      'scan_started',
    description: `${scanType} scan queued for ${url}`,
    metadata:    { scanType, jobId },
  }).then(null, () => {})

  const workerPayload = { jobId, auditId, userId: user.id, scanType, url, selector, steps, scanName, wcagVersion, conformanceLevel, activeSCList }

  // CRITICAL FIX #2: Retry worker request up to 3 times if VM is temporarily down
  const callWorker = async (attempt = 1) => {
    try {
      const response = await fetch(`${workerUrl}/scan`, {
        method:  'POST',
        headers: {
          'Content-Type':  'application/json',
          ...(workerSecret ? { 'Authorization': `Bearer ${workerSecret}` } : {}),
        },
        body: JSON.stringify(workerPayload),
      })
      if (!response.ok) {
        const text = await response.text()
        throw new Error(`Worker returned ${response.status}: ${text}`)
      }
      console.log('[scan] Worker accepted job', jobId)
      return true
    } catch (err) {
      if (attempt < 3) {
        console.warn(`[scan] Worker request attempt ${attempt} failed, retrying...`)
        await new Promise(r => setTimeout(r, 1000 * attempt))  // Exponential backoff
        return callWorker(attempt + 1)
      }
      console.error('[scan] Worker request failed after 3 attempts for job', jobId, '—', err.message)
      void supabase.from('scan_jobs').update({
        status:        'error',
        error_message: `Worker error: ${err.message}`,
        completed_at:  new Date(),
      }).eq('id', jobId).then(null, () => {})
      return false
    }
  }

  const workerPromise = callWorker()

  await Promise.race([
    workerPromise.catch(() => {}),
    new Promise(r => setTimeout(r, 500)),
  ])

  return res.status(200).json({ jobId })
}
