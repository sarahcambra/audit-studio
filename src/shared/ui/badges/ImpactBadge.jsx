import { Badge } from '../Badge'

/**
 * Impact Badge - Shows severity level with appropriate color
 * Used for triage items, scan results, and violation severity
 *
 * @param {Object} props
 * @param {string} props.impact - 'critical', 'serious', 'moderate', 'minor', or any string
 * @param {string} [props.size='sm'] - Badge size
 */
export function ImpactBadge({ impact, size = 'sm' }) {
  const colorMap = {
    critical: 'red',
    serious: 'yellow',
    moderate: 'blue',
    minor: 'gray',
  }

  return (
    <Badge color={colorMap[impact?.toLowerCase()] ?? 'gray'} size={size}>
      {impact || '—'}
    </Badge>
  )
}

export default ImpactBadge
