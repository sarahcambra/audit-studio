/**
 * Custom check: SC 1.3.1 Structure Evidence + SC 2.4.6 Headings
 * Mode: EVIDENCE — produces structured data for auditor review
 *
 * Outputs:
 *   - Heading tree (h1–h6) with skipped levels flagged
 *   - Bullet-impersonators (text nodes starting with •, -, *) that aren't in <ul>/<ol>
 *   - Landmark structure overview
 */

export async function run(page) {
  const evidence = await page.evaluate(() => {
    // ── Heading tree ──────────────────────────────────────────────────────────
    const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'))
      .filter(h => {
        const cs = window.getComputedStyle(h)
        return cs.display !== 'none' && cs.visibility !== 'hidden' && h.textContent.trim()
      })
      .map(h => ({
        level:    parseInt(h.tagName[1]),
        text:     h.textContent.trim().slice(0, 120),
        selector: h.id ? `#${h.id}` : h.tagName.toLowerCase(),
      }))

    // Detect skipped heading levels
    const skips = []
    for (let i = 1; i < headings.length; i++) {
      const prev = headings[i - 1].level
      const curr = headings[i].level
      if (curr > prev + 1) {
        const h = headings[i]
        // Get actual heading element
        const headingEl = document.querySelectorAll('h1,h2,h3,h4,h5,h6')[i]
        let html = headingEl?.outerHTML || `h${curr}`
        if (html.length > 200) html = html.slice(0, 200) + '...'
        skips.push({ from: prev, to: curr, text: h.text.slice(0, 60), html })
      }
    }

    // ── Pseudo-lists (bullet imposters) ───────────────────────────────────────
    const BULLET_RE = /^[\s]*[•·▪▸►●○–—\-\*]\s+.{5,}/
    const pseudoLists = []
    const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
    let node
    while ((node = treeWalker.nextNode())) {
      const text = node.textContent.trim()
      if (!BULLET_RE.test(text)) continue
      const parent = node.parentElement
      if (!parent) continue
      if (parent.closest('ul, ol, menu')) continue // legitimate list
      const cs = window.getComputedStyle(parent)
      if (cs.display === 'none' || cs.visibility === 'hidden') continue
      let html = parent.outerHTML || parent.tagName.toLowerCase()
      if (html.length > 200) html = html.slice(0, 200) + '...'
      pseudoLists.push({
        text: text.slice(0, 80),
        tag:  parent.tagName.toLowerCase(),
        selector: parent.id ? `#${parent.id}` : parent.tagName.toLowerCase(),
        html,
      })
    }

    // ── Landmark summary ──────────────────────────────────────────────────────
    const LANDMARK_ROLES = ['main', 'navigation', 'banner', 'contentinfo', 'search', 'complementary', 'region', 'form']
    const landmarks = []
    for (const role of LANDMARK_ROLES) {
      const els = document.querySelectorAll(`[role="${role}"], ${role === 'navigation' ? 'nav' : role === 'banner' ? 'header' : role === 'contentinfo' ? 'footer' : role === 'main' ? 'main' : role}`)
      for (const el of els) {
        const label = el.getAttribute('aria-label') || el.getAttribute('aria-labelledby') || null
        landmarks.push({ role, hasLabel: !!label, label })
      }
    }

    // Multiple same-role landmarks without unique labels
    const unlabeledDuplicates = []
    for (const role of LANDMARK_ROLES) {
      const els = document.querySelectorAll(`[role="${role}"], ${role === 'navigation' ? 'nav' : role === 'banner' ? 'header' : role === 'contentinfo' ? 'footer' : role === 'main' ? 'main' : role}`)
      const matching = Array.from(els).filter(el => {
        const label = el.getAttribute('aria-label') || el.getAttribute('aria-labelledby')
        return !label
      })
      if (matching.length >= 2) {
        let html = matching[0].outerHTML || `<${matching[0].tagName.toLowerCase()}>`
        if (html.length > 200) html = html.slice(0, 200) + '...'
        const selector = matching[0].id ? `#${matching[0].id}` :
                        matching[0].getAttribute('role') ? `[role="${matching[0].getAttribute('role')}"]` :
                        matching[0].tagName.toLowerCase()
        unlabeledDuplicates.push({ role, count: matching.length, html, selector })
      }
    }

    return { headings, headingSkips: skips, pseudoLists, landmarks, unlabeledDuplicates }
  })

  const findings = []

  // Skipped heading levels → NEEDS_REVIEW
  if (evidence.headingSkips.length > 0) {
    findings.push({
      checkId:        'custom-heading-skip',
      sc:             '1.3.1',
      confidence:     'NEEDS_REVIEW',
      failureBasis:   'F2 — heading levels skipped (visual presentation not matching structure)',
      message:        `${evidence.headingSkips.length} skipped heading level${evidence.headingSkips.length > 1 ? 's' : ''} detected.`,
      data:           { skips: evidence.headingSkips, headings: evidence.headings },
      nodeCount:      evidence.headingSkips.length,
      elementSnippet: evidence.headingSkips[0].html || `h${evidence.headingSkips[0].to}`,
    })
  }

  // Pseudo-lists → NEEDS_REVIEW
  if (evidence.pseudoLists.length > 0) {
    findings.push({
      checkId:        'custom-pseudo-list',
      sc:             '1.3.1',
      confidence:     'NEEDS_REVIEW',
      failureBasis:   'F2 — text uses bullet characters but is not marked up as a list',
      message:        `${evidence.pseudoLists.length} text element${evidence.pseudoLists.length > 1 ? 's use' : ' uses'} bullet characters but are not inside <ul>/<ol>.`,
      data:           { elements: evidence.pseudoLists.slice(0, 20) },
      nodeCount:      evidence.pseudoLists.length,
      elementSnippet: evidence.pseudoLists[0].html || evidence.pseudoLists[0].selector,
    })
  }

  // Unlabeled duplicate landmarks → NEEDS_REVIEW
  if (evidence.unlabeledDuplicates.length > 0) {
    findings.push({
      checkId:        'custom-duplicate-landmark',
      sc:             '1.3.1',
      confidence:     'NEEDS_REVIEW',
      failureBasis:   'ARIA11 — multiple landmarks of same type require unique accessible names',
      message:        `${evidence.unlabeledDuplicates.length} landmark role${evidence.unlabeledDuplicates.length > 1 ? 's appear' : ' appears'} multiple times without unique aria-label.`,
      data:           { duplicates: evidence.unlabeledDuplicates, all: evidence.landmarks },
      nodeCount:      evidence.unlabeledDuplicates.length,
      elementSnippet: evidence.unlabeledDuplicates[0].html || `[role="${evidence.unlabeledDuplicates[0].role}"]`,
    })
  }

  return findings
}
