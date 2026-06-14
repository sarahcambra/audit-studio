# Audit Studio — Technical Audit & Remediation Plan
**Generated:** 2026-05-29  
**Standard:** `modern-web-guidance` (v2026_05_16-c5e7870)  
**Scope:** Full codebase + DB/code alignment, all CTAs and flows verified  

---

## ✅ Previous Plan Status — What's Already Fixed

The `REMEDIATION_PLAN.md` (2026-05-28) listed C-1 through C-3 and several High/Medium items.
A fresh read of the code shows **all of those are already in the codebase** (applied 2026-05-28):

| Previous Item | Status |
|---|---|
| C-1 Security headers in vercel.json | ✅ Fixed — X-Frame-Options, nosniff, COOP, CSP-RO all present |
| C-2 Auth ownership check in api/scan.js | ✅ Fixed — JWT verify + `.eq('user_id', user.id)` in place |
| C-3 Rate limiting on /api/scan | ✅ Fixed — 10/min per audit, counts `started_at` window |
| H-1 Code splitting (lazy imports) | ✅ Fixed — App.jsx uses `lazy()` for all page components |
| H-2 Skip link in ApplicationShell | ✅ Fixed — `<a href="#main-content">` + `id="main-content"` present |
| H-3 Login button `type="button"` | ✅ Fixed — both buttons have `type="button"` |
| M-1 vite.config process.env fix | ✅ Fixed — explicit `NODE_ENV` mapping + `build.target: 'es2022'` |
| scan-worker .catch() → .then(null) | ✅ Fixed in code — **but NOT deployed (see C-1 below)** |

---

## Summary Table — Fresh Findings

| Category | Status | Critical | High | Medium | Low |
|---|---|---|---|---|---|
| Control Flow | ⚠️ Bugs | 1 | 1 | 1 | 0 |
| Error Handling | ⚠️ Partial | 0 | 1 | 1 | 0 |
| UX / Interactions | ❌ Broken CTAs | 2 | 1 | 1 | 1 |
| Data Integrity | ❌ DB Misalignment | 1 | 1 | 1 | 0 |
| Lint / Code Quality | ⚠️ Needs Work | 1 | 0 | 2 | 1 |
| Security | ✅ Mostly Good | 0 | 1 | 0 | 0 |
| Infra / Config | ⚠️ Partial | 1 | 0 | 1 | 1 |
| React Runtime | ⚠️ Warnings | 0 | 0 | 2 | 0 |
| Missing Functionalities | ❌ Gaps | 0 | 2 | 1 | 0 |
| Accessibility (a11y) | ⚠️ Partial | 0 | 1 | 2 | 0 |
| Documentation | ✅ Adequate | 0 | 0 | 1 | 0 |
| Performance | ✅ Good | 0 | 0 | 1 | 1 |
| Tests | ⚠️ Partial | 0 | 0 | 2 | 0 |
| Browser Compatibility | ✅ Good | 0 | 0 | 0 | 1 |

**Total: 6 Critical · 7 High · 16 Medium · 5 Low**

---

## 🔴 CRITICAL — Blocking / Data Loss / Runtime Crashes

---

### C-1 · Infra · scan-worker Fix Is in Code But Not Deployed

**File:** `scan-worker/index.js` | **CLAUDE.md lines 86–110**

The `.then(null, () => {})` fix for the `postgrest-js` `.catch()` crash **has been applied to the source file** — all Supabase fire-and-forget chains now use the correct pattern. However, CLAUDE.md explicitly marks this as "NOT yet deployed." The running Railway instance still has the old code that crashes before writing `status = 'complete'`, which is why scans get stuck on "Processing results."

**This is the root cause of the scan completion bug.** Nothing else needs to change — just run:

```bash
cd /Users/sarah/auditV2/scan-worker && railway up
```

Then verify in Supabase Dashboard → Table Editor → `scan_jobs` that `status` transitions to `complete`.

---

### C-2 · Lint / Runtime Crash · `ChevronDown` Not Imported in AuditDetailPage

**File:** `src/pages/AuditDetailPage.jsx` — line 403, imports at lines 9–15

`ChevronDown` is used in `ManualChecksTab` to render the expand/collapse chevron:

```jsx
// line 403
<ChevronDown className="h-4 w-4" aria-hidden="true" />
```

But the import block only includes `ChevronRight`:

```jsx
import {
  ArrowLeft, ChevronRight, Home,
  Clock, FileSearch, RefreshCw, Search, ClipboardList,
} from 'lucide-react'
```

**Effect:** Clicking "Expand" on any Manual Check row throws `ReferenceError: ChevronDown is not defined`, crashing the ManualChecksTab via the ErrorBoundary. The entire Manual Checks tab becomes unusable.

**Fix:**

```jsx
import {
  ArrowLeft, ChevronRight, ChevronDown, Home,
  Clock, FileSearch, RefreshCw, Search, ClipboardList,
} from 'lucide-react'
```

---

### C-3 · Data Integrity · `blocking_count` Missing from `audit_summary` View

**File:** `supabase/audit_summary_view.sql` + `src/pages/AuditsPage.jsx` lines 108, 625

`AuditsPage.jsx` references `audit.blocking_count` in `BlockingBadge` and `stats.blocking` in the tab badge — but the `audit_summary` view SQL contains no such column. Every row returns `undefined` for `blocking_count`, so:

- `BlockingBadge` always falls through to "Awaiting review" (never shows correct triaged/blocking state)
- The "Needs triage" tab count badge (`stats.blocking`) is always falsy and never renders

The view needs this column. "Blocking" issues are confirmed WCAG failures that are untriaged — a reasonable definition aligned with how the code uses `critical_count` and `untriaged_count`:

```sql
-- Add to audit_summary_view.sql (alongside the existing computed columns)
  (
    SELECT COUNT(*) FROM public.triage_items ti
    WHERE ti.audit_id = a.id
      AND ti.decision IS NULL
      AND ti.issue_type IN ('failure', 'failure, needs review')
      AND ti.impact IN ('critical', 'serious')
  ) AS blocking_count,
```

Run `DROP VIEW IF EXISTS public.audit_summary; CREATE OR REPLACE VIEW ...` with the updated SQL.

---

### C-4 · UX · Delete CTA Is a No-Op Stub

**File:** `src/pages/AuditsPage.jsx` lines 335–337

The delete confirmation modal renders and the "Delete" button calls `handleDelete`, but the handler does nothing except close the modal:

```javascript
const handleDelete = () => {
  setDeleteTarget(null)   // ← modal closes, audit is NOT deleted
}
```

There is no `deleteAudit` function in `src/lib/db/audits.js` either. Users who click Delete believe the audit was deleted — it isn't.

**Fix — add to `src/lib/db/audits.js`:**

```javascript
export async function deleteAudit(auditId) {
  const { error } = await supabase
    .from('audits')
    .delete()
    .eq('id', auditId)
  return { error }
}
```

**Fix — wire up in `AuditsPage.jsx`:**

```javascript
import { getAudits, archiveAudit, updateAudit, deleteAudit } from '../lib/db/audits'

const handleDelete = async () => {
  if (!deleteTarget) return
  const { error } = await deleteAudit(deleteTarget.id)
  if (!error) {
    setAudits(prev => prev.filter(a => a.id !== deleteTarget.id))
  }
  setDeleteTarget(null)
}
```

Note: RLS already has `DELETE` policy on `audits` — this will work without any DB changes.

---

### C-5 · UX · User Dropdown Not Connected to Real Auth

**File:** `src/components/ApplicationShell.jsx` — navbar user dropdown

The user dropdown shows hardcoded placeholder data and the "Sign out" item has no handler:

```jsx
<DropdownHeader>
  <span className="block text-sm font-semibold">User Name</span>         {/* hardcoded */}
  <span className="block truncate text-xs">user@example.com</span>       {/* hardcoded */}
</DropdownHeader>
<DropdownItem>My profile</DropdownItem>
<DropdownItem>Account settings</DropdownItem>
<DropdownDivider />
<DropdownItem>Sign out</DropdownItem>   {/* no onClick */}
```

There is no `useAuth()` call in ApplicationShell, so the user can never sign out from the UI.

**Fix — add to `ApplicationShell.jsx`:**

```jsx
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

// inside the component:
const { user, profile, signOut } = useAuth()
const navigate = useNavigate()

const handleSignOut = async () => {
  await signOut()
  navigate('/login')
}
```

Then replace the hardcoded dropdown content:

```jsx
<DropdownHeader className="px-4 py-3">
  <span className="block text-sm font-semibold">
    {profile?.full_name ?? user?.email?.split('@')[0] ?? 'User'}
  </span>
  <span className="block truncate text-xs text-gray-500">
    {user?.email ?? ''}
  </span>
</DropdownHeader>
<DropdownItem onClick={() => navigate('/users/profile')}>My profile</DropdownItem>
<DropdownDivider />
<DropdownItem onClick={handleSignOut}>Sign out</DropdownItem>
```

Also update the `<Avatar>` to use the real avatar:

```jsx
<Avatar
  alt={profile?.full_name ?? 'User'}
  img={profile?.avatar_url || undefined}
  rounded
  size="sm"
/>
```

---

### C-6 · Control Flow · `groupViolations` Ignores wcagVersion/conformanceLevel Arguments

**File:** `scan-worker/index.js` lines 371 vs 119, 150

The function is called with three arguments:

```javascript
const groupedViolations = groupViolations(enrichedResult.violations, wcagVersion, conformanceLevel)
```

But the function signature only accepts one:

```javascript
function groupViolations(violations) {   // wcagVersion, conformanceLevel silently ignored
```

This means the grouper has no way to filter or tag groups differently based on WCAG version. Currently all scans are grouped the same way regardless of whether the audit is 2.1-A or 2.2-AA. This is a data integrity issue: grouped violations for an A-level audit include AA rules that shouldn't count as failures.

**Fix — update the function signature and filter by conformance:**

```javascript
function groupViolations(violations, wcagVersion = '2.2', conformanceLevel = 'AA') {
  const allowedTags = buildAxeTags(wcagVersion, conformanceLevel)
  const groups = new Map()

  for (const violation of (violations ?? [])) {
    // Only group violations that match the audit's WCAG scope
    const matchesScope = (violation.tags ?? []).some(t => allowedTags.includes(t))
    if (!matchesScope) continue

    // ... rest of grouping logic unchanged
  }
  return Array.from(groups.values())
}
```

---

## 🟠 HIGH — Fix in the Next Sprint

---

### H-1 · Missing Functionality · Sidebar Nav Links to Non-Existent Routes

**File:** `src/components/ApplicationShell.jsx` — `SidebarNav` component

The sidebar contains links to routes that have no corresponding `<Route>` in `App.jsx`:

| Link | Route in App.jsx |
|---|---|
| `/reports/audits` | ❌ None |
| `/reports/compliance` | ❌ None |
| `/reports/export` | ❌ None |
| `/knowledge/sc-library` | ❌ None |
| `/knowledge/patterns` | ❌ None |
| `/knowledge/fix-templates` | ❌ None |
| `/knowledge/component-catalog` | ❌ None |
| `/settings/team` | ❌ None |
| `/settings/branding` | ❌ None |
| `/settings/notifications` | ❌ None |
| `/audits/projects` | ❌ None |
| `/audits/archived` | ❌ None |

Clicking any of these renders a blank white screen (React Router matches `/*` but no sub-route renders anything). This looks like a broken product to first-time users.

**Short-term fix** — Either add placeholder pages or disable/hide unimplemented links:

```jsx
// In ApplicationShell.jsx, add a catch-all within the protected routes in App.jsx:
<Route path="*" element={<NotFoundPage />} />
```

Or mark unimplemented nav items visually:

```jsx
<SubNavItem href="/reports/audits" label="Audit reports" isActive={false} disabled />
```

**Long-term:** Implement the missing pages or remove the nav items until they're built.

---

### H-2 · Security · Rate Limit Is Per-Audit, Not Per-User

**File:** `api/scan.js` lines 107–118

The rate limit counts jobs for a specific `audit_id`, not for the authenticated `user.id`:

```javascript
const { count } = await supabase
  .from('scan_jobs')
  .select('id', { count: 'exact', head: true })
  .eq('audit_id', auditId)       // ← per-audit, not per-user
  .gte('started_at', windowStart)
```

A user with 20 audits can fire 200 scans per minute (10 per audit × 20 audits), overwhelming the Railway worker.

**Fix — change to per-user count using a subquery join:**

```javascript
// Count all scan_jobs across ALL audits owned by this user in the window
const { count } = await supabase
  .from('scan_jobs')
  .select('id', { count: 'exact', head: true })
  .in('audit_id',
    supabase.from('audits').select('id').eq('user_id', user.id)
  )
  .gte('started_at', windowStart)

if (count >= RATE_LIMIT_MAX) {
  return res.status(429).json({ error: `Rate limit exceeded. Maximum ${RATE_LIMIT_MAX} scans per minute per user.` })
}
```

---

### H-3 · Error Handling · No User-Facing Error Feedback

**Files:** Multiple — `src/lib/db/audits.js`, `src/context/AuthContext.jsx`, `src/pages/AuditsPage.jsx`

All database errors are logged to `console.error` only. When `createAudit` fails (e.g., DB schema mismatch, RLS violation), `NewAuditWizard.jsx` receives `{ data: null, error }` but renders nothing to the user — the wizard just stays on the last step silently. Similarly, `getAudits` errors in `AuditsPage.jsx` are swallowed (the `setLoading(false)` fires but no error state is set or shown).

**Fix — add a lightweight error-toast pattern (no new dependencies needed, using Flowbite's `Toast` component):**

```jsx
// src/context/ToastContext.jsx
import { createContext, useContext, useState, useCallback } from 'react'
import { Toast } from 'flowbite-react'
import { XCircle } from 'lucide-react'

const ToastCtx = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const show = useCallback((message, type = 'error') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 5000)
  }, [])
  return (
    <ToastCtx.Provider value={{ show }}>
      {children}
      <div role="status" aria-live="polite" aria-atomic="false"
           className="fixed bottom-4 right-4 z-50 space-y-2">
        {toasts.map(t => (
          <Toast key={t.id}>
            <XCircle className="h-5 w-5 text-red-500" />
            <div className="ml-3 text-sm font-normal">{t.message}</div>
          </Toast>
        ))}
      </div>
    </ToastCtx.Provider>
  )
}
export const useToast = () => useContext(ToastCtx)
```

Wire into `NewAuditWizard.jsx`, `AuditsPage.jsx`, and `AuthContext.jsx` error paths.

---

### H-4 · Missing Functionality · Report Tab "Generate Report" Is Permanently Disabled

**File:** `src/pages/AuditDetailPage.jsx` — `ReportTab` component

The Report tab button is `disabled` with no path to enable it:

```jsx
<Button color="primary" size="sm" className="mt-5" disabled>
  Generate Report
</Button>
```

There is no condition that enables it (e.g., "all triage items resolved"). Users who complete an entire audit have no way to generate output. This is a core feature gap.

**Minimum viable fix** — enable the button when all triage items are resolved and show what triggers it:

```jsx
function ReportTab({ audit, auditId }) {
  const [triageItems, setTriageItems] = useState([])
  useEffect(() => {
    getTriageItems(auditId).then(({ data }) => setTriageItems(data ?? []))
  }, [auditId])

  const allResolved = triageItems.length > 0 &&
    triageItems.every(ti => ti.decision !== null)

  return (
    // ...
    <Button color="primary" size="sm" disabled={!allResolved}
      title={!allResolved ? 'Resolve all triage items first' : ''}>
      Generate Report
    </Button>
  )
}
```

---

### H-5 · Accessibility · `aria-invalid` Missing on Wizard Form Inputs

**Files:** `src/components/wizard/Step1Info.jsx`, `Step2ProjectDetails.jsx`, `Step3PreTest.jsx`, `Step4Scope.jsx`

`showValidationErrors` is passed to all wizard steps but none of the Flowbite `<TextInput>` components receive `aria-invalid="true"` when validation fails. Screen readers cannot detect the error state.

Per `modern-web-guidance/guides/forms/validate-input-after-interaction.md`: native `:user-invalid` does not auto-sync ARIA attributes. JS must keep `aria-invalid` in sync.

**Fix pattern (apply to all validated inputs):**

```jsx
<TextInput
  id="audit-name"
  value={form.auditName}
  onChange={e => updateForm({ auditName: e.target.value })}
  aria-invalid={showValidationErrors && !form.auditName?.trim() ? 'true' : 'false'}
  aria-describedby="audit-name-error"
  color={showValidationErrors && !form.auditName?.trim() ? 'failure' : 'gray'}
/>
{showValidationErrors && !form.auditName?.trim() && (
  <p id="audit-name-error" role="alert" className="mt-1 text-xs text-red-600">
    Audit name is required
  </p>
)}
```

---

## 🟡 MEDIUM — Fix Within Two Sprints

---

### M-1 · Control Flow · Wizard "Back" Clears Errors Only for Step 1

**File:** `src/components/NewAuditWizard.jsx` line 149

`handleBack()` sets `setShowValidationErrors(false)` only when navigating back to step 1. Steps 2–4 preserve errors on back-navigation. This inconsistency means:
- Fill step 1 wrongly → go forward → come back → errors gone (user can bypass step 1 validation)

**Fix:**

```javascript
const handleBack = () => {
  setCurrentStep(s => Math.max(1, s - 1))
  // Don't reset showValidationErrors — errors persist across back navigation
  // They will clear naturally when the user fixes the invalid fields
}
```

---

### M-2 · Data Integrity · `triage_items.screenshot_url` Column Not in Migration Files

**File:** `scan-worker/index.js` line ~170

The worker updates `screenshot_url` on triage_items after a screenshot upload:

```javascript
await supabase.from('triage_items').update({ screenshot_url: urlData.publicUrl }).eq('job_id', jobId)
```

None of the SQL migration files in `/supabase/` define this column on `triage_items`. If it wasn't added manually via the Supabase dashboard, this update silently fails (Supabase returns a `42703 column does not exist` error which the worker catches non-fatally).

**Fix — add to a new migration file `supabase/migration_screenshot_url.sql`:**

```sql
ALTER TABLE public.triage_items
  ADD COLUMN IF NOT EXISTS screenshot_url text;
```

---

### M-3 · Data Integrity · `scan_jobs` Created with `status: 'running'` Before Worker Runs

**File:** `api/scan.js` line ~145

The Vercel API creates the `scan_jobs` row with `status: 'running'` and `started_at: new Date()`. The Railway worker then also sets `status: 'running'` when it starts. This means:

1. The rate limiter counts jobs from `started_at` — which is correct.
2. But if the worker is down when the Vercel function fires, the job row shows `running` permanently with no `error` state (the worker-unreachable handler does update it, but the `fetch().then(null, err => {...})` runs async after the response is already sent and can fail silently if the Vercel function instance recycles before the rejection fires).

**Recommendation:** Create jobs with `status: 'pending'` and let the worker set `running`. The rate-limit query should then use `created_at` instead of `started_at`:

```javascript
// api/scan.js — create with pending
.insert({ ..., status: 'pending', started_at: null })

// rate limiter
.gte('created_at', windowStart)
```

---

### M-4 · React Runtime · Fragment Keys in ManualChecksTab Cause React Warnings

**File:** `src/pages/AuditDetailPage.jsx` — `ManualChecksTab` table body

The table body maps over principles and uses `<>` fragments with `key` props, but React keys on fragments (`<> key={...}`) are not supported — keys must be on a real element or `<React.Fragment key={...}>`:

```jsx
// Current — key on <> does NOT work
{Object.keys(PRINCIPLES).sort().map(principleKey => {
  ...
  return (
    <>
      <tr key={`p-${principleKey}`} ...>...</tr>  // key here is redundant
      {rows.map(check => (
        <>
          <TableRow key={check.id} ...>...</TableRow>  // works, but wrapping <> has no key
          {isExpanded && <tr key={`${check.id}-expanded`} ...>...</tr>}
        </>
      ))}
    </>
  )
})}
```

**Fix — use `React.Fragment` with explicit `key`:**

```jsx
import { Fragment } from 'react'

{Object.keys(PRINCIPLES).sort().map(principleKey => (
  <Fragment key={principleKey}>
    <tr className="bg-gray-100 dark:bg-gray-700/80">...</tr>
    {rows.map(check => (
      <Fragment key={check.id}>
        <TableRow>...</TableRow>
        {isExpanded && <tr>...</tr>}
      </Fragment>
    ))}
  </Fragment>
))}
```

---

### M-5 · React Runtime · `ScanResults` Re-renders on Every Poll Tick

**File:** `src/components/scan/ScanResults.jsx`

`ScanPanel` polls every 3 seconds and updates `jobs` state on every tick. The full `ScanResults` tree (which renders the entire violation list with Flowbite tables) re-renders on every tick even when the selected job hasn't changed.

**Fix:**

```javascript
export default React.memo(ScanResults, (prev, next) =>
  prev.job?.status === next.job?.status &&
  prev.job?.results === next.job?.results &&
  prev.job?.id === next.job?.id
)
```

---

### M-6 · UX / Interactions · Global Search Bar Does Nothing

**File:** `src/components/ApplicationShell.jsx` — navbar search input

The search field in the top navbar has no `onChange`, no `onSubmit`, and no handler. It accepts input but nothing happens.

Either wire it to a global search function or remove it. Leaving a non-functional UI element is confusing and fails WCAG 4.1.3 (Status Messages) since there's no indication it's a placeholder.

---

### M-7 · Tests · `useScanRunner` Hook Has No Tests

**File:** `tests/unit/` — no test file for `useScanRunner.js`

This is the most critical business-logic hook (job queue, polling, retry, cleanup) and has zero test coverage. The existing unit tests cover `groupViolations`, `scCount`, and `componentSelectors`, but not the hook.

Key scenarios to cover:
- Priority queue ordering (component > page > flow)
- `pollJobStatus` clears interval on complete/error
- `runAll` waits for each job before starting next
- Retry logic fires up to `MAX_RETRIES` times
- `useEffect` cleanup cancels all intervals on unmount

```javascript
// tests/unit/useScanRunner.test.js — minimal scaffold
import { renderHook, act } from '@testing-library/react'
import { useScanRunner } from '../../src/hooks/useScanRunner'
import { vi } from 'vitest'

// Mock supabase
vi.mock('../../src/lib/supabase', () => ({ supabase: { ... } }))

test('priority: component jobs run before page jobs', async () => {
  const { result } = renderHook(() => useScanRunner({ auditId: '1', userId: 'u1', audit: {}, scResults: {} }))
  act(() => {
    result.current.addPageScan('https://example.com', 'Page')
    result.current.addComponentScan('https://example.com', '.nav', 'Nav')
  })
  const pending = result.current.jobs.filter(j => j.status === 'pending')
  expect(pending[0].scanType).toBe('component')
})
```

---

### M-8 · Documentation · `groupViolations`, `enrichViolations`, `buildAxeTags` Lack JSDoc

**File:** `scan-worker/index.js` lines 371, 302, 328

These functions contain non-trivial business logic (SC number extraction from tag strings, WCAG tag set construction, deduplication by target path) with no inline documentation. Add JSDoc at minimum:

```javascript
/**
 * Groups axe-core violations by rule+landmark into triage-ready groups.
 * Each unique (ruleId, landmark) pair becomes one group with a node count.
 *
 * @param {Array} violations - Raw axe violations array
 * @param {string} wcagVersion - '2.1' | '2.2'
 * @param {string} conformanceLevel - 'A' | 'AA' | 'AAA'
 * @returns {Array<{groupId, ruleId, landmark, issueType, impact, scIds, nodeCount, nodes}>}
 */
function groupViolations(violations, wcagVersion = '2.2', conformanceLevel = 'AA') {
```

---

## 🔵 LOW — Backlog

---

### L-1 · Infra · `triage-evidence` Storage Bucket Not Documented / Provisioned

**File:** `src/lib/db/triage.js` — `uploadEvidenceFile()`

The code uploads to a `triage-evidence` Supabase Storage bucket but no SQL migration or README section documents that this bucket needs to be created. The `supabase_storage_setup.sql` only documents the `screenshots` bucket. Add provisioning SQL:

```sql
-- Run in Supabase Dashboard → Storage or SQL Editor
INSERT INTO storage.buckets (id, name, public)
VALUES ('triage-evidence', 'triage-evidence', false)
ON CONFLICT DO NOTHING;

CREATE POLICY "Users can upload triage evidence"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'triage-evidence' AND auth.role() = 'authenticated');
```

---

### L-2 · Performance · `@sparticuz/chromium` in Root `dependencies`

**File:** `package.json`

`@sparticuz/chromium` (~35MB) is in the root `dependencies`, not just `scan-worker/package.json`. It's excluded from the Vite bundle via `optimizeDeps.exclude`, so it doesn't bloat the frontend build — but it inflates `node_modules` for every `npm install` in the frontend dev environment.

Move it to `scan-worker/package.json` only.

---

### L-3 · UX · "Configurations" Dropdown Is Stub

**File:** `src/pages/AuditsPage.jsx` — Configurations dropdown

"By Category", "By Brand", and "Reset" items have no handlers. Remove them or replace with working filters (e.g., filter by client name, by project name) before the next user-facing demo.

---

### L-4 · Browser Compatibility · No WebKit in Playwright Test Config

**File:** `vite.config.js` — `test:` block (or a missing `playwright.config.js`)

No Playwright config exists in the repo root. The tests under `tests/component/` use `@testing-library/react` (jsdom), not Playwright end-to-end tests. If/when E2E tests are added, include `webkit` in the projects list to catch Safari layout and form-handling differences.

---

### L-5 · Performance · No Service Worker for App Shell

The static assets have `Cache-Control: immutable` (correct). For repeat visits on slow connections, a minimal service worker using `CacheFirst` for assets and `NetworkFirst` for HTML would improve perceived performance. Low priority given the tool's professional context.

---

## 📋 DB / Code Alignment Summary

| DB Object | Code Reference | Status |
|---|---|---|
| `audit_summary.blocking_count` | `AuditsPage.jsx:108` | ❌ Missing from view — add column |
| `triage_items.screenshot_url` | `scan-worker/index.js:~170` | ⚠️ Not in any migration file |
| `triage_items.impact/page_name/selector/tags/...` | `scan-worker/index.js:toTriageRow` | ✅ In `supabase_migration_triage_columns.sql` |
| `manual_checks.verdict/auto_status/auditor_notes` | `AuditDetailPage.jsx:ManualChecksTab` | ✅ In `migration_manual_checks_v2.sql` |
| `audits.favicon_url` | `createAudit` / `updateAuditFavicon` | ✅ Referenced but migration not found — verify in DB |
| `triage_items` upsert on `audit_id,group_id` | `scan-worker/index.js` | ✅ Constraint in `migration_triage_constraint.sql` |
| `triage-evidence` storage bucket | `triage.js:uploadEvidenceFile` | ❌ No provisioning SQL exists |
| `screenshots` bucket | `scan-worker/index.js` | ✅ In `supabase_storage_setup.sql` |
| RLS on all tables | All db/ files | ✅ Comprehensive in `supabase/rls.sql` |

---

## 🚦 CTA / Flow Verification

| Flow | Status | Issue |
|---|---|---|
| Login (GitHub / Google OAuth) | ✅ Working | Buttons wired, `type="button"` present |
| New Audit wizard (all 4 steps) | ✅ Working | Step navigation + validation functional |
| Trigger scan (page/component/flow) | ⚠️ Stuck | Worker fix in code but **not deployed** (C-1) |
| Poll scan to completion | ⚠️ Never completes | Same — Railway running old code |
| View scan results | ✅ Works once scan completes | `ScanResults` renders correctly |
| Triage a violation | ✅ Working | `saveTriage` wired, upsert on conflict correct |
| Manual checks — view | ✅ Working | Data loads correctly |
| Manual checks — expand row | ❌ Crashes | `ChevronDown` not imported (C-2) |
| Manual checks — save verdict | ✅ Working | `saveManualCheckVerdict` wired |
| Audit list — view/filter/search | ✅ Working | All filters functional |
| Audit list — edit audit | ✅ Working | Edit modal saves correctly |
| Audit list — archive audit | ✅ Working | `archiveAudit` wired |
| Audit list — delete audit | ❌ Stub | Modal shows but doesn't delete (C-4) |
| Audit list — set due date | ✅ Working | Date picker saves via `updateAudit` |
| Audit list — blocking status | ❌ Wrong | `blocking_count` missing from DB view (C-3) |
| Sidebar navigation — main routes | ✅ Working | `/audits`, `/audits/:id`, `/audits/new` work |
| Sidebar navigation — secondary routes | ❌ Dead links | 10+ routes missing from App.jsx (H-1) |
| Sign out | ❌ Broken | Dropdown item has no handler (C-5) |
| User name/email in navbar | ❌ Hardcoded | Not connected to auth (C-5) |
| Generate report | ❌ Disabled | Button permanently disabled (H-4) |

---

## Prioritized Action Order

1. **C-1** — `railway up` in `scan-worker/` — fixes the main scan completion bug (zero code changes needed)
2. **C-2** — Add `ChevronDown` to `AuditDetailPage` imports — 1-line fix, unblocks Manual Checks tab
3. **C-5** — Wire user dropdown to `useAuth()` and `signOut()` — unblocks all users from signing out
4. **C-4** — Implement `deleteAudit` and wire up the delete modal — completes the CRUD contract
5. **C-3** — Add `blocking_count` to `audit_summary` view — DB-only change, fixes the blocking column
6. **C-6** — Fix `groupViolations` to accept and use wcagVersion/conformanceLevel parameters
7. **H-1** — Add `<Route path="*">` catch-all or disable dead nav links
8. **H-2** — Fix rate limit to be per-user, not per-audit
9. **H-3** — Add toast error system (use existing Flowbite `Toast` component)
10. **H-4** — Add condition to enable "Generate Report" button
11. **H-5** — `aria-invalid` sync on all wizard inputs
12. **M-1 through M-8** — in sprint order, no hard blockers
