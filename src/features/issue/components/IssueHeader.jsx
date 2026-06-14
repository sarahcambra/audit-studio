import { useNavigate } from 'react-router-dom'
import { Button } from 'flowbite-react'
import {
  Home, ChevronRight, Share2, FileDown,
  MoreHorizontal
} from 'lucide-react'

/**
 * IssueHeader — breadcrumb + title + badges + actions for Issue Detail page.
 */
export default function IssueHeader({ audit, item }) {
  const navigate = useNavigate()
  if (!item) return null

  const enrichment = item.enrichment || {}

  const sevBg = {
    critical: 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300',
    serious:  'bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300',
    moderate: 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300',
    minor:    'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300',
  }[item.impact] || 'bg-gray-100 text-gray-600'

  const statusBg = {
    pending:    'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400',
    confirmed:  'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300',
    'needs_review': 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300',
    dismissed:  'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300',
    'not-failure': 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300',
    'manual-check': 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300',
    deferred: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400',
  }[item.decision || 'pending']

  return (
    <div className="border-b border-gray-200 bg-white px-6 pt-4 pb-0 dark:border-gray-700 dark:bg-gray-800">
      {/* Breadcrumb */}
      <nav className="mb-3 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
        <button onClick={() => navigate('/')} className="flex items-center gap-1 hover:text-primary-600">
          <Home className="h-3 w-3" /> Home
        </button>
        <ChevronRight className="h-3 w-3" />
        <button onClick={() => navigate('/audits')} className="hover:text-primary-600">Audits</button>
        <ChevronRight className="h-3 w-3" />
        {audit && (
          <>
            <button onClick={() => navigate(`/audits/${audit.id}`)} className="hover:text-primary-600 truncate max-w-[120px]">
              {audit.name}
            </button>
            <ChevronRight className="h-3 w-3" />
          </>
        )}
        <button onClick={() => navigate(`/audits/${audit?.id}#triage`)} className="hover:text-primary-600">Triage</button>
        <ChevronRight className="h-3 w-3" />
        <span className="text-gray-400 truncate max-w-[200px]" title={enrichment.auditorTitle || item.rule_id}>
          {enrichment.auditorTitle || item.rule_id}
        </span>
      </nav>

      {/* Title row */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <h1 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {enrichment.auditorTitle || item.rule_id}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-bold ${sevBg}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${
                item.impact === 'critical' ? 'bg-red-500' :
                item.impact === 'serious' ? 'bg-orange-500' :
                item.impact === 'moderate' ? 'bg-amber-500' : 'bg-blue-500'
              }`} />
              {item.impact?.charAt(0).toUpperCase() + item.impact?.slice(1)}
            </span>
            {item.wcag_sc && (
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
                SC {item.wcag_sc} · {enrichment.criterionName || 'Non-text Content'}
              </span>
            )}
            <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-semibold ${statusBg}`}>
              {item.decision === 'confirmed' ? 'Confirmed Failure' :
               item.decision === 'dismissed' ? 'Dismissed' :
               item.decision === 'needs_review' ? 'Needs Review' :
               item.decision === 'not-failure' ? 'Not a Failure' :
               item.decision === 'manual-check' ? 'Needs Manual Check' :
               item.decision === 'deferred' ? 'Deferred' : 'Untriaged'}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
              <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 5v3l2 2"/></svg>
              Detected {new Date(item.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button size="xs" color="light" onClick={() => {}}>
            <Share2 className="mr-1 h-3.5 w-3.5" /> Share
          </Button>
          <Button size="xs" color="light" onClick={() => {}}>
            <FileDown className="mr-1 h-3.5 w-3.5" /> Export
          </Button>
          <Button size="xs" color="light" className="px-2" onClick={() => {}}>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
