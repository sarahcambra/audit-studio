import { supabase } from '../supabase'

/**
 * Upsert a triage decision for a violation group.
 * If a triage_item for this audit+job+group already exists, update it.
 */
export async function saveTriage({ auditId, jobId, groupId, ruleId, landmark, issueType, decision, dismissalReason = null, dismissalNote = null, clientFixOverride = null, auditorNotes = null }) {
  const { data, error } = await supabase
    .from('triage_items')
    .upsert({
      audit_id:             auditId,
      job_id:               jobId,
      group_id:             groupId,
      rule_id:              ruleId,
      landmark:             landmark,
      issue_type:           issueType,
      decision,
      dismissal_reason:     dismissalReason,
      dismissal_note:       dismissalNote,
      client_fix_override:  clientFixOverride,
      auditor_notes:        auditorNotes,
      updated_at:           new Date().toISOString(),
    }, { onConflict: 'audit_id,group_id' })
    .select()
    .single()

  return { data, error }
}

/**
 * Fetch all triage items for an audit.
 */
export async function getTriageItems(auditId) {
  const { data, error } = await supabase
    .from('triage_items')
    .select('*')
    .eq('audit_id', auditId)
    .order('created_at', { ascending: true })

  return { data, error }
}

/**
 * Update a single triage item (e.g. edit report notes after initial decision).
 */
export async function updateTriageItem(triageId, updates) {
  const { data, error } = await supabase
    .from('triage_items')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', triageId)
    .select()
    .single()

  return { data, error }
}

/**
 * Save auditor overrides (clientFix, fixDifficulty, badExample, goodExample, affectedUsers)
 * to the overrides_json column.
 */
export async function saveOverrides(triageId, overrides) {
  return updateTriageItem(triageId, { overrides_json: overrides })
}

/**
 * Upload a file to the triage-evidence Supabase Storage bucket.
 * Returns { url, error } — url is the public-accessible signed URL (1 hour).
 *
 * @param {string} triageId   - triage_items row id (used in storage path)
 * @param {File}   file       - File object from the input element
 */
export async function uploadEvidenceFile(triageId, file) {
  const ext      = file.name.split('.').pop()
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
  const path     = `${triageId}/${filename}`

  const { error: uploadError } = await supabase.storage
    .from('triage-evidence')
    .upload(path, file, { contentType: file.type, upsert: false })

  if (uploadError) return { url: null, path: null, error: uploadError }

  const { data: signedData, error: signError } = await supabase.storage
    .from('triage-evidence')
    .createSignedUrl(path, 60 * 60) // 1-hour signed URL

  if (signError) return { url: null, path, error: signError }

  return { url: signedData.signedUrl, path, error: null }
}

/**
 * Append new file metadata entries to the evidence_files JSONB array.
 * Fetches the current array first to avoid overwriting existing entries.
 *
 * @param {string} triageId
 * @param {{ type: string, url: string, path: string, name: string, uploadedAt: string }[]} newFiles
 */
export async function appendEvidenceFiles(triageId, newFiles) {
  // Fetch current evidence_files array
  const { data: current, error: fetchError } = await supabase
    .from('triage_items')
    .select('evidence_files')
    .eq('id', triageId)
    .single()

  if (fetchError) return { data: null, error: fetchError }

  const existing = current?.evidence_files ?? []
  return updateTriageItem(triageId, { evidence_files: [...existing, ...newFiles] })
}
