# Implementation Plan: Audit Dashboard Improvements (3 Screens)

## Overview

Implement layout alterations and a new screen based on the 3 HTML mockups in `Audit Dashboard Improvements (2)`:

1. **Audit Dashboard Improved** → Redesign `AuditsPage.jsx` + shared components
2. **Audit Detail Improved** → Redesign tabs within `AuditDetailPage.jsx`
3. **Audit Issue Full Detail** → New route + page (`IssueDetailPage.jsx`)

---

## 1. Audit Dashboard (`AuditsPage.jsx`)

### Visual Changes
- Add **AI Insights banner card** (dismissible, gradient purple, clickable chips)
- **Stat cards** become primary filter triggers (active-filter ring on click)
- **Client URL** shown under client name in table
- **Pipeline** column uses mini dot-dash indicator + current stage label
- **Score** column shows numeric score + horizontal progress bar
- **Issues** column shows severity breakdown chips (critical / serious / moderate) instead of single count
- **Assignee** column shows avatar stack with overflow count
- **Due date** column shows urgency styling (overdue = red badge, soon = amber)
- **Filter tabs** become pill-style chips with counts (All, Active, Needs triage, Complete, Archived)
- **New Audit** opens in a slide-out drawer (440px) instead of navigating to `/audits/new`
- Table search moved to toolbar inside card (separate from global navbar search)

### New Components
| File | Purpose |
|------|---------|
| `src/shared/ui/AiInsightsCard.jsx` | Dismissible gradient banner with insight chips |
| `src/shared/ui/PipelineMini.jsx` | Dot-dash pipeline indicator with current label |
| `src/shared/ui/AssigneeStack.jsx` | Overlapping avatar circles with +N overflow |
| `src/shared/ui/DueDateUrgent.jsx` | Due date with overdue/soon badges |

### Modifications
| File | Change |
|------|--------|
| `src/pages/AuditsPage.jsx` | Full redesign: add AI card, update stat cards, new table columns, filter pill tabs, drawer integration |
| `src/shared/ui/StatCard.jsx` | Add `size="compact"` variant and `filterKey` prop for active-filter ring |
| `src/App.jsx` | Keep `/audits/new` route but make AuditsPage handle drawer state internally |

### Data Flow
- Same `getAudits()` call from `audit_summary` view
- Score calculation stays (100 - weighted penalty)
- Severity chips derive from `critical_count`, `serious_count`, `moderate_count`
- Assignee avatars derive from `auditors` JSON array (or placeholder if not in schema)
- Due date urgency computed from `target_end_date` vs today

---

## 2. Audit Detail (`AuditDetailPage.jsx` + tabs)

### Header Redesign
- Add **breadcrumb**: Home > Audits > [Audit name]
- Title row: audit name + status badge + WCAG badge
- URL row: website URL with external link icon
- Meta chips: conformance score ring, due date, assignee, export/share actions

### Overview Tab (`OverviewTab.jsx`)
- **Score card**: Large SVG ring chart (73% = partial) with center text
- **Severity breakdown card**: Stacked horizontal bar + 4 clickable stat boxes (Critical/Serious/Moderate/Minor)
- **KPI row**: 4 cards (Untriaged, Confirmed Failures, Scans Run, Scope Items)
- **Audit Details card**: Key-value rows + pipeline progress (4 steps: Scan → Triage → Review → Done)
- **Scope table**: Pages/Components/Flows with issue chips
- **Activity feed**: Recent events timeline list

### Scan Tab (`ScanPanel.jsx` / `PageScanTab.jsx`)
- Sub-tabs: Pages / Components / Flows
- Scope table with coverage bar, issue chips, re-scan button
- Scan history table with delta badges (↑ new, ↓ fixed, = same)

### Triage Tab (`TriageTab.jsx`)
- **Severity summary bar**: 4 clickable segments + total count
- **Toolbar**: search + scope/WCAG principle/sort filters
- **Status chips**: All / Pending / Confirmed / Needs Review / Dismissed
- **Bulk action bar**: appears on checkbox selection
- **Expandable rows** with rich panel:
  - Screenshot area + context sidebar
  - Offending element code block
  - Auditor Decision buttons (Confirm / Dismiss / Manual)
  - Collapsible "How to Fix" + "WCAG References" side-by-side
  - Collapsible "All Affected Elements" list with per-element triage buttons
  - Footer: "Open Full Details" link → navigates to new Issue Detail page

### Manual Checks Tab (`ManualChecksTab` inline in `AuditDetailPage.jsx`)
- Group by WCAG principle (Perceivable, Operable, Understandable, Robust)
- Principle header with progress bar (X/Y passed)
- Check items: pass/fail/na circle icon + SC number + name + level + result

### Report Tab (`ReportTab` inline in `AuditDetailPage.jsx`)
- 3 report option cards (Full Audit Report, Executive Summary, VPAT/ACR)
- Preview panel with readiness badge + generate/download buttons

### New Components
| File | Purpose |
|------|---------|
| `src/shared/ui/ScoreRing.jsx` | SVG circular progress with center label |
| `src/shared/ui/SeverityBar.jsx` | Stacked colored bar with clickable segments |
| `src/shared/ui/PipelineSteps.jsx` | 4-step numbered dot progress with labels |
| `src/shared/ui/ActivityFeed.jsx` | Timeline list of audit events |
| `src/shared/ui/DeltaBadge.jsx` | ↑ ↓ = delta badges for scan history |
| `src/shared/ui/CheckItem.jsx` | Manual check row with pass/fail/na icon |

### Modifications
| File | Change |
|------|--------|
| `src/pages/AuditDetailPage.jsx` | Redesign header, wire new tab components |
| `src/features/audit/components/AuditDetail/OverviewTab.jsx` | Complete rewrite with score ring, severity bar, KPIs, pipeline, scope, activity |
| `src/features/scan/components/ScanPanel.jsx` | Update scan tab layout, add history table |
| `src/features/triage/components/TriageTab.jsx` | Major rewrite: severity bar, status chips, bulk bar, new expanded row layout |
| `src/features/triage/components/TriageExpandedRow.jsx` | Extract expanded panel from TriageTab for reusability |

---

## 3. Issue Full Detail Page (`IssueDetailPage.jsx`) — NEW SCREEN

### Route
- `/audits/:auditId/issues/:issueId`
- Add to `App.jsx` and `src/routes/index.jsx`
- Link from TriageTab "Open Full Details" button and IssueDetailDrawer

### Layout
- Full-width page inside ApplicationShell (no drawer)
- **Header**: breadcrumb (Home > Audits > [Audit] > Triage > [Issue]), title, severity pill, WCAG chip, status badge, action buttons
- **Tabs**: All Elements | Evidence & Fix | Audit Trail | Comments | Raw Data
- **Main + Sidebar**: 2-column layout (main content ~1fr, sidebar ~300px)

### Tabs

#### All Elements
- Stats chips (Failures / Unreviewed / Dismissed / Total)
- Search + filter pills + status tabs + bulk bar
- Table: checkbox, expand chevron, element code snippet, page, type, status, action buttons
- Expanded row: element HTML code block, screenshot upload area, per-element decision buttons

#### Evidence & Fix
- 2-column grid: Screenshot card + Offending Element card
- Remediation guidance panel
- Before/After code blocks
- WCAG reference links (SC, Techniques, Failures, APG)

#### Audit Trail
- Vertical timeline with colored dots
- Events: scan detected, opened, triaged, commented, confirmed
- Decision badges inline

#### Comments
- Threaded comments with avatar, author, role badge, timestamp
- Rich text compose area with toolbar (bold, italic, code, link)
- Submit hint: "Markdown supported · Ctrl+Enter to submit"

#### Raw Data
- Syntax-highlighted JSON view
- Keys/Strings/Numbers/Booleans/Nulls color-coded

### Right Sidebar
- **Decision card**: Rule-level verdict buttons (Confirmed Failure / Not a Failure / Needs Manual Check)
- **Issue metadata**: Severity, Standard, SC, Effort, Scope, Affected users, Detected, Last scan
- **Assignee**: assign button
- **Element breakdown**: mini bar chart of failure/unreviewed/dismissed counts
- **Related issues**: same-page related issues list with severity dots

### New Components
| File | Purpose |
|------|---------|
| `src/pages/IssueDetailPage.jsx` | Main page component, route entry |
| `src/features/issue/components/IssueHeader.jsx` | Breadcrumb + title + badges + actions |
| `src/features/issue/components/ElementsTab.jsx` | Elements table with expandable rows |
| `src/features/issue/components/EvidenceTab.jsx` | Screenshot + code + remediation + WCAG refs |
| `src/features/issue/components/HistoryTab.jsx` | Timeline of audit events |
| `src/features/issue/components/CommentsTab.jsx` | Threaded comments + compose |
| `src/features/issue/components/RawDataTab.jsx` | Syntax-highlighted JSON |
| `src/features/issue/components/IssueSidebar.jsx` | Decision card + metadata + related issues |
| `src/shared/ui/Timeline.jsx` | Reusable timeline component |
| `src/shared/ui/CommentThread.jsx` | Comment list + compose |
| `src/shared/ui/JsonView.jsx` | Syntax-highlighted JSON display |

---

## 4. Shared Infrastructure Changes

### Styling / Theme
- The mockups use Inter font + a purple-centric palette (`#7C3AED`, `#5B21B6`, `#EDE9FE`, `#F5F3FF`)
- Current theme already uses purple as primary — no token changes needed
- Add custom CSS variables for mockup-specific colors if needed in `index.css` or `theme.css`
- Keep dark mode support throughout (mockups are light-mode only but existing app has dark mode)

### Data Requirements
- `audit_summary` view already provides: `critical_count`, `serious_count`, `moderate_count`, `minor_count`, `untriaged_count`, `confirmed_count`, etc.
- `triage_items` table has: `screenshot_url`, `element_snippet`, `selector`, `node_count`, `impact`, `wcag_sc`, etc.
- New page needs `getTriageItemById(issueId)` — add to `src/lib/db/triage.js`
- Comments: currently no `comments` table. For MVP, use local state or create a simple `issue_comments` table. **Decision: start with local state/mock data for comments, add table later.**
- Activity feed: derive from `audit_activity_log` table. Add `getAuditActivity(auditId)` to `src/lib/db/audits.js`.

### Accessibility Requirements
- All interactive elements need focus rings
- Table headers need `scope="col"`
- Icon-only buttons need `aria-label`
- Tabs need `role="tablist"` / `role="tab"` / `aria-selected`
- Drawers need `aria-modal` + focus trap
- Color contrast must pass WCAG AA (the mockup purple `#7C3AED` on white = ~6.2:1 ✅)

---

## 5. Implementation Phases

### Phase 1: Shared Components (foundation)
1. Create `ScoreRing.jsx`, `SeverityBar.jsx`, `PipelineMini.jsx`, `PipelineSteps.jsx`
2. Create `Timeline.jsx`, `JsonView.jsx`, `DeltaBadge.jsx`
3. Create `AiInsightsCard.jsx`, `AssigneeStack.jsx`, `DueDateUrgent.jsx`

### Phase 2: Dashboard Redesign
1. Update `StatCard.jsx` with compact variant
2. Rewrite `AuditsPage.jsx` with new layout, table columns, filter pills, drawer
3. Update `App.jsx` to support drawer-based new audit (keep `/audits/new` route but add drawer toggle)

### Phase 3: Audit Detail Tabs
1. Update `AuditDetailPage.jsx` header with breadcrumb, chips, actions
2. Rewrite `OverviewTab.jsx` (score ring, severity bar, KPIs, pipeline, scope, activity)
3. Update `ScanPanel.jsx` with scope tables + scan history
4. Rewrite `TriageTab.jsx` with severity bar, status chips, bulk bar
5. Extract/create `TriageExpandedRow.jsx` with screenshot, decision, how-to-fix, elements
6. Update `ManualChecksTab` in `AuditDetailPage.jsx` with principle grouping
7. Update `ReportTab` in `AuditDetailPage.jsx` with report options

### Phase 4: New Issue Detail Page
1. Add `getTriageItemById()` and `getAuditActivity()` to DB layer
2. Create `IssueDetailPage.jsx` and route in `App.jsx`
3. Create `IssueHeader.jsx`, `IssueSidebar.jsx`
4. Create `ElementsTab.jsx`, `EvidenceTab.jsx`, `HistoryTab.jsx`, `CommentsTab.jsx`, `RawDataTab.jsx`
5. Wire "Open Full Details" buttons from `TriageTab` and `IssueDetailDrawer`

### Phase 5: Polish & Integration
1. Ensure all dark mode classes are present
2. Add loading skeletons / empty states
3. Verify keyboard navigation and ARIA attributes
4. Smoke test: create audit → scan → triage → open full detail

---

## 6. File Inventory

### New Files (~20)
```
src/shared/ui/AiInsightsCard.jsx
src/shared/ui/PipelineMini.jsx
src/shared/ui/PipelineSteps.jsx
src/shared/ui/AssigneeStack.jsx
src/shared/ui/DueDateUrgent.jsx
src/shared/ui/ScoreRing.jsx
src/shared/ui/SeverityBar.jsx
src/shared/ui/Timeline.jsx
src/shared/ui/JsonView.jsx
src/shared/ui/DeltaBadge.jsx
src/shared/ui/CheckItem.jsx
src/shared/ui/ActivityFeed.jsx
src/pages/IssueDetailPage.jsx
src/features/issue/components/IssueHeader.jsx
src/features/issue/components/IssueSidebar.jsx
src/features/issue/components/ElementsTab.jsx
src/features/issue/components/EvidenceTab.jsx
src/features/issue/components/HistoryTab.jsx
src/features/issue/components/CommentsTab.jsx
src/features/issue/components/RawDataTab.jsx
src/features/triage/components/TriageExpandedRow.jsx
```

### Modified Files (~10)
```
src/pages/AuditsPage.jsx
src/pages/AuditDetailPage.jsx
src/shared/ui/StatCard.jsx
src/features/audit/components/AuditDetail/OverviewTab.jsx
src/features/scan/components/ScanPanel.jsx
src/features/triage/components/TriageTab.jsx
src/features/triage/components/IssueDetailDrawer.jsx
src/lib/db/triage.js
src/lib/db/audits.js
src/App.jsx
src/routes/index.jsx
```

---

## 7. Open Questions

1. **Comments table**: Do we want to create a real `issue_comments` table now, or use local state for MVP?
2. **Assignees**: The `audits` table has no `assignees` JSON field. Should we add it, or mock avatar stacks for now?
3. **Activity log**: The `audit_activity_log` table exists but may not be populated. Should we seed it or derive activity from scan_jobs + triage_items timestamps?
4. **Before/after code**: The mockups show before/after code blocks per issue. Should this be stored in `overrides_json` or `RULE_ENRICHMENTS`?

---

## 8. Risk Mitigation

- **Scope creep**: The mockups are polished designs. We will implement them faithfully but use existing data structures. No new backend tables unless explicitly approved.
- **Dark mode**: Mockups are light-only. All new components must include `dark:` Tailwind variants to match existing app.
- **Mobile**: The mockups are desktop-focused. Ensure responsive fallbacks (stack columns, scroll tables).
- **Performance**: Issue detail page loads triage item + scan results. Use Promise.all and skeleton states.
