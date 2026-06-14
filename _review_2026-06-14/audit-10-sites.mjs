/**
 * audit-10-sites.mjs — LIVE accessibility scan of 10 real sites
 * ----------------------------------------------------------------
 * Mirrors Audit Studio's scan-worker: playwright-extra-style launch +
 * @axe-core/playwright, same WCAG tag set. Run this on any machine where
 * Playwright + Chromium work (your laptop, or the GCE scan-worker host).
 *
 *   cd /path/to/auditV2
 *   npm i -D @axe-core/playwright playwright   # already in devDependencies
 *   npx playwright install chromium
 *   node _review_2026-06-14/audit-10-sites.mjs
 *
 * Output: writes live-results.json and prints a summary table.
 *
 * NOTE: This is the real, live counterpart to the sandbox fixture scan.
 * Live runs ALSO catch color-contrast, target-size, focus and other
 * render-dependent rules that a static jsdom scan cannot evaluate, so
 * expect HIGHER violation counts than the fixture demonstration.
 */
import { chromium } from 'playwright'
import { AxeBuilder } from '@axe-core/playwright'
import { writeFileSync } from 'fs'

// 10 sites chosen across content types most likely to surface WCAG issues.
// Swap any URL freely — the harness is content-agnostic.
const SITES = [
  { type: 'E-commerce — catalog',         url: 'https://www.example-shop.com' },
  { type: 'News / media article',         url: 'https://www.example-news.com' },
  { type: 'Government / public form',     url: 'https://www.example-gov.org' },
  { type: 'Video / streaming',            url: 'https://www.example-video.com' },
  { type: 'Blog + comment form',          url: 'https://www.example-blog.com' },
  { type: 'SaaS dashboard / data table',  url: 'https://www.example-app.com' },
  { type: 'Restaurant / hospitality',     url: 'https://www.example-restaurant.com' },
  { type: 'Travel / booking',             url: 'https://www.example-travel.com' },
  { type: 'Social feed',                  url: 'https://www.example-social.com' },
  { type: 'University / education',       url: 'https://www.example-edu.edu' },
]

const TAGS = ['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa','best-practice']

const browser = await chromium.launch({ headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] })
const results = []

for (const site of SITES) {
  const context = await browser.newContext({ viewport: { width: 1365, height: 900 }, locale: 'en-US' })
  const page = await context.newPage()
  try {
    await page.goto(site.url, { waitUntil: 'networkidle', timeout: 60_000 }).catch(() => {})
    await page.waitForTimeout(3000) // hydration settle (matches scan-worker)
    const r = await new AxeBuilder({ page }).withTags(TAGS).analyze()
    const byImpact = { critical: 0, serious: 0, moderate: 0, minor: 0 }
    for (const v of r.violations) for (const n of v.nodes) byImpact[v.impact] = (byImpact[v.impact]||0)+1
    results.push({
      ...site,
      rulesFailed: r.violations.length,
      nodes: r.violations.reduce((a,v)=>a+v.nodes.length,0),
      byImpact,
      rules: r.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.length, help: v.help })),
    })
    console.log(`✓ ${site.type}: ${r.violations.length} rules, ${results.at(-1).nodes} elements`)
  } catch (e) {
    results.push({ ...site, error: e.message })
    console.log(`✗ ${site.type}: ${e.message}`)
  } finally {
    await context.close()
  }
}

await browser.close()
writeFileSync(new URL('./live-results.json', import.meta.url), JSON.stringify(results, null, 2))
console.log('\nWrote live-results.json')
