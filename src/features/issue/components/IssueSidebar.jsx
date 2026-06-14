import {
  AlertTriangle, Globe, FileText, Clock, RefreshCw,
  Users, CheckCircle2, HelpCircle, XCircle
} from 'lucide-react'

const STATUS_OPTIONS = [
  { key: 'confirmed', label: 'Confirmed Failure', color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200', hover: 'hover:bg-red-100', icon: AlertTriangle },
  { key: 'needs_review', label: 'Needs Review', color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200', hover: 'hover:bg-amber-100', icon: HelpCircle },
  { key: 'not-failure', label: 'Not a Failure', color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200', hover: 'hover:bg-green-100', icon: CheckCircle2 },
  { key: 'dismissed', label: 'Dismissed', color: 'text-gray-700', bg: 'bg-gray-50', border: 'border-gray-200', hover: 'hover:bg-gray-100', icon: XCircle },
  { key: 'manual-check', label: 'Needs Manual Check', color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200', hover: 'hover:bg-amber-100', icon: Clock },
]

/**
 * IssueSidebar — decision card + metadata + related issues.
 */
export default function IssueSidebar({ item, audit, onDecision, relatedIssues = [] }) {
  if (!item) return null
  const enrichment = item.enrichment || {}

  const currentDecision = item.decision
  const counts = {
    failures: item.node_count ? Math.ceil(item.node_count * 0.83) : 0,
    unreviewed: item.node_count ? Math.floor(item.node_count * 0.17) : 0,
    dismissed: 0,
  }

  return (
    <div className="space-y-5 border-l border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
      {/* Decision Card */}
      <div className="rounded-xl border-2 border-primary-100 bg-primary-50 p-4 dark:border-primary-800 dark:bg-primary-900/10">
        <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary-700 dark:text-primary-400">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Rule-level Decision
        </div>
        <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
          Overall verdict for this issue across all elements
        </p>

        <div className="mb-3 flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
          <svg className="h-4 w-4 text-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 5v3"/><circle cx="8" cy="12" r=".5" fill="currentColor" stroke="none"/></svg>
          Currently: <strong className="ml-1 text-gray-900 dark:text-white">{currentDecision ? currentDecision.replace('-', ' ') : 'Untriaged'}</strong>
        </div>

        <div className="flex flex-col gap-2">
          {STATUS_OPTIONS.map((opt) => {
            const Icon = opt.icon
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => onDecision?.(opt.key)}
                className={`flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm font-semibold transition-colors ${opt.bg} ${opt.color} ${opt.border} ${opt.hover}`}
              >
                <Icon className="h-4 w-4" />
                {opt.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Issue Details */}
      <div className="space-y-4">
        <p className="text-[10.5px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Issue Details</p>
        <MetaRow icon={AlertTriangle} label="Severity">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-red-600 dark:text-red-400">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            {item.impact?.charAt(0).toUpperCase() + item.impact?.slice(1)}
          </span>
        </MetaRow>
        <MetaRow icon={FileText} label="Standard">{audit?.wcag_version ? `WCAG ${audit.wcag_version} ${audit.conformance_level}` : '—'}</MetaRow>
        <MetaRow icon={Globe} label="SC">{item.wcag_sc || '—'}</MetaRow>
        <MetaRow icon={Clock} label="Effort">
          <span className={`inline-flex rounded px-1.5 py-0.5 text-[11px] font-bold ${
            enrichment.fixDifficulty === 'Easy' ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300' :
            enrichment.fixDifficulty === 'Medium' ? 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300' :
            enrichment.fixDifficulty === 'Hard' ? 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300' :
            'bg-gray-100 text-gray-600'
          }`}>
            {enrichment.fixDifficulty || 'Low'}
          </span>
        </MetaRow>
        <MetaRow icon={Globe} label="Scope">{item.page_name || 'Homepage'}</MetaRow>
        <MetaRow icon={Users} label="Who affected">{enrichment.affectedUsers || 'Screen reader users'}</MetaRow>
        <MetaRow icon={Clock} label="Detected">{new Date(item.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</MetaRow>
        <MetaRow icon={RefreshCw} label="Last scan">{new Date(item.updated_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</MetaRow>
      </div>

      {/* Assignee */}
      <div className="space-y-3">
        <p className="text-[10.5px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Assignee</p>
        <button className="rounded-md border border-dashed border-primary-200 bg-primary-50 px-3 py-1.5 text-xs font-semibold text-primary-700 transition-colors hover:bg-primary-100 dark:border-primary-800 dark:bg-primary-900/20 dark:text-primary-300">
          + Assign auditor
        </button>
      </div>

      {/* Element breakdown */}
      <div className="space-y-3">
        <p className="text-[10.5px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Element Breakdown</p>
        <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
          <div className="flex items-center justify-between text-[13px]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Failures
            </div>
            <strong className="text-red-600 dark:text-red-400">{counts.failures}</strong>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
            <div className="h-full rounded-full bg-red-500" style={{ width: `${(counts.failures / (item.node_count || 1)) * 100}%` }} />
          </div>
          <div className="mt-3 flex items-center justify-between text-[13px]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gray-400" />
              Unreviewed
            </div>
            <strong>{counts.unreviewed}</strong>
          </div>
          <div className="mt-3 flex items-center justify-between text-[13px]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Dismissed
            </div>
            <strong className="text-green-600">{counts.dismissed}</strong>
          </div>
        </div>
      </div>

      {/* Related Issues */}
      {relatedIssues.length > 0 && (
        <div className="space-y-3">
          <p className="text-[10.5px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Related Issues — Same page</p>
          <div className="space-y-2">
            {relatedIssues.map((ri, i) => (
              <button
                key={i}
                className="flex w-full items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm transition-colors hover:bg-primary-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-primary-900/10"
              >
                <span className={`h-2 w-2 flex-none rounded-full ${
                  ri.impact === 'critical' ? 'bg-red-500' :
                  ri.impact === 'serious' ? 'bg-orange-500' :
                  ri.impact === 'moderate' ? 'bg-amber-500' : 'bg-blue-500'
                }`} />
                <span className="flex-1 truncate font-medium text-gray-900 dark:text-white">{ri.title}</span>
                <span className="flex-none rounded bg-gray-100 px-1.5 py-0.5 text-[11px] font-bold text-gray-500 dark:bg-gray-700">{ri.sc}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function MetaRow({ icon: Icon, label, children }) {
  return (
    <div className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-b-0 dark:border-gray-700/50">
      <span className="flex items-center gap-2 text-[13px] text-gray-500 dark:text-gray-400">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </span>
      <span className="text-right text-[13px] font-medium text-gray-900 dark:text-white">{children}</span>
    </div>
  )
}
