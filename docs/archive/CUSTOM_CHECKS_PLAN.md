# Custom Checks — Implementation Plan
## Decided Failures · UI/UX Design · False Positive Strategy

**Audit Studio — auditV2**  
Date: 2026-05-29  
Status: Planning

---

## How to Read This Document

Each check has four sections:

- **Failure basis** — the W3C-decided failure technique (Fxxx) or approved ACT rule. Nothing speculative, nothing still in GitHub discussion.
- **What we detect** — the exact signals our code reads via Playwright/Chromium.
- **Confidence** — `CONFIRMED FAIL` (published F-technique) or `NEEDS REVIEW` (strong evidence but auditor must confirm). No check is auto-closed as a pass.
- **False positive risks + mitigation** — what causes wrong positives and how we suppress them.

---

## PART 1 — Custom Check Specifications

---

### Check #35 — SC 1.4.3 Placeholder Contrast
**Level:** AA

**Failure basis:**  
W3C Understanding SC 1.4.3, Note 3 (normative, published):  
> *"Placeholder text is text in the page. If used, placeholder text needs to provide sufficient contrast."*  
No separate F-technique has been published yet, but the Understanding doc makes this binding. Contrast ratio must be ≥ 4.5:1 (normal text) or ≥ 3:1 (large text).

**Why axe misses it:**  
`window.getComputedStyle()` in the CSSOM spec only mandates `::before` / `::after` pseudo-elements. axe-core issue #643 closed as "not implementable with current browser APIs." Playwright/Chromium does expose `getComputedStyle(el, '::placeholder')` — we can use this.

**What we detect:**
- Query all `input[placeholder], textarea[placeholder]` that are not `type="hidden"` or `type="color"`.
- Read `::placeholder` pseudo-element `color` and the input's `background-color`.
- Alpha-blend against white if bg is transparent.
- Compute WCAG contrast ratio. Flag if < 4.5:1 (or < 3:1 for font-size ≥ 18px / 14px bold).

**Confidence:** `CONFIRMED FAIL` — Understanding doc is normative.

**False positive risks:**
| Risk | Mitigation |
|---|---|
| Input is visually hidden (tooltip, autocomplete dropdown) | Skip elements where `getBoundingClientRect().width === 0` or `visibility: hidden` or `display: none` |
| Custom CSS variable color we can't resolve | If `parseRgb()` returns null, skip and mark as "unable to check" |
| Browser-default styling differences | We run in Chromium only — document this limitation in the finding |

---

### Check #27 — SC 1.4.12 Text Spacing
**Level:** AA

**Failure basis:**  
**F104** — *"Failure of Success Criterion 1.4.10 due to content disappearing and not being available when the text spacing override is applied."*  
Wait — F104 is for 1.4.10. The correct failure for 1.4.12 text spacing is documented in Understanding SC 1.4.12: content that clips, truncates, or overlaps when the following CSS is applied:

```css
line-height: 1.5 !important;
letter-spacing: 0.12em !important;
word-spacing: 0.16em !important;
p { margin-bottom: 2em !important; }
```

The W3C published [Bookmarklet: Text Spacing](https://www.html5accessibility.com/tests/tsbookmarklet.html) as the official testing method. This is the same injection approach we use.

**What we detect:**
1. Inject the four CSS overrides via `page.addStyleTag`.
2. After 500ms, scan all visible text elements for:
   - `scrollHeight > clientHeight` (clipping)
   - `scrollWidth > clientWidth` (horizontal overflow)
   - Overlapping bounding boxes between adjacent text nodes (computed via `getBoundingClientRect`)
3. Screenshot the page in this state.
4. Restore original styles.

**Confidence:** `CONFIRMED FAIL` — normative in Understanding SC 1.4.12; official testing method published by W3C.

**False positive risks:**
| Risk | Mitigation |
|---|---|
| Overflow set intentionally (scrollable area) | Skip elements with `overflow: auto` or `overflow: scroll` on themselves or a direct parent |
| Fixed-size decorative containers | Cross-check: element must contain visible text nodes |
| Sticky headers reflow | Exclude `position: sticky` and `position: fixed` elements from overlap check |

---

### Check #25 — SC 3.1.1 Language Mismatch
**Level:** A

**Failure basis (three layers):**
1. **ACT Rule b5c3f8** (approved): "HTML page has lang attribute" — detects missing `lang`.
2. **ACT Rule bf051a** (approved): "HTML page lang attribute has valid language tag" — detects invalid/misspelled `lang` value.
3. **ACT Rule ucwvc8** (proposed — not yet AG WG approved): "HTML page language subtag matches default language" — detects wrong-but-valid lang (e.g., `lang="da"` on English content).

Layers 1 and 2 are `CONFIRMED FAIL`. Layer 3 is `NEEDS REVIEW`.

**What we detect:**
- Read `document.documentElement.lang`.
- If absent → confirmed fail (b5c3f8).
- If present but invalid (not in BCP 47) → confirmed fail (bf051a).
- If present and valid → run franc-min (statistical language detection library) on `document.body.innerText.slice(0, 3000)`. If detected language differs from declared `lang` subtag by confidence > 0.85 → flag as needs-review.

**Confidence:**
- Missing lang: `CONFIRMED FAIL`
- Invalid lang: `CONFIRMED FAIL`
- Wrong language detected: `NEEDS REVIEW`

**False positive risks:**
| Risk | Mitigation |
|---|---|
| Multilingual page with no dominant language | franc-min returns low confidence or second language close to first. Only flag when detected language confidence > 0.85 AND differs from declared. |
| Single-language UI chrome around foreign-language app | Unlikely to trip 85% threshold. If it does, auditor must confirm. |
| Privacy/tracking pages with minimal text | Skip franc detection if `body.innerText.length < 200`. |

---

### Check #26 — SC 3.1.2 Language of Parts
**Level:** AA

**Failure basis:**  
H58 (sufficient technique): "Using language attributes to identify changes in human language."  
There is **no published F-technique** for 3.1.2. W3C GitHub issue #1174 asked if single words without `lang` markup is a PASS — WG answered yes, single words typically become part of the surrounding language.

The checkable failure is: a **passage or phrase** (multiple words, identifiable as different language) exists in the DOM without a `lang` attribute on an ancestor element.

**What we detect (evidence mode — not auto-fail):**
- Use franc-min on each paragraph and `<blockquote>` element (≥ 30 words) that has no `lang` attribute.
- Flag passages where detected language differs from page-level `lang` with confidence > 0.90.
- Output as evidence for manual review, never as a confirmed failure.

**Confidence:** `NEEDS REVIEW` — always. No published F-technique. Automated detection is an evidence-gathering aid only.

**False positive risks:**
| Risk | Mitigation |
|---|---|
| Technical terms in another language (normal in docs) | High threshold (0.90 confidence), minimum 30 words |
| Code blocks, `<pre>` elements | Skip elements with `font-family: monospace` or inside `<pre>`, `<code>` |
| Proper names, quotes | Short fragments won't meet 30-word minimum |

---

### Check #31 — SC 2.5.3 Label in Name
**Level:** A

**Failure basis:**  
**F96** — *"Failure of Success Criterion 2.5.3 due to the accessible name not containing the visible label text."*  
**F111** — *"Failure of Success Criterion 1.3.1 and 4.1.2 due to an accessible name being used that does not contain the required text."*  
ACT Rule **2ee8b8** (approved): "Button has non-empty accessible name" extends to visible label matching.

**What we detect:**
- For all interactive elements with a visible label (button text, link text, input label): compute accessible name via `accname-aaa` algorithm (or inline approximation: `aria-label`, `aria-labelledby`, then visible text).
- If accessible name exists AND visible text exists AND accessible name does NOT contain the visible text string (case-insensitive, trimmed) → confirmed fail.
- Special case: icon-only buttons (no visible text) → skip (different SC).

**Confidence:** `CONFIRMED FAIL` for F96 pattern (accessible name present but doesn't include visible label).

**False positive risks:**
| Risk | Mitigation |
|---|---|
| Accessible name intentionally extends label (e.g., "Submit form" when button says "Submit") | This is PASS — accessible name must *contain* visible label, not be equal to it. Contains-check, not equality. |
| SVG icons with title included in accessible name computation | Strip SVG title from visible text computation |
| Punctuation/whitespace differences | Normalize both strings: trim, collapse whitespace, lowercase before comparing |

---

### Check #32 — SC 2.4.7 Focus Visible + SC 2.4.3 Focus Order
**Level:** AA

**Failure basis:**  
**F55** — *"Failure due to using script to remove focus when focus is received."*  
**F78** — *"Failure due to styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator."*  
**F44** — *"Failure of SC 2.4.3 due to using tabindex to create a tab order that does not preserve meaning and operability."*  
**F85** — *"Failure of SC 2.4.3 due to using dialogs or menus that are not adjacent to their trigger control in the sequential navigation order."*

**What we detect:**

*Focus visible (F55/F78):*
- Tab through all focusable elements (`a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])`).
- For each element, capture `outline`, `outline-width`, `box-shadow`, and border changes before/after focus.
- If no visible change is detectable → `CONFIRMED FAIL` (F78).
- If `blur()` is called on focus → `CONFIRMED FAIL` (F55).

*Focus order (F44):*
- Collect all elements with explicit `tabindex` values > 0.
- If any positive tabindex exists → flag as `NEEDS REVIEW` (positive tabindex almost always creates wrong order per F44, but requires visual inspection of actual order).

*Tab order screenshot:*
- Take full-page screenshot. Overlay numbered circles (SVG) at the center of each focusable element bounding box in tab order.

**Confidence:**
- No visible focus change → `CONFIRMED FAIL`
- Positive tabindex present → `NEEDS REVIEW` (auditor must verify logical order)

**False positive risks:**
| Risk | Mitigation |
|---|---|
| Custom focus ring via `::before`/`::after` (can't read in JS) | Flag as "unable to verify" — auditor must check. Don't call it a fail. |
| Browser default focus styles (visible but not custom) | Browser defaults ARE sufficient for 2.4.7. Don't flag if browser default is present and unaltered. Check: if `outline` === "0px" AND `box-shadow` changes → pass (some frameworks swap outline for box-shadow) |
| Elements scrolled off screen | Only tab elements that return `getBoundingClientRect().height > 0` |

---

### Check #33 — SC 2.4.1 Skip Link Obscured
**Level:** A

**Failure basis:**  
G1 (sufficient technique): "Adding a link at the top of each page that goes directly to the main content area."  
No published F-technique for a non-functional skip link. The normative requirement: the mechanism must be functional.  
ACT rule **cf77f2** (proposed): "The skip link target is reachable and visible."

**What we detect:**
1. Find first `a[href^="#"]` in DOM or `a` with text matching /skip|jump|main content/i.
2. Resolve the href to a target element.
3. Check: does a fixed/sticky element cover the top of the viewport such that, when the target is scrolled into view, the target's `getBoundingClientRect().top` is within the fixed header's height? If yes → `NEEDS REVIEW`.
4. Check: after programmatically clicking the skip link, does focus move to the target? If `document.activeElement !== target` → `NEEDS REVIEW`.

**Confidence:** `NEEDS REVIEW` — proposed ACT rule, no F-technique. Flag for auditor confirmation.

**False positive risks:**
| Risk | Mitigation |
|---|---|
| Skip link is present and works, but not first in DOM | If skip link target receives focus and is not obscured → pass |
| Fixed header is transparent / short | Measure actual overlap: target.top < header.bottom → flag. Otherwise pass. |

---

### Check #35 (merged with #33) — Skip Link Already in Check #33

---

### Check #36 — SC 1.1.1 Image Annotation Evidence
**Level:** A

**Failure basis:**  
**F30** — *"Failure due to using text alternatives that are not alternatives (e.g., filename as alt text)."*  
**F38** — *"Failure due to not marking up decorative images in HTML so they can be ignored by AT."*  
**F39** — *"Failure due to providing a text alternative that is not null for images that should be ignored by AT."*  
**F65** — *"Failure due to omitting the alt attribute or text alternative on img elements."*

**What we detect:**
1. All `<img>` elements: check for missing `alt` (F65), filename-as-alt (F30 pattern: alt matches `*.png`, `*.jpg`, contains `img_`, `image_`, `photo_`), empty alt on non-decorative images (F38/F39 heuristic: image has non-zero dimensions and is not inside a linked element with text).
2. All `background-image` CSS on elements with role=img or aria-label → check if accessible name exists.
3. Generate annotated screenshot: draw colored boxes on each image, numbered, with a legend showing alt text or "MISSING".

**Confidence:**
- Missing alt attribute → `CONFIRMED FAIL` (F65)
- Filename-as-alt → `CONFIRMED FAIL` (F30)
- Empty alt on what appears to be informative image → `NEEDS REVIEW` (F38/F39 — auditor must confirm it's decorative or not)

**False positive risks:**
| Risk | Mitigation |
|---|---|
| Intentionally decorative images with alt="" | Do NOT flag empty alt as failure. Flag only as informational ("decorative — please verify"). |
| Icons inside buttons that already have accessible button label | If `<img>` is inside `<button>` with text label, empty alt is correct and not flagged. |
| SVG inline (not img tag) | SVGs handled separately: check for `<title>`, `aria-label`, or `role="img"` with label. |

---

### Check #37 — SC 2.4.11 Focus Not Obscured
**Level:** AA (WCAG 2.2 only)

**Failure basis:**  
**F110** — *"Failure of Success Criterion 2.4.11 Focus Appearance due to a sticky header obscuring the focused element."*  
(Published in WCAG 2.2 techniques, 2023.)

**What we detect:**
1. Find all `position: fixed` and `position: sticky` elements with `top: 0` or near-top (< 120px) that have non-zero height.
2. Tab through all focusable elements. For each focused element, compute `focusedEl.getBoundingClientRect().top`.
3. If `focusedEl.getBoundingClientRect().top < stickyHeader.getBoundingClientRect().bottom` → focused element is partially or fully obscured → `CONFIRMED FAIL`.
4. Screenshot showing the obscured state.

**Confidence:** `CONFIRMED FAIL` when overlap is measured (F110 is published).

**False positive risks:**
| Risk | Mitigation |
|---|---|
| Fixed element is transparent or zero-height | Only count fixed elements where `opacity > 0` and `height > 0` and `z-index > 0` |
| Focus ring extends above element bounding box | Use element `getBoundingClientRect()` as minimum; a partially visible element still fails if the main body is hidden |
| Scroll happens automatically on focus | Re-measure after a 200ms delay to allow browser-native scroll-into-view to run |

---

### Check #39 — SC 2.5.8 Target Size
**Level:** AA (WCAG 2.2 only)

**Failure basis:**  
No F-technique has been published yet (WCAG 2.2 is recent). The normative criterion states targets must be ≥ 24×24 CSS px, using the circle-intersection algorithm. The W3C Understanding doc figures 6 and 7 are authoritative.

**Algorithm (circle-intersection):**
For each target with bounding box < 24×24:
1. Draw a 24px-diameter circle centered on the target's bounding box center.
2. For every other interactive target:
   - If the other target's bounding box ≥ 24×24 on all sides → it's fine, but the undersized target's circle must not intersect it.
   - If the other target is also undersized → draw a 24px circle around it. The two circles must not intersect.
3. If circles intersect → `NEEDS REVIEW` (fail by algorithm, but auditor must verify spacing + context).

**Exception:** The SC does not apply when the target's size is "essential" (e.g., inline text link where size is determined by text flow) — this requires auditor judgment.

**Confidence:** `NEEDS REVIEW` — algorithm can be computed, but essential-exception requires human judgment. Always requires auditor confirmation.

**False positive risks:**
| Risk | Mitigation |
|---|---|
| Inline text links (essential exception) | Flag inline links (targets inside `<p>`, `<li>`, `<td>` with surrounding text) as lower-priority needs-review |
| Decorative/disabled elements | Skip `[disabled]`, `[aria-disabled="true"]`, `display:none` |
| 1px rounding differences | Add 0.5px tolerance: circles must overlap by more than 1px to flag |

---

### Check #40 — SC 1.4.10 Reflow
**Level:** AA

**Failure basis:**  
**F102** — *"Failure of Success Criterion 1.4.10 due to content disappearing and not being available when content has reflowed."*  
Published technique. Normative requirement: at 320px viewport width (or 400% zoom at 1280px), no content disappears unless disclosure/link provided.

**What we detect:**
1. At full viewport (1280px): collect all visible element texts and their presence.
2. Set viewport to 320px width.
3. Re-scan: find any text/element present at 1280px that is now `display:none`, `visibility:hidden`, or has `getBoundingClientRect().width === 0`.
4. Also check: horizontal scrollbar present at 320px (`document.documentElement.scrollWidth > 320`) → `CONFIRMED FAIL` (content requires horizontal scrolling at 320px = automatic fail per Understanding doc).
5. Screenshot at 320px.

**Confidence:**
- Horizontal scroll at 320px → `CONFIRMED FAIL` (F102)
- Content disappeared → `CONFIRMED FAIL` (F102)

**False positive risks:**
| Risk | Mitigation |
|---|---|
| Responsive hamburger menu hides nav at mobile | Navigation hidden behind toggle is acceptable — the toggle must be visible. Check that the hidden element has a visible toggle/disclosure available. |
| Complex data tables with overflow-x: auto | Tables with overflow-x:auto are the intended pattern for 1.4.10 data tables — these are a PASS. Detect `overflow-x: auto` on table container and exclude from horizontal scroll failure. |
| Iframes that cause horizontal scroll | Exclude scroll caused by iframes with `scrolling="no"` |

---

### Check #41 — SC 2.4.4 Link Purpose
**Level:** A

**Failure basis:**  
**F84** — *"Failure of SC 2.4.9 due to using a non-specific link such as 'click here' or 'more' without a mechanism to change the link text to specific text."*  
Note: F84 is formally for 2.4.9 (AAA), but the Understanding doc for 2.4.4 explicitly lists the same generic patterns as failures when no in-context disambiguation exists.  
**F63** — *"Failure of SC 2.4.4 due to providing link context only in content that is not related to the link."*

**What we detect:**
- Collect all `<a href>` elements with accessible names.
- Flag if accessible name matches any of these patterns (case-insensitive):
  - Exact: "click here", "here", "more", "read more", "learn more", "details", "info", "this link", "link", "continue"
  - Partial: starts with "click", is only a URL domain
- For each flagged link, check context: the link's paragraph or list item (`closest('p, li, td')`) text — if surrounding text disambiguates the purpose, downgrade from fail to needs-review.

**Confidence:**
- Generic text + no context → `CONFIRMED FAIL`
- Generic text + disambiguating context exists → `NEEDS REVIEW`

**False positive risks:**
| Risk | Mitigation |
|---|---|
| "More" inside `<button>` (not a link) | Only check `<a href>` elements |
| "Read more" with aria-label overriding visible text | Check accessible name (aria-label/aria-labelledby first), not just visible text — if aria-label is descriptive, it's a pass |
| "Details" on a `<summary>` (accordion) | Skip elements inside `<details><summary>` |

---

### Check #42 — SC 1.3.5 Identify Input Purpose
**Level:** AA

**Failure basis:**  
**F107** — *"Failure of SC 1.3.5 due to incorrect autocomplete attribute values."*  
Published technique. The full list of valid autocomplete tokens is in the HTML spec. Any value not in the WHATWG list is an incorrect value.

**What we detect:**
1. All `<input>` and `<textarea>` elements that collect personal information about the user. We identify these by: input name/id/label matching patterns (name, email, phone, address, username, password, cc-number, etc.) AND `type` (text, email, tel, number, url, password).
2. For each personal-info input:
   - If `autocomplete` is absent → `NEEDS REVIEW` (may be required by SC 1.3.5 if purpose can be determined).
   - If `autocomplete` has a value NOT in WHATWG valid list → `CONFIRMED FAIL` (F107).
   - If `autocomplete="off"` on a field where purpose is determinable → `NEEDS REVIEW`.
3. Valid autocomplete tokens list baked into the check (name, given-name, family-name, email, tel, address-line1, address-line2, postal-code, country, bday, bday-day, bday-month, bday-year, sex, url, photo, username, new-password, current-password, cc-name, cc-number, cc-exp, cc-type, etc.)

**Confidence:**
- Invalid autocomplete value → `CONFIRMED FAIL` (F107)
- Missing autocomplete on personal field → `NEEDS REVIEW`

**False positive risks:**
| Risk | Mitigation |
|---|---|
| Custom autocomplete values (e.g., `autocomplete="my-custom-section"`) | The HTML spec allows section tokens like `section-*` as prefix. Parse: if starts with `section-` → valid prefix. |
| SC 1.3.5 only applies to personal info fields — not all inputs | Filter: only flag inputs where we can determine the field purpose from label/name/type |
| MFA/OTP fields where autocomplete="one-time-code" | "one-time-code" is a valid token. Don't flag. |

---

### Check #43 — SC 1.4.1 Use of Color — Links
**Level:** A

**Failure basis:**  
**F73** — *"Failure of SC 1.4.1 due to creating links that are not visually evident without color vision."*  
The published failure: links within body text where color is the ONLY differentiator from surrounding non-link text (no underline, no border, no other visual indicator). Contrast ratio between link and surrounding text must also be ≥ 3:1 if that's the only difference.

**What we detect:**
1. Find all `<a href>` elements inside paragraph text (`<p>`, `<li>`, `<td>`).
2. For each link:
   - Check `text-decoration`: if underline is present → PASS (non-color indicator exists).
   - Check `border-bottom` or `outline`: if present → PASS.
   - If NO non-color indicator: compute contrast ratio between link color and surrounding text color. If < 3:1 → `CONFIRMED FAIL` (F73). If ≥ 3:1 → `NEEDS REVIEW` (color alone, but contrast meets the alternative threshold).
3. Note: Issue #4143 confirmed that if link text IS the URL itself (href matches the link text, or text is phone/email format), this is exempt — the content itself indicates the link.

**Confidence:**
- No non-color indicator + < 3:1 link-to-text contrast → `CONFIRMED FAIL`
- No non-color indicator + ≥ 3:1 → `NEEDS REVIEW`

**False positive risks:**
| Risk | Mitigation |
|---|---|
| Navigation links (not in body text) | Only check links inside `<p>`, `<li>`, `<td>`, `<article>`, `<main>` — skip nav, header, footer links |
| Links that show underline on hover | SC 1.4.1 requires indicator WITHOUT interaction. hover-only underline is not sufficient. |
| URL-as-text links | If link text matches href or matches email/phone regex → exempt |

---

### Check #44 — SC 1.4.11 Non-text Contrast — Input Borders + Focus Rings
**Level:** AA

**Failure basis:**  
W3C Understanding SC 1.4.11 is normative. UI components (inputs, buttons, focus rings) require 3:1 contrast against adjacent colors.  
ACT Rules (approved):
- **afw4f7**: "Element with role of textbox has minimum contrast" 
- **46ca7f**: "Element with role of button has minimum contrast"

**What we detect:**
1. All `<input>`, `<textarea>`, `<select>`: measure border color against background. If contrast < 3:1 → `CONFIRMED FAIL`.
2. Focus ring: tab to each interactive element, measure outline/box-shadow color against the element background. If contrast < 3:1 → `CONFIRMED FAIL`.
3. Custom checkboxes/radios: measure the indicator box border against its background.

**Confidence:** `CONFIRMED FAIL` when measurable and < 3:1.

**False positive risks:**
| Risk | Mitigation |
|---|---|
| Input inside colored container (e.g., dark sidebar) | Measure border against actual adjacent background, not page background. Use `getBoundingClientRect` + `elementFromPoint` to identify actual background. |
| Focus ring replaced by `outline: none` with a custom box-shadow | Measure both outline and box-shadow. If either provides 3:1 contrast → pass. |
| Browser-injected default focus ring | The SC requires component authors to ensure sufficient contrast; browser defaults are outside scope. |

---

### Check #45 — SC 1.3.4 Orientation
**Level:** AA

**Failure basis:**  
**F97** — *"Failure of SC 1.3.4 due to locking the orientation to landscape or portrait view."*  
**F100** — *"Failure of SC 1.3.4 due to showing a message asking to reorient device."*  
Two separate published failure techniques.

**What we detect:**
1. **CSS lock (F97):** Scan stylesheets for `@media (orientation: landscape) { body { display:none } }` or `transform: rotate(90deg)` applied to body/html in one orientation. Also: CSS `orientation-lock` property if set. Playwright: set viewport to portrait (768×1024), check if content renders. Then set to landscape (1024×768), check again. If either renders nothing → `CONFIRMED FAIL`.
2. **Rotate message (F100):** After setting each orientation, scan for visible text matching `/rotate|turn your device|landscape only|portrait only/i`. If present → `CONFIRMED FAIL`.
3. **JavaScript lock:** Check for `screen.orientation.lock()` calls in scripts → `NEEDS REVIEW`.

**Confidence:**
- CSS lock: `CONFIRMED FAIL`
- Rotate message: `CONFIRMED FAIL`
- JS orientation lock: `NEEDS REVIEW`

**False positive risks:**
| Risk | Mitigation |
|---|---|
| Game or video where orientation is essential | SC 1.3.4 has an "essential" exception. Flag but note auditor must verify essentiality. |
| Rotate message shown briefly on load (JS, then auto-hides) | Wait 2s after load before scanning for rotate message text. |

---

### Check #46 — SC 2.4.2 Page Titled
**Level:** A

**Failure basis:**  
**F25** — *"Failure of SC 2.4.2 due to the title of a web page not identifying the contents."*  
Examples from the W3C:
- Same title across all pages of a site.
- Title is only the company/brand name without page name.
- Title is empty or whitespace.
- Title is a URL.
- Title contains only punctuation or placeholder text.

**What we detect:**
1. Read `document.title`.
2. Flag `CONFIRMED FAIL` (F25) if:
   - Title is empty or only whitespace.
   - Title matches common generic patterns: "Home", "Page", "Untitled", "New Page", "index", site name only (check if title === og:site_name).
   - Title is a URL pattern (`https?://` or starts with `www.`).
3. Flag `NEEDS REVIEW` if:
   - Title appears to be only a brand name (no separator like ` | `, ` - `, ` :: ` with a page-specific segment).

**Confidence:**
- Empty/generic title → `CONFIRMED FAIL`
- Brand-name-only → `NEEDS REVIEW`

**False positive risks:**
| Risk | Mitigation |
|---|---|
| Single-page app — title legitimately is site name on home page | Only flag as NEEDS REVIEW (not confirmed fail) for single-word brand names |
| Non-English titles | The generic pattern list should not fire on non-English words. Only flag exact English matches or truly empty titles as confirmed failures. |

---

### Check #28 — SC 1.3.1 Structure Evidence
**Level:** A

**Failure basis:**  
**F2** — *"Failure of SC 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup."*  
**F43** — *"Failure of SC 1.3.1 due to using structural markup in a way that does not represent relationships in the content."*

**What we detect (evidence mode):**
1. Extract heading tree: `h1`–`h6` with text. Flag skipped levels (h1 → h3, skipping h2) as `NEEDS REVIEW`.
2. Extract list usage: elements that visually look like lists (text nodes preceded by bullet characters `•`, `-`, `*`) but are not inside `<ul>/<ol>` → `NEEDS REVIEW` (F2 pattern).
3. Generate annotated screenshot with overlaid heading hierarchy labels.
4. Output JSON heading tree for auditor review.

**Confidence:** `NEEDS REVIEW` for all — heading structure is complex and context-dependent. Evidence only.

---

### Check #29 + #30 — Landmark Structure + Missing Names
**Level:** A/AA

**Failure basis:**  
**ARIA11** sufficient technique: landmarks must have unique accessible names when multiple of same type exist.  
**F2** applies if landmark structure does not reflect content relationships.

**What we detect:**
1. Collect all landmark roles (`main`, `nav`, `banner`, `contentinfo`, `search`, `complementary`, `region`, `form`).
2. If multiple `<nav>` exist without unique `aria-label` or `aria-labelledby` → `NEEDS REVIEW`.
3. If `<section>` or `<form>` exists without accessible name (not exposed as landmark) → `NEEDS REVIEW`.
4. Screenshot with overlaid landmark boundaries.

**Confidence:** `NEEDS REVIEW` for all — landmark requirements depend on page structure context.

---

## PART 2 — UI/UX Design: How Findings Surface

### Finding Confidence Levels

Every custom check result enters the triage system with one of three confidence labels:

| Level | Color | Meaning | Auditor action required? |
|---|---|---|---|
| **CONFIRMED FAIL** | Red badge | Published F-technique violation with measured data | Optional: can dismiss with reason |
| **NEEDS REVIEW** | Amber badge | Strong signal but requires human judgment | Required: must set verdict |
| **EVIDENCE** | Blue badge | Structure/annotation output, no pass/fail implied | Optional: document observations |

---

### Finding Card Anatomy

Each finding card in the Triage UI contains:

```
┌─────────────────────────────────────────────────────────────┐
│  [CONFIRMED FAIL]  SC 1.4.3 · Placeholder Contrast          │
│  F-technique: Understanding SC 1.4.3, Note 3                │
│                                                             │
│  3 elements affected                                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ #search-input    ratio: 2.1:1    required: 4.5:1    │   │
│  │ #email-field     ratio: 3.4:1    required: 4.5:1    │   │
│  │ #name-input      ratio: 2.8:1    required: 4.5:1    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  [View Screenshot]  [See Element]  [Copy Selector]          │
│                                                             │
│  Verdict: ○ Confirmed  ○ Not a failure  ○ Deferred          │
│  Notes: _________________________________________________   │
└─────────────────────────────────────────────────────────────┘
```

---

### Surfacing Strategy by Check Type

**Confirmed-fail checks** (1.4.3, 1.4.12, 2.5.3/F96, 2.4.7/F78, 3.1.1 missing lang, 1.1.1/F65, 2.4.11/F110, 1.4.10/F102, 2.4.4, 1.3.5/F107, 1.4.1/F73, 1.4.11, 1.3.4/F97+F100, 2.4.2/F25):
- Enter triage queue as **auto-triaged failures** with pre-filled decision = "confirmed"
- Auditor can override to "not-failure" with a required dismissal reason
- Appear in the main violations list, not separate

**Needs-review checks** (2.5.8 target size, skip link, positive tabindex, lang mismatch, link purpose with context, autocomplete missing, SC 3.1.2, 1.3.1 structure):
- Enter triage queue as **untriaged — needs review**
- Distinguished by amber badge vs. red
- Auditor must explicitly set verdict before audit can be marked complete
- Grouped under a collapsible "Custom Checks — Needs Review" section in the Triage tab

**Evidence checks** (landmark structure, heading tree, image annotation, tab order screenshot):
- Do NOT enter the triage violation queue
- Surface in a dedicated **"Evidence & Context"** panel on the Scan Results page
- Available as downloadable/copyable artifacts for report generation
- Auditor can add notes, but no verdict required

---

### Triage Tab Changes

**New filter option:** "Custom checks" checkbox in the source filter  
**New badge:** Source chip shows "custom" (teal) alongside existing "axe" (purple) source chips

**Batch action for NEEDS REVIEW items:**
- "Review All Custom Checks" button → steps through each needs-review item one by one (wizard-style lightbox)
- Prevents auditor from skipping the queue

---

### Scan Results Page — Custom Checks Panel

Below the axe summary stats, a new collapsible card:

```
┌─────────────────────────────────────────────────────────────┐
│  Custom Checks (Playwright)                        ▼        │
│                                                             │
│  ✗ 4 confirmed failures                                     │
│  ⚠ 6 need your review                                       │
│  ℹ 3 evidence artifacts ready                               │
│                                                             │
│  [Go to Triage →]                                           │
└─────────────────────────────────────────────────────────────┘
```

---

### Report Integration

Custom check findings appear in the generated PDF report under:
- Section "Automated Failures" → confirmed-fail custom checks (alongside axe violations)
- Section "Items Requiring Review" → needs-review custom checks with auditor verdict
- Appendix "Scan Evidence" → annotated screenshots (heading tree, tab order, landmark map, image annotations)

Evidence screenshots are embedded directly in the report PDF with captions.

---

## PART 3 — False Positive Mitigation Strategy

### Principle: Never auto-close as "pass"

All custom checks produce findings. The distinction is confidence level, not pass/fail. An item is only removed from the auditor's view if:
1. The auditor explicitly sets it to "not a failure" with a dismissal reason, OR
2. It is classified as `EVIDENCE` (no verdict required).

---

### Check-level Suppression Rules

Each check has suppression conditions baked into the Playwright code. These are documented in comments so auditors understand why some elements are not flagged.

| Pattern | Suppression rule |
|---|---|
| Hidden elements | `getBoundingClientRect().width === 0` or `display:none` or `visibility:hidden` → skip |
| Disabled elements | `[disabled]`, `[aria-disabled="true"]` → skip for interactive checks |
| Elements outside viewport at test time | Only check elements in the rendered viewport + 2 scrolled pages |
| Iframes (cross-origin) | Cannot access interior DOM → note as "not checked" in output |
| `display: contents` elements | Bounding box is zero — skip |

---

### Confidence Throttling

If a single check fires on more than 20 elements, we group them:
- Show first 5 as individual findings.
- Remaining N collapsed under "and N more elements with the same issue."
- Bulk-triage button: "Apply verdict to all N similar items."

This prevents overwhelming the auditor with 47 individual "click here" link findings when the problem is systemic.

---

### Post-Triage False Positive Tracking

When an auditor marks a custom check finding as "not-failure" → the dismissal is written to `triage_items` with `decision = 'not-failure'` and `dismissal_reason`.

We aggregate these across all audits to surface patterns:
- If the same rule gets dismissed as "false-positive" ≥ 3 times by the same user → surfaced in their kb_overrides as a "this check often fires incorrectly on this pattern."
- Future: per-site suppression rules that persist to the `catalog_items` table.

---

## PART 4 — Implementation Order

Priority based on: failure basis strength × frequency of occurrence × implementation complexity.

| Priority | Check | Basis | Complexity |
|---|---|---|---|
| 1 | SC 2.4.2 Page Titled (#46) | F25 confirmed | Low |
| 2 | SC 1.4.3 Placeholder Contrast (#35) | Understanding doc confirmed | Medium |
| 3 | SC 3.1.1 Language (#25) | F-technique + ACT approved | Low |
| 4 | SC 1.3.5 Autocomplete (#42) | F107 confirmed | Low |
| 5 | SC 1.4.1 Link Color (#43) | F73 confirmed | Medium |
| 6 | SC 2.4.4 Link Purpose (#41) | F84 + Understanding confirmed | Low |
| 7 | SC 2.4.7 Focus Visible (#32) | F55 + F78 confirmed | Medium |
| 8 | SC 1.1.1 Image Annotation (#36) | F30 + F65 confirmed | High |
| 9 | SC 1.4.10 Reflow (#40) | F102 confirmed | Medium |
| 10 | SC 2.4.11 Focus Obscured (#37) | F110 confirmed | Medium |
| 11 | SC 2.5.3 Label in Name (#31) | F96 confirmed | Medium |
| 12 | SC 1.3.4 Orientation (#45) | F97 + F100 confirmed | Low |
| 13 | SC 1.4.12 Text Spacing (#27) | Understanding + bookmarklet confirmed | Medium |
| 14 | SC 1.4.11 Non-text Contrast (#44) | ACT rules confirmed | High |
| 15 | SC 2.5.8 Target Size (#39) | Understanding normative, no F-technique | High |
| 16 | SC 2.4.1 Skip Link (#33) | G1 + proposed ACT | Medium |
| 17 | SC 1.3.1 Structure Evidence (#28) | Evidence mode | Medium |
| 18 | Landmarks (#29+#30) | Evidence mode | Low |
| 19 | SC 3.1.2 Language of Parts (#26) | No F-technique — evidence only | High |

---

## PART 5 — Database Changes Needed

No new tables required. Custom check findings write to existing tables:

| Table | What gets written |
|---|---|
| `triage_items` | Each custom check finding: `source = 'custom'`, `issue_type`, `decision = NULL` (needs review) or `decision = 'confirmed'` (auto-confirmed fails) |
| `scan_results` | `custom_checks_json jsonb` column — new column needed |
| `screenshots` | Annotated screenshots uploaded to Supabase storage, path stored per finding |

**Migration needed:**
```sql
ALTER TABLE scan_results ADD COLUMN IF NOT EXISTS custom_checks_json jsonb DEFAULT '[]'::jsonb;
```

---

## PART 6 — Worker Architecture Change

Currently `scan-worker/index.js` runs axe-core and writes to `scan_results`. Custom checks need to:

1. Run AFTER axe-core (same Playwright page, page is already loaded).
2. Each check is a separate async function in `scan-worker/checks/` directory.
3. Results are aggregated and written to `custom_checks_json` in scan_results.
4. Each finding that is auto-triageable writes a row to `triage_items` directly from the worker.

```
scan-worker/
  index.js              ← orchestrator
  checks/
    placeholderContrast.js
    pageTitle.js
    languagePage.js
    autocomplete.js
    linkColor.js
    linkPurpose.js
    focusVisible.js
    imageAnnotation.js
    reflow.js
    focusObscured.js
    labelInName.js
    orientation.js
    textSpacing.js
    nonTextContrast.js
    targetSize.js
    skipLink.js
    structureEvidence.js
    landmarks.js
    languageParts.js
```

Each check file exports: `async function run(page, auditId, jobId) → { findings: [], screenshots: [] }`

---

*End of plan. All failure bases cited above are published W3C F-techniques or approved ACT rules. Items marked NEEDS REVIEW reflect either proposed (not yet approved) ACT rules or SCs with no F-technique where normative Understanding text supports the check.*
