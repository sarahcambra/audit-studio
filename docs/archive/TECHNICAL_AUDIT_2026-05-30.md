# Technical Audit Report — Audit Studio
**Date:** 2026-05-30  
**Auditor:** Automated (Claude / review-code skill)  
**Standard:** modern-web-guidance + internal CLAUDE.md  
**Scope:** Full codebase — frontend (React/Vite), API (Vercel serverless), scan-worker (Railway/Node)

---

## Pre-Audit: Flow & CTA Check

All primary user flows were traced through the code:

| Flow | Status | Notes |
|------|--------|-------|
| Sign in (GitHub / Google OAuth) | ✅ Working | AuthContext + Supabase OAuth correct |
| Create audit (5-step wizard) | ✅ Working | Validation, DB write, favicon fetch all wired |
| View audits list | ✅ Working | `audit_summary` view, pagination, filters |
| Archive / delete audit | ✅ Working | `archiveAudit`, `deleteAudit` with cascade |
| Run page/component/flow scan | ✅ Working | API → Railway → polling all correct; `.catch()` bug already fixed |
| View scan results | ✅ Working | ScanResults with memo, groupedViolations |
| Triage decisions (inline + drawer) | ✅ Working | Optimistic update + rollback on error |
| Manual checks tab | ⚠️ Broken (silent) | Tab renders but **manual_checks are never seeded** after scans (see C-1) |
| Generate Report CTA | ❌ Stub | Button exists but triggers nothing; `reports` table unused |
| Knowledge Base | ❌ Stub | All routes are `PlaceholderPage` |
| Reports section | ❌ Stub | All routes are `PlaceholderPage` |
| Settings | ❌ Stub | All routes are `PlaceholderPage` |
| User profile | ✅ Working | Profile save/update functional |

---

## DB ↔ Code Alignment

Compared CLAUDE.md schema (lines 359+) against all `src/lib/db/*.js` and `scan-worker/index.js`.

| Table | Alignment | Issues |
|-------|-----------|--------|
| `audits` | ✅ | All columns written correctly; `audit_goal` wired in `createAudit` |
| `scan_jobs` | ✅ | `page_title`, `tool_version`, `execution_time_ms` all handled |
| `scan_results` | ✅ | All 9 columns written by worker |
| `triage_items` | ✅ | `tags`, `sc_ids` (arrays), `evidence_files` (JSONB) — all correct |
| `manual_checks` | ⚠️ | Table exists; `verdict` + `status` both updated in `saveManualCheckVerdict` but are redundant — `status` is set to `verdict` value; more critically, **rows are never created automatically** |
| `reports` | ❌ | Table fully defined in DB; zero writes from codebase — ReportTab is a stub |
| `catalog_items` | ❌ | Table exists; no frontend code writes to it (Component Catalog is a PlaceholderPage) |
| `kb_overrides` | ❌ | Table exists; no frontend code writes to it (Knowledge Base is all PlaceholderPage) |
| `audit_activity_log` | ✅ | Written by api/scan.js and scan-worker on start/complete/fail |
| `profiles` | ✅ | Read in AuthContext; written by Supabase Auth trigger (assumed) |
| `screenshots` | ⚠️ | Table exists; worker uploads to `screenshots` storage bucket but does NOT insert rows into this table — screenshots are stored in Supabase Storage but the join table is empty |

**`audit_summary` view dependency:** `getAudit()` and `getAudits()` depend on a `audit_summary` Postgres VIEW for computed columns (`untriaged_count`, `pipeline_stage`, etc.). This view is in `supabase/audit_summary_view.sql` but not in the CLAUDE.md schema snapshot. If the view is missing or stale, the entire app breaks silently.

---

## Remediation Plan

---

### 🔴 CRITICAL

---

#### C-1 — Manual Checks Never Seeded
**Category:** Missing Functionality / Control Flow  
**Files:** `api/scan.js`, `src/lib/wcagScData.js`, `src/lib/db/manualChecks.js`

`wcagScData.js` exports `getAlwaysManualSCs()` with the comment "Used in api/scan.js to seed manual_checks for SCs axe never touches" — but `api/scan.js` never calls it. The `manual_checks` table is never populated automatically. The ManualChecks tab renders but will always show "0 criteria to verify" until rows are created manually.

**Fix — add seeding after job creation in `api/scan.js`:**

```js
// After the scan_job insert succeeds (after line ~157 in api/scan.js)
// Seed manual_checks if none exist yet for this audit
import { getAlwaysManualSCs } from '../../src/lib/wcagScData.js'
// Note: for Vercel API (ESM), import from shared/ or duplicate the function

void (async () => {
  const { count } = await supabase
    .from('manual_checks')
    .select('id', { count: 'exact', head: true })
    .eq('audit_id', auditId)

  if (!count || count === 0) {
    const alwaysManualSCs = getAlwaysManualSCs()
    const rows = alwaysManualSCs.map((scId, idx) => ({
      audit_id:   auditId,
      sc_id:      scId,
      source:     'always-manual',
      status:     'untriaged',
      sort_order: idx,
    }))
    if (rows.length > 0) {
      await supabase.from('manual_checks').insert(rows).then(null, () => {})
    }
  }
})()
```

**Architectural note:** `getAlwaysManualSCs` lives in `src/lib/wcagScData.js` (frontend). Move the data to `shared/wcagScData.js` so both `api/scan.js` (Vercel) and `scan-worker/index.js` (Railway) can import it without bundler issues. The `shared/` directory already exists in the project root.

---

#### C-2 — CSP is Report-Only (Not Enforced)
**Category:** Security  
**File:** `vercel.json`

`Content-Security-Policy-Report-Only` sends violation reports but does not block anything. An XSS attack would execute freely. Additionally, `unsafe-inline` is present in `script-src` which defeats script injection protection.

**Fix — promote to enforced CSP and tighten `script-src`:**

```json
{
  "key": "Content-Security-Policy",
  "value": "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; connect-src 'self' https://*.supabase.co wss://*.supabase.co https://www.google.com https://scan-worker-production-3058.up.railway.app; img-src 'self' data: https://www.google.com https://*.supabase.co; font-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none';"
}
```

Remove `'unsafe-inline'` from `script-src`. Vite+React with Flowbite doesn't inject inline scripts — you can use a strict `script-src 'self'` in production. `style-src 'unsafe-inline'` is unavoidable with Tailwind/CSS-in-JS so keep it there only.

Also add HSTS (missing entirely):
```json
{ "key": "Strict-Transport-Security", "value": "max-age=31536000; includeSubDomains" }
```

---

#### C-3 — `screenshots` Table Never Written (Orphaned Schema)
**Category:** Data Integrity  
**Files:** `scan-worker/index.js`, DB schema

The `screenshots` table has a `job_id` FK and `group_id`, `issue_id` columns — clearly meant to link screenshots to specific triage issues. The worker uploads to Supabase Storage but never inserts a row into `public.screenshots`. As a result:
- No way to retrieve screenshots by job or group_id via SQL
- Storage bucket accumulates files with no DB index
- `IssueDetailDrawer` has `screenshot_url` in `triage_items` but the screenshots table is never populated for cross-referencing

**Fix — in `scan-worker/index.js`, after the screenshot upload:**

```js
// After storage upload succeeds, record in screenshots table
if (scanResult.screenshotBase64) {
  const filename    = `${jobId}/page-${Date.now()}.png`
  const imageBuffer = Buffer.from(scanResult.screenshotBase64, 'base64')
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from('screenshots')
    .upload(filename, imageBuffer, { contentType: 'image/png', upsert: true })

  if (!uploadError) {
    void supabase.from('screenshots').insert({
      job_id:      jobId,
      group_id:    'page',   // full-page screenshot
      storage_path: filename,
      description: 'Full-page screenshot at scan time',
    }).then(null, () => {})
  }
}
```

---

#### C-4 — `WORKER_SECRET` Optional on Railway (Auth Bypassed if Unset)
**Category:** Security  
**File:** `scan-worker/index.js` (line 61–64)

```js
const secret = process.env.WORKER_SECRET
if (secret) {  // ← if secret is undefined/empty, ALL requests are accepted
  const auth = req.headers['authorization'] ?? ''
  if (auth !== `Bearer ${secret}`) return sendJson(res, 401, { error: 'Unauthorized' })
}
```

If `WORKER_SECRET` is not set (e.g. after a Railway redeploy that loses env vars), the worker accepts unauthenticated POSTs from anyone. An attacker who discovers the Railway URL can trigger unlimited Playwright scans.

**Fix — make the secret mandatory:**

```js
const secret = process.env.WORKER_SECRET
if (!secret) {
  console.error('[worker] FATAL: WORKER_SECRET env var is not set. Refusing all requests.')
  // Do not start — crash on boot so Railway shows an error
  process.exit(1)
}
const auth = req.headers['authorization'] ?? ''
if (auth !== `Bearer ${secret}`) return sendJson(res, 401, { error: 'Unauthorized' })
```

---

### 🟠 HIGH

---

#### H-1 — Report Generation: CTA Does Nothing
**Category:** Missing Functionality  
**File:** `src/pages/AuditDetailPage.jsx` → `ReportTab`

The Generate Report button is `disabled` unless `triageComplete`, but even when enabled, clicking it has no `onClick` handler and no API call. The `reports` table in Supabase is completely unused. This is a core product feature that is entirely missing.

**Minimum viable path:**
1. Add `onClick` to the button that POSTs to a new `api/report.js` Vercel function
2. `api/report.js` inserts a `reports` row with `status: 'generating'` and triggers a report generation job (or generates inline)
3. Frontend polls the `reports` row for `status: 'complete'` and shows a download link via `storage_path`

---

#### H-2 — `latestJobsRef` Is Written But Never Read
**Category:** React Runtime / Lint  
**File:** `src/hooks/useScanRunner.js` (lines 22–28)

```js
const latestJobsRef = useRef([])
useEffect(() => {
  latestJobsRef.current = jobs  // synced but never consumed
}, [jobs])
```

This ref was added to solve stale closure problems but the fix was later replaced by `isRunningRef`. `latestJobsRef` is dead code. It adds a layout effect on every jobs state change for no benefit.

**Fix:** Remove both the `useRef` declaration and the `useEffect` that syncs it.

---

#### H-3 — `audit_summary` View Undocumented / No Migration Guard
**Category:** Infra/Config / Data Integrity  
**File:** `supabase/audit_summary_view.sql`

The entire app depends on `audit_summary` (computed stats: `untriaged_count`, `pipeline_stage`, violation counts). This view is not in the canonical CLAUDE.md schema. If it's missing or was dropped, `getAudits()` and `getAudit()` silently return errors — the app shows a blank state rather than a useful error.

**Fix — add a startup check in `src/lib/supabase.js`:**

```js
// Run once at app boot in non-production to verify the view exists
if (import.meta.env.DEV) {
  supabase.from('audit_summary').select('id').limit(1)
    .then(({ error }) => {
      if (error) console.error('[supabase] audit_summary view missing or inaccessible:', error.message)
    })
}
```

Also: add `audit_summary_view.sql` content to CLAUDE.md schema section.

---

#### H-4 — No Error Toasts in Core Workflows (AuditDetailPage, ScanPanel, TriageTab)
**Category:** Error Handling / UX  
**Files:** `src/pages/AuditDetailPage.jsx`, `src/components/scan/ScanPanel.jsx`, `src/components/triage/TriageTab.jsx`

`ToastContext` exists and works. `AuditsPage` and `NewAuditWizard` use it correctly. But:
- `AuditDetailPage`: load errors show inline red text but no toast
- `TriageTab`: `handleInlineDecision` logs to console on failure; no user feedback
- `ManualChecksTab`: save errors are silently swallowed (no feedback when `saveErr` is truthy)
- `ScanPanel`: scope save errors have no user notification

**Fix — `ManualChecksTab.handleSave` example:**

```js
const { toast } = useToast()

const handleSave = async (check) => {
  // ...
  const { error: saveErr } = await saveManualCheckVerdict(check.id, { verdict, auditorNotes: notes })
  setSavingId(null)
  if (saveErr) {
    toast.error('Failed to save verdict. Please try again.')
    return
  }
  toast.success('Verdict saved')
  // ... update local state
}
```

Apply the same pattern to `TriageTab.handleInlineDecision`.

---

#### H-5 — Signed Evidence URLs Expire (1 hour) but Paths Stored in JSONB
**Category:** Data Integrity  
**File:** `src/lib/db/triage.js`

`uploadEvidenceFile` stores `signedUrl` (1-hour TTL) in `evidence_files` JSONB. After 1 hour the stored URL is dead. The `path` is stored alongside it, which is correct, but the UI presumably renders the URL directly — meaning evidence disappears silently.

**Fix:** Store only the `path` in the DB. Generate signed URLs on-demand when rendering:

```js
// In evidence display component:
const { data } = await supabase.storage
  .from('triage-evidence')
  .createSignedUrl(file.path, 60 * 60) // fresh 1-hour URL on render
```

Or use a server-side edge function to generate signed URLs at report time.

---

### 🟡 MEDIUM

---

#### M-1 — `MODULE_NOW` Captured at Module Load (Stale Due Date Calculation)
**Category:** React Runtime / Data Integrity  
**File:** `src/pages/AuditsPage.jsx` (line 25)

```js
const MODULE_NOW = Date.now()  // captured once, never updated
```

Due date "days remaining" is calculated against this stale timestamp. If the tab is open overnight, all dates will be wrong until refresh.

**Fix:** Replace with `Date.now()` inline inside the `DueDate` component render, or use a `useRef(Date.now())` that resets on visibility change.

---

#### M-2 — `aria-invalid` / `aria-describedby` Missing on Step 2 + Step 4 Inputs
**Category:** Accessibility  
**Files:** `src/components/wizard/Step2ProjectDetails.jsx`, `src/components/wizard/Step4Scope.jsx`

Step1Info correctly implements `aria-invalid` and `aria-describedby` on validation errors. The same pattern is not applied consistently in Step 2 (websiteUrl, projectName) and Step 4. Screen readers won't announce validation errors on those steps.

**Fix:** Apply the same pattern from Step1Info to all required fields with `showValidationErrors`:

```jsx
<TextInput
  aria-invalid={showValidationErrors && !form.websiteUrl ? "true" : undefined}
  aria-describedby={showValidationErrors && !form.websiteUrl ? "websiteUrl-error" : undefined}
  ...
/>
{showValidationErrors && !form.websiteUrl && (
  <p id="websiteUrl-error" role="alert" className="text-xs text-red-600 mt-1">
    Website URL is required
  </p>
)}
```

---

#### M-3 — No Virtualization for Large Scan Result Lists
**Category:** Performance  
**File:** `src/components/scan/ScanResults.jsx`

`ScanResults` is memoized (✅ M-5 done), but there is no windowing/virtualization. A scan with 200+ violation groups renders all DOM nodes simultaneously. For audits of large sites this causes significant paint jank.

**Fix:** Use `content-visibility: auto` on violation group rows (modern-web-guidance "defer-rendering-heavy-content" pattern) — zero-dependency approach:

```css
/* In accessibility.css or a scan-specific CSS module */
.violation-group-row {
  content-visibility: auto;
  contain-intrinsic-size: auto 80px;
}
```

Apply `className="violation-group-row"` to the repeating violation row container. No library needed, Baseline Widely Available.

---

#### M-4 — `useScanRunner.runAll()` Polling Pattern Has Tight-Loop Risk
**Category:** Control Flow / Performance  
**File:** `src/hooks/useScanRunner.js` (lines 402–419)

The `runAll` watchdog polls `isRunningRef.current` every 100ms for up to 5 minutes (`checkInterval` at 100ms intervals). For a batch of 10 scans, this means 3,000,000 interval ticks maximum. It's harmless but wasteful.

**Fix:** Increase interval to 500ms — the scan itself takes 10–120 seconds so 500ms resolution is more than adequate:

```js
const checkInterval = setInterval(() => { ... }, 500)
```

---

#### M-5 — JSDoc Missing on Core Utility Functions (M-8 from CLAUDE.md)
**Category:** Documentation  
**Files:** `src/lib/groupViolations.js`, `src/lib/enrichViolations.js`, `src/lib/componentSelectors.js`

These are in `src/lib/` as separate files but the functions inside them (or their counterparts now inlined in `scan-worker/index.js`) lack parameter-level JSDoc.

**Fix:** Add `@param` and `@returns` annotations. Example for the worker's `groupViolations`:

```js
/**
 * Group axe violations into structured triage_items rows.
 * @param {import('@axe-core/playwright').Result[]} violations - raw axe violations
 * @param {'2.1'|'2.2'} wcagVersion
 * @param {'A'|'AA'|'AAA'} conformanceLevel
 * @returns {{ groupId: string, ruleId: string, scIds: string[], ... }[]}
 */
function groupViolations(violations, wcagVersion = '2.2', conformanceLevel = 'AA') {
```

---

#### M-6 — Test Coverage Gaps
**Category:** Tests  
**Files:** `src/hooks/useScanRunner.js`, `api/scan.js`

4 test files exist for pure utility libraries. No tests exist for:
- `useScanRunner` hook (M-6 from CLAUDE.md — polling logic, error recovery, queue priority)
- `api/scan.js` ownership check (a user should not be able to scan another user's audit)
- `TriageTab` inline decision optimistic update + rollback

**Fix:** Add `tests/unit/useScanRunner.test.js` using `@testing-library/react` and `vi.spyOn` to mock `fetch` and the Supabase client. At minimum test:
1. `addPageScan` + `runNextJob` → dispatches fetch with correct payload
2. `pollJobStatus` transitions state to `complete` when Supabase returns `complete`
3. `pollJobStatus` stops polling and sets `error` status on Supabase error

---

### 🔵 LOW

---

#### L-1 — Stale `vitest.config.js` Timestamp Files
**Category:** Lint/Code Quality  
**Root:** 12 `vitest.config.js.timestamp-*.mjs` files in project root

These are Vite optimization cache artifacts that got committed. They bloat the repo and confuse tools.

**Fix:** Add to `.gitignore`:
```
vitest.config.js.timestamp-*.mjs
```
Delete existing files: `git rm vitest.config.js.timestamp-*.mjs`

---

#### L-2 — `@phosphor-icons/react` and `react-icons` Installed But Unused
**Category:** Lint/Code Quality / Performance  
**File:** `package.json`

Both `@phosphor-icons/react` and `react-icons` are in `dependencies`. All icons in the codebase use `lucide-react` (per CLAUDE.md guidelines). These two packages add bundle weight for zero benefit.

**Fix:**
```bash
npm uninstall @phosphor-icons/react react-icons
```

---

#### L-3 — `api/scan.js` `maxDuration: 300` Is Excessive
**Category:** Infra/Config  
**File:** `vercel.json`

`api/scan.js` is a thin dispatcher: it validates auth, creates a DB row, fires a fetch to Railway, and returns. It should complete in under 5 seconds. A 300-second timeout wastes Vercel function billing and could hang open connections unnecessarily.

**Fix:**
```json
"api/scan.js": { "maxDuration": 30 }
```

---

#### L-4 — `updateAuditFavicon` Returns Unhandled Supabase Promise
**Category:** Error Handling  
**File:** `src/lib/db/audits.js` (line 133)

```js
export async function updateAuditFavicon(auditId, faviconUrl) {
  return supabase.from('audits').update(...).eq('id', auditId)
  // No .then(null, () => {}) — unhandled promise rejection possible
}
```

`PostgrestFilterBuilder` doesn't have `.catch()`, so if the caller does `updateAuditFavicon(id, url).catch(...)` it throws. The caller in `NewAuditWizard` uses `void updateAuditFavicon(...)` which is fine, but the function signature suggests it's awaitable.

**Fix:**
```js
export async function updateAuditFavicon(auditId, faviconUrl) {
  const { error } = await supabase.from('audits')
    .update({ favicon_url: faviconUrl, updated_at: new Date().toISOString() })
    .eq('id', auditId)
  if (error) console.warn('[updateAuditFavicon]', error.message)
}
```

---

#### L-5 — No Realtime Subscription for Scan Jobs (Polling-Only)
**Category:** Performance / UX  
**File:** `src/hooks/useScanRunner.js`

The current 3-second interval polling works but creates unnecessary DB round-trips. Supabase Realtime can push `scan_jobs` row changes directly.

**Optional upgrade** (not blocking, but aligns with modern-web-guidance for "live data"):
```js
// Replace setInterval with Supabase Realtime subscription
const channel = supabase
  .channel(`scan_job_${jobId}`)
  .on('postgres_changes', {
    event: 'UPDATE',
    schema: 'public',
    table: 'scan_jobs',
    filter: `id=eq.${jobId}`,
  }, (payload) => {
    if (payload.new.status === 'complete' || payload.new.status === 'error') {
      pollJobStatus(jobId, localJobId)
      supabase.removeChannel(channel)
    }
  })
  .subscribe()
```

Keep the 3s interval as a fallback for environments where WebSocket is blocked.

---

## Summary Matrix

| # | Category | Severity | Issue |
|---|----------|----------|-------|
| C-1 | Missing Functionality / Control Flow | 🔴 Critical | Manual checks never seeded post-scan |
| C-2 | Security | 🔴 Critical | CSP is report-only; `unsafe-inline`; no HSTS |
| C-3 | Data Integrity | 🔴 Critical | Screenshots table never written |
| C-4 | Security | 🔴 Critical | `WORKER_SECRET` optional → auth bypass if unset |
| H-1 | Missing Functionality | 🟠 High | Report generation completely non-functional |
| H-2 | React Runtime | 🟠 High | `latestJobsRef` dead code (effect runs on every jobs change) |
| H-3 | Infra/Config | 🟠 High | `audit_summary` view undocumented, no boot guard |
| H-4 | Error Handling / UX | 🟠 High | No toasts in AuditDetailPage, TriageTab, ManualChecksTab |
| H-5 | Data Integrity | 🟠 High | Signed evidence URLs (1h TTL) stored permanently in JSONB |
| M-1 | React Runtime | 🟡 Medium | `MODULE_NOW` stale due-date calculation |
| M-2 | Accessibility | 🟡 Medium | `aria-invalid` / `aria-describedby` missing on Steps 2 & 4 |
| M-3 | Performance | 🟡 Medium | No virtualization for large violation lists |
| M-4 | Control Flow | 🟡 Medium | `runAll` watchdog polls every 100ms (3M ticks max) |
| M-5 | Documentation | 🟡 Medium | JSDoc missing on `groupViolations`, `enrichViolations`, `componentSelectors` |
| M-6 | Tests | 🟡 Medium | No tests for `useScanRunner`, `api/scan` ownership check |
| L-1 | Lint/Code Quality | 🔵 Low | 12 stale `vitest.config.js.timestamp-*.mjs` files committed |
| L-2 | Performance | 🔵 Low | `@phosphor-icons/react` + `react-icons` unused in bundle |
| L-3 | Infra/Config | 🔵 Low | `api/scan.js` maxDuration 300s is excessive (should be 30) |
| L-4 | Error Handling | 🔵 Low | `updateAuditFavicon` returns unhandled Supabase promise |
| L-5 | Performance | 🔵 Low | Polling-only scan status (Realtime subscription optional upgrade) |

---

## Recommended Fix Order

1. **C-4** — Railway auth guard (2-line change, zero-risk, deploy immediately)
2. **C-2** — Enforce CSP + add HSTS (vercel.json edit only)
3. **C-1** — Manual check seeding (move `getAlwaysManualSCs` to `shared/`, call from `api/scan.js`)
4. **H-4** — Add toasts to ManualChecksTab + TriageTab (low-risk, high UX impact)
5. **H-2** — Remove `latestJobsRef` dead code
6. **L-1** — Clean up committed timestamp files
7. **L-2** — Remove unused icon packages
8. **L-3** — Fix maxDuration in vercel.json
9. **C-3** — Write screenshots table rows in scan-worker
10. **H-5** — Switch to path-only evidence storage
11. **H-3** — Document `audit_summary` view + add dev boot check
12. **M-1**, **M-2**, **M-3** — React + a11y fixes
13. **H-1** — Report generation (largest feature build)
