/**
 * functions/handlers/captureScreenshot.js — Capture screenshot for existing triage item
 *
 * Env vars:
 *   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SCAN_WORKER_URL, SCAN_WORKER_SECRET
 */

import { supabase, assertEnv } from '../lib/supabaseClient.js'

export default async function handler(req, res) {
  // CORS
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') return res.status(204).send('')

  try {
    return await _handler(req, res)
  } catch (err) {
    console.error('[captureScreenshot] Unhandled exception:', err?.stack ?? err?.message ?? err)
    if (!res.headersSent) {
      return res.status(500).json({ error: 'Internal server error', message: err?.message })
    }
  }
}

async function _handler(req, res) {
  try {
    assertEnv()
  } catch (envErr) {
    console.error('[captureScreenshot] Missing environment variable:', envErr.message)
    return res.status(503).json({ error: 'Server misconfiguration', message: envErr.message })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const jwt = req.headers['authorization']?.replace('Bearer ', '')
  if (!jwt) {
    return res.status(401).json({ error: 'Missing authorization token' })
  }

  // Verify user
  let user
  try {
    const { data, error: authError } = await supabase.auth.getUser(jwt)
    if (authError || !data?.user) {
      return res.status(401).json({ error: 'Invalid or expired session' })
    }
    user = data.user
  } catch (authErr) {
    return res.status(500).json({ error: 'Authentication check failed', message: authErr.message })
  }

  const { triageId } = req.body
  if (!triageId) {
    return res.status(400).json({ error: 'Missing triageId' })
  }

  // Fetch triage item with related scan job info
  const { data: triageItem, error: triageError } = await supabase
    .from('triage_items')
    .select('*, scan_jobs(url, selector, scan_type)')
    .eq('id', triageId)
    .single()

  if (triageError || !triageItem) {
    return res.status(404).json({ error: 'Triage item not found' })
  }

  // Verify audit ownership
  const { data: audit, error: auditError } = await supabase
    .from('audits')
    .select('id, user_id')
    .eq('id', triageItem.audit_id)
    .single()

  if (auditError || !audit || audit.user_id !== user.id) {
    return res.status(403).json({ error: 'Access denied' })
  }

  const workerUrl = process.env.SCAN_WORKER_URL
  const workerSecret = process.env.SCAN_WORKER_SECRET

  if (!workerUrl) {
    return res.status(503).json({ error: 'Scan worker not configured' })
  }

  // Call worker to capture screenshot with highlighting
  const capturePayload = {
    action: 'captureScreenshot',
    url: triageItem.scan_jobs?.url,
    selector: triageItem.selector,
    scanType: triageItem.scan_jobs?.scan_type,
    // Pass selectors to highlight for re-capture
    selectorsToHighlight: triageItem.selectors_to_highlight || [],
  }

  try {
    const response = await fetch(`${workerUrl}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(workerSecret ? { 'Authorization': `Bearer ${workerSecret}` } : {}),
      },
      body: JSON.stringify(capturePayload),
    })

    if (!response.ok) {
      const text = await response.text()
      throw new Error(`Worker returned ${response.status}: ${text}`)
    }

    const result = await response.json()

    if (result.screenshotUrl) {
      // Update triage item with new screenshot URL
      const { error: updateError } = await supabase
        .from('triage_items')
        .update({ screenshot_url: result.screenshotUrl })
        .eq('id', triageId)

      if (updateError) {
        console.error('[captureScreenshot] Failed to update triage item:', updateError)
        return res.status(500).json({ error: 'Screenshot captured but failed to save URL' })
      }

      return res.status(200).json({
        success: true,
        screenshotUrl: result.screenshotUrl,
      })
    }

    return res.status(500).json({ error: 'Screenshot capture failed' })
  } catch (err) {
    console.error('[captureScreenshot] Worker error:', err.message)
    return res.status(500).json({ error: 'Failed to capture screenshot', message: err.message })
  }
}
