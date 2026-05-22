import { supabase } from '../supabase'

/**
 * Fetch all manual checks for an audit.
 */
export async function getManualChecks(auditId) {
  const { data, error } = await supabase
    .from('manual_checks')
    .select('*')
    .eq('audit_id', auditId)
    .order('sort_order', { ascending: true })

  return { data, error }
}

/**
 * Create a manual check item (from SC scope or triage "needs manual check").
 */
export async function createManualCheck({ auditId, scId, source = 'sc', sortOrder = 0 }) {
  const { data, error } = await supabase
    .from('manual_checks')
    .insert({
      audit_id:   auditId,
      sc_id:      scId,
      source,
      status:     'untriaged',
      sort_order: sortOrder,
    })
    .select()
    .single()

  return { data, error }
}

/**
 * Update a manual check — status, notes, screenshot path, environment, browser.
 */
export async function updateManualCheck(checkId, updates) {
  const { data, error } = await supabase
    .from('manual_checks')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', checkId)
    .select()
    .single()

  return { data, error }
}

/**
 * Upload an annotated screenshot for a manual check.
 * Returns the public storage URL.
 */
export async function uploadManualCheckImage(checkId, file) {
  const ext      = file.name.split('.').pop()
  const path     = `manual-checks/${checkId}-${Date.now()}.${ext}`
  const bucket   = 'screenshots'

  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(path, file, { contentType: file.type, upsert: true })

  if (uploadError) return { error: uploadError }

  const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(path)

  // Save path on the record
  await updateManualCheck(checkId, { image_storage_path: urlData.publicUrl })

  return { url: urlData.publicUrl }
}
