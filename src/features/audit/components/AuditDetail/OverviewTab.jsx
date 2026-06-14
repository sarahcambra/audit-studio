import { useMemo } from 'react'
import { Button } from 'flowbite-react'
import {
  AlertTriangle, Globe, BarChart3,
  Clock, CheckCircle2, Layers, FileText, RefreshCw,
  ExternalLink, Plus, Calendar, Users,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { ScoreRing, SeverityBar, SeverityStats, PipelineSteps, ActivityFeed } from '@shared/ui'

/* ─── helpers ─────────────────────────────────────────────── */

function fmtDate(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function scoreFromAudit(audit) {
  const c = audit.critical_count ?? 0
  const s = audit.serious_count ?? 0
  const m = audit.moderate_count ?? 0
  const n = audit.minor_count ?? 0
  return Math.max(0, Math.min(100, Math.round(100 - (c * 12 + s * 6 + m * 2 + n * 1))))
}

function scoreLabel(score) {
  if (score >= 80) return { label: 'Good', color: '#059669' }
  if (score >= 60) return { label: 'Partial', color: '#D97706' }
  return { label: 'Poor', color: '#DC2626' }
}

export default function OverviewTab({ audit, scanJobs = [] }) {
  const navigate = useNavigate()
  const score = scoreFromAudit(audit)
  const scoreMeta = scoreLabel(score)

  const severityCounts = useMemo(() => ({
    critical: audit.critical_count ?? 0,
    serious:  audit.serious_count ?? 0,
    moderate: audit.moderate_count ?? 0,
    minor:    audit.minor_count ?? 0,
  }), [audit])

  const totalIssues = severityCounts.critical + severityCounts.serious + severityCounts.moderate + severityCounts.minor

  const lastScan = scanJobs.length > 0
    ? scanJobs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0]
    : null

  const scopeItems = audit.scope_json?.items ?? []

  const activities = useMemo(() => {
    const items = []
    if (lastScan) {
      items.push({
        text: (<>
          Scan <strong>Scan #{scanJobs.length}</strong> completed —{' '}
          {lastScan.violation_count ?? 'some'} violations found
        </>),
        time: fmtDate(lastScan.created_at),
        variant: 'purple',
      })
    }
    if (audit.started_at) {
      items.push({
        text: <>Audit created and scope defined</>,
        time: fmtDate(audit.started_at),
        variant: 'gray',
      })
    }
    return items.slice(0, 4)
  }, [lastScan, audit, scanJobs.length])

  return (
    <div className="space-y-4">
      {/* Top row: Score + Severity */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[260px_1fr]">
        {/* Score card */}
        <div className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="self-start text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Conformance Score
          </div>
          <ScoreRing score={score} size={140} stroke={10} label={scoreMeta.label} />
          <p className="text-center text-xs leading-relaxed text-gray-400 dark:text-gray-500">
            {totalIssues > 0
              ? `${totalIssues} open issues across ${scopeItems.length || 1} page${scopeItems.length !== 1 ? 's' : ''}. Fix critical issues first.`
              : 'No issues detected. Great work!'}
          </p>
        </div>

        {/* Severity breakdown */}
        <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white">
              <AlertTriangle className="h-4 w-4 text-gray-500" />
              Issues by Severity
            </h3>
            <Button
              size="xs"
              color="light"
              onClick={() => navigate(`/audits/${audit.id}#triage`)}
            >
              View in Triage →
            </Button>
          </div>

          <SeverityBar counts={severityCounts} />
          <div className="mt-4">
            <SeverityStats counts={severityCounts} />
          </div>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        <div
          className="cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary-300 hover:shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:border-primary-600"
          onClick={() => navigate(`/audits/${audit.id}#triage`)}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Untriaged</p>
              <p className="mt-1.5 text-2xl font-extrabold text-warning-600 dark:text-warning-400">
                {audit.untriaged_count ?? 0}
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">↑ requires classification</p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-warning-50 dark:bg-warning-900/20">
              <Clock className="h-4 w-4 text-warning-600 dark:text-warning-400" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          style={{ borderLeft: '3px solid var(--tw-color-danger-500, #ef4444)' }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Confirmed Failures</p>
              <p className="mt-1.5 text-2xl font-extrabold text-danger-600 dark:text-danger-400">
                {audit.confirmed_count ?? 0}
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {(audit.critical_count ?? 0) > 0 ? `${audit.critical_count} critical blocking` : 'All clear'}
              </p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-danger-50 dark:bg-danger-900/20">
              <AlertTriangle className="h-4 w-4 text-danger-600 dark:text-danger-400" />
            </div>
          </div>
        </div>

        <div
          className="cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary-300 hover:shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:border-primary-600"
          onClick={() => navigate(`/audits/${audit.id}#scan`)}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Scans Run</p>
              <p className="mt-1.5 text-2xl font-extrabold text-gray-900 dark:text-white">{scanJobs.length}</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {lastScan ? `Last: ${fmtDate(lastScan.created_at)}` : 'No scans yet'}
              </p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/20">
              <RefreshCw className="h-4 w-4 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Scope Items</p>
              <p className="mt-1.5 text-2xl font-extrabold text-gray-900 dark:text-white">{scopeItems.length || 1}</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{scopeItems.length || 1} page{scopeItems.length !== 1 ? 's' : ''} in scope</p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success-50 dark:bg-success-900/20">
              <Layers className="h-4 w-4 text-success-600 dark:text-success-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Mid row: Details + Scope + Activity */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Audit Details */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-700">
            <h3 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white">
              <FileText className="h-4 w-4 text-gray-500" />
              Audit Details
            </h3>
            <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-semibold ${
              audit.status === 'active'
                ? 'bg-success-50 text-success-700 dark:bg-success-900/20 dark:text-success-300'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
            }`}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {audit.status === 'active' ? 'Active' : audit.status}
            </span>
          </div>

          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            <DetailRow icon={Globe} label="Website">
              {audit.website_url ? (
                <a
                  href={audit.website_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-primary-700 hover:underline dark:text-primary-400"
                >
                  {audit.website_url.replace(/^https?:\/\//, '')}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : '—'}
            </DetailRow>

            <DetailRow icon={Users} label="Auditor">
              <button className="rounded-md border border-dashed border-primary-200 bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-700 dark:border-primary-800 dark:bg-primary-900/20 dark:text-primary-300">
                + Assign
              </button>
            </DetailRow>

            <DetailRow icon={Calendar} label="Started">
              <span className="text-sm font-medium text-gray-900 dark:text-white">{fmtDate(audit.started_at)}</span>
            </DetailRow>

            <DetailRow icon={Calendar} label="Due date">
              <span className={`text-sm font-medium ${
                audit.target_end_date && new Date(audit.target_end_date) < new Date()
                  ? 'text-warning-600 dark:text-warning-400'
                  : 'text-gray-900 dark:text-white'
              }`}>
                {fmtDate(audit.target_end_date)}
              </span>
            </DetailRow>

            <DetailRow icon={CheckCircle2} label="Standard">
              <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-bold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                WCAG {audit.wcag_version} {audit.conformance_level}
              </span>
            </DetailRow>

            {/* Pipeline */}
            <div className="px-5 py-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Audit Progress
              </p>
              <PipelineSteps stages={[
                'done',
                scanJobs.length > 0 ? 'current' : 'empty',
                'empty',
                'empty',
              ]} />
            </div>
          </div>
        </div>

        {/* Scope + Activity */}
        <div className="flex flex-col gap-4">
          {/* Scope */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-700">
              <h3 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white">
                <Layers className="h-4 w-4 text-gray-500" />
                Audit Scope
              </h3>
              <span className="inline-flex items-center rounded-full bg-primary-50 px-2 py-0.5 text-xs font-semibold text-primary-700 dark:bg-primary-900/20 dark:text-primary-300">
                {scopeItems.length || 1} Page
              </span>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <th className="px-5 py-2.5 text-left">Name</th>
                  <th className="px-5 py-2.5 text-left">Type</th>
                  <th className="px-5 py-2.5 text-left">Issues</th>
                  <th className="px-5 py-2.5 text-left">URL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {(scopeItems.length ? scopeItems : [{ name: 'Homepage', type: 'page', url: audit.website_url || '—' }]).map((item, i) => (
                  <tr key={i} className="group transition-colors hover:bg-primary-50 dark:hover:bg-primary-900/10">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-3.5 w-3.5 text-gray-400" />
                        <span className="font-semibold text-gray-900 dark:text-white">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <span className="inline-flex items-center rounded bg-blue-50 px-1.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
                        {item.type?.charAt(0).toUpperCase() + item.type?.slice(1) || 'Page'}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex gap-1">
                        {(audit.critical_count ?? 0) > 0 && <span className="rounded bg-red-50 px-1.5 py-0.5 text-[11px] font-bold text-red-700 dark:bg-red-900/20">{audit.critical_count}</span>}
                        {(audit.serious_count ?? 0) > 0 && <span className="rounded bg-orange-50 px-1.5 py-0.5 text-[11px] font-bold text-orange-700 dark:bg-orange-900/20">{audit.serious_count}</span>}
                        {(audit.moderate_count ?? 0) > 0 && <span className="rounded bg-amber-50 px-1.5 py-0.5 text-[11px] font-bold text-amber-700 dark:bg-amber-900/20">{audit.moderate_count}</span>}
                      </div>
                    </td>
                    <td className="px-5 py-3 font-mono text-xs text-gray-400 dark:text-gray-500">{item.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="flex w-full items-center gap-2 border-t border-dashed border-gray-200 px-5 py-3 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-50 dark:border-gray-700 dark:text-primary-400 dark:hover:bg-primary-900/10">
              <Plus className="h-4 w-4" />
              Add page to scope
            </button>
          </div>

          {/* Activity */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-2 border-b border-gray-100 px-5 py-4 dark:border-gray-700">
              <Clock className="h-4 w-4 text-gray-500" />
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Recent Activity</h3>
            </div>
            <ActivityFeed items={activities} />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── DetailRow helper ─────────────────────────────────────── */

function DetailRow({ icon: Icon, label, children }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3">
      <div className="flex min-w-[90px] items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <div className="ml-auto text-right">{children}</div>
    </div>
  )
}
