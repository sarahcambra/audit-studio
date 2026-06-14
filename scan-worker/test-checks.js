/**
 * Test runner for custom checks.
 * Creates a local HTML page with intentional accessibility issues,
 * runs all checks against it, and prints results.
 *
 * Usage: node test-checks.js
 */

import { chromium } from 'playwright'
import { createServer } from 'node:http'
import { runCustomChecks } from './scan-worker/index.js'

// ── Test page HTML (intentional failures) ─────────────────────────────────────
const TEST_HTML = `<!DOCTYPE html>
<html lang="xx-invalid">
<head>
  <meta charset="UTF-8">
  <title>Home</title>
  <style>
    body { font-family: sans-serif; margin: 40px; }
    /* Placeholder with low contrast */
    input::placeholder { color: #bbb; }
    /* Link in body text — no underline, color-only */
    p a { color: #aaa; text-decoration: none; }
    /* Input border — low contrast */
    input[type=text], textarea { border: 1px solid #ddd; padding: 8px; display: block; margin: 8px 0; }
    /* Fixed header */
    .fixed-header { position: fixed; top: 0; left: 0; right: 0; height: 60px; background: white; z-index: 100; border-bottom: 1px solid #eee; }
    body { padding-top: 80px; }
    /* Tiny button */
    .tiny-btn { width: 16px; height: 16px; font-size: 10px; display: inline-block; border: 1px solid #333; cursor: pointer; }
  </style>
</head>
<body>
  <div class="fixed-header">
    <a href="#main" id="skip">Skip to main content</a>
    My App Header
  </div>

  <main id="main" tabindex="-1">
    <h1>Welcome</h1>

    <!-- Heading skip: h1 → h3 -->
    <h3>Section Title</h3>

    <!-- Generic link text (no context) -->
    <p><a href="/page1">Click here</a> to learn about our product.</p>

    <!-- Link with color-only distinction (no underline) -->
    <p>You can read more <a href="/about">about us</a> on this page.</p>

    <!-- Form with accessibility issues -->
    <h3>Contact Form</h3>
    <form>
      <!-- Missing autocomplete on name field -->
      <label for="name">Your Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your full name">

      <!-- Invalid autocomplete value (F107) -->
      <label for="email">Email Address</label>
      <input type="email" id="email" name="email" autocomplete="e-mail" placeholder="your@email.com">

      <!-- Input with aria-label that doesn't contain visible label (F96) -->
      <label for="phone">Phone Number</label>
      <input type="tel" id="phone" name="phone" aria-label="Contact telephone" placeholder="555-1234" autocomplete="tel">

      <button type="submit">Send Message</button>
    </form>

    <!-- Image with no alt (F65) -->
    <img src="https://via.placeholder.com/100" width="100" height="100">
    <!-- Image with filename as alt (F30) -->
    <img src="/images/photo_2024.jpg" alt="photo_2024.jpg" width="100" height="100">

    <!-- Bullet impersonator (not in <ul>) -->
    <p>• First item that should be in a list</p>
    <p>• Second item that should be in a list</p>

    <!-- Two nav landmarks without labels -->
    <nav><a href="/">Home</a><a href="/about">About</a></nav>
    <nav><a href="/products">Products</a><a href="/contact">Contact</a></nav>

    <!-- Tiny target buttons close together -->
    <div>
      <button class="tiny-btn">+</button>
      <button class="tiny-btn">-</button>
    </div>

    <!-- Element with focus removed via outline:none and no replacement -->
    <button style="outline: none; box-shadow: none; border: none;">No Focus Ring</button>

  </main>
</body>
</html>`

// ── Start a local HTTP server serving the test page ───────────────────────────
function startServer() {
  return new Promise(resolve => {
    const server = createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(TEST_HTML)
    })
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address()
      resolve({ server, url: `http://127.0.0.1:${port}/` })
    })
  })
}

// ── Main test runner ──────────────────────────────────────────────────────────
async function main() {
  console.log('=== Custom Checks Test Runner ===\n')

  const { server, url } = await startServer()
  console.log(`Test page: ${url}\n`)

  const browser = await chromium.launch({ headless: true })
  try {
    const context = await browser.newContext()
    const page    = await context.newPage()

    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 })
    console.log(`Page loaded: "${await page.title()}"\n`)

    const findings = await runCustomChecks(page)

    console.log('\n=== RESULTS ===\n')

    if (findings.length === 0) {
      console.log('No findings — all checks passed.')
    } else {
      for (const f of findings) {
        const icon = f.confidence === 'CONFIRMED_FAIL' ? '✗' : '⚠'
        console.log(`${icon} [${f.confidence}] SC ${f.sc} — ${f.checkId}`)
        console.log(`  Basis: ${f.failureBasis}`)
        console.log(`  ${f.message}`)
        if (f.elementSnippet) console.log(`  Element: ${f.elementSnippet}`)
        console.log()
      }
    }

    const confirmed = findings.filter(f => f.confidence === 'CONFIRMED_FAIL').length
    const review    = findings.filter(f => f.confidence === 'NEEDS_REVIEW').length
    console.log(`=== SUMMARY: ${confirmed} confirmed fail(s), ${review} needs review ===`)

    // Verify expected findings
    console.log('\n=== EXPECTED vs ACTUAL ===')
    const expected = [
      'custom-lang-invalid',       // lang="xx-invalid"
      'custom-page-title',         // title="Home" (generic)
      'custom-placeholder-contrast', // #bbb placeholder
      'custom-autocomplete-invalid', // autocomplete="e-mail"
      'custom-autocomplete-missing', // name field missing autocomplete
      'custom-link-color-only',    // #aaa link no underline
      'custom-generic-link-text',  // "Click here" with context
      'custom-img-no-alt',         // img without alt
      'custom-img-bad-alt',        // filename alt
      'custom-heading-skip',       // h1 → h3
      'custom-pseudo-list',        // • bullet items in <p>
      'custom-duplicate-landmark', // two unlabeled <nav>
      'custom-target-size',        // tiny buttons
      'custom-label-in-name',      // aria-label "Contact telephone" ≠ "Phone Number"
    ]

    const foundIds = new Set(findings.map(f => f.checkId))
    let passed = 0, missed = 0
    for (const id of expected) {
      if (foundIds.has(id)) {
        console.log(`  ✓ ${id}`)
        passed++
      } else {
        console.log(`  ✗ MISSED: ${id}`)
        missed++
      }
    }
    console.log(`\n${passed}/${expected.length} expected findings detected.`)
    if (missed > 0) process.exit(1)

  } finally {
    await browser.close()
    server.close()
  }
}

main().catch(err => {
  console.error('Test failed:', err)
  process.exit(1)
})
