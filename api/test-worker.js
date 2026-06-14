export default async function handler(req, res) {
  const workerUrl = process.env.SCAN_WORKER_URL
  const workerSecret = process.env.SCAN_WORKER_SECRET

  console.log('[test-worker] Starting test...')
  console.log('[test-worker] SCAN_WORKER_URL:', workerUrl || 'NOT SET')
  console.log('[test-worker] SCAN_WORKER_SECRET:', workerSecret ? 'SET (len=' + workerSecret.length + ')' : 'NOT SET')

  if (!workerUrl) {
    return res.status(500).json({ error: 'SCAN_WORKER_URL not set' })
  }

  try {
    console.log('[test-worker] Calling health endpoint...')
    const healthRes = await fetch(`${workerUrl}/health`)
    const healthText = await healthRes.text()
    console.log('[test-worker] Health response:', healthRes.status, healthText)

    console.log('[test-worker] Calling scan endpoint...')
    const scanRes = await fetch(`${workerUrl}/scan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(workerSecret ? { 'Authorization': `Bearer ${workerSecret}` } : {}),
      },
      body: JSON.stringify({
        jobId: 'test-' + Date.now(),
        auditId: 'test-audit',
        scanType: 'page',
        url: 'https://example.com'
      })
    })
    const scanText = await scanRes.text()
    console.log('[test-worker] Scan response:', scanRes.status, scanText)

    return res.json({
      health: { status: healthRes.status, body: healthText },
      scan: { status: scanRes.status, body: scanText }
    })
  } catch (err) {
    console.error('[test-worker] Error:', err.message)
    return res.status(500).json({ error: err.message })
  }
}
