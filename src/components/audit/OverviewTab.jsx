import { Card, Badge, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react'
import {
  AlertTriangle, Clock, FileSearch, ListChecks,
  Globe, Shield, User, Calendar, ExternalLink,
  CheckCircle2, BarChart3, Target, Layers
} from 'lucide-react'
import { StatCard } from '../StatCard'
import { customTheme } from '../../theme'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtDate(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('en-SE', {
    day: '2-digit', month: 'short', year: 'numeric',
  })
}

// ─── Badges ───────────────────────────────────────────────────────────────────

function WcagBadge({ version, level }) {
  const colorMap = {
    'AA': 'wcagAA',
    'AAA': 'wcagAAA',
    'A': 'wcagA',
  }
  return (
    <Badge theme={customTheme.badge} color={colorMap[level] ?? 'gray'} size="xs">
      WCAG {version} {level}
    </Badge>
  )
}

function StatusBadge({ status }) {
  const colorMap = {
    active:   'primary',
    complete: 'success',
    archived: 'gray',
    draft:    'warning',
  }
  const labels = { active: 'Active', complete: 'Complete', archived: 'Archived', draft: 'Draft' }
  return (
    <Badge theme={customTheme.badge} color={colorMap[status] ?? 'gray'} size="xs">
      {labels[status] ?? status}
    </Badge>
  )
}

function DecisionBadge({ decision }) {
  const colorMap = {
    confirmed:     'success',
    needs_review:  'warning',
    dismissed:     'gray',
    'not-failure': 'success',
    'manual-check':'warning',
    deferred:      'gray',
  }
  const labels = {
    confirmed:     'Confirmed',
    needs_review:  'Needs review',
    dismissed:     'Dismissed',
    'not-failure': 'Not a failure',
    'manual-check':'Manual check',
    deferred:      'Deferred',
  }

  if (!decision) {
    return (
      <Badge theme={customTheme.badge} color="gray" size="xs">
        Untriaged
      </Badge>
    )
  }

  return (
    <Badge theme={customTheme.badge} color={colorMap[decision] ?? 'gray'} size="xs">
      {labels[decision] ?? decision}
    </Badge>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function OverviewTab({ audit, scanJobs }) {
  const scope = audit.scope_json?.items ?? []
  const lastScanned = audit.last_scanned_at ?? scanJobs[0]?.completed_at

  // Calculate page/flow/component breakdown
  const pageCount = scope.filter(item => item.type === 'Page').length
  const flowCount = scope.filter(item => item.type === 'User Flow').length
  const componentCount = scope.filter(item => item.type === 'Component').length

  const stats = [
    { label: 'Critical Issues', value: audit.critical_count ?? 0, icon: AlertTriangle, color: 'danger' },
    { label: 'Untriaged', value: audit.untriaged_count ?? 0, icon: Clock, color: 'warning' },
    { label: 'Scans Run', value: audit.scan_count ?? scanJobs.length, icon: FileSearch, color: 'primary' },
    { label: 'Scope Items', value: scope.length, icon: ListChecks, color: 'success' },
  ]

  return (
    <>
      {/* Stat cards grid */}
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 mb-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Two-column layout: Sidebar + Main content */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">

        {/* Sidebar - 1 column */}
        <div className="col-span-full xl:col-auto">
          {/* Audit Info Card - Compact */}
          <Card theme={customTheme.card}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/30">
                <BarChart3 className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Audit Details
                </h3>
                <div className="flex gap-2 mt-0.5">
                  <StatusBadge status={audit.status} />
                </div>
              </div>
            </div>

            <dl className="space-y-3">
              {/* Website */}
              <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                <dt className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Globe className="h-4 w-4" />
                  Website
                </dt>
                <dd className="text-sm">
                  {audit.website_url ? (
                    <a
                      href={audit.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-700 hover:underline dark:text-primary-400 flex items-center gap-1"
                    >
                      <span className="truncate max-w-[150px]">{new URL(audit.website_url).hostname}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </dd>
              </div>

              {/* Auditor */}
              <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                <dt className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <User className="h-4 w-4" />
                  Auditor
                </dt>
                <dd className="text-sm font-medium text-gray-900 dark:text-white">
                  {audit.auditor_name || '—'}
                </dd>
              </div>

              {/* Started */}
              <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                <dt className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  Started
                </dt>
                <dd className="text-sm font-medium text-gray-900 dark:text-white">
                  {fmtDate(audit.started_at)}
                </dd>
              </div>

              {/* Standard */}
              <div className="flex items-center justify-between py-2">
                <dt className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Shield className="h-4 w-4" />
                  Standard
                </dt>
                <dd className="text-sm">
                  <span className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                    WCAG {audit.wcag_version} {audit.conformance_level}
                  </span>
                </dd>
              </div>
            </dl>

            {/* Notes */}
            {audit.notes && (
              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Notes</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {audit.notes}
                </p>
              </div>
            )}
          </Card>
        </div>

        {/* Main content - 2 columns */}
        <div className="col-span-2">
          {/* Scope Table Card */}
          <Card theme={customTheme.card}>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 dark:bg-cyan-900/30">
                  <Target className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Audit Scope</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{scope.length} items defined</p>
                </div>
              </div>
              {scope.length > 0 && (
                <div className="flex gap-2">
                  {pageCount > 0 && (
                    <Badge theme={customTheme.badge} color="info" size="xs">
                      {pageCount} Pages
                    </Badge>
                  )}
                  {flowCount > 0 && (
                    <Badge theme={customTheme.badge} color="warning" size="xs">
                      {flowCount} Flows
                    </Badge>
                  )}
                  {componentCount > 0 && (
                    <Badge theme={customTheme.badge} color="purple" size="xs">
                      {componentCount} Components
                    </Badge>
                  )}
                </div>
              )}
            </div>

            {scope.length === 0 ? (
              <div className="py-12 text-center rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <div className="mb-3 flex justify-center">
                  <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-700">
                    <Layers className="h-6 w-6 text-gray-400" />
                  </div>
                </div>
                <p className="text-sm text-gray-900 dark:text-white font-medium">No scope items defined</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Add pages, flows, or components to get started</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table
                  hoverable
                  theme={{
                    ...customTheme.table,
                    head: {
                      base: 'bg-gray-50 dark:bg-gray-700',
                      cell: { base: 'p-4 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400' }
                    }
                  }}
                  className="min-w-full"
                >
                  <TableHead>
                    <TableRow>
                      <TableHeadCell>Name</TableHeadCell>
                      <TableHeadCell>Type</TableHeadCell>
                      <TableHeadCell>URL / Identifier</TableHeadCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {scope.map((item, i) => (
                      <TableRow
                        key={i}
                        className="bg-white dark:bg-gray-800"
                      >
                        <TableCell className="p-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {item.name || '—'}
                          </div>
                        </TableCell>
                        <TableCell className="p-4 whitespace-nowrap">
                          <Badge
                            theme={customTheme.badge}
                            color={
                              item.type === 'Page' ? 'info' :
                              item.type === 'User Flow' ? 'warning' :
                              'purple'
                            }
                            size="xs"
                          >
                            {item.type}
                          </Badge>
                        </TableCell>
                        <TableCell className="p-4 max-w-xs truncate font-mono text-xs text-gray-500 dark:text-gray-400">
                          {item.url || item.componentIdentifier || '—'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  )
}

export { WcagBadge, StatusBadge, DecisionBadge }
