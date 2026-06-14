import { createClient } from '@supabase/supabase-js'

// Server-side Supabase client for Vercel serverless functions.
// Uses the service role key to bypass RLS — safe because this only runs server-side.
//
// NOTE: Do NOT throw here at module level — a module-level throw causes
// FUNCTION_INVOCATION_FAILED with no useful error in Vercel logs.
// Missing-env errors are caught and reported inside each handler instead.
const supabaseUrl    = process.env.VITE_SUPABASE_URL    || ''
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

// Server-side client: disable all browser-oriented auth background behaviour.
// autoRefreshToken / persistSession / detectSessionInUrl each start background
// async work that emits unhandled rejections in Node.js 24 (no browser storage,
// no navigator.locks, no URL). Unhandled rejections crash serverless processes.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  serviceRoleKey || 'placeholder',
  {
    auth: {
      persistSession:    false,   // no localStorage in Node.js
      autoRefreshToken:  false,   // no background refresh timer
      detectSessionInUrl: false,  // no URL hash parsing
    },
  }
)

/** Call this at the top of every handler to surface missing-env errors clearly. */
export function assertEnv() {
  if (!process.env.VITE_SUPABASE_URL) {
    throw new Error('Missing env var: VITE_SUPABASE_URL')
  }
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Missing env var: SUPABASE_SERVICE_ROLE_KEY')
  }
}
