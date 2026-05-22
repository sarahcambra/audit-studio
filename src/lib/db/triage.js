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
    }, { onConflict: 'audit_id,job_id,group_id' })
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
