import { supabase } from '../supabase'

/**
 * Create a scan job record before running the scan.
 * Returns { data, error }
 */
export async function createScanJob({ auditId, scanType, url, selector = null, flowSteps = null }) {
  const { data, error } = await supabase
    .from('scan_jobs')
    .insert({
      audit_id:   auditId,
      scan_type:  scanType,
      url,
      selector,
      flow_steps: flowSteps,
      status:     'pending',
    })
    .select()
    .single()

  return { data, error }
}

/**
 * Update a scan job's status (running / complete / error).
 */
export async function updateScanJob(jobId, updates) {
  const { data, error } = await supabase
    .from('scan_jobs')
    .update(updates)
    .eq('id', jobId)
    .select()
    .single()

  return { data, error }
}

/**
 * Save the results for a completed scan job.
 */
export async function saveScanResults(jobId, results) {
  const { data, error } = await supabase
    .from('scan_results')
    .insert({
      job_id:              jobId,
      violations_json:     results.violations     ?? [],
      incomplete_json:     results.incomplete      ?? [],
      passes_json:         results.passes          ?? [],
      inapplicable_json:   results.inapplicable    ?? [],
      grouped_violations:  results.groupedViolations ?? [],
      summary:             results.summary         ?? {},
      violation_count:     results.violations?.length   ?? 0,
      incomplete_count:    results.incomplete?.length    ?? 0,
      pass_count:          results.passes?.length        ?? 0,
      inapplicable_count:  results.inapplicable?.length  ?? 0,
    })
    .select()
    .single()

  return { data, error }
}

/**
 * Fetch all scan jobs for an audit, with their results.
 */
export async function getScanJobs(auditId) {
  const { data, error } = await supabase
    .from('scan_jobs')
    .select(`
      *,
      scan_results (*)
    `)
    .eq('audit_id', auditId)
    .order('created_at', { ascending: false })

  return { data, error }
}

/**
 * Upload a screenshot to Supabase Storage and record it.
 * Returns the public URL.
 */
export async function saveScreenshot({ jobId, groupId, base64Png, description = null }) {
  const filename  = `${jobId}/${groupId}-${Date.now()}.png`
  const bucket    = 'screenshots'

  // Validate screenshot size (max 5MB)
  if (base64Png && base64Png.length > 5 * 1024 * 1024) {
    console.warn('saveScreenshot: Screenshot too large, skipping')
    return {
      error: new Error('Screenshot too large'),
      message: 'Screenshot exceeds 5MB limit, skipping upload',
      skipped: true,
    }
  }

  try {
    // Decode base64 → blob
    const byteStr   = atob(base64Png)
    const bytes     = new Uint8Array(byteStr.length)
    for (let i = 0; i < byteStr.length; i++) bytes[i] = byteStr.charCodeAt(i)
    const blob      = new Blob([bytes], { type: 'image/png' })

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filename, blob, { contentType: 'image/png', upsert: true })

    if (uploadError) {
      console.error('saveScreenshot: Upload failed:', uploadError.message)
      return {
        error: uploadError,
        message: `Failed to upload screenshot: ${uploadError.message}`
      }
    }

    // Get public URL
    const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(filename)

    if (!urlData?.publicUrl) {
      console.error('saveScreenshot: Failed to get public URL')
      return {
        error: new Error('Failed to get public URL'),
        message: 'Failed to get public URL for screenshot'
      }
    }

    // Record in screenshots table
    const { data, error } = await supabase
      .from('screenshots')
      .insert({
        job_id:       jobId,
        group_id:     groupId,
        storage_path: urlData.publicUrl,
        description,
      })
      .select()
      .single()

    if (error) {
      console.error('saveScreenshot: Failed to record screenshot:', error.message)
      return {
        error,
        message: `Failed to record screenshot: ${error.message}`,
        url: urlData.publicUrl // Return URL even if DB record failed
      }
    }

    return { data, url: urlData.publicUrl, error: null }
  } catch (err) {
    console.error('saveScreenshot: Unexpected error:', err.message)
    return {
      error: err,
      message: `Unexpected error uploading screenshot: ${err.message}`
    }
  }
}
