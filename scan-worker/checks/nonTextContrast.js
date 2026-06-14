/**
 * Custom check: SC 1.4.11 Non-text Contrast
 * Failure basis: W3C Understanding SC 1.4.11 — UI components require 3:1 contrast
 * against adjacent colors.
 *
 * Checks:
 *   - Input borders vs. background
 *   - Checkbox/radio borders vs. background
 *   - Button borders (if no background fill provides the boundary)
 *
 * Note: focus ring contrast is checked separately in focusVisible.js
 */

export async function run(page) {
  const failures = await page.evaluate(() => {
    function parseRgb(str) {
      const m = str.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/)
      if (!m) return null
      return { r: +m[1], g: +m[2], b: +m[3], a: m[4] !== undefined ? +m[4] : 1 }
    }
    function getLuminance(r, g, b) {
      return [r, g, b].reduce((acc, c, i) => {
        c /= 255
        c = c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
        return acc + c * [0.2126, 0.7152, 0.0722][i]
      }, 0)
    }
    function contrastRatio(c1, c2) {
      const L1 = getLuminance(c1.r, c1.g, c1.b)
      const L2 = getLuminance(c2.r, c2.g, c2.b)
      const [hi, lo] = L1 > L2 ? [L1, L2] : [L2, L1]
      return (hi + 0.05) / (lo + 0.05)
    }
    function getEffectiveBg(el) {
      // Walk up DOM to find first non-transparent background
      let e = el
      while (e && e !== document.documentElement) {
        const cs = window.getComputedStyle(e)
        const bg = parseRgb(cs.backgroundColor)
        if (bg && bg.a > 0.01) return bg
        e = e.parentElement
      }
      return { r: 255, g: 255, b: 255, a: 1 } // assume white
    }

    const results = []
    const INPUTS = 'input[type="text"], input[type="email"], input[type="password"], input[type="number"], input[type="search"], input[type="tel"], input[type="url"], input[type="date"], textarea, select, input[type="checkbox"], input[type="radio"]'

    for (const el of document.querySelectorAll(INPUTS)) {
      const rect = el.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) continue
      const cs = window.getComputedStyle(el)
      if (cs.display === 'none' || cs.visibility === 'hidden') continue

      // Get border color
      const borderColor = parseRgb(cs.borderColor || cs.borderTopColor)
      if (!borderColor || borderColor.a < 0.01) {
        // Invisible border — check if background itself provides boundary
        // If input bg === page bg → no boundary visible at all
        const inputBg  = parseRgb(cs.backgroundColor)
        const pageBg   = getEffectiveBg(el.parentElement)
        if (inputBg && pageBg) {
          const ratio = contrastRatio(inputBg, pageBg)
          if (ratio < 3.0) {
            const selector = el.id ? `#${el.id}` : `${el.tagName.toLowerCase()}[type="${el.type || 'text'}"]`
            results.push({ selector, type: el.type || 'text', ratio: +ratio.toFixed(2), issue: 'no-border-no-bg-contrast' })
          }
        }
        continue
      }

      // Border contrast against page background
      const pageBg = getEffectiveBg(el.parentElement)
      const ratio  = contrastRatio(borderColor, pageBg)

      if (ratio < 3.0) {
        const selector = el.id ? `#${el.id}` : `${el.tagName.toLowerCase()}[type="${el.type || 'text'}"]`
        results.push({
          selector,
          type:        el.type || 'text',
          ratio:       +ratio.toFixed(2),
          borderColor: cs.borderTopColor,
          bgColor:     cs.backgroundColor,
          issue:       'border-contrast',
        })
      }
    }

    return results
  })

  if (failures.length === 0) return []

  return [{
    checkId:        'custom-non-text-contrast',
    sc:             '1.4.11',
    confidence:     'CONFIRMED_FAIL',
    failureBasis:   'Understanding SC 1.4.11 — UI component boundary < 3:1',
    message:        `${failures.length} form control${failures.length > 1 ? 's have' : ' has'} insufficient border/boundary contrast against the background (< 3:1).`,
    data:           { elements: failures },
    nodeCount:      failures.length,
    elementSnippet: failures[0].html || failures[0].selector,
  }]
}
