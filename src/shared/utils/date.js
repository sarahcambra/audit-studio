/**
 * Date utilities
 */

/**
 * Format date to readable string
 * @param {string} iso - ISO date string
 * @returns {string} Formatted date
 */
export function formatDate(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('en-SE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

/**
 * Format relative time (e.g., "2 days ago")
 * @param {string} iso - ISO date string
 * @returns {string} Relative time
 */
export function formatRelativeTime(iso) {
  if (!iso) return '—'

  const date = new Date(iso)
  const now = Date.now()
  const diff = now - date.getTime()

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 30) return formatDate(iso)
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  return 'just now'
}

/**
 * Check if date is overdue
 * @param {string} iso - ISO date string
 * @returns {boolean}
 */
export function isOverdue(iso) {
  if (!iso) return false
  return new Date(iso) < new Date()
}

/**
 * Get days until date
 * @param {string} iso - ISO date string
 * @returns {number} Days (negative if overdue)
 */
export function getDaysUntil(iso) {
  if (!iso) return null
  return Math.ceil((new Date(iso) - Date.now()) / 86400000)
}
