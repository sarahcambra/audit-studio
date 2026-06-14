# Project: Audit Studio

Last updated: 2026-05-28

---

## What this is

A WCAG 2.1/2.2 accessibility auditing tool. Users create audits, scan pages/components/flows, triage violations, and export reports. Built as a SaaS tool, intended to be open-sourced.

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + Vite 8 + Flowbite Pro React + Tailwind CSS v4 |
| Auth + DB | Supabase (GitHub + Google OAuth, PostgreSQL, realtime) |
| API | Vercel serverless functions (thin dispatchers only) |
| Scan worker | Node.js + Express + Playwright + axe-core |
| Deploy (frontend) | Vercel CLI — no GitHub connection |
| Deploy (worker) | Railway CLI — no GitHub connection |

---

## Live URLs

- Frontend: deployed on Vercel (production)
- Scan worker: `https://scan-worker-production-3058.up.railway.app`

---

## Project folder

Local path: `audit-studio` (was renamed from `auditV2`)

---

## How a scan works (step by step)

1. User adds pages/components/flows to the audit scope
2. User clicks Run Scan
3. `useScanRunner` (React hook) fetches the Supabase session JWT
4. POST to `/api/scan` with `Authorization: Bearer <jwt>`
5. `api/scan.js` (Vercel) verifies JWT → checks user owns the audit → checks rate limit
6. Creates a `scan_job` row in Supabase with `status: running`
7. Fires POST to Railway worker (fire-and-forget, no await)
8. Returns `{ jobId }` immediately to frontend
9. Railway worker launches Playwright + Chromium, navigates to URL, runs axe-core
10. Worker writes results to `scan_results` table, sets `scan_job.status = complete`
11. Frontend polls Supabase every 3s until status = complete, then loads results

---

## Key source files

```
src/
  App.jsx                          — routes, lazy loading
  context/AuthContext.jsx          — Supabase auth (GitHub + Google OAuth)
  context/ThemeContext.jsx         — light/dark mode
  hooks/useScanRunner.js           — scan queue, job dispatch, polling
  lib/db/audits.js                 — createAudit, getAudit, getAudits, updateAudit
  lib/db/scans.js                  — scan results DB helpers
  lib/groupViolations.js           — groups axe violations by rule + landmark
  lib/enrichViolations.js          — adds WCAG SC metadata to violations
  lib/componentSelectors.js        — CSS selector heuristics for component scans
  lib/scCount.js                   — calculates applicable WCAG success criteria
  components/ApplicationShell.jsx  — shell: sidebar + topbar + skip link
  components/scan/ScanPanel.jsx    — scan tab container
  components/scan/ScanResults.jsx  — violation list + triage UI
  components/NewAuditWizard.jsx    — 5-step audit creation wizard
  pages/AuditsPage.jsx             — audit list
  pages/AuditDetailPage.jsx        — audit detail + scan tabs
  pages/LoginPage.jsx              — GitHub + Google sign-in
api/
  scan.js                          — job dispatcher (JWT auth + ownership + rate limit)
  favicon.js                       — fetches site favicon/og:image
  lib/supabaseClient.js            — server-side Supabase client (service role key)
scan-worker/
  index.js                         — Express server, Playwright + axe-core
  Dockerfile                       — uses mcr.microsoft.com/playwright:v1.51.0-noble
```

---

## Environment variables

### Vercel (frontend + API)
```
VITE_SUPABASE_URL          — Supabase project URL
VITE_SUPABASE_ANON_KEY     — public anon key (safe in client bundle)
                             ALSO needed server-side in api/scan.js to verify JWTs
SUPABASE_SERVICE_ROLE_KEY  — server-side only, bypasses RLS
SCAN_WORKER_URL            — Railway worker URL
SCAN_WORKER_SECRET         — shared Bearer token with worker
```

### Railway (scan worker)
```
SUPABASE_URL               — Supabase project URL
SUPABASE_SERVICE_KEY       — service role key
WORKER_SECRET              — shared Bearer token with Vercel API
PORT                       — 3001
```

---

## Security model

- All scan requests require a valid Supabase JWT in `Authorization: Bearer`
- Server verifies JWT and confirms `audit.user_id = authenticated user`
- Rate limit: 10 scans per 60 seconds per audit
- Worker requires `Authorization: Bearer WORKER_SECRET` on all requests except `/health`
- Supabase RLS is enabled on all tables

---

## Fixes applied 2026-05-28

| File | What changed |
|---|---|
| `vercel.json` | Added X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, COOP, CSP-Report-Only |
| `api/scan.js` | JWT verification, audit ownership check, rate limiting (10/min) |
| `useScanRunner.js` | Sends `Authorization: Bearer JWT` on every scan request |
| `App.jsx` | All page components are now lazy-loaded with Suspense |
| `ApplicationShell.jsx` | Skip link added before sidebar, `<main id="main-content" tabIndex={-1}>` |
| `LoginPage.jsx` | Both sign-in buttons have `type="button"` |
| `vite.config.js` | Replaced `process.env:{}` with explicit `NODE_ENV`, added `build.target: es2022` |
| `NewAuditWizard.jsx` | Validation errors persist across step navigation (no longer reset on Next) |

---

## Pending issues

| ID | Severity | Description |
|---|---|---|
| H-4 | High | No user-facing error toasts — errors only go to console |
| M-2 | Medium | Wizard inputs missing `aria-invalid` sync with visual error state |
| M-5 | Medium | No `React.memo` on ScanResults — re-renders on every poll tick |
| M-6 | Medium | Test coverage gaps: useScanRunner hook, api/scan ownership |
| M-8 | Medium | No JSDoc on groupViolations, enrichViolations, componentSelectors |

Full plan: see `REMEDIATION_PLAN.md`

---

## Deploy commands

```bash
# Frontend
vercel --prod

# Scan worker
cd scan-worker
railway up
```

---

## Railway setup notes (no GitHub — CLI only)

Railway project name: `audit-studio`
Railway service name: `worker`

First-time setup:
```bash
npm install -g @railway/cli
railway login
cd scan-worker
railway link          # link to existing project if session expired
railway service create
railway variables set SUPABASE_URL=...
railway variables set SUPABASE_SERVICE_KEY=...
railway variables set WORKER_SECRET=...
railway variables set PORT=3001
railway up
railway domain        # generates public URL
```

Re-deploy after code changes:
```bash
cd scan-worker
railway login         # if session expired
railway link          # select audit-studio
railway up
```

---

## Known scan-worker bug (fixed)

`/health` endpoint was placed after the auth middleware, so it returned `{"error":"Unauthorized"}` even without a token. Fix: move the health route **before** `app.use(authMiddleware)` in `scan-worker/index.js`.

```js
// CORRECT order in scan-worker/index.js
app.get('/health', (_req, res) => res.json({ status: 'ok' }))  // public

app.use((req, res, next) => {   // auth middleware comes after
  ...
})

---

## Design system rules

- Use Flowbite Pro React components — do not invent custom ones
- Source of truth: `flowbite-react-blocks-1.8.0-beta` → `.claude/flowbite-mcp-pro-1.0.0` → Flowbite MCP
- Icons: lucide-react only (no phosphor, no react-icons)
- Colors: theme.js tokens only — no raw hex values in JSX
- Dark mode: always support it
- Accessibility: WCAG 2.2 + EN 301 549 on all components
