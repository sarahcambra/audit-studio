# AuditV2 — Directory & Module Map

> Comprehensive architectural reference for the AuditV2 accessibility auditing platform.  
> Last updated: 2026-06-15

---

## 1. Root-Level Overview

| File / Directory | Purpose |
|------------------|---------|
| `package.json` | Frontend manifest — React 19, Vite, Tailwind, Flowbite, Vitest, Storybook, Supabase-js, Lucide/Phosphor icons |
| `vite.config.js` | Vite build config with path aliases (`@`, `@features`, `@shared`, `@pages`, `@lib`, `@config`), favicon dev middleware, `es2022` target |
| `vitest.config.js` | Test runner config — jsdom component tests + Storybook browser tests (Playwright), path aliases mirrored from Vite |
| `tailwind.config.js` | Tailwind CSS config with `flowbite/plugin`, dark-mode `class`, CSS custom-property colour scale |
| `index.html` | SPA entry HTML |
| `README.md` | Project overview, quick-start, deployment notes |
| `CLAUDE.md` | 1336-line operational runbook — infrastructure fixes, incident history, GCE/Caddy setup |
| `src/` | React application source (see §2) |
| `scan-worker/` | Standalone Playwright + axe-core scan engine (see §3) |
| `functions/` | Firebase Cloud Functions v2 API layer (see §4) |
| `supabase/` | SQL migrations, views, RLS policies, storage setup (see §5) |
| `tests/` | Unit + component tests (see §6) |
| `.storybook/` | Storybook configuration (no stories yet) (see §7) |
| `docs/` | Project documentation — this file plus `ARCHITECTURE.md` |

---

## 2. Frontend — `src/`

### 2.1 Entry & Bootstrap

| File | Purpose |
|------|---------|
| `src/main.jsx` | Application bootstrap — mounts `<App />` into DOM, imports CSS |
| `src/App.jsx` | Root component — sets up `ErrorBoundary`, `PrivateRoute` (auth currently disabled for testing), `ApplicationShell`, `Suspense` lazy-loading, and the full `<Routes>` tree |
| `src/routes/index.jsx` | **(Legacy)** `createBrowserRouter` config with lazy-loaded pages — kept for reference; active routing lives in `App.jsx` |
| `src/accessibility.css` | Global accessibility styles |

### 2.2 Pages — `src/pages/`

Top-level route pages, all lazy-loaded in `App.jsx`.

| File | Route | Purpose |
|------|-------|---------|
| `LoginPage.jsx` | `/login` | OAuth sign-in (GitHub + Google) via `useAuth` |
| `AuditsPage.jsx` | `/audits` | Dashboard — audit list, filters, search, pagination, stat cards, pipeline mini |
| `AuditDetailPage.jsx` | `/audits/:auditId` | Single audit view — overview, scan panel, triage tab, manual checks, report generation |
| `NewAuditPage.jsx` | `/audits/new` | Wraps `NewAuditWizard` in a card |
| `IssueDetailPage.jsx` | `/audits/:auditId/issues/:issueId` | Deep-dive into a single violation group |
| `UserProfilePage.jsx` | `/users/profile` | User profile / settings |
| `PlaceholderPage.jsx` | Various | Stub pages for unimplemented routes (reports, knowledge, settings sub-pages) |

### 2.3 Feature Modules — `src/features/`

Each feature exposes its public API via an `index.js` barrel file.

#### `src/features/auth/`
| File | Purpose |
|------|---------|
| `AuthProvider.jsx` | Supabase auth context provider — session management, sign-in/out, GitHub/Google OAuth |
| `hooks/useAuth.js` | `useAuth()` hook exposing `user`, `signInWithGitHub`, `signInWithGoogle`, `signOut`, `loading` |
| `components/ProfilePageHeader.jsx` | Profile page chrome |
| `index.js` | Barrel: exports `AuthProvider`, `useAuth` |

#### `src/features/audit/`
| File | Purpose |
|------|---------|
| `components/AuditForm/NewAuditWizard.jsx` | 5-step wizard: info → project details → pre-test → scope → review |
| `components/AuditForm/steps/Step1Info.jsx` | Audit name, WCAG version, conformance level |
| `components/AuditForm/steps/Step2ProjectDetails.jsx` | Client name, project name, website URL |
| `components/AuditForm/steps/Step3PreTest.jsx` | Pre-test questionnaire |
| `components/AuditForm/steps/Step4Scope.jsx` | Scope items (pages / components / flows) |
| `components/AuditForm/steps/Step5Review.jsx` | Final review before creation |
| `components/AuditForm/AuditDetailsFields.jsx` | Reusable form field set |
| `components/AuditForm/AuditNavFooter.jsx` | Wizard navigation footer |
| `components/AuditForm/NewAuditStepper.jsx` | Stepper UI |
| `components/AuditDetail/OverviewTab.jsx` | Audit detail overview tab |
| `hooks/useAudits.js` | Fetch audits list |
| `hooks/useAudit.js` | Fetch single audit |
| `hooks/useCreateAudit.js` | Create audit mutation |
| `hooks/useUpdateAudit.js` | Update audit mutation |
| `hooks/useDeleteAudit.js` | Delete audit mutation |
| `hooks/useArchiveAudit.js` | Archive audit mutation |
| `hooks/index.js` | Barrel for audit hooks |
| `schema/auditSchema.js` | Zod/Yup validation schema for audit forms |
| `index.js` | Barrel: exports wizard, overview tab, hooks |

#### `src/features/scan/`
| File | Purpose |
|------|---------|
| `hooks/useScanRunner.js` | **~20 KB** — Core scan orchestration hook. Validates inputs, calls Firebase Function `/api/scan`, polls Supabase `scan_jobs` table, processes results via `groupViolations` + `enrichResults`, saves screenshots, writes triage items, updates activity log |
| `components/ScanPanel.jsx` | Scan initiation UI embedded in `AuditDetailPage` |
| `components/PageScanTab.jsx` | Single-page scan form |
| `components/ComponentScanTab.jsx` | Component-level scan form |
| `components/FlowScanTab.jsx` | Multi-step flow scan form |
| `components/ScanProgressBanner.jsx` | Polling status banner |
| `components/ScanResults.jsx` | Results display / violation list |

#### `src/features/triage/`
| File | Purpose |
|------|---------|
| `components/TriageTab.jsx` | Main triage UI — violation groups, decision buttons, filters, bulk actions |
| `components/IssueDetailDrawer.jsx` | Slide-out drawer for deep-dive on a single violation group — code snippets, WCAG references, screenshots, evidence upload |

#### `src/features/issue/`
| File | Purpose |
|------|---------|
| `components/IssueHeader.jsx` | Issue page header |
| `components/IssueSidebar.jsx` | Issue sidebar metadata |

#### `src/features/report/`
| File | Purpose |
|------|---------|
| `generateConformanceReport.js` | Generates downloadable WCAG conformance report from triage + manual checks |
| `index.js` | Barrel: exports report generator |

### 2.4 Shared Modules — `src/shared/`

#### `src/shared/layout/`
| File | Purpose |
|------|---------|
| `ApplicationShell.jsx` | Root layout — navbar, side-nav, footer, outlet for routes |
| `DashboardNavbar.jsx` | Top navigation bar |
| `DoubleSidenav.jsx` | Collapsible side navigation |
| `DefaultFooter.jsx` | Footer component |
| `NavbarUserDropdown.jsx` | User avatar / sign-out dropdown |
| `index.js` | Barrel: exports all layout components |

#### `src/shared/ui/`
A large library of ~45 reusable UI components. Key ones:

| File | Purpose |
|------|---------|
| `DataTable.jsx` | Sortable, paginated table with column presets |
| `ErrorBoundary.jsx` | React error boundary with fallback UI |
| `Modal.jsx` | Confirm / form / generic modal system |
| `Loading.jsx` | Loading spinners (inline + fullscreen) |
| `Skeleton.jsx` | Skeleton loaders (card, table variants) |
| `Badge.jsx` | Generic + WCAG + Impact badge variants |
| `badges/StatusBadge.jsx` | Status indicator badge |
| `badges/DecisionBadge.jsx` | Triage decision badge |
| `badges/ManualCheckBadge.jsx` | Manual check status badge |
| `filters/SearchInput.jsx` | Debounced search input |
| `filters/FilterDropdown.jsx` | Multi-select filter dropdown |
| `filters/Tabs.jsx` | Tab navigation |
| `ScoreRing.jsx` | SVG score ring for audit dashboard |
| `PipelineMini.jsx` | Compact pipeline stage indicator |
| `PipelineBar.jsx` / `PipelineSteps.jsx` | Full pipeline visualisation |
| `StatCard.jsx` | Dashboard metric card |
| `AiInsightsCard.jsx` | AI summary card (placeholder) |
| `SeverityBar.jsx` | Violation severity distribution bar |
| `EmptyState.jsx` | Illustrative empty-state component |
| `CodeSnippet.jsx` | Syntax-highlighted code display |
| `CopyButton.jsx` | Clipboard copy utility button |
| `AppBreadcrumb.jsx` | Breadcrumb navigation |
| `Timeline.jsx` | Activity timeline |
| `ActivityFeed.jsx` | Real-time activity feed |
| `AssigneeStack.jsx` | Avatar stack for assignees |
| `JsonView.jsx` | Collapsible JSON inspector |
| `icons/index.jsx` | Custom icon exports (dots, chevron) |
| `index.js` | Barrel: exports all UI primitives |

#### `src/shared/context/`
| File | Purpose |
|------|---------|
| `ThemeContext.jsx` | Dark/light mode provider |
| `ToastContext.jsx` | Toast notification system — `toast.success/error/warning/info()` |
| `index.js` | Barrel: exports `ThemeProvider`, `useTheme`, `ToastProvider`, `useToast` |

#### `src/shared/utils/`
| File | Purpose |
|------|---------|
| `date.js` | Date formatting, relative time, overdue checks |
| `format.js` | Capitalize, truncate, number formatting, ID generation |
| `audit.js` | Score formatting (`fmtScore`), score colour classes, avatar colours, initials |
| `index.js` | Barrel: aggregates all utility exports |

#### `src/shared/hooks/`
| File | Purpose |
|------|---------|
| `index.js` | Barrel for shared cross-cutting hooks |

#### `src/shared/constants/`
| File | Purpose |
|------|---------|
| `index.js` | Barrel for application constants |

### 2.5 Library — `src/lib/`

#### Data Access — `src/lib/db/`
All DB modules use the Supabase client from `src/lib/supabase.js`.

| File | Purpose |
|------|---------|
| `audits.js` | `createAudit`, `getAudits`, `getAudit` (merges `audit_summary` view + raw `audits` row), `updateAudit`, `archiveAudit`, `deleteAudit`, `updateAuditFavicon` |
| `scans.js` | `createScanJob`, `updateScanJob`, `saveScanResults`, `getScanJobs`, `saveScreenshot` (uploads to Supabase Storage bucket `screenshots`) |
| `triage.js` | `saveTriage`, `getTriageItems`, `getTriageItemById`, `getScanResultsWithViolations`, `updateTriageItem`, `saveOverrides`, `uploadEvidenceFile`, `appendEvidenceFiles` (uses atomic Postgres RPC) |
| `manualChecks.js` | `getManualChecks`, `saveManualCheckVerdict`, `createManualCheck`, `updateManualCheck`, `uploadManualCheckImage` |
| `catalog.js` | `getCatalogItems`, `createCatalogItem`, `updateCatalogItem`, `deleteCatalogItem` |
| `kb.js` | `getKbOverrides`, `saveKbOverride` — knowledge-base rule customisations |

#### Accessibility Utilities
| File | Purpose |
|------|---------|
| `ruleEnrichments.js` | **~155 KB, 2957 lines** — Curated metadata database mapping every axe rule ID to auditor-friendly titles, fix instructions, code examples, affected users, WCAG techniques/failures, difficulty ratings |
| `groupViolations.js` | Collapses axe violations by `ruleId + nearest landmark` into triage cards; tags each group with `issueType` (`failure` / `best-practice` / `needs review`) |
| `enrichViolations.js` | Overlays `RULE_ENRICHMENTS` onto raw axe violations — adds `auditorTitle`, `clientFix`, `badExample`, `goodExample`, `affectedUsers`, `fixDifficulty`, etc. |
| `axeRuleCategories.js` | Categorisation helpers: `isBestPractice`, `isExperimental`, `isAriaRule`, `isContrastRule`, `categorizeRule`, `groupViolationsByCategory`, `groupPassesByCategory` |
| `wcagReferences.js` | WCAG 2.1 SC → official W3C Understanding page URL map |
| `wcagScData.js` | SC metadata helper (`getScLevel`) |
| `wcagScLevels.js` | SC level logic with tests |
| `componentSelectors.js` | CSS selector library for common component patterns |
| `componentPatterns.js` | Recognised component pattern definitions |
| `elementUtils.js` | DOM element inspection helpers |
| `urlUtils.js` | URL normalisation and validation |
| `scCount.js` | Success-criterion counting logic |

#### Service Clients
| File | Purpose |
|------|---------|
| `supabase.js` | Frontend Supabase client initialisation — URL and anon key `[REDACTED]` |

### 2.6 Configuration — `src/config/`
| File | Purpose |
|------|---------|
| `theme.js` | **~23 KB** — Comprehensive Flowbite theme override object (`customTheme`) covering cards, buttons, modals, inputs, tables, dropdowns, badges, toast, pagination, datepicker, drawers, stepper |
| `index.js` | Barrel: `export { customTheme } from './theme.js'` |

---

## 3. Scan Worker — `scan-worker/`

Standalone Express server running on a GCE VM (`worker.incluria.com`) via Docker + Caddy + Let's Encrypt. Handles long-running Playwright scans without Vercel's 60-second timeout.

| File | Purpose |
|------|---------|
| `index.js` | **~23 KB** — Express server entry. Routes: `POST /scan` (run scan), `POST /capture` (screenshot with highlighting), `GET /health`. Boots Playwright with stealth plugins, runs axe-core, executes custom checks, uploads screenshots to Supabase Storage, writes `scan_results`, `triage_items`, `scan_jobs` updates |
| `lib/ruleConfig.js` | Rule weighting / severity overrides for the worker's axe runner |
| `lib/logger.js` | Structured logging utilities |
| `checks/index.js` | **Custom checks orchestrator** — registry of 27 custom accessibility checks. Each check exports `async function run(page) → Finding[]`. Stamps `provenance` (`act:<id>`, `act-candidate:<id>`, `extended`) and `tier` (`act` or `extended`). Supports `profile: 'act'` (strict only) or `'full'` |
| `checks/pageTitle.js` | Page title presence & quality |
| `checks/placeholderContrast.js` | Placeholder text colour contrast |
| `checks/languagePage.js` | `lang` attribute on `<html>` |
| `checks/autocomplete.js` | `autocomplete` attribute on inputs |
| `checks/linkColor.js` | Link distinguishability by colour alone |
| `checks/linkPurpose.js` | Link text descriptiveness |
| `checks/focusVisible.js` | Focus indicator visibility |
| `checks/imageAnnotation.js` | Image alt / annotation quality |
| `checks/reflow.js` | Content reflow at 320 px |
| `checks/focusObscured.js` | Focus not obscured |
| `checks/labelInName.js` | Visible label in accessible name |
| `checks/orientation.js` | Orientation lock |
| `checks/textSpacing.js` | Text spacing adaptability |
| `checks/nonTextContrast.js` | Non-text element contrast |
| `checks/targetSize.js` | Minimum target size (24×24 CSS px) |
| `checks/skipLink.js` | Bypass block / skip-link presence |
| `checks/structureEvidence.js` | Heading / landmark structure |
| `checks/audioControl.js` | Auto-playing audio control |
| `checks/scrollableKeyboard.js` | Scrollable regions keyboard accessible |
| `checks/iframeTabindex.js` | Iframe tabindex trapping |
| `checks/keyboardTrap.js` | Keyboard trap detection |
| `checks/autoUpdating.js` | Auto-updating content control |
| `checks/fieldLabelDescriptive.js` | Descriptive field labels |
| `checks/zoomClipped.js` | Content clipped at 200 % zoom |
| `checks/mediaAlternatives.js` | Media alternatives |
| `checks/manualReminders.js` | Reminders for manual checks |
| `README.md` | Worker setup, deployment (Railway / Fly.io / GCE), environment variables |
| `package.json` | Worker manifest — `playwright`, `@axe-core/playwright`, `playwright-extra`, `puppeteer-extra-plugin-stealth`, `@supabase/supabase-js` |

---

## 4. API Layer — `functions/`

Firebase Cloud Functions v2. Replaces the original Vercel API layer.

| File | Purpose |
|------|---------|
| `index.js` | Function entry — exports `scan`, `captureScreenshot`, `favicon` HTTPS handlers via `firebase-functions/v2/https` |
| `handlers/scan.js` | **~6.6 KB** — Scan job dispatcher. Validates JWT via Supabase Auth, rate-limits (10 scans/min), creates `scan_jobs` row, calls scan worker with retry (3× exponential backoff), returns `{ jobId }` immediately. Logs to `audit_activity_log` |
| `handlers/captureScreenshot.js` | **~4.7 KB** — Re-capture screenshot for an existing triage item. Verifies ownership, calls worker `/capture`, updates `triage_items.screenshot_url` |
| `handlers/favicon.js` | **~3 KB** — Favicon / OG image proxy. Scrapes target page for `og:image`, `apple-touch-icon`, or `<link rel="icon">`; falls back to Google favicon service |
| `lib/supabaseClient.js` | Server-side Supabase client using service-role key (bypasses RLS). Env vars: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`. Includes `assertEnv()` |
| `package.json` | Functions manifest — Node 22, `firebase-functions`, `@supabase/supabase-js`, `ws` |

---

## 5. Database & Migrations — `supabase/`

| File | Purpose |
|------|---------|
| `audit_summary_view.sql` | `audit_summary` view — computed columns: `pipeline_stage`, `untriaged_count`, `critical_count`, `needs_review_count`, `best_practice_count`, `blocking_count`, `scan_count`, `last_scanned_at`. Uses `security_invoker = true` (PostgreSQL 15+) to enforce RLS through the view |
| `rls.sql` | Row Level Security policies |
| `migrations/20260614_act_tiering.sql` | Adds `provenance` to `triage_items`, `scan_profile` to `scan_jobs`, index for ACT filtering |
| `migrations/20240612_add_triage_columns.sql` | Early triage schema additions |
| `migrations/supabase_migration_favicon.sql` | Favicon URL column on `audits` |
| `migrations/supabase_migration_triage_fix.sql` | Triage schema fixes (multiple iterations) |
| `migrations/supabase_migration_triage_columns.sql` | Initial triage columns |
| `migrations/supabase_migration_triage_overrides.sql` | Triage overrides JSONB |
| `migrations/supabase_storage_setup.sql` | Storage buckets setup |
| `migration_append_evidence_files.sql` | Atomic `append_evidence_files` Postgres function |
| `migration_audit_summary_security_invoker.sql` | Security invoker migration for `audit_summary` |
| `migration_selectors_to_highlight.sql` | `selectors_to_highlight` column |
| `migration_stale_jobs_cron.sql` | Cron job for stale scan-job cleanup |
| `migration_custom_checks_json.sql` | `custom_checks_json` column on `scan_results` |
| `add_page_language_column.sql` | `page_language` column |
| `migration_scan_jobs_page_language.sql` | `page_language` on `scan_jobs` |
| `migration_kb_overrides_constraint.sql` | `kb_overrides` uniqueness constraint |
| `migration_triage_array_types.sql` | Array-type columns on triage |
| `storage_triage_evidence.sql` | `triage-evidence` bucket policy |
| `migration_screenshot_url.sql` | `screenshot_url` on `triage_items` |
| `migration_triage_constraint.sql` | Triage unique constraint |
| `migration_screenshots.sql` | Screenshots table / bucket |
| `migration_manual_checks_v2.sql` | `manual_checks` v2 schema |
| `fix_screenshots_bucket_policy.sql` | Screenshot bucket RLS fix |

---

## 6. Tests — `tests/`

| File | Type | Purpose |
|------|------|---------|
| `setup.js` | Shared | Vitest setup file (jsdom environment) |
| `unit/wcagReferences.test.js` | Unit | WCAG URL mapping correctness |
| `unit/wcagScLevels.test.js` | Unit | SC level logic |
| `unit/axeRuleCategories.test.js` | Unit | Rule categorisation |
| `unit/componentSelectors.test.js` | Unit | Component selector patterns |
| `unit/groupViolations.test.js` | Unit | Violation grouping logic |
| `unit/scCount.test.js` | Unit | SC counting |
| `component/ScanResults.test.jsx` | Component | Scan results UI (currently failing — Vitest 1.6 vs Vite 8 JSX transform issue) |
| `component/Step4Scope.test.jsx` | Component | Scope step wizard UI |

**Note:** Component tests are currently broken due to Vitest 1.6.0 predating Vite 8 / Rolldown. Unit tests pass cleanly (137/137).

---

## 7. Storybook — `.storybook/`

| File | Purpose |
|------|---------|
| `main.js` | Storybook main config — Vite builder, addon-a11y |
| `preview.jsx` | Global decorators, theme wrapper |

> **Status:** Configured but empty — no `.stories.jsx` files exist yet.

---

## 8. Module Connection Map

### 8.1 Frontend Bootstrap Flow
```
index.html → src/main.jsx → src/App.jsx
    ↓
ApplicationShell (layout) + Routes (pages)
    ↓
Lazy-loaded pages: AuditsPage, AuditDetailPage, NewAuditPage, etc.
```

### 8.2 Auth Flow
```
LoginPage → useAuth() (GitHub/Google OAuth)
    ↓
supabase.auth.signInWithOAuth() → Supabase Auth
    ↓
AuthProvider monitors session → refreshes user state
    ↓
App.jsx PrivateRoute (currently disabled) guards protected routes
```

### 8.3 Scan Flow — Request Path
```
User clicks "Scan" in AuditDetailPage
    ↓
useScanRunner.js
    → Validates inputs (URL, scope, WCAG version)
    → POST /api/scan (Firebase Function)
         ↓
    functions/handlers/scan.js
         → JWT validation (Supabase Auth)
         → Rate-limit check (10/min via scan_jobs count)
         → Create scan_jobs row (status: 'pending')
         → POST /scan to scan-worker (async, 3× retry)
         → Return { jobId }
    ←
    useScanRunner polls Supabase scan_jobs every 3 s
         ↓
    scan-worker/index.js receives job
         → Launch Playwright (stealth mode)
         → Run axe-core
         → Run custom checks (checks/index.js registry)
         → Group + enrich violations
         → Upload screenshots → Supabase Storage
         → Insert scan_results, triage_items, update scan_jobs → 'complete'
    ←
    useScanRunner sees status='complete'
         → Fetches results
         → Renders triage UI
```

### 8.4 Triage Flow
```
TriageTab.jsx
    ↓
getTriageItems(auditId) → Supabase triage_items
    ↓
Auditor makes decision (confirm / dismiss / needs review)
    ↓
saveTriage({ auditId, jobId, groupId, decision, ... })
    ↓
Upsert into triage_items (onConflict: audit_id, group_id)
    ↓
Evidence upload → Supabase Storage 'triage-evidence' bucket
    ↓
appendEvidenceFiles() via atomic Postgres RPC
```

### 8.5 Report Flow
```
AuditDetailPage → "Generate Report" button
    ↓
generateConformanceReport.js
    → Fetch all triage_items + manual_checks for audit
    → Filter confirmed failures
    → Build WCAG conformance statement
    → Download as file / open in new tab
```

### 8.6 Data Layer Dependencies
```
src/lib/db/*.js  →  src/lib/supabase.js  →  Supabase (PostgreSQL + Storage + Auth)
                        ↑
functions/lib/supabaseClient.js  →  Supabase (service-role key)
                        ↑
scan-worker/index.js  →  Supabase (service-role key)
```

---

## 9. Barrel-File Convention

AuditV2 uses a **barrel-file pattern** (`index.js` in each folder) to centralise the public API of every module:

| Barrel | Exports |
|--------|---------|
| `src/config/index.js` | `customTheme` |
| `src/features/auth/index.js` | `AuthProvider`, `useAuth` |
| `src/features/audit/index.js` | `NewAuditWizard`, `OverviewTab`, hooks |
| `src/features/report/index.js` | `generateConformanceReport` |
| `src/shared/layout/index.js` | `ApplicationShell`, `DashboardNavbar`, etc. |
| `src/shared/ui/index.js` | ~30 UI primitives |
| `src/shared/context/index.js` | `ThemeProvider`, `useTheme`, `ToastProvider`, `useToast` |
| `src/shared/utils/index.js` | Date, format, audit helpers |
| `src/shared/hooks/index.js` | Shared cross-cutting hooks |
| `src/shared/constants/index.js` | App constants |

---

## 10. Environment Variables & Secrets

All live credentials and API keys are redacted below:

| Variable | Location | Purpose |
|----------|----------|---------|
| `VITE_SUPABASE_URL` | Frontend `.env` | Supabase project URL — `[REDACTED]` |
| `VITE_SUPABASE_ANON_KEY` | Frontend `.env` | Supabase anon key — `[REDACTED]` |
| `SUPABASE_URL` | Firebase Functions / scan-worker | Same project URL — `[REDACTED]` |
| `SUPABASE_SERVICE_ROLE_KEY` | Firebase Functions / scan-worker | Service-role key — `[REDACTED]` |
| `SCAN_WORKER_URL` | Firebase Functions | GCE worker endpoint — `[REDACTED]` |
| `SCAN_WORKER_SECRET` | Firebase Functions / scan-worker | Bearer token for worker auth — `[REDACTED]` |
| `FIREBASE_HOSTING_URL` | Firebase Functions | Allowed CORS origin — `[REDACTED]` |
| `WORKER_SECRET` | scan-worker | Same as `SCAN_WORKER_SECRET` — `[REDACTED]` |

---

## 11. Tech Stack Summary

| Layer | Technology |
|-------|------------|
| Frontend Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS + Flowbite React |
| Routing | React Router DOM v6 |
| State | React hooks + contexts (no global state library) |
| Backend API | Firebase Cloud Functions v2 (Node 22) |
| Database | Supabase (PostgreSQL 15+) |
| Auth | Supabase Auth (OAuth: GitHub, Google) |
| Storage | Supabase Storage (screenshots, triage-evidence) |
| Scan Engine | Playwright 1.60 + axe-core 4.10 + stealth plugins |
| Hosting | Firebase Hosting (`incluria.com`) |
| Worker Hosting | Google Compute Engine VM + Docker + Caddy |
| Testing | Vitest 1.6 + @testing-library/react + jsdom |
| Storybook | v8 with addon-a11y |
| Icons | Lucide React + Phosphor Icons |
| Package Manager | npm |
