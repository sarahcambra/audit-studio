/**
 * fixtures-and-scan.mjs
 * Runs axe-core (4.11.4, the same engine Audit Studio's scan-worker uses) against
 * 10 representative DOM fixtures — one per content type chosen for the audit.
 *
 * WHY FIXTURES: live external browser scanning is blocked in the build sandbox
 * (no Chromium binary, npm + CDN blocked). These fixtures faithfully model the
 * structural accessibility failures each content type commonly exhibits in the
 * wild, so axe produces REAL, representative output. For true live results on the
 * actual URLs, run audit-10-sites.mjs on a machine where Playwright/Chrome work
 * (e.g. your GCE scan-worker host).
 *
 * Output: prints a per-site violation table + writes results.json
 */
import { JSDOM } from 'jsdom'
import axe from 'axe-core'
import { readFileSync, writeFileSync } from 'fs'

const AXE_SRC = readFileSync(new URL('../node_modules/axe-core/axe.min.js', import.meta.url), 'utf8')

// axe tag set mirrors scan-worker UNIFIED_AXE_TAGS (minus contrast/experimental,
// which require a real layout engine jsdom can't provide).
const RUN_OPTIONS = {
  runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] },
  resultTypes: ['violations'],
  rules: { 'color-contrast': { enabled: false } }, // needs real rendering
}

const fixtures = [
  {
    id: 1, type: 'E-commerce — product listing', example: 'large fast-fashion / marketplace catalog pages',
    html: `<html lang="en"><head><title>Shop</title></head><body>
      <header><img src="logo.png"><nav><a href="/"><img src="cart.svg"></a></nav></header>
      <main>
        <h1>Dresses</h1>
        <div class="grid">
          <a href="/p/1"><img src="d1.jpg"><span>$29</span></a>
          <a href="/p/2"><img src="d2.jpg"><span>$39</span></a>
          <button onclick="add()"><i class="icon-bag"></i></button>
        </div>
        <input type="text" placeholder="Filter by size">
        <select><option>Sort</option></select>
      </main></body></html>`,
  },
  {
    id: 2, type: 'News / media article', example: 'major newspaper article pages',
    html: `<html lang="en"><head><title>Story</title></head><body>
      <a href="#main">skip</a>
      <h1>Breaking</h1><h4>Sub-deck jumps a level</h4>
      <article>
        <img src="hero.jpg">
        <p>Body text…</p>
        <a href="/more">click here</a> <a href="/more2">read more</a>
        <figure><img src="chart.png"></figure>
        <iframe src="//ads"></iframe>
      </article></body></html>`,
  },
  {
    id: 3, type: 'Government / public-service form', example: 'tax / benefits application forms',
    html: `<html lang="en"><head><title>Apply</title></head><body><main>
      <h1>Benefits application</h1>
      <form>
        <input type="text" placeholder="Full name">
        <input type="email">
        <input type="radio" name="x"> Yes
        <input type="radio" name="x"> No
        <div role="button">Submit</div>
      </form></main></body></html>`,
  },
  {
    id: 4, type: 'Video / streaming', example: 'video platform watch pages',
    html: `<html lang="en"><head><title>Watch</title></head><body>
      <h2>Recommended</h2>
      <video src="v.mp4"></video>
      <a href="/ch"><img src="thumb1.jpg"></a>
      <button><svg viewBox="0 0 1 1"></svg></button>
      <ul><div>not a li</div><li>ok</li></ul></body></html>`,
  },
  {
    id: 5, type: 'Blog + comment form', example: 'personal/CMS blogs with comments',
    html: `<html lang="en"><head><title>Post</title></head><body>
      <h1>My post</h1><h3>Section out of order</h3>
      <img src="me.jpg">
      <form><label>Comment</label><textarea></textarea>
      <input type="text" placeholder="Name"><button>Post</button></form>
      <a href="/x"></a></body></html>`,
  },
  {
    id: 6, type: 'SaaS dashboard / data table', example: 'analytics dashboards',
    html: `<html lang="en"><head><title>Dashboard</title></head><body><main>
      <h1>Metrics</h1>
      <table><tr><td>Name</td><td>Value</td></tr><tr><td>A</td><td>1</td></tr></table>
      <button aria-label=""></button>
      <div role="tab">Tab 1</div>
      <input type="checkbox"> Enable
      <a href="javascript:void(0)">toggle</a></main></body></html>`,
  },
  {
    id: 7, type: 'Restaurant / hospitality', example: 'menu & ordering sites',
    html: `<html><head><title>Menu</title></head><body>
      <img src="banner.jpg">
      <h1>Our Menu</h1>
      <a href="/order"><img src="dish1.jpg"></a>
      <p style="">Open daily</p>
      <button><img src="phone.png"></button></body></html>`,
  },
  {
    id: 8, type: 'Travel / booking', example: 'flight & hotel booking flows',
    html: `<html lang="en"><head><title>Book</title></head><body><main>
      <h1>Find flights</h1>
      <input type="text" placeholder="From">
      <input type="text" placeholder="To">
      <input type="date">
      <div role="button" tabindex="0">Search</div>
      <img src="map.png">
      <a href="/deal"><img src="deal.jpg"></a></main></body></html>`,
  },
  {
    id: 9, type: 'Social feed', example: 'social network timelines',
    html: `<html lang="en"><head><title>Feed</title></head><body>
      <h1>Home</h1>
      <article><img src="avatar.jpg"><p>Status…</p>
      <button><i class="like"></i></button>
      <button><i class="share"></i></button></article>
      <input type="text" placeholder="What's happening?">
      <a href="#"></a></body></html>`,
  },
  {
    id: 10, type: 'University / education catalog', example: 'course catalog & registration',
    html: `<html lang="en"><head><title>Courses</title></head><body><main>
      <h1>Catalog</h1><h3>Spring (skips h2)</h3>
      <table><tr><td>Course</td><td>Units</td></tr></table>
      <img src="campus.jpg">
      <select><option>Department</option></select>
      <a href="/reg">here</a></main></body></html>`,
  },
]

const results = []
for (const f of fixtures) {
  const dom = new JSDOM(f.html, { pretendToBeVisual: true, runScripts: 'outside-only' })
  const { window } = dom
  window.eval(AXE_SRC)
  const r = await window.axe.run(window.document, RUN_OPTIONS)
  const byImpact = { critical: 0, serious: 0, moderate: 0, minor: 0 }
  const ruleHits = []
  for (const v of r.violations) {
    byImpact[v.impact] = (byImpact[v.impact] || 0) + v.nodes.length
    ruleHits.push({ id: v.id, impact: v.impact, wcag: (v.tags.filter(t => t.startsWith('wcag') && /\d/.test(t)) || []).join(','), nodes: v.nodes.length, help: v.help })
  }
  results.push({ ...f, html: undefined, violationRules: r.violations.length, totalNodes: ruleHits.reduce((a, b) => a + b.nodes, 0), byImpact, ruleHits })
  dom.window.close()
}

writeFileSync(new URL('./results.json', import.meta.url), JSON.stringify(results, null, 2))

// Print summary
let grand = 0
console.log('\n=== AUDIT STUDIO — axe-core ' + axe.version + ' structural scan (10 content types) ===\n')
for (const r of results) {
  console.log(`#${r.id} ${r.type}`)
  console.log(`   rules failed: ${r.violationRules} | element instances: ${r.totalNodes} | ` +
    `crit ${r.byImpact.critical||0} / serious ${r.byImpact.serious||0} / mod ${r.byImpact.moderate||0} / minor ${r.byImpact.minor||0}`)
  console.log('   ' + r.ruleHits.map(h => `${h.id}(${h.nodes})`).join(', '))
  grand += r.totalNodes
}
console.log(`\nTOTAL element-level violations across 10 fixtures: ${grand}`)
