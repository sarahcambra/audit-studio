/**
 * URL normalisation and validation utilities.
 *
 * Design decisions:
 *  - Users type bare domains (example.com, example.se) — no https:// required
 *  - normaliseUrl() prepends https:// automatically
 *  - isValidUrl() requires at least one dot in the hostname to reject bare words
 *    like "flowbite" or "localhost" (which new URL() accepts but aren't real web URLs)
 */

/**
 * Prepend https:// to a bare domain if no protocol is present.
 * Returns an empty string for empty/whitespace input.
 *
 * @param {string} raw - user-typed value
 * @returns {string}
 */
export function normaliseUrl(raw) {
  const trimmed = (raw ?? '').trim()
  if (!trimmed) return ''
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return `https://${trimmed}`
}

/**
 * Return true only if the URL is structurally valid AND has a hostname
 * that contains at least one dot (i.e. a real TLD, not a bare word).
 *
 * Examples:
 *  isValidUrl('example.com')       → true   (normalised to https://example.com)
 *  isValidUrl('https://example.se')→ true
 *  isValidUrl('flowbite')          → false  (no dot → bare word)
 *  isValidUrl('https://flowbite')  → false  (hostname has no dot)
 *  isValidUrl('')                  → false
 *
 * @param {string} raw - user-typed value (normalised internally before checking)
 * @returns {boolean}
 */
export function isValidUrl(raw) {
  const url = normaliseUrl(raw)
  if (!url) return false
  try {
    const { hostname } = new URL(url)
    // Hostname must contain at least one dot (e.g. "example.com", not "flowbite")
    return hostname.includes('.')
  } catch {
    return false
  }
}
