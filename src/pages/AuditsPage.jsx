import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Badge, Button, Checkbox, Dropdown, DropdownDivider, DropdownItem,
  Label, Modal, ModalBody, ModalFooter, ModalHeader,
  Pagination, Radio, Select, Spinner,
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow,
  TextInput, theme,
} from 'flowbite-react'
import {
  Plus, Search, AlertTriangle,
  ClipboardList, Globe, Archive, Trash2, ChevronDown,
  Clock, HelpCircle,
} from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { useAuth } from '../context/AuthContext'
import { getAudits, archiveAudit, updateAudit } from '../lib/db/audits'
import { PipelineBar } from '../components/PipelineBar'
import { IssuesBadge } from '../components/IssuesBadge'
import { StatCard } from '../components/StatCard'
import { customTheme } from '../theme'

// Captured once at module load — used for relative due-date calculations.
const MODULE_NOW = Date.now()

/* ─── helpers ──────────────────────────────────────────────────── */

function getPipelineStage(audit) {
  if (audit.status === 'complete') return 3
  const s = audit.pipeline_stage ?? 0
  return Math.min(s, 3)
}

function WcagBadge({ version, level }) {
  // Combine version + level for unique color mapping
  const key = `${version} ${level}`

  const colorMap = {
    // WCAG 2.1
    '2.1 A':   'warning',    // amber
    '2.1 AA':  'info',       // blue/purple
    '2.1 AAA': 'success',    // green
    // WCAG 2.2
    '2.2 A':   'purple',     // purple
    '2.2 AA':  'primary',    // purple/primary
    '2.2 AAA': 'indigo',     // indigo
  }

  return (
    <Badge color={colorMap[key] ?? 'gray'} className="w-fit">
      WCAG {version} {level}
    </Badge>
  )
}

function StatusBadge({ status }) {
  const statusConfig = {
    active:   { color: 'primary', label: 'Active' },
    complete: { color: 'success', label: 'Complete' },
    archived: { color: 'gray', label: 'Archived' },
    draft:    { color: 'warning', label: 'Draft' },
  }
  const config = statusConfig[status] ?? { color: 'gray', label: status }

  return (
    <Badge color={config.color} className="w-fit">
      {config.label}
    </Badge>
  )
}

function DueDate({ date, onSetDate, auditId }) {
  // No date set — show "+ Set date" link
  if (!date) {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation()
          onSetDate?.(auditId)
        }}
        className="text-xs font-medium text-gray-400 hover:text-purple-600 hover:underline dark:text-gray-500 dark:hover:text-purple-400"
      >
        + Set date
      </button>
    )
  }

  // Date set — show colored dot + formatted date
  const d = new Date(date)
  const days = Math.ceil((d - MODULE_NOW) / 86400000)
  const fmt = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })

  // Determine dot color
  let dotColor = 'bg-emerald-500' // > 7 days
  if (days < 0 || days < 2) dotColor = 'bg-rose-500'     // overdue or < 2 days
  else if (days <= 7) dotColor = 'bg-amber-500'          // 2-7 days

  return (
    <span className="inline-flex items-center text-xs text-gray-500 dark:text-gray-400">
      <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${dotColor}`} />
      {fmt}
    </span>
  )
}

function BlockingBadge({ audit }) {
  const untriaged = audit.untriaged_count ?? 0
  const blocking = audit.blocking_count ?? 0

  // All triaged (no untriaged items)
  if (untriaged === 0) {
    return (
      <div className="flex items-center">
        <div className="mr-2 h-3 w-3 rounded-full bg-emerald-500" />
        All triaged
      </div>
    )
  }

  // Has blocking issues
  if (blocking > 0) {
    return (
      <div className="flex items-center">
        <div className="mr-2 h-3 w-3 rounded-full bg-rose-500" />
        {blocking} blocking
      </div>
    )
  }

  // Has untriaged items but not blocking
  return (
    <div className="flex items-center">
      <div className="mr-2 h-3 w-3 rounded-full bg-amber-500" />
      Awaiting review
    </div>
  )
}

function EmptyState({ search, activeTab, onCreateNew }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 rounded-lg bg-purple-100 p-3 dark:bg-purple-900/30">
        <ClipboardList className="h-7 w-7 text-purple-700 dark:text-purple-300" aria-hidden="true" />
      </div>
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
        {search || activeTab !== 'all' ? 'No audits match your filters' : 'No audits yet'}
      </h3>
      <p className="mb-5 mt-1 max-w-xs text-xs text-gray-500 dark:text-gray-400">
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

/* ─── chevron-down icon (for dropdowns) ───── */
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
  const [datePickerOpen, setDatePickerOpen]     = useState(false)
  const [datePickerAuditId, setDatePickerAuditId] = useState(null)
  const [dateDraft, setDateDraft]               = useState('')
  const [editTarget, setEditTarget]             = useState(null)   // audit object being edited
  const [editForm, setEditForm]                 = useState({})     // local draft of editable fields
  const [editSaving, setEditSaving]             = useState(false)
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
    const active          = audits.filter(a => a.status === 'active').length
    const complete        = audits.filter(a => a.status === 'complete').length
    // critical_count in the view = confirmed WCAG failures (decision='confirmed', issue_type='failure')
    const confirmedFails  = audits.reduce((n, a) => n + (a.critical_count         ?? 0), 0)
    const pendingTriage   = audits.reduce((n, a) => n + (a.untriaged_count        ?? 0), 0)
    const triageAudits    = audits.filter(a => (a.untriaged_count ?? 0) > 0).length
    const needsReview     = audits.reduce((n, a) => n + (a.needs_review_count     ?? 0), 0)
    return { active, complete, confirmedFails, pendingTriage, triageAudits, needsReview }
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

  /* ── date picker ── */
  const openDatePicker = (auditId) => {
    const audit = audits.find(a => a.id === auditId)
    // Pre-fill with existing date if set; date input expects YYYY-MM-DD
    setDateDraft(audit?.target_end_date?.slice(0, 10) ?? '')
    setDatePickerAuditId(auditId)
    setDatePickerOpen(true)
  }
  const handleSaveDate = async () => {
    if (!dateDraft || !datePickerAuditId) return
    await updateAudit(datePickerAuditId, { target_end_date: dateDraft })
    setAudits(prev => prev.map(a =>
      a.id === datePickerAuditId ? { ...a, target_end_date: dateDraft } : a
    ))
    setDatePickerOpen(false)
  }

  /* ── edit modal ── */
  const openEdit = (audit) => {
    setEditTarget(audit)
    setEditForm({
      name:              audit.name              ?? '',
      client_name:       audit.client_name       ?? '',
      project_name:      audit.project_name      ?? '',
      wcag_version:      audit.wcag_version      ?? '2.2',
      conformance_level: audit.conformance_level ?? 'AA',
      target_end_date:   audit.target_end_date?.slice(0, 10) ?? '',
    })
  }
  const handleEditSave = async () => {
    if (!editTarget) return
    setEditSaving(true)
    const payload = {
      name:              editForm.name              || null,
      client_name:       editForm.client_name       || null,
      project_name:      editForm.project_name      || null,
      wcag_version:      editForm.wcag_version,
      conformance_level: editForm.conformance_level,
      target_end_date:   editForm.target_end_date   || null,
    }
    const { error } = await updateAudit(editTarget.id, payload)
    if (!error) {
      setAudits(prev => prev.map(a =>
        a.id === editTarget.id ? { ...a, ...payload } : a
      ))
      setEditTarget(null)
    }
    setEditSaving(false)
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
    <div className="grid grid-cols-1 gap-4 px-4 pt-6">

      {/* ── Page header (matches Next.js pattern) */}
      <div className="col-span-full mb-2">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Audits</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Manage and track accessibility audits</p>
      </div>

      {/* ── Stat cards row */}
      <div className="col-span-full grid grid-cols-2 gap-4 xl:grid-cols-4">
        <StatCard
          icon={Globe}
          label="Active audits"
          value={stats.active}
          trend={stats.complete > 0 ? `${stats.complete} completed` : 'none completed yet'}
          trendDirection={stats.complete > 0 ? 'up' : 'neutral'}
          color="primary"
        />

        <StatCard
          icon={AlertTriangle}
          label="Confirmed failures"
          value={stats.confirmedFails}
          trend={stats.confirmedFails > 0 ? 'verified WCAG violations' : 'none found yet'}
          trendDirection={stats.confirmedFails > 0 ? 'down' : 'up'}
          color="danger"
        />

        <StatCard
          icon={Clock}
          label="Pending triage"
          value={stats.pendingTriage}
          trend={stats.pendingTriage > 0
            ? `across ${stats.triageAudits} audit${stats.triageAudits !== 1 ? 's' : ''}`
            : 'all items reviewed'}
          trendDirection={stats.pendingTriage > 0 ? 'down' : 'up'}
          color="warning"
        />

        <StatCard
          icon={HelpCircle}
          label="Needs review"
          value={stats.needsReview}
          trend={stats.needsReview > 0 ? 'require human check' : 'nothing to review'}
          trendDirection={stats.needsReview > 0 ? 'down' : 'up'}
          color="info"
        />
      </div>

      {/* ── Main white card */}
      <div className="col-span-full overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">

        {/* Header Row 1: Search + Filters + Add button */}
        <div className="flex flex-col-reverse items-center justify-between py-3 mx-4 md:flex-row md:space-x-4">
          <div className="flex w-full flex-col space-y-3 md:flex-row md:items-center md:space-y-0 lg:w-2/3">
            {/* Search form — flex row so button sits flush at the same height */}
            <form
              className="w-full flex-1 md:mr-4 md:max-w-sm"
              onSubmit={e => e.preventDefault()}
            >
              <Label htmlFor="audit-search" className="sr-only">Search audits</Label>
              <div className="flex">
                {/* Input */}
                <div className="relative flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="audit-search"
                    name="audit-search"
                    type="search"
                    placeholder="Search..."
                    value={search}
                    onChange={e => { setSearch(e.target.value); setCurrentPage(1) }}
                    className="block w-full rounded-l-lg rounded-r-none border border-r-0 border-gray-300 bg-white py-1.5 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-purple-400"
                  />
                </div>
                {/* Search button — same height + border-gray-300 as Filter/Config buttons */}
                <button
                  type="submit"
                  className="inline-flex items-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Filters + Configurations dropdowns */}
            <div className="flex items-center space-x-4">
              <Dropdown
                theme={customTheme.dropdown}
                renderTrigger={() => (
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                      className="h-4 w-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      />
                    </svg>
                    Filter
                    <ChevronDown className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
                  </button>
                )}
              >
                <div className="p-3 min-w-[200px]">
                  <h6 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    By status
                  </h6>
                  <ul className="space-y-1 text-sm">
                    {['active', 'draft', 'complete', 'archived'].map(s => (
                      <li key={s}>
                        <Label className="flex w-full cursor-pointer items-center rounded px-1.5 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                          <Checkbox
                            checked={statusFilter === s}
                            onChange={() => setStatusFilter(statusFilter === s ? 'All' : s)}
                            theme={customTheme.checkbox}
                            className="mr-2"
                          />
                          {s.charAt(0).toUpperCase() + s.slice(1)}
                        </Label>
                      </li>
                    ))}
                  </ul>

                  <div className="my-2 h-px bg-gray-200 dark:bg-gray-600" />

                  <h6 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    WCAG Version
                  </h6>
                  <ul className="space-y-1 text-sm">
                    {['2.1', '2.2'].map(v => (
                      <li key={v}>
                        <Label className="flex w-full cursor-pointer items-center rounded px-1.5 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                          <Checkbox
                            checked={wcagVer === v}
                            onChange={() => setWcagVer(wcagVer === v ? 'All' : v)}
                            theme={customTheme.checkbox}
                            className="mr-2"
                          />
                          WCAG {v}
                        </Label>
                      </li>
                    ))}
                  </ul>
                </div>
              </Dropdown>

              {/* Configurations dropdown */}
              <Dropdown
                theme={{
                  ...customTheme.dropdown,
                  floating: {
                    ...customTheme.dropdown.floating,
                    base: twMerge(customTheme.dropdown.floating.base, 'w-48'),
                  },
                  arrowIcon: 'hidden',
                }}
                renderTrigger={() => (
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4 text-gray-400"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Configurations
                    <ChevronDown className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
                  </button>
                )}
              >
                <DropdownItem>By Category</DropdownItem>
                <DropdownItem>By Brand</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Reset</DropdownItem>
              </Dropdown>
            </div>
          </div>

          {/* Right side: Add new audit + Manage Columns buttons */}
          <div className="mb-3 flex w-full shrink-0 flex-col items-stretch justify-end md:mb-0 md:w-auto md:flex-row md:items-center md:space-x-3">
            <Button color="primary" onClick={() => navigate('/audits/new')}>
              <Plus className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
              Add new audit
            </Button>
          </div>
        </div>

        {/* Header Row 2: Title + results count with tooltip */}
        <div className="flex flex-col items-center justify-between py-3 mx-4 space-y-3 border-b border-gray-200 md:flex-row md:space-y-0 md:space-x-4 dark:border-gray-700">
          <div className="flex items-center w-full space-x-3">
            <h5 className="font-semibold dark:text-white">All Audits</h5>
            <div className="font-medium text-gray-500 dark:text-gray-400">
              {filtered.length} results
            </div>
            {/* Tooltip with results info */}
            <div className="relative group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-400 cursor-help"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">More info</span>
              {/* Tooltip */}
              <div
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:visible group-hover:opacity-100 tooltip dark:bg-gray-700 -left-1/2 top-full mt-2 whitespace-nowrap"
              >
                Showing {(currentPage - 1) * PER_PAGE + 1}-{Math.min(currentPage * PER_PAGE, filtered.length)} of {filtered.length} audits
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>

        {/* Show only: radio filters */}
        <div className="flex flex-wrap items-center px-4 py-4 dark:border-gray-700">
          <div className="hidden mr-4 text-sm font-medium text-gray-900 md:flex dark:text-white">
            Show only:
          </div>
          <div className="flex flex-wrap">
            {TABS.map(tab => (
              <div key={tab.key} className="flex items-center mr-4">
                <Radio
                  id={`show-${tab.key}`}
                  name="show-only"
                  checked={activeTab === tab.key}
                  onChange={() => { setActiveTab(tab.key); setCurrentPage(1) }}
                />
                <label
                  htmlFor={`show-${tab.key}`}
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
            <div className="relative overflow-x-auto rounded-base bg-white shadow-xs dark:bg-gray-800">
              <Table
                theme={customTheme.table}
                className="w-full text-left text-sm text-gray-500 dark:text-gray-400"
              >
                <TableHead>
                  <TableRow>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginated.map(audit => {
                    const stage = getPipelineStage(audit)

                    return (
                      <TableRow
                        key={audit.id}
                        className="border-b border-gray-200 bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        {/* Checkbox */}
                        <TableCell className="w-4 px-4 py-3">
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
                        <TableCell
                          scope="row"
                          className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                        >
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                              <span className="text-xs font-medium text-primary-700">
                                {(audit.name?.[0] ?? 'A').toUpperCase()}
                              </span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">{audit.name}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {audit.client_name ?? audit.project_name ?? '—'}
                              </p>
                            </div>
                          </div>
                        </TableCell>

                        {/* WCAG standard */}
                        <TableCell className="px-4 py-2">
                          <Badge className="w-fit" color="gray">
                            {audit.wcag_version} {audit.conformance_level}
                          </Badge>
                        </TableCell>

                        {/* Pipeline */}
                        <TableCell className="px-4 py-2">
                          <PipelineBar stage={stage} />
                        </TableCell>

                        {/* Issues */}
                        <TableCell className="px-4 py-2">
                          <IssuesBadge audit={audit} onScanClick={(a) => navigate(`/audits/${a.id}/scan`)} />
                        </TableCell>

                        {/* Blocking */}
                        <TableCell className="px-4 py-2">
                          <BlockingBadge audit={audit} />
                        </TableCell>

                        {/* Due date */}
                        <TableCell className="whitespace-nowrap px-4 py-2">
                          <DueDate
                            date={audit.target_end_date}
                            auditId={audit.id}
                            onSetDate={openDatePicker}
                          />
                        </TableCell>

                        {/* Status — dot + text pattern */}
                        <TableCell className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                          <StatusBadge status={audit.status} />
                        </TableCell>

                        {/* Actions — 3 dots dropdown */}
                        <TableCell className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                          <Dropdown
                            inline
                            label={
                              <>
                                <span className="sr-only">Edit audit</span>
                                <DotsIcon />
                              </>
                            }
                            theme={dropdownFloatingTheme}
                          >
                            <DropdownItem onClick={() => navigate(`/audits/${audit.id}`)}>Show</DropdownItem>
                            <DropdownItem onClick={() => openEdit(audit)}>Edit</DropdownItem>
                            <DropdownDivider />
                            <DropdownItem onClick={() => handleArchive(audit.id)}>Archive</DropdownItem>
                          </Dropdown>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-4 dark:border-gray-700">
              <span className="text-xs text-gray-500 dark:text-gray-400">
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
      <Modal show={!!deleteTarget} onClose={() => setDeleteTarget(null)} size="md">
        <ModalHeader className="border-b border-gray-200 text-base font-semibold text-gray-900 dark:text-white">
          Delete audit
        </ModalHeader>
        <ModalBody>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Are you sure you want to delete{' '}
            <span className="font-semibold text-gray-900 dark:text-white">{deleteTarget?.name}</span>?
            This action cannot be undone.
          </p>
        </ModalBody>
        <ModalFooter className="flex justify-end gap-2 border-t border-gray-200">
          <Button color="gray" size="sm" onClick={() => setDeleteTarget(null)}>Cancel</Button>
          <Button color="failure" size="sm" onClick={handleDelete}>Delete</Button>
        </ModalFooter>
      </Modal>

      {/* ── Date picker modal ── */}
      <Modal show={datePickerOpen} onClose={() => setDatePickerOpen(false)} size="sm">
        <ModalHeader className="border-b border-gray-200 text-base font-semibold text-gray-900 dark:text-white">
          Set due date
        </ModalHeader>
        <ModalBody>
          <Label htmlFor="due-date" className="mb-1.5 block text-sm font-medium text-gray-900 dark:text-white">
            Due date
          </Label>
          <TextInput
            id="due-date"
            type="date"
            value={dateDraft}
            onChange={e => setDateDraft(e.target.value)}
          />
        </ModalBody>
        <ModalFooter className="flex justify-end gap-2 border-t border-gray-200">
          <Button color="gray" size="sm" onClick={() => setDatePickerOpen(false)}>Cancel</Button>
          <Button color="primary" size="sm" disabled={!dateDraft} onClick={handleSaveDate}>Save</Button>
        </ModalFooter>
      </Modal>

      {/* ── Edit audit modal ── */}
      <Modal show={!!editTarget} onClose={() => setEditTarget(null)} size="md">
        <ModalHeader className="border-b border-gray-200 text-base font-semibold text-gray-900 dark:text-white">
          Edit audit
        </ModalHeader>
        <ModalBody>
          <div className="space-y-4">
            <div>
              <Label htmlFor="edit-name" className="mb-1.5 block text-sm font-medium text-gray-900 dark:text-white">
                Audit name
              </Label>
              <TextInput
                id="edit-name"
                value={editForm.name ?? ''}
                onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))}
                placeholder="e.g. Website accessibility audit"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="edit-client" className="mb-1.5 block text-sm font-medium text-gray-900 dark:text-white">
                  Client
                </Label>
                <TextInput
                  id="edit-client"
                  value={editForm.client_name ?? ''}
                  onChange={e => setEditForm(f => ({ ...f, client_name: e.target.value }))}
                  placeholder="Client name"
                />
              </div>
              <div>
                <Label htmlFor="edit-project" className="mb-1.5 block text-sm font-medium text-gray-900 dark:text-white">
                  Project
                </Label>
                <TextInput
                  id="edit-project"
                  value={editForm.project_name ?? ''}
                  onChange={e => setEditForm(f => ({ ...f, project_name: e.target.value }))}
                  placeholder="Project name"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="edit-wcag" className="mb-1.5 block text-sm font-medium text-gray-900 dark:text-white">
                  WCAG version
                </Label>
                <Select
                  id="edit-wcag"
                  value={editForm.wcag_version ?? '2.2'}
                  onChange={e => setEditForm(f => ({ ...f, wcag_version: e.target.value }))}
                >
                  <option value="2.1">WCAG 2.1</option>
                  <option value="2.2">WCAG 2.2</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="edit-level" className="mb-1.5 block text-sm font-medium text-gray-900 dark:text-white">
                  Conformance level
                </Label>
                <Select
                  id="edit-level"
                  value={editForm.conformance_level ?? 'AA'}
                  onChange={e => setEditForm(f => ({ ...f, conformance_level: e.target.value }))}
                >
                  <option value="A">A</option>
                  <option value="AA">AA</option>
                  <option value="AAA">AAA</option>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="edit-due" className="mb-1.5 block text-sm font-medium text-gray-900 dark:text-white">
                Due date
              </Label>
              <TextInput
                id="edit-due"
                type="date"
                value={editForm.target_end_date ?? ''}
                onChange={e => setEditForm(f => ({ ...f, target_end_date: e.target.value }))}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="flex justify-end gap-2 border-t border-gray-200">
          <Button color="gray" size="sm" onClick={() => setEditTarget(null)}>Cancel</Button>
          <Button
            color="primary"
            size="sm"
            disabled={!editForm.name?.trim() || editSaving}
            isProcessing={editSaving}
            onClick={handleEditSave}
          >
            Save changes
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  )
}
