import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Badge, Button, Dropdown, DropdownDivider, DropdownItem,
  Pagination, Select, Spinner,
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow,
  TextInput, theme,
} from 'flowbite-react'
import {
  ArrowLeft, AlertTriangle, BarChart3, Calendar, CheckCircle2,
  ClipboardList, Clock, ExternalLink, FileSearch, Globe,
  ListChecks, RefreshCw, Search, Shield, User,
} from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { useAuth } from '../context/AuthContext'
import { getAudit } from '../lib/db/audits'
import { getTriageItems } from '../lib/db/triage'
import { getManualChecks } from '../lib/db/manualChecks'
import { getScanJobs } from '../lib/db/scans'
import ScanPanel from '../components/scan/ScanPanel'
import ErrorBoundary from '../components/ErrorBoundary'
import { customTheme } from '../theme'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtDate(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('en-SE', {
    day: '2-digit', month: 'short', year: 'numeric',
  })
}

const PER_PAGE = 15

/* shared dropdown floating theme — same as AuditsPage */
const dropdownFloatingTheme = {
  arrowIcon: 'hidden',
  floating: {
    base: twMerge(theme.dropdown.floating.base, 'w-40'),
  },
}

/* 3-dots icon — same as AuditsPage */
const DotsIcon = () => (
  <svg
    className="h-5 w-5"
    aria-hidden
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
)

// ─── Badge components — all use customTheme.badge Bordered variants ───────────

function WcagBadge({ version, level }) {
  return (
    <Badge theme={customTheme.badge} color="brandBordered" size="xs">
      WCAG {version} {level}
    </Badge>
  )
}

function StatusBadge({ status }) {
  const colorMap = {
    active:   'brandBordered',
    complete: 'successBordered',
    archived: 'grayBordered',
    draft:    'warningBordered',
  }
  const labels = { active: 'Active', complete: 'Complete', archived: 'Archived', draft: 'Draft' }
  return (
    <Badge theme={customTheme.badge} color={colorMap[status] ?? 'grayBordered'} size="xs">
      {labels[status] ?? status}
    </Badge>
  )
}

function ImpactBadge({ impact }) {
  const colorMap = { critical: 'dangerBordered', serious: 'warningBordered', moderate: 'brandBordered', minor: 'grayBordered' }
  return (
    <Badge theme={customTheme.badge} color={colorMap[impact?.toLowerCase()] ?? 'grayBordered'} size="xs" className="capitalize">
      {impact || '—'}
    </Badge>
  )
}

function DecisionBadge({ decision }) {
  const colorMap = {
    confirmed:      'dangerBordered',
    dismissed:      'grayBordered',
    'needs review': 'warningBordered',
  }
  const labels = {
    confirmed: 'Confirmed', dismissed: 'Dismissed', 'needs review': 'Needs review',
  }
  return (
    <Badge theme={customTheme.badge} color={colorMap[decision] ?? 'alternativeBordered'} size="xs">
      {labels[decision] ?? 'Untriaged'}
    </Badge>
  )
}

function CheckStatusBadge({ status }) {
  const colorMap = {
    pass:      'successBordered',
    fail:      'dangerBordered',
    partial:   'warningBordered',
    untriaged: 'grayBordered',
  }
  const labels = { pass: 'Pass', fail: 'Fail', partial: 'Partial', untriaged: 'Untriaged' }
  return (
    <Badge theme={customTheme.badge} color={colorMap[status] ?? 'grayBordered'} size="xs">
      {labels[status] ?? (status || 'Untriaged')}
    </Badge>
  )
}

// ─── Empty state ───────────────────────────────────────────────────────────────

function EmptyState({ icon: Icon, title, body }) {
  return (
    <div className="flex flex-col items-center py-16 text-center">
      <div className="mb-4 rounded-base bg-brand-softer p-3">
        <Icon className="h-7 w-7 text-fg-brand" aria-hidden="true" />
      </div>
      <p className="text-sm font-semibold text-heading">{title}</p>
      <p className="mt-1 max-w-xs text-xs text-body-subtle">{body}</p>
    </div>
  )
}

// ─── Overview Tab ─────────────────────────────────────────────────────────────

function OverviewTab({ audit, scanJobs }) {
  const scope       = audit.scope_json?.items ?? []
  const lastScanned = audit.last_scanned_at ?? scanJobs[0]?.completed_at

  const stats = [
    { label: 'Critical Issues', value: audit.critical_count  ?? 0, icon: AlertTriangle, iconClass: 'text-fg-danger',  bgClass: 'bg-danger-soft'  },
    { label: 'Untriaged Items', value: audit.untriaged_count ?? 0, icon: Clock,         iconClass: 'text-fg-warning', bgClass: 'bg-warning-soft' },
    { label: 'Scans Run',       value: audit.scan_count ?? scanJobs.length, icon: FileSearch, iconClass: 'text-fg-brand',   bgClass: 'bg-brand-softer' },
    { label: 'Scope Items',     value: scope.length,                        icon: ListChecks, iconClass: 'text-fg-success', bgClass: 'bg-success-soft' },
  ]

  const detailRows = [
    { icon: Globe,    label: 'Website',   value: audit.website_url
        ? <a href={audit.website_url} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-1 text-fg-brand hover:underline">
            <span className="max-w-[180px] truncate">{audit.website_url}</span>
            <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
          </a>
        : '—' },
    { icon: Shield,   label: 'Standard',  value: <WcagBadge version={audit.wcag_version} level={audit.conformance_level} /> },
    { icon: User,     label: 'Auditor',   value: audit.auditor_name || '—' },
    { icon: Calendar, label: 'Started',   value: fmtDate(audit.started_at) },
    { icon: Clock,    label: 'Last scan', value: fmtDate(lastScanned) },
  ]

  return (
    <div className="space-y-4">

      {/* Stat cards — same pattern as AuditsPage */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, iconClass, bgClass }) => (
          <div key={label} className="rounded bg-neutral-primary p-5 shadow-sm border border-default">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-body-subtle">{label}</p>
                <p className="mt-1.5 text-2xl font-semibold text-heading">{value}</p>
              </div>
              <div className={`rounded p-2.5 ${bgClass}`}>
                <Icon className={`h-5 w-5 ${iconClass}`} aria-hidden="true" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details + Scope — two-column */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

        {/* Audit detail card */}
        <div className="relative overflow-hidden bg-neutral-primary shadow-sm border border-default sm:rounded-lg lg:col-span-1">
          <div className="flex flex-col px-4 pb-3 pt-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-base font-semibold text-heading dark:text-white">Audit Details</h2>
          </div>
          <div className="border-t border-default px-4 py-4">
            <dl className="space-y-4">
              {detailRows.map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <dt className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-body-subtle">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {label}
                  </dt>
                  <dd className="text-sm text-body">{value}</dd>
                </div>
              ))}
              {audit.notes && (
                <div>
                  <dt className="mb-1 text-xs font-semibold text-body-subtle">Notes</dt>
                  <dd className="text-sm text-body">{audit.notes}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>

        {/* Scope table — same white-card pattern */}
        <div className="relative overflow-hidden bg-neutral-primary shadow-sm border border-default sm:rounded-lg lg:col-span-2">
          <div className="flex flex-col px-4 pb-3 pt-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-base font-semibold text-heading dark:text-white">Scope</h2>
              {scope.length > 0 && (
                <p className="mt-0.5 text-xs text-body-subtle">{scope.length} items</p>
              )}
            </div>
          </div>
          {scope.length === 0 ? (
            <div className="border-t border-default py-12 text-center">
              <p className="text-sm text-body-subtle">No scope items defined.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table theme={{ root: { wrapper: 'static' } }} className="w-full text-left text-sm text-body dark:text-gray-400">
                <TableHead className="bg-neutral-tertiary text-xs uppercase text-body-subtle dark:bg-gray-700 dark:text-gray-400">
                  <TableHeadCell scope="col" className="px-4 py-3">Name</TableHeadCell>
                  <TableHeadCell scope="col" className="px-4 py-3">Type</TableHeadCell>
                  <TableHeadCell scope="col" className="px-4 py-3">URL / Identifier</TableHeadCell>
                </TableHead>
                <TableBody>
                  {scope.map((item, i) => (
                    <TableRow key={i} className="border-b border-default hover:bg-neutral-tertiary/50 dark:border-gray-600 dark:hover:bg-gray-700">
                      <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-heading dark:text-white">
                        {item.name || '—'}
                      </th>
                      <TableCell className="whitespace-nowrap px-4 py-3">
                        <Badge theme={customTheme.badge} color="grayBordered" size="xs">{item.type}</Badge>
                      </TableCell>
                      <TableCell className="max-w-xs truncate px-4 py-3 text-xs text-body-subtle">
                        {item.url || item.componentIdentifier || '—'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Triage Tab ───────────────────────────────────────────────────────────────

function TriageTab({ auditId }) {
  const [items, setItems]         = useState([])
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState(null)
  const [search, setSearch]       = useState('')
  const [decisionFilter, setDecisionFilter] = useState('All')
  const [impactFilter, setImpactFilter]     = useState('All')
  const [currentPage, setCurrentPage]       = useState(1)

  useEffect(() => {
    let cancelled = false
    getTriageItems(auditId).then(({ data, error: err }) => {
      if (cancelled) return
      if (err) setError(err.message)
      else setItems(data ?? [])
      setLoading(false)
    })
    return () => { cancelled = true }
  }, [auditId])

  const filtered = items.filter(item => {
    const q = search.toLowerCase()
    if (q && !item.rule_id?.toLowerCase().includes(q) && !item.description?.toLowerCase().includes(q)) return false
    if (decisionFilter !== 'All' && (item.decision ?? 'untriaged') !== decisionFilter) return false
    if (impactFilter   !== 'All' && item.impact?.toLowerCase() !== impactFilter)       return false
    return true
  })

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const paged      = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)

  if (loading) return <div className="flex justify-center py-16"><Spinner size="md" color="purple" /></div>
  if (error)   return (
    <div className="relative overflow-hidden bg-neutral-primary shadow-md sm:rounded-lg">
      <div className="px-4 py-3 text-sm text-fg-danger">{error}</div>
    </div>
  )

  return (
    <div className="relative overflow-hidden bg-neutral-primary shadow-md dark:bg-gray-800 sm:rounded-lg">

      {/* Header */}
      <div className="flex flex-col px-4 pb-3 pt-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h5 className="text-base font-semibold text-heading dark:text-white">Triage Items</h5>
          <p className="mt-0.5 text-xs text-body-subtle">{filtered.length} items</p>
        </div>
      </div>

      {/* Filter grid — same pattern as AuditsPage */}
      <div className="grid w-full grid-cols-2 gap-4 px-4 pb-4 md:grid-cols-3 lg:grid-cols-5">
        <TextInput
          id="triage-search"
          aria-label="Search triage items"
          placeholder="Search rule, description…"
          value={search}
          onChange={e => { setSearch(e.target.value); setCurrentPage(1) }}
          icon={Search}
          sizing="sm"
        />
        <Select
          id="triage-decision"
          aria-label="Filter by decision"
          value={decisionFilter}
          onChange={e => { setDecisionFilter(e.target.value); setCurrentPage(1) }}
          sizing="sm"
        >
          <option value="All">All decisions</option>
          <option value="untriaged">Untriaged</option>
          <option value="confirmed">Confirmed</option>
          <option value="dismissed">Dismissed</option>
          <option value="needs review">Needs review</option>
        </Select>
        <Select
          id="triage-impact"
          aria-label="Filter by impact"
          value={impactFilter}
          onChange={e => { setImpactFilter(e.target.value); setCurrentPage(1) }}
          sizing="sm"
        >
          <option value="All">All impacts</option>
          <option value="critical">Critical</option>
          <option value="serious">Serious</option>
          <option value="moderate">Moderate</option>
          <option value="minor">Minor</option>
        </Select>
        <div className="hidden lg:block" />
        <div className="hidden lg:block" />
      </div>

      {/* Table */}
      {paged.length === 0 ? (
        <div className="border-t border-default">
          <EmptyState
            icon={CheckCircle2}
            title="No items found"
            body="Run a scan to generate triage items, or adjust your filters."
          />
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <Table theme={{ root: { wrapper: 'static' } }} className="w-full text-left text-sm text-body dark:text-gray-400">
              <TableHead className="bg-neutral-tertiary text-xs uppercase text-body-subtle dark:bg-gray-700 dark:text-gray-400">
                <TableHeadCell scope="col" className="px-4 py-3">Rule / Description</TableHeadCell>
                <TableHeadCell scope="col" className="px-4 py-3">Impact</TableHeadCell>
                <TableHeadCell scope="col" className="px-4 py-3">Type</TableHeadCell>
                <TableHeadCell scope="col" className="px-4 py-3">Decision</TableHeadCell>
                <TableHeadCell scope="col" className="px-4 py-3">
                  <span className="sr-only">Actions</span>
                </TableHeadCell>
              </TableHead>
              <TableBody>
                {paged.map(item => (
                  <TableRow key={item.id} className="border-b border-default hover:bg-neutral-tertiary/50 dark:border-gray-600 dark:hover:bg-gray-700">
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-heading dark:text-white">
                      <p className="font-medium text-heading">{item.rule_id}</p>
                      {item.description && (
                        <p className="mt-0.5 max-w-xs truncate text-xs font-normal text-body-subtle">{item.description}</p>
                      )}
                    </th>
                    <TableCell className="whitespace-nowrap px-4 py-3">
                      <ImpactBadge impact={item.impact} />
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-4 py-3 text-xs text-body">
                      {item.issue_type || '—'}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-4 py-3">
                      <DecisionBadge decision={item.decision} />
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-4 py-3 font-medium text-heading dark:text-white">
                      <Dropdown
                        dismissOnClick={false}
                        inline
                        label={
                          <>
                            <span className="sr-only">Manage entry</span>
                            <DotsIcon />
                          </>
                        }
                        theme={dropdownFloatingTheme}
                      >
                        <DropdownItem>View details</DropdownItem>
                        <DropdownItem>Confirm</DropdownItem>
                        <DropdownItem>Dismiss</DropdownItem>
                        <DropdownDivider />
                        <DropdownItem>Needs review</DropdownItem>
                      </Dropdown>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Footer — same as AuditsPage */}
          <div className="flex items-center justify-between border-t border-default p-4 dark:border-gray-700">
            <span className="text-xs text-body-subtle dark:text-gray-400">
              Total items: {filtered.length}
            </span>
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                showIcons
              />
            )}
          </div>
        </>
      )}
    </div>
  )
}

// ─── Manual Checks Tab ────────────────────────────────────────────────────────

function ManualChecksTab({ auditId }) {
  const [checks, setChecks]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)
  const [search, setSearch]   = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [currentPage, setCurrentPage]   = useState(1)

  useEffect(() => {
    let cancelled = false
    getManualChecks(auditId).then(({ data, error: err }) => {
      if (cancelled) return
      if (err) setError(err.message)
      else setChecks(data ?? [])
      setLoading(false)
    })
    return () => { cancelled = true }
  }, [auditId])

  const filtered = checks.filter(c => {
    const q = search.toLowerCase()
    if (q && !c.sc_id?.toLowerCase().includes(q) && !c.title?.toLowerCase().includes(q)) return false
    if (statusFilter !== 'All' && (c.status ?? 'untriaged') !== statusFilter) return false
    return true
  })

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const paged      = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)

  if (loading) return <div className="flex justify-center py-16"><Spinner size="md" color="purple" /></div>
  if (error)   return (
    <div className="relative overflow-hidden bg-neutral-primary shadow-md sm:rounded-lg">
      <div className="px-4 py-3 text-sm text-fg-danger">{error}</div>
    </div>
  )

  return (
    <div className="relative overflow-hidden bg-neutral-primary shadow-md dark:bg-gray-800 sm:rounded-lg">

      {/* Header */}
      <div className="flex flex-col px-4 pb-3 pt-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h5 className="text-base font-semibold text-heading dark:text-white">Manual Checks</h5>
          <p className="mt-0.5 text-xs text-body-subtle">{filtered.length} checks</p>
        </div>
      </div>

      {/* Filter grid */}
      <div className="grid w-full grid-cols-2 gap-4 px-4 pb-4 md:grid-cols-3 lg:grid-cols-5">
        <TextInput
          id="checks-search"
          aria-label="Search manual checks"
          placeholder="Search criterion, title…"
          value={search}
          onChange={e => { setSearch(e.target.value); setCurrentPage(1) }}
          icon={Search}
          sizing="sm"
        />
        <Select
          id="checks-status"
          aria-label="Filter by status"
          value={statusFilter}
          onChange={e => { setStatusFilter(e.target.value); setCurrentPage(1) }}
          sizing="sm"
        >
          <option value="All">All statuses</option>
          <option value="untriaged">Untriaged</option>
          <option value="pass">Pass</option>
          <option value="fail">Fail</option>
          <option value="partial">Partial</option>
        </Select>
        <div className="hidden md:block" />
        <div className="hidden lg:block" />
        <div className="hidden lg:block" />
      </div>

      {/* Table */}
      {paged.length === 0 ? (
        <div className="border-t border-default">
          <EmptyState
            icon={ClipboardList}
            title="No manual checks yet"
            body="Manual checks are created automatically from your scope and WCAG criteria."
          />
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <Table theme={{ root: { wrapper: 'static' } }} className="w-full text-left text-sm text-body dark:text-gray-400">
              <TableHead className="bg-neutral-tertiary text-xs uppercase text-body-subtle dark:bg-gray-700 dark:text-gray-400">
                <TableHeadCell scope="col" className="px-4 py-3">Success Criterion</TableHeadCell>
                <TableHeadCell scope="col" className="px-4 py-3">Level</TableHeadCell>
                <TableHeadCell scope="col" className="px-4 py-3">Status</TableHeadCell>
                <TableHeadCell scope="col" className="px-4 py-3">Reviewer</TableHeadCell>
                <TableHeadCell scope="col" className="whitespace-nowrap px-4 py-3">Reviewed</TableHeadCell>
                <TableHeadCell scope="col" className="px-4 py-3">
                  <span className="sr-only">Actions</span>
                </TableHeadCell>
              </TableHead>
              <TableBody>
                {paged.map(check => (
                  <TableRow key={check.id} className="border-b border-default hover:bg-neutral-tertiary/50 dark:border-gray-600 dark:hover:bg-gray-700">
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-medium text-heading dark:text-white">
                      <p className="font-medium text-heading">{check.sc_id}</p>
                      {check.title && (
                        <p className="mt-0.5 text-xs font-normal text-body-subtle">{check.title}</p>
                      )}
                    </th>
                    <TableCell className="whitespace-nowrap px-4 py-3">
                      <Badge theme={customTheme.badge} color="brandBordered" size="xs">{check.wcag_level || '—'}</Badge>
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-4 py-3">
                      <CheckStatusBadge status={check.status} />
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-4 py-3 text-xs text-body">
                      {check.reviewer_name || '—'}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-4 py-3 text-xs text-body-subtle">
                      {fmtDate(check.reviewed_at)}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-4 py-3 font-medium text-heading dark:text-white">
                      <Dropdown
                        dismissOnClick={false}
                        inline
                        label={
                          <>
                            <span className="sr-only">Manage entry</span>
                            <DotsIcon />
                          </>
                        }
                        theme={dropdownFloatingTheme}
                      >
                        <DropdownItem>View</DropdownItem>
                        <DropdownItem>Edit</DropdownItem>
                        <DropdownDivider />
                        <DropdownItem>Mark as pass</DropdownItem>
                        <DropdownItem>Mark as fail</DropdownItem>
                      </Dropdown>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-default p-4 dark:border-gray-700">
            <span className="text-xs text-body-subtle dark:text-gray-400">
              Total checks: {filtered.length}
            </span>
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                showIcons
              />
            )}
          </div>
        </>
      )}
    </div>
  )
}

// ─── Report Tab ───────────────────────────────────────────────────────────────

function ReportTab({ audit }) {
  return (
    <div className="relative overflow-hidden bg-neutral-primary shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div className="flex flex-col items-center px-6 py-16 text-center">
        <div className="mb-4 rounded-base bg-brand-softer p-3">
          <BarChart3 className="h-7 w-7 text-fg-brand" aria-hidden="true" />
        </div>
        <h3 className="text-sm font-semibold text-heading">Report generation coming soon</h3>
        <p className="mt-2 max-w-xs text-xs text-body-subtle">
          Once all triage items are resolved, you'll be able to generate a WCAG{' '}
          {audit.wcag_version} {audit.conformance_level} conformance report.
        </p>
        <Button color="primary" size="sm" className="mt-5" disabled>
          <BarChart3 className="mr-1.5 h-4 w-4" aria-hidden="true" />
          Generate Report
        </Button>
      </div>
    </div>
  )
}

// ─── Scan panel error fallback ────────────────────────────────────────────────

function ScanPanelError({ error, resetErrorBoundary }) {
  return (
    <div className="relative overflow-hidden bg-neutral-primary shadow-md sm:rounded-lg">
      <div className="flex flex-col items-center px-6 py-12 text-center">
        <p className="mb-2 text-sm font-semibold text-fg-danger">Scan Panel Error</p>
        <p className="mb-4 text-xs text-body">{error?.message || 'An unexpected error occurred.'}</p>
        <Button color="failure" size="sm" onClick={resetErrorBoundary}>Try Again</Button>
      </div>
    </div>
  )
}

// ─── Tab definitions ──────────────────────────────────────────────────────────

const TABS = [
  { key: 'overview',       label: 'Overview',       icon: BarChart3    },
  { key: 'scan',           label: 'Scan',           icon: FileSearch   },
  { key: 'triage',         label: 'Triage',         icon: ClipboardList },
  { key: 'manual-checks',  label: 'Manual Checks',  icon: CheckCircle2 },
  { key: 'report',         label: 'Report',         icon: BarChart3    },
]

// ─── Main page ────────────────────────────────────────────────────────────────

export default function AuditDetailPage() {
  const { auditId } = useParams()
  const navigate    = useNavigate()
  const { user }    = useAuth()

  const [audit, setAudit]           = useState(null)
  const [scanJobs, setScanJobs]     = useState([])
  const [loading, setLoading]       = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError]           = useState(null)
  const [activeTab, setActiveTab]   = useState('overview')

  useEffect(() => {
    let cancelled = false
    Promise.all([getAudit(auditId), getScanJobs(auditId)]).then(
      ([{ data: auditData, error: auditErr }, { data: jobsData }]) => {
        if (cancelled) return
        if (auditErr) setError('Could not load audit. It may have been deleted or you may not have access.')
        else { setAudit(auditData); setScanJobs(jobsData ?? []) }
        setLoading(false)
      }
    )
    return () => { cancelled = true }
  }, [auditId])

  const handleRefresh = useCallback(async () => {
    setRefreshing(true)
    const [{ data: auditData, error: auditErr }, { data: jobsData }] = await Promise.all([
      getAudit(auditId),
      getScanJobs(auditId),
    ])
    if (auditErr) setError('Could not load audit. It may have been deleted or you may not have access.')
    else { setAudit(auditData); setScanJobs(jobsData ?? []) }
    setRefreshing(false)
  }, [auditId])

  if (loading) return (
    <div className="flex items-center justify-center py-24">
      <Spinner size="md" color="purple" />
    </div>
  )

  if (error || !audit) return (
    <div className="space-y-4 p-4 sm:p-6">
      <div className="relative overflow-hidden bg-neutral-primary shadow-md sm:rounded-lg">
        <div className="px-4 py-3 text-sm text-fg-danger">{error || 'Audit not found.'}</div>
      </div>
      <Button color="gray" size="sm" onClick={() => navigate('/audits')}>
        <ArrowLeft className="mr-1.5 h-4 w-4" aria-hidden="true" />
        Back to Audits
      </Button>
    </div>
  )

  return (
    <div className="space-y-4 p-4 sm:p-6">

      {/* ── Page header card — matches template's relative overflow-hidden wrapper ── */}
      <div className="relative overflow-hidden bg-neutral-primary shadow-md dark:bg-gray-800 sm:rounded-lg">

        {/* Header — same flex-col / md:flex-row structure as user-management.tsx */}
        <div className="flex flex-col px-4 pb-3 pt-4 md:flex-row md:items-center md:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <button
              onClick={() => navigate('/audits')}
              className="rounded p-1.5 text-body-subtle transition-colors hover:bg-neutral-tertiary dark:text-gray-400 dark:hover:bg-gray-700"
              aria-label="Back to audits"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="truncate text-base font-semibold text-heading dark:text-white">{audit.name}</h1>
                <WcagBadge version={audit.wcag_version} level={audit.conformance_level} />
                <StatusBadge status={audit.status} />
              </div>
              {audit.project_name && (
                <p className="mt-0.5 text-xs text-body-subtle">{audit.project_name}</p>
              )}
            </div>
          </div>
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="mt-3 rounded p-1.5 text-body-subtle transition-colors hover:bg-neutral-tertiary disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-700 md:mt-0"
            aria-label="Refresh audit data"
          >
            <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} aria-hidden="true" />
          </button>
        </div>

        {/* Tab navigation row — same border-t structure as AuditsPage radio row */}
        <div className="block w-full items-center justify-between border-t border-default px-4 py-0 dark:border-gray-700 md:flex">
          <div className="flex flex-wrap">
            {TABS.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`mr-4 flex items-center gap-1.5 whitespace-nowrap border-b-2 py-3 text-sm font-medium transition-colors ${
                  activeTab === key
                    ? 'border-fg-brand text-fg-brand dark:border-primary-500 dark:text-primary-500'
                    : 'border-transparent text-body-subtle hover:border-default-strong hover:text-body dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* ── Tab content ── */}
      {activeTab === 'overview' && (
        <OverviewTab audit={audit} scanJobs={scanJobs} />
      )}

      {activeTab === 'scan' && (
        <ErrorBoundary fallback={ScanPanelError}>
          <ScanPanel
            audit={{
              id: audit.id,
              auditName: audit.name,
              wcagVersion: audit.wcag_version,
              conformanceLevel: audit.conformance_level,
              preTestAnswers: audit.pre_test_answers ?? {},
              scope_json: audit.scope_json ?? { items: [] },
            }}
            auditId={auditId}
            userId={user?.id}
          />
        </ErrorBoundary>
      )}

      {activeTab === 'triage' && (
        <TriageTab auditId={auditId} />
      )}

      {activeTab === 'manual-checks' && (
        <ManualChecksTab auditId={auditId} />
      )}

      {activeTab === 'report' && (
        <ReportTab audit={audit} />
      )}

    </div>
  )
}
