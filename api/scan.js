import { supabase } from './lib/supabaseClient.js'
import { runStaticScan, runComponentScan, runFlowScan, mapTagsToSC } from './lib/axeRunner.js'
import { groupViolations } from '../src/lib/groupViolations.js'
import { enrichResults } from '../src/lib/enrichViolations.js'
import { WCAG_SC_DATA, getAlwaysManualSCs } from '../src/lib/wcagScData.js'
import { getAllSCsForTarget } from '../src/lib/scCount.js'

async function logActivity(auditId, userId, action, description, metadata = {}) {
  await supabase.from('audit_activity_log').insert({
    audit_id: auditId,
    user_id: userId,
    action,
    description,
    metadata,
  })
}

async function updateScanJobStatus(jobId, status, errorMessage = null) {
  const update = {
    status,
    completed_at: status === 'complete' || status === 'error' ? new Date() : null,
  }
  if (errorMessage) update.error_message = errorMessage

  await supabase.from('scan_jobs').update(update).eq('id', jobId)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const {
    auditId,
    userId,
    scanType, // 'page', 'component', 'flow'
    url,
    selector,
    steps,
    scanName,
    wcagVersion,
    conformanceLevel,
    activeSCList,
    // inScope - reserved for future use
  } = req.body

  // Validate required fields (userId is optional)
  if (!auditId || !scanType || !url) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    // Create scan job record
    const { data: jobData, error: jobError } = await supabase
      .from('scan_jobs')
      .insert({
        audit_id: auditId,
        scan_type: scanType,
        url,
        selector: scanType === 'component' ? selector : null,
        flow_steps: scanType === 'flow' ? steps : null,
        status: 'running',
        started_at: new Date(),
      })
      .select('id')
      .single()

    if (jobError) throw new Error(`Failed to create job: ${jobError.message}`)
    const jobId = jobData.id

    // Log scan started
    await logActivity(
      auditId,
      userId,
      'scan_started',
      `${scanType} scan started on ${url}`,
      { scanType, jobId }
    )

    // Run appropriate scan
    let scanResult
    if (scanType === 'page') {
      scanResult = await runStaticScan({
        url,
        wcagVersion,
        conformanceLevel,
        activeSCList,
      })
    } else if (scanType === 'component') {
      scanResult = await runComponentScan({
        url,
        selector,
        wcagVersion,
        conformanceLevel,
        activeSCList,
      })
    } else if (scanType === 'flow') {
      scanResult = await runFlowScan({
        url,
        steps,
        wcagVersion,
        conformanceLevel,
        activeSCList,
      })
    } else {
      throw new Error(`Unknown scan type: ${scanType}`)
    }

    // Debug: log raw axe output before enrichment
    console.log('[scan] wcagVersion:', wcagVersion, '| conformanceLevel:', conformanceLevel)
    console.log('[scan] raw violations:', scanResult?.violations?.length ?? 'N/A', '| incomplete:', scanResult?.incomplete?.length ?? 'N/A')

    // Enrich violations
    const enrichedResult = enrichResults(scanResult, wcagVersion, conformanceLevel)

    // Group violations
    const groupedViolations = groupViolations(
      enrichedResult.violations,
      wcagVersion,
      conformanceLevel
    )

    // Count results
    const violationCount = enrichedResult.violations.length
    const incompleteCount = enrichedResult.incomplete.length
    const passCount = enrichedResult.passes.length
    const inapplicableCount = enrichedResult.inapplicable.length

    // Write scan results to Supabase
    const { error: resultsError } = await supabase.from('scan_results').insert({
      job_id: jobId,
      violations_json: enrichedResult.violations,
      incomplete_json: enrichedResult.incomplete,
      passes_json: enrichedResult.passes,
      inapplicable_json: enrichedResult.inapplicable,
      grouped_violations: groupedViolations,
      summary: {
        scanName,
        scanType,
        url,
        selector: scanType === 'component' ? selector : null,
        totalViolations: violationCount,
        totalIncomplete: incompleteCount,
        totalPasses: passCount,
        totalInapplicable: inapplicableCount,
        wcagVersion,
        conformanceLevel,
      },
      violation_count: violationCount,
      incomplete_count: incompleteCount,
      pass_count: passCount,
      inapplicable_count: inapplicableCount,
    })

    if (resultsError) throw new Error(`Failed to store results: ${resultsError.message}`)

    // Auto-create triage items (one row per violation group, decision = 'pending')
    // Uses upsert so re-running a scan on the same job is safe
    if (groupedViolations.length > 0) {
      const triageRows = groupedViolations.map(group => ({
        audit_id:        auditId,
        job_id:          jobId,
        group_id:        group.groupId,
        rule_id:         group.ruleId,
        landmark:        group.landmark,
        issue_type:      group.issueType,
        impact:          group.impact,
        page_name:       scanName || url,
        selector:        scanType === 'component' ? (selector || null) : null,
        tags:            group.tags || [],
        wcag_sc:         group.scIds?.[0] || null,
        sc_ids:          group.scIds || [],
        node_count:      group.nodeCount,
        element_snippet: group.nodes?.[0]?.html || null,
        decision:        null,
        updated_at:      new Date().toISOString(),
      }))

      const { error: triageInsertError } = await supabase
        .from('triage_items')
        .upsert(triageRows, { onConflict: 'audit_id,group_id' })

      if (triageInsertError) {
        // Non-fatal — scan results are already stored
        console.error('[scan] Failed to create triage items:', triageInsertError.message)
      }
    }

    // ── Upload screenshot + stamp triage items ────────────────────────────
    // One full-page screenshot per scan job, shared by all triage items.
    // Non-fatal — scan is already saved if this fails.
    if (scanResult.screenshotBase64) {
      try {
        const filename = `${jobId}/page-${Date.now()}.png`
        const byteStr  = atob(scanResult.screenshotBase64)
        const bytes    = new Uint8Array(byteStr.length)
        for (let i = 0; i < byteStr.length; i++) bytes[i] = byteStr.charCodeAt(i)

        const { error: uploadErr } = await supabase.storage
          .from('screenshots')
          .upload(filename, bytes, { contentType: 'image/png', upsert: true })

        if (uploadErr) {
          console.warn('[scan] Screenshot upload failed (non-fatal):', uploadErr.message)
        } else {
          const { data: urlData } = supabase.storage.from('screenshots').getPublicUrl(filename)
          const screenshotUrl = urlData?.publicUrl

          if (screenshotUrl) {
            // Stamp all triage items created by this job with the screenshot URL
            await supabase
              .from('triage_items')
              .update({ screenshot_url: screenshotUrl })
              .eq('job_id', jobId)

            console.log(`[scan] Screenshot uploaded → ${filename}`)
          }
        }
      } catch (shotErr) {
        console.warn('[scan] Screenshot processing error (non-fatal):', shotErr.message)
      }
    }

    // ── Auto-populate manual_checks ────────────────────────────────────────
    // Build one manual_check row per SC that needs attention, from all sources:
    //   1. Violation groups → SC has failures   → auto_status = 'fail'
    //   2. Incomplete items → SC needs review   → auto_status = 'needs-check'
    //   3. Inapplicable     → SC was N/A        → auto_status = 'na'
    //   4. Always-manual SCs (axe can't test)   → auto_status = 'always-manual'
    //
    // Priority (highest wins): fail > needs-check > na > always-manual
    // Upsert on (audit_id, sc_id) — subsequent scans update counts, not verdict.
    try {
      const scMap = new Map() // scId → { autoStatus, source, scName, wcagLevel }

      const priorityOf = s => ({ fail: 4, 'needs-check': 3, na: 2, 'always-manual': 1, pass: 0 })[s] ?? 0

      const setOrUpgrade = (scId, autoStatus, source) => {
        const scInfo = WCAG_SC_DATA[scId]
        const existing = scMap.get(scId)
        if (!existing || priorityOf(autoStatus) > priorityOf(existing.autoStatus)) {
          scMap.set(scId, {
            autoStatus,
            source,
            scName:    scInfo?.name    ?? scId,
            wcagLevel: scInfo?.level   ?? '?',
          })
        } else if (existing && existing.source !== source) {
          // Multiple sources → mark as mixed
          existing.source = 'mixed'
        }
      }

      // Source 1: violation groups
      for (const group of groupedViolations) {
        for (const scId of (group.scIds || [])) {
          setOrUpgrade(scId, 'fail', 'axe-violations')
        }
        // Best-practice groups have no scIds — skip them for SC-level tracking
      }

      // Source 2: incomplete items — group and extract SCs
      const incompleteGroups = groupViolations(enrichedResult.incomplete || [], wcagVersion, conformanceLevel)
      for (const group of incompleteGroups) {
        for (const scId of (group.scIds || [])) {
          setOrUpgrade(scId, 'needs-check', 'axe-incomplete')
        }
      }

      // Source 3: inapplicable — extract SCs from axe tags
      for (const item of (enrichedResult.inapplicable || [])) {
        for (const scId of mapTagsToSC(item.tags || [])) {
          setOrUpgrade(scId, 'na', 'axe-na')
        }
      }

      // Source 4: always-manual SCs within this audit's scope
      const scopedSCs = getAllSCsForTarget(wcagVersion, conformanceLevel)
      for (const scId of getAlwaysManualSCs()) {
        if (scopedSCs.has(scId)) {
          setOrUpgrade(scId, 'always-manual', 'always-manual')
        }
      }

      if (scMap.size > 0) {
        const manualRows = Array.from(scMap.entries()).map(([scId, info]) => ({
          audit_id:     auditId,
          sc_id:        scId,
          sc_name:      info.scName,
          wcag_level:   info.wcagLevel,
          source:       info.source,
          auto_status:  info.autoStatus,
          status:       'untriaged',        // user-visible status (legacy column)
          sort_order:   Number(scId.replace(/\./g, '')) || 0,
          updated_at:   new Date().toISOString(),
        }))

        const { error: manualInsertError } = await supabase
          .from('manual_checks')
          .upsert(manualRows, {
            onConflict:       'audit_id,sc_id',
            ignoreDuplicates: false,
          })

        if (manualInsertError) {
          console.error('[scan] Failed to upsert manual_checks:', manualInsertError.message)
        } else {
          console.log(`[scan] Upserted ${manualRows.length} manual_checks rows`)
        }
      }
    } catch (manualErr) {
      // Never let manual-check seeding block the scan response
      console.error('[scan] manual_checks seeding error:', manualErr.message)
    }

    // Update job status to complete
    await updateScanJobStatus(jobId, 'complete')

    // Log scan completed
    await logActivity(
      auditId,
      userId,
      'scan_completed',
      `${scanType} scan completed. Found ${violationCount} violations, ${incompleteCount} need review`,
      { scanType, jobId, violationCount, incompleteCount }
    )

    return res.status(200).json({
      success: true,
      jobId,
      summary: {
        violationCount,
        incompleteCount,
        passCount,
        inapplicableCount,
      },
    })
  } catch (error) {
    console.error('Scan error:', error)

    // Try to log error activity
    // Note: jobId would need to be passed back from job creation to update status
    try {
      await logActivity(auditId, userId, 'scan_failed', `Scan failed: ${error.message}`)
    } catch (logError) {
      console.error('Failed to log error:', logError)
    }

    return res.status(500).json({
      error: 'Scan failed',
      message: error.message,
    })
  }
}
