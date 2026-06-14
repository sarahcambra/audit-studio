/**
 * Custom check: SC 2.5.8 Target Size (Minimum) — WCAG 2.2
 * Failure basis: W3C Understanding SC 2.5.8 — circle-intersection algorithm
 *
 * Algorithm (from W3C Understanding figures 6 & 7):
 * For each interactive target smaller than 24×24 CSS px:
 *   1. Draw a 24px-diameter circle centered on the target's bounding box center.
 *   2. For every other target: if that target's bounding box doesn't provide
 *      at least 24px of spacing in the direction of the undersized target's
 *      circle, the circles intersect → NEEDS_REVIEW.
 *
 * Exemptions per SC 2.5.8:
 *   - Inline targets (links in body text) — essential, size determined by text flow
 *   - Spacing achieved by other mechanism
 *
 * Confidence: NEEDS_REVIEW — no F-technique published yet. Algorithm is normative
 * but the "essential" exception requires auditor judgment.
 */

const CIRCLE_DIAMETER = 24

export async function run(page) {
  const targets = await page.evaluate(() => {
    const INTERACTIVE = 'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), [role="button"], [role="link"], [role="checkbox"], [role="radio"], [role="switch"]'

    return Array.from(document.querySelectorAll(INTERACTIVE))
      .filter(el => {
        const rect = el.getBoundingClientRect()
        const cs = window.getComputedStyle(el)
        return rect.width > 0 && rect.height > 0 &&
               cs.display !== 'none' && cs.visibility !== 'hidden'
      })
      .map(el => {
        const rect = el.getBoundingClientRect()
        const inBodyText = !!el.closest('p, li, td, th, article') &&
                           el.tagName === 'A' &&
                           (el.parentElement?.textContent?.trim().length ?? 0) > el.textContent.trim().length + 5

        return {
          selector:    el.id ? `#${el.id}` : el.tagName.toLowerCase(),
        html: el.outerHTML || el.tagName.toLowerCase(),
          tag:         el.tagName.toLowerCase(),
          text:        el.textContent.trim().slice(0, 60),
          x:           rect.left,
          y:           rect.top,
          w:           rect.width,
          h:           rect.height,
          centerX:     rect.left + rect.width / 2,
          centerY:     rect.top  + rect.height / 2,
          inBodyText,  // inline text links may be exempt
        }
      })
  })

  const RADIUS = CIRCLE_DIAMETER / 2
  const failing = []

  for (const target of targets) {
    // Skip targets that already meet 24×24
    if (target.w >= CIRCLE_DIAMETER && target.h >= CIRCLE_DIAMETER) continue
    // Skip inline text links (essential exception)
    if (target.inBodyText) continue

    // Check circle-intersection with every other target
    let intersects = false
    for (const other of targets) {
      if (other === target) continue

      // Distance between circle centers
      const dx = target.centerX - other.centerX
      const dy = target.centerY - other.centerY
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < CIRCLE_DIAMETER - 1) { // 1px tolerance
        intersects = true
        break
      }
    }

    if (intersects) {
      failing.push({
        selector: target.selector,
        text:     target.text,
        width:    +target.w.toFixed(1),
        height:   +target.h.toFixed(1),
      })
    }
  }

  if (failing.length === 0) return []

  return [{
    checkId:        'custom-target-size',
    sc:             '2.5.8',
    confidence:     'NEEDS_REVIEW',
    failureBasis:   'Understanding SC 2.5.8 circle-intersection algorithm',
    message:        `${failing.length} interactive target${failing.length > 1 ? 's are' : ' is'} smaller than 24×24px and their spacing circles intersect with adjacent targets.`,
    data:           { elements: failing },
    nodeCount:      failing.length,
    elementSnippet: failing[0].html || failing[0].selector,
  }]
}
