# AuditV2 — System Architecture

> A comprehensive WCAG 2.1/2.2 accessibility auditing tool.  
> React 19 + Vite frontend, Playwright + axe-core scan worker on GCE VM, Firebase Functions, Supabase backend.

---

## Table of Contents

1. [System Overview](#1-system-overview)
2. [Detailed Scan Pipeline](#2-detailed-scan-pipeline)
3. [Data Model](#3-data-model)
4. [Component Hierarchy](#4-component-hierarchy)
5. [Custom Checks Architecture](#5-custom-checks-architecture)

---

## 1. System Overview

AuditV2 is split into three logical layers:

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (React 19 + Vite)                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │ AuditsPage  │  │AuditDetailPg│  │   IssueDetailPage   │ │
│  │  (listing)  │  │  (scan+tri) │  │   (single issue)    │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
│         ▲                ▲                    ▲             │
│         └────────────────┴────────────────────┘             │
│                    ApplicationShell                         │
│              (sidebar + navbar + content)                   │
│  Tech: React 19, Vite 8, Tailwind CSS v4, Flowbite React   │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTPS / JSON
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              API LAYER (Firebase Functions v2)              │
│  ┌──────────────┐  ┌──────────────────┐  ┌───────────────┐ │
│  │   scan.js    │  │ captureScreenshot│  │  favicon.js   │ │
│  │  (dispatch)  │  │   (screenshots)    │  │ (favicon px)│ │
│  └──────────────┘  └──────────────────┘  └───────────────┘ │
│  - JWT validation via Supabase Auth                         │
│  - Rate limiting (10 scans/min)                             │
│  - Worker retry logic (3 attempts, exponential backoff)     │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP + Bearer secret
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              SCAN WORKER (GCE VM, Dockerised)                 │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │  Playwright-Extra + Stealth Plugin + axe-core           │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │ │
│  │  │Page Scan    │  │ComponentScan│  │   Flow Scan     │   │ │
│  │  │ (static)    │  │ (selector)  │  │ (multi-step)  │   │ │
│  │  └─────────────┘  └─────────────┘  └─────────────────┘   │ │
│  │  ┌─────────────────────────────────────────────────────┐  │ │
│  │  │        Custom Checks (20 checks, tiered)            │  │ │
│  │  │  page-title · placeholder-contrast · skip-link    │  │ │
│  │  │  focus-visible · keyboard-trap · zoom-clipped · ... │  │ │
│  │  └─────────────────────────────────────────────────────┘  │ │
│  └─────────────────────────────────────────────────────────┘ │
│  - Polls Supabase `scan_jobs` for pending work                │
│  - Uploads screenshots to Supabase Storage                    │
│  - Writes results back to Supabase                            │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ Postgres + Realtime + Storage
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    SUPABASE (Postgres)                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │   audits    │  │  scan_jobs  │  │    scan_results     │ │
│  │   users     │  │triage_items │  │   audit_activity_log│ │
│  │  profiles   │  │manual_checks│  │   kb_overrides      │ │
│  │  reports    │  │screenshots  │  │   catalog_items      │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
│  - Row Level Security (RLS) on all tables                     │
│  - Realtime subscriptions for live scan updates             │
│  - Storage bucket: `screenshots` (private)                    │
└─────────────────────────────────────────────────────────────┘
```

### Key Technologies

| Layer | Technology | Purpose |
|-------|------------|---------|
| Frontend | React 19, Vite 8, Tailwind CSS v4, Flowbite React | UI framework, build, styling, components |
| Routing | React Router v6 | Client-side navigation |
| API | Firebase Cloud Functions v2 (Node.js) | Thin job dispatcher, CORS, auth, rate limits |
| Scan Engine | Playwright-Extra + Stealth + axe-core | Browser automation, accessibility testing |
| Worker Host | Google Compute Engine (GCE) e2-medium VM | Docker container with Chrome |
| Database | Supabase (PostgreSQL) | Data persistence, RLS, Realtime |
| Storage | Supabase Storage | Screenshot PNG files |
| Auth | Supabase Auth (OAuth, currently disabled for testing) | User identity |

---

## 2. Detailed Scan Pipeline

The scan pipeline is an 8-step asynchronous flow from user click to results display.

### Numbered Flow

| Step | Actor | Action | Details |
|------|-------|--------|---------|
| **1** | **User** | Click **Scan** on `AuditDetailPage` | Selects scan type: `page`, `component`, or `flow`. |
| **2** | **Frontend** | `useScanRunner` queues job locally | `addPageScan()` / `addComponentScan()` / `addFlowScan()` creates a pending job object with a local ID. |
| **3** | **Frontend** | `runNextJob()` POSTs to Firebase Function | `fetch('/api/scan')` with `auditId`, `scanType`, `url`, `selector`/`steps`, `wcagVersion`, `conformanceLevel`, `activeSCList`, and auth Bearer token. |
| **4** | **Firebase Function** | Validates & creates job | `scan.js` handler: validates JWT → checks rate limit (10/min) → inserts row into `scan_jobs` (status=`pending`) → returns `{ jobId }`. |
| **5** | **Firebase Function** | Dispatches to worker | Calls `POST {workerUrl}/scan` with worker payload (up to 3 retries, exponential backoff). Worker returns 202 immediately. |
| **6** | **Scan Worker** | Polls & executes | GCE worker polls `scan_jobs` for `pending` rows. On pick-up: launches Playwright + Stealth Chrome → navigates with fallback strategy → runs axe-core + custom checks → takes overlay screenshots. |
| **7** | **Scan Worker** | Writes results | Inserts `scan_results` row (violations, incomplete, passes, inapplicable, grouped_violations, custom_checks_json, summary). Upserts `triage_items` for each violation group. Uploads screenshots to Supabase Storage. Marks `scan_jobs` as `complete`. |
| **8** | **Frontend** | Displays results | Supabase Realtime subscription (`postgres_changes` on `scan_jobs`) fires `complete` event. `useScanRunner` fetches `scan_results`, updates local job state → `ScanResults.jsx` / `TriageTab` re-renders with violation cards, screenshots, and triage lanes. |

### Timing & Resilience

- **Frontend→Function**: ~200ms (auth + rate limit + insert).
- **Function→Worker**: ~500ms (with retry, async — frontend gets `jobId` before worker finishes).
- **Worker scan**: 5–60s typical, 9-minute hard watchdog (`SCAN_TIMEOUT_MS`).
- **Realtime update**: ~1s after worker marks `complete`.
- **Backup polling**: 30s fallback timer + 10-minute stale-job watchdog.

### Error Handling

| Failure Point | Behaviour |
|---------------|-----------|
| Rate limit exceeded | HTTP 429, retry after 60s |
| Worker unreachable | 3 retries with backoff → mark `scan_jobs` as `error` |
| Worker crash mid-scan | Startup recovery marks stale `running`/`pending` jobs as `error` |
| Browser launch failure | `/health` returns 503; worker still alive but advertises degraded |
| Realtime missed event | 30s backup poll + 10-min watchdog auto-resolve |

---

## 3. Data Model

Supabase (PostgreSQL) with Row Level Security (RLS). All tables live in the `public` schema unless noted.

### Core Tables

#### `audits`
An accessibility audit engagement.

| Column | Type | Description |
|--------|------|-------------|
| `id` | `uuid` (PK) | Audit identifier |
| `user_id` | `uuid` (FK → `auth.users`) | Owner |
| `name` | `text` | Audit name |
| `wcag_version` | `text` | `2.1` or `2.2` |
| `conformance_level` | `text` | `A`, `AA`, or `AAA` |
| `status` | `text` | `active`, `complete`, `archived` |
| `scope_json` | `jsonb` | Scope items array |
| `pre_test_answers` | `jsonb` | Wizard pre-test data |
| `project_name`, `client_name`, `website_url` | `text` | Metadata |
| `started_at`, `completed_at` | `timestamptz` | Lifecycle timestamps |
| `pipeline_stage` | `int` | UI pipeline indicator (0–3) |
| `is_draft` | `boolean` | Draft flag |

#### `scan_jobs`
A single scan request (page, component, or flow).

| Column | Type | Description |
|--------|------|-------------|
| `id` | `uuid` (PK) | Job identifier |
| `audit_id` | `uuid` (FK) | Parent audit |
| `scan_type` | `text` | `page`, `component`, `flow` |
| `url` | `text` | Target URL |
| `selector` | `text` | Component selector (nullable) |
| `flow_steps` | `jsonb` | Flow step definitions (nullable) |
| `status` | `text` | `pending`, `running`, `complete`, `error` |
| `error_message` | `text` | Failure reason |
| `created_at`, `started_at`, `completed_at` | `timestamptz` | Lifecycle timestamps |
| `page_title`, `page_lang` | `text` | Captured page metadata |

#### `scan_results`
Raw axe-core + custom check output for a completed job.

| Column | Type | Description |
|--------|------|-------------|
| `id` | `uuid` (PK) | Result identifier |
| `job_id` | `uuid` (FK → `scan_jobs`) | Parent job |
| `violations_json` | `jsonb` | Axe violations array |
| `incomplete_json` | `jsonb` | Axe incomplete (needs review) array |
| `passes_json` | `jsonb` | Axe passes (usually empty by design) |
| `inapplicable_json` | `jsonb` | Axe inapplicable (usually empty) |
| `grouped_violations` | `jsonb` | Grouped + enriched violation objects |
| `custom_checks_json` | `jsonb` | Results from custom checks |
| `summary` | `jsonb` | Metadata: counts, screenshot URL, WCAG config, duration, page title |
| `violation_count`, `incomplete_count`, `pass_count`, `inapplicable_count` | `int` | Denormalised counters |

#### `triage_items`
An auditor-facing issue row (one per violation group or custom check finding).

| Column | Type | Description |
|--------|------|-------------|
| `id` | `uuid` (PK) | Triage identifier |
| `audit_id` | `uuid` (FK) | Parent audit |
| `job_id` | `uuid` (FK → `scan_jobs`) | Source job |
| `group_id` | `text` | Stable group identifier (e.g. `color-contrast-[landmark]`) |
| `rule_id` | `text` | Axe rule ID or custom check ID |
| `landmark` | `text` | Page landmark context |
| `issue_type` | `text` | `failure` or `needs review` |
| `impact` | `text` | `critical`, `serious`, `moderate`, `minor` |
| `decision` | `text` | Auditor verdict: `confirmed`, `dismissed`, `needs_fix`, `not_tested` |
| `page_name`, `selector` | `text` | Location metadata |
| `tags`, `sc_ids` | `text[]` | WCAG tags and success criteria |
| `wcag_sc` | `text` | Primary SC |
| `provenance` | `text` | `axe-core`, `extended`, `act:<rule>`, `act-candidate:<rule>` |
| `element_snippet` | `text` | HTML snippet of first affected node |
| `screenshot_url` | `text` | Public URL to overlay screenshot |
| `friendly_description` | `text` | Human-readable issue summary |
| `location_context` | `text` | Where on the page |
| `visible_text` | `text` | Affected element text content |
| `tag_name` | `text` | HTML tag |
| `selectors_to_highlight` | `text[]` | Selectors for re-capture highlighting |
| `auditor_notes`, `dismissal_reason` | `text` | Auditor free-text |
| `overrides_json` | `jsonb` | KB override data |
| `updated_at` | `timestamptz` | Last modification |

Unique index: `(audit_id, group_id)` — supports `upsert` from worker.

#### `manual_checks`
Always-manual WCAG success criteria tracking.

| Column | Type | Description |
|--------|------|-------------|
| `id` | `uuid` (PK) | Check identifier |
| `audit_id` | `uuid` (FK) | Parent audit |
| `sc_id` | `text` | WCAG SC (e.g. `1.2.1`) |
| `status` | `text` | `pass`, `fail`, `na`, `not_tested` |
| `notes` | `text` | Auditor notes |
| `evidence_url` | `text` | Supporting evidence |
| `completed_at` | `timestamptz` | Completion timestamp |

#### `profiles`
User profile extension (trigger-created on auth sign-up).

| Column | Type | Description |
|--------|------|-------------|
| `id` | `uuid` (PK, FK → `auth.users`) | User identifier |
| `email` | `text` | Email address |
| `full_name` | `text` | Display name |
| `avatar_url` | `text` | Profile image |
| `organisation` | `text` | Org name |
| `role` | `text` | `auditor`, `admin`, etc. |

#### Supporting Tables

| Table | Purpose |
|-------|---------|
| `screenshots` | Metadata for uploaded screenshot files (links to `scan_jobs`) |
| `reports` | Generated report records (PDF/CSV exports) |
| `kb_overrides` | Per-user overrides for rule enrichment data |
| `catalog_items` | Reusable component selector presets (user + global) |
| `audit_activity_log` | Audit-level event stream (scan started, completed, failed) |

### Views

- **`audit_summary`** — Computed view joining `audits`, `triage_items`, `scan_jobs`, and `manual_checks` to provide denormalised stats (total issues, open issues, completion %, last scan date) for the audits listing page.

### Storage Buckets

- **`screenshots`** — Private bucket. Files stored under `{jobId}/{filename}.png`. RLS policies restrict access to the audit owner.
- **`triage-evidence`** — Evidence files attached to triage decisions.

### Row Level Security (RLS)

Every table has RLS enabled. The core pattern:

- `audits` — user can only access rows where `user_id = auth.uid()`.
- `scan_jobs`, `scan_results`, `triage_items`, `manual_checks`, `screenshots` — access is gated through a sub-query to `audits` verifying ownership.
- `kb_overrides`, `profiles`, `reports`, `catalog_items` — direct `auth.uid()` checks.

A trigger `on_auth_user_created` auto-creates a `profiles` row on sign-up.

---

## 4. Component Hierarchy

### Shared Layout

```
App.jsx (ErrorBoundary)
└── Routes
    ├── /login → LoginPage (no shell)
    └── /* → PrivateRoute
            └── ApplicationShell
                    ├── Skip link (a11y)
                    ├── Desktop Sidebar (aside)
                    │   ├── Logo header
                    │   ├── SidebarNav
                    │   │   ├── NavLinkItem / NavIconItem (collapsed)
                    │   │   └── NavCollapse → SubNavItem
                    │   └── Toggle button (collapse/expand)
                    ├── Mobile Drawer (flowbite-react Drawer)
                    │   └── SidebarNav
                    ├── Right Column
                    │   ├── Navbar card (header)
                    │   │   ├── Mobile hamburger
                    │   │   ├── Search bar (navigates to /audits?q=...)
                    │   │   ├── New Audit button
                    │   │   ├── Notifications dropdown
                    │   │   ├── Apps dropdown
                    │   │   └── User dropdown (Avatar + sign out)
                    │   └── <main id="main-content">
                    │       └── Suspense → lazy page component
                    └── Routes (nested)
```

### Pages (Route Components)

All pages are lazy-loaded (`React.lazy`) to keep the initial bundle small.

| Route | Page Component | Key Features |
|-------|---------------|--------------|
| `/` | `AuditsPage` | Audit listing with tabs (All / Active / Needs Triage / Complete / Archived), search, filters, stat cards, pagination |
| `/audits` | `AuditsPage` | Same as above |
| `/audits/new` | `NewAuditPage` | Wizard: Pre-test → Scope → WCAG config → Review → Submit |
| `/audits/:auditId` | `AuditDetailPage` | Overview tab + Scan panel + Triage tab + Manual Checks tab |
| `/audits/:auditId/scan` | `AuditDetailPage` | Same, pre-opens scan panel |
| `/audits/:auditId/issues/:issueId` | `IssueDetailPage` | Single issue view with evidence, notes, fix guidance |
| `/users/profile` | `UserProfilePage` | Profile editing, avatar, org settings |
| `/login` | `LoginPage` | Supabase auth (currently disabled for testing) |
| `/audits/projects`, `/audits/archived`, `/reports/*`, `/knowledge/*`, `/settings/*` | `PlaceholderPage` | Feature stubs |

### Feature Modules

```
src/features/
├── auth/
│   ├── AuthProvider.jsx          # Supabase auth context
│   └── components/
│       └── ProfilePageHeader.jsx
├── audit/
│   ├── components/
│   │   ├── AuditDetail/
│   │   │   └── OverviewTab.jsx   # Score ring, metadata, summary
│   │   └── AuditForm/
│   │       └── NewAuditWizard.jsx
│   │       └── steps/
│   │           ├── Step1Info.jsx
│   │           ├── Step2Scope.jsx
│   │           ├── Step3Config.jsx
│   │           ├── Step4Assign.jsx
│   │           └── Step5Review.jsx
│   └── hooks/
│       ├── useAudits.js
│       ├── useUpdateAudit.js
│       └── useDeleteAudit.js
├── scan/
│   ├── components/
│   │   ├── ScanPanel.jsx         # Scan type selector, queue, controls
│   │   └── ScanResults.jsx       # Violation cards, grouped results
│   └── hooks/
│       └── useScanRunner.js      # Job queue, Realtime subscription, runAll
├── triage/
│   └── components/
│       └── TriageTab.jsx         # Triage lanes, decision buttons
├── issue/
│   └── components/
│       ├── IssueHeader.jsx
│       └── IssueSidebar.jsx
└── report/
    └── generateConformanceReport.js
```

### Shared Modules

```
src/shared/
├── layout/
│   └── ApplicationShell.jsx      # Sidebar, navbar, mobile drawer
├── ui/
│   ├── ErrorBoundary.jsx
│   ├── AppBreadcrumb.jsx
│   ├── DataTable.jsx
│   ├── StatCard.jsx
│   ├── PipelineMini.jsx
│   ├── Badge.jsx
│   ├── ManualCheckBadge.jsx
│   └── icons/index.jsx
├── context/
│   └── ToastContext.jsx
└── utils/
    └── audit.js
```

### Data Layer (`src/lib/`)

```
src/lib/
├── db/
│   ├── audits.js         # createAudit, getAudits, getAudit, updateAudit, deleteAudit
│   ├── scans.js          # createScanJob, updateScanJob, saveScanResults, getScanJobs
│   ├── triage.js         # saveTriage, getTriageItems, updateTriageItem, uploadEvidenceFile
│   └── manualChecks.js   # getManualChecks, saveManualCheckVerdict
├── supabase.js           # Supabase client singleton
├── ruleEnrichments.js    # 2957-line database: axe rule → human guidance
├── wcagScData.js         # WCAG SC metadata
└── elementUtils.js       # DOM helper utilities
```

---

## 5. Custom Checks Architecture

Beyond axe-core, the scan worker runs 20 custom accessibility checks in `scan-worker/checks/`. These cover gaps that axe-core either does not detect or detects insufficiently.

### Registry (`checks/index.js`)

Each check exports an async `run(page)` function returning a `Finding[]` array.

```typescript
interface Finding {
  checkId:        string   // e.g. 'custom-focus-visible'
  sc:             string   // WCAG SC, e.g. '2.4.7'
  confidence:     'CONFIRMED_FAIL' | 'NEEDS_REVIEW'
  failureBasis:   string   // F-technique or ACT rule reference
  message:        string   // Human-readable summary
  data:           object   // Raw evidence (elements, ratios, selectors)
  nodeCount:      number   // Elements affected
  elementSnippet: string   // First element HTML snippet
  provenance:     string   // Stamped by orchestrator: 'act:<id>', 'act-candidate:<id>', 'extended'
  tier:           string   // 'act' | 'extended'
}
```

### Check List (20 checks)

| # | Check ID | WCAG SC | What it detects | Tier |
|---|----------|---------|-----------------|------|
| 1 | `page-title` | 2.4.2 | Missing or empty `<title>` | extended |
| 2 | `placeholder-contrast` | 1.4.3 | Placeholder text with insufficient contrast | extended |
| 3 | `language-page` | 3.1.1 | Missing or invalid `lang` attribute | extended |
| 4 | `autocomplete` | 1.3.5 | Missing `autocomplete` on identifiable inputs | extended |
| 5 | `link-color` | 1.4.1 | Links distinguished by colour alone | extended |
| 6 | `link-purpose` | 2.4.4 | Non-descriptive link text ("click here", "read more") | extended |
| 7 | `focus-visible` | 2.4.7 | Focus indicator not visible or suppressed | extended |
| 8 | `image-annotation` | 1.1.1 | Images without alt, or decorative images mis-marked | extended |
| 9 | `reflow` | 1.4.10 | Content lost or clipped at 320px equivalent width | extended |
| 10 | `focus-obscured` | 2.4.11 | Focused element hidden behind sticky headers/modals | extended |
| 11 | `label-in-name` | 2.5.3 | Accessible name does not contain visible label text | extended |
| 12 | `orientation` | 1.3.4 | Page locks orientation without alternative | extended |
| 13 | `text-spacing` | 1.4.12 | Text clipped when line-height/letter-spacing increased | extended |
| 14 | `non-text-contrast` | 1.4.11 | UI components/icons with insufficient contrast | extended |
| 15 | `target-size` | 2.5.8 | Clickable targets smaller than 24×24 CSS pixels | extended |
| 16 | `skip-link` | 2.4.1 | Missing skip link, broken target, or obscured target | extended |
| 17 | `structure-evidence` | 1.3.1 | Heading level skips, duplicate unlabelled landmarks, pseudo-lists | extended |
| 18 | `audio-control` | 1.4.2 | Auto-playing audio without easy stop/pause control | extended |
| 19 | `scrollable-keyboard` | 2.1.1 | Scrollable regions not reachable by keyboard | extended |
| 20 | `iframe-tabindex` | 2.1.1 | Focusable iframe with negative tabindex trapping focus | extended |
| 21 | `keyboard-trap` | 2.1.2 | Keyboard focus trapped in component/iframe | extended |
| 22 | `auto-updating` | 2.2.2 | Auto-updating content without pause/stop/hide control | extended |
| 23 | `field-label-descriptive` | 2.4.6 | Form labels too generic to identify purpose | extended |
| 24 | `zoom-clipped` | 1.4.4 | Content clipped or unreachable at 200% zoom | extended |
| 25 | `media-alternatives` | 1.2.2 | Video/audio lacking captions, transcripts, or alternatives | extended |
| 26 | `manual-reminders` | manual | Reminders for checks requiring human judgement | extended |

### Tier System

- **`act`** — Check has been validated against ACT rule test cases (`act-validate.mjs`). Runs in BOTH the strict ACT profile and the full profile.
- **`extended`** — Check maps to an ACT rule or goes beyond ACT but has NOT yet passed validation test cases. Runs ONLY in the full profile.

Promotion path: A check starts as `extended`. Once it passes its ACT rule's test cases via `scan-worker/act-validate.mjs`, its `tier` is updated to `act`.

### Orchestrator (`runCustomChecks`)

```javascript
export async function runCustomChecks(page, { profile = 'full' } = {}) {
  const active = profile === 'act'
    ? CHECKS.filter(c => c.tier === 'act')
    : CHECKS          // all checks

  for (const c of active) {
    const findings = await c.fn(page)
    for (const f of findings) {
      f.provenance = provenanceFor(c)   // 'act:2779a5', 'act-candidate:5effbb', 'extended'
      f.tier = c.tier
    }
  }
  return allFindings
}
```

### Integration with Scan Results

Custom check findings are stored in `scan_results.custom_checks_json` and converted to `triage_items` rows by the worker (same upsert path as axe violations). Each custom triage row gets:

- `provenance`: `'extended'` or `'act:<ruleId>'`
- `issue_type`: `'failure'` (CONFIRMED_FAIL) or `'needs review'` (NEEDS_REVIEW)
- `screenshot_url`: overview screenshot (no per-group overlay for custom checks)
- `selectors_to_highlight`: extracted from check `data` for re-capture

### Rule Config (`lib/ruleConfig.js`)

Controls screenshot behaviour per axe rule ID:

```javascript
// screenshot types:
//   'element'  — highlight matching elements (default, cap at maxElements)
//   'page'     — full-page shot with corner badge (structural rules)
//   'none'     — skip screenshot (page-level invisible rules)
//   special: 'image-legend' — whole-page colour-coded image annotation

getRuleConfig('color-contrast')   // → { screenshot: 'element', maxElements: 8 }
getRuleConfig('heading-order')      // → { screenshot: 'page', maxElements: 0 }
getRuleConfig('document-title')     // → { screenshot: 'none' }
getRuleConfig('image-alt')          // → { screenshot: 'element', special: 'image-legend' }
```

### Screenshot Engine

The worker takes two kinds of screenshots:

1. **Overview screenshot** — First successful group screenshot becomes the `summary.screenshotUrl` shown in `ScanResults`.
2. **Per-group overlay screenshots** — For each violation group, an orange (#ea580c) highlight layer is injected via Playwright `page.evaluate()`, then a viewport or full-page PNG is captured. Overlays are cleaned up between groups.

All screenshots are uploaded to Supabase Storage under `{jobId}/group-{groupId}-{timestamp}.png`.

---

## Appendix: File References

| File | Purpose |
|------|---------|
| `src/App.jsx` | Route definitions, lazy loading, auth gating |
| `src/shared/layout/ApplicationShell.jsx` | Sidebar, navbar, mobile drawer, skip link |
| `src/features/scan/hooks/useScanRunner.js` | Job queue, Realtime, scan lifecycle |
| `functions/handlers/scan.js` | Firebase Function scan dispatcher |
| `functions/index.js` | Function exports (scan, favicon, captureScreenshot) |
| `scan-worker/index.js` | Main worker: HTTP server, scan orchestrator, screenshot engine |
| `scan-worker/checks/index.js` | Custom checks registry & orchestrator |
| `scan-worker/lib/ruleConfig.js` | Per-rule screenshot configuration |
| `src/lib/ruleEnrichments.js` | Axe rule → human guidance database |
| `supabase/rls.sql` | Row Level Security policies |
| `supabase/audit_summary_view.sql` | Denormalised audit stats view |
