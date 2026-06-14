# Audit Studio — End-to-End User Flow (Login → Report)

**Date:** 2026-06-14
**Derived from:** `src/routes/index.jsx`, `src/hooks/useScanRunner.js`, `functions/handlers/scan.js`, `scan-worker/index.js`, DB schema, CLAUDE.md.

This maps the complete journey a user takes to run an accessibility audit across **10 pages** and reach a report — and flags exactly where the flow is functional vs. stubbed.

---

## The flow, stage by stage

### 1. Authenticate
- Route `/login` → `LoginPage`. Supabase auth (GitHub + Google OAuth). `AuthContext` holds the session JWT.
- **Status:** ✅ functional.

### 2. Create an audit
- `/audits/new` → `NewAuditPage` → `NewAuditWizard` (multi-step: scope, WCAG version `2.1|2.2`, conformance `A|AA|AAA`, pre-test answers, project/client/URL).
- Writes a row to `audits` (`is_draft=true` until completed).
- **Status:** ✅ functional. Validation errors persist across steps (fixed 05-28). *Gap:* inputs lack `aria-invalid` (your M-2).

### 3. Open the audit workspace
- `/audits/:auditId` → `AuditDetailPage`. Tabs: Scan, Triage, (Manual checks), etc.
- **Status:** ✅ functional.

### 4. Run scans across the 10 pages
For **each** page/URL/component/flow the user adds:
1. `useScanRunner` fetches the session JWT and `POST /api/scan` with `{ auditId, scanType, url, … }`.
2. Firebase Function (`handlers/scan.js`) verifies JWT → checks audit ownership → checks rate limit (**10/min**) → inserts a `scan_jobs` row (`status='pending'`) → fires `POST http://<worker>/scan` (fire-and-forget, 3× retry) → returns `{ jobId }`.
3. GCE worker accepts (`202`), launches Chromium (playwright-extra + stealth), hydrates the page, runs **axe-core** + your 17 custom `checks/*`, uploads a screenshot, writes `scan_results` + `triage_items`, flips `scan_jobs.status='complete'`.
4. Frontend gets the update via **Supabase Realtime** (~1 s) and renders `ScanResults`.
- **Status:** ✅ functional, but throughput is **1 scan at a time** (worker concurrency = 1). 10 pages run sequentially; budget ~12–30 s each ⇒ plan for a few minutes total. The 10/min rate limit is comfortably above this.

### 5. Triage findings
- `TriageTab` lists grouped violations; each row expands to a full scan-card (impact/issue-type badges, SC chips, element count, fix difficulty, how-to-fix). Decisions: confirmed / not-failure / manual-check / deferred / dismissed, with dismissal reasons.
- Writes to `triage_items`.
- **Status:** ✅ functional.

### 6. Manual checks
- `manual_checks` rows track SC-level pass/fail/na with evidence, browser tested, environment.
- **Status:** ✅ data model + UI present.

### 7. Generate the report ⚠️
- Routes `/reports/audits` ("Generate WCAG conformance reports"), `/reports/compliance`, `/reports/export` **all render `PlaceholderPage`**. `src/features/report/` is an **empty folder**. The `reports` table and a `captureScreenshot` function exist, but there is **no report-generation code path**.
- **Status:** ❌ **NOT IMPLEMENTED.** The user flow currently dead-ends after triage. This is the single biggest gap relative to "until the report is generated."

---

## Flow diagram (text)

```
[Login ✅] → [New Audit Wizard ✅] → [Audit Detail ✅]
      → for each of 10 pages:
            POST /api/scan ✅ → scan_jobs(pending) ✅
            → GCE worker: Chromium + axe-core + custom checks ✅
            → scan_results + triage_items ✅ → Realtime push ✅
      → [Triage ✅] → [Manual checks ✅]
      → [Generate Report ❌ PlaceholderPage / empty feature]
```

## Gaps & friction in the flow

| Stage | Issue | Severity |
|-------|-------|----------|
| Report | Entire reports section is stubbed; flow can't complete | **Blocker** |
| Scan throughput | Concurrency 1 → 10 pages are serial; no batch "scan all" UI noted | Medium |
| Scan reliability | Health check always "ok" → a dead worker still accepts the 10 jobs, which then time out | Medium |
| Wizard a11y | Inputs missing `aria-invalid`/`aria-describedby` (M-2) | Low |
| Knowledge/Settings | SC Library, Patterns, Fix Templates, Branding, Team — all `PlaceholderPage` | Low (future) |

## Recommended 10-page audit set (to exercise the full flow)

Pick 10 URLs spanning content types that stress different WCAG criteria — this doubles as the input list for the accessibility audit (report 03) and as a realistic end-to-end test of the scan→triage pipeline:

| # | Content type | Why it stresses the flow / which SCs it exercises |
|---|--------------|----------------------------------------------------|
| 1 | E-commerce catalog | Many images & icon-buttons → 1.1.1, 4.1.2, 2.4.4 |
| 2 | News / media article | Heading depth, link purpose, iframes → 1.3.1, 2.4.4, 4.1.2 |
| 3 | Government / public form | Form labels, error handling → 1.3.1, 3.3.2, 4.1.2 |
| 4 | Video / streaming | Media controls, list semantics → 1.2.x, 1.3.1, 4.1.2 |
| 5 | Blog + comment form | Mixed content + user input → 1.3.1, 3.3.2, 2.4.4 |
| 6 | SaaS dashboard / data table | ARIA widgets, table semantics → 1.3.1, 4.1.2 |
| 7 | Restaurant / hospitality | Image-heavy, often missing `lang` → 3.1.1, 1.1.1 |
| 8 | Travel / booking | Multi-step forms, date pickers → 1.3.1, 2.1.1, 4.1.2 |
| 9 | Social feed | Dynamic content, icon controls → 4.1.2, 1.1.1 |
| 10 | University / education catalog | Tables + heading order → 1.3.1, 2.4.6 |

> The accessibility audit in **03_ACCESSIBILITY_AUDIT.md** runs your actual axe-core engine against representative fixtures of all 10 of these, and ships a runnable harness (`audit-10-sites.mjs`) to scan real URLs of your choosing on a machine where Chromium works.

## To make the flow complete

The one change that unblocks "until the report is generated": **build the `report` feature.** Minimum viable path —
1. Read `audits`, `triage_items`, `manual_checks`, `scan_results`, `screenshots` for the audit.
2. Compose a WCAG conformance report (summary by SC + conformance level, confirmed failures, evidence/screenshots, manual-check verdicts).
3. Render to PDF/HTML (you already have the `pdf`/`docx` skills available), upload to the `reports` bucket, insert a `reports` row (`status` generating→complete).
4. Replace the three `/reports/*` PlaceholderPages with the real views.
