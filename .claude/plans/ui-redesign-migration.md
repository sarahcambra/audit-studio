# Migration Plan: Audit Studio UI Redesign

## Current State vs. New Design

### Existing Screens
| Screen | File | Status |
|--------|------|--------|
| Dashboard (Audits list) | `src/pages/AuditsPage.jsx` | Needs full redesign |
| Audit Detail (tabs) | `src/pages/AuditDetailPage.jsx` | Needs full redesign |
| New Audit (wizard) | `src/pages/NewAuditPage.jsx` + `src/features/audit/components/AuditForm/*` | Merge into drawer |
| Login | `src/pages/LoginPage.jsx` | Keep as-is (not in design) |
| User Profile | `src/pages/UserProfilePage.jsx` | Keep as-is (not in design) |

### New Screens from Design
| Screen | Source | Status |
|--------|--------|--------|
| Dashboard Improved | `Audit Dashboard Improved.html` | Redesign existing |
| Audit Detail Improved | `Audit Detail Improved.html` | Redesign existing |
| Issue Full Detail | `Audit Issue Full Detail.html` | **NEW — does not exist** |

---

## Key Design Changes

### 1. Color Palette Shift
| Token | Old | New | Where |
|-------|-----|-----|-------|
| Primary purple | `#540cac` | `#7C3AED` | Buttons, accents, focus rings |
| Purple dark | `#43088a` | `#5B21B6` | Hover states |
| Purple light | `#be93e1` | `#EDE9FE` | Focus shadows, backgrounds |
| Purple xlight | `#f4eff8` | `#F5F3FF` | Active nav bg |
| Page bg | `#F8F7FC` | `#F8F7FC` | Unchanged |
| Border | `#E9E5F0` | `#E9E5F0` | Unchanged |
| Text | `#1E1334` | `#1E1334` | Unchanged |
| Text secondary | `#6B7280` | `#6B7280` | Unchanged |

**Action:** Update `theme.css` primary scale and `index.css` `--accent`. Flowbite `customTheme` in `config/theme.js` auto-updates via Tailwind classes.

### 2. Font Change
| Before | After |
|--------|-------|
| Roboto (heading) + Open Sans (body) | Inter (all) |

**Action:** Update Google Fonts import in `index.css`, remove `--font-sans` / `--font-body` differentiation.

### 3. Layout Structure
| Before | After |
|--------|-------|
| Flowbite Pro sidebar + navbar combo | Custom 216px sidebar + 56px topbar |

**Action:** Rewrite `ApplicationShell.jsx` (or create new `AppShell.jsx`). Sidebar is narrower, cleaner nav items with section labels.

### 4. New Components Needed
| Component | Source | Effort |
|-----------|--------|--------|
| `AiInsightsCard` | Dashboard Improved | Medium |
| `NewAuditDrawer` | Dashboard Improved | Large (replaces wizard page) |
| `IssueDetailPage` | Issue Full Detail | **Large — new screen** |
| `PipelineBar` (mini) | Both | Small |
| `SeverityBar` | Detail Improved | Medium |
| `StatusChips` (pill style) | Both | Small |
| `TriageGrid` (redesigned) | Detail Improved | Medium |
| `ScoreRing` | Detail Improved | Medium |
| `KpiCard` (hover lift) | Detail Improved | Small |
| `Timeline` | Issue Full Detail | Medium |
| `CommentThread` | Issue Full Detail | Medium |

---

## Phase 1: Foundation (Colors + Fonts + Shell)

### 1.1 Update Color Tokens
**Files:** `src/theme.css`, `src/index.css`
- Replace primary-500 through primary-900 with new violet scale
- Update `--accent: #540cac` → `--accent: #7C3AED`
- Keep gray, semantic colors (unchanged)

### 1.2 Switch to Inter Font
**File:** `src/index.css`
- Replace Google Fonts URL: `family=Inter:wght@400;500;600;700`
- Update `--font-sans` to use Inter
- Remove separate `--font-body` / `--font-heading`

### 1.3 Redesign App Shell
**File:** `src/components/AppShell.jsx` (new) or modify existing
- 216px fixed sidebar
- 56px fixed topbar
- Content area with overflow scroll
- Sidebar nav: section labels + nav items with icon + hover/active states
- Topbar: search input, icon buttons, avatar, primary CTA button

---

## Phase 2: Dashboard (`AuditsPage.jsx`)

### 2.1 AI Insights Card (new)
- Purple gradient banner at top
- Badge chips for insights
- Dismissible

### 2.2 Stat Cards Redesign
- Hover: `translateY(-1px)` + purple shadow
- Active filter state: purple ring
- Icon in colored circle (top-right)

### 2.3 Audit Table
- Cleaner rows
- Pipeline mini (dots + dashes)
- Status badges (pill style)
- Score ring (if score column exists)

### 2.4 New Audit Drawer (replaces `NewAuditPage.jsx`)
- Slide-in from right (440px)
- Form fields with new focus style (purple border + light shadow)
- Standard selection grid (WCAG 2.1 vs 2.2)
- Keep existing form validation logic
- **Delete:** `src/pages/NewAuditPage.jsx` and all `AuditForm/*` components
- **Route change:** `/audits/new` → drawer triggered from dashboard

---

## Phase 3: Audit Detail (`AuditDetailPage.jsx`)

### 3.1 Page Header
- Breadcrumb + title + status badge + meta chips
- Score ring in header
- Tab nav with underline active state

### 3.2 Overview Tab (`OverviewTab.jsx`)
- Score card (large ring)
- KPI cards (violations, incomplete, pages, etc.)
- Severity breakdown bar + clickable stats
- Detail cards (audit info, project details)
- Activity timeline
- Pipeline steps

### 3.3 Scan Tab (`ScanPanel.jsx` + sub-tabs)
- Sub-tabs: Pages / Components / Flows
- Scope table (cleaner, with issue chips)
- Scan history table
- Add page/scope buttons

### 3.4 Triage Tab (`TriageTab.jsx`)
- Severity bar at top (critical/serious/moderate/minor counts)
- Status filter chips (pill style, rounded-full)
- Search + filter toolbar
- Bulk actions bar
- **Grid list** (not table) with columns: checkbox, expand, page, issue, category, elements, status, actions
- Expanded row with: code snippet, screenshot, element actions

### 3.5 Manual Checks & Report Tabs
- Keep existing structure but apply new token colors
- Minor restyle only

---

## Phase 4: New Issue Detail Page (NEW SCREEN)

### 4.1 Create `IssueDetailPage.jsx`
**Route:** `/audits/:auditId/issues/:issueId`
- Breadcrumb: Audits → Audit Name → Issue Title
- Issue title + severity pill + WCAG chips + status badge
- Action buttons (edit, assign, etc.)

### 4.2 Tabs
- **Elements:** Full element table with checkboxes, expand, code, page, type, status, actions
  - Expanded: code block, screenshot placeholder, decision buttons, notes input
- **Evidence:** Screenshot + code + description + remediation + WCAG references
- **History:** Timeline with actor + action + time + decision badge
- **Comments:** Thread with avatars + compose area
- **Raw Data:** Syntax-highlighted JSON

### 4.3 Sidebar (right)
- Decision card (confirm / dismiss / manual check)
- Notes / tags / assignee
- Metadata (rule ID, SC, impact, etc.)

**Data source:** `triage_items` table + `RULE_ENRICHMENTS` + `scan_results`

---

## Phase 5: Component Library Updates

### Update `customTheme` in `config/theme.js`
| Component | Change |
|-----------|--------|
| Button color | `bg-primary-700` now maps to `#7C3AED` (via theme.css) |
| Button hover | `#5B21B6` |
| Button focus ring | `#EDE9FE` |
| Badge primary | `bg-purple-light` → `#EDE9FE` |
| Input focus | `border-primary-700` → `#7C3AED` |
| Card hover | Add `hover:shadow-[0_4px_12px_rgba(124,58,237,.08)]` |

### Update Shared Components
| Component | File | Change |
|-----------|------|--------|
| `PageHeader` | `@shared/ui` | Add breadcrumb + meta chips support |
| `DataTable` | `@shared/ui` | Add hover:bg-purple-xlight |
| `Badge` | `@shared/ui` | Add pill variant (rounded-full) |
| `StatCard` | `@shared/ui` | Add hover lift + icon circle |

---

## Phase 6: Navigation & Routing

### Route Changes
| Route | Before | After |
|-------|--------|-------|
| `/audits` | `AuditsPage` | Redesigned `AuditsPage` |
| `/audits/:id` | `AuditDetailPage` | Redesigned `AuditDetailPage` |
| `/audits/:id/issues/:issueId` | **None** | **NEW `IssueDetailPage`** |
| `/audits/new` | `NewAuditPage` | **Remove** → Drawer on `/audits` |
| `/login` | `LoginPage` | Keep |
| `/profile` | `UserProfilePage` | Keep |

### Sidebar Navigation
| Item | Target | Icon |
|------|--------|------|
| Dashboard | `/audits` | LayoutDashboard |
| Audits | `/audits` (same) | ClipboardList |
| Reports | (placeholder) | FileText |
| Settings | `/profile` | Settings |

---

## File Changes Summary

### Files to DELETE
- `src/pages/NewAuditPage.jsx`
- `src/features/audit/components/AuditForm/*` (all wizard steps)

### Files to CREATE
- `src/pages/IssueDetailPage.jsx` (NEW)
- `src/components/AppShell.jsx` (or rewrite existing shell)
- `src/features/dashboard/components/AiInsightsCard.jsx`
- `src/features/dashboard/components/NewAuditDrawer.jsx`
- `src/features/audit/components/AuditDetail/SeverityBar.jsx`
- `src/features/audit/components/AuditDetail/ScoreRing.jsx`
- `src/features/audit/components/AuditDetail/KpiCard.jsx`
- `src/features/audit/components/AuditDetail/PipelineSteps.jsx`
- `src/features/audit/components/AuditDetail/ActivityTimeline.jsx`
- `src/features/triage/components/TriageGrid.jsx` (redesigned table)
- `src/features/triage/components/TriageSeverityBar.jsx`
- `src/features/triage/components/StatusFilterChips.jsx`
- `src/features/triage/components/BulkActionsBar.jsx`
- `src/features/triage/components/IssueElementsTab.jsx`
- `src/features/triage/components/IssueEvidenceTab.jsx`
- `src/features/triage/components/IssueHistoryTab.jsx`
- `src/features/triage/components/IssueCommentsTab.jsx`
- `src/features/triage/components/IssueRawDataTab.jsx`
- `src/features/triage/components/IssueDecisionSidebar.jsx`

### Files to MODIFY
- `src/theme.css` — Update primary color scale
- `src/index.css` — Update font + accent color
- `src/config/theme.js` — Verify customTheme matches new tokens
- `src/App.jsx` — Update routes (remove `/audits/new`, add `/audits/:id/issues/:issueId`)
- `src/pages/AuditsPage.jsx` — Full redesign
- `src/pages/AuditDetailPage.jsx` — Full redesign
- `src/features/audit/components/AuditDetail/OverviewTab.jsx` — Redesign
- `src/features/scan/components/ScanPanel.jsx` — Redesign
- `src/features/scan/components/PageScanTab.jsx` — Minor restyle
- `src/features/scan/components/ComponentScanTab.jsx` — Minor restyle
- `src/features/scan/components/FlowScanTab.jsx` — Minor restyle
- `src/features/triage/components/TriageTab.jsx` — Full redesign
- `src/features/triage/components/IssueDetailDrawer.jsx` — May become obsolete (replaced by page)

---

## Implementation Order (Recommended)

| Phase | Tasks | Effort | Blocking |
|-------|-------|--------|----------|
| **1** | Update tokens (colors + font) | 30 min | Nothing |
| **1** | Redesign App Shell | 2h | Nothing |
| **2** | Redesign Dashboard (AuditsPage) | 4h | Shell |
| **2** | Build New Audit Drawer | 3h | Shell |
| **3** | Redesign Audit Detail header + tabs | 2h | Shell |
| **3** | Redesign Overview tab | 3h | Detail header |
| **3** | Redesign Scan tab | 2h | Detail header |
| **3** | Redesign Triage tab | 4h | Detail header |
| **4** | Build Issue Detail Page | 6h | Triage tab (needs issue route) |
| **5** | Update shared components | 1h | All above |
| **5** | Polish + responsive + dark mode | 2h | All above |
| **6** | Test + bug fixes | 2h | All above |

**Total: ~30 hours of focused work**

---

## Decisions Needed

1. **Issue Detail: Drawer or Page?**
   - Design shows it as a full page (`/audits/:id/issues/:issueId`)
   - Current app uses `IssueDetailDrawer` (slide-in panel)
   - **Recommendation:** Full page. Better for screenshots, evidence, comments. Keep drawer as quick-view fallback.

2. **New Audit: Keep wizard or use drawer?**
   - Design shows drawer (440px slide-in)
   - Current app has full-page wizard with 5 steps
   - **Recommendation:** Drawer. Simpler UX, stays in context. But 5 steps in 440px is tight — consider 2-step simplification.

3. **AI Insights Card:**
   - Design shows it but data source is unclear
   - **Recommendation:** Static/mock initially. Connect to real data later (scan summary insights).

4. **Score Ring:**
   - Design shows circular score visualization
   - **Recommendation:** SVG component. Can be done with CSS conic-gradient or SVG circle stroke-dasharray.

---

## Quick Wins (if doing piecemeal)

If you want to implement in small chunks:

1. **Just colors + font** (30 min) — Instant visual refresh
2. **Just App Shell** (2h) — New layout foundation
3. **Just Dashboard stat cards** (1h) — Hover effects + icons
4. **Just Triage severity bar** (1h) — Big visual improvement
5. **Just Issue Detail page** (6h) — Most impactful new feature
