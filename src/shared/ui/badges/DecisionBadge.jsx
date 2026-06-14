import { Badge } from '../Badge'

/**
 * Decision Badge - Shows triage decision status
 * Used for triage items to indicate reviewer decision
 *
 * @param {Object} props
 * @param {string} props.decision - 'confirmed', 'needs_review', 'dismissed', 'not-failure', 'manual-check', 'deferred'
 * @param {string} [props.size='sm'] - Badge size
 */
export function DecisionBadge({ decision, size = 'sm' }) {
  const colorMap = {
    confirmed: 'green',
    needs_review: 'yellow',
    dismissed: 'gray',
    'not-failure': 'green',
    'manual-check': 'yellow',
    deferred: 'blue',
  }

  const labels = {
    confirmed: 'Confirmed',
    needs_review: 'Needs review',
    dismissed: 'Dismissed',
    'not-failure': 'Not a failure',
    'manual-check': 'Manual check',
    deferred: 'Deferred',
  }

  if (!decision) {
    return (
      <Badge color="gray" size={size}>
        Untriaged
      </Badge>
    )
  }

  return (
    <Badge color={colorMap[decision] ?? 'gray'} size={size}>
      {labels[decision] ?? decision}
    </Badge>
  )
}

export default DecisionBadge
