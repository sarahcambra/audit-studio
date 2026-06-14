/**
 * Custom check: SC 2.4.4 Link Purpose (In Context)
 * Failure basis: F84 — generic link text without disambiguating context
 *
 * F84 is formally for 2.4.9 but Understanding 2.4.4 lists the same patterns.
 * We distinguish two confidence levels:
 *   - No context around link → CONFIRMED_FAIL
 *   - Context exists but link text is generic → NEEDS_REVIEW (auditor verifies)
 */

// These patterns fail regardless of context — they convey zero purpose
const GENERIC_PATTERNS = [
  /^click here$/i,
  /^here$/i,
  /^more$/i,
  /^read more$/i,
  /^learn more$/i,
  /^details$/i,
  /^more info(rmation)?$/i,
  /^this link$/i,
  /^link$/i,
  /^continue$/i,
  /^go$/i,
  /^see more$/i,
  /^view more$/i,
  /^open$/i,
  /^press here$/i,
  /^full (article|story|post)$/i,
]

export async function run(page) {
  const links = await page.evaluate(() => {
    const results = []
    const seen = new Set()

    for (const link of document.querySelectorAll('a[href]')) {
      if (seen.has(link)) continue
      seen.add(link)

      const rect = link.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) continue
      const cs = window.getComputedStyle(link)
      if (cs.display === 'none' || cs.visibility === 'hidden') continue

      // Compute accessible name: aria-label > aria-labelledby > text content
      let accessibleName = ''
      const ariaLabel = link.getAttribute('aria-label')
      const labelledById = link.getAttribute('aria-labelledby')

      if (ariaLabel) {
        accessibleName = ariaLabel.trim()
      } else if (labelledById) {
        const refEl = document.getElementById(labelledById)
        if (refEl) accessibleName = refEl.textContent.trim()
      } else {
        accessibleName = link.textContent.trim()
      }

      if (!accessibleName) continue

      // Get surrounding context (closest paragraph / list item / table cell)
      const contextEl = link.closest('p, li, td, th')
      const contextText = contextEl ? contextEl.textContent.trim() : ''
      // Context is the text around the link (excluding the link's own text)
      const contextWithoutLink = contextText.replace(accessibleName, '').trim()

      const href = link.getAttribute('href') || ''
      const selector = link.id
        ? `#${link.id}`
        : `a[href="${href.slice(0, 60).replace(/"/g, '\\"')}"]`

      results.push({
        selector,
        accessibleName,
        contextText:    contextText.slice(0, 200),
        contextAround:  contextWithoutLink.slice(0, 200),
        href,
      })
    }

    return results
  })

  const flagged = links
    .filter(l => GENERIC_PATTERNS.some(p => p.test(l.accessibleName)))
    .map(l => ({
      ...l,
      confidence: l.contextAround.length > 20 ? 'NEEDS_REVIEW' : 'CONFIRMED_FAIL',
    }))

  if (flagged.length === 0) return []

  const confirmed = flagged.filter(f => f.confidence === 'CONFIRMED_FAIL')
  const review    = flagged.filter(f => f.confidence === 'NEEDS_REVIEW')
  const output    = []

  if (confirmed.length > 0) {
    output.push({
      checkId:        'custom-generic-link-text',
      sc:             '2.4.4',
      confidence:     'CONFIRMED_FAIL',
      failureBasis:   'F84 (generic link text with no disambiguating context)',
      message:        `${confirmed.length} link${confirmed.length > 1 ? 's have' : ' has'} generic text (e.g. "click here", "read more") with no surrounding context to clarify purpose.`,
      data:           { elements: confirmed },
      nodeCount:      confirmed.length,
      elementSnippet: confirmed[0].html || confirmed[0].selector,
    })
  }

  if (review.length > 0) {
    output.push({
      checkId:        'custom-generic-link-text-with-context',
      sc:             '2.4.4',
      confidence:     'NEEDS_REVIEW',
      failureBasis:   'F84 — generic text, surrounding context may disambiguate',
      message:        `${review.length} link${review.length > 1 ? 's have' : ' has'} generic text but surrounding context exists. Auditor must verify if context is sufficient.`,
      data:           { elements: review },
      nodeCount:      review.length,
      elementSnippet: review[0].html || review[0].selector,
    })
  }

  return output
}
