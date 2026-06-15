# Hooks Documentation

## useScanRunner
**File:** `src/features/scan/hooks/useScanRunner.js`
**Args:** `{ auditId: string, userId: string, audit: object, scResults: object, onProgress: (jobId, status, errorMessage?) => void, onError: (message) => void }`
**Returns:** `{ jobs: array, addPageScan: fn, addComponentScan: fn, addFlowScan: fn, runNextJob: fn, runAll: fn, removeJob: fn, clearCompleted: fn, isRunning: boolean, currentJobId: string|null, historyError: string|null }`
**Purpose:** Manages sequential scan execution via the Vercel API. Replaces polling with Supabase Realtime subscriptions for instant job-status updates.
**API calls:**
- `POST /api/scan` — enqueues a new scan job (with retry up to 3 attempts)
- Supabase Realtime `postgres_changes` subscription on `scan_jobs` table per job
- `supabase.from('scan_jobs').select(...)` for SUBSCRIBED catch-up, 30s backup check, and 10-min watchdog
- `supabase.from('scan_results').select('*').eq('job_id', ...).single()` to fetch full results on completion
- `supabase.from('scan_jobs').update(...)` in watchdog to mark stale jobs as error
- `supabase.from('scan_jobs').select(...)` with nested `scan_results` to load history on mount
**Used by:** `ScanPanel`

---

## AuthProvider / useAuth
**File:** `src/features/auth/AuthProvider.jsx`
**Args:** `{ children: ReactNode }`
**Returns (useAuth):** `{ user: object|null, profile: object|null, loading: boolean, signInWithGitHub: () => Promise, signInWithGoogle: () => Promise, signOut: () => Promise }`
**Purpose:** Provides Supabase-based authentication context with session initialization, profile fetching, and OAuth sign-in helpers.
**API calls:**
- `supabase.auth.getSession()` — initial session
- `supabase.auth.onAuthStateChange(...)` — subscription for auth events
- `supabase.from('profiles').select('*').eq('id', userId).single()` — profile fetch
- `supabase.auth.signInWithOAuth({ provider: 'github' | 'google' })` — OAuth login
- `supabase.auth.signOut()` — logout
**Used by:** `ApplicationShell`, `AuditDetailPage`, `AuditsPage`

---

## useToast
**File:** `src/shared/context/ToastContext.jsx`
**Args:** None (consumes `ToastContext`)
**Returns:** `{ toast: { success, error, warning, info } }`
**Purpose:** Provides memoised toast helpers that add/remove notifications from a global bottom-right stack.
**API calls:** None (pure client-side state)
**Used by:** `ScanPanel`, `AuditsPage`
