import { Badge } from 'flowbite-react'

export function IssuesBadge({ audit, onScanClick }) {
  const critical = audit.critical_count ?? 0
  const serious = audit.serious_count ?? 0
  const moderate = audit.moderate_count ?? 0
  const minor = audit.minor_count ?? 0
  const isScanned = audit.status !== 'draft' && (audit.last_scanned_at || audit.scanned_at)

  // Not scanned state — show CTA to scan
  if (!isScanned) {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation()
          onScanClick?.(audit)
        }}
        className="text-sm font-medium text-primary-600 underline hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
      >
        Scan now
      </button>
    )
  }

  // All clear
  if (critical + serious + moderate + minor === 0) {
    return (
      <Badge color="success" className="w-fit">
        0
      </Badge>
    )
  }

  // Build stack of severity badges (only show non-zero)
  const severities = [
    { key: 'critical', count: critical, color: 'failure', label: 'Critical' },
    { key: 'serious', count: serious, color: 'warning', label: 'Serious' },
    { key: 'moderate', count: moderate, color: 'purple', label: 'Moderate' },
    { key: 'minor', count: minor, color: 'gray', label: 'Minor' },
  ].filter(s => s.count > 0)

  return (
    <div className="flex flex-col gap-1">
      {severities.map(sev => (
        <Badge key={sev.key} color={sev.color} className="w-fit text-xs">
          {sev.count} {sev.label}
        </Badge>
      ))}
    </div>
  )
}
