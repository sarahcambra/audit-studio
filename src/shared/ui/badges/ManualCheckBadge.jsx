import { Badge } from '../Badge'

/**
 * Manual Check Badge - Shows manual check verdict status
 * Used in Manual Checks tab for audit verification
 *
 * @param {Object} props
 * @param {string} props.status - 'pass', 'fail', 'partial', 'untriaged', 'na', 'deferred'
 * @param {string} [props.size='sm'] - Badge size
 */
export function ManualCheckBadge({ status, size = 'sm' }) {
  const config = {
    pass: { color: 'green', label: 'Pass' },
    fail: { color: 'red', label: 'Fail' },
    partial: { color: 'yellow', label: 'Partial' },
    untriaged: { color: 'gray', label: 'Pending' },
    na: { color: 'blue', label: 'N/A' },
    deferred: { color: 'purple', label: 'Deferred' },
  }

  const { color, label } = config[status] ?? { color: 'gray', label: status || 'Pending' }

  return (
    <Badge color={color} size={size}>
      {label}
    </Badge>
  )
}

export default ManualCheckBadge
