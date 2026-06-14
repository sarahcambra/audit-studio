import { supabase } from '@/lib/supabase'

/**
 * Fetch catalog items for a user (their own + global defaults).
 */
export async function getCatalogItems(userId) {
  const { data, error } = await supabase
    .from('catalog_items')
    .select('*')
    .or(`user_id.eq.${userId},is_global.eq.true`)
    .order('sort_order', { ascending: true })

  return { data, error }
}

/**
 * Create a new catalog item.
 */
export async function createCatalogItem(userId, item) {
  const { data, error } = await supabase
    .from('catalog_items')
    .insert({ ...item, user_id: userId })
    .select()
    .single()

  return { data, error }
}

/**
 * Update an existing catalog item.
 */
export async function updateCatalogItem(itemId, updates) {
  const { data, error } = await supabase
    .from('catalog_items')
    .update(updates)
    .eq('id', itemId)
    .select()
    .single()

  return { data, error }
}

/**
 * Delete a catalog item.
 */
export async function deleteCatalogItem(itemId) {
  const { error } = await supabase
    .from('catalog_items')
    .delete()
    .eq('id', itemId)

  return { error }
}
