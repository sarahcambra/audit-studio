import { createClient } from '@supabase/supabase-js'
import ws from 'ws'

// Server-side Supabase client for Firebase Cloud Functions.
// Uses the service role key to bypass RLS — safe because this only runs server-side.
//
// Env vars (set via Firebase Functions config or Secret Manager):
//   SUPABASE_URL            — Supabase project URL
//   SUPABASE_SERVICE_ROLE_KEY — Service role key (sensitive — use Secret Manager in prod)
const supabaseUrl    = process.env.SUPABASE_URL || ''
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  serviceRoleKey || 'placeholder',
  {
    auth: {
      persistSession:     false,
      autoRefreshToken:   false,
      detectSessionInUrl: false,
    },
    realtime: {
      transport: ws,
    },
  }
)

export function assertEnv() {
  if (!process.env.SUPABASE_URL) {
    throw new Error('Missing env var: SUPABASE_URL')
  }
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Missing env var: SUPABASE_SERVICE_ROLE_KEY')
  }
}
