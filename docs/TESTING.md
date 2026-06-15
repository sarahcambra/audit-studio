# Testing Guide

> Comprehensive guide to running every kind of test in the AuditV2 (Audit Studio) project.  
> Last updated: 2026-06-15

---

## Table of Contents

1. [Unit Tests (Vitest)](#1-unit-tests-vitest)
2. [Component Tests](#2-component-tests)
3. [Storybook](#3-storybook)
4. [Scan Worker Tests](#4-scan-worker-tests)
5. [End-to-End Manual Test Flow](#5-end-to-end-manual-test-flow)
6. [Extension Testing](#6-extension-testing)
7. [Coverage](#7-coverage)
8. [CI Notes](#8-ci-notes)

---

## 1. Unit Tests (Vitest)

**Runner:** Vitest (v4.1.7)  
**Environment:** Node.js (for `tests/unit/`)  
**Config:** `vitest.config.js`  
**Setup file:** `tests/setup.js`

### Test locations

| Path | Count | Notes |
|------|-------|-------|
| `tests/unit/axeRuleCategories.test.js` | 258 lines | Rule categorisation, SC extraction, formatting helpers |
| `tests/unit/wcagScLevels.test.js` | 88 lines | WCAG 2.1/2.2 SC level map (87 criteria) |
| `tests/unit/wcagReferences.test.js` | 41 lines | URL & title coverage for all 87 SCs |
| `tests/unit/scCount.test.js` | 136 lines | Pre-test scoping logic, supersession map |
| `tests/unit/componentSelectors.test.js` | 144 lines | `COMPONENT_SELECTORS` structure & validity |
| `tests/unit/scanWorkerGrouping.test.js` | 132 lines | Worker-side `grouping.js` (pure helpers) |
| `tests/unit/groupViolations.test.js` | 242 lines | Frontend `groupViolations.js` grouping logic |

> The `src/lib/axeRunner.test.js` file is intentionally empty — tests were moved to `tests/unit/`.

### Commands

```bash
# Run all tests once (unit + component projects)
npm test

# Expected output (unit tests only — component tests are currently broken)
 RUN  v4.1.7 /Users/sarah/auditv2

 ✓ tests/unit/axeRuleCategories.test.js (35)
 ✓ tests/unit/wcagScLevels.test.js (12)
 ✓ tests/unit/wcagReferences.test.js (6)
 ✓ tests/unit/scCount.test.js (9)
 ✓ tests/unit/componentSelectors.test.js (13)
 ✓ tests/unit/scanWorkerGrouping.test.js (15)
 ✓ tests/unit/groupViolations.test.js (18)

 Test Files  7 passed (7)
      Tests  108 passed (108)
   Duration  1.23s
```

```bash
# Watch mode (useful during development)
npm run test:watch

# Expected: Vitest starts in watch mode, re-runs affected tests on file save.
# Press `h` for help, `q` to quit.
```

### Running a single file

```bash
npx vitest run tests/unit/wcagScLevels.test.js
```

### Path aliases

`vitest.config.js` mirrors the aliases from `vite.config.js` so imports like `@lib/axeRuleCategories` resolve in tests:

```js
// vitest.config.js
resolve: {
  alias: {
    '@':         path.resolve(dirname, './src'),
    '@features': path.resolve(dirname, './src/features'),
    '@shared':   path.resolve(dirname, './src/shared'),
    '@pages':    path.resolve(dirname, './src/pages'),
    '@lib':      path.resolve(dirname, './src/lib'),
    '@config':   path.resolve(dirname, './src/config'),
  },
}
```

---

## 2. Component Tests

**Runner:** Vitest with `jsdom` environment  
**Library:** `@testing-library/react` + `@testing-library/jest-dom/vitest`  
**Test files:**

| File | What it tests |
|------|---------------|
| `tests/component/Step4Scope.test.jsx` | Audit scope step — rendering, adding/removing items, stats |
| `tests/component/ScanResults.test.jsx` | Scan results panel — grouped violations, detail drill-down |

### ⚠️ Current breakage

**Status:** Component tests are **broken** and fail with `ReferenceError: React is not defined`.

**Root cause:** The installed Vitest version (1.6.0, pinned implicitly) predates Vite 8 / Rolldown. The `@vitejs/plugin-react` v6 JSX transform (via `@rolldown/plugin-babel`) is **not applied** in the `jsdom` test environment under Vitest 1.6.0, so JSX files are not compiled and `React` is not injected automatically.

**Fix:** Upgrade Vitest to a version that supports Vite 8 (Vitest ≥ 3.x). The `package.json` currently declares `"vitest": "^4.1.7"`, but the lockfile may still resolve an older version. Run:

```bash
npm ls vitest
# If the resolved version is < 3.0.0:
npm update vitest
# Or force reinstall:
npm install vitest@latest --save-dev
```

After upgrading, re-run:

```bash
npx vitest run tests/component/
```

**Workaround for now:** The unit tests (`tests/unit/*.test.js`) pass cleanly (108/108). Use them as the primary automated safety net. Component tests are tracked but skipped in CI until the Vitest/Rolldown incompatibility is resolved.

---

## 3. Storybook

**Version:** Storybook 10.4.2 with React-Vite framework  
**Port:** 6006  
**Config:** `.storybook/main.js` and `.storybook/preview.jsx`

### Addons configured

| Addon | Purpose |
|-------|---------|
| `@storybook/addon-a11y` | Automated accessibility checks per story |
| `@storybook/addon-vitest` | Runs stories as browser tests via Vitest + Playwright |
| `@storybook/addon-docs` | Autodocs from JSDoc / component prop types |
| `@chromatic-com/storybook` | Visual testing / review |
| `@storybook/addon-mcp` | Model Context Protocol integration |

### Current state

- Storybook server starts successfully.
- **Zero production stories** have been written (only the default `Example/Button`, `Example/Header`, `Example/Page` boilerplate remain under `src/stories/`).
- The `a11y` addon is configured with `test: "todo"` in `preview.jsx` — it will flag accessibility issues once stories exist.

### Start Storybook

```bash
npm run storybook

# Expected output:
# @storybook/core v10.4.2
#
# => Storybook accessible at: http://localhost:6006
```

### How to add a story

1. **Create a story file** next to the component it documents:

   ```js
   // src/shared/ui/Badge.stories.jsx
   import { Badge } from './Badge'

   export default {
     title: 'Components/Badge',
     component: Badge,
     tags: ['autodocs'],
   }

   export const Default = {
     args: { label: 'WCAG 2.1', variant: 'primary' },
   }

   export const Critical = {
     args: { label: 'Critical', variant: 'danger' },
   }
   ```

2. **Add interaction tests** (optional) using the `play` function:

   ```js
   import { userEvent, within } from '@storybook/test'

   export const Interactive = {
     play: async ({ canvasElement }) => {
       const canvas = within(canvasElement)
       await userEvent.click(canvas.getByRole('button'))
     },
   }
   ```

3. **Run browser tests via Vitest** (uses Playwright):

   ```bash
   npx vitest --project storybook
   ```

   This executes the `storybook` project defined in `vitest.config.js`, which spins up a Chromium browser (headless) and runs every story's `play` function.

4. **Build static Storybook** (for hosting):

   ```bash
   npm run build-storybook
   # Output: storybook-static/
   ```

---

## 4. Scan Worker Tests

The scan worker (`scan-worker/`) has two categories of local tests:

### A. Unit tests for pure helpers

File: `tests/unit/scanWorkerGrouping.test.js`

Tests the worker's `lib/grouping.js` without booting Chromium or the HTTP server. Covers `enrichViolation`, `extractScIds`, `groupViolations`, `parseElementInfo`, and `buildFriendlyDescription`.

```bash
npx vitest run tests/unit/scanWorkerGrouping.test.js

# Expected:
#  ✓ tests/unit/scanWorkerGrouping.test.js (15)
```

### B. Local check runner

File: `scan-worker/test-checks.js`

Spins up a local HTTP server with intentionally broken HTML, then runs **all custom checks** (`scan-worker/checks/*.js`) against it using a real Playwright browser. This is the fastest way to verify custom accessibility checks (placeholder contrast, link colour, skip link, etc.) without deploying the worker.

**Prerequisites:** Playwright browsers must be installed.

```bash
cd scan-worker
npx playwright install chromium

# Run the check suite
node test-checks.js

# Expected output (abbreviated):
# [checks] Starting custom check test suite...
# [checks] Server running at http://localhost:8765
# [checks] Page opened.
# [checks] Running 23 checks...
# [checks] check-page-title: 1 finding(s)
# [checks] check-placeholder-contrast: 2 finding(s)
# [checks] check-link-color: 1 finding(s)
# ...
# [checks] Results saved to check-results.json
```

Results are written to `scan-worker/check-results.json` for inspection.

### C. ACT validation

File: `scan-worker/act-validate.mjs`

Validates custom checks against official ACT rule test cases. Run with Node ≥ 18:

```bash
cd scan-worker
node act-validate.mjs
```

---

## 5. End-to-End Manual Test Flow

No automated end-to-end suite exists yet (no Playwright E2E tests or Cypress). The canonical manual smoke test is:

### Prerequisites

1. Frontend dev server running (`npm run dev` → `http://localhost:5173`)
2. Scan worker running locally (`cd scan-worker && node index.js` → `http://localhost:3001`)
3. Firebase Functions emulated or deployed (for `/api/scan` and `/api/favicon`)
4. `.env` files configured (see `docs/DEPLOYMENT.md` §2)

### Smoke test steps

| Step | Action | Expected result |
|------|--------|-----------------|
| 1 | Open `http://localhost:5173` | Sign-in page loads; no console errors |
| 2 | Sign in via Supabase (Google/GitHub) | Redirects to `/dashboard` |
| 3 | Click **"New Audit"** | Wizard opens at Step 1 |
| 4 | Select WCAG 2.2, AA, enter audit name → Next | Step 2 (pre-test) appears |
| 5 | Answer 7 pre-test questions → Next | Step 3 (scope) appears with criteria count (e.g. 51 active / 4 skipped) |
| 6 | Add 1–3 pages (URL + type) → Next → Submit | Audit created; redirect to detail page |
| 7 | Click **"Run Scan"** on a page | Toast shows "Scan queued"; progress bar advances through stages |
| 8 | Wait for scan to complete (30–90s) | Badge updates with issue count; screenshot thumbnail visible |
| 9 | Open scan detail → **Triage** tab | Issues listed with severity, SC, status |
| 10 | Click an issue → **Details** | Modal opens with element snippet, fix guidance, affected users |
| 11 | Click **"Generate Report"** (Report tab) | Print-ready conformance report opens in new tab |
| 12 | Refresh the page | All data persists; no auth loops |

### Known gotchas

- **Cookie walls:** Some sites (e.g. McDonald's) show a consent overlay that the worker may not dismiss, causing false "Clean" results.
- **Bot protection:** Sites like Reddit may serve a challenge interstitial; scan results then reflect the block page, not the real site.
- **Scan time:** Heavy pages can take 60–90s. The worker is concurrency 1; queueing multiple scans sequentially is normal.

---

## 6. Extension Testing (Chrome Unpacked)

> **Current status:** There is **no browser extension** in this repository. AuditV2 is a React SPA (Firebase Hosting + Supabase), not a Chrome extension.

If an extension is added in the future, the standard load procedure would be:

1. Build the extension:
   ```bash
   npm run build:extension   # hypothetical
   ```
2. Open Chrome → `chrome://extensions`
3. Enable **Developer mode** (toggle top-right)
4. Click **"Load unpacked"**
5. Select the extension output directory (e.g. `dist-extension/`)
6. Verify the extension icon appears in the toolbar
7. Open **Inspect views: background page** and **service worker** to check the console for errors
8. Test on a target website and inspect the DevTools panel / popup for correct behaviour

Until an extension is implemented, this section is a placeholder for future work.

---

## 7. Coverage

**Provider:** `@vitest/coverage-v8`

### Commands

```bash
# Generate text + JSON + HTML coverage reports
npm run test:coverage

# Expected output:
#  RUN  v4.1.7 /Users/sarah/auditv2
#
#  ✓ tests/unit/axeRuleCategories.test.js (35)
#  ...
#
#  Coverage report from v8
# -----------------------|---------|----------|---------|---------|-------------------
# File                   | % Stmts  | % Branch | % Funcs | % Lines | Uncovered Line #s
# -----------------------|---------|----------|---------|---------|-------------------
#  All files             |   42.31  |   38.12  |   35.67 |   42.31 |
#  src/lib/axeRule...    |   91.23  |   87.50  |  100.00 |   91.23 | 78,102
#  src/lib/wcagScLevels  |  100.00  |  100.00  |  100.00 |  100.00 |
#  src/lib/wcagReferences|   95.00  |   80.00  |  100.00 |   95.00 | 14
#  ...
#
# HTML report: coverage/index.html
```

### Config

In `vitest.config.js`:

```js
coverage: {
  provider: 'v8',
  reporter: ['text', 'json', 'html'],
  exclude: ['node_modules/', 'tests/', 'src/main.jsx', 'src/App.jsx']
}
```

**Exclusions:**
- `node_modules/` — third-party code
- `tests/` — test files themselves
- `src/main.jsx` — Vite entry point (boilerplate)
- `src/App.jsx` — route shell (hard to unit-test meaningfully)

### Where to improve coverage

The current unit tests cover `src/lib/` helpers well, but the following areas are **uncovered** and would benefit from tests:

- `src/features/scan/` — `useScanRunner` hook, `ScanPanel` logic
- `src/features/triage/` — Triage grouping, filtering, status mutations
- `src/features/report/` — Report generation helpers
- `src/shared/ui/` — Interactive components (ideal for Storybook + interaction tests)
- `src/context/` — `AuthContext`, `ThemeContext`, `ToastContext`

---

## 8. CI Notes

**Current status:** There is **no CI pipeline** configured for this repository. No `.github/workflows/`, GitLab CI, or other automation exists.

### Recommended GitHub Actions workflow

If adding CI, create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run test:coverage
      - uses: actions/upload-artifact@v4
        with:
          name: coverage-report
          path: coverage/
```

### Pre-merge checklist (manual until CI is added)

- [ ] `npm run lint` passes (zero new lint errors)
- [ ] `npm test` passes — all unit tests green
- [ ] `npm run build` passes — Vite build completes without errors
- [ ] Component tests are acknowledged broken (known Vitest/Rolldown issue)
- [ ] `scan-worker/test-checks.js` run if custom checks were modified
- [ ] Storybook builds (`npm run build-storybook`) if UI components changed

---

## Quick Command Reference

| Task | Command |
|------|---------|
| Unit tests (once) | `npm test` |
| Unit tests (watch) | `npm run test:watch` |
| Coverage | `npm run test:coverage` |
| Lint | `npm run lint` |
| Storybook dev | `npm run storybook` |
| Storybook build | `npm run build-storybook` |
| Run worker check suite | `cd scan-worker && node test-checks.js` |
| Single test file | `npx vitest run tests/unit/<file>.test.js` |

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|-------------|-----|
| `React is not defined` in component tests | Vitest/Rolldown incompatibility | Upgrade Vitest to ≥ 3.x |
| `window.matchMedia is not a function` | Missing mock in jsdom | Already mocked in `tests/setup.js` |
| Path alias fails in test | `vitest.config.js` alias mismatch | Ensure alias matches `vite.config.js` |
| Storybook browser tests hang | Playwright not installed | `npx playwright install chromium` |
| `test-checks.js` fails with `page.goto` timeout | Test server didn't start | Check port 8765 is free |
| Coverage report missing files | Excluded in config | Review `coverage.exclude` in `vitest.config.js` |

---

> For deployment, infrastructure, and operational debugging, see `docs/DEPLOYMENT.md`, `docs/OPERATIONS.md`, and `docs/TROUBLESHOOTING.md`.
