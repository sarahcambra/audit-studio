# Audit Studio — Scan Worker Fix Plan (Complete)

## Context

Audit Studio is a React 19 + Vite WCAG accessibility auditing tool with:
- Frontend: React → Vercel
- Auth + DB: Supabase (Postgres, OAuth)
- API: Vercel serverless (`api/scan.js`)
- Scan worker: Node.js + Express + Playwright + axe-core → Railway (`railway up`)

**The problem:** Scans intermittently hang forever. Some sites (svt.se, blt.se, zara.com) deadlock Chromium, blocking all subsequent scans.

**Symptom-level bugs already fixed (do NOT re-fix):**
- `headless: chromiumSparticuz.headless` → `headless: true`
- Added `browser.newContext()` before `browser.newPage()`
- Changed `waitUntil: 'networkidle'` → `'domcontentloaded'`
- Removed non-existent `page_language` column from `scan_jobs` update
- Replaced `.catch()` on Supabase queries with `.then(null, () => {})`

**Old tool reference:** `/Users/sarah/Audit tool/audit-engine/` — this tool successfully scanned svt.se, blt.se, zara.com, wikifunctions.org without hangs.

---

## Complete Feature List from Old Tool

The old tool (`/Users/sarah/Audit tool/audit-engine/`) had these features that the current worker is missing. Implement ALL of them.

### 1. Playwright-Extra + Stealth Plugin

**Old tool:**
```js
import { chromium } from 'playwright-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

chromium.use(StealthPlugin())
```

**Current worker:** Uses bare `playwright` + `@sparticuz/chromium`. No stealth.

**Fix:** Replace `@sparticuz/chromium` with `playwright-extra` + `puppeteer-extra-plugin-stealth`. The stealth plugin prevents sites from detecting the headless browser.

**Dependencies to add:**
```json
{
  "playwright-extra": "^4.3.6",
  "puppeteer-extra-plugin-stealth": "^2.11.2"
}
```

---

### 2. Real User Agent + Viewport + Locale

**Old tool:**
```js
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'

const context = await browser.newContext({
  userAgent: UA,
  viewport: { width: 1365, height: 900 },
  locale: 'en-US',
})
```

**Current worker:** No UA, no viewport, no locale.

**Fix:** Set all three in `browser.newContext()`.

---

### 3. Navigation with Error Handling (`.catch()`)

**Old tool:**
```js
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 }).catch((e) => {
  console.warn('goto:', e.message)
})
```

**Current worker:** `await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 })` — no `.catch()`. If navigation fails, the scan crashes.

**Fix:** Add `.catch()` to `page.goto()` so navigation failures don't crash the scan. Use 60s timeout.

---

### 4. Hydration Wait Sequence (`waitForPageReadyPlaywright`)

**Old tool had this helper:**
```js
export const POST_LOAD_MS = 3000

export async function waitForPageReadyPlaywright(page) {
  // Step 1: Wait for network to go idle (60s cap, don't crash on timeout)
  await page.waitForLoadState('networkidle', { timeout: 60000 }).catch(() => {
    console.warn('[audit] networkidle timed out; continuing')
  })

  // Step 2: Optional extra wait for a specific selector
  const extraSel = process.env.AUDIT_WAIT_SELECTOR?.trim()
  if (extraSel) {
    await page.waitForSelector(extraSel, { timeout: 25000 }).catch(() => {
      console.warn(`[audit] AUDIT_WAIT_SELECTOR not found: ${extraSel}`)
    })
  }

  // Step 3: Auto-accept cookie banners (configurable)
  const cookieSelEnv = process.env.AUDIT_COOKIE_SELECTOR?.trim()
  if (cookieSelEnv !== '0' && cookieSelEnv !== 'false') {
    const COOKIE_BANNER_SELECTORS = [
      '.worldwide-button-cookies-config__button',
      '#onetrust-accept-btn-handler',
      '.CybotCookiebotDialogBodyButton',
      '.cc-btn.cc-allow',
      "[aria-label*='cookie' i] button",
      "[id*='cookie'] button[class*='accept' i]",
    ]
    const sel = cookieSelEnv || COOKIE_BANNER_SELECTORS.join(', ')
    await page.waitForSelector(sel, { timeout: 5000 }).catch(() => {})
    // Note: old tool just waited for the selector to appear; full acceptance would click it
  }

  // Step 4: Wait for JS-settled content (3s)
  await new Promise((r) => setTimeout(r, POST_LOAD_MS))
}
```

**Current worker:** Skips ALL of this. Immediately runs axe-core after `page.goto()`.

**Fix:** Add `waitForPageReadyPlaywright()` and call it after `page.goto()` in all three scan functions.

---

### 5. Full axe-core Tag Configuration (`UNIFIED_AXE_TAGS`)

**Old tool had this unified config:**
```js
export const UNIFIED_AXE_TAGS = [
  'wcag2a',
  'wcag2aa',
  'wcag22aa',      // WCAG 2.2 additions
  'best-practice',
  'experimental',
  'cat.aria',
  'cat.color-contrast'
]
```

**Old tool's builder setup:**
```js
export function createUnifiedAxeBuilder(AxeBuilder, page, extraExcludes = []) {
  const excludes = [...DEFAULT_EXCLUDE_SELECTORS, ...extraExcludes].filter(Boolean)
  const runOpts = getUnifiedAxeRunOptions()
  let builder = new AxeBuilder({ page }).options(runOpts)
  for (const selector of excludes) {
    builder = builder.exclude(selector)
  }
  return builder
}
```

**Current worker:** Only has a simple `buildAxeTags()` with hardcoded logic.

**Fix:** Use the old tool's full `UNIFIED_AXE_TAGS` list. Keep the `wcagVersion`/`conformanceLevel` filtering logic but use the old tag list as the base.

---

### 6. Exclusion Selectors

**Old tool:**
```js
export const DEFAULT_EXCLUDE_SELECTORS = ['.ignore-this-modal']
```

Used to exclude modals, third-party widgets, etc. from axe analysis.

**Current worker:** No exclusion support.

**Fix:** Add `DEFAULT_EXCLUDE_SELECTORS` and apply them via `builder.exclude(selector)`.

---

### 7. No Resource Blocking

**Old tool:** Did NOT block images, fonts, media, or WebSockets. Loaded everything normally.

**Current worker:** Has `blockHeavyResources()` that aborts images, fonts, media, and WebSockets.

**Fix:** Remove `blockHeavyResources()` entirely. Blocking resources can break sites that detect blocked assets and enter infinite retry loops.

---

### 8. Output Normalization (`normalizeReport`)

**Old tool:**
```js
const report = normalizeReport({
  driver: 'playwright',
  url,
  axeConfig,
  rawAxeResult: raw,
  durationMs,
})
```

Normalized the raw axe output into a consistent report structure with metadata.

**Current worker:** Writes raw axe results directly to Supabase.

**Fix:** Add a `normalizeReport()` helper that adds:
- `driver` (always 'playwright')
- `url`
- `axeConfig` snapshot
- `durationMs`
- `pageTitle`
- `pageLang`

---

### 9. Contrast-Focused Builder (for theme testing)

**Old tool had a separate builder for colour-contrast-only scans:**
```js
export const CONTRAST_FOCUS_RULE_IDS = ['color-contrast', 'link-in-text-block']

export function createContrastFocusAxeBuilder(AxeBuilder, page, extraExcludes = []) {
  const runOpts = getContrastFocusedRunOptions()
  let builder = new AxeBuilder({ page }).options(runOpts)
  // ... exclude selectors
  return builder
}
```

This was used for light/dark theme contrast evaluation.

**Current worker:** No contrast-focused mode.

**Fix:** Keep the full scan as default. This is a future enhancement (not critical now).

---

### 10. Headed Mode Option

**Old tool:**
```js
const headed = process.env.AUDIT_HEADED !== '0' // default: headed (visible)
const browser = await chromium.launch({
  headless: !headed,
  ...(headed ? { slowMo: 50 } : {}),
})
```

**Current worker:** Always `headless: true`.

**Fix:** Keep `headless: true` for Railway (no display), but note that `slowMo` is useful for local debugging.

---

### 11. Hard Watchdog That Kills the Browser

**Old tool did NOT have this** — it was headed mode so the user could see hangs and kill manually.

**Current worker needs this** because it runs unattended on Railway.

**Implement:** Replace `withTimeout` with a version that force-closes the browser on timeout:

```js
async function runWithWatchdog(label, fn, browserRef, ms) {
  let timer
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(async () => {
      try { await browserRef.context?.close() } catch {}
      try { await browserRef.browser?.close() } catch {}
      reject(new Error(`${label} timed out after ${ms}ms (browser force-closed)`))
    }, ms)
  })
  try {
    return await Promise.race([fn(), timeout])
  } finally {
    clearTimeout(timer)
  }
}
```

Use a 2-minute timeout: `runWithWatchdog('Scan', scanFn, browserRef, 120000)`.

---

### 12. Realtime + Error Toasts (Frontend)

Replace the 3s polling in `useScanRunner.js` with Supabase Realtime.

---

## What NOT to Implement (yet)

| Phase | Why Skip |
|---|---|
| **Bounded Concurrency (`p-queue`)** | Railway free tier ~512MB RAM. Two Chromiums can OOM. Stick with concurrency 1. |
| **Supabase Queues (pgmq)** | Overkill. HTTP fire-and-forget works fine if browser doesn't deadlock. Only consider if hangs persist. |
| **Browserless / Browserbase** | Adds ~$30/mo. Only if self-hosted Chromium is still flaky after all fixes. |

---

## File Changes

| File | Changes |
|---|---|
| `scan-worker/index.js` | Replace `@sparticuz/chromium` with `playwright-extra` + stealth. Add UA, viewport, locale. Add hydration wait. Add watchdog. Use full `UNIFIED_AXE_TAGS`. Remove resource blocking. Add exclusion selectors. Add report normalization. |
| `scan-worker/package.json` | Replace `@sparticuz/chromium` with `playwright-extra` + `puppeteer-extra-plugin-stealth`. Keep `@axe-core/playwright`. |
| `src/hooks/useScanRunner.js` | Replace polling with Realtime subscription. |
| Toast component | Add Flowbite Toast for scan errors (dismissible, `role="alert"`, `lucide-react` icons). |

---

## Deployment

```bash
cd scan-worker
# Remove old dependency, add new ones
npm uninstall @sparticuz/chromium
npm install playwright-extra puppeteer-extra-plugin-stealth
railway up

# Frontend
cd ..
vercel --prod
```

---

## Verification Checklist

- [ ] Scan `https://example.com` → completes in ~5s
- [ ] Scan `https://wikipedia.org` → completes in ~10s
- [ ] Scan `https://www.blt.se/` → completes (was hanging before)
- [ ] Scan `https://www.wikifunctions.org/wiki/Wikifunctions:Main_Page` → completes
- [ ] Scan `https://svt.se` → completes or errors gracefully (not hangs forever)
- [ ] Submit a scan, then submit another immediately while first is running → second queues and runs after
- [ ] If a scan times out, job shows `status = 'error'` with message
- [ ] After timeout, next scan still works (no zombie browser)
- [ ] UI shows error toast on failed scan
- [ ] UI transitions to complete within ~1s of DB update (Realtime)

---

## Critical Rules

1. **Never `.catch()` on Supabase Postgrest queries.** Use `.then(null, () => {})` or check `{ error }` explicitly.
2. **Use Flowbite components only** for UI changes. No custom CSS. No hex colors. `lucide-react` icons only.
3. **Do not change** symptom-level fixes already in place (headless boolean, `newContext`, `domcontentloaded`, removed `page_language` column).
4. **Read files before editing** — confirm function names and line numbers match actual code.
