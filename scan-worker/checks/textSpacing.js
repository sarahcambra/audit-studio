/**
 * Custom check: SC 1.4.12 Text Spacing
 * Failure basis: W3C Understanding SC 1.4.12 — content clips/overlaps when
 * text spacing overrides are applied (same method as official W3C bookmarklet).
 *
 * Injected CSS:
 *   line-height: 1.5 !important
 *   letter-spacing: 0.12em !important
 *   word-spacing: 0.16em !important
 *   p { margin-bottom: 2em !important }
 */

const SPACING_CSS = `
*, *::before, *::after {
  line-height: 1.5 !important;
  letter-spacing: 0.12em !important;
  word-spacing: 0.16em !important;
}
p, li, dt, dd, label, caption, th, td {
  margin-bottom: 2em !important;
}
`

export async function run(page) {
  const findings = []

  // Snapshot text element bounding boxes before injection
  const before = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, label, button, a[href]'))
      .filter(el => {
        const rect = el.getBoundingClientRect()
        const cs = window.getComputedStyle(el)
        return rect.width > 0 && rect.height > 0 && cs.display !== 'none' && cs.visibility !== 'hidden'
      })
      .map(el => {
        const rect = el.getBoundingClientRect()
        return {
          tag:      el.tagName.toLowerCase(),
          text:     el.textContent.trim().slice(0, 60),
          scrollH:  el.scrollHeight,
          clientH:  el.clientHeight,
          scrollW:  el.scrollWidth,
          clientW:  el.clientWidth,
        }
      })
      .slice(0, 60)
  })

  // Inject spacing CSS
  const styleEl = await page.addStyleTag({ content: SPACING_CSS })
  await page.waitForTimeout(500)

  // Check for clipping and overflow after injection
  const after = await page.evaluate((beforeItems) => {
    const clipped = []
    const els = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, label, button, a[href]')
    const elArr = Array.from(els).filter(el => {
      const rect = el.getBoundingClientRect()
      const cs = window.getComputedStyle(el)
      return rect.width > 0 && rect.height > 0 && cs.display !== 'none' && cs.visibility !== 'hidden'
    })

    for (const el of elArr) {
      const cs = window.getComputedStyle(el)
      const overflowH = cs.overflow === 'hidden' || cs.overflowY === 'hidden'
      const overflowX = cs.overflow === 'hidden' || cs.overflowX === 'hidden'

      const isClippedV = overflowH && el.scrollHeight > el.clientHeight + 2
      const isClippedH = overflowX && el.scrollWidth  > el.clientWidth  + 2

      if (isClippedV || isClippedH) {
        let html = el.outerHTML || el.tagName.toLowerCase()
        if (html.length > 200) html = html.slice(0, 200) + '...'
        clipped.push({
          tag:  el.tagName.toLowerCase(),
          text: el.textContent.trim().slice(0, 60),
          clippedAxis: isClippedV ? 'vertical' : 'horizontal',
          html,
        })
      }
    }
    return clipped
  }, before)

  // Remove injected style
  await styleEl.evaluate(el => el.remove()).catch(() => {})
  await page.waitForTimeout(200)

  if (after.length === 0) return []

  return [{
    checkId:        'custom-text-spacing',
    sc:             '1.4.12',
    confidence:     'CONFIRMED_FAIL',
    failureBasis:   'Understanding SC 1.4.12 (W3C bookmarklet method)',
    message:        `${after.length} element${after.length > 1 ? 's clip' : ' clips'} text when text spacing overrides are applied.`,
    data:           { elements: after.slice(0, 20) },
    nodeCount:      after.length,
    elementSnippet: after[0].html || `<${after[0].tag}>`,

  }]
}
