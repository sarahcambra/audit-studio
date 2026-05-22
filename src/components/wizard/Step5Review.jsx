import { Badge } from 'flowbite-react'
import { getApproxScCount } from '../../lib/scCount'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, Info, User, FileText } from 'lucide-react'

export default function Step5Review({ form, onComplete }) {
  const navigate = useNavigate()
  const scCount = getApproxScCount(form.wcagVersion, form.conformanceLevel, form.preTestAnswers || {})

  const hasValidScope = form.scopeItems.some(
    item => item.name && (item.type === 'Component' ? item.componentIdentifier : item.url)
  )

  // Called by the wizard footer's "Create Audit" button via onComplete,
  // or directly if this step is rendered standalone.
  const handleCreateAudit = () => {
    navigate('/audit/demo-audit/scan')
    onComplete?.(form)
  }

  const getTypeBadgeColor = (type) => {
    if (type === 'Page')       return 'brand'
    if (type === 'User Flow')  return 'secondary'
    if (type === 'Component')  return 'warning'
    return 'gray'
  }

  return (
    <section className="space-y-4">

      {/* ── Audit Details card ─────────────────────────────────────────────── */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-softer dark:bg-brand-soft">
            <CheckCircle className="h-5 w-5 text-fg-brand-strong dark:text-fg-brand" aria-hidden="true" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Audit details</h3>
          <Badge color="brand" size="sm">
            ~{scCount.active} criteria
          </Badge>
        </div>

        <div className="mb-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Audit Name</p>
          <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">{form.auditName || '—'}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">WCAG Version</p>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">{form.wcagVersion}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Conformance Level</p>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">{form.conformanceLevel}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Standards</p>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">
              {form.standards?.en301549 && 'EN 301 549 '}
              {form.standards?.en301549 && form.standards?.digg && '+ '}
              {form.standards?.digg && 'DIGG'}
              {!form.standards?.en301549 && !form.standards?.digg && 'None'}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Theme Contrast</p>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">{form.evaluateThemeContrast ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>

      {/* ── Project Information card ───────────────────────────────────────── */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-success-soft dark:bg-success-soft">
            <Info className="h-5 w-5 text-fg-success-strong dark:text-fg-success" aria-hidden="true" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Project Information</h3>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Project Name</p>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">{form.projectName || '—'}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Client Name</p>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">{form.clientName || '—'}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Website URL</p>
              <p className="mt-1 text-sm text-gray-900 dark:text-white truncate">{form.websiteUrl || '—'}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Start Date</p>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">{form.startDate || '—'}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Target End Date</p>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">{form.targetEndDate || '—'}</p>
            </div>
          </div>
          {form.notes && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Notes</p>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">{form.notes}</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Lead Auditor card ──────────────────────────────────────────────── */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-softer dark:bg-brand-soft">
            <User className="h-5 w-5 text-fg-brand-strong dark:text-fg-brand" aria-hidden="true" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Lead Auditor</h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Name</p>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">{form.auditorName || '—'}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Email</p>
            <p className="mt-1 text-sm text-gray-900 dark:text-white truncate">{form.auditorEmail || '—'}</p>
          </div>
          <div className="col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Organisation</p>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">{form.org || '—'}</p>
          </div>
        </div>
      </div>

      {/* ── Scope Items card ───────────────────────────────────────────────── */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-warning-soft dark:bg-warning-soft">
            <FileText className="h-5 w-5 text-fg-warning dark:text-fg-warning-strong" aria-hidden="true" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Scope Items</h3>
          <Badge color="warning" size="sm">
            {form.scopeItems.length} {form.scopeItems.length === 1 ? 'item' : 'items'}
          </Badge>
        </div>

        <div className="space-y-2">
          {form.scopeItems.map((item, index) => (
            <div key={index} className="rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-750">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name || 'Unnamed'}</p>
                  <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400 truncate font-mono">
                    {item.type === 'Component' ? item.componentIdentifier : item.url}
                  </p>
                </div>
                <Badge color={getTypeBadgeColor(item.type)} size="sm">
                  {item.type}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Validation notice ─────────────────────────────────────────────── */}
      {!hasValidScope && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <p className="text-sm font-medium text-red-800 dark:text-red-200">
            At least one valid scope item with a name and URL/selector is required to create the audit.
          </p>
        </div>
      )}

    </section>
  )
}
