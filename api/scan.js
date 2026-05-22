import { supabase } from '../supabaseClient'
import { runStaticScan, runComponentScan, runFlowScan } from '../src/lib/axeRunner'
import { groupViolations } from '../src/lib/groupViolations'
import { enrichResults } from '../src/lib/enrichViolations'

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
