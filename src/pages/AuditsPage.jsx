import { useState, useEffect, useMemo, useCallback } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  Button,
  Card,
  Datepicker,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Pagination,
  Select,
  Spinner,
  TextInput,
  theme,
  Drawer,
  DrawerHeader,
  DrawerItems,
} from 'flowbite-react'
import {
  Plus,
  Clock,
  CheckCircle2,
  Sun,
  AlertCircle,
  ExternalLink,
  ChevronDown,
  X,
  LayoutDashboard,
  Sparkles,
} from 'lucide-react'
import { useAuth } from '@features/auth'
import { useToast } from '@shared/context/ToastContext'
import { getAudits, archiveAudit, updateAudit, deleteAudit } from '@lib/db/audits'
import {
  PipelineMini,
  StatCard,
  PageHeader,
  DueDateUrgent,
  EmptyState,
  DataTable,
  AiInsightsCard,
  AssigneeStack,
} from '@shared/ui'
import { SearchInput, FilterDropdown } from '@shared/ui/filters'
import { customTheme } from '@config/theme.js'
import { twMerge } from 'tailwind-merge'

/* ─── helpers ──────────────────────────────────────────────────── */

function getPipelineStage(audit) {
  if (audit.status === 'complete') return 3
  const s = audit.pipeline_stage ?? 0
  return Math.min(s, 3)
}

function scoreClass(score) {
  if (score === null || score === undefined) return 'na'
  if (score >= 80) return 'good'
  if (score >= 60) return 'mid'
  return 'bad'
}

function fmtScore(audit) {
  const c = audit.critical_count ?? 0
  const s = audit.serious_count ?? 0
  const m = audit.moderate_count ?? 0
  const n = audit.minor_count ?? 0
  return Math.max(0, Math.min(100, Math.round(100 - (c * 12 + s * 6 + m * 2 + n * 1))))
}

const TABS = [
  { key: 'all',      label: 'All' },
  { key: 'active',   label: 'Active' },
  { key: 'triage',   label: 'Needs triage' },
  { key: 'complete', label: 'Complete' },
  { key: 'archived', label: 'Archived' },
]

const dropdownFloatingTheme = {
  arrowIcon: 'hidden',
  floating: {
    base: twMerge(theme.dropdown.floating.base, 'w-40'),
  },
}

/* ─── main component ─────────────────────────────────────────── */

export default function AuditsPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { user } = useAuth()
  const { toast } = useToast()

  const [audits, setAudits]           = useState([])
  const [loading, setLoading]         = useState(true)
  const [activeTab, setActiveTab]     = useState('all')
  const [search, setSearch]           = useState(() => searchParams.get('q') ?? '')
  const [statusFilter, setStatusFilter] = useState('All')
  const [wcagVer, setWcagVer]         = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [selectedIds, setSelectedIds] = useState(new Set())
  const [editTarget, setEditTarget]   = useState(null)
  const [editForm, setEditForm]       = useState({})
  const [editSaving, setEditSaving]   = useState(false)
  const [activeStatCard, setActiveStatCard] = useState(null)
  const [aiVisible, setAiVisible]     = useState(true)
  const [drawerOpen, setDrawerOpen]   = useState(false)

  const PER_PAGE = 10

  /* ── load ── */
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
    const active        = audits.filter(a => a.status === 'active').length
    const complete      = audits.filter(a => a.status === 'complete').length
    const confirmedFails = audits.reduce((n, a) => n + (a.confirmed_count ?? 0), 0)
    const pendingTriage  = audits.reduce((n, a) => n + (a.untriaged_count ?? 0), 0)
    const triageAudits   = audits.filter(a => (a.untriaged_count ?? 0) > 0).length
    const needsReview    = audits.reduce((n, a) => n + (a.needs_review_count ?? 0), 0)
    return { active, complete, confirmedFails, pendingTriage, triageAudits, needsReview }
  }, [audits])

  /* ── tab counts ── */
  const tabCounts = useMemo(() => ({
    all:      audits.length,
    active:   audits.filter(a => a.status === 'active').length,
    triage:   audits.filter(a => (a.untriaged_count ?? 0) > 0).length,
    complete: audits.filter(a => a.status === 'complete').length,
    archived: audits.filter(a => a.status === 'archived').length,
  }), [audits])

  /* ── filtered list ── */
  const filtered = useMemo(() => {
    return audits.filter(a => {
      if (activeTab === 'active'   && a.status !== 'active')   return false
      if (activeTab === 'complete' && a.status !== 'complete') return false
      if (activeTab === 'archived' && a.status !== 'archived') return false
      if (activeTab === 'triage'   && (a.untriaged_count ?? 0) === 0) return false
      if (statusFilter !== 'All'   && a.status !== statusFilter) return false
      if (wcagVer !== 'All'        && a.wcag_version !== wcagVer) return false
      if (search) {
        const q = search.toLowerCase()
        if (
          !a.name?.toLowerCase().includes(q) &&
          !a.client_name?.toLowerCase().includes(q) &&
          !a.project_name?.toLowerCase().includes(q) &&
          !a.website_url?.toLowerCase().includes(q)
        ) return false
      }
      return true
    })
  }, [audits, activeTab, search, statusFilter, wcagVer])

  const paginated  = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)
  const totalPages = Math.ceil(filtered.length / PER_PAGE)

  /* ── stat card filter toggle ── */
  const handleStatCardClick = useCallback((cardKey, tabKey) => {
    if (activeStatCard === cardKey) {
      setActiveStatCard(null)
      setActiveTab('all')
    } else {
      setActiveStatCard(cardKey)
      setActiveTab(tabKey)
    }
    setCurrentPage(1)
  }, [activeStatCard])

  /* ── archive ── */
  const handleArchive = useCallback(async (auditId) => {
    const { error } = await archiveAudit(auditId)
    if (error) { toast.error('Failed to archive audit. Please try again.'); return }
    setAudits(prev => prev.map(a => a.id === auditId ? { ...a, status: 'archived' } : a))
    toast.success('Audit archived.')
  }, [toast])

  /* ── due date ── */
  const handleDateChange = useCallback(async (auditId, newDate) => {
    await updateAudit(auditId, { target_end_date: newDate || null })
    setAudits(prev =>
      prev.map(a => a.id === auditId ? { ...a, target_end_date: newDate || null } : a)
    )
  }, [])

  /* ── edit ── */
  const openEdit = useCallback((audit) => {
    setEditTarget(audit)
    setEditForm({
      name:              audit.name              ?? '',
      client_name:       audit.client_name       ?? '',
      project_name:      audit.project_name      ?? '',
      wcag_version:      audit.wcag_version      ?? '2.2',
      conformance_level: audit.conformance_level ?? 'AA',
      target_end_date:   audit.target_end_date?.slice(0, 10) ?? '',
    })
  }, [])

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
      setAudits(prev => prev.map(a => a.id === editTarget.id ? { ...a, ...payload } : a))
      setEditTarget(null)
    }
    setEditSaving(false)
  }

  /* ── delete ── */
  const handleDelete = async () => {
    if (!deleteTarget) return
    const { error } = await deleteAudit(deleteTarget.id)
    if (error) {
      toast.error('Failed to delete audit. Please try again.')
    } else {
      setAudits(prev => prev.filter(a => a.id !== deleteTarget.id))
      toast.success('Audit deleted.')
    }
    setDeleteTarget(null)
  }

  /* ── assignee helpers (placeholder) ── */
  const getAssignees = (audit) => {
    if (audit.assignees) return audit.assignees
    return []
  }

  /* ── table columns ── */
  const columns = useMemo(() => [
    {
      key: 'name',
      header: 'Audit / Client',
      width: 'min-w-56',
      cellClassName: 'whitespace-nowrap',
      render: (audit) => (
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/30">
            <span className="text-xs font-bold text-primary-700 dark:text-primary-300">
              {(audit.name?.[0] ?? 'A').toUpperCase()}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">{audit.name}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 truncate max-w-[160px]">
              {audit.website_url
                ? audit.website_url.replace(/^https?:\/\//, '')
                : (audit.client_name ?? audit.project_name ?? '—')}
            </p>
          </div>
        </div>
      ),
    },
    {
      key: 'standard',
      header: 'Standard',
      width: 'min-w-32',
      render: (audit) => {
        const level = audit.conformance_level
        const cls =
          level === 'AAA' ? 'bg-purple-50 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
          level === 'AA'  ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' :
                            'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
        return (
          <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ${cls}`}>
            WCAG {audit.wcag_version} {level}
          </span>
        )
      },
    },
    {
      key: 'pipeline',
      header: 'Pipeline',
      width: 'min-w-36',
      render: (audit) => {
        const stage = getPipelineStage(audit)
        const stages = ['done', 'done', 'current', 'empty']
        // Build stages array based on pipeline stage
        const arr = []
        for (let i = 0; i < 4; i++) {
          if (i < stage) arr.push('done')
          else if (i === stage) arr.push('current')
          else arr.push('empty')
        }
        return <PipelineMini stages={arr} />
      },
    },
    {
      key: 'score',
      header: 'Score',
      width: 'min-w-28',
      render: (audit) => {
        const isScanned = !!(audit.last_scanned_at || audit.scanned_at)
        if (!isScanned) return <span className="text-xs text-gray-400">—</span>
        const score = fmtScore(audit)
        const sc = scoreClass(score)
        const textCls = sc === 'good' ? 'text-success-700 dark:text-success-400'
          : sc === 'mid' ? 'text-warning-700 dark:text-warning-400'
          : 'text-danger-700 dark:text-danger-400'
        const barCls = sc === 'good' ? 'bg-success-500'
          : sc === 'mid' ? 'bg-warning-400'
          : 'bg-danger-500'
        return (
          <div className="flex items-center gap-2">
            <span className={`text-sm font-bold tabular-nums ${textCls}`}>{score}%</span>
            <div className="h-1 w-9 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
              <div className={`h-full rounded-full ${barCls}`} style={{ width: `${score}%` }} />
            </div>
          </div>
        )
      },
    },
    {
      key: 'issues',
      header: 'Issues',
      width: 'min-w-48',
      render: (audit) => {
        const items = []
        if (audit.critical_count) items.push({ type: 'critical', count: audit.critical_count })
        if (audit.serious_count)  items.push({ type: 'serious',  count: audit.serious_count })
        if (audit.moderate_count) items.push({ type: 'moderate', count: audit.moderate_count })
        if (!items.length) {
          return (
            <span className="inline-flex items-center gap-1 text-xs text-success-600 dark:text-success-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              None
            </span>
          )
        }
        const tagCls = {
          critical: 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300',
          serious:  'bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300',
          moderate: 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300',
        }
        const dotCls = {
          critical: 'bg-red-500',
          serious:  'bg-orange-500',
          moderate: 'bg-amber-500',
        }
        return (
          <div className="flex flex-wrap gap-1">
            {items.map(iss => (
              <span key={iss.type} className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] font-semibold ${tagCls[iss.type]}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${dotCls[iss.type]}`} />
                {iss.count} {iss.type}
              </span>
            ))}
          </div>
        )
      },
    },
    {
      key: 'assignee',
      header: 'Assignee',
      width: 'min-w-24',
      render: (audit) => (
        <AssigneeStack assignees={getAssignees(audit)} />
      ),
    },
    {
      key: 'dueDate',
      header: 'Due date',
      width: 'min-w-28',
      render: (audit) => (
        <DueDateUrgent
          date={audit.target_end_date}
          onSet={() => openEdit(audit)}
        />
      ),
    },
    {
      key: 'actions',
      header: '',
      width: 'w-20',
      cellClassName: 'text-right',
      render: (audit) => (
        <div className="flex items-center justify-end gap-0.5">
          <button
            type="button"
            onClick={e => { e.stopPropagation(); navigate(`/audits/${audit.id}`) }}
            className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-primary-900/20 dark:hover:text-primary-400"
            aria-label="Open audit"
          >
            <ExternalLink className="h-4 w-4" />
          </button>
          <Dropdown
            inline
            label={
              <>
                <span className="sr-only">More actions</span>
                <svg className="h-5 w-5" aria-hidden fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </>
            }
            theme={dropdownFloatingTheme}
          >
            <DropdownItem onClick={() => openEdit(audit)}>Edit</DropdownItem>
            <DropdownDivider />
            <DropdownItem onClick={() => handleArchive(audit.id)}>Archive</DropdownItem>
            <DropdownDivider />
            <DropdownItem onClick={() => setDeleteTarget(audit)} className="text-red-600 dark:text-red-400">
              Delete
            </DropdownItem>
          </Dropdown>
        </div>
      ),
    },
  ], [navigate, openEdit, handleArchive])

  /* ── selection ── */
  const handleSelectionChange = useCallback((newSelectedIds) => {
    setSelectedIds(newSelectedIds)
  }, [])

  /* ── AI insights ── */
  const aiInsights = useMemo(() => {
    const over = audits.filter(a => a.status === 'active' && a.target_end_date && new Date(a.target_end_date) < new Date())
    const critical = audits.filter(a => (a.critical_count ?? 0) > 0)
    const pending = audits.filter(a => (a.untriaged_count ?? 0) > 0)
    const items = []
    if (over.length || critical.length) {
      items.push({
        icon: 'alert',
        label: `${over.length ? over.length + ' overdue' : ''}${over.length && critical.length ? ' · ' : ''}${critical.length ? critical.length + ' critical' : ''} unresolved`,
        action: () => handleStatCardClick('active', 'active'),
      })
    }
    const completeAudit = audits.find(a => a.status === 'complete')
    if (completeAudit) {
      items.push({
        icon: 'check',
        label: `${completeAudit.name} is complete — report ready`,
        action: () => handleStatCardClick('complete', 'complete'),
      })
    }
    if (stats.pendingTriage > 0) {
      items.push({
        icon: 'clock',
        label: `${stats.pendingTriage} issues pending triage`,
        action: () => handleStatCardClick('triage', 'triage'),
      })
    }
    return items.slice(0, 3)
  }, [audits, stats.pendingTriage, handleStatCardClick])

  /* ─────────────────────────────────────────────────────────────── */

  return (
    <div className="grid grid-cols-1 gap-4 px-4 pt-6">

      {/* Page header */}
      <PageHeader title="Audits" subtitle="Manage and track accessibility audits across all clients" />

      {/* AI Insights */}
      {aiVisible && aiInsights.length > 0 && (
        <AiInsightsCard
          insights={aiInsights}
          onDismiss={() => setAiVisible(false)}
        />
      )}

      {/* Stat cards */}
      <div className="col-span-full grid grid-cols-2 gap-4 xl:grid-cols-4">
        <StatCard
          icon={Clock}
          label="Active audits"
          value={stats.active}
          trend={stats.complete > 0 ? `${stats.complete} completed` : 'none completed yet'}
          trendDirection={stats.complete > 0 ? 'up' : 'neutral'}
          trendColor={stats.active > 0 ? 'text-warning-700 dark:text-warning-400' : undefined}
          color="primary"
          onClick={() => handleStatCardClick('active', 'active')}
          isActive={activeStatCard === 'active'}
        />
        <StatCard
          icon={CheckCircle2}
          label="Confirmed failures"
          value={stats.confirmedFails}
          trend={stats.confirmedFails === 0 ? 'All clear — no failures' : 'verified WCAG violations'}
          trendDirection={stats.confirmedFails === 0 ? 'up' : 'down'}
          color={stats.confirmedFails === 0 ? 'success' : 'danger'}
          highlightValue={stats.confirmedFails === 0}
        />
        <StatCard
          icon={Sun}
          label="Pending triage"
          value={stats.pendingTriage}
          trend={stats.pendingTriage > 0 ? `across ${stats.triageAudits} audit${stats.triageAudits !== 1 ? 's' : ''}` : 'all items reviewed'}
          trendDirection={stats.pendingTriage > 0 ? 'down' : 'up'}
          color="warning"
          onClick={() => handleStatCardClick('triage', 'triage')}
          isActive={activeStatCard === 'triage'}
        />
        <StatCard
          icon={AlertCircle}
          label="Needs review"
          value={stats.needsReview}
          trend={stats.needsReview > 0 ? 'require human check' : 'nothing to review'}
          trendDirection={stats.needsReview > 0 ? 'down' : 'up'}
          color={stats.needsReview > 0 ? 'danger' : 'success'}
        />
      </div>

      {/* Main card */}
      <Card theme={customTheme.card} className="col-span-full">

        {/* Toolbar */}
        <div className="mx-4 flex flex-col-reverse items-center justify-between gap-3 py-3 md:flex-row">
          <div className="flex w-full flex-col gap-3 md:flex-row md:items-center lg:w-2/3">
            <SearchInput
              value={search}
              onChange={e => { setSearch(e.target.value); setCurrentPage(1) }}
              placeholder="Search by client or URL…"
              id="audit-search"
            />

            <div className="flex items-center gap-3">
              <FilterDropdown
                label={statusFilter !== 'All' ? `Status: ${statusFilter}` : 'Filter'}
                sections={[
                  {
                    title: 'By status',
                    options: ['active', 'draft', 'complete', 'archived'].map(s => ({
                      value: s,
                      label: s.charAt(0).toUpperCase() + s.slice(1),
                      checked: statusFilter === s,
                      onToggle: () => setStatusFilter(statusFilter === s ? 'All' : s),
                    })),
                  },
                  {
                    title: 'WCAG Version',
                    options: ['2.1', '2.2'].map(v => ({
                      value: v,
                      label: `WCAG ${v}`,
                      checked: wcagVer === v,
                      onToggle: () => setWcagVer(wcagVer === v ? 'All' : v),
                    })),
                  },
                ]}
              />

              <Dropdown
                theme={{
                  ...customTheme.dropdown,
                  floating: {
                    ...customTheme.dropdown.floating,
                    base: twMerge(customTheme.dropdown.floating.base, 'w-48'),
                  },
                }}
                renderTrigger={() => (
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                    </svg>
                    Sort by
                    <ChevronDown className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
                  </button>
                )}
              >
                <div className="p-3">
                  <DropdownItem>Name A–Z</DropdownItem>
                  <DropdownItem>Name Z–A</DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>Reset</DropdownItem>
                </div>
              </Dropdown>
            </div>
          </div>

          <div className="flex w-full shrink-0 justify-end md:w-auto">
            <Button color="primary" onClick={() => setDrawerOpen(true)}>
              <Plus className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
              New Audit
            </Button>
          </div>
        </div>

        {/* Filter pill tabs */}
        <div className="flex flex-wrap items-center gap-1.5 border-b border-gray-200 px-4 pb-3 dark:border-gray-700">
          {TABS.map(tab => (
            <button
              key={tab.key}
              type="button"
              onClick={() => { setActiveTab(tab.key); setCurrentPage(1) }}
              className={twMerge(
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium transition-colors',
                activeTab === tab.key
                  ? 'border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-700 dark:bg-primary-900/20 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              )}
            >
              {tab.label}
              <span className={twMerge(
                'min-w-[18px] rounded-full px-1.5 py-0.5 text-center text-xs font-semibold',
                activeTab === tab.key
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-300'
                  : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
              )}>
                {tabCounts[tab.key]}
              </span>
            </button>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Spinner size="md" color="purple" />
          </div>
        ) : filtered.length === 0 ? (
          <EmptyState
            title={search || activeTab !== 'all' ? 'No audits match your filters' : 'No audits yet'}
            description={
              search || activeTab !== 'all'
                ? 'Try adjusting your search or filter criteria.'
                : 'Create your first audit to get started.'
            }
            actionLabel="New Audit"
            onAction={() => setDrawerOpen(true)}
            showAction={!search && activeTab === 'all'}
          />
        ) : (
          <>
            <div className="relative overflow-x-auto rounded-lg bg-white dark:bg-gray-800">
              <DataTable
                columns={columns}
                data={paginated}
                selectable
                onSelectionChange={handleSelectionChange}
                keyExtractor={row => row.id}
                hoverClassName="hover:bg-primary-50 dark:hover:bg-primary-900/10"
              />
            </div>

            <div className="flex items-center justify-between p-4">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {filtered.length} total audit{filtered.length !== 1 ? 's' : ''}
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
      </Card>

      {/* ── Delete confirmation modal ── */}
      <Modal show={!!deleteTarget} onClose={() => setDeleteTarget(null)} size="md">
        <ModalHeader className="border-b border-gray-200 text-base font-semibold text-gray-900 dark:text-white">
          Delete audit
        </ModalHeader>
        <ModalBody>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Are you sure you want to delete{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              {deleteTarget?.name}
            </span>
            ? This action cannot be undone.
          </p>
        </ModalBody>
        <ModalFooter className="flex justify-end gap-2 border-t border-gray-200">
          <Button color="gray" size="sm" onClick={() => setDeleteTarget(null)}>Cancel</Button>
          <Button color="failure" size="sm" onClick={handleDelete}>Delete</Button>
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
              <Datepicker
                id="edit-due"
                value={editForm.target_end_date ? new Date(editForm.target_end_date) : null}
                onChange={date => {
                  const dateStr =
                    date instanceof Date && !isNaN(date.getTime())
                      ? date.toISOString().slice(0, 10)
                      : ''
                  setEditForm(f => ({ ...f, target_end_date: dateStr }))
                }}
                placeholder="Select date"
                className="w-full"
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

      {/* ── New Audit Drawer ── */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        position="right"
        className="!w-full !max-w-md !p-0"
      >
        <DrawerItems className="flex h-full flex-col overflow-hidden">
          <DrawerHeader className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-700">
            <h2 className="text-base font-bold text-gray-900 dark:text-white">New Audit</h2>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
              aria-label="Close drawer"
            >
              <X className="h-4 w-4" />
            </button>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto px-5 py-5">
            <div className="space-y-5">
              {/* Client name */}
              <div>
                <Label htmlFor="na-client" className="mb-1.5 block text-sm font-semibold text-gray-900 dark:text-white">
                  Client name <span className="text-red-500">*</span>
                </Label>
                <TextInput
                  id="na-client"
                  placeholder="e.g. Wikipedia, BBC, Globo"
                />
              </div>

              {/* Website URL */}
              <div>
                <Label htmlFor="na-url" className="mb-1.5 block text-sm font-semibold text-gray-900 dark:text-white">
                  Website URL <span className="text-red-500">*</span>
                </Label>
                <TextInput
                  id="na-url"
                  type="url"
                  placeholder="https://example.com"
                />
                <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                  The root URL — you’ll add specific pages in the Scan tab
                </p>
              </div>

              {/* WCAG Standard */}
              <div>
                <Label className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white">
                  WCAG Standard <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { title: 'WCAG 2.2 AA', desc: 'Most common — legal baseline' },
                    { title: 'WCAG 2.2 AAA', desc: 'Highest level — public sector' },
                    { title: 'WCAG 2.1 AA', desc: 'Legacy — still widely required' },
                    { title: 'Section 508', desc: 'US federal agencies' },
                  ].map((opt, i) => (
                    <button
                      key={i}
                      type="button"
                      className="rounded-lg border-2 border-gray-200 p-3 text-left transition-colors hover:border-primary-400 focus:outline-none dark:border-gray-600 dark:hover:border-primary-500"
                    >
                      <div className="text-[13px] font-bold text-gray-900 dark:text-white">{opt.title}</div>
                      <div className="mt-0.5 text-[11px] text-gray-500 dark:text-gray-400">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 dark:bg-gray-700" />

              {/* Assignee */}
              <div>
                <Label htmlFor="na-assignee" className="mb-1.5 block text-sm font-semibold text-gray-900 dark:text-white">
                  Assignee
                </Label>
                <Select id="na-assignee">
                  <option value="">Unassigned</option>
                  <option>Sofia Lima</option>
                  <option>Marcus Reyes</option>
                  <option>Alex Chen</option>
                </Select>
              </div>

              {/* Due date */}
              <div>
                <Label htmlFor="na-due" className="mb-1.5 block text-sm font-semibold text-gray-900 dark:text-white">
                  Due date
                </Label>
                <TextInput id="na-due" type="date" />
              </div>

              {/* Notes */}
              <div>
                <Label htmlFor="na-notes" className="mb-1.5 block text-sm font-semibold text-gray-900 dark:text-white">
                  Notes <span className="font-normal text-gray-400 dark:text-gray-500">(optional)</span>
                </Label>
                <textarea
                  id="na-notes"
                  rows={3}
                  placeholder="Any context for this audit…"
                  className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-primary-400"
                  style={{ resize: 'vertical' }}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-5 py-4 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <Button
                color="primary"
                className="flex-1 justify-center"
                onClick={() => { setDrawerOpen(false); navigate('/audits/new') }}
              >
                <Plus className="mr-1.5 h-4 w-4" />
                Create Audit
              </Button>
              <Button color="gray" onClick={() => setDrawerOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </DrawerItems>
      </Drawer>

    </div>
  )
}
