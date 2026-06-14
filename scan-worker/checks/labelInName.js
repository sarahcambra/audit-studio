/**
 * Custom check: SC 2.5.3 Label in Name
 * Failure basis: F96 — accessible name does not contain the visible label text
 *
 * Rule: if an interactive element has a visible text label AND an aria-label
 * or aria-labelledby, the accessible name must CONTAIN the visible label text.
 * "Contains" check is case-insensitive, whitespace-normalized.
 */

export async function run(page) {
  const failures = await page.evaluate(() => {
    const INTERACTIVE = 'a[href], button, input:not([type="hidden"]), select, textarea, [role="button"], [role="link"], [role="checkbox"], [role="radio"], [role="switch"]'
    const results = []

    for (const el of document.querySelectorAll(INTERACTIVE)) {
      const rect = el.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) continue
      const cs = window.getComputedStyle(el)
      if (cs.display === 'none' || cs.visibility === 'hidden') continue

      // Compute visible label text (what the user sees)
      let visibleText = ''

      // For inputs — use the associated <label> element text
      if (el.tagName === 'INPUT' || el.tagName === 'SELECT' || el.tagName === 'TEXTAREA') {
        if (el.id) {
          const lbl = document.querySelector(`label[for="${CSS.escape(el.id)}"]`)
          if (lbl) visibleText = lbl.textContent.trim()
        }
        if (!visibleText) {
          const parentLabel = el.closest('label')
          if (parentLabel) {
            // label text without the input's own value
            visibleText = parentLabel.textContent.trim()
          }
        }
        // Inputs with no visible label — skip (different issue)
        if (!visibleText) continue
      } else {
        // Buttons, links — visible text is the element's own text content
        // Filter out child elements that are icons (svg, img without alt, i tags)
        const clone = el.cloneNode(true)
        // Remove SVG/icon children
        for (const icon of clone.querySelectorAll('svg, img:not([alt]), i[class*="icon"], span[class*="icon"]')) {
          icon.remove()
        }
        visibleText = clone.textContent.trim()
        if (!visibleText) continue // icon-only — skip (different check)
      }

      // Compute accessible name
      const ariaLabel = el.getAttribute('aria-label')?.trim()
      let accessibleName = ''

      if (ariaLabel) {
        accessibleName = ariaLabel
      } else {
        const labelledById = el.getAttribute('aria-labelledby')
        if (labelledById) {
          accessibleName = labelledById.split(/\s+/)
            .map(id => document.getElementById(id)?.textContent.trim() || '')
            .join(' ').trim()
        }
      }

      // Only flag when there IS an explicit accessible name override that excludes visible text
      if (!accessibleName) continue

      // Normalize both strings
      const normalize = s => s.toLowerCase().replace(/\s+/g, ' ').trim()
      const normVisible     = normalize(visibleText)
      const normAccessible  = normalize(accessibleName)

      if (normVisible && normAccessible && !normAccessible.includes(normVisible)) {
        const selector = el.id ? `#${el.id}` : el.tagName.toLowerCase()
        results.push({
          selector,
          visibleText:    visibleText.slice(0, 80),
          accessibleName: accessibleName.slice(0, 80),
        })
      }
    }

    return results
  })

  if (failures.length === 0) return []

  return [{
    checkId:        'custom-label-in-name',
    sc:             '2.5.3',
    confidence:     'CONFIRMED_FAIL',
    failureBasis:   'F96',
    message:        `${failures.length} interactive element${failures.length > 1 ? 's have an' : ' has an'} accessible name that does not contain the visible label text.`,
    data:           { elements: failures },
    nodeCount:      failures.length,
    elementSnippet: failures[0].html || failures[0].selector,
  }]
}
