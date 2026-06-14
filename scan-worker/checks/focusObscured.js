/**
 * Custom check: SC 2.4.11 Focus Not Obscured (WCAG 2.2)
 * Failure basis: F110 — sticky/fixed header covers the focused element
 *
 * Algorithm:
 * 1. Find all position:fixed/sticky elements anchored near the top (top < 120px)
 * 2. Tab through focusable elements
 * 3. For each focused element, check if its bounding box top is less than
 *    the fixed header's bottom → element is obscured → CONFIRMED FAIL
 */

export async function run(page) {
  // Find sticky/fixed headers
  const stickyHeaders = await page.evaluate(() => {
    const headers = []
    for (const el of document.querySelectorAll('*')) {
      const cs = window.getComputedStyle(el)
      if ((cs.position === 'fixed' || cs.position === 'sticky') && cs.zIndex !== 'auto' && parseInt(cs.zIndex) > 0) {
        const rect = el.getBoundingClientRect()
        if (rect.height > 0 && rect.width > 0 && rect.top < 120 && cs.opacity !== '0' && cs.display !== 'none' && cs.visibility !== 'hidden') {
          headers.push({ bottom: rect.bottom, height: rect.height })
        }
      }
    }
    return headers
  })

  if (stickyHeaders.length === 0) return [] // no fixed headers — check not applicable

  const headerBottom = Math.max(...stickyHeaders.map(h => h.bottom))
  if (headerBottom <= 0) return []

  const obscured = []
  const MAX_ELEMENTS = 30
  const focusableSelectors = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]'

  const count = await page.evaluate(sel => document.querySelectorAll(sel).length, focusableSelectors)
  const limit = Math.min(count, MAX_ELEMENTS)

  for (let i = 0; i < limit; i++) {
    try {
      // Focus the element and measure — uses waitForFunction for the async delay
      await page.evaluate(({ sel, idx }) => {
        const els = Array.from(document.querySelectorAll(sel))
        const el = els[idx]
        if (el) el.focus()
      }, { sel: focusableSelectors, idx: i })

      await page.waitForTimeout(120)

      const result = await page.evaluate(({ sel, idx, headerBottom }) => {
        const els = Array.from(document.querySelectorAll(sel))
        const el = els[idx]
        if (!el || document.activeElement !== el) return null
        const rect = el.getBoundingClientRect()
        if (rect.height === 0) return null
        if (rect.top < headerBottom - 2) {
          return {
            selector:     el.id ? `#${el.id}` : el.tagName.toLowerCase(),
        html: el.outerHTML || el.tagName.toLowerCase(),
            tag:          el.tagName.toLowerCase(),
            text:         el.textContent.trim().slice(0, 60),
            elTop:        +rect.top.toFixed(1),
            headerBottom: +headerBottom.toFixed(1),
            overlap:      +(headerBottom - rect.top).toFixed(1),
          }
        }
        return null
      }, { sel: focusableSelectors, idx: i, headerBottom })

      if (result) obscured.push(result)
    } catch {
      break
    }
  }

  await page.evaluate(() => { document.activeElement?.blur() }).catch(() => {})

  if (obscured.length === 0) return []

  return [{
    checkId:        'custom-focus-obscured',
    sc:             '2.4.11',
    confidence:     'CONFIRMED_FAIL',
    failureBasis:   'F110',
    message:        `${obscured.length} focused element${obscured.length > 1 ? 's are' : ' is'} obscured by a sticky/fixed header.`,
    data:           { elements: obscured, headerBottom },
    nodeCount:      obscured.length,
    elementSnippet: obscured[0].html || obscured[0].selector,
  }]
}
