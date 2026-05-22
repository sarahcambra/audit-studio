import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Badge, Button, Checkbox, Dropdown, DropdownDivider, DropdownItem,
  Label, Modal, Pagination, Radio, Select, Spinner,
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow,
  TextInput, theme,
} from 'flowbite-react'
import {
  Plus, Search, Lock, CheckCircle2, AlertTriangle,
  ClipboardList, FileCheck, Globe, Archive, Trash2,
} from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { useAuth } from '../context/AuthContext'
import { getAudits, archiveAudit } from '../lib/db/audits'
import { customTheme } from '../theme'

// Captured once at module load — used for relative due-date calculations.
const MODULE_NOW = Date.now()

/* ─── helpers ──────────────────────────────────────────────────── */

function getPipelineStage(audit) {
  if (audit.status === 'complete') return 3
  const s = audit.pipeline_stage ?? 0
  return Math.min(s, 3)
}

const STAGE_LABELS = ['Scan', 'Triage', 'Manual', 'Report']

function PipelineBar({ stage }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-body-subtle">{STAGE_LABELS[stage] ?? 'Scan'}</span>
      <div className="flex gap-1">
        {STAGE_LABELS.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-5 rounded-full ${
              i < stage
                ? 'bg-primary-600'
                : i === stage
                ? 'bg-primary-200'
                : 'bg-neutral-quaternary'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function WcagBadge({ version, level }) {
  return (
    <Badge color="info" size="xs" className="border border-primary-200 dark:border-primary-700">
      {version} {level}
    </Badge>
  )
}

function StatusBadge({ status }) {
  const colorMap = {
    active:   'success',
    complete: 'success',
    archived: 'gray',
    draft:    'warning',
  }
  const borderMap = {
    active:   'border border-emerald-200 dark:border-emerald-700',
    complete: 'border border-emerald-200 dark:border-emerald-700',
    archived: 'border border-gray-300 dark:border-gray-500',
    draft:    'border border-orange-200 dark:border-orange-700',
  }
  const labels = { active: 'Active', complete: 'Complete', archived: 'Archived', draft: 'Draft' }
  return (
    <Badge color={colorMap[status] ?? 'gray'} size="xs" className={borderMap[status] ?? 'border border-gray-300 dark:border-gray-500'}>
      {labels[status] ?? status}
    </Badge>
  )
}

function DueDate({ date }) {
  if (!date) return <span className="text-xs text-body-subtle">—</span>
  const d    = new Date(date)
  const days = Math.ceil((d - MODULE_NOW) / 86400000)
  const fmt  = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
  if (days < 0)   return <span className="text-xs font-medium text-fg-danger">{fmt} · overdue</span>
  if (days <= 7)  return <span className="text-xs font-medium text-fg-danger">{fmt} · {days}d</span>
  if (days <= 14) return <span className="text-xs font-medium text-fg-warning">{fmt} · {days}d</span>
  return <span className="text-xs text-body-subtle">{fmt} · {days}d</span>
}

function BlockingBadge({ untriaged }) {
  if (!untriaged || untriaged === 0) {
    return (
      <Badge theme={customTheme.badge} color="successBordered" size="xs" icon={CheckCircle2}>
        All triaged
      </Badge>
    )
  }
  return (
    <Badge theme={customTheme.badge} color="dangerBordered" size="xs" icon={Lock}>
      {untriaged} untriaged
    </Badge>
  )
}

function StatCard({ icon: Icon, label, value, sub, subColor }) {
  return (
    <div className="rounded bg-neutral-primary p-5 shadow-sm border border-default">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-body-subtle uppercase tracking-wide">{label}</p>
          <p className="mt-1.5 text-2xl font-semibold text-heading">{value}</p>
          {sub && (
            <p className={`mt-1 text-xs ${
              subColor === 'warn' ? 'text-fg-warning'
              : subColor === 'up' ? 'text-fg-success'
              : 'text-body-subtle'
            }`}>
              {sub}
            </p>
          )}
        </div>
        <div className="rounded bg-brand-softer p-2.5">
          <Icon className="h-5 w-5 text-fg-brand" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

function EmptyState({ search, activeTab, onCreateNew }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 rounded-base bg-brand-softer p-3">
        <ClipboardList className="h-7 w-7 text-fg-brand" aria-hidden="true" />
      </div>
      <h3 className="text-sm font-semibold text-heading">
        {search || activeTab !== 'all' ? 'No audits match your filters' : 'No audits yet'}
      </h3>
      <p className="mt-1 mb-5 max-w-xs text-xs text-body-subtle">
        {search || activeTab !== 'all'
          ? 'Try adjusting your search or filter criteria.'
          : 'Create your first audit to get started.'}
      </p>
      {!search && activeTab === 'all' && (
        <Button color="primary" size="sm" onClick={onCreateNew}>
          <Plus className="mr-1.5 h-4 w-4" aria-hidden="true" />
          Add new audit
        </Button>
      )}
    </div>
  )
}

const TABS = [
  { key: 'all',      label: 'All' },
  { key: 'active',   label: 'Active' },
  { key: 'triage',   label: 'Needs triage' },
  { key: 'complete', label: 'Complete' },
  { key: 'archived', label: 'Archived' },
]

const WCAG_VERSIONS = ['All', '2.1', '2.2']
const WCAG_LEVELS   = ['All', 'A', 'AA', 'AAA']
const STATUSES      = ['All', 'active', 'complete', 'draft', 'archived']

/* ─── 3-dots icon (matches template's inline dots svg) ─────────── */
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

/* ─── chevron-down icon (matches template's actions dropdown) ───── */
const ChevronDownIcon = () => (
  <svg
    className="-ml-1 mr-1.5 h-5 w-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      clipRule="evenodd"
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    />
  </svg>
)

/* shared dropdown floating theme (matches template exactly) */
const dropdownFloatingTheme = {
  arrowIcon: 'hidden',
  floating: {
    base: twMerge(theme.dropdown.floating.base, 'w-40'),
  },
}

/* ─── main component ───────────────────────────────────────────── */

export default function AuditsPage() {
  const navigate                        = useNavigate()
  const { user }                        = useAuth()
  const [audits, setAudits]             = useState([])
  const [loading, setLoading]           = useState(true)
  const [activeTab, setActiveTab]       = useState('all')
  const [search, setSearch]             = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [wcagVer, setWcagVer]           = useState('All')
  const [wcagLevel, setWcagLevel]       = useState('All')
  const [currentPage, setCurrentPage]   = useState(1)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [selectedIds, setSelectedIds]   = useState(new Set())
  const PER_PAGE = 10

  useEffect(() => {
    if (!user) return
    let cancelled = false
    getAudits(user.id).then(({ data }) => {
      if (cancelled) return
      setAudits(data ?? [])
      setLoading(false)
    })
    return () => { cancelled = true }
  }, [user])

  /* ── derived stats ── */
  const stats = useMemo(() => {
    const active    = audits.filter(a => a.status === 'active').length
    const complete  = audits.filter(a => a.status === 'complete').length
    const untriaged = audits.reduce((n, a) => n + (a.untriaged_count ?? 0), 0)
    const blocking  = audits.filter(a => (a.untriaged_count ?? 0) > 0).length
    const critical  = audits.reduce((n, a) => n + (a.critical_count ?? 0), 0)
    return { active, complete, untriaged, blocking, critical }
  }, [audits])

  /* ── filtered list ── */
  const filtered = useMemo(() => {
    return audits.filter(a => {
      if (activeTab === 'active'   && a.status !== 'active')   return false
      if (activeTab === 'complete' && a.status !== 'complete') return false
      if (activeTab === 'archived' && a.status !== 'archived') return false
      if (activeTab === 'triage'   && (a.untriaged_count ?? 0) === 0) return false
      if (statusFilter !== 'All'   && a.status !== statusFilter)      return false
      if (wcagVer      !== 'All'   && a.wcag_version      !== wcagVer)      return false
      if (wcagLevel    !== 'All'   && a.conformance_level !== wcagLevel)    return false
      if (search) {
        const q = search.toLowerCase()
        if (!a.name?.toLowerCase().includes(q) &&
            !a.client_name?.toLowerCase().includes(q) &&
            !a.project_name?.toLowerCase().includes(q)) return false
      }
      return true
    })
  }, [audits, activeTab, search, statusFilter, wcagVer, wcagLevel])

  const paginated  = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)
  const totalPages = Math.ceil(filtered.length / PER_PAGE)

  const handleArchive = async (auditId) => {
    await archiveAudit(auditId)
    setAudits(prev => prev.map(a => a.id === auditId ? { ...a, status: 'archived' } : a))
  }

  // TODO: wire up real delete when confirmation modal component is chosen
  const handleDelete = () => {
    setDeleteTarget(null)
  }

  const handleSelectAll = () => {
    if (paginated.every(a => selectedIds.has(a.id))) {
      setSelectedIds(prev => {
        const next = new Set(prev)
        paginated.forEach(a => next.delete(a.id))
        return next
      })
    } else {
      setSelectedIds(prev => {
        const next = new Set(prev)
        paginated.forEach(a => next.add(a.id))
        return next
      })
    }
  }

  const handleSelectRow = (id) => {
    setSelectedIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) { next.delete(id) } else { next.add(id) }
      return next
    })
  }

  return (
    <div className="space-y-4 p-4 sm:p-6">

      {/* ── Stat cards — separate from main white card (user requirement) ── */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard
          icon={ClipboardList}
          label="Total active"
          value={stats.active}
          sub={stats.complete > 0 ? `${stats.complete} complete` : null}
          subColor="up"
        />
        <StatCard
          icon={Lock}
          label="Untriaged items"
          value={stats.untriaged}
          sub={stats.blocking > 0 ? `blocking ${stats.blocking} report${stats.blocking > 1 ? 's' : ''}` : 'nothing blocked'}
          subColor={stats.blocking > 0 ? 'warn' : 'up'}
        />
        <StatCard
          icon={AlertTriangle}
          label="Critical issues"
          value={stats.critical}
          sub={stats.critical > 0 ? 'across active audits' : 'none found'}
          subColor={stats.critical > 0 ? 'warn' : 'up'}
        />
        <StatCard
          icon={FileCheck}
          label="Reports ready"
          value={audits.filter(a => a.status === 'complete' && (a.untriaged_count ?? 0) === 0).length}
          sub="ready to export"
          subColor="up"
        />
      </div>

      {/* ── Main white card — matches template's relative overflow-hidden wrapper ── */}
      <div className="relative overflow-hidden bg-neutral-primary shadow-md dark:bg-gray-800 sm:rounded-lg">

        {/* Header — matches template's flex flex-col … md:flex-row md:justify-between */}
        <div className="flex flex-col px-4 pb-3 pt-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-base font-semibold text-heading dark:text-white">All Audits</h1>
            <p className="mt-0.5 text-xs text-body-subtle">
              {stats.active} active · {stats.blocking > 0 ? `${stats.blocking} need attention` : 'nothing blocking'}
            </p>
          </div>
          <Button
            color="primary"
            size="sm"
            onClick={() => navigate('/audits/new')}
            className="mt-3 md:m-0"
          >
            <Plus className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
            Add new audit
          </Button>
        </div>

        {/* Filter grid — matches template's grid w-full grid-cols-2 gap-4 … lg:grid-cols-5 */}
        <div className="grid w-full grid-cols-2 gap-4 px-4 pb-4 md:grid-cols-3 lg:grid-cols-5">
          <TextInput
            id="audit-search"
            aria-label="Search audits and clients"
            placeholder="Search audits, clients…"
            value={search}
            onChange={e => { setSearch(e.target.value); setCurrentPage(1) }}
            icon={Search}
            sizing="sm"
          />
          <Select
            id="status-filter"
            aria-label="Filter by status"
            value={statusFilter}
            onChange={e => { setStatusFilter(e.target.value); setCurrentPage(1) }}
            sizing="sm"
          >
            {STATUSES.map(s => (
              <option key={s} value={s}>
                {s === 'All' ? 'All statuses' : s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </Select>
          <Select
            id="wcag-version"
            aria-label="Filter by WCAG version"
            value={wcagVer}
            onChange={e => { setWcagVer(e.target.value); setCurrentPage(1) }}
            sizing="sm"
          >
            {WCAG_VERSIONS.map(v => (
              <option key={v} value={v}>{v === 'All' ? 'All WCAG versions' : `WCAG ${v}`}</option>
            ))}
          </Select>
          <Select
            id="wcag-level"
            aria-label="Filter by conformance level"
            value={wcagLevel}
            onChange={e => { setWcagLevel(e.target.value); setCurrentPage(1) }}
            sizing="sm"
          >
            {WCAG_LEVELS.map(l => (
              <option key={l} value={l}>{l === 'All' ? 'All levels' : `Level ${l}`}</option>
            ))}
          </Select>
          {/* 5th slot — intentionally empty for grid alignment on large screens */}
          <div className="hidden lg:block" />
        </div>

        {/* Show: radio row — matches template's exact design */}
        <div className="block w-full items-center justify-between border-t border-default px-4 py-3 dark:border-gray-700 md:flex">
          <div className="flex flex-wrap">
            <div className="mr-4 flex items-center text-sm font-medium text-heading dark:text-white">
              Show:
            </div>
            {TABS.map(tab => (
              <div key={tab.key} className="mr-4 flex items-center">
                <Radio
                  id={`show-${tab.key}`}
                  name="show-only"
                  checked={activeTab === tab.key}
                  onChange={() => { setActiveTab(tab.key); setCurrentPage(1) }}
                />
                <label
                  htmlFor={`show-${tab.key}`}
                  className="ml-2 text-sm font-medium text-heading dark:text-gray-300"
                >
                  {tab.label}
                  {tab.key === 'triage' && stats.blocking > 0 && (
                    <span className="ml-1.5 inline-flex items-center rounded-full bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                      {stats.blocking}
                    </span>
                  )}
                </label>
              </div>
            ))}
          </div>
          <div className="mt-3 md:mt-0">
            {/* Actions dropdown — matches template's pattern exactly */}
            <Dropdown
              color="gray"
              label={
                <>
                  <ChevronDownIcon />
                  Actions
                </>
              }
              theme={dropdownFloatingTheme}
            >
              <DropdownItem>Export CSV</DropdownItem>
            </Dropdown>
          </div>
        </div>

        {/* Table — matches template's overflow-x-auto wrapper */}
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Spinner size="md" color="purple" />
          </div>
        ) : filtered.length === 0 ? (
          <EmptyState
            search={search}
            activeTab={activeTab}
            onCreateNew={() => navigate('/audits/new')}
          />
        ) : (
          <>
            <div className="overflow-x-auto">
              <Table
                theme={{ root: { wrapper: 'static' } }}
                className="w-full text-left text-sm text-body dark:text-gray-400"
              >
                <TableHead className="bg-neutral-tertiary text-xs uppercase text-body-subtle dark:bg-gray-700 dark:text-gray-400">
                  <TableHeadCell scope="col" className="p-4">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-all"
                        name="checkbox-all"
                        checked={paginated.length > 0 && paginated.every(a => selectedIds.has(a.id))}
                        onChange={handleSelectAll}
                      />
                      <Label htmlFor="checkbox-all" className="sr-only">Select all</Label>
                    </div>
                  </TableHeadCell>
                  <TableHeadCell scope="col" className="px-4 py-3">Audit / Client</TableHeadCell>
                  <TableHeadCell scope="col" className="px-4 py-3">Standard</TableHeadCell>
                  <TableHeadCell scope="col" className="px-4 py-3">Pipeline</TableHeadCell>
                  <TableHeadCell scope="col" className="px-4 py-3">Issues</TableHeadCell>
                  <TableHeadCell scope="col" className="px-4 py-3">Blocking</TableHeadCell>
                  <TableHeadCell scope="col" className="whitespace-nowrap px-4 py-3">Due date</TableHeadCell>
                  <TableHeadCell scope="col" className="px-4 py-3">Status</TableHeadCell>
                  <TableHeadCell scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </TableHeadCell>
                </TableHead>
                <TableBody>
                  {paginated.map(audit => {
                    const stage     = getPipelineStage(audit)
                    const critical  = audit.critical_count     ?? 0
                    const needs     = audit.needs_review_count ?? 0
                    const untriaged = audit.untriaged_count    ?? 0

                    return (
                      <TableRow
                        key={audit.id}
                        className="cursor-pointer border-b border-default hover:bg-neutral-tertiary/50 dark:border-gray-600 dark:hover:bg-gray-700"
                        onClick={() => navigate(`/audits/${audit.id}`)}
                      >
                        {/* Checkbox — stop row navigation on click */}
                        <TableCell
                          className="w-4 px-4 py-3"
                          onClick={e => e.stopPropagation()}
                        >
                          <div className="flex items-center">
                            <Checkbox
                              id={`checkbox-${audit.id}`}
                              name={`checkbox-${audit.id}`}
                              checked={selectedIds.has(audit.id)}
                              onChange={() => handleSelectRow(audit.id)}
                            />
                            <Label htmlFor={`checkbox-${audit.id}`} className="sr-only">
                              Select this audit
                            </Label>
                          </div>
                        </TableCell>

                        {/* Audit / client */}
                        <th
                          scope="row"
                          className="whitespace-nowrap px-4 py-3 font-medium text-heading dark:text-white"
                        >
                          <p className="text-sm font-medium text-heading">{audit.name}</p>
                          <p className="mt-0.5 text-xs font-normal text-body-subtle">
                            {audit.client_name ?? audit.project_name ?? '—'}
                            {audit.website_url && (
                              <span className="ml-1.5 inline-flex items-center gap-0.5 font-mono">
                                <Globe className="h-2.5 w-2.5" aria-hidden="true" />
                                {new URL(audit.website_url).hostname}
                              </span>
                            )}
                          </p>
                        </th>

                        {/* WCAG standard */}
                        <TableCell className="px-4 py-3">
                          <WcagBadge version={audit.wcag_version} level={audit.conformance_level} />
                        </TableCell>

                        {/* Pipeline */}
                        <TableCell className="px-4 py-3">
                          <PipelineBar stage={stage} />
                        </TableCell>

                        {/* Issues */}
                        <TableCell className="whitespace-nowrap px-4 py-3">
                          {critical > 0 ? (
                            <>
                              <span className="text-sm font-medium text-fg-danger">{critical} critical</span>
                              {needs > 0 && (
                                <p className="mt-0.5 text-xs text-body-subtle">{needs} needs review</p>
                              )}
                            </>
                          ) : stage === 0 ? (
                            <span className="text-xs text-body-subtle">Not scanned</span>
                          ) : (
                            <span className="text-xs font-medium text-fg-success">0 critical</span>
                          )}
                        </TableCell>

                        {/* Blocking */}
                        <TableCell className="px-4 py-3">
                          <BlockingBadge untriaged={stage > 0 ? untriaged : null} />
                        </TableCell>

                        {/* Due date */}
                        <TableCell className="whitespace-nowrap px-4 py-3">
                          <DueDate date={audit.target_end_date} />
                        </TableCell>

                        {/* Status */}
                        <TableCell className="whitespace-nowrap px-4 py-3">
                          <StatusBadge status={audit.status} />
                        </TableCell>

                        {/* 3-dot actions — stop row click propagation */}
                        {/* Matches template's Dropdown dismissOnClick={false} inline + twMerge theme */}
                        <TableCell
                          className="whitespace-nowrap px-4 py-3 font-medium text-heading dark:text-white"
                          onClick={e => e.stopPropagation()}
                        >
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
                            <DropdownItem onClick={() => navigate(`/audits/${audit.id}`)}>
                              Open
                            </DropdownItem>
                            <DropdownDivider />
                            <DropdownItem onClick={() => handleArchive(audit.id)}>
                              <Archive className="mr-2 h-4 w-4" aria-hidden="true" />
                              Archive
                            </DropdownItem>
                            <DropdownItem
                              className="text-red-600 dark:text-red-600"
                              onClick={() => setDeleteTarget(audit)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" aria-hidden="true" />
                              Delete
                            </DropdownItem>
                          </Dropdown>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>

            {/* Footer — matches template's flex items-center justify-between p-4 */}
            <div className="flex items-center justify-between border-t border-default p-4 dark:border-gray-700">
              <span className="text-xs text-body-subtle dark:text-gray-400">
                Total audits: {filtered.length}
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

      {/* ── Delete confirmation modal ── */}
      {/* TODO: replace with Flowbite delete-confirm component when chosen */}
      <Modal show={!!deleteTarget} onClose={() => setDeleteTarget(null)} size="md">
        <Modal.Header className="border-b border-default text-base font-semibold text-heading">
          Delete audit
        </Modal.Header>
        <Modal.Body>
          <p className="text-sm text-body">
            Are you sure you want to delete{' '}
            <span className="font-semibold text-heading">{deleteTarget?.name}</span>?
            This action cannot be undone.
          </p>
        </Modal.Body>
        <Modal.Footer className="flex justify-end gap-2 border-t border-default">
          <Button color="gray" size="sm" onClick={() => setDeleteTarget(null)}>Cancel</Button>
          <Button color="failure" size="sm" onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
