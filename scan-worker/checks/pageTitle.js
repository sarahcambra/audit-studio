/**
 * Custom check: SC 2.4.2 Page Titled
 * Failure basis: F25 — title does not identify page contents
 * Confidence: CONFIRMED_FAIL for empty/generic/URL titles, NEEDS_REVIEW for brand-only
 */

const GENERIC_TITLES = new Set([
  'home', 'page', 'untitled', 'new page', 'index', 'document',
  'welcome', 'default', 'loading...', 'loading', 'please wait',
])

export async function run(page) {
  const title = await page.title()
  const trimmed = title.trim()

  if (!trimmed) {
    return [{
      checkId:      'custom-page-title',
      sc:           '2.4.2',
      confidence:   'CONFIRMED_FAIL',
      failureBasis: 'F25',
      message:      'Page title is empty.',
      data:         { title: '', selector: 'title' },
      nodeCount:    1,
      elementSnippet: '<title></title>',
    }]
  }

  if (GENERIC_TITLES.has(trimmed.toLowerCase())) {
    return [{
      checkId:      'custom-page-title',
      sc:           '2.4.2',
      confidence:   'CONFIRMED_FAIL',
      failureBasis: 'F25',
      message:      `Page title "${trimmed}" is generic and does not identify the page contents.`,
      data:         { title: trimmed, selector: 'title' },
      nodeCount:    1,
      elementSnippet: `<title>${trimmed}</title>`,
    }]
  }

  if (/^https?:\/\//i.test(trimmed) || /^www\./i.test(trimmed)) {
    return [{
      checkId:      'custom-page-title',
      sc:           '2.4.2',
      confidence:   'CONFIRMED_FAIL',
      failureBasis: 'F25',
      message:      `Page title is a URL, not a description of the page contents.`,
      data:         { title: trimmed, selector: 'title' },
      nodeCount:    1,
      elementSnippet: `<title>${trimmed}</title>`,
    }]
  }

  // Brand-name-only heuristic: single word, short, no separator
  const hasSeparator = /[\|\-–—:·]/.test(trimmed)
  if (!hasSeparator && !trimmed.includes(' ') && trimmed.length < 24) {
    return [{
      checkId:      'custom-page-title',
      sc:           '2.4.2',
      confidence:   'NEEDS_REVIEW',
      failureBasis: 'F25',
      message:      `Page title "${trimmed}" may be brand-only without describing the specific page.`,
      data:         { title: trimmed, selector: 'title' },
      nodeCount:    1,
      elementSnippet: `<title>${trimmed}</title>`,
    }]
  }

  return [] // pass
}
