import { createClient } from '@supabase/supabase-js'

// Server-side Supabase client for Vercel serverless functions.
// Uses the service role key to bypass RLS — safe because this only runs server-side.
const supabaseUrl        = process.env.VITE_SUPABASE_URL
const serviceRoleKey     = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error('Missing Supabase env vars: VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in Vercel Environment Variables.')
}

export const supabase = createClient(supabaseUrl, serviceRoleKey)
