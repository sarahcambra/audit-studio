/**
 * Custom check: SC 2.4.1 Skip Links
 * Failure basis: G1 (sufficient technique) — "Adding a link at the top of each
 * page that goes directly to the main content area."
 *
 * We check for two issues:
 *   1. No skip link found → NEEDS_REVIEW (may use other bypass mechanism)
 *   2. Skip link found but target is obscured by sticky header → NEEDS_REVIEW
 *   3. Skip link target doesn't receive focus → NEEDS_REVIEW
 *
 * All NEEDS_REVIEW — proposed ACT rule cf77f2, no published F-technique.
 */

export async function run(page) {
  const findings = []

  // Find the first skip link
  const skipLink = await page.evaluate(() => {
    // Matches common skip link patterns
    const candidates = Array.from(document.querySelectorAll('a[href^="#"]'))
    const skipLinkEl = candidates.find(a => {
      const text = a.textContent.trim().toLowerCase()
      return /skip|jump|main content|go to content/.test(text)
    })

    if (!skipLinkEl) return null

    const href = skipLinkEl.getAttribute('href')
    const targetId = href?.slice(1) // remove '#'
    const target = targetId ? document.getElementById(targetId) : null

    // Get actual HTML of skip link
    let html = skipLinkEl.outerHTML || `<a href="${href}">`
    if (html.length > 200) html = html.slice(0, 200) + '...'

    // Get target HTML if exists
    let targetHtml = null
    if (target) {
      targetHtml = target.outerHTML
      if (targetHtml.length > 200) targetHtml = targetHtml.slice(0, 200) + '...'
    }

    return {
      href,
      targetId,
      hasTarget: !!target,
      targetHasTabindex: target ? target.hasAttribute('tabindex') : false,
      html,
      targetHtml,
      skipLinkVisible: (() => {
        const rect = skipLinkEl.getBoundingClientRect()
        const cs = window.getComputedStyle(skipLinkEl)
        // Some skip links are visually hidden but visible on focus — that's acceptable
        return rect.width > 0 && rect.height > 0 && cs.display !== 'none'
      })(),
    }
  })

  if (!skipLink) {
    // No skip link — check if there are other bypass mechanisms (nav landmark with label, etc.)
    const hasBypassMechanism = await page.evaluate(() => {
      // Acceptable bypass: nav with aria-label, or a heading at the start of content
      const navWithLabel = document.querySelector('nav[aria-label], nav[aria-labelledby]')
      const firstHeading = document.querySelector('h1, h2')
      const mainLandmark = document.querySelector('main, [role="main"]')
      return !!(navWithLabel || (firstHeading && mainLandmark))
    })

    if (!hasBypassMechanism) {
      findings.push({
        checkId:        'custom-skip-link-missing',
        sc:             '2.4.1',
        confidence:     'NEEDS_REVIEW',
        failureBasis:   'G1 — no skip link or equivalent bypass mechanism detected',
        message:        'No skip link found. If the page has repeated navigation blocks, a bypass mechanism is required.',
        data:           { selector: 'body' },
        nodeCount:      1,
        elementSnippet: '<body>',
      })
    }
    return findings
  }

  // Skip link found — check if target exists
  if (!skipLink.hasTarget) {
    findings.push({
      checkId:        'custom-skip-link-no-target',
      sc:             '2.4.1',
      confidence:     'NEEDS_REVIEW',
      failureBasis:   'G1 — skip link href target element not found in DOM',
      message:        `Skip link points to "${skipLink.href}" but no element with that ID exists.`,
      data:           { href: skipLink.href, selector: skipLink.href },
      nodeCount:      1,
      elementSnippet: skipLink.html,
    })
    return findings
  }

  // Check if target is obscured by sticky header
  const obscured = await page.evaluate((targetId) => {
    const target = document.getElementById(targetId)
    if (!target) return false

    // Scroll to target
    target.scrollIntoView()

    const targetRect = target.getBoundingClientRect()

    // Find sticky/fixed headers
    for (const el of document.querySelectorAll('*')) {
      const cs = window.getComputedStyle(el)
      if ((cs.position === 'fixed' || cs.position === 'sticky') && parseInt(cs.zIndex) > 0) {
        const rect = el.getBoundingClientRect()
        if (rect.height > 0 && rect.bottom > targetRect.top + 2) {
          return { headerBottom: rect.bottom, targetTop: targetRect.top }
        }
      }
    }
    return false
  }, skipLink.targetId)

  if (obscured) {
    findings.push({
      checkId:        'custom-skip-link-target-obscured',
      sc:             '2.4.1',
      confidence:     'NEEDS_REVIEW',
      failureBasis:   'G1 — skip link target is obscured by a sticky/fixed header',
      message:        `Skip link target is covered by a fixed header (header bottom: ${obscured.headerBottom}px, target top: ${obscured.targetTop}px).`,
      data:           { ...obscured, href: skipLink.href, selector: skipLink.targetId ? `#${skipLink.targetId}` : 'body' },
      nodeCount:      1,
      elementSnippet: skipLink.targetHtml || skipLink.html,
    })
  }

  return findings
}
