/**
 * General formatting utilities
 */

/**
 * Capitalize first letter
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Truncate text with ellipsis
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(str, maxLength = 50) {
  if (!str || str.length <= maxLength) return str
  return str.slice(0, maxLength) + '...'
}

/**
 * Format number with commas
 * @param {number} num
 * @returns {string}
 */
export function formatNumber(num) {
  if (num === null || num === undefined) return '—'
  return num.toLocaleString()
}

/**
 * Generate random ID
 * @returns {string}
 */
export function generateId() {
  return Math.random().toString(36).substring(2, 9)
}
