/**
 * Custom check: SC 2.4.7 Focus Visible
 * Failure basis:
 *   - F55: script removes focus when focus is received (blur on focus)
 *   - F78: CSS removes/hides the visual focus indicator
 *
 * Also flags SC 2.4.3 focus order issue:
 *   - F44: elements with positive tabindex (likely wrong order)
 */

export async function run(page) {
  const findings = []

  // ── Part 1: Detect positive tabindex (F44 / SC 2.4.3) ──────────────────────
  const positiveTabindex = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('[tabindex]'))
      .filter(el => {
        const ti = parseInt(el.getAttribute('tabindex'), 10)
        return ti > 0
      })
      .map(el => ({
        selector: el.id ? `#${el.id}` : el.tagName.toLowerCase() + (el.className ? `.${el.className.trim().split(/\s+/)[0]}` : ''),
        html: el.outerHTML || el.tagName.toLowerCase(),
        tabindex: parseInt(el.getAttribute('tabindex'), 10),
        tag:      el.tagName.toLowerCase(),
        text:     el.textContent.trim().slice(0, 60),
      }))
  })

  if (positiveTabindex.length > 0) {
    findings.push({
      checkId:        'custom-positive-tabindex',
      sc:             '2.4.3',
      confidence:     'NEEDS_REVIEW',
      failureBasis:   'F44 (positive tabindex almost always creates illogical tab order)',
      message:        `${positiveTabindex.length} element${positiveTabindex.length > 1 ? 's have' : ' has'} tabindex > 0, which likely disrupts reading/navigation order.`,
      data:           { elements: positiveTabindex },
      nodeCount:      positiveTabindex.length,
      elementSnippet: positiveTabindex[0].html || positiveTabindex[0].selector,
    })
  }

  // ── Part 2: Tab through focusable elements and check focus visibility ────────
  const focusFailures = []
  const MAX_ELEMENTS = 40 // cap to avoid very slow scans

  const focusableSelectors = [
    'a[href]', 'button:not([disabled])', 'input:not([disabled])',
    'select:not([disabled])', 'textarea:not([disabled])',
    '[tabindex="0"]',
  ].join(', ')

  const focusableCount = await page.evaluate(
    sel => document.querySelectorAll(sel).length,
    focusableSelectors
  )

  const limit = Math.min(focusableCount, MAX_ELEMENTS)

  for (let i = 0; i < limit; i++) {
    try {
      const result = await page.evaluate(({ sel, idx }) => {
        const els = Array.from(document.querySelectorAll(sel))
        const el = els[idx]
        if (!el) return null

        const rect = el.getBoundingClientRect()
        if (rect.width === 0 || rect.height === 0) return null

        const csBefore = window.getComputedStyle(el)
        const outlineBefore  = csBefore.outlineWidth
        const shadowBefore   = csBefore.boxShadow
        const borderBefore   = csBefore.border

        el.focus()

        const after   = document.activeElement
        if (after !== el) {
          // focus moved away — possible F55 (blur on focus)
          return {
            type:     'blur-on-focus',
            selector: el.id ? `#${el.id}` : el.tagName.toLowerCase(),
        html: el.outerHTML || el.tagName.toLowerCase(),
            tag:      el.tagName.toLowerCase(),
          }
        }

        const csAfter = window.getComputedStyle(el)
        const outlineAfter = csAfter.outlineWidth
        const shadowAfter  = csAfter.boxShadow
        const borderAfter  = csAfter.border

        const noOutlineChange = outlineBefore === outlineAfter
        const noShadowChange  = shadowBefore  === shadowAfter
        const noBorderChange  = borderBefore  === borderAfter
        const outlineZero     = outlineAfter === '0px' || outlineAfter === 'none'

        if (noOutlineChange && noShadowChange && noBorderChange && outlineZero) {
          return {
            type:     'no-focus-indicator',
            selector: el.id ? `#${el.id}` : el.tagName.toLowerCase(),
        html: el.outerHTML || el.tagName.toLowerCase(),
            tag:      el.tagName.toLowerCase(),
            text:     el.textContent.trim().slice(0, 60),
          }
        }

        return null
      }, { sel: focusableSelectors, idx: i })

      if (result) focusFailures.push(result)
    } catch {
      // element may have caused navigation or modal — stop tabbing
      break
    }
  }

  // Return to page top
  await page.evaluate(() => { if (document.activeElement) document.activeElement.blur() }).catch(() => {})

  const blurFailures      = focusFailures.filter(f => f.type === 'blur-on-focus')
  const noIndicatorFails  = focusFailures.filter(f => f.type === 'no-focus-indicator')

  if (blurFailures.length > 0) {
    findings.push({
      checkId:        'custom-focus-removed-on-focus',
      sc:             '2.4.7',
      confidence:     'CONFIRMED_FAIL',
      failureBasis:   'F55',
      message:        `${blurFailures.length} element${blurFailures.length > 1 ? 's remove' : ' removes'} focus when focus is received (blur called on focusin).`,
      data:           { elements: blurFailures },
      nodeCount:      blurFailures.length,
      elementSnippet: blurFailures[0].html || blurFailures[0].selector,
    })
  }

  if (noIndicatorFails.length > 0) {
    findings.push({
      checkId:        'custom-focus-not-visible',
      sc:             '2.4.7',
      confidence:     'CONFIRMED_FAIL',
      failureBasis:   'F78',
      message:        `${noIndicatorFails.length} element${noIndicatorFails.length > 1 ? 's show' : ' shows'} no visible focus indicator (outline:0 with no box-shadow or border change).`,
      data:           { elements: noIndicatorFails.slice(0, 20) }, // cap at 20
      nodeCount:      noIndicatorFails.length,
      elementSnippet: noIndicatorFails[0].html || noIndicatorFails[0].selector,
    })
  }

  return findings
}
