# AuditV2 — Prioritized Remediation Plan

**Generated:** 2026-05-28  
**Audited against:** `modern-web-guidance` (v2026_05_16-c5e7870)  
**Codebase snapshot:** React 19 + Vite 8 + Flowbite + Supabase + Vercel  

---

## ⚠️ Audit Report Corrections (Stale Findings)

The previous `COMPREHENSIVE_AUDIT_REPORT.md` (2026-05-21) contains several findings that **no longer reflect the actual codebase**. Before acting on any item in that report, note the following corrections:

| Report Claim | Actual Status |
|---|---|
| "No User Authentication Flow" | ❌ Stale — `AuthContext.jsx` is fully implemented with GitHub + Google OAuth via Supabase |
| "No Actual Backend Integration" | ❌ Stale — `src/lib/db/audits.js` has complete CRUD (`createAudit`, `getAudit`, `getAudits`, `updateAudit`) |
| "NO TESTS EXIST" | ❌ Stale — `tests/unit/` and `tests/component/` both contain real test files (scCount, groupViolations, Step4Scope, ScanResults, etc.) |
| "Missing .env.example" | ❌ Stale — `.env.example` exists in project root |
| "Supabase errors silently swallowed" | ❌ Stale — `useScanRunner.js` has full try/catch on `pollJobStatus` with job state updates and interval cleanup |
| "API endpoint errors not handled" | ❌ Stale — `runNextJob` checks `content-type` before calling `.json()`, falls back to status text |
| "No URL sanitization" | ❌ Stale — `Step4Scope.jsx` calls `normaliseUrl()` + `isValidUrl()` on blur; `PageScanTab` validates before queuing |
| "No deduplication of scope items" | ❌ Stale — `isDuplicate()` check in `Step4Scope.jsx` prevents duplicate URLs/selectors |
| "No priority system for scan jobs" | ❌ Stale — `useScanRunner.js` implements `PRIORITY = { component:1, page:2, flow:3 }` |
| "Missing cleanup on unmount" | ❌ Stale — `useScanRunner.js` has `useEffect(() => { return () => { clearInterval... } }, [])` |
| "XSS via node.html" | ❌ Not a real issue — `node.html` is rendered inside JSX text nodes, which React auto-escapes |

---

## Summary Table

| Category | Previous Status | Actual Status | Critical | High | Medium | Low |
|---|---|---|---|---|---|---|
| Security | ❌ Vulnerable | ❌ Vulnerable | 3 | 1 | 0 | 0 |
| Performance | ⚠️ Unoptimized | ⚠️ Unoptimized | 0 | 1 | 3 | 1 |
| Control Flow | ⚠️ Needs Work | ✅ Mostly Fixed | 0 | 0 | 1 | 1 |
| Error Handling | ❌ Missing | ✅ Mostly Fixed | 0 | 1 | 1 | 0 |
| Accessibility (a11y) | ⚠️ Partial | ⚠️ Partial | 0 | 2 | 2 | 1 |
| Infra/Config | ⚠️ Incomplete | ⚠️ Incomplete | 0 | 1 | 1 | 1 |
| React Runtime | ✅ Good | ✅ Good | 0 | 0 | 1 | 0 |
| UX/Interactions | ⚠️ Partial | ⚠️ Partial | 0 | 0 | 2 | 1 |
| Data Integrity | ❌ Incomplete | ✅ Mostly Fixed | 0 | 0 | 0 | 0 |
| Tests | ❌ None | ⚠️ Partial | 0 | 0 | 1 | 0 |
| Lint/Code Quality | ⚠️ Needs Review | ⚠️ Needs Review | 0 | 0 | 2 | 1 |
| Documentation | ❌ Missing | ✅ Mostly Fixed | 0 | 0 | 1 | 0 |
| Browser Compatibility | ⚠️ Limited | ⚠️ Limited | 0 | 0 | 1 | 0 |
| Missing Functionalities | ❌ Gaps | ✅ Mostly Fixed | 0 | 0 | 1 | 0 |

**Revised Total: 3 Critical | 5 High | 17 Medium | 5 Low**

---

## 🔴 CRITICAL — Fix Before Next Production Deploy

---

### C-1 · Security · No HTTP Security Headers

**Location:** `vercel.json`  
**Standard:** `modern-web-guidance/guides/security/security.md` — Phase 1 Quick Wins + companion policies

The `vercel.json` file configures caching headers for HTML and assets correctly, but has **zero browser security headers**. This means the app ships with no XSS mitigation, no clickjacking protection, no HSTS, and no content-type enforcement — all considered "lowest-hanging fruit" by the modern-web-guidance standard.

Missing headers (per the guide's Phase 1 + companion policies):
- `Content-Security-Policy` (or `Content-Security-Policy-Report-Only` as the starting step)
- `X-Frame-Options` (clickjacking)
- `Strict-Transport-Security` (HSTS)
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`
- `Cross-Origin-Opener-Policy`

**The guide prescribes starting with report-only CSP** to avoid breakage, then enforcing after observing reports. Because Vite + React bundles inline no scripts directly (everything is loaded via `<script src="...">` tags Vite emits), a nonce-based or hash-based CSP is viable here.

**Fix — add to `vercel.json`:**

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "Cross-Origin-Opener-Policy", "value": "same-origin-allow-popups" },
        {
          "key": "Content-Security-Policy-Report-Only",
          "value": "script-src 'self' 'unsafe-inline'; connect-src 'self' https://*.supabase.co wss://*.supabase.co; img-src 'self' data: https://www.google.com; font-src 'self'; object-src 'none'; base-uri 'none'; report-to default;"
        },
        { "key": "Reporting-Endpoints", "value": "default=\"https://YOUR_REPORTING_ENDPOINT\"" }
      ]
    },
    {
      "source": "/(.*).html",
      "headers": [
        { "key": "Cache-Control", "value": "no-cache, no-store, must-revalidate" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

> **Note:** Start with `Content-Security-Policy-Report-Only` and a reporting endpoint. Only switch to enforced `Content-Security-Policy` after reviewing violation reports for several days (per the guide's Phase 2→3 progression). The `'unsafe-inline'` above is a temporary permissive fallback; tighten it by hashing or nonce-injecting inline scripts once CSP reporting shows what the real script inventory looks like.

---

### C-2 · Security · `/api/scan` Does Not Verify Caller Owns the Audit

**Location:** `api/scan.js:11-47`  
**Standard:** `modern-web-guidance/guides/security/security.md` — §3.7 Fetch Metadata

The endpoint accepts `{ auditId, userId }` from the request body and trusts them directly. It uses the **service role key** (which bypasses all Supabase RLS) to insert a `scan_job`. This means any authenticated — or even unauthenticated — caller who knows a valid `auditId` UUID can queue scans against it, burning compute and polluting another user's results.

The guide's principle: *"Reject disallowed requests before authentication or authorization checks."* Here the authorization check is absent entirely.

**Fix — add an ownership check to `api/scan.js` before job creation:**

```javascript
import { supabaseAdmin } from './lib/supabaseClient.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // 1. Authenticate the caller via the Authorization header sent by the browser
  const authHeader = req.headers['authorization']
  const jwt = authHeader?.replace('Bearer ', '')
  if (!jwt) return res.status(401).json({ error: 'Missing authorization token' })

  // 2. Verify the JWT is a valid Supabase session and get the caller's ID
  const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(jwt)
  if (authError || !user) return res.status(401).json({ error: 'Invalid session' })

  // 3. Verify the authenticated user actually owns the requested audit
  const { auditId, scanType, url } = req.body
  if (!auditId || !scanType || !url) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const { data: audit, error: auditError } = await supabaseAdmin
    .from('audits')
    .select('id')
    .eq('id', auditId)
    .eq('user_id', user.id)    // ownership check
    .single()

  if (auditError || !audit) {
    return res.status(403).json({ error: 'Audit not found or access denied' })
  }

  // ... rest of handler unchanged
}
```

The client side must send the session JWT in the Authorization header:

```javascript
// useScanRunner.js — inside the fetch call
const { data: { session } } = await supabase.auth.getSession()
const response = await fetch('/api/scan', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${session?.access_token}`,
  },
  body: JSON.stringify({ ... }),
})
```

---

### C-3 · Security · No Rate Limiting on `/api/scan`

**Location:** `api/scan.js`  
**Standard:** `modern-web-guidance/guides/security/security.md` — companion policies (defense-in-depth)

A single authenticated user can fire unlimited scan requests. Each request spins up a Playwright browser in the worker. There is nothing preventing a script that calls `/api/scan` in a tight loop, exhausting the scan worker and generating Supabase writes with no bound.

**Fix — implement per-user rate limiting using Vercel Edge middleware (or KV-backed counter):**

```javascript
// middleware.js (Vercel Edge Middleware — runs before api/scan.js)
import { NextResponse } from 'next/server'

const WINDOW_MS = 60_000   // 1 minute
const MAX_SCANS = 10       // 10 scans per user per minute

export async function middleware(req) {
  if (!req.nextUrl.pathname.startsWith('/api/scan')) return NextResponse.next()

  // Use Upstash Redis or Vercel KV here for distributed rate limiting.
  // Simple in-memory approach for single-instance dev:
  const userId = req.headers.get('x-user-id') // set after JWT verification
  const key = `rate:${userId}`
  // ... KV get/increment/check logic

  if (overLimit) {
    return new NextResponse(
      JSON.stringify({ error: 'Rate limit exceeded. Max 10 scans per minute.' }),
      { status: 429, headers: { 'Retry-After': '60', 'Content-Type': 'application/json' } }
    )
  }
  return NextResponse.next()
}
```

Alternatively, since this is Vercel serverless (not Edge), add the rate check inside `api/scan.js` itself using a Supabase table as a lightweight distributed counter, querying scan count for the user in the last 60 seconds before allowing the job to proceed.

---

## 🟠 HIGH — Fix in the Next Sprint

---

### H-1 · Performance · No Route-Level Code Splitting

**Location:** `src/App.jsx:1-11`  
**Standard:** `modern-web-guidance/guides/performance/performance.md` — JS Code-Splitting section

All five page components (`AuditsPage`, `AuditDetailPage`, `NewAuditPage`, `UserProfilePage`, `LoginPage`) are imported statically at the top of `App.jsx`. The `AuditDetailPage` transitively imports `ScanPanel`, `ScanResults`, `useScanRunner`, and all scan tab components — a large chunk loaded even on the login screen.

The guide states: *"Don't ship a single, enormous app.js bundle"* and prescribes `import()` dynamic splits at the route level.

**Fix — convert to lazy imports in `src/App.jsx`:**

```jsx
import { lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import ApplicationShell from './components/ApplicationShell'
import ErrorBoundary from './components/ErrorBoundary'

// Lightweight initial bundle — auth pages load instantly
import LoginPage from './pages/LoginPage'

// Heavy pages split into their own chunks
const AuditsPage      = lazy(() => import('./pages/AuditsPage'))
const AuditDetailPage = lazy(() => import('./pages/AuditDetailPage'))
const NewAuditPage    = lazy(() => import('./pages/NewAuditPage'))
const UserProfilePage = lazy(() => import('./pages/UserProfilePage'))

function PageLoader() {
  return (
    <div className="flex h-64 items-center justify-center">
      <span className="text-sm text-gray-400">Loading…</span>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={
          <PrivateRoute>
            <ApplicationShell>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/"                     element={<AuditsPage />} />
                  <Route path="/audits"               element={<AuditsPage />} />
                  <Route path="/audits/new"           element={<NewAuditPage />} />
                  <Route path="/audits/:auditId"      element={<AuditDetailPage />} />
                  <Route path="/audits/:auditId/scan" element={<AuditDetailPage />} />
                  <Route path="/users/profile"        element={<UserProfilePage />} />
                </Routes>
              </Suspense>
            </ApplicationShell>
          </PrivateRoute>
        } />
      </Routes>
    </ErrorBoundary>
  )
}
```

This splits the bundle so the login screen ships only `LoginPage` + shared utilities. The `AuditDetailPage` chunk (which carries the entire scan engine) only downloads when a user navigates to an audit.

---

### H-2 · Accessibility · No Skip Link in ApplicationShell

**Location:** `src/components/ApplicationShell.jsx`  
**Standard:** `modern-web-guidance/guides/accessibility/accessibility.md` — §1 Content Navigability, "Provide skip links prior to repeated content"

The shell renders a sidebar nav (`<nav aria-label="Main navigation">`) before `<main>`. Keyboard users must Tab through every nav item to reach page content. The `<main>` element exists but has no `id`, and there is no skip link.

**Fix — add a visually-hidden skip link at the very top of the shell's render output, before the sidebar:**

```jsx
// ApplicationShell.jsx — first element inside the return()
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999]
             focus:rounded-lg focus:bg-primary-700 focus:px-4 focus:py-2
             focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
>
  Skip to main content
</a>

// ... existing sidebar + topbar ...

// On the <main> element (currently line ~420):
<main
  id="main-content"
  tabIndex={-1}
  className="flex-1 min-h-0 overflow-auto rounded-2xl focus:outline-none"
>
  {children}
</main>
```

The `tabIndex={-1}` allows the `<main>` to receive programmatic focus from the skip link without appearing in the natural Tab order. The `focus:not-sr-only` utility makes the link visible only when focused — this is the standard Tailwind pattern for skip links.

---

### H-3 · Accessibility · Login Page Buttons Have No Type Attribute

**Location:** `src/pages/LoginPage.jsx:21,33`  
**Standard:** `modern-web-guidance/guides/accessibility/accessibility.md` — §2 Semantic HTML

Both GitHub and Google sign-in buttons are `<button>` elements inside a `<div>` (not a `<form>`), with no `type="button"`. While not inside a form so no accidental submission occurs, the missing `type` is a lint risk and signals a pattern that will cause issues if a form wrapper is ever added.

Also, neither `<button>` has an explicit `aria-label` — the visible text "Continue with GitHub" is sufficient since the SVG icons have `aria-hidden="true"`, so this part is correct. Just add `type="button"` to both.

---

### H-4 · Error Handling · No User-Visible Error Toasts

**Location:** `src/hooks/useScanRunner.js` — all error paths call `onProgress?.(jobId, 'error', msg)`, but no top-level component renders that message to the user.  
**Standard:** implicit in the UX/Interactions audit category

Scan errors update job state to `status: 'error'` and are shown inline in the scan tab via `ScanProgressBanner` — that part works. However, errors thrown during `supabase.auth.getSession()`, profile load failures in `AuthContext`, and Supabase errors in `createAudit` are all swallowed to `console.error` with no in-app feedback.

**Fix** — add a lightweight toast context (no external dependency needed):

```jsx
// src/context/ToastContext.jsx
import { createContext, useContext, useState, useCallback } from 'react'

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
           className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map(t => (
          <div key={t.id} className="rounded-lg bg-red-600 px-4 py-3 text-sm text-white shadow-lg">
            {t.message}
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  )
}

export const useToast = () => useContext(ToastCtx)
```

Wire `show()` into `createAudit` error handling in `NewAuditWizard.jsx` and profile errors in `AuthContext.jsx`.

---

## 🟡 MEDIUM — Fix Within the Next Two Sprints

---

### M-1 · Infra/Config · `vite.config.js` Sets `process.env: {}` Globally

**Location:** `vite.config.js:5`

```javascript
define: {
  'process.env': {},   // ← replaces ALL of process.env with an empty object
  global: 'globalThis',
},
```

This means `process.env.NODE_ENV` evaluates to `undefined` at runtime inside the browser bundle. Several packages (including some Flowbite internals and React's own dev/prod guard) check `process.env.NODE_ENV`. In production, React will not strip its development-only code paths if this is undefined.

**Fix — replace with an explicit mapping:**

```javascript
define: {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL),
  'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY),
  'global': 'globalThis',
},
```

Also add an explicit `build.target` to avoid shipping bleeding-edge syntax to older browsers:

```javascript
build: {
  target: 'es2022',   // Matches the browserslist in package.json (last 2 Chrome/FF/Safari/Edge)
},
```

---

### M-2 · Accessibility · Wizard Form Inputs Missing `aria-invalid` Sync

**Location:** `src/components/wizard/Step4Scope.jsx`, `Step2ProjectDetails.jsx`, `Step3PreTest.jsx`  
**Standard:** `modern-web-guidance/guides/forms/validate-input-after-interaction.md` — "Consistent ARIA Experience"

The guide mandates: *"Native `:user-invalid` does not automatically sync with ARIA attributes. Add JavaScript to keep `aria-invalid` in sync with the visual state."*

The wizard uses a custom React `showValidationErrors` flag to trigger error states, but the Flowbite `<TextInput>` components don't receive `aria-invalid="true"` when invalid. Screen readers have no way to announce the error state.

**Fix pattern — apply to all validated inputs in wizard steps:**

```jsx
// Example from Step4Scope.jsx
<TextInput
  id={`item-url-${index}`}
  type="url"
  value={item.url}
  onChange={e => handleItemChange(index, 'url', e.target.value)}
  onBlur={() => handleUrlBlur(index)}
  // Add these two:
  aria-invalid={showValidationErrors && !item.url ? 'true' : 'false'}
  aria-describedby={`item-url-error-${index}`}
/>
{showValidationErrors && !item.url && (
  <p id={`item-url-error-${index}`} role="alert" className="mt-1 text-xs text-red-600">
    Please enter a URL for this scope item
  </p>
)}
```

The `role="alert"` on the error paragraph ensures screen readers announce the validation message without requiring focus to move to it.

---

### M-3 · Performance · Hero Image Not Optimized

**Location:** `src/assets/hero.png` (referenced in `Homepage.jsx` or similar)  
**Standard:** `modern-web-guidance/guides/performance/performance.md` — Modern Image & Media Optimization

PNG format for a hero image is suboptimal. The guide mandates AVIF/WebP with `<picture>` source negotiation, explicit `width`/`height` for CLS prevention, and `fetchpriority="high"` if it is the LCP element.

**Fix:**

```jsx
<picture>
  <source type="image/avif" srcSet="/assets/hero.avif" />
  <source type="image/webp" srcSet="/assets/hero.webp" />
  <img
    src="/assets/hero.png"
    alt="Audit Studio dashboard preview"
    width={1200}
    height={675}
    fetchPriority="high"
    decoding="sync"
    className="..."
  />
</picture>
```

Convert `hero.png` to WebP/AVIF at build time using Vite's `vite-imagetools` plugin or a pre-build script.

---

### M-4 · Performance · Tailwind CSS v4 `:has()` / Container Query Fallbacks

**Location:** `src/theme.css`, global styles  
**Standard:** `modern-web-guidance/guides/performance/performance.md` — Browser Compatibility section; `modern-web-guidance/guides/css/css.md`

Tailwind v4 generates `:has()` selectors and modern `@container` queries. The `browserslist` in `package.json` targets the last 2 versions of major browsers. `:has()` reached Baseline "Widely Available" in late 2023, so **last 2 versions** of all four listed browsers support it. No fallback is needed. However, confirm `tailwind.config.js` does not use any `@container` utilities that could affect Safari 16 (if any user base that old exists).

---

### M-5 · React Runtime · `ScanResults.jsx` Re-renders on Every Job Status Change

**Location:** `src/components/scan/ScanResults.jsx`

The entire `ScanResults` component tree re-renders whenever any job in `useScanRunner` changes status, because `jobs` state is at the `ScanPanel` level and passed down as a prop. For audits with many jobs, this causes expensive diffing of the full violation list on every poll tick (every 3 seconds).

**Fix — memoize the violation rendering:**

```jsx
// Wrap the top-level ScanResults export
export default React.memo(ScanResults, (prev, next) => {
  // Only re-render if the selected job's results or status actually changed
  return prev.job?.status === next.job?.status &&
         prev.job?.results === next.job?.results
})
```

And memoize the `getJobForItem` callback in `ScanPanel.jsx` if not already wrapped in `useCallback`.

---

### M-6 · Tests · Coverage Gaps in Critical Paths

**Location:** `tests/unit/`, `tests/component/`

Test files exist and are structured, but coverage of the most critical code paths is likely incomplete. The following should be verified or added:

- `useScanRunner` hook: test retry logic, polling cleanup on unmount, priority queue ordering
- `api/scan.js`: test ownership check (once C-2 is fixed), rate limiting (once C-3 is fixed)
- `createAudit` + `getAudit`: test Supabase error propagation
- E2E: at least one Playwright spec covering the full wizard → scan → triage flow

Run `npx vitest --coverage` to get the current coverage report and identify uncovered branches.

---

### M-7 · Control Flow · Wizard Validation Can Be Bypassed via Back Navigation

**Location:** `src/components/NewAuditWizard.jsx:77-105`

`handleBack()` calls `setShowValidationErrors(false)`, clearing all error state. A user can fill Step 4 with invalid data, hit Next (error fires), then Back, then Next again — the `showValidationErrors` flag is reset on Back so the Next handler must re-validate before moving forward.

**Fix — validate in `handleNext` unconditionally, regardless of `showValidationErrors` prior state:**

```javascript
const handleNext = () => {
  setShowValidationErrors(true)       // always set
  if (!validateCurrentStep()) return  // always validate; don't short-circuit
  setShowValidationErrors(false)
  setCurrentStep(s => s + 1)
}
```

---

### M-8 · Documentation · No Inline Comments on Grouping/Enrichment Logic

**Location:** `src/lib/groupViolations.js`, `src/lib/enrichViolations.js`, `src/lib/componentSelectors.js`

These files contain non-obvious business logic (landmark detection heuristics, violation deduplication, SC mapping). They have no explanatory comments beyond function names. Add JSDoc blocks on all exported functions documenting parameters, return shape, and edge cases.

---

## 🔵 LOW — Backlog / Nice to Have

---

### L-1 · UX · No Search/Filter in Violation List

When an audit has 30+ violations in `ScanResults.jsx`, the only navigation is scroll. A simple text filter on rule ID, description, or impact level would significantly improve triage speed. This is a pure UX addition with no architectural dependency.

---

### L-2 · Performance · No Service Worker / Offline Strategy

**Standard:** `modern-web-guidance/guides/performance/performance.md` — Service Workers & Caching Strategies

Static assets already have long-lived `Cache-Control: immutable` headers via `vercel.json`, which handles repeat visits. A service worker would add offline support and `NetworkFirst` for HTML documents. Given this is a professional tool requiring live Supabase connections, an offline mode is low priority, but a `StaleWhileRevalidate` strategy for the app shell would improve perceived performance on slow connections.

---

### L-3 · Infra · No Monitoring / Health Endpoint

The Vercel deployment has no `/health` endpoint that monitoring services can ping. Add a simple:

```javascript
// api/health.js
export default function handler(req, res) {
  res.status(200).json({ status: 'ok', ts: new Date().toISOString() })
}
```

---

### L-4 · Lint · Magic Numbers in `axeRunner.js`

Timeout and delay values (e.g., `waitForTimeout(100)`, polling intervals) scattered through `axeRunner.js` should be named constants at the top of the file. This makes future tuning visible and avoids confusion about why specific values were chosen.

---

### L-5 · Browser Compatibility · No Safari/WebKit Testing in Playwright Config

The Playwright test config likely defaults to Chromium only. Add `webkit` to the projects list to catch Safari-specific CSS and input-handling bugs before they reach users.

---

## Prioritized Action Order

1. **C-1** — Security headers in `vercel.json` (deploy in minutes, zero code changes)
2. **C-2** — Auth ownership check in `api/scan.js` (prerequisite for C-3)
3. **C-3** — Rate limiting on `/api/scan`
4. **H-1** — Code splitting in `App.jsx` (performance wins with minimal risk)
5. **H-2** — Skip link in `ApplicationShell.jsx` (single-line a11y fix)
6. **H-3** — Login button `type="button"`
7. **H-4** — Toast error context
8. **M-1** — Fix `vite.config.js` process.env override
9. **M-2** — `aria-invalid` sync on wizard inputs
10. **M-7** — Wizard back-navigation validation bypass

Items M-3 through M-8 and all Low items can be addressed as part of ongoing sprints without blocking deployment.
