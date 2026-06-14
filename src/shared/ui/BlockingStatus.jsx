import { Status } from './Status'

/**
 * BlockingStatus - Shows triage status for an audit
 * Green dot: All items triaged
 * Red dot: Has blocking issues
 * Amber dot: Has untriaged items (not blocking)
 * @param {Object} props
 * @param {number} props.untriagedCount - Number of untriaged items
 * @param {number} props.blockingCount - Number of blocking issues
 */
export function BlockingStatus({ untriagedCount = 0, blockingCount = 0 }) {
  // All triaged (no untriaged items)
  if (untriagedCount === 0) {
    return (
      <Status color="green">
        All triaged
      </Status>
    )
  }

  // Has blocking issues
  if (blockingCount > 0) {
    return (
      <Status color="red">
        {blockingCount} blocking
      </Status>
    )
  }

  // Has untriaged items but not blocking
  return (
    <Status color="yellow">
      Awaiting review
    </Status>
  )
}

export default BlockingStatus
