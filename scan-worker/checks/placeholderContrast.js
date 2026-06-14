/**
 * Custom check: SC 1.4.3 Placeholder Contrast
 * Failure basis: W3C Understanding SC 1.4.3 Note 3 (normative)
 *   "Placeholder text is text in the page. If used, placeholder text
 *    needs to provide sufficient contrast."
 *
 * Why axe misses it: window.getComputedStyle(el, '::placeholder') is not
 * required by the CSSOM spec (only ::before/::after are). axe-core issue #643
 * closed as "not implementable". Chromium/Playwright does support it.
 */

export async function run(page) {
  const elements = await page.evaluate(() => {
    function getLuminance(r, g, b) {
      return [r, g, b].reduce((acc, c, i) => {
        c /= 255
        c = c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
        return acc + c * [0.2126, 0.7152, 0.0722][i]
      }, 0)
    }

    function parseRgb(str) {
      const m = str.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/)
      if (!m) return null
      return { r: +m[1], g: +m[2], b: +m[3], a: m[4] !== undefined ? +m[4] : 1 }
    }

    function contrastRatio(fg, bg) {
      // Alpha-blend fg over white bg if semi-transparent
      const blend = (c, a) => Math.round(c * a + 255 * (1 - a))
      const L1 = getLuminance(blend(fg.r, fg.a), blend(fg.g, fg.a), blend(fg.b, fg.a))
      const L2 = getLuminance(bg.r, bg.g, bg.b)
      const [hi, lo] = L1 > L2 ? [L1, L2] : [L2, L1]
      return (hi + 0.05) / (lo + 0.05)
    }

    const inputs = document.querySelectorAll(
      'input[placeholder]:not([type="hidden"]):not([type="color"]):not([type="file"]), textarea[placeholder]'
    )
    const results = []

    for (const el of inputs) {
      // Skip invisible elements
      const rect = el.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) continue
      const cs = window.getComputedStyle(el)
      if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') continue

      const phStyle = window.getComputedStyle(el, '::placeholder')
      const fg = parseRgb(phStyle.color)
      if (!fg) continue // can't parse — skip

      // Resolve background: walk up DOM until non-transparent bg found
      let bg = null
      let bgEl = el
      while (bgEl) {
        const bgCs = window.getComputedStyle(bgEl)
        const parsed = parseRgb(bgCs.backgroundColor)
        if (parsed && parsed.a > 0) { bg = parsed; break }
        bgEl = bgEl.parentElement
      }
      if (!bg) bg = { r: 255, g: 255, b: 255, a: 1 } // assume white

      const ratio = contrastRatio(fg, bg)

      // Required ratio: 3:1 for large text, 4.5:1 for normal text
      const fontSize = parseFloat(cs.fontSize)
      const fw = cs.fontWeight
      const isBold = parseInt(fw) >= 700 || fw === 'bold' || fw === 'bolder'
      const isLarge = fontSize >= 18 || (isBold && fontSize >= 14)
      const required = isLarge ? 3.0 : 4.5

      if (ratio < required) {
        const placeholder = el.getAttribute('placeholder') || ''
        // Get outerHTML but limit length for readability
        let html = el.outerHTML || el.tagName.toLowerCase()
        if (html.length > 200) html = html.slice(0, 200) + '...'
        results.push({
          selector: el.id
            ? `#${el.id}`
            : `[placeholder="${placeholder.replace(/"/g, '\\"').slice(0, 60)}"]`,
          placeholder: placeholder.slice(0, 80),
          ratio:    +ratio.toFixed(2),
          required,
          fgColor:  phStyle.color,
          bgColor:  window.getComputedStyle(bg === null ? el : bgEl || el).backgroundColor,
          html:     html,  // Full HTML element
        })
      }
    }

    return results
  })

  if (elements.length === 0) return []

  return [{
    checkId:        'custom-placeholder-contrast',
    sc:             '1.4.3',
    confidence:     'CONFIRMED_FAIL',
    failureBasis:   'Understanding SC 1.4.3 Note 3 (normative)',
    message:        `${elements.length} input${elements.length > 1 ? 's have' : ' has'} insufficient placeholder text contrast (axe cannot detect this).`,
    data:           { elements },
    nodeCount:      elements.length,
    elementSnippet: elements[0].html || elements[0].selector,  // Return full HTML, fallback to selector
  }]
}
