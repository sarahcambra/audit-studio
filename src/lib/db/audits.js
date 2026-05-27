import { supabase } from '../supabase'

/**
 * Create a new audit from the wizard form data.
 * Returns { data, error }
 */
export async function createAudit(userId, form) {
  // DB constraint: wcag_version only accepts '2.1' or '2.2' (no 'WCAG ' prefix).
  // The form stores 'WCAG 2.2' for client-side logic, so strip the prefix here.
  const wcagVersionDb = (form.wcagVersion ?? '2.2').replace(/^WCAG\s+/i, '')

  const payload = {
    user_id:           userId,
    name:              form.auditName,
    wcag_version:      wcagVersionDb,
    conformance_level: form.conformanceLevel,
    pre_test_answers:  form.preTestAnswers ?? {},
    project_name:      form.projectName   ?? null,
    client_name:       form.clientName    ?? null,
    website_url:       form.websiteUrl    ?? null,
    notes:             form.notes         ?? null,
    scope_json:        { items: form.scopeItems ?? [] },
    audit_goal:        form.auditGoal     ?? null,
    is_draft:          false,
    status:            'active',
    started_at:        new Date().toISOString(),
  }

  const { data, error } = await supabase
    .from('audits')
    .insert(payload)
    .select()
    .single()

  if (error) {
    // Log full error details to the console so developers can diagnose
    // Supabase schema mismatches, RLS failures, or missing columns.
    console.error('[createAudit] Supabase error:', {
      message: error.message,
      code:    error.code,
      details: error.details,
      hint:    error.hint,
    })
  }

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
 * Merges audit_summary (computed stats) with the raw audits row
 * so that JSONB fields like scope_json, pre_test_answers, and notes
 * are always present even if the view omits them.
 */
export async function getAudit(auditId) {
  const [summaryResult, rawResult] = await Promise.all([
    supabase
      .from('audit_summary')
      .select('*')
      .eq('id', auditId)
      .single(),
    supabase
      .from('audits')
      .select('scope_json, pre_test_answers, notes, website_url, audit_goal')
      .eq('id', auditId)
      .single(),
  ])

  if (summaryResult.error) return { data: null, error: summaryResult.error }

  // Merge: summary fields first, then raw fields override (raw is source of truth for JSONB)
  const data = {
    ...summaryResult.data,
    ...(rawResult.data ?? {}),
  }

  return { data, error: null }
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

/**
 * Save the resolved favicon/site image URL for an audit.
 * Called fire-and-forget after audit creation.
 */
export async function updateAuditFavicon(auditId, faviconUrl) {
  return supabase
    .from('audits')
    .update({ favicon_url: faviconUrl, updated_at: new Date().toISOString() })
    .eq('id', auditId)
}
