import { supabase } from '../supabase'

/**
 * Create a new audit from the wizard form data.
 * Returns { data, error }
 */
export async function createAudit(userId, form) {
  const payload = {
    user_id:           userId,
    name:              form.auditName,
    wcag_version:      form.wcagVersion,
    conformance_level: form.conformanceLevel,
    pre_test_answers:  form.preTestAnswers ?? {},
    project_name:      form.projectName   ?? null,
    client_name:       form.clientName    ?? null,
    website_url:       form.websiteUrl    ?? null,
    notes:             form.notes         ?? null,
    scope_json:        { items: form.scopeItems ?? [] },
    audit_goal:        form.description   ?? null,
    is_draft:          false,
    status:            'active',
    started_at:        new Date().toISOString(),
  }

  const { data, error } = await supabase
    .from('audits')
    .insert(payload)
    .select()
    .single()

  return { data, error }
}

/**
 * Fetch all audits for a user, newest first.
 */
export async function getAudits(userId) {
  const { data, error } = await supabase
    .from('audit_summary')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  return { data, error }
}

/**
 * Fetch a single audit by ID.
 */
export async function getAudit(auditId) {
  const { data, error } = await supabase
    .from('audit_summary')
    .select('*')
    .eq('id', auditId)
    .single()

  return { data, error }
}

/**
 * Update an audit's status or any field.
 */
export async function updateAudit(auditId, updates) {
  const { data, error } = await supabase
    .from('audits')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', auditId)
    .select()
    .single()

  return { data, error }
}

/**
 * Archive an audit.
 */
export async function archiveAudit(auditId) {
  return updateAudit(auditId, { status: 'archived' })
}
