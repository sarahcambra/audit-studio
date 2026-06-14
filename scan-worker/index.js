/**
 * scan-worker/index.js
 * Playwright-Extra + Stealth + axe-core scan worker — deployed on Railway.
 *
 * Architecture remediation (2026-05-30):
 * - Replaced @sparticuz/chromium with playwright-extra + stealth plugin
 * - Added real UA, viewport, locale
 * - Added hydration wait sequence (waitForPageReady)
 * - Added hard watchdog that force-closes browser on timeout
 * - Full UNIFIED_AXE_TAGS + exclusion selectors
 * - Removed resource blocking (was causing site breakage)
 * - Added normalizeReport output structure
 *
 * RULES:
 * - Never .catch() on Supabase Postgrest queries — use .then(null, () => {})
 * - Never block resources (breaks sites that detect missing assets)
 */
import { createServer } from 'node:http'
import { createClient } from '@supabase/supabase-js'
import { chromium } from 'playwright-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import AxeBuilder from '@axe-core/playwright'
import { runCustomChecks } from './checks/index.js'

// Enable stealth mode to prevent bot detection
// Now safe to use on GCE (not Cloud Run) because GCE has no sandbox restrictions
const stealth = StealthPlugin()
chromium.use(stealth)

// ─── Mandatory env var check ─────────────────────────────────────────────────
// Fail fast on startup — never run with missing credentials
;['SUPABASE_URL', 'SUPABASE_SERVICE_KEY', 'WORKER_SECRET'].forEach(key => {
  if (!process.env[key]) {
    console.error(`[worker] FATAL: missing required env var: ${key}`)
    process.exit(1)
  }
})

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

const PORT = process.env.PORT || 3001

// ─── FIX (#4): real health state — /health no longer lies ────────────────────
// Previously /health returned {status:'ok'} unconditionally, so a worker that
// could not launch Chromium still advertised healthy and kept accepting jobs.
// probeChromium() actually launches (and immediately closes) a browser, cached
// for PROBE_TTL_MS so an uptime monitor can't trigger a launch storm. It is fully
// wrapped — it never throws — and a bare launch+close is lightweight vs a scan.
const PROBE_TTL_MS = 60_000
const _serverStart = Date.now()
let _health = { ts: 0, ok: null, detail: 'not yet probed' }

async function probeChromium() {
  const now = Date.now()
  if (_health.ok !== null && now - _health.ts < PROBE_TTL_MS) return _health
  let browser
  try {
    browser = await Promise.race([
      launchBrowser(),
      new Promise((_, reject) => setTimeout(() => reject(new Error('launch timeout (15s)')), 15_000)),
    ])
    _health = { ts: Date.now(), ok: true, detail: 'chromium launch ok' }
  } catch (err) {
    _health = { ts: Date.now(), ok: false, detail: `chromium launch failed: ${err.message}` }
  } finally {
    try { await browser?.close() } catch { /* ignore */ }
  }
  return _health
}

// ─── Constants ───────────────────────────────────────────────────────────────

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
const SCAN_TIMEOUT_MS = 540_000 // 9 minutes (Cloud Run allows 600s, leave buffer)
const POST_LOAD_MS = 2000 // Reduced from 3s for speed

const COOKIE_BANNER_SELECTORS = [
  '.worldwide-button-cookies-config__button',
  '#onetrust-accept-btn-handler',
  '.CybotCookiebotDialogBodyButton',
  '.cc-btn.cc-allow',
  "[aria-label*='cookie' i] button",
  "[id*='cookie'] button[class*='accept' i]",
]

const DEFAULT_EXCLUDE_SELECTORS = ['.ignore-this-modal']

const UNIFIED_AXE_TAGS = [
  'wcag2a',
  'wcag2aa',
  'wcag22aa',
  'best-practice',
  'experimental',
  'cat.aria',
  'cat.color-contrast',
]

// ─── HTTP helpers ─────────────────────────────────────────────────────────────

function readBody(req) {
  return new Promise((resolve, reject) => {
    const MAX = 2 * 1024 * 1024 // 2 MB
    let body = ''
    req.setEncoding('utf8')
    req.on('data', chunk => {
      body += chunk
      if (body.length > MAX) { req.destroy(); reject(new Error('Request body too large')) }
    })
    req.on('end',   () => resolve(body))
    req.on('error', reject)
  })
}

function sendJson(res, statusCode, data) {
  const payload = JSON.stringify(data)
  res.writeHead(statusCode, {
    'Content-Type':   'application/json',
    'Content-Length': Buffer.byteLength(payload),
  })
  res.end(payload)
}

// ─── Startup: recover stale jobs from previous container instance ────────────
// When the worker VM restarts (crash, deploy, maintenance), any in-flight jobs
// are left with status 'running' or 'pending' in the DB forever. On boot, mark
// them as 'error' so the frontend can surface the failure rather than spinning.
// CRITICAL FIX #2: Recover both 'running' AND 'pending' jobs older than 5 minutes.

async function recoverStaleJobs() {
  const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString()

  // Recover stuck 'running' jobs (mid-scan interruption)
  const { data: runningJobs, error: runningError } = await supabase
    .from('scan_jobs')
    .update({
      status:        'error',
      error_message: 'Scan was interrupted — the worker restarted mid-scan. Please try again.',
      completed_at:  new Date().toISOString(),
    })
    .eq('status', 'running')
    .select('id')

  if (runningError) {
    console.warn('[worker] Could not recover stale running jobs:', runningError.message)
  } else if (runningJobs?.length > 0) {
    console.log(`[worker] Recovered ${runningJobs.length} stale running job(s):`, runningJobs.map(j => j.id))
  }

  // CRITICAL FIX: Also recover 'pending' jobs that never started (VM was down when webhook arrived)
  const { data: pendingJobs, error: pendingError } = await supabase
    .from('scan_jobs')
    .update({
      status:        'error',
      error_message: 'Worker was unavailable when scan was requested. Please try again.',
      completed_at:  new Date().toISOString(),
    })
    .eq('status', 'pending')
    .lt('created_at', fiveMinutesAgo)  // Only old pending jobs
    .select('id')

  if (pendingError) {
    console.warn('[worker] Could not recover stale pending jobs:', pendingError.message)
  } else if (pendingJobs?.length > 0) {
    console.log(`[worker] Recovered ${pendingJobs.length} stale pending job(s):`, pendingJobs.map(j => j.id))
  }
}

recoverStaleJobs()

// ─── Server ───────────────────────────────────────────────────────────────────

const server = createServer(async (req, res) => {
  const { method, url: reqUrl } = req

  if (method === 'GET' && reqUrl === '/health') {
    const h = await probeChromium()
    return sendJson(res, h.ok ? 200 : 503, {
      status:    h.ok ? 'ok' : 'degraded',
      chromium:  h.detail,
      uptimeSec: Math.round((Date.now() - _serverStart) / 1000),
      checkedAt: _health.ts ? new Date(_health.ts).toISOString() : null,
    })
  }

  const secret = process.env.WORKER_SECRET
  if (secret) {
    const auth = req.headers['authorization'] ?? ''
    if (auth !== `Bearer ${secret}`) return sendJson(res, 401, { error: 'Unauthorized' })
  }

  if (method === 'POST' && reqUrl === '/scan') {
    let body
    try {
      body = JSON.parse(await readBody(req))
    } catch {
      return sendJson(res, 400, { error: 'Invalid JSON body' })
    }

    const { jobId, auditId, userId, scanType, url: scanUrl, selector, steps, scanName, wcagVersion, conformanceLevel } = body

    if (!jobId || !auditId || !scanType || !scanUrl) {
      return sendJson(res, 400, { error: 'Missing required fields' })
    }

    sendJson(res, 202, { accepted: true, jobId })

    runScan({ jobId, auditId, userId, scanType, url: scanUrl, selector, steps, scanName, wcagVersion, conformanceLevel })
      .then(null, err => console.error(`[worker] Unhandled error for job ${jobId}:`, err.message))
    return
  }

  if (method === 'POST' && reqUrl === '/capture') {
    let body
    try {
      body = JSON.parse(await readBody(req))
    } catch {
      return sendJson(res, 400, { error: 'Invalid JSON body' })
    }

    const { action, url: captureUrl, selector, scanType, selectorsToHighlight } = body

    if (action !== 'captureScreenshot' || !captureUrl) {
      return sendJson(res, 400, { error: 'Missing required fields: action, url' })
    }

    try {
      const result = await captureScreenshot(captureUrl, selector, scanType, selectorsToHighlight || [])
      return sendJson(res, 200, result)
    } catch (err) {
      console.error('[worker] Screenshot capture failed:', err.message)
      return sendJson(res, 500, { error: 'Screenshot capture failed', message: err.message })
    }
  }

  sendJson(res, 404, { error: 'Not found' })
})

server.listen(PORT, () => console.log(`[worker] Scan worker listening on port ${PORT}`))

// ─── Watchdog helper ─────────────────────────────────────────────────────────

/**
 * Run a function with a hard timeout that force-closes the browser on expiry.
 * Unlike Promise.race, this actually kills the browser process.
 */
async function runWithWatchdog(label, fn, browserRef, ms) {
  let timer
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(async () => {
      console.error(`[worker] WATCHDOG: ${label} timed out after ${ms}ms — force-closing browser`)
      try { await browserRef.context?.close() } catch {}
      try { await browserRef.browser?.close() } catch {}
      reject(new Error(`${label} timed out after ${ms}ms (browser force-closed)`))
    }, ms)
  })
  try {
    return await Promise.race([fn(), timeout])
  } finally {
    clearTimeout(timer)
  }
}

// ─── Page readiness helpers ──────────────────────────────────────────────────

/**
 * Wait for page to be fully ready after navigation.
 * Mirrors the old audit-engine's waitForPageReadyPlaywright.
 */
async function waitForPageReady(page) {
  // Step 1: Wait for networkidle with timeout (non-fatal)
  await page.waitForLoadState('networkidle', { timeout: 60_000 }).catch(() => {
    console.warn('[worker]   → networkidle timed out; continuing')
  })

  // Step 2: Auto-accept cookie banners
  const sel = COOKIE_BANNER_SELECTORS.join(', ')
  const cookieBtn = await page.waitForSelector(sel, { timeout: 5000 }).catch(() => null)
  if (cookieBtn) {
    await cookieBtn.click().catch(() => {})
    console.log('[worker]   → Cookie banner dismissed')
  }

  // Step 3: Wait for JS-settled content
  await new Promise(r => setTimeout(r, POST_LOAD_MS))
}

// ─── Main scan orchestrator ───────────────────────────────────────────────────

async function runScan({ jobId, auditId, userId, scanType, url, selector, steps, scanName, wcagVersion, conformanceLevel }) {
  const scanStart = Date.now()
  console.log(`[worker] === START job ${jobId} | ${scanType} | ${url} ===`)

  try {
    console.log(`[worker] [1/${jobId}] Updating scan_jobs to running...`)
    await supabase.from('scan_jobs').update({ status: 'running', started_at: new Date() }).eq('id', jobId)
    console.log(`[worker] [1/${jobId}] Updated in ${Date.now() - scanStart}ms`)

    const tags = buildAxeTags(wcagVersion, conformanceLevel)
    console.log(`[worker] [2/${jobId}] Axe tags built: ${tags.length} tags`)

    let scanResult
    const runStart = Date.now()
    const browserRef = { browser: null, context: null }

    const scanFn = async () => {
      if (scanType === 'page') {
        return runStaticScan(url, tags, browserRef)
      } else if (scanType === 'component') {
        return runComponentScan(url, selector, tags, browserRef)
      } else if (scanType === 'flow') {
        return runFlowScan(url, steps, tags, browserRef)
      } else {
        throw new Error(`Unknown scan type: ${scanType}`)
      }
    }

    console.log(`[worker] [3/${jobId}] Running ${scanType} scan...`)
    scanResult = await runWithWatchdog(`${scanType} scan`, scanFn, browserRef, SCAN_TIMEOUT_MS)
    console.log(`[worker] [3/${jobId}] Scan done in ${Date.now() - runStart}ms | violations=${scanResult.violations?.length ?? 0} incomplete=${scanResult.incomplete?.length ?? 0}`)

    console.log(`[worker] [4/${jobId}] Enriching results...`)
    const enrichedResult = {
      ...scanResult,
      violations: (scanResult.violations ?? []).map(enrichViolation),
      incomplete:  (scanResult.incomplete  ?? []).map(enrichViolation),
    }

    console.log(`[worker] [5/${jobId}] Grouping violations...`)
    const groupedViolations = groupViolations(enrichedResult.violations, wcagVersion, conformanceLevel)
    console.log(`[worker] [5/${jobId}] Grouped ${groupedViolations.length} violation groups`)

    // Upload OVERVIEW screenshot (all violations mixed) for scan_results
    let overviewScreenshotUrl = null
    if (scanResult.screenshotBase64) {
      console.log(`[worker] [5b/${jobId}] Uploading overview screenshot...`)
      const filename    = `${jobId}/page-${Date.now()}.png`
      const imageBuffer = Buffer.from(scanResult.screenshotBase64, 'base64')
      const { error: uploadError } = await supabase.storage
        .from('screenshots')
        .upload(filename, imageBuffer, { contentType: 'image/png', upsert: true })
      if (uploadError) {
        console.warn('[worker] overview screenshot upload error:', uploadError.message)
      } else {
        const { data: urlData } = supabase.storage.from('screenshots').getPublicUrl(filename)
        overviewScreenshotUrl = urlData?.publicUrl ?? null
        console.log(`[worker] [5b/${jobId}] Overview screenshot uploaded: ${overviewScreenshotUrl}`)
      }
    }

    // ── PER-GROUP FOCUSED SCREENSHOTS ────────────────────────────────────────────
    // Each violation group gets its own clean screenshot with only that group's
    // elements highlighted + a floating text label.
    const focusedScreenshotUrls = {} // groupId -> url
    const page = scanResult.page
    const browser = scanResult.browser

    if (page && groupedViolations.length > 0) {
      console.log(`[worker] [5c/${jobId}] Taking ${groupedViolations.length} focused group screenshots...`)
      for (let i = 0; i < groupedViolations.length; i++) {
        const group = groupedViolations[i]
        try {
          const base64 = await takeFocusedScreenshot(page, group)
          if (base64) {
            const filename = `${jobId}/group-${group.groupId}-${Date.now()}.png`
            const buffer = Buffer.from(base64, 'base64')
            const { error: upErr } = await supabase.storage
              .from('screenshots')
              .upload(filename, buffer, { contentType: 'image/png', upsert: true })
            if (!upErr) {
              const { data: uData } = supabase.storage.from('screenshots').getPublicUrl(filename)
              focusedScreenshotUrls[group.groupId] = uData?.publicUrl ?? null
            }
          }
        } catch (e) {
          console.warn(`[worker] [5c/${jobId}] Focused screenshot failed for group ${group.groupId}:`, e.message)
        }
      }
      console.log(`[worker] [5c/${jobId}] Focused screenshots done: ${Object.keys(focusedScreenshotUrls).length}/${groupedViolations.length} uploaded`)
    }

    // Close browser now that all screenshots are captured
    if (browser) {
      console.log(`[worker]   → Closing browser...`)
      await browser.close().catch(() => {})
    }

    console.log(`[worker] [6/${jobId}] Inserting scan_results...`)
    const insertStart = Date.now()
    const customResults = scanResult.customResults ?? []

    // Normalize report metadata
    const reportMeta = normalizeReport({
      driver: 'playwright',
      url,
      axeConfig: { tags, wcagVersion, conformanceLevel },
      durationMs: Date.now() - runStart,
      pageTitle: scanResult.pageTitle,
      pageLang: scanResult.pageLang,
    })

    const { error: resultsError } = await supabase.from('scan_results').insert({
      job_id:              jobId,
      violations_json:     enrichedResult.violations,
      incomplete_json:     enrichedResult.incomplete,
      passes_json:         enrichedResult.passes       ?? [],
      inapplicable_json:   enrichedResult.inapplicable ?? [],
      grouped_violations:  groupedViolations,
      custom_checks_json:  customResults,
      summary: {
        scanName, scanType, url,
        selector: scanType === 'component' ? selector : null,
        totalViolations:   enrichedResult.violations.length,
        totalIncomplete:   enrichedResult.incomplete.length,
        totalPasses:       enrichedResult.passes?.length ?? 0,
        totalInapplicable: enrichedResult.inapplicable?.length ?? 0,
        customChecks:      customResults.length,
        wcagVersion, conformanceLevel,
        screenshotUrl: overviewScreenshotUrl,
        ...reportMeta,
      },
      violation_count:     enrichedResult.violations.length,
      incomplete_count:    enrichedResult.incomplete.length,
      pass_count:          enrichedResult.passes?.length ?? 0,
      inapplicable_count:  enrichedResult.inapplicable?.length ?? 0,
    })

    if (resultsError) throw new Error(`Failed to store results: ${resultsError.message}`)
    console.log(`[worker] [6/${jobId}] scan_results inserted in ${Date.now() - insertStart}ms`)

    console.log(`[worker] [7/${jobId}] Grouping incomplete items...`)
    const incompleteGroups = groupViolations(enrichedResult.incomplete ?? [], wcagVersion, conformanceLevel)

    const toTriageRow = (group, overrideType = null) => {
      const firstNode = group.nodes?.[0]
      const enriched = firstNode?._enriched

      // Collect all selectors to highlight for re-capture
      const selectorsToHighlight = group.nodes
        ?.map(node => {
          // Try enriched formatted selector first, then target array
          return node._enriched?.formattedSelector ||
                 (Array.isArray(node.target) ? node.target.join(' > ') : node.target)
        })
        .filter(Boolean) || []

      // Use focused screenshot if available, otherwise fall back to overview
      const groupScreenshotUrl = focusedScreenshotUrls[group.groupId] || overviewScreenshotUrl

      return {
        audit_id:        auditId,
        job_id:          jobId,
        group_id:        group.groupId,
        rule_id:         group.ruleId,
        landmark:        group.landmark,
        issue_type:      overrideType ?? group.issueType,
        impact:          group.impact,
        page_name:       scanName || url,
        selector:        scanType === 'component' ? (selector || null) : null,
        tags:            group.tags || [],
        wcag_sc:         group.scIds?.[0] || null,
        sc_ids:          group.scIds || [],
        node_count:      group.nodeCount,
        element_snippet: firstNode?.html || null,
        screenshot_url:  groupScreenshotUrl,
        decision:        null,
        // Auditor-friendly enriched data
        friendly_description: enriched?.friendlyDescription || null,
        location_context: enriched?.locationContext || group.landmark || null,
        visible_text: enriched?.visibleText || null,
        tag_name: enriched?.tagName || null,
        // Selectors for re-capture highlighting
        selectors_to_highlight: selectorsToHighlight,
        updated_at:      new Date().toISOString(),
      }
    }

    const triageRows = [
      ...groupedViolations.map(g => toTriageRow(g)),
      ...incompleteGroups.map(g => toTriageRow(g, 'needs review')),
    ]

    // Build triage rows from custom checks
    const customTriageRows = customResults.map(finding => {
      // Extract selector from custom check data if available
      let customSelector = null
      let friendlyDescription = null
      let visibleText = null
      let locationContext = null

      if (finding.data) {
        // Try different data structures from various custom checks
        if (finding.data.selector) {
          // Direct selector (pageTitle, languagePage, etc.)
          customSelector = finding.data.selector
        } else if (finding.data.elements?.[0]?.selector) {
          // Array of elements with selectors (pseudoLists, etc.)
          customSelector = finding.data.elements[0].selector
          visibleText = finding.data.elements[0].text
          friendlyDescription = buildFriendlyDescription(
            finding.data.elements[0].html || `<div>${finding.data.elements[0].text}</div>`,
            finding.data.elements[0].selector
          )
        } else if (finding.data.skips?.[0]?.selector) {
          // Heading skips
          customSelector = finding.data.skips[0].selector
          const skip = finding.data.skips[0]
          friendlyDescription = `Heading level skip: h${skip.from} → h${skip.to}`
          visibleText = skip.text
          locationContext = 'document structure'
        } else if (finding.data.duplicates?.[0]?.selector) {
          // Duplicate landmarks
          customSelector = finding.data.duplicates[0].selector
          const dup = finding.data.duplicates[0]
          friendlyDescription = `${dup.count} unlabeled ${dup.role} landmarks`
          locationContext = 'page structure'
        }

        // Get other useful data
        if (finding.data.title) {
          friendlyDescription = `Page titled "${finding.data.title}"`
          locationContext = 'browser tab'
        }
        if (finding.data.orientation) {
          friendlyDescription = `Orientation lock message: "${finding.data.matchedText}"`
          locationContext = 'full page'
        }
        if (finding.data.href) {
          friendlyDescription = `Skip link pointing to "${finding.data.href}"`
          locationContext = 'page header'
          visibleText = finding.data.href
        }
      }

      // Build friendly description if not already set
      if (!friendlyDescription && finding.elementSnippet) {
        friendlyDescription = buildFriendlyDescription(finding.elementSnippet, customSelector)
      }
      if (!friendlyDescription && finding.message) {
        friendlyDescription = finding.message
      }

      // Collect selectors to highlight for custom checks
      const customSelectorsToHighlight = []
      if (customSelector) {
        customSelectorsToHighlight.push(customSelector)
      }
      if (finding.data?.elements) {
        finding.data.elements.forEach(el => {
          if (el.selector) customSelectorsToHighlight.push(el.selector)
        })
      }
      if (finding.data?.skips) {
        finding.data.skips.forEach(skip => {
          if (skip.selector) customSelectorsToHighlight.push(skip.selector)
        })
      }
      if (finding.data?.duplicates) {
        finding.data.duplicates.forEach(dup => {
          if (dup.selector) customSelectorsToHighlight.push(dup.selector)
        })
      }

      return {
        audit_id:        auditId,
        job_id:          jobId,
        group_id:        `${finding.checkId}-${jobId.slice(0, 8)}`,
        rule_id:         finding.checkId,
        landmark:        null,
        issue_type:      finding.confidence === 'CONFIRMED_FAIL' ? 'failure' : 'needs review',
        decision:        null,
        impact:          'moderate',
        page_name:       scanName || url,
        selector:        customSelector || (scanType === 'component' ? selector : null),
        tags:            [`wcag${finding.sc.replace(/\./g, '')}`],
        wcag_sc:         finding.sc,
        sc_ids:          [finding.sc],
        node_count:      finding.nodeCount ?? 1,
        element_snippet: finding.elementSnippet ?? null,
        screenshot_url:  overviewScreenshotUrl, // Custom checks use overview (no focused shot)
        auditor_notes:   `${finding.failureBasis} — ${finding.message}`,
        // Auditor-friendly enriched data
        friendly_description: friendlyDescription || finding.message,
        location_context: locationContext || null,
        visible_text: visibleText || null,
        tag_name: finding.data?.elements?.[0]?.tag || null,
        // Selectors for re-capture highlighting
        selectors_to_highlight: customSelectorsToHighlight.length > 0 ? customSelectorsToHighlight : null,
        updated_at:      new Date().toISOString(),
      }
    })

    const allTriageRows = [...triageRows, ...customTriageRows]
    if (allTriageRows.length > 0) {
      const { error: triageError } = await supabase.from('triage_items')
        .upsert(allTriageRows, { onConflict: 'audit_id,group_id' })

      if (triageError) {
        console.error('[worker] triage upsert error:', triageError.message)
        // Log full details so we can diagnose schema mismatches
        console.error('[worker] triage upsert details:', JSON.stringify(triageError, null, 2))
      } else {
        console.log(`[worker] [7b/${jobId}] Triage items upserted: ${allTriageRows.length} rows`)
      }
    }

    console.log(`[worker] [8/${jobId}] Marking scan_jobs complete...`)
    const { error: completeError } = await supabase.from('scan_jobs')
      .update({
        status:        'complete',
        completed_at:  new Date(),
        page_title:    scanResult.pageTitle   ?? null,
        tool_version:  scanResult.toolVersion ?? null,
      })
      .eq('id', jobId)

    if (completeError) {
      throw new Error(`Failed to mark job complete: ${completeError.message}`)
    }

    void supabase.from('audit_activity_log').insert({
      audit_id:    auditId,
      user_id:     userId,
      action:      'scan_completed',
      description: `${scanType} scan completed`,
      metadata:    { scanType, jobId },
    }).then(null, () => {})

    console.log(`[worker] === END job ${jobId} | total=${Date.now() - scanStart}ms ===`)

  } catch (err) {
    console.error(`[worker] === FAIL job ${jobId} | ${err.name}: ${err.message} | after ${Date.now() - scanStart}ms ===`)
    void supabase.from('scan_jobs')
      .update({ status: 'error', error_message: err.message, completed_at: new Date() })
      .eq('id', jobId)
      .then(null, () => {})
    void supabase.from('audit_activity_log')
      .insert({ audit_id: auditId, user_id: userId, action: 'scan_failed', description: err.message })
      .then(null, () => {})
  }
}

// ─── Playwright helpers ───────────────────────────────────────────────────────

async function launchBrowser() {
  // Use FULL Chromium instead of headless-shell which has GPU bugs
  // 'chromium' channel uses the full browser binary, not the stripped headless-shell
  return chromium.launch({
    channel: 'chromium',  // Force full Chromium, not headless-shell
    headless: true,
    timeout: 60_000,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-software-rasterizer',
      '--disable-gpu-sandbox',
      '--no-zygote',
    ],
  })
}

async function createContextAndPage(browser, browserRef) {
  // Simplified context for Cloud Run
  const context = await browser.newContext({
    userAgent: UA,
    viewport: { width: 1365, height: 900 },
    locale: 'en-US',
  })

  browserRef.browser = browser
  browserRef.context = context
  const page = await context.newPage()

  return { context, page }
}

// ─── Screenshot engine ───────────────────────────────────────────────────────

/**
 * Resolve a selector with multiple fallbacks.
 * Axe target arrays often include brittle :nth-child() paths that break
 * after cookie banners or dynamic content injects elements.
 */
function resolveSelector(selector) {
  const strategies = [
    () => selector,                                   // 1. Full selector as-is
    () => selector.replace(/:nth-child\([^)]+\)/g, ''), // 2. Strip :nth-child
    () => {                                            // 3. Just the last segment
      const parts = selector.split(/\s*\>\s*|\s+/)
      return parts[parts.length - 1]
    },
    () => {                                            // 4. Extract ID only
      const idMatch = selector.match(/#([a-zA-Z0-9_-]+)/)
      return idMatch ? `#${idMatch[1]}` : null
    },
  ]
  for (const fn of strategies) {
    try {
      const s = fn()
      if (!s) continue
      const el = document.querySelector(s)
      if (el) return { selector: s, element: el }
    } catch { /* invalid selector, try next */ }
  }
  return null
}

const LABEL_TEXT_BY_RULE = {
  'image-alt':              'img missing alt',
  'custom-img-no-alt':      'img missing alt',
  'custom-img-bad-alt':     'bad alt text',
  'color-contrast':         'low contrast',
  'color-contrast-enhanced': 'low contrast',
  'custom-placeholder-contrast': 'placeholder contrast',
  'button-name':            'button no name',
  'link-name':              'link no text',
  'label':                  'no label',
  'input-button-name':      'button no name',
  'aria-hidden-body':       'page hidden',
  'aria-hidden-focus':      'hidden + focusable',
  'aria-command-name':      'no aria name',
  'aria-input-field-name':  'input no name',
  'aria-toggle-field-name': 'toggle no name',
  'aria-dialog-name':       'dialog no name',
  'aria-tooltip-name':      'tooltip no name',
  'aria-treeitem-name':     'treeitem no name',
  'aria-meter-name':        'meter no name',
  'aria-progressbar-name':  'progress no name',
  'aria-required-attr':     'missing aria attr',
  'aria-allowed-attr':      'wrong aria attr',
  'aria-prohibited-attr':   'prohibited aria',
  'aria-valid-attr':        'invalid aria',
  'aria-valid-attr-value':  'bad aria value',
  'aria-roles':             'invalid role',
  'aria-deprecated-role':   'old role',
  'aria-roledescription':    'bad roledesc',
  'aria-conditional-attr':  'wrong aria',
  'aria-braille-equivalent':  'no braille equiv',
  'aria-text':              'role=text issue',
  'aria-allowed-role':      'wrong role',
  'presentation-role-conflict': 'role conflict',
  'frame-title':            'frame no title',
  'frame-title-unique':     'duplicate frame title',
  'html-has-lang':          'no lang',
  'html-lang-valid':        'bad lang',
  'html-xml-lang-mismatch': 'lang mismatch',
  'document-title':         'no title',
  'custom-page-title':      'bad title',
  'meta-viewport':          'zoom blocked',
  'meta-viewport-large':    'zoom limited',
  'bypass':                 'no skip link',
  'custom-skip-link-missing': 'no skip link',
  'custom-skip-link-no-target': 'skip broken',
  'custom-skip-link-target-obscured': 'skip hidden',
  'heading-order':          'heading skip',
  'custom-heading-skip':    'heading skip',
  'empty-heading':            'empty heading',
  'p-as-heading':           'p as heading',
  'page-has-heading-one':   'no h1',
  'landmark-one-main':        'no main',
  'landmark-unique':          'duplicate landmark',
  'landmark-no-duplicate-banner': 'dup banner',
  'landmark-no-duplicate-contentinfo': 'dup footer',
  'landmark-no-duplicate-main': 'dup main',
  'landmark-banner-is-top-level': 'nested banner',
  'landmark-complementary-is-top-level': 'nested aside',
  'landmark-contentinfo-is-top-level': 'nested footer',
  'landmark-main-is-top-level': 'nested main',
  'region':                   'no landmark',
  'custom-duplicate-landmark': 'dup landmark',
  'list':                     'bad list',
  'listitem':                 'orphan li',
  'dlitem':                   'orphan dt/dd',
  'definition-list':          'bad dl',
  'table-duplicate-name':     'dup caption',
  'table-fake-caption':       'fake caption',
  'td-has-header':            'no header',
  'td-headers-attr':          'bad headers',
  'th-has-data-cells':        'orphan th',
  'scope-attr-valid':         'bad scope',
  'identical-links-same-purpose': 'dup links',
  'link-in-text-block':       'link hidden',
  'custom-link-color-only':   'link color only',
  'custom-link-purpose-unclear': 'bad link text',
  'target-size':              'target too small',
  'custom-target-size':       'target too small',
  'custom-focus-not-visible': 'no focus',
  'custom-focus-obscured':    'focus hidden',
  'custom-focus-removed-on-focus': 'focus stolen',
  'custom-positive-tabindex': 'bad tabindex',
  'focus-order-semantics':    'focus order',
  'scrollable-region-focusable': 'no keyboard scroll',
  'tabindex':                 'bad tabindex',
  'nested-interactive':       'nested interactive',
  'custom-autocomplete-missing': 'no autocomplete',
  'autocomplete-valid':       'bad autocomplete',
  'custom-placeholder-contrast': 'placeholder contrast',
  'custom-text-spacing-clipped': 'text clipped',
  'custom-non-text-contrast': 'UI contrast',
  'custom-reflow-content-lost': 'content lost',
  'custom-orientation-rotate-message': 'rotate forced',
  'custom-orientation-locked': 'orientation locked',
  'custom-pseudo-list':       'fake list',
  'custom-label-name-mismatch': 'label mismatch',
  'custom-lang-missing':      'no lang',
  'custom-lang-invalid':      'bad lang',
  'custom-image-annotation':  'bad image',
  'audio-caption':            'no audio caption',
  'video-caption':            'no video caption',
  'object-alt':               'no object alt',
  'svg-img-alt':              'svg no alt',
  'role-img-alt':             'img role no alt',
  'area-alt':                 'area no alt',
  'input-image-alt':          'image button no alt',
  'frame-tested':             'frame not tested',
  'frame-focusable-content':  'frame tabindex',
  'meta-refresh':             'auto refresh',
  'meta-refresh-no-exceptions': 'auto refresh',
  'no-autoplay-audio':        'auto audio',
  'server-side-image-map':    'server map',
  'marquee':                  'marquee',
  'blink':                    'blink',
  'css-orientation-lock':     'orientation lock',
  'avoid-inline-spacing':     'inline spacing',
  'accesskeys':               'dup accesskey',
  'duplicate-id':             'dup id',
  'duplicate-id-active':      'dup id active',
  'duplicate-id-aria':        'dup id aria',
  'empty-table-header':       'empty th',
  'form-field-multiple-labels': 'multi label',
  'label-title-only':         'title only label',
  'label-content-name-mismatch': 'label mismatch',
  'select-name':              'select no name',
  'summary-name':             'summary no name',
  'valid-lang':               'bad lang',
  'hidden-content':             'hidden content',
}

const COLOR_BY_RULE = {
  critical:  { border: '#dc2626', bg: '#fee2e2', text: '#991b1b' }, // red
  serious:   { border: '#ea580c', bg: '#ffedd5', text: '#9a3412' }, // orange
  moderate:  { border: '#540cac', bg: '#f3e8ff', text: '#3b0764' }, // purple
  minor:     { border: '#6b7280', bg: '#f3f4f6', text: '#374151' }, // gray
  custom:    { border: '#0891b2', bg: '#ecfeff', text: '#164e63' }, // teal
}

/**
 * Clear all injected highlights and labels from the page.
 */
async function clearHighlights(page) {
  await page.evaluate(() => {
    // Remove highlight style
    const style = document.getElementById('axe-highlight-style')
    if (style) style.remove()

    // Remove all highlighted classes and data attributes
    document.querySelectorAll('.axe-highlight').forEach(el => {
      el.classList.remove('axe-highlight')
      el.removeAttribute('data-impact')
      el.removeAttribute('data-axe-highlight')
    })

    // Remove all injected labels
    document.querySelectorAll('[data-axe-label]').forEach(el => el.remove())

    // Remove corner label
    const corner = document.getElementById('axe-violation-label')
    if (corner) corner.remove()
  }).catch(() => {})
}

/**
 * Take an OVERVIEW screenshot — all violations mixed (for scan results tab).
 */
async function takeOverviewScreenshot(page, violationsOrElements = []) {
  try {
    const elementsToHighlight = []
    for (const item of violationsOrElements) {
      if (item.selector) {
        elementsToHighlight.push({ selector: item.selector, impact: item.impact || 'moderate' })
      } else if (item.nodes) {
        for (const node of item.nodes) {
          if (node.target && node.target.length > 0) {
            elementsToHighlight.push({
              selector: Array.isArray(node.target) ? node.target.join(' > ') : node.target,
              impact: item.impact || 'minor'
            })
          }
        }
      }
    }

    const limitedElements = elementsToHighlight.slice(0, 20)
    let matchInfo = { attempted: 0, matched: 0 }

    if (limitedElements.length > 0) {
      matchInfo = await page.evaluate((elements) => {
        const BRAND_COLOR = '#540cac'
        const IMPACT_COLORS = {
          critical: '#dc2626',
          serious: '#ea580c',
          moderate: '#540cac',
          minor: '#540cac'
        }

        // Inject styles
        const styleId = 'axe-highlight-style'
        if (!document.getElementById(styleId)) {
          const style = document.createElement('style')
          style.id = styleId
          style.textContent = `
            .axe-highlight {
              outline: 3px solid ${BRAND_COLOR} !important;
              outline-offset: 4px !important;
              box-shadow: 0 0 0 2px white, 0 0 0 5px ${BRAND_COLOR} !important;
              position: relative !important;
              z-index: 9999 !important;
            }
            .axe-highlight[data-impact="critical"] {
              outline-color: ${IMPACT_COLORS.critical} !important;
              box-shadow: 0 0 0 2px white, 0 0 0 5px ${IMPACT_COLORS.critical} !important;
            }
            .axe-highlight[data-impact="serious"] {
              outline-color: ${IMPACT_COLORS.serious} !important;
              box-shadow: 0 0 0 2px white, 0 0 0 5px ${IMPACT_COLORS.serious} !important;
            }
          `
          document.head.appendChild(style)
        }

        // Robust selector resolution with fallbacks
        function resolveSelector(selector) {
          const strategies = [
            () => selector,
            () => selector.replace(/:nth-child\([^)]+\)/g, ''),
            () => { const parts = selector.split(/\s*>\s*|\s+/); return parts[parts.length - 1] },
            () => { const m = selector.match(/#([a-zA-Z0-9_-]+)/); return m ? `#${m[1]}` : null },
          ]
          for (const fn of strategies) {
            try { const s = fn(); if (!s) continue; const el = document.querySelector(s); if (el) return { selector: s, element: el } }
            catch { /* try next */ }
          }
          return null
        }

        let matched = 0
        for (const { selector, impact } of elements) {
          const result = resolveSelector(selector)
          if (result && result.element) {
            result.element.classList.add('axe-highlight')
            result.element.setAttribute('data-impact', impact)
            result.element.setAttribute('data-axe-highlight', 'true')
            matched++
          }
        }

        // Scroll to first highlighted
        const first = document.querySelector('.axe-highlight')
        if (first) first.scrollIntoView({ behavior: 'instant', block: 'center', inline: 'center' })

        // Corner label
        const labelId = 'axe-violation-label'
        if (!document.getElementById(labelId)) {
          const label = document.createElement('div')
          label.id = labelId
          label.style.cssText = `
            position: fixed; top: 10px; right: 10px;
            background: #540cac; color: white;
            padding: 8px 12px; border-radius: 6px;
            font-family: system-ui, sans-serif;
            font-size: 12px; font-weight: 600;
            z-index: 10000;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          `
          label.textContent = `${matched}/${elements.length} Issues Highlighted`
          document.body.appendChild(label)
        }

        return { attempted: elements.length, matched }
      }, limitedElements)

      console.log(`[worker]   → Highlights: ${matchInfo.matched}/${matchInfo.attempted} elements matched`)
      await page.waitForTimeout(800)
    }

    const buffer = await page.screenshot({ type: 'png', fullPage: false })
    return buffer.toString('base64')
  } catch (err) {
    console.warn('[worker] Overview screenshot failed:', err.message)
    return null
  }
}

/**
 * Take a FOCUSED screenshot for ONE violation group.
 * Clears previous highlights, highlights only this group's elements,
 * adds floating text labels, and scrolls to first element.
 */
async function takeFocusedScreenshot(page, group) {
  try {
    // 1. Clear previous highlights
    await clearHighlights(page)

    // 2. Build element list from group's nodes
    const groupElements = []
    const nodes = group.nodes || []
    for (const node of nodes) {
      const selector = node._enriched?.formattedSelector
        || (Array.isArray(node.target) ? node.target.join(' > ') : node.target)
        || node.html
      if (selector) {
        groupElements.push({
          selector,
          impact: group.impact || 'moderate',
          ruleId: group.ruleId || 'unknown',
          html: node.html || '',
        })
      }
    }

    if (groupElements.length === 0) {
      console.log(`[worker]   → No elements to highlight for group ${group.groupId}`)
      return null
    }

    const maxElements = 15 // Focused shots: fewer elements, cleaner
    const limited = groupElements.slice(0, maxElements)
    const ruleId = group.ruleId || 'unknown'
    const color = COLOR_BY_RULE[group.impact] || COLOR_BY_RULE.moderate
    const labelText = LABEL_TEXT_BY_RULE[ruleId] || ruleId.replace(/-/g, ' ')

    const matchInfo = await page.evaluate(({ elements, color, labelText }) => {
      function resolveSelector(selector) {
        const strategies = [
          () => selector,
          () => selector.replace(/:nth-child\([^)]+\)/g, ''),
          () => { const parts = selector.split(/\s*>\s*|\s+/); return parts[parts.length - 1] },
          () => { const m = selector.match(/#([a-zA-Z0-9_-]+)/); return m ? `#${m[1]}` : null },
        ]
        for (const fn of strategies) {
          try { const s = fn(); if (!s) continue; const el = document.querySelector(s); if (el) return { selector: s, element: el } }
          catch { /* try next */ }
        }
        return null
      }

      // Inject styles
      const styleId = 'axe-highlight-style'
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style')
        style.id = styleId
        style.textContent = `
          .axe-highlight {
            outline: 3px solid ${color.border} !important;
            outline-offset: 4px !important;
            box-shadow: 0 0 0 2px white, 0 0 0 5px ${color.border} !important;
            position: relative !important;
            z-index: 9998 !important;
          }
          .axe-issue-label {
            position: absolute !important;
            top: -28px !important;
            left: 0 !important;
            background: ${color.bg} !important;
            color: ${color.text} !important;
            border: 2px solid ${color.border} !important;
            padding: 2px 8px !important;
            border-radius: 4px !important;
            font-family: system-ui, -apple-system, sans-serif !important;
            font-size: 11px !important;
            font-weight: 700 !important;
            white-space: nowrap !important;
            z-index: 9999 !important;
            pointer-events: none !important;
            line-height: 1.4 !important;
          }
        `
        document.head.appendChild(style)
      }

      let matched = 0
      for (const { selector, impact } of elements) {
        const result = resolveSelector(selector)
        if (result && result.element) {
          const el = result.element
          el.classList.add('axe-highlight')
          el.setAttribute('data-impact', impact)
          el.setAttribute('data-axe-highlight', 'true')
          matched++

          // Add floating label
          const label = document.createElement('div')
          label.className = 'axe-issue-label'
          label.setAttribute('data-axe-label', 'true')
          label.textContent = labelText
          el.appendChild(label)
        }
      }

      // Scroll first highlighted into view
      const first = document.querySelector('.axe-highlight')
      if (first) {
        first.scrollIntoView({ behavior: 'instant', block: 'center', inline: 'center' })
      }

      // Corner label for this group
      const labelId = 'axe-violation-label'
      const existing = document.getElementById(labelId)
      if (existing) existing.remove()
      const corner = document.createElement('div')
      corner.id = labelId
      corner.style.cssText = `
        position: fixed; top: 10px; right: 10px;
        background: ${color.border}; color: white;
        padding: 8px 12px; border-radius: 6px;
        font-family: system-ui, sans-serif;
        font-size: 12px; font-weight: 600;
        z-index: 10000;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      `
      corner.textContent = `${matched} "${labelText}" found`
      document.body.appendChild(corner)

      return { attempted: elements.length, matched }
    }, { elements: limited, color, labelText })

    console.log(`[worker]   → Focused [${group.ruleId}]: ${matchInfo.matched}/${matchInfo.attempted} elements matched`)
    await page.waitForTimeout(800)

    const buffer = await page.screenshot({ type: 'png', fullPage: false })
    return buffer.toString('base64')
  } catch (err) {
    console.warn(`[worker] Focused screenshot failed for ${group.groupId}:`, err.message)
    return null
  }
}

async function runStaticScan(url, tags, browserRef) {
  const stepStart = Date.now()
  const browser = await launchBrowser()
  console.log(`[worker]   → Browser launched in ${Date.now() - stepStart}ms`)

  try {
    const ctxStart = Date.now()
    const { page } = await createContextAndPage(browser, browserRef)
    console.log(`[worker]   → Context+Page created in ${Date.now() - ctxStart}ms`)

    console.log(`[worker]   → Navigating ${url}...`)
    const navStart = Date.now()

    // Try multiple navigation strategies
    let navSuccess = false
    let navError = null

    // Strategy 1: Try domcontentloaded (fastest)
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45_000 })
      navSuccess = true
      console.log(`[worker]   → Navigation (domcontentloaded) done in ${Date.now() - navStart}ms`)
    } catch (e) {
      navError = e
      console.warn(`[worker]   → domcontentloaded failed: ${e.message}`)
    }

    // Strategy 2: Try load event if domcontentloaded failed
    if (!navSuccess) {
      try {
        await page.goto(url, { waitUntil: 'load', timeout: 30_000 })
        navSuccess = true
        console.log(`[worker]   → Navigation (load) done in ${Date.now() - navStart}ms`)
      } catch (e) {
        console.warn(`[worker]   → load failed: ${e.message}`)
      }
    }

    // Strategy 3: Just wait for any response
    if (!navSuccess) {
      try {
        await page.goto(url, { timeout: 30_000 })
        navSuccess = true
        console.log(`[worker]   → Navigation (any) done in ${Date.now() - navStart}ms`)
      } catch (e) {
        console.warn(`[worker]   → navigation failed completely: ${e.message}`)
        throw new Error(`Site blocked or unreachable: ${navError?.message || e.message}`)
      }
    }

    console.log(`[worker]   → Waiting for page ready...`)
    const readyStart = Date.now()
    await waitForPageReady(page)
    console.log(`[worker]   → Page ready in ${Date.now() - readyStart}ms`)

    const metaStart = Date.now()
    const pageTitle = await page.title()
    const pageLang  = await page.getAttribute('html', 'lang') ?? null
    console.log(`[worker]   → Page meta extracted in ${Date.now() - metaStart}ms | title: "${pageTitle}"`)

    console.log(`[worker]   → Running axe-core...`)
    const axeStart = Date.now()
    const builder = createAxeBuilder(page, tags)

    // Axe analysis with 90s timeout (some sites have huge DOMs)
    const axePromise = builder.analyze()
    const axeTimeout = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Axe analysis timed out after 90s')), 90_000)
    })

    let axeResult
    try {
      axeResult = await Promise.race([axePromise, axeTimeout])
      console.log(`[worker]   → Axe done in ${Date.now() - axeStart}ms | violations=${axeResult.violations?.length ?? 0}`)
    } catch (axeErr) {
      console.warn(`[worker]   → Axe failed: ${axeErr.message}`)
      // Return empty result on timeout - still try to get other data
      axeResult = { violations: [], incomplete: [], passes: [], inapplicable: [] }
    }

    console.log(`[worker]   → Running custom checks...`)
    const customStart = Date.now()

    // Custom checks with 60s timeout
    const customPromise = runCustomChecks(page)
    const customTimeout = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Custom checks timed out after 60s')), 60_000)
    })

    let customResults
    try {
      customResults = await Promise.race([customPromise, customTimeout])
      console.log(`[worker]   → Custom checks done in ${Date.now() - customStart}ms | findings=${customResults.length}`)
    } catch (customErr) {
      console.warn(`[worker]   → Custom checks failed: ${customErr.message}`)
      customResults = []
    }

    // Build highlight data from BOTH axe violations AND custom checks
    const allElementsToHighlight = []

    // Add axe violations
    for (const violation of axeResult.violations || []) {
      if (violation.nodes) {
        for (const node of violation.nodes) {
          if (node.target && node.target.length > 0) {
            allElementsToHighlight.push({
              selector: Array.isArray(node.target) ? node.target.join(' > ') : node.target,
              impact: violation.impact || 'minor'
            })
          }
        }
      }
    }

    // Add custom check elements
    for (const finding of customResults) {
      if (finding.data) {
        // Try to extract selector from various custom check data formats
        let selector = null
        if (finding.data.selector) {
          selector = finding.data.selector
        } else if (finding.data.elements?.[0]?.selector) {
          selector = finding.data.elements[0].selector
        } else if (finding.data.skips?.[0]?.selector) {
          selector = finding.data.skips[0].selector
        } else if (finding.data.duplicates?.[0]?.selector) {
          selector = finding.data.duplicates[0].selector
        }

        if (selector) {
          allElementsToHighlight.push({
            selector,
            impact: 'moderate', // Custom checks default to moderate
            isCustom: true
          })
        }
      }
    }

    console.log(`[worker]   → Taking overview screenshot with ${allElementsToHighlight.length} elements (${axeResult.violations?.length ?? 0} axe + ${customResults.length} custom)...`)
    const screenshotBase64 = await takeOverviewScreenshot(page, allElementsToHighlight)
    console.log(`[worker]   → Overview screenshot done`)

    return { ...axeResult, screenshotBase64, pageTitle, pageLang, toolVersion: axeResult.testEngine?.version ?? null, customResults, page, browser }
  } finally {
    // NOTE: Browser is NOT closed here — runScan() takes per-group focused screenshots,
    // then closes the browser when all screenshots are captured.
    // If an error occurs, browserRef.watchdog or caller must close it.
  }
}

async function runComponentScan(url, selector, tags, browserRef) {
  const browser = await launchBrowser()
  try {
    const { page } = await createContextAndPage(browser, browserRef)

    console.log(`[worker]   → Navigating ${url} (domcontentloaded)...`)
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 }).catch(e => {
      console.warn(`[worker]   → goto warning: ${e.message}`)
    })

    await waitForPageReady(page)

    const pageTitle = await page.title()
    const pageLang  = await page.getAttribute('html', 'lang') ?? null
    const builder = createAxeBuilder(page, tags)
    if (selector) builder.include(selector)
    const axeResult = await builder.analyze()
    console.log(`[worker]   → Axe done | violations=${axeResult.violations?.length ?? 0}`)

    console.log(`[worker]   → Running custom checks...`)
    const customResults = await runCustomChecks(page)
    console.log(`[worker]   → Custom checks done | findings=${customResults.length}`)

    // Build highlight data from BOTH axe violations AND custom checks
    const allElementsToHighlight = []

    // Add axe violations
    for (const violation of axeResult.violations || []) {
      if (violation.nodes) {
        for (const node of violation.nodes) {
          if (node.target && node.target.length > 0) {
            allElementsToHighlight.push({
              selector: Array.isArray(node.target) ? node.target.join(' > ') : node.target,
              impact: violation.impact || 'minor'
            })
          }
        }
      }
    }

    // Add custom check elements
    for (const finding of customResults) {
      if (finding.data && finding.data.selector) {
        allElementsToHighlight.push({
          selector: finding.data.selector,
          impact: 'moderate',
          isCustom: true
        })
      }
    }

    console.log(`[worker]   → Taking overview screenshot with ${allElementsToHighlight.length} elements...`)
    const screenshotBase64 = await takeOverviewScreenshot(page, allElementsToHighlight)
    console.log(`[worker]   → Overview screenshot done`)

    return { ...axeResult, screenshotBase64, pageTitle, pageLang, toolVersion: axeResult.testEngine?.version ?? null, customResults, page, browser }
  } finally {
    // Browser stays open for per-group focused screenshots in runScan()
  }
}

async function runFlowScan(url, steps, tags, browserRef) {
  const browser = await launchBrowser()
  try {
    const { page } = await createContextAndPage(browser, browserRef)

    console.log(`[worker]   → Navigating ${url} (domcontentloaded)...`)
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 }).catch(e => {
      console.warn(`[worker]   → goto warning: ${e.message}`)
    })

    await waitForPageReady(page)

    for (const step of (steps ?? [])) {
      console.log(`[worker]   → Step: ${step.action} ${step.selector ?? ''}`)
      if (step.action === 'click' && step.selector) {
        await page.click(step.selector)
        await page.waitForTimeout(500)
      } else if (step.action === 'fill' && step.selector) {
        await page.fill(step.selector, step.value ?? '')
      } else if (step.action === 'navigate' && step.url) {
        await page.goto(step.url, { waitUntil: 'domcontentloaded', timeout: 60_000 }).catch(e => {
          console.warn(`[worker]   → flow navigate warning: ${e.message}`)
        })
        await waitForPageReady(page)
      } else if (step.action === 'wait') {
        await page.waitForTimeout(step.ms ?? 1000)
      }
    }

    const builder = createAxeBuilder(page, tags)
    const pageTitle = await page.title()
    const pageLang  = await page.getAttribute('html', 'lang') ?? null
    console.log(`[worker]   → Running axe-core after flow steps...`)
    const axeResult = await builder.analyze()
    console.log(`[worker]   → Axe done | violations=${axeResult.violations?.length ?? 0}`)

    console.log(`[worker]   → Running custom checks...`)
    const customResults = await runCustomChecks(page)
    console.log(`[worker]   → Custom checks done | findings=${customResults.length}`)

    // Build highlight data from BOTH axe violations AND custom checks
    const allElementsToHighlight = []

    // Add axe violations
    for (const violation of axeResult.violations || []) {
      if (violation.nodes) {
        for (const node of violation.nodes) {
          if (node.target && node.target.length > 0) {
            allElementsToHighlight.push({
              selector: Array.isArray(node.target) ? node.target.join(' > ') : node.target,
              impact: violation.impact || 'minor'
            })
          }
        }
      }
    }

    // Add custom check elements
    for (const finding of customResults) {
      if (finding.data && finding.data.selector) {
        allElementsToHighlight.push({
          selector: finding.data.selector,
          impact: 'moderate',
          isCustom: true
        })
      }
    }

    console.log(`[worker]   → Taking overview screenshot with ${allElementsToHighlight.length} elements...`)
    const screenshotBase64 = await takeOverviewScreenshot(page, allElementsToHighlight)
    console.log(`[worker]   → Overview screenshot done`)

    return { ...axeResult, screenshotBase64, pageTitle, pageLang, toolVersion: axeResult.testEngine?.version ?? null, customResults, page, browser }
  } finally {
    // Browser stays open for per-group focused screenshots in runScan()
  }
}

// ─── Screenshot capture for existing triage items ────────────────────────────

/**
 * Capture a screenshot for an existing triage item.
 * Used when the original screenshot was missing or failed.
 */
async function captureScreenshot(url, selector, scanType, selectorsToHighlight = []) {
  console.log(`[worker] === CAPTURE screenshot | ${url} | selector: ${selector || 'none'} | ${selectorsToHighlight.length} selectors to highlight ===`)
  const browser = await launchBrowser()
  const browserRef = { browser, context: null }

  try {
    const { page } = await createContextAndPage(browser, browserRef)
    console.log(`[worker]   → Navigating ${url}...`)

    // Try navigation with fallback strategies
    let navSuccess = false
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45_000 })
      navSuccess = true
    } catch (e) {
      console.warn(`[worker]   → domcontentloaded failed: ${e.message}`)
    }

    if (!navSuccess) {
      try {
        await page.goto(url, { waitUntil: 'load', timeout: 30_000 })
        navSuccess = true
      } catch (e) {
        console.warn(`[worker]   → load failed: ${e.message}`)
      }
    }

    if (!navSuccess) {
      await page.goto(url, { timeout: 30_000 })
    }

    console.log(`[worker]   → Waiting for page ready...`)
    await waitForPageReady(page)

    // If component scan with selector, try to scroll element into view
    if (scanType === 'component' && selector) {
      try {
        const element = await page.locator(selector).first()
        await element.scrollIntoViewIfNeeded({ timeout: 5000 })
        await page.waitForTimeout(500)
        console.log(`[worker]   → Scrolled component into view: ${selector}`)
      } catch (e) {
        console.warn(`[worker]   → Could not scroll to element: ${e.message}`)
      }
    }

    console.log(`[worker]   → Taking screenshot with ${selectorsToHighlight.length || (selector ? 1 : 0)} highlighted elements...`)

    // Highlight selectors from the original scan (for re-capture)
    if (selectorsToHighlight && selectorsToHighlight.length > 0) {
      console.log(`[worker]   → Highlighting ${selectorsToHighlight.length} stored selectors...`)
      let highlightedCount = 0
      for (const sel of selectorsToHighlight) {
        try {
          const found = await page.evaluate((selectorStr) => {
            const BRAND_COLOR = '#540cac'
            try {
              // Try standard querySelector first
              let el = document.querySelector(selectorStr)

              // If not found, try simpler fallback for nth-child selectors
              if (!el && selectorStr.includes(':nth-child')) {
                const parts = selectorStr.split(' > ')
                if (parts.length >= 2) {
                  // Try with just the parent and tag
                  const simplified = parts.slice(0, 2).join(' ')
                  el = document.querySelector(simplified)
                }
              }

              if (el) {
                el.style.cssText += `
                  outline: 3px solid ${BRAND_COLOR} !important;
                  outline-offset: 4px !important;
                  box-shadow: 0 0 0 2px white, 0 0 0 5px ${BRAND_COLOR} !important;
                  position: relative !important;
                  z-index: 9999 !important;
                `
                // Add a data attribute to mark it as highlighted
                el.setAttribute('data-audit-highlight', 'true')
                return true
              }
            } catch (e) {
              // Invalid selector, skip
            }
            return false
          }, sel)

          if (found) {
            highlightedCount++
          } else {
            console.warn(`[worker]   → Could not find element for selector: ${sel}`)
          }
        } catch (e) {
          console.warn(`[worker]   → Could not highlight selector "${sel}": ${e.message}`)
        }
      }
      console.log(`[worker]   → Successfully highlighted ${highlightedCount}/${selectorsToHighlight.length} elements`)

      // Scroll the first highlighted element into view so it's visible in the screenshot
      await page.evaluate(() => {
        const firstHighlighted = document.querySelector('[data-audit-highlight="true"]')
        if (firstHighlighted) {
          firstHighlighted.scrollIntoView({ behavior: 'instant', block: 'center', inline: 'center' })
        }
      })

      await page.waitForTimeout(800)
    }
    // Fallback: highlight single selector (legacy support)
    else if (selector) {
      try {
        await page.evaluate((sel) => {
          const BRAND_COLOR = '#540cac'
          const el = document.querySelector(sel)
          if (el) {
            el.style.cssText += `
              outline: 3px solid ${BRAND_COLOR} !important;
              outline-offset: 4px !important;
              box-shadow: 0 0 0 2px white, 0 0 0 5px ${BRAND_COLOR} !important;
            `
            el.scrollIntoView({ behavior: 'instant', block: 'center', inline: 'center' })
          }
        }, selector)
        await page.waitForTimeout(800)
      } catch (e) {
        console.warn(`[worker]   → Could not highlight element: ${e.message}`)
      }
    }

    const screenshotBuffer = await page.screenshot({ type: 'png', fullPage: false })
    const screenshotBase64 = screenshotBuffer.toString('base64')

    // Upload to Supabase Storage
    const filename = `capture-${Date.now()}-${Math.random().toString(36).slice(2)}.png`
    const imageBuffer = Buffer.from(screenshotBase64, 'base64')
    const { error: uploadError } = await supabase.storage
      .from('screenshots')
      .upload(filename, imageBuffer, { contentType: 'image/png', upsert: true })

    if (uploadError) {
      throw new Error(`Upload failed: ${uploadError.message}`)
    }

    const { data: urlData } = supabase.storage.from('screenshots').getPublicUrl(filename)
    const screenshotUrl = urlData?.publicUrl ?? null

    console.log(`[worker]   → Screenshot uploaded: ${screenshotUrl}`)
    console.log(`[worker] === CAPTURE complete ===`)

    return { screenshotUrl }
  } catch (err) {
    console.error(`[worker] === CAPTURE failed: ${err.message} ===`)
    throw err
  } finally {
    await browser.close().catch(() => {})
  }
}

// ─── axe-core builder ────────────────────────────────────────────────────────

/**
 * Create an AxeBuilder with tags and exclusion selectors applied.
 */
function createAxeBuilder(page, tags, extraExcludes = []) {
  let builder = new AxeBuilder({ page })
  if (tags && tags.length > 0) builder.withTags(tags)

  const excludes = [...DEFAULT_EXCLUDE_SELECTORS, ...extraExcludes].filter(Boolean)
  for (const sel of excludes) {
    builder = builder.exclude(sel)
  }

  // Performance: Only return violations, skip passes/inapplicable for large sites
  builder.options({
    resultTypes: ['violations', 'incomplete'], // Skip 'passes' and 'inapplicable' to save memory
    preload: false, // Don't inject axe into iframes (expensive)
  })

  return builder
}

// ─── axe-core tag builder ────────────────────────────────────────────────────

/**
 * Maps wcagVersion + conformanceLevel to the correct axe-core tag set.
 * Uses UNIFIED_AXE_TAGS as base and adds level-specific tags.
 */
function buildAxeTags(wcagVersion = '2.2', conformanceLevel = 'AA') {
  const level = (conformanceLevel ?? 'AA').toUpperCase()
  const ver   = wcagVersion ?? '2.2'
  const tags  = new Set(UNIFIED_AXE_TAGS)

  // Base WCAG 2.x tags (always include level A + requested level)
  tags.add('wcag2a')
  if (level === 'AA' || level === 'AAA') tags.add('wcag2aa')
  if (level === 'AAA') tags.add('wcag2aaa')

  // WCAG 2.1 additions
  if (ver === '2.1' || ver === '2.2') {
    tags.add('wcag21a')
    if (level === 'AA' || level === 'AAA') tags.add('wcag21aa')
  }

  // WCAG 2.2 additions
  if (ver === '2.2') {
    tags.add('wcag22a')
    if (level === 'AA' || level === 'AAA') tags.add('wcag22aa')
  }

  return [...tags]
}

// ─── Report normalization ────────────────────────────────────────────────────

/**
 * Normalize scan metadata into a consistent report structure.
 */
function normalizeReport({ driver, url, axeConfig, durationMs, pageTitle, pageLang }) {
  return {
    driver,
    scannedUrl: url,
    axeConfig,
    durationMs,
    pageTitle: pageTitle ?? null,
    pageLang: pageLang ?? null,
    timestamp: new Date().toISOString(),
  }
}

// ─── Violation enrichment ─────────────────────────────────────────────────────

function enrichViolation(violation) {
  return {
    ...violation,
    impact: (violation.impact ?? 'moderate').toLowerCase(),
  }
}

// ─── Element enrichment for auditor-friendly display ───────────────────────────

/**
 * Parse HTML snippet to extract element info
 */
function parseElementInfo(html) {
  if (!html || typeof html !== 'string') {
    return { tag: 'element', text: '', classes: [], id: null }
  }

  // Extract tag name
  const tagMatch = html.match(/<([a-zA-Z0-9]+)[\s>]/)
  const tag = tagMatch ? tagMatch[1].toLowerCase() : 'element'

  // Extract id
  const idMatch = html.match(/id=["']([^"']+)["']/)
  const id = idMatch ? idMatch[1] : null

  // Extract classes
  const classMatch = html.match(/class=["']([^"']+)["']/)
  const classes = classMatch ? classMatch[1].split(/\s+/).filter(Boolean) : []

  // Extract text content (remove tags, decode entities)
  const text = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim()

  return { tag, text, classes, id }
}

/**
 * Build a friendly description of an element for auditors
 */
function buildFriendlyDescription(html, target) {
  const { tag, text } = parseElementInfo(html)
  const textPreview = text.slice(0, 60) || '(no visible text)'

  const descriptions = {
    button: () => `Button labeled "${textPreview}"`,
    a: () => `Link reading "${textPreview}"`,
    input: () => {
      const inputType = html.match(/type=["']([^"']+)["']/)?.[1] || 'text'
      const placeholder = html.match(/placeholder=["']([^"']+)["']/)?.[1]
      const label = html.match(/aria-label=["']([^"']+)["']/)?.[1]
      if (label) return `${inputType} input labeled "${label}"`
      if (placeholder) return `${inputType} input with placeholder "${placeholder}"`
      if (text && text !== '(no visible text)') return `${inputType} input with value "${textPreview}"`
      return `${inputType} input field`
    },
    img: () => {
      const alt = html.match(/alt=["']([^"]*)["']/)?.[1]
      return alt !== undefined
        ? `Image with alt text "${alt || '(empty)'}"`
        : 'Image (missing alt attribute)'
    },
    li: () => `List item: "${textPreview}"`,
    h1: () => `Main heading: "${textPreview}"`,
    h2: () => `Section heading: "${textPreview}"`,
    h3: () => `Subsection heading: "${textPreview}"`,
    h4: () => `Subsection heading: "${textPreview}"`,
    h5: () => `Small heading: "${textPreview}"`,
    h6: () => `Small heading: "${textPreview}"`,
    label: () => `Form label: "${textPreview}"`,
    select: () => `Dropdown menu${text !== '(no visible text)' ? ` showing "${textPreview}"` : ''}`,
    textarea: () => `Text area${text !== '(no visible text)' ? ` containing "${textPreview}"` : ''}`,
    table: () => `Data table${text !== '(no visible text)' ? `: "${textPreview}"` : ''}`,
    nav: () => `Navigation section`,
    header: () => `Page header`,
    footer: () => `Page footer`,
    main: () => `Main content area`,
    aside: () => `Sidebar content`,
    form: () => `Form${text !== '(no visible text)' ? `: "${textPreview}"` : ''}`,
    div: () => text !== '(no visible text)' ? `Content section: "${textPreview}"` : 'Content container',
    span: () => text !== '(no visible text)' ? `Text span: "${textPreview}"` : 'Inline text element',
    p: () => `Paragraph${text !== '(no visible text)' ? `: "${textPreview}"` : ''}`,
    title: () => `Page title: "${textPreview}"`,
  }

  return descriptions[tag]?.() || `<${tag}> element${text !== '(no visible text)' ? `: "${textPreview}"` : ''}`
}

/**
 * Get location context from selector
 */
function getLocationContext(target) {
  if (!target) return null
  const selector = Array.isArray(target) ? target.join(' ') : target
  const lower = selector.toLowerCase()

  if (lower.includes('nav') || lower.includes('navigation') || lower.includes('menu')) return 'navigation'
  if (lower.includes('header') || lower.includes('banner')) return 'header'
  if (lower.includes('footer')) return 'footer'
  if (lower.includes('main') || lower.includes('[role="main"]')) return 'main content'
  if (lower.includes('aside') || lower.includes('sidebar')) return 'sidebar'
  if (lower.includes('form')) return 'form'
  if (lower.includes('modal') || lower.includes('dialog')) return 'modal dialog'
  if (lower.includes('button') || lower.includes('link') || lower.includes('a ')) return 'interactive element'

  return null
}

/**
 * Enrich nodes with auditor-friendly data
 */
function enrichNodes(nodes = []) {
  return nodes.map(node => {
    const html = node.html || ''
    const target = node.target || []

    return {
      ...node,
      _enriched: {
        friendlyDescription: buildFriendlyDescription(html, target),
        visibleText: parseElementInfo(html).text.slice(0, 100),
        tagName: parseElementInfo(html).tag,
        locationContext: getLocationContext(target),
        formattedSelector: Array.isArray(target) ? target.join(' > ') : target,
      }
    }
  })
}

// ─── Violation grouping (C-6) ─────────────────────────────────────────────────

function hashString(str) {
  let hash = 5381
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) ^ str.charCodeAt(i)
    hash = hash >>> 0
  }
  return hash.toString(36)
}

function extractScIds(tags, wcagVersion = '2.2', conformanceLevel = 'AA') {
  const wcag22OnlySCs = new Set(['2.4.11', '2.4.12', '2.4.13', '2.5.7', '2.5.8', '3.2.6', '3.3.7', '3.3.8', '3.3.9'])
  const aaaSCs = new Set([
    '1.2.6','1.2.7','1.2.8','1.2.9',
    '1.4.6','1.4.7','1.4.8','1.4.9',
    '2.1.3',
    '2.2.3','2.2.4','2.2.5','2.2.6',
    '2.3.2','2.3.3',
    '2.4.3','2.4.8','2.4.9','2.4.10',
    '2.5.5','2.5.6',
    '3.1.3','3.1.4','3.1.5','3.1.6',
    '3.2.5',
    '3.3.5','3.3.6',
  ])

  return tags
    .filter(t => /^wcag\d{3,4}$/.test(t))
    .map(t => {
      const d = t.replace('wcag', '')
      if (d.length === 3) return `${d[0]}.${d[1]}.${d[2]}`
      if (d.length === 4) return `${d[0]}.${d[1]}.${d[2]}${d[3]}`
      return null
    })
    .filter(sc => {
      if (!sc) return false
      if (wcagVersion === '2.1' && wcag22OnlySCs.has(sc)) return false
      if (conformanceLevel !== 'AAA' && aaaSCs.has(sc)) return false
      return true
    })
}

function groupViolations(violations, wcagVersion = '2.2', conformanceLevel = 'AA') {
  return violations.map(violation => {
    const scIds = extractScIds(violation.tags ?? [], wcagVersion, conformanceLevel)
    const selectorStr = (violation.nodes ?? [])
      .map(n => (Array.isArray(n.target) ? n.target.join(',') : n.html ?? ''))
      .join('|')
    const groupId = `${violation.id}-${hashString(selectorStr)}`
    const impact = (violation.impact ?? 'moderate').toLowerCase()
    const issueType = 'failure'
    const landmark = detectLandmark(violation.nodes?.[0])

    // Enrich nodes with auditor-friendly data
    const enrichedNodes = enrichNodes(violation.nodes ?? [])

    return {
      groupId,
      ruleId:      violation.id,
      landmark,
      issueType,
      impact,
      tags:        violation.tags ?? [],
      scIds,
      nodeCount:   enrichedNodes.length,
      nodes:       enrichedNodes,
      description: violation.description,
      help:        violation.help,
      helpUrl:     violation.helpUrl,
    }
  })
}

function detectLandmark(node) {
  if (!node) return null
  const selectorStr = [
    ...(Array.isArray(node.ancestry) ? node.ancestry : []),
    ...(Array.isArray(node.target)   ? node.target   : []),
  ].join(' ').toLowerCase()

  const landmarkMap = [
    ['header',  'header'],
    ['nav',     'nav'],
    ['main',    'main'],
    ['footer',  'footer'],
    ['aside',   'aside'],
    ['form',    'form'],
    ['section', 'section'],
    ['article', 'article'],
    ['[role="banner"]',      'banner'],
    ['[role="navigation"]',  'navigation'],
    ['[role="main"]',        'main'],
    ['[role="contentinfo"]', 'contentinfo'],
    ['[role="search"]',      'search'],
    ['[role="complementary"]', 'complementary'],
    ['[role="form"]',        'form'],
  ]

  for (const [pattern, label] of landmarkMap) {
    if (selectorStr.includes(pattern.toLowerCase())) return label
  }
  return null
}
