/**
 * axeRunner.js
 *
 * Server-side only — runs inside Vercel serverless functions (api/scan.js).
 * Never imported directly by the React frontend.
 *
 * Exports:
 *   runStaticScan    — full-page axe scan via Playwright
 *   runComponentScan — scoped to a CSS selector
 *   runFlowScan      — multi-step interaction then scan
 *   mapTagsToSC      — converts axe wcag tags → SC numbers ('wcag143' → '1.4.3')
 *   buildAxeTags     — builds the axe runOnly tags array for a given WCAG version/level
 */

import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'

// ─── Tag utilities (also used by tests) ──────────────────────────────────────

/**
 * Convert axe WCAG criterion tags to dotted SC strings.
 * 'wcag143'  → '1.4.3'
 * 'wcag2412' → '2.4.12'
 * Non-criterion tags (wcag2a, cat.*, best-practice) are ignored.
 *
 * @param {string[]} tags
 * @returns {string[]}
 */
export function mapTagsToSC(tags = []) {
  return tags
    .filter(t => /^wcag\d{3,4}$/.test(t))
    .map(t => {
      const digits = t.replace('wcag', '')
      if (digits.length === 3) {
        return `${digits[0]}.${digits[1]}.${digits[2]}`
      }
      // 4-digit: '2412' → '2.4.12'
      return `${digits[0]}.${digits[1]}.${digits.slice(2)}`
    })
}

/**
 * Build the axe runOnly tags array for a given WCAG version and level.
 * Always includes lower versions/levels (2.2 AA includes 2.0 A/AA + 2.1 A/AA).
 *
 * @param {string} wcagVersion  '2.1' | '2.2'
 * @param {string} level        'A' | 'AA' | 'AAA'
 * @returns {string[]}
 */
export function buildAxeTags(wcagVersion, level) {
  const tags = ['wcag2a']

  if (['AA', 'AAA'].includes(level)) {
    tags.push('wcag2aa')
  }
  if (level === 'AAA') {
    tags.push('wcag2aaa')
  }

  if (['2.1', '2.2'].includes(wcagVersion)) {
    tags.push('wcag21a')
    if (['AA', 'AAA'].includes(level)) tags.push('wcag21aa')
  }

  if (wcagVersion === '2.2') {
    if (['AA', 'AAA'].includes(level)) tags.push('wcag22aa')
  }

  return tags
}

// ─── Browser lifecycle helpers ────────────────────────────────────────────────

async function launchBrowser() {
  return chromium.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
    ],
  })
}

async function navigateTo(page, url, timeoutMs = 30000) {
  await page.goto(url, { waitUntil: 'networkidle', timeout: timeoutMs })
}

/**
 * Run axe on the current page state.
 *
 * @param {import('playwright').Page} page
 * @param {string[]} tags
 * @param {string|null} include  CSS selector to scope the scan
 */
async function runAxe(page, tags, include = null) {
  let builder = new AxeBuilder({ page }).withTags(tags)
  if (include) builder = builder.include(include)
  return builder.analyze()
}

// ─── Public scan functions ────────────────────────────────────────────────────

/**
 * Full-page axe scan.
 */
export async function runStaticScan({ url, wcagVersion, conformanceLevel }) {
  const tags    = buildAxeTags(wcagVersion, conformanceLevel)
  const browser = await launchBrowser()
  try {
    const page    = await browser.newPage()
    await navigateTo(page, url)
    const results = await runAxe(page, tags)
    return { ...results, url }
  } finally {
    await browser.close()
  }
}

/**
 * Component-scoped axe scan — scoped to a CSS selector.
 */
export async function runComponentScan({ url, selector, wcagVersion, conformanceLevel }) {
  const tags    = buildAxeTags(wcagVersion, conformanceLevel)
  const browser = await launchBrowser()
  try {
    const page = await browser.newPage()
    await navigateTo(page, url)
    await page.waitForSelector(selector, { timeout: 10000 }).catch(() => {})
    const results = await runAxe(page, tags, selector)
    return { ...results, url, selector }
  } finally {
    await browser.close()
  }
}

/**
 * Multi-step flow scan.
 *
 * Executes each step in order. Steps with scanAfter:true trigger an axe scan
 * at that point. All per-step results are merged and deduplicated.
 *
 * Step shape: { name, action, selector, value, waitFor, scanAfter }
 *
 * Supported actions:
 *   click | fill | select | hover | press | navigate | wait
 */
export async function runFlowScan({ url, steps, wcagVersion, conformanceLevel }) {
  const tags    = buildAxeTags(wcagVersion, conformanceLevel)
  const browser = await launchBrowser()
  const merged  = { violations: [], incomplete: [], passes: [], inapplicable: [] }

  try {
    const page = await browser.newPage()
    await navigateTo(page, url)

    // Baseline scan before any interaction
    mergeResults(merged, await runAxe(page, tags))

    for (const step of (steps ?? [])) {
      try {
        await executeStep(page, step)
      } catch (err) {
        console.warn(`flowScan: step "${step.name}" failed — ${err.message}`)
        continue
      }
      if (step.scanAfter) {
        mergeResults(merged, await runAxe(page, tags))
      }
    }

    deduplicateViolations(merged)
    return { ...merged, url, steps: steps?.length ?? 0 }
  } finally {
    await browser.close()
  }
}

// ─── Flow step executor ───────────────────────────────────────────────────────

async function executeStep(page, step) {
  const { action, selector, value, waitFor } = step

  switch (action) {
    case 'click':
      await page.waitForSelector(selector, { timeout: 8000 })
      await page.click(selector)
      break
    case 'fill':
      await page.waitForSelector(selector, { timeout: 8000 })
      await page.fill(selector, value ?? '')
      break
    case 'select':
      await page.waitForSelector(selector, { timeout: 8000 })
      await page.selectOption(selector, value ?? '')
      break
    case 'hover':
      await page.waitForSelector(selector, { timeout: 8000 })
      await page.hover(selector)
      break
    case 'press':
      await page.keyboard.press(value ?? 'Tab')
      break
    case 'navigate':
      await navigateTo(page, value)
      break
    case 'wait':
      await page.waitForSelector(value ?? selector, { timeout: 15000 })
      break
    default:
      console.warn(`flowScan: unknown action "${action}", skipping`)
  }

  if (waitFor) {
    await page.waitForSelector(waitFor, { timeout: 10000 }).catch(() => {})
  }
}

// ─── Result merge + dedup helpers ────────────────────────────────────────────

function mergeResults(merged, results) {
  merged.violations.push(...(results.violations ?? []))
  merged.incomplete.push(...(results.incomplete ?? []))

  for (const pass of (results.passes ?? [])) {
    if (!merged.passes.find(p => p.id === pass.id)) merged.passes.push(pass)
  }
  for (const item of (results.inapplicable ?? [])) {
    if (!merged.inapplicable.find(p => p.id === item.id)) merged.inapplicable.push(item)
  }
}

function deduplicateViolations(merged) {
  const seen = new Set()

  const dedup = arr => arr.filter(v => {
    const targets = v.nodes?.map(n => n.target?.join(',') ?? '').join('|') ?? ''
    const key = `${v.id}::${targets}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  merged.violations = dedup(merged.violations)
  merged.incomplete = dedup(merged.incomplete)
}
