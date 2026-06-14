import { useState, useEffect, useCallback, useMemo, Fragment } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import {
  Breadcrumb, BreadcrumbItem, Button, Dropdown, DropdownDivider, DropdownItem,
  Pagination, Select, Spinner, Tabs, Textarea,
  TextInput, theme,
} from 'flowbite-react'
import {
  AlertTriangle, BarChart3, CheckCircle2,
  ArrowLeft, ChevronRight, ChevronDown, Home,
  Clock, FileSearch,
  RefreshCw, Search, ClipboardList,
  Globe, ExternalLink, Calendar, Users,
} from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { useAuth } from '@features/auth'
import { getAudit } from '@lib/db/audits'
import { getManualChecks, saveManualCheckVerdict } from '@lib/db/manualChecks'
import { getTriageItems } from '@lib/db/triage'
import { getScanJobs } from '@lib/db/scans'
import ScanPanel from '@features/scan/components/ScanPanel'
import { ErrorBoundary, DataTable, Badge } from '@shared/ui'
import { customTheme } from '@config/theme.js'
import { PRINCIPLES, getPrinciple, getScLevel } from '@lib/wcagScData'
import IssueDetailDrawer from '@features/triage/components/IssueDetailDrawer'
import TriageTab from '@features/triage/components/TriageTab'
import OverviewTab from '@features/audit/components/AuditDetail/OverviewTab'
import { generateAndOpenReport } from '@features/report'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtDate(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('en-SE', {
    day: '2-digit', month: 'short', year: 'numeric',
  })
}

function fmtScore(audit) {
  const c = audit.critical_count ?? 0
  const s = audit.serious_count ?? 0
  const m = audit.moderate_count ?? 0
  const n = audit.minor_count ?? 0
  return Math.max(0, Math.min(100, Math.round(100 - (c * 12 + s * 6 + m * 2 + n * 1))))
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

// ─── Badge components ───────────────────────────────────────────────────────────

function ImpactBadge({ impact }) {
  const colorMap = { critical: 'danger', serious: 'warning', moderate: 'primary', minor: 'alternative' }
  return (
    <Badge theme={customTheme.badge} color={colorMap[impact?.toLowerCase()] ?? 'gray'} size="xs" className="capitalize">
      {impact || '—'}
    </Badge>
  )
}

function CheckStatusBadge({ status }) {
  const colorMap = {
    pass:      'success',
    fail:      'danger',
    partial:   'warning',
    untriaged: 'gray',
  }
  const labels = { pass: 'Pass', fail: 'Fail', partial: 'Partial', untriaged: 'Untriaged' }
  return (
    <Badge theme={customTheme.badge} color={colorMap[status] ?? 'gray'} size="xs">
      {labels[status] ?? (status || 'Untriaged')}
    </Badge>
  )
}

// ─── Empty state ───────────────────────────────────────────────────────────────

function EmptyState({ icon: Icon, title, body }) {
  return (
    <div className="flex flex-col items-center py-16 text-center">
      <div className="mb-4 rounded-lg bg-purple-100 p-3 dark:bg-purple-900/30">
        <Icon className="h-7 w-7 text-purple-700 dark:text-purple-300" aria-hidden="true" />
      </div>
      <p className="text-sm font-semibold text-gray-900 dark:text-white">{title}</p>
      <p className="mt-1 max-w-xs text-xs text-gray-500 dark:text-gray-400">{body}</p>
    </div>
  )
}

// ─── Manual Checks — verdict badge ───────────────────────────────────────────

const VERDICT_STYLES = {
  pass:      { label: 'Pass',        cls: 'bg-success-50 text-success-700 border border-success-200 dark:bg-success-900/20 dark:text-success-300' },
  fail:      { label: 'Fail',        cls: 'bg-danger-50 text-danger-700 border border-danger-200 dark:bg-danger-900/20 dark:text-danger-300' },
  na:        { label: 'N/A',         cls: 'bg-gray-100 text-gray-600  dark:bg-gray-700 dark:text-gray-300' },
  deferred:  { label: 'Deferred',    cls: 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-900/20 dark:text-amber-300' },
  untriaged: { label: 'Pending',     cls: 'bg-gray-50 text-gray-500  dark:bg-gray-800 dark:text-gray-400' },
}

const AUTO_STATUS_STYLES = {
  fail:           { label: 'Axe: Fail',           cls: 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-300' },
  'needs-check':  { label: 'Axe: Review',         cls: 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-900/20 dark:text-amber-300' },
  na:             { label: 'Axe: N/A',            cls: 'bg-gray-100 text-gray-500  dark:bg-gray-700 dark:text-gray-400' },
  pass:           { label: 'Axe: Pass',           cls: 'bg-success-50 text-success-600 border border-success-200 dark:bg-success-900/20 dark:text-success-400' },
  'always-manual':{ label: 'Manual only',         cls: 'bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-900/20 dark:text-purple-300' },
}

const SOURCE_LABELS = {
  'axe-violations': 'Violations',
  'axe-incomplete': 'Incomplete',
  'axe-na':         'N/A from axe',
  'always-manual':  'Always manual',
  'sc':             'Scope',
  'mixed':          'Mixed',
}

// ─── Manual Checks Tab ────────────────────────────────────────────────────────

function ManualChecksTab({ auditId }) {
  const [checks, setChecks] = useState([])
  const [triageItems, setTriageItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [verdictFilter, setVerdictFilter] = useState('all')
  const [sourceFilter, setSourceFilter] = useState('all')
  const [savingId, setSavingId] = useState(null)
  // Local edits: { [checkId]: { verdict, notes } }
  const [localEdits, setLocalEdits] = useState({})

  useEffect(() => {
    let cancelled = false
    Promise.all([
      getManualChecks(auditId),
      getTriageItems(auditId),
    ]).then(([checksResult, triageResult]) => {
      if (cancelled) return
      if (checksResult.error) setError(checksResult.error.message)
      else {
        setChecks(checksResult.data ?? [])
        setTriageItems(triageResult.data ?? [])
      }
      setLoading(false)
    })
    return () => { cancelled = true }
  }, [auditId])

  // ── Filtering ───────────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    return checks.filter(c => {
      const q = search.toLowerCase()
      if (q && !c.sc_id?.toLowerCase().includes(q) && !c.sc_name?.toLowerCase().includes(q)) return false
      if (verdictFilter !== 'all') {
        const v = c.verdict ?? 'untriaged'
        if (v !== verdictFilter) return false
      }
      if (sourceFilter !== 'all' && c.source !== sourceFilter) return false
      return true
    })
  }, [checks, search, verdictFilter, sourceFilter])

  // ── Summary counts ──────────────────────────────────────────────────────────
  const counts = useMemo(() => {
    return checks.reduce((acc, c) => {
      const v = c.verdict ?? 'untriaged'
      acc[v] = (acc[v] ?? 0) + 1
      return acc
    }, {})
  }, [checks])

  // ── Evidence for a given SC from triage_items ───────────────────────────────
  const evidenceForSC = useCallback((scId) =>
    triageItems.filter(ti => (ti.sc_ids || []).includes(scId)),
  [triageItems])

  // ── Save verdict ────────────────────────────────────────────────────────────
  const handleSave = async (check) => {
    const edits = localEdits[check.id] ?? {}
    const verdict = edits.verdict ?? check.verdict ?? null
    const notes = edits.notes ?? check.auditor_notes ?? null
    setSavingId(check.id)
    const { error: saveErr } = await saveManualCheckVerdict(check.id, { verdict, auditorNotes: notes })
    setSavingId(null)
    if (!saveErr) {
      setChecks(prev => prev.map(c =>
        c.id === check.id ? { ...c, verdict, auditor_notes: notes } : c
      ))
      setLocalEdits(prev => { const n = { ...prev }; delete n[check.id]; return n })
    }
  }

  const updateLocal = (checkId, field, value) =>
    setLocalEdits(prev => ({ ...prev, [checkId]: { ...(prev[checkId] ?? {}), [field]: value } }))

  // ── Columns for DataTable ───────────────────────────────────────────────────
  const columns = useMemo(() => [
    {
      key: 'sc',
      header: 'Success Criterion',
      width: 'min-w-48',
      render: (check) => (
        <div>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">{check.sc_id}</span>
          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{check.sc_name || '—'}</p>
        </div>
      ),
    },
    {
      key: 'level',
      header: 'Level',
      width: 'w-20',
      render: (check) => (
        <Badge color="blue" size="sm">
          {getScLevel(check.sc_id)}
        </Badge>
      ),
    },
    {
      key: 'axeResult',
      header: 'Axe Result',
      width: 'min-w-32',
      render: (check) => {
        const autoStyle = AUTO_STATUS_STYLES[check.auto_status] ?? AUTO_STATUS_STYLES['always-manual']
        return (
          <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${autoStyle.cls}`}>
            {autoStyle.label}
          </span>
        )
      },
    },
    {
      key: 'source',
      header: 'Source',
      width: 'min-w-32',
      render: (check) => (
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {SOURCE_LABELS[check.source] ?? check.source ?? '—'}
        </span>
      ),
    },
    {
      key: 'verdict',
      header: 'Verdict',
      width: 'w-28',
      render: (check) => {
        const localEdit = localEdits[check.id] ?? {}
        const currentVerdict = localEdit.verdict !== undefined ? localEdit.verdict : (check.verdict ?? 'untriaged')
        return <ManualCheckBadge status={currentVerdict} />
      },
    },
  ], [localEdits])

  // ── Render expanded content ─────────────────────────────────────────────────
  const renderExpand = useCallback((check) => {
    const evidence = evidenceForSC(check.sc_id)
    const localEdit = localEdits[check.id] ?? {}
    const currentVerdict = localEdit.verdict !== undefined ? localEdit.verdict : (check.verdict ?? null)
    const currentNotes = localEdit.notes !== undefined ? localEdit.notes : (check.auditor_notes ?? '')
    const isDirty = localEdit.verdict !== undefined || localEdit.notes !== undefined

    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Left: Evidence from triage */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Triage Evidence ({evidence.length})
          </p>
          {evidence.length === 0 ? (
            <p className="text-xs italic text-gray-500 dark:text-gray-400">No triage items for this criterion.</p>
          ) : (
            <div className="space-y-2">
              {evidence.map(ti => {
                const decisionColor = {
                  confirmed: 'text-red-700 dark:text-red-400',
                  'not-failure': 'text-green-700 dark:text-green-400',
                  'manual-check': 'text-amber-700 dark:text-amber-400',
                  deferred: 'text-gray-500 dark:text-gray-400',
                }[ti.decision] ?? 'text-gray-500 dark:text-gray-400'

                return (
                  <div key={ti.id} className="rounded bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-800">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-xs font-medium text-gray-900 dark:text-white">
                        {ti.rule_id}
                      </span>
                      <span className={`shrink-0 text-xs ${decisionColor}`}>
                        {ti.decision
                          ? { confirmed: 'Confirmed failure', 'not-failure': 'Not a failure', 'manual-check': 'Needs manual check', deferred: 'Deferred' }[ti.decision]
                          : 'Untriaged'}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                      {ti.node_count} element{ti.node_count !== 1 ? 's' : ''} · {ti.page_name || 'Unknown page'}
                    </p>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Right: Auditor verdict form */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Auditor Verdict
          </p>

          {/* Verdict buttons */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Select verdict">
            {[
              { value: 'pass', label: 'Pass', cls: 'border-green-300 text-green-700 hover:bg-green-50 dark:text-green-400' },
              { value: 'fail', label: 'Fail', cls: 'border-red-300 text-red-700 hover:bg-red-50 dark:text-red-400' },
              { value: 'na', label: 'N/A', cls: 'border-gray-300 text-gray-600 hover:bg-gray-50 dark:text-gray-400' },
              { value: 'deferred', label: 'Defer', cls: 'border-amber-300 text-amber-700 hover:bg-amber-50 dark:text-amber-400' },
            ].map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => updateLocal(check.id, 'verdict', opt.value === currentVerdict ? null : opt.value)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors
                  ${opt.cls}
                  ${currentVerdict === opt.value
                    ? 'ring-2 ring-purple-400 ring-offset-1 border-purple-400 bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300'
                    : ''}`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Notes */}
          <div>
            <label htmlFor={`notes-${check.id}`} className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300">
              Notes
            </label>
            <Textarea
              id={`notes-${check.id}`}
              rows={3}
              placeholder="Add testing notes, observations, evidence…"
              value={currentNotes}
              onChange={e => updateLocal(check.id, 'notes', e.target.value)}
              className="text-xs"
            />
          </div>

          {/* Save button */}
          <div className="flex justify-end">
            <Button
              color="primary"
              size="xs"
              disabled={!isDirty || savingId === check.id}
              onClick={() => handleSave(check)}
            >
              {savingId === check.id ? 'Saving…' : 'Save'}
            </Button>
          </div>
        </div>
      </div>
    )
  }, [evidenceForSC, localEdits, savingId])

  // ── Loading / error states ──────────────────────────────────────────────────
  if (loading) return (
    <div className="flex items-center justify-center py-16">
      <Spinner size="md" color="purple" />
    </div>
  )

  if (error) return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="px-4 py-3 text-sm text-red-600 dark:text-red-400">{error}</div>
    </div>
  )

  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">

      {/* ── Header + summary counts ─────────────────────────────────────────── */}
      <div className="border-b border-gray-200 px-5 py-4 dark:border-gray-700">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-900/30">
              <CheckCircle2 className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Manual Checks</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{checks.length} criteria to verify</p>
            </div>
          </div>
          {/* Summary pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'fail', label: 'Fail', color: 'red' },
              { key: 'pass', label: 'Pass', color: 'green' },
              { key: 'deferred', label: 'Deferred', color: 'amber' },
              { key: 'untriaged', label: 'Pending', color: 'gray' },
            ].map(({ key, label, color }) => (counts[key] ?? 0) > 0 && (
              <button
                key={key}
                type="button"
                onClick={() => setVerdictFilter(verdictFilter === key ? 'all' : key)}
                className={`rounded-full border px-2.5 py-0.5 text-xs font-medium transition-all
                  ${color === 'red' ? 'border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300' : ''}
                  ${color === 'green' ? 'border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-300' : ''}
                  ${color === 'amber' ? 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-300' : ''}
                  ${color === 'gray' ? 'border-gray-200 bg-gray-50 text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400' : ''}
                  ${verdictFilter === key ? 'ring-2 ring-purple-300 ring-offset-1' : ''}`}
              >
                {counts[key]} {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Filter bar ─────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-3 border-b border-gray-200 px-5 py-3 dark:border-gray-700 md:grid-cols-3">
        <TextInput
          id="manual-search"
          aria-label="Search success criteria"
          placeholder="Search SC number or name…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          icon={Search}
          sizing="sm"
        />
        <Select
          id="manual-verdict"
          aria-label="Filter by verdict"
          value={verdictFilter}
          onChange={e => setVerdictFilter(e.target.value)}
          sizing="sm"
        >
          <option value="all">All verdicts</option>
          <option value="untriaged">Pending</option>
          <option value="pass">Pass</option>
          <option value="fail">Fail</option>
          <option value="na">N/A</option>
          <option value="deferred">Deferred</option>
        </Select>
        <Select
          id="manual-source"
          aria-label="Filter by source"
          value={sourceFilter}
          onChange={e => setSourceFilter(e.target.value)}
          sizing="sm"
        >
          <option value="all">All sources</option>
          <option value="axe-violations">Axe violations</option>
          <option value="axe-incomplete">Axe incomplete</option>
          <option value="axe-na">Axe N/A</option>
          <option value="always-manual">Always manual</option>
        </Select>
      </div>

      {/* ── SC table using DataTable ───────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="border-t border-gray-200 dark:border-gray-700">
          <EmptyState
            icon={ClipboardList}
            title="No criteria to show"
            body={checks.length === 0
              ? 'Manual checks are seeded automatically when a scan completes.'
              : 'No criteria match the active filters.'}
          />
        </div>
      ) : (
        <div className="relative overflow-x-auto">
          <DataTable
            columns={columns}
            data={filtered}
            expandable
            renderExpand={renderExpand}
            keyExtractor={(row) => row.id}
          />
        </div>
      )}

      {/* Footer count */}
      <div className="flex items-center justify-between border-t border-gray-200 p-4 dark:border-gray-700">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {filtered.length} of {checks.length} criteria
        </span>
      </div>
    </div>
  )
}

// ─── Report Tab ───────────────────────────────────────────────────────────────

function ReportTab({ audit }) {
  // Enable only when all triage items are resolved (untriaged_count = 0).
  // untriaged_count comes from the audit_summary view and is always present
  // on the audit object loaded by getAudit().
  const triageComplete = (audit.untriaged_count ?? 1) === 0

  // FIX (#1): the Generate Report button was a no-op (no onClick). Now it builds
  // a real WCAG conformance report from the audit's triage data and opens it in a
  // print-ready tab. Fully wrapped so a failure shows a message, never crashes.
  const [generating, setGenerating] = useState(false)
  const [reportError, setReportError] = useState(null)

  const handleGenerate = async () => {
    setGenerating(true)
    setReportError(null)
    try {
      await generateAndOpenReport(audit)
    } catch (err) {
      setReportError(err?.message ?? 'Report generation failed.')
    } finally {
      setGenerating(false)
    }
  }

  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-col items-center px-6 py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
          <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Report Generation</h3>
        {triageComplete ? (
          <p className="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">
            All triage items are resolved. You can now generate the WCAG{' '}
            {audit.wcag_version} {audit.conformance_level} conformance report.
          </p>
        ) : (
          <p className="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">
            Once all triage items are resolved, you'll be able to generate a WCAG{' '}
            {audit.wcag_version} {audit.conformance_level} conformance report.{' '}
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {audit.untriaged_count ?? 0} item{(audit.untriaged_count ?? 0) !== 1 ? 's' : ''} remaining.
            </span>
          </p>
        )}
        <Button
          color="primary"
          size="sm"
          className="mt-5"
          onClick={handleGenerate}
          disabled={generating}
          aria-busy={generating}
          title="Generate report"
        >
          <BarChart3 className="mr-1.5 h-4 w-4" aria-hidden="true" />
          {generating ? 'Generating…' : 'Generate Report'}
        </Button>
        {reportError && (
          <p className="mt-3 text-sm text-red-600 dark:text-red-400" role="alert">
            {reportError}
          </p>
        )}
      </div>
    </div>
  )
}

// ─── Scan panel error fallback ────────────────────────────────────────────────

function ScanPanelError({ error, resetErrorBoundary }) {
  return (
    <div className="relative overflow-hidden rounded-lg  bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:rounded-lg">
      <div className="flex flex-col items-center px-6 py-12 text-center">
        <p className="mb-2 text-sm font-semibold text-red-600 dark:text-red-400">Scan Panel Error</p>
        <p className="mb-4 text-xs text-gray-700 dark:text-gray-300">{error?.message || 'An unexpected error occurred.'}</p>
        <Button color="danger" size="sm" onClick={resetErrorBoundary}>Try Again</Button>
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function AuditDetailPage() {
  const { auditId } = useParams()
  const navigate    = useNavigate()
  const location    = useLocation()
  const { user }    = useAuth()

  // Read hash synchronously so Tabs.Item active prop is correct on first render
  const hashMap = {
    '#triage': 'Triage',
    '#scan': 'Scan',
    '#manual-checks': 'Manual Checks',
    '#report': 'Report',
  }
  const initialTab = hashMap[location.hash] || 'overview'

  const [audit, setAudit]           = useState(null)
  const [scanJobs, setScanJobs]     = useState([])
  const [loading, setLoading]       = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError]           = useState(null)
  const [activeTab, setActiveTab]   = useState(initialTab)
  const [triageRefreshKey, setTriageRefreshKey] = useState(0)

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
      <div className="relative overflow-hidden rounded-lg  bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="px-4 py-3 text-sm text-red-600 dark:text-red-400">{error || 'Audit not found.'}</div>
      </div>
      <Button color="light" size="sm" onClick={() => navigate('/audits')}>
        <ArrowLeft className="mr-1.5 h-4 w-4" aria-hidden="true" />
        Back to Audits
      </Button>
    </div>
  )

  return (
    <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4">

      {/* ── Breadcrumb + Title header */}
      <div className="col-span-full mb-4 xl:mb-2">
        <Breadcrumb className="mb-3">
          <BreadcrumbItem href="/">
            <div className="flex items-center gap-x-3">
              <Home className="h-4 w-4" />
              <span className="dark:text-white">Home</span>
            </div>
          </BreadcrumbItem>
          <BreadcrumbItem href="/audits">Audits</BreadcrumbItem>
          <BreadcrumbItem>{audit.name}</BreadcrumbItem>
        </Breadcrumb>

        {/* Title row with badges */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-[22px] dark:text-white">
                {audit.name}
              </h1>
              <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                audit.status === 'active'
                  ? 'bg-success-50 text-success-700 dark:bg-success-900/20 dark:text-success-300'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
              }`}>
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {audit.status === 'active' ? 'Active' : audit.status}
              </span>
              <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-bold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                WCAG {audit.wcag_version} {audit.conformance_level}
              </span>
            </div>
            {audit.website_url && (
              <div className="mt-1 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                <Globe className="h-3.5 w-3.5" />
                <a
                  href={audit.website_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-primary-700 hover:underline dark:text-primary-400"
                >
                  {audit.website_url.replace(/^https?:\/\//, '')}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            )}
          </div>

          {/* Meta chips + actions */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Score chip */}
            <button
              onClick={() => setActiveTab('overview')}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-sm transition-colors hover:border-primary-300 dark:border-gray-600 dark:bg-gray-700"
              title="View conformance score"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" fill="none" stroke="#E9E5F0" strokeWidth="3" />
                <circle
                  cx="12" cy="12" r="9" fill="none"
                  stroke={scoreLabel(fmtScore(audit)).color}
                  strokeWidth="3"
                  strokeDasharray={`${2 * Math.PI * 9 * (fmtScore(audit) / 100)} ${2 * Math.PI * 9}`}
                  strokeLinecap="round"
                  transform="rotate(-90 12 12)"
                />
              </svg>
              <span className="font-bold text-warning-600 dark:text-warning-400">{fmtScore(audit)}%</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">score</span>
            </button>

            {/* Due date chip */}
            {audit.target_end_date && (
              <div className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-700">
                <Calendar className="h-3.5 w-3.5 text-gray-400" />
                <span className={`text-xs font-semibold ${new Date(audit.target_end_date) < new Date() ? 'text-warning-600 dark:text-warning-400' : 'text-gray-600 dark:text-gray-300'}`}>
                  {new Date(audit.target_end_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                </span>
              </div>
            )}

            {/* Assignee chip */}
            <div className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-700">
              <Users className="h-3.5 w-3.5 text-gray-400" />
              <span className="text-xs text-gray-500 dark:text-gray-400">Unassigned</span>
            </div>

            {/* Actions */}
            <Button size="xs" color="light" onClick={() => {}}>
              <ExternalLink className="mr-1 h-3.5 w-3.5" />
              Export
            </Button>
            <Button size="xs" color="light" onClick={() => {}}>
              <ExternalLink className="mr-1 h-3.5 w-3.5" />
              Share
            </Button>

            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-700"
              aria-label="Refresh audit data"
            >
              <RefreshCw className={`h-5 w-5 ${refreshing ? 'animate-spin' : ''}`} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Tabs */}
      <div className="col-span-full">
        <Tabs
          aria-label="Audit tabs"
          variant="underline"
          className="gap-0"
          onActiveTabChange={(tab) => setActiveTab(tab)}
        >
          <Tabs.Item title="Overview" icon={BarChart3} active={activeTab === 'Overview'}>
            <div className="pt-4">
              <OverviewTab audit={audit} scanJobs={scanJobs} />
            </div>
          </Tabs.Item>
          <Tabs.Item title="Scan" icon={FileSearch} active={activeTab === 'Scan'}>
            <div className="pt-4">
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
                  onScanComplete={() => setTriageRefreshKey(k => k + 1)}
                />
              </ErrorBoundary>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Triage" icon={ClipboardList} active={activeTab === 'Triage'}>
            <div className="pt-4">
              <TriageTab auditId={auditId} refreshKey={triageRefreshKey} />
            </div>
          </Tabs.Item>
          <Tabs.Item title="Manual Checks" icon={CheckCircle2} active={activeTab === 'Manual Checks'}>
            <div className="pt-4">
              <ManualChecksTab auditId={auditId} />
            </div>
          </Tabs.Item>
          <Tabs.Item title="Report" icon={BarChart3} active={activeTab === 'Report'}>
            <div className="pt-4">
              <ReportTab audit={audit} />
            </div>
          </Tabs.Item>
        </Tabs>
      </div>

    </div>
  )
}
