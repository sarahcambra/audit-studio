/**
 * Custom check: SC 1.3.4 Orientation
 * Failure basis:
 *   - F97: content locked to one orientation via CSS/JS
 *   - F100: message shown asking user to reorient device
 *
 * Strategy: set viewport to portrait (768×1024) and landscape (1024×768).
 * In each orientation check if:
 *   1. Body/main content is hidden/empty → F97 (CSS lock)
 *   2. Visible text matches "rotate your device" pattern → F100 (rotate message)
 */

const ROTATE_PATTERNS = [
  /rotate your (device|phone|screen)/i,
  /turn your (device|phone|screen)/i,
  /landscape (only|mode|view)/i,
  /portrait (only|mode|view)/i,
  /please rotate/i,
  /best viewed in (landscape|portrait)/i,
  /switch to (landscape|portrait)/i,
]

export async function run(page) {
  const findings = []
  const originalViewport = page.viewportSize()

  for (const [label, w, h] of [['portrait', 768, 1024], ['landscape', 1024, 768]]) {
    try {
      await page.setViewportSize({ width: w, height: h })
      await page.waitForTimeout(300)

      // Check for rotate/reorient message (F100)
      const rotateCheck = await page.evaluate((patterns) => {
        const body = document.body
        // Check for rotate message in body text
        const bodyText = body.innerText.slice(0, 2000)
        const rotateMatch = patterns.some(p => p.test(bodyText))
        if (rotateMatch) {
          // Try to find the rotate message element
          const els = Array.from(document.querySelectorAll('div, p, h1, h2, h3, span'))
          const msgEl = els.find(el => /rotate|turn.*device|landscape|portrait/i.test(el.textContent))
          let html = msgEl?.outerHTML || '<body>'
          if (html.length > 200) html = html.slice(0, 200) + '...'
          return { found: true, html, text: bodyText.slice(0, 200) }
        }
        return { found: false }
      }, ROTATE_PATTERNS)

      if (rotateCheck.found) {
        findings.push({
          checkId:        'custom-orientation-rotate-message',
          sc:             '1.3.4',
          confidence:     'CONFIRMED_FAIL',
          failureBasis:   'F100',
          message:        `Page shows a "rotate your device" message in ${label} orientation.`,
          data:           { orientation: label, matchedText: rotateCheck.text, selector: 'body' },
          nodeCount:      1,
          elementSnippet: rotateCheck.html,
        })
      }

      // Check if content is hidden/locked (F97)
      const contentGone = await page.evaluate(() => {
        const main = document.querySelector('main, [role="main"], #main, #content, .content, body')
        if (!main) return null
        const cs = window.getComputedStyle(main)
        if (cs.display === 'none' || cs.visibility === 'hidden') {
          let html = main.outerHTML || '<body>'
          if (html.length > 200) html = html.slice(0, 200) + '...'
          return { found: true, html }
        }
        // Check for transform rotate on body
        const body = document.body
        const bcs = window.getComputedStyle(body)
        if (bcs.transform && bcs.transform !== 'none' && bcs.transform.includes('rotate')) {
          let html = body.outerHTML || '<body>'
          if (html.length > 200) html = html.slice(0, 200) + '...'
          return { found: true, html }
        }
        return null
      })

      if (contentGone && !rotateCheck.found) {
        findings.push({
          checkId:        'custom-orientation-locked',
          sc:             '1.3.4',
          confidence:     'CONFIRMED_FAIL',
          failureBasis:   'F97',
          message:        `Content appears locked — main content is hidden in ${label} orientation.`,
          data:           { orientation: label, selector: 'main, [role="main"], body' },
          nodeCount:      1,
          elementSnippet: contentGone.html,
        })
      }
    } catch {
      // viewport resize failed — skip this orientation
    }
  }

  // Restore original viewport
  if (originalViewport) {
    await page.setViewportSize(originalViewport).catch(() => {})
  }

  return findings
}
