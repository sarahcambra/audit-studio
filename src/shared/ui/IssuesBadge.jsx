export function IssuesBadge({ audit, onScanClick }) {
  const critical = audit.critical_count ?? 0
  const serious  = audit.serious_count  ?? 0
  const moderate = audit.moderate_count ?? 0
  const minor    = audit.minor_count    ?? 0
  const isScanned = audit.status !== 'draft' && (audit.last_scanned_at || audit.scanned_at)

  // Not scanned — CTA
  if (!isScanned) {
    return (
      <button
        onClick={e => { e.stopPropagation(); onScanClick?.(audit) }}
        className="text-sm font-medium text-primary-600 underline hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
      >
        Scan now
      </button>
    )
  }

  // All clear
  if (critical + serious + moderate + minor === 0) {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-success-700 dark:text-success-400">
        <span className="h-1.5 w-1.5 rounded-full bg-success-500" aria-hidden="true" />
        None
      </span>
    )
  }

  // Severity chips — colored dot + "N type"
  const severities = [
    {
      key: 'critical',
      count: critical,
      label: 'critical',
      chip: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400',
      dot:  'bg-red-500',
    },
    {
      key: 'serious',
      count: serious,
      label: 'serious',
      chip: 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      dot:  'bg-orange-500',
    },
    {
      key: 'moderate',
      count: moderate,
      label: 'moderate',
      chip: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-600',
      dot:  'bg-yellow-400',
    },
    {
      key: 'minor',
      count: minor,
      label: 'minor',
      chip: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      dot:  'bg-purple-400',
    },
  ].filter(s => s.count > 0)

  return (
    <div className="flex flex-wrap gap-1">
      {severities.map(sev => (
        <span
          key={sev.key}
          className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-semibold ${sev.chip}`}
        >
          <span className={`h-1.5 w-1.5 flex-none rounded-full ${sev.dot}`} aria-hidden="true" />
          {sev.count} {sev.label}
        </span>
      ))}
    </div>
  )
}
