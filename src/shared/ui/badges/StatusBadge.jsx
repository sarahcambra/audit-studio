import { Badge } from '../Badge'

/**
 * StatusBadge - Shows audit status as a badge (category, not live state)
 * @param {Object} props
 * @param {string} props.status - 'active', 'complete', 'archived', or 'draft'
 */
export function StatusBadge({ status }) {
  const statusConfig = {
    active:   { color: 'green', label: 'Active' },
    complete: { color: 'green', label: 'Complete' },
    archived: { color: 'gray', label: 'Archived' },
    draft:    { color: 'yellow', label: 'Draft' },
    pending:  { color: 'blue', label: 'Pending' },
    error:    { color: 'red', label: 'Error' },
  }
  const config = statusConfig[status] ?? { color: 'gray', label: status }

  return (
    <Badge color={config.color} size="sm">
      {config.label}
    </Badge>
  )
}

export default StatusBadge
