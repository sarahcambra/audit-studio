# Audit Studio — 14-Point Code Review

**Date:** 2026-06-14
**Reviewer:** Claude (autonomous overnight run)
**Scope:** `/Users/sarah/auditV2` — React 19 + Vite SPA, Firebase Functions, Supabase, GCE scan-worker
**Method:** Static read of source, git metadata, config, and DB schema. No live stack access.

---

## Severity summary

| # | Area | Worst finding | Severity |
|---|------|---------------|----------|
| 1 | Architecture & structure | Empty `report` feature, legacy `components/` vs `features/` overlap | Medium |
| 2 | **Security** | **Real `FIGMA_ACCESS_TOKEN` committed in tracked `.env`** | **Critical** |
| 3 | Correctness & logic | Rate-limit check fails **open** when count query errors | High |
| 4 | Error handling | Health endpoint always returns `ok` ("health check lies") | Medium |
| 5 | Dependencies | `axe-core` in frontend `dependencies`; bleeding-edge majors | Medium |
| 6 | Performance | Single-process worker, concurrency 1 | Medium (known) |
| 7 | Accessibility (own UI) | Solid baseline; not continuously verified | Low |
| 8 | Testing & coverage | **No `test` script**; duplicate vitest env config | High |
| 9 | Code quality | `scan-worker/index.js` = 1,874 lines monolith | Medium |
| 10 | Documentation | Doc sprawl + internal contradictions | Medium |
| 11 | Config & environment | 4 `.env` files, env-var name drift, dead Vercel config | High |
| 12 | Infrastructure | Single GCE VM, hardcoded IP, no IaC/CI; prior outage | High |
| 13 | Data integrity | Messy ad-hoc migration files; good schema otherwise | Low |
| 14 | Observability | console-only logging, no alerting on VM down | Medium |

**Top 3 to fix first:** (2) rotate & untrack the leaked Figma token → (3) rate-limit fail-open → (11/12) env-var drift + hardcoded worker IP.

---

## 1. Architecture & structure — *Medium*

**Good:** Clean feature-based layout (`src/features/{auth,audit,scan,triage,issue}`), barrel exports, Vite path aliases (`@features`, `@shared`, …), reusable `DataTable`. This is a well-organized front end.

**Issues:**
- `src/features/report/` exists but is **empty** — the report feature is unbuilt (see §Flow review). The whole `reports/*` route tree renders `PlaceholderPage`.
- Legacy `src/components/` (e.g. `user-profile/`) coexists with the newer `src/features/` pattern — two competing conventions.
- `src/hooks/useScanRunner.js` lives at the top level, not under `features/scan/hooks` where the architecture doc says feature hooks belong.

**Recommendation:** Decide whether `report` is in-scope; if yes, scaffold it. Migrate `src/components/*` into features or `shared/ui`. Move `useScanRunner` into `features/scan`.

## 2. Security — *Critical*

- **CRITICAL — secret committed to git.** `.env` is **tracked** (`git ls-files` lists it) and contains a live `FIGMA_ACCESS_TOKEN=figd_…` plus `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`. The token has been in history since the initial commit (`a410020`), so it is exposed to anyone with repo access and cannot be unshared by simply editing the file.
  **Action (in priority order):** (1) **rotate the Figma token now** in Figma settings — assume it is compromised; (2) `git rm --cached .env` (done for you — see report 04); (3) purge it from history (`git filter-repo` or BFG) before any push to a shared/public remote. The Supabase **anon** key is public by design and is fine to expose; the Figma token is not.
- **Bearer token over plaintext HTTP.** Functions call the worker at `http://35.226.21.209:3001/scan` (see `functions/.env` / CLAUDE.md). The shared `WORKER_SECRET` travels unencrypted. Caddy/Let's-Encrypt was set up (Fix #3) but the deployed function bypasses it by hitting the raw IP:3001. Route through `https://…` via Caddy, or restrict port 3001 to internal traffic only.
- **Permissive CORS.** `functions/handlers/scan.js` sets `Access-Control-Allow-Origin: '*'` while accepting an `Authorization` header. Lock the origin to the Firebase Hosting domain.
- **Firewall exposes 3001 publicly** (`--allow tcp:3001`), making the worker directly reachable from the internet behind only the bearer token. Prefer Caddy-only ingress (80/443) and drop public 3001.

**Good:** JWT verification + audit-ownership check before queuing a scan; service-role key used only server-side; worker `process.exit(1)` if secrets missing.

## 3. Correctness & logic — *High*

- **Rate limit fails open.** In `scan.js`:
  ```js
  const { count } = await supabase.from('scan_jobs').select(..., { count:'exact', head:true })...
  if (count >= RATE_LIMIT_MAX) { ...429... }
  ```
  The query's `error` is never checked and `count` can be `null`. `null >= 10` is `false`, so **any error in the count query silently disables rate limiting**. Guard it: `if ((count ?? 0) >= RATE_LIMIT_MAX)` and bail out / log when `error` is set.
- **Dispatch is fire-and-forget.** The handler `Promise.race`s the worker call against a 500 ms timer and returns `{ jobId }` regardless. That's an intentional design, but the client gets a `200` even when the worker is unreachable; the job only flips to `error` asynchronously. Acceptable given Realtime updates, but worth a comment/regression test.

**Good:** `resolveSelector()` multi-strategy fallback is a pragmatic answer to brittle axe `:nth-child` targets.

## 4. Error handling — *Medium*

- **Health check lies (acknowledged debt).** `GET /health` returns `{status:'ok'}` unconditionally — it never verifies Chromium can launch, so a broken worker still advertises healthy and accepts jobs. Make it launch (or reuse) a browser and return non-200 on failure.
- **Good:** the codebase consistently uses `.then(null, () => {})` on Supabase Postgrest queries (their own documented rule — followed), 3× worker retry with backoff, a 2-min worker watchdog, and a 10-min client watchdog.

## 5. Dependencies — *Medium*

- **`axe-core` is in frontend `dependencies`** (`package.json`) but is only needed by the scan-worker. If it's imported anywhere under `src/`, it bloats the client bundle (~550 KB). Confirm it isn't, and move it to the worker's own deps.
- **Bleeding-edge majors:** Vite 8, ESLint 10, Vitest 4, Storybook 10, React 19, react-router 7. Fine, but fast-moving — pin via lockfile and run `npm audit` / `npm outdated` regularly.
- A lot of `@storybook/*` and test tooling in devDeps is healthy; just ensure unused ones (e.g. `@vitest/browser-playwright`) are actually wired up.

## 6. Performance — *Medium (mostly known)*

- `lazy()` code-splitting on all routes ✅, `React.memo` on `ScanResults` ✅.
- Single Node process, **concurrency = 1** on the worker — one Chromium blocks all scans (acknowledged; watchdog mitigates). A queue or child-process-per-scan model is the real fix once you have >10 users.
- Watch the `axe-core`-in-frontend bundle question above.

## 7. Accessibility of the product's own UI — *Low*

Strong baseline already: skip link, `main#main-content tabIndex={-1}`, `<th scope="col">` in `DataTable`, `focus:ring-primary-300`, aria-labels on icon buttons. You also have `@storybook/addon-a11y` installed.
**Recommendation:** wire the a11y addon into CI and dogfood your own scanner against the app's built pages — an accessibility tool should ship an accessible UI, and you have the means to prove it automatically.

## 8. Testing & coverage — *High*

- **No `test` script in `package.json`.** `vitest` and `@vitest/coverage-v8` are installed and ~12 test files exist (`src/lib/*.test.js`, `tests/unit/*`, `tests/component/*`), but `npm test` fails outright — so CI/contributors can't run the suite by convention. (Added for you — see report 04.)
- **Duplicate/ambiguous test env.** `vite.config.js` declares its own `test: { environment: 'node' }` block while `vitest.config.js` sets `environment: 'jsdom'`. Two configs, two environments — component tests need jsdom; whichever Vitest resolves first wins and can silently break the other set. Consolidate to one config.
- Known coverage gaps (your own REMEDIATION notes, M-6): `useScanRunner` and `api/scan` ownership path are untested — exactly the security-critical code.

## 9. Code quality & readability — *Medium*

- `scan-worker/index.js` is **1,874 lines** — a monolith. The custom `checks/*` are nicely modularized, so the server, browser lifecycle, screenshot engine, and normalization should be extractable into siblings too.
- The favicon resolver leans on a stack of hand-rolled HTML regexes (`vite.config.js` + `functions/handlers/favicon.js`) — fragile; a tiny HTML parser would be sturdier.
- Otherwise readable, well-commented, consistent style.

## 10. Documentation — *Medium*

- `CLAUDE.md` is genuinely excellent and current — but it's 45 KB and contains **contradictions**: Cloud Run instructions sit alongside the GCE migration that replaced them, and it documents both `SUPABASE_SERVICE_KEY` (worker) and `SUPABASE_SERVICE_ROLE_KEY` (functions) without flagging that they differ.
- **Doc sprawl in repo root:** `REMEDIATION_PLAN.md` + `REMEDIATION_PLAN_2026-05-29.md`, `PHASE1..4_COMPLETE.md`, `TECHNICAL_AUDIT_2026-05-30.md`, `COMPREHENSIVE_AUDIT_REPORT.md`, `ARCHITECTURE_PLAN.md` + `ARCHITECTURE_COMPLETE.md`. No single source of truth. Move historical docs into `/docs/archive/`.

## 11. Config & environment — *High*

- **Four** root `.env` files: `.env` (tracked!), `.env.example`, `.env.local`, `.env.vercel-check`. Confusing and risky.
- **Env-var name drift** across the stack: functions expect `SUPABASE_SERVICE_ROLE_KEY`, the worker expects `SUPABASE_SERVICE_KEY`, and CLAUDE.md uses both. One typo = a 503 with a misleading message. Standardize on one name (or document the split explicitly at every site).
- **Dead Vercel config** after the Firebase migration: `vercel.json`, `.vercel/`, `.env.vercel-check`, `api/` (Vercel-style) still present. Remove to avoid confusion about what actually deploys.
- ✅ The `vite define` `process.env.NODE_ENV` mapping is the correct fix for React mode detection.

## 12. Infrastructure & deployment — *High*

- **Single GCE VM, no IaC.** The worker is built **by hand on the VM** (`docker build` over SSH). The static IP `35.226.21.209` is hardcoded into `functions/.env` and CLAUDE.md. The VM was **deleted once already (2026-06-11)** causing a full scan outage discovered manually. This is the biggest operational risk.
- **No CI/CD** evident — deploys are manual `firebase deploy` / `gcloud` commands.
- **Recommendation:** capture the VM + firewall + IP in Terraform (or at least a single scripted bootstrap), add a managed-instance-group or a healthcheck-driven auto-restart, and move the worker URL to an env-driven config rather than a baked-in IP.

## 13. Data integrity — *Low*

- Schema is solid: `CHECK` constraints on enums (status, decision, impact…), FKs throughout, sensible defaults.
- **Migration hygiene is messy:** root holds `supabase_migration_triage_fix.sql`, `…_fix2.sql`, `…_fix3.sql`, `…_favicon.sql`, etc., separate from `supabase/`. Consolidate into ordered `supabase/migrations/` so the schema is reproducible.
- `scan_results` links to `scan_jobs` but not directly to `audits`; orphan risk is low but a stale-job cleanup story should cover `scan_results` too.

## 14. Observability & resilience — *Medium*

- Logging is `console.log/error` only — no structured logs, no error tracker (Sentry/Cloud Error Reporting), no metrics.
- **No alerting**: the VM-deletion outage was found by hand. Add an uptime check on `/health` (once it tells the truth — see §4) with notification.
- ✅ Watchdogs (2-min worker, 10-min client) and stale-job recovery + pg_cron safety net are good resilience primitives.
- "Triage fire-and-forget" can occasionally drop data (your own noted debt) — add retry/confirmation.

---

## Quick-win backlog (low risk, high value)

1. **Rotate the Figma token; untrack `.env`; purge history.** (Critical.)
2. Add `(count ?? 0)` + error check to the rate limiter. (High.)
3. Add a `test` script + collapse to one Vitest config. (High.) *(test script added — report 04.)*
4. Standardize the Supabase service-key env var name. (High.)
5. Route worker traffic through HTTPS / drop public port 3001. (High.)
6. Make `/health` reflect real Chromium readiness; add an uptime alert. (Medium.)
7. Delete dead Vercel config; archive historical `.md` docs into `/docs`. (Medium.)
8. Move `axe-core` out of frontend `dependencies` if unused client-side. (Medium.)
