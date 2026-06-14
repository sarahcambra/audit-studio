/**
 * Custom check: SC 1.4.1 Use of Color — Links in body text
 * Failure basis: F73 — links not visually evident without color vision
 *
 * F73 applies when:
 *   1. A link is in body text (not nav/header/footer)
 *   2. The ONLY visual distinction from surrounding text is color
 *   3. The link-to-surrounding-text contrast ratio is < 3:1 → CONFIRMED FAIL
 *   4. Color-only but ≥ 3:1 contrast → NEEDS_REVIEW
 *
 * Exempt: URL-text links, email-text links, phone-text links (Issue #4143 decision)
 */

export async function run(page) {
  const results = await page.evaluate(() => {
    function parseRgb(str) {
      const m = str.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/)
      if (!m) return null
      return { r: +m[1], g: +m[2], b: +m[3] }
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

    // Only look at links inside body-text containers (not nav/header/footer)
    const TEXT_CONTAINERS = 'p, li, td, th, article, .content, [role="main"], main'
    const containers = document.querySelectorAll(TEXT_CONTAINERS)
    const checked = new Set()
    const findings = []

    for (const container of containers) {
      // Skip if inside nav, header, footer, aside
      if (container.closest('nav, header, footer, aside, [role="navigation"], [role="banner"], [role="contentinfo"]')) continue

      for (const link of container.querySelectorAll('a[href]')) {
        if (checked.has(link)) continue
        checked.add(link)

        const rect = link.getBoundingClientRect()
        if (rect.width === 0 || rect.height === 0) continue

        const cs = window.getComputedStyle(link)
        if (cs.display === 'none' || cs.visibility === 'hidden') continue

        // Check for non-color visual indicators
        const textDecoration = cs.textDecorationLine || cs.textDecoration || ''
        if (textDecoration.includes('underline')) continue
        if (cs.borderBottomWidth !== '0px' && cs.borderBottomStyle !== 'none' && cs.borderBottomStyle !== '') continue
        if (cs.outlineWidth !== '0px' && cs.outlineStyle !== 'none' && cs.outlineStyle !== '') continue

        // Exempt: link text IS the URL, email, or phone (SC 1.4.1 decision)
        const text = link.textContent.trim()
        if (/^https?:\/\//i.test(text)) continue
        if (/^[\w.!#$%&'*+/=?^_`{|}~-]+@[\w-]+\.[\w.-]+$/.test(text)) continue
        if (/^\+?[\d\s()./-]{7,20}$/.test(text)) continue

        const linkColor = parseRgb(cs.color)
        if (!linkColor) continue

        // Find the parent element's text color (the "surrounding text")
        let surroundingColor = null
        let el = link.parentElement
        while (el && el !== document.body) {
          const elCs = window.getComputedStyle(el)
          const parsed = parseRgb(elCs.color)
          if (parsed && (parsed.r !== linkColor.r || parsed.g !== linkColor.g || parsed.b !== linkColor.b)) {
            surroundingColor = parsed
            break
          }
          el = el.parentElement
        }

        if (!surroundingColor) continue // can't compare — skip

        const ratio = contrastRatio(linkColor, surroundingColor)
        const selector = link.id
          ? `#${link.id}`
          : `a[href="${(link.getAttribute('href') || '').slice(0, 60).replace(/"/g, '\\"')}"]`

        findings.push({
          selector,
          text:            text.slice(0, 80),
          linkColor:       cs.color,
          surroundingColor: window.getComputedStyle(link.parentElement || document.body).color,
          ratio:           +ratio.toFixed(2),
        })
      }
    }

    return findings
  })

  if (results.length === 0) return []

  const confirmed = results.filter(r => r.ratio < 3.0)
  const review    = results.filter(r => r.ratio >= 3.0)
  const output    = []

  if (confirmed.length > 0) {
    output.push({
      checkId:        'custom-link-color-only',
      sc:             '1.4.1',
      confidence:     'CONFIRMED_FAIL',
      failureBasis:   'F73',
      message:        `${confirmed.length} in-text link${confirmed.length > 1 ? 's use' : ' uses'} color as the only visual indicator with < 3:1 contrast from surrounding text.`,
      data:           { elements: confirmed },
      nodeCount:      confirmed.length,
      elementSnippet: confirmed[0].html || confirmed[0].selector,
    })
  }

  if (review.length > 0) {
    output.push({
      checkId:        'custom-link-color-only-borderline',
      sc:             '1.4.1',
      confidence:     'NEEDS_REVIEW',
      failureBasis:   'F73 — color-only with ≥ 3:1 contrast from surrounding text',
      message:        `${review.length} in-text link${review.length > 1 ? 's have' : ' has'} no underline — color-only with ≥ 3:1 contrast. Auditor must verify.`,
      data:           { elements: review },
      nodeCount:      review.length,
      elementSnippet: review[0].html || review[0].selector,
    })
  }

  return output
}
