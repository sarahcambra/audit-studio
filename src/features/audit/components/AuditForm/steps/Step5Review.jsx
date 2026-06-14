import { Card, Alert } from 'flowbite-react'
import { getApproxScCount } from '@lib/scCount'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, Info, User, FileText, AlertCircle } from 'lucide-react'
import { customTheme } from '@config/theme.js'
import { Badge } from '@shared/ui'

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
    if (type === 'Page')       return 'blue'
    if (type === 'User Flow')  return 'purple'
    if (type === 'Component')  return 'yellow'
    return 'gray'
  }

  return (
    <section className="space-y-4 max-w-3xl">


      {/* ── Audit Details card ─────────────────────────────────────────────── */}
      <Card theme={customTheme.card}>
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/30">
            <CheckCircle className="h-5 w-5 text-primary-700 dark:text-primary-300" aria-hidden="true" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Audit details</h3>
          <Badge color="blue" size="sm">
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
      </Card>

      {/* ── Project Information card ───────────────────────────────────────── */}
      <Card theme={customTheme.card}>
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-success-50 dark:bg-success-900/30">
            <Info className="h-5 w-5 text-success-700 dark:text-success-300" aria-hidden="true" />
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
              <p className="mt-1 text-sm text-gray-900 dark:text-white break-all">{form.websiteUrl || '—'}</p>
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
      </Card>

      {/* ── Lead Auditor card ──────────────────────────────────────────────── */}
      <Card theme={customTheme.card}>
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/30">
            <User className="h-5 w-5 text-primary-700 dark:text-primary-300" aria-hidden="true" />
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
      </Card>

      {/* ── Scope Items card ───────────────────────────────────────────────── */}
      <Card theme={customTheme.card}>
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-warning-50 dark:bg-warning-900/30">
            <FileText className="h-5 w-5 text-warning-700 dark:text-warning-300" aria-hidden="true" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Scope Items</h3>
          <Badge color="yellow" size="sm">
            {form.scopeItems.length} {form.scopeItems.length === 1 ? 'item' : 'items'}
          </Badge>
        </div>

        <div className="space-y-2">
          {form.scopeItems.map((item, index) => (
            <div key={index} className="rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-700/50">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name || 'Unnamed'}</p>
                  <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400 font-mono break-all">
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
      </Card>

      {/* ── Validation notice ─────────────────────────────────────────────── */}
      {!hasValidScope && (
        <Alert color="failure" icon={AlertCircle}>
          At least one valid scope item with a name and URL/selector is required to create the audit.
        </Alert>
      )}

    </section>
  )
}
