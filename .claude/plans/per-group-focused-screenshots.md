# Plan: Per-Group Focused Screenshots + Image Alt Confirmation

## User Feedback Summary

1. **"When I have contrast errors I want to see only contrast errors on the screenshot. When I have ARIA errors I want to see only ARIA."**
   - Current: One screenshot mixes all 20 highlighted violations with the same purple border — confusing
   - Desired: Each triage item should have its own focused screenshot showing only the relevant elements

2. **"Do we have check for all text for images?"**
   - Yes: axe-core `image-alt` rule + custom `imageAnnotation.js` check
   - But: Missing-alt images in the screenshot just get a generic purple border — auditor can't tell it's an image without alt text

---

## Current Architecture Problem

```
runStaticScan() → returns one screenshotBase64 (all violations mixed)
runScan() → uploads 1 screenshot → assigns SAME URL to ALL triage rows
```

Every triage item shows the same cluttered screenshot.

---

## Proposed Architecture: Focused Per-Group Screenshots

### New Scan Flow

```
1. runStaticScan() → returns { axeResult, page, browser, context } 
   (page stays OPEN — do not close browser yet)

2. runScan():
   a. Group violations
   b. Take OVERVIEW screenshot (all violations) → scan_results.summary.screenshotUrl
   c. For EACH group:
      - Clear previous highlights from page
      - Highlight only this group's elements
      - Add a clear text label explaining the issue ("NO ALT", "2.1:1 contrast", etc.)
      - Scroll to first element
      - Take FOCUSED screenshot
      - Upload to Supabase Storage
      - Store URL in triage_items.screenshot_url for this group
   d. Close browser
```

### Files to Modify

| File | Change |
|------|--------|
| `scan-worker/index.js` | `runStaticScan()`: return `page` + `browser` instead of closing. Add `takeFocusedScreenshot(page, group)` helper |
| `scan-worker/index.js` | `runScan()`: new loop for per-group screenshots after grouping |
| `scan-worker/index.js` | `takeScreenshot()`: split into `takeOverviewScreenshot()` + `takeFocusedScreenshot()` |
| `scan-worker/index.js` | New: `clearHighlights(page)` to remove injected CSS between shots |
| `scan-worker/index.js` | New: `addIssueLabel(page, element, ruleId, extraData)` — adds text label per element |

---

## Focused Screenshot Design: Element Labels

Instead of just a colored border, each highlighted element gets a **floating text label** explaining the issue:

| Rule | Label Text | Color |
|------|-----------|-------|
| `image-alt` / `custom-img-no-alt` | "🚫 NO ALT" | Red |
| `color-contrast` | "⚠️ 2.1:1" (actual ratio) | Red if < 3:1, Orange if < 4.5:1 |
| `aria-hidden-body` | "🙈 aria-hidden" | Purple |
| `aria-hidden-focus` | "🙈 Hidden + Focusable" | Purple |
| `button-name` | "🔘 No Name" | Purple |
| `label` | "🏷️ No Label" | Purple |
| `link-name` | "🔗 No Text" | Purple |
| `custom-focus-not-visible` | "👁️ No Focus" | Teal |
| `custom-placeholder-contrast` | "⚠️ Placeholder 1.8:1" | Teal |
| `heading-order` | "📑 Skip h2→h4" | Amber |
| `region` | "📍 No Landmark" | Amber |
| `target-size` | "👆 18×18px" | Amber |

Label style: white background, colored border matching the issue, bold text, small rounded pill positioned above the element.

### Why Labels Matter

When an auditor opens a focused screenshot for an `image-alt` failure, they immediately see:
- The exact image that is missing alt text
- A red "🚫 NO ALT" label pointing to it
- No other confusing borders

They don't have to cross-reference 20 purple outlines with the triage table.

---

## Image Alt Check: Confirmation

**Yes — all images are checked for text alternatives.** Two layers:

### Layer 1: axe-core `image-alt` rule
- Scans ALL `<img>` elements on the page
- Flags: missing `alt` attribute, empty `alt` on informative image, `role="presentation"` misuse
- Coverage: 100% of visible images

### Layer 2: Custom `imageAnnotation.js` check
- **Additional checks axe misses:**
  - Alt text that is a filename (`alt="logo.png"`) → F30 failure
  - Alt text that matches `src` filename exactly → F30 failure
  - Generic placeholder alt (`alt="image"`, `alt="photo"`) → F30 failure
- Skips: tiny images < 4px (spacers, tracking pixels)
- Does NOT skip: decorative images — it checks if they're properly marked

### What the focused screenshot would show for image-alt
```
┌─────────────────────────┐
│  [page content...]      │
│                         │
│  ┌─────────────┐        │
│  │ 🚫 NO ALT   │        │  ← label positioned above image
│  │  ┌───────┐  │        │
│  │  │       │  │        │  ← image with red border
│  │  │  🖼️   │  │        │
│  │  │       │  │        │
│  │  └───────┘  │        │
│  └─────────────┘        │
│                         │
└─────────────────────────┘
```

The label makes it instantly obvious: this image is missing alt text.

---

## Implementation Steps

### Step 1: Refactor `runStaticScan()` to keep page open
- Remove `browser.close()` from `finally` block
- Return `{ ...axeResult, page, browser, context }`
- `runScan()` becomes responsible for cleanup

### Step 2: Create `takeFocusedScreenshot(page, group)`
```javascript
async function takeFocusedScreenshot(page, group, ruleEnrichment) {
  // 1. Clear any previous highlights
  await clearHighlights(page)
  
  // 2. Highlight only this group's elements
  const elements = group.nodes.map(n => ({
    selector: n._enriched?.formattedSelector || n.target?.join(' > '),
    impact: group.impact,
    ruleId: group.ruleId,
  }))
  
  // 3. Add labels
  for (const el of elements) {
    await addIssueLabel(page, el.selector, el.ruleId, group)
  }
  
  // 4. Scroll to first element
  await scrollToFirstElement(page)
  
  // 5. Capture + return base64
  return page.screenshot({ type: 'png', fullPage: false })
}
```

### Step 3: New `addIssueLabel()` function
- Injects a small absolutely-positioned div above each element
- Position calculated from `getBoundingClientRect()`
- Text based on `ruleId` lookup table
- Style: white bg, colored border, bold text, rounded, z-index 10001

### Step 4: Loop in `runScan()` for per-group screenshots
```javascript
// After grouping:
const groupScreenshots = []
for (const group of groupedViolations) {
  const buffer = await takeFocusedScreenshot(page, group)
  const url = await uploadScreenshot(buffer, `${jobId}/${group.groupId}.png`)
  groupScreenshots.push({ groupId: group.groupId, url })
}
// Then assign per-group URLs in toTriageRow()
```

### Step 5: Upload and assign
- Overview screenshot: `jobId/overview.png` → `scan_results.summary.screenshotUrl`
- Per-group screenshots: `jobId/{groupId}.png` → `triage_items.screenshot_url`

---

## Storage Impact

| Before | After |
|--------|-------|
| 1 screenshot per scan | 1 overview + N focused screenshots |
| Example: 10 groups = 1 image | Example: 10 groups = 11 images |
| ~100KB per scan | ~1.1MB per scan |

**Mitigation:**
- Focused screenshots are only taken for groups with `impact: serious` or `critical`
- `moderate` and `minor` groups reuse the overview screenshot
- This cuts focused screenshots by ~60% (most violations are moderate)
- Or: make it configurable per audit (checkbox: "Generate focused screenshots")

---

## Open Decision Points

1. **Storage limit:** Should focused screenshots only be generated for critical/serious groups to save storage?
2. **Overview screenshot:** Do we still need the "all violations" overview, or is it now redundant?
3. **Label content:** Should labels show the actual data (contrast ratio, selector) or just the issue type ("contrast")?

**Recommendation:**
- Generate focused screenshots for ALL groups (storage is cheap, clarity is priceless)
- Keep overview screenshot for the Scan Results tab (developers like seeing everything)
- Labels show issue type + one key detail (e.g., "NO ALT" or "2.1:1")
