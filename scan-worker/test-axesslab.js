import chromiumSparticuz from '@sparticuz/chromium'
import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'

async function launchBrowser() {
  console.log('[1] Launching browser...')
  const start = Date.now()
  const executablePath = await chromiumSparticuz.executablePath()
  console.log('[1] Chromium path:', executablePath)
  const browser = await chromium.launch({
    args: chromiumSparticuz.args,
    executablePath,
    headless: true,
  })
  console.log('[1] Browser launched in', Date.now() - start, 'ms')
  return browser
}

async function runScan() {
  const url = 'https://axesslab.com/sv/'
  console.log('\n=== SCAN START:', url, '===')
  const t0 = Date.now()

  let browser
  try {
    browser = await launchBrowser()

    console.log('[2] Creating context...')
    const context = await browser.newContext()
    console.log('[2] Context created')

    console.log('[3] Creating page...')
    const page = await context.newPage()
    console.log('[3] Page created')

    console.log('[4] Navigating to', url, 'with waitUntil: networkidle...')
    const navStart = Date.now()
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
    console.log('[4] Navigation done in', Date.now() - navStart, 'ms')

    console.log('[5] Running axe-core...')
    const axeStart = Date.now()
    const builder = new AxeBuilder({ page }).withTags(['best-practice', 'wcag2a', 'wcag2aa'])
    const result = await builder.analyze()
    console.log('[5] Axe done in', Date.now() - axeStart, 'ms')
    console.log('[5] Violations:', result.violations.length)
    console.log('[5] Incomplete:', result.incomplete.length)
    if (result.violations.length > 0) {
      console.log('[5] First violation:', result.violations[0].id, '-', result.violations[0].description)
    }

    console.log('[6] Taking screenshot...')
    const ssStart = Date.now()
    try {
      await page.screenshot({ type: 'png', fullPage: false })
      console.log('[6] Screenshot done in', Date.now() - ssStart, 'ms')
    } catch (e) {
      console.log('[6] Screenshot failed:', e.message)
    }

    console.log('\n=== SCAN COMPLETE in', Date.now() - t0, 'ms ===')
    return result

  } catch (err) {
    console.error('\n!!! SCAN FAILED:', err.name, '-', err.message)
    if (err.stack) console.error(err.stack.split('\n').slice(0, 5).join('\n'))
    throw err
  } finally {
    if (browser) {
      console.log('[7] Closing browser...')
      await browser.close()
      console.log('[7] Browser closed')
    }
  }
}

runScan().then(() => {
  console.log('Exiting cleanly')
  process.exit(0)
}).catch((err) => {
  console.error('Fatal:', err.message)
  process.exit(1)
})
