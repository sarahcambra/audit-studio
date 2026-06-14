/**
 * Custom check: SC 1.4.10 Reflow
 * Failure basis: F102 — content disappears or horizontal scroll required at 320px
 *
 * Two-part test:
 *   1. Horizontal scrollbar at 320px viewport → CONFIRMED FAIL
 *   2. Visible text at desktop (1280px) gone at 320px with no disclosure → CONFIRMED FAIL
 */

function generateSelector(el) {
  // Try to build a good CSS selector
  if (el.id) return `#${el.id}`

  const tag = el.tagName.toLowerCase()

  // Try with unique class
  if (el.className) {
    const classes = el.className.split(' ').filter(c => c && !c.match(/^\d/))
    if (classes.length > 0) {
      const classSelector = `.${classes.join('.')}`
      // Check if this selector is unique enough
      if (document.querySelectorAll(classSelector).length === 1) {
        return classSelector
      }
    }
  }

  // Try with parent context
  let parent = el.parentElement
  let parentSelector = ''
  let depth = 0
  while (parent && depth < 3) {
    if (parent.id) {
      parentSelector = `#${parent.id} > `
      break
    }
    if (parent.className) {
      const parentClasses = parent.className.split(' ').filter(c => c && !c.match(/^\d/))
      if (parentClasses.length > 0) {
        parentSelector = `.${parentClasses[0]} > `
        break
      }
    }
    parent = parent.parentElement
    depth++
  }

  // Try nth-of-type
  const siblings = Array.from(el.parentElement?.children || []).filter(
    child => child.tagName === el.tagName
  )
  if (siblings.length > 1) {
    const index = siblings.indexOf(el) + 1
    return `${parentSelector}${tag}:nth-of-type(${index})`
  }

  return parentSelector + tag
}

export async function run(page) {
  const findings = []
  const originalViewport = page.viewportSize() || { width: 1280, height: 800 }

  // ── 1. Snapshot visible text at desktop width ──────────────────────────────
  await page.setViewportSize({ width: 1280, height: 800 })
  await page.waitForTimeout(300)

  const desktopElements = await page.evaluate(() => {
    const elements = document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,th,td,label,button,a[href],div,span')
    return Array.from(elements)
      .filter(el => {
        const rect = el.getBoundingClientRect()
        const cs = window.getComputedStyle(el)
        return rect.width > 0 && rect.height > 0 &&
               cs.display !== 'none' && cs.visibility !== 'hidden'
      })
      .map(el => ({
        text: el.textContent.trim().slice(0, 100),
        tag: el.tagName.toLowerCase(),
        id: el.id,
        className: el.className,
      }))
      .filter(e => e.text.length > 10) // Need substantial text to match
      .slice(0, 30) // Check first 30 significant elements
  })

  // ── 2. Switch to 320px and check ──────────────────────────────────────────
  await page.setViewportSize({ width: 320, height: 600 })
  await page.waitForTimeout(400)

  // Check horizontal scrollbar
  const hasHorizontalScroll = await page.evaluate(() => {
    return document.documentElement.scrollWidth > 320 + 2
  })

  if (hasHorizontalScroll) {
    findings.push({
      checkId: 'custom-reflow-horizontal-scroll',
      sc: '1.4.10',
      confidence: 'CONFIRMED_FAIL',
      failureBasis: 'F102',
      message: 'Page requires horizontal scrolling at 320px viewport width.',
      data: {
        scrollWidth: await page.evaluate(() => document.documentElement.scrollWidth),
        selector: 'html'
      },
      nodeCount: 1,
      elementSnippet: '<html>',
    })
  }

  // Check for disappeared content
  const disappeared = await page.evaluate((desktopElements) => {
    const gone = []

    for (const desktopEl of desktopElements) {
      // Try to find the element by text content
      const allElements = document.querySelectorAll('*')
      let match = null

      for (const el of allElements) {
        const text = el.textContent.trim()
        // Match by exact text or substantial portion
        if (text === desktopEl.text || text.startsWith(desktopEl.text.slice(0, 50))) {
          // Make sure it's the same tag type
          if (el.tagName.toLowerCase() === desktopEl.tag) {
            match = el
            break
          }
        }
      }

      if (!match) {
        // Element disappeared - find the original from desktop
        continue
      }

      const rect = match.getBoundingClientRect()
      const cs = window.getComputedStyle(match)
      const isGone = rect.width === 0 || rect.height === 0 ||
                    cs.display === 'none' || cs.visibility === 'hidden'

      if (!isGone) continue

      // Check if there's a disclosure toggle nearby (valid hiding)
      const parent = match.closest('details, [aria-expanded], .accordion, .collapsible')
      if (parent) continue

      // Generate a selector for this element
      function makeSelector(el) {
        if (el.id) return `#${el.id}`

        const tag = el.tagName.toLowerCase()

        // Try with class
        if (el.className) {
          const classes = el.className.split(' ').filter(c => c && !c.match(/^\d/))
          if (classes.length > 0) {
            const classSelector = `.${classes.join('.')}`
            if (document.querySelectorAll(classSelector).length <= 3) {
              return classSelector
            }
          }
        }

        // Try with parent context
        let selector = tag
        let parent = el.parentElement
        let depth = 0
        while (parent && depth < 2) {
          const parentTag = parent.tagName.toLowerCase()
          if (parent.id) {
            selector = `#${parent.id} > ${selector}`
            break
          }
          if (parent.className) {
            const parentClasses = parent.className.split(' ').filter(c => c && !c.match(/^\d/))
            if (parentClasses.length > 0) {
              selector = `.${parentClasses[0]} > ${selector}`
              break
            }
          }
          selector = `${parentTag} > ${selector}`
          parent = parent.parentElement
          depth++
        }

        // Add nth-of-type if needed
        const siblings = Array.from(el.parentElement?.children || []).filter(
          child => child.tagName === el.tagName
        )
        if (siblings.length > 1) {
          const index = siblings.indexOf(el) + 1
          selector = `${selector}:nth-of-type(${index})`
        }

        return selector
      }

      const selector = makeSelector(match)

      // Get the HTML
      let html = match.outerHTML
      if (html.length > 300) {
        // Truncate but preserve tag structure
        html = html.slice(0, 300) + '...'
      }

      // Get visible text that disappeared
      const visibleText = desktopEl.text.slice(0, 80)

      gone.push({
        text: visibleText,
        tag: desktopEl.tag,
        selector: selector,
        html: html,
        id: desktopEl.id,
        className: desktopEl.className
      })
    }

    return gone
  }, desktopElements)

  if (disappeared.length > 0) {
    // Build a detailed message showing what disappeared
    const elementList = disappeared.slice(0, 5).map(d =>
      `"${d.text.slice(0, 40)}${d.text.length > 40 ? '...' : ''}" (${d.tag})`
    ).join(', ')

    findings.push({
      checkId: 'custom-reflow-content-lost',
      sc: '1.4.10',
      confidence: 'CONFIRMED_FAIL',
      failureBasis: 'F102',
      message: `${disappeared.length} content element${disappeared.length > 1 ? 's' : ''} disappeared at 320px: ${elementList}${disappeared.length > 5 ? ` and ${disappeared.length - 5} more` : ''}.`,
      data: { elements: disappeared },
      nodeCount: disappeared.length,
      elementSnippet: disappeared[0].html || `<${disappeared[0].tag}>`,
    })
  }

  // Restore viewport
  await page.setViewportSize(originalViewport).catch(() => {})

  return findings
}
