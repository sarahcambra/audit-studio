import { supabase } from '../supabase'

/**
 * Fetch all KB overrides for a user (their custom rule edits).
 */
export async function getKbOverrides(userId) {
  const { data, error } = await supabase
    .from('kb_overrides')
    .select('*')
    .eq('user_id', userId)

  return { data, error }
}

/**
 * Upsert a KB override — create or update a rule customisation.
 */
export async function saveKbOverride(userId, ruleId, updates) {
  const { data, error } = await supabase
    .from('kb_overrides')
    .upsert({
      user_id:       userId,
      rule_id:       ruleId,
      ...updates,
      updated_at:    new Date().toISOString(),
    }, { onConflict: 'user_id,rule_id' })
    .select()
    .single()

  return { data, error }
}
