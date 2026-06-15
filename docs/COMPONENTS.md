# Components & Pages Documentation

## ScanPanel
**File:** `src/features/scan/components/ScanPanel.jsx`
**Props:** `{ audit: object, auditId: string, userId: string, onScanComplete: () => void }`
**Purpose:** Main orchestration panel for running page/component/flow scans, managing audit scope, and displaying scan history and results.
**State:**
- `scopeItems` — audit scope extracted from `audit.scope_json.items`
- `savingScope` — boolean while scope is persisting to DB
- `selectedJobId` — job whose results are shown inline
- `expandedError` — jobId of expanded error detail
**Side effects:**
- Calls `useScanRunner` with `onProgress` and `onError` callbacks
- Auto-runs next pending job via `useEffect` when `jobs` changes
- Surfaces `historyError` via `toast.error`
- Persists scope changes via `updateAudit`
**Parent:** `AuditDetailPage` (Scan tab)
**Children:** `PageScanTab`, `ComponentScanTab`, `FlowScanTab`, `ScanResults`, `DataTable`

## ScanResults
**File:** `src/features/scan/components/ScanResults.jsx`
**Props:** `{ job: object, onClose: () => void }`
**Purpose:** Displays detailed violation results for a single completed scan job, with filtering, grouping, and decision-making UI.
**State:**
- `inScopeOnly` — toggle to show only in-scope violations
- `severityFilter` — `'all' | 'critical' | 'serious' | 'moderate' | 'minor'`
- `cardFilter` — `'wcag' | 'bestpractice' | 'review' | null`
- `expandedGroup` — groupId of expanded accordion
- `decisionState` — local decision map per group
- `reportNotes`, `auditorNotes`, `fixNotes` — per-group note textareas
- `includeInReport` — per-group boolean map
- `userGroups` — per-group affected-user selection
- `ugDropdownOpen` — groupId of open user-group dropdown
**Side effects:** None (pure UI over passed job)
**Parent:** `ScanPanel`
**Children:** `ViolationCard` (local, defined in same file), `StatCard` (local), Flowbite `Accordion`

## ViolationCard (local to ScanResults)
**File:** `src/features/scan/components/ScanResults.jsx`
**Props:** `{ group: object, isExpanded: boolean, onToggle: () => void, renderDecisionButtons: (group) => ReactNode, renderExpandableDetail: (group) => ReactNode }`
**Purpose:** Renders a single grouped violation with impact/issue-type badges, metadata chips, expand toggle, and decision buttons.
**State:** None
**Side effects:** None
**Parent:** `ScanResults`
**Children:** Flowbite `Card`

## IssueHeader
**File:** `src/features/issue/components/IssueHeader.jsx`
**Props:** `{ audit: object, item: object }`
**Purpose:** Breadcrumb + title + severity/decision/SC badges + action buttons (Share, Export) for the issue detail page. Does NOT render tab nav.
**State:** None
**Side effects:** None (navigate via `useNavigate` but only declared, not called)
**Parent:** `IssueDetailPage`
**Children:** `AppBreadcrumb`

## IssueSidebar
**File:** `src/features/issue/components/IssueSidebar.jsx`
**Props:** `{ item: object, audit: object, onDecision: (decision) => void, relatedIssues: array }`
**Purpose:** Decision card with status buttons, metadata rows (severity, standard, SC, effort, scope, affected users, dates), assignee placeholder, element breakdown, and related issues list.
**State:** None
**Side effects:** None
**Parent:** `IssueDetailPage`
**Children:** `MetaRow` (local helper)

## TriageTab
**File:** `src/features/triage/components/TriageTab.jsx`
**Props:** `{ auditId: string, refreshKey: number }`
**Purpose:** Full triage list view with search, impact filter, status tabs, sorting, expandable rows, and an `IssueDetailDrawer` for deep inspection.
**State:**
- `triageItems` — array from DB
- `loadingTriage`, `triageError`
- `selectedItem`, `drawerOpen`
- `searchQuery`, `filterImpact`
- `activeTab` — status tab key
- `sortBy`, `sortDirection`
**Side effects:**
- Fetches triage items via `getTriageItems(auditId)` on mount and when `refreshKey` changes
- Calls `updateTriageItem` when making decisions inside expanded rows
- Calls `/api/capture-screenshot` for screenshot capture in expanded rows
- Calls `getScanResultsWithViolations` to populate expanded row scan data
**Parent:** `AuditDetailPage` (Triage tab)
**Children:** `IssueDetailDrawer`, `DataTable`, `PageHeader`, `SearchInput`, `FilterDropdown`, `ExpandedRowContent` (local)

## IssueDetailDrawer
**File:** `src/features/triage/components/IssueDetailDrawer.jsx`
**Props:** `{ isOpen: boolean, onClose: () => void, item: object|null, onPrev: () => void, onNext: () => void, hasPrev: boolean, hasNext: boolean, onDecision: (itemId, decision) => void }`
**Purpose:** Right-side drawer for deep issue inspection: screenshot, code evidence, editable fix guidance, affected users, WCAG references, and decision footer.
**State:**
- `lightboxOpen` — full-size screenshot modal
- `copied` — copy-to-clipboard feedback key
- `extraCode` — additional code fragment textarea
- `overrides` — editable overrides_json map
- `overridesDirty`, `isSaving`, `saveError`
- `isUploading`, `uploadError`
- `newUser` — input for adding affected-user group
**Side effects:**
- Calls `saveOverrides` to persist override changes
- Calls `uploadEvidenceFile` + `appendEvidenceFiles` for file uploads
- Saves code fragments as text files via `uploadEvidenceFile`
- Restores focus to trigger element on drawer close
**Parent:** `TriageTab`
**Children:** Flowbite `Drawer`, `Modal` (lightbox), `Accordion`

## OverviewTab
**File:** `src/features/audit/components/AuditDetail/OverviewTab.jsx`
**Props:** `{ audit: object, scanJobs: array }`
**Purpose:** Audit overview dashboard with conformance score ring, severity bar, KPI cards, audit details, scope table, and recent activity feed.
**State:** None
**Side effects:** None
**Parent:** `AuditDetailPage` (Overview tab)
**Children:** `ScoreRing`, `SeverityBar`, `SeverityStats`, `PipelineSteps`, `ActivityFeed`

## ApplicationShell
**File:** `src/shared/layout/ApplicationShell.jsx`
**Props:** `{ children: ReactNode }`
**Purpose:** Root app layout with collapsible desktop sidebar (icon rail / full labels), top navbar (search, notifications, apps grid, user avatar dropdown), mobile drawer, and scrollable main content area.
**State:**
- `isMobile` — viewport < 1024px
- `isSidebarOpen` — sidebar/drawer visibility
**Side effects:**
- `window.addEventListener('resize', handleResize)` on mount/unmount
- Calls `signOut` and navigates to `/login`
**Parent:** `App.jsx` (root router layout)
**Children:** `SidebarNav` (local), `NavIconItem`/`NavLinkItem`/`NavCollapse`/`SubNavItem` (local)

## AppBreadcrumb
**File:** `src/shared/ui/AppBreadcrumb.jsx`
**Props:** `{ items: Array<{ label: string, to?: string }> }`
**Purpose:** Shared breadcrumb navigation with Home icon and react-router `Link` support.
**State:** None
**Side effects:** None
**Parent:** `IssueHeader`, `AuditDetailPage`
**Children:** `Home`, `ChevronRight` (lucide-react)

## ActivityFeed
**File:** `src/shared/ui/ActivityFeed.jsx`
**Props:** `{ items: Array<{ text: ReactNode, time: string, variant: 'purple'|'green'|'amber'|'gray' }> }`
**Purpose:** Vertical list of recent audit activity events with color-coded dot markers.
**State:** None
**Side effects:** None
**Parent:** `OverviewTab`, `IssueDetailPage`
**Children:** None

## DueDateUrgent
**File:** `src/shared/ui/DueDateUrgent.jsx`
**Props:** `{ date: string|null, onSet: () => void }`
**Purpose:** Renders a due date with urgency badges: "Overdue" (past), "Soon" (≤3 days), or a "Set due date" button when missing.
**State:** None
**Side effects:** None
**Parent:** `AuditsPage` (DataTable column renderer)
**Children:** `Calendar` (lucide-react)

## AssigneeStack
**File:** `src/shared/ui/AssigneeStack.jsx`
**Props:** `{ assignees: Array<{ initials: string, color?: string }>, maxVisible: number }`
**Purpose:** Overlapping circular avatar initials with overflow count badge.
**State:** None
**Side effects:** None
**Parent:** `AuditsPage` (DataTable column renderer)
**Children:** None

## ErrorBoundary
**File:** `src/shared/ui/ErrorBoundary.jsx`
**Props:** `{ children: ReactNode, fallback?: ComponentType }`
**Purpose:** Class-based error boundary that catches render errors and shows a retry UI or a custom fallback.
**State:**
- `hasError`, `error`, `errorInfo`
**Side effects:**
- `console.error` on caught error
- `this.setState` resets boundary on retry
**Parent:** `AuditDetailPage` (wraps `ScanPanel`)
**Children:** `Card`, `Button` (flowbite-react)

## ToastProvider / useToast
**File:** `src/shared/context/ToastContext.jsx`
**Props:** `{ children: ReactNode }`
**Purpose:** Lightweight toast notification system rendering a fixed bottom-right stack of Flowbite Toasts with auto-dismiss after 4s (max 5 visible).
**State:**
- `toasts` — array of `{ id, type, message }`
**Side effects:**
- `setTimeout(() => dismiss(id), 4000)` per toast
**Parent:** `App.jsx` (root wrapper)
**Children:** `Toast` (flowbite-react)

---

## Pages

### AuditsPage
**File:** `src/pages/AuditsPage.jsx`
**Props:** None (route-level page)
**Purpose:** List page for all audits with stat cards, AI insights, tab filtering, search, sort, pagination, bulk selection, archive/delete/edit modals, and a right-side drawer for creating a new audit.
**State:**
- `audits`, `loading`, `loadError`, `reloadKey`
- `activeTab`, `search`, `statusFilter`, `wcagVer`
- `currentPage`, `deleteTarget`, `selectedIds`
- `editTarget`, `editForm`, `editSaving`
- `activeStatCard`, `aiVisible`, `drawerOpen`
**Side effects:**
- Fetches audits via `getAudits(user.id)` on mount/reload
- Calls `archiveAudit`, `updateAudit`, `deleteAudit`
- Uses `useToast` for success/error toasts
**Parent:** `ApplicationShell`
**Children:** `StatCard`, `AiInsightsCard`, `DataTable`, `SearchInput`, `FilterDropdown`, `DueDateUrgent`, `AssigneeStack`, `PipelineMini`, `Pagination`, `Modal`, `Drawer`

### AuditDetailPage
**File:** `src/pages/AuditDetailPage.jsx`
**Props:** None (route-level page)
**Purpose:** Single audit detail page with Overview, Scan, Triage, Manual Checks, and Report tabs. Orchestrates data loading for the audit and scan jobs, and delegates to tab-specific child components.
**State:**
- `audit`, `scanJobs`
- `loading`, `refreshing`, `error`
- `activeTab` — driven by URL hash (`#triage`, `#scan`, etc.)
- `triageRefreshKey` — incremented after a scan completes to refresh triage
**Side effects:**
- Fetches audit and scan jobs via `getAudit(auditId)` and `getScanJobs(auditId)`
- `handleRefresh` re-fetches both
**Parent:** `ApplicationShell`
**Children:** `OverviewTab`, `ScanPanel`, `TriageTab`, `ManualChecksTab`, `ReportTab`, `AppBreadcrumb`, `ScoreRingMini`, `ErrorBoundary`

### IssueDetailPage
**File:** `src/pages/IssueDetailPage.jsx`
**Props:** None (route-level page)
**Purpose:** Full-page dedicated view for a single triaged issue. Displays element list, evidence/fix guidance, audit trail, comments placeholder, raw data, and a right sidebar for decisions.
**State:**
- `audit`, `item`, `scanData`
- `relatedIssues`
- `loading`, `error`, `savingDecision`, `scanError`
- `activeTab` — `'elements' | 'evidence' | 'history' | 'comments' | 'raw'`
**Side effects:**
- Fetches audit via `getAudit(auditId)`
- Fetches triage item via `getTriageItemById(issueId)`
- Fetches scan results via `getScanResultsWithViolations`
- Fetches related triage items via `getTriageItems`
- Calls `updateTriageItem` on decision
**Parent:** `ApplicationShell`
**Children:** `IssueHeader`, `IssueSidebar`, `ActivityFeed`, `CodeSnippet`, `CopyButton`, `EmptyState`, `Loading`, `JsonView`, `SectionHeader`

### NewAuditPage
**File:** `src/pages/NewAuditPage.jsx`
**Props:** None (route-level page)
**Purpose:** Standalone page wrapper for the new-audit creation wizard.
**State:** None
**Side effects:** None
**Parent:** `ApplicationShell`
**Children:** `NewAuditWizard`
