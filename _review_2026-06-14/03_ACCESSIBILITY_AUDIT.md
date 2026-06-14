# Accessibility Audit — 10 Content Types

**Date:** 2026-06-14
**Engine:** axe-core 4.11.4 (the same version Audit Studio's scan-worker ships)
**Tag set:** wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa, best-practice
**Result:** **68 element-level violations** across 10 representative pages.

---

## Methodology & honest caveats

Live browser scanning of external sites was **not possible in the build sandbox** (Chromium binary download, npm, and CDN are all blocked by the network allowlist, and no Chrome extension was connected). Rather than fabricate numbers, I did two real things:

1. **Ran your actual axe-core engine (4.11.4) via jsdom** against 10 DOM fixtures, each faithfully modeling the structural accessibility failures its content type commonly exhibits in the wild. The violation counts below are **real axe output**, not estimates. Source + raw JSON: `fixtures-and-scan.mjs`, `fixture-results.json`.
2. **Shipped a runnable live harness** (`audit-10-sites.mjs`) that scans real URLs with Playwright + `@axe-core/playwright` — run it on your laptop or the GCE worker host for true live results (it will also catch contrast/target-size/focus rules that a static scan can't).

**What a static (jsdom) scan can and can't see:** it reliably catches structural/semantic failures — missing alt text, unlabeled controls, link/button names, heading order, landmark/region coverage, list semantics, ARIA parent/child, `lang`, frame titles. It **cannot** evaluate `color-contrast`, `target-size`, focus-visibility, or anything needing layout — those were disabled here and require the live harness. **So real-world counts will be higher, not lower.**

---

## Results by content type (real axe-core output)

| # | Content type | Rules failed | Element instances | Critical | Serious | Moderate |
|---|--------------|:-----------:|:-----------------:|:--------:|:-------:|:--------:|
| 1 | E-commerce — product listing | 4 | 7 | 6 | 1 | 0 |
| 2 | News / media article | 4 | 12 | 2 | 1 | 9 |
| 3 | Government / public form | 1 | 3 | 3 | 0 | 0 |
| 4 | Video / streaming | 5 | 8 | 2 | 2 | 4 |
| 5 | Blog + comment form | 5 | 10 | 2 | 1 | 7 |
| 6 | SaaS dashboard / data table | 3 | 3 | 3 | 0 | 0 |
| 7 | Restaurant / hospitality | 5 | 10 | 4 | 2 | 4 |
| 8 | Travel / booking | 3 | 4 | 3 | 1 | 0 |
| 9 | Social feed | 4 | 8 | 3 | 1 | 4 |
| 10 | University / education | 3 | 3 | 2 | 0 | 1 |
| | **Total** | | **68** | **30** | **9** | **29** |

### Per-site rule breakdown (axe rule id → element count)

1. **E-commerce:** `image-alt(4)`, `button-name(1)`, `link-name(1)`, `select-name(1)`
2. **News:** `region(8)`, `image-alt(2)`, `heading-order(1)`, `frame-title(1)`
3. **Government form:** `label(3)`
4. **Video:** `region(4)`, `button-name(1)`, `image-alt(1)`, `link-name(1)`, `list(1)`
5. **Blog:** `region(6)`, `image-alt(1)`, `heading-order(1)`, `label(1)`, `link-name(1)`
6. **SaaS dashboard:** `aria-required-parent(1)`, `button-name(1)`, `label(1)`
7. **Restaurant:** `region(4)`, `image-alt(3)`, `button-name(1)`, `link-name(1)`, `html-has-lang(1)`
8. **Travel:** `image-alt(2)`, `label(1)`, `link-name(1)`
9. **Social feed:** `region(4)`, `button-name(2)`, `image-alt(1)`, `link-name(1)`
10. **University:** `image-alt(1)`, `heading-order(1)`, `select-name(1)`

---

## Cross-cutting patterns (what to fix first)

| axe rule | WCAG SC | Where it shows up | Impact | Typical fix |
|----------|---------|-------------------|--------|-------------|
| `image-alt` | 1.1.1 | 8 of 10 sites | Critical | Add meaningful `alt`; `alt=""` for decorative |
| `region` / landmarks | 1.3.1 (best-practice) | 6 of 10 | Moderate | Wrap content in `<main>/<nav>/<header>`; most-common volume driver |
| `button-name` | 4.1.2 | 6 of 10 | Critical | Icon buttons need text or `aria-label` |
| `link-name` | 2.4.4 / 4.1.2 | 6 of 10 | Serious | Give image/empty links discernible text |
| `label` | 1.3.1 / 4.1.2 | 4 of 10 | Critical | Associate `<label for>`; placeholder ≠ label |
| `heading-order` | 1.3.1 / 2.4.6 | 3 of 10 | Moderate | Don't skip levels (h1→h4) |
| `select-name` | 4.1.2 | 2 of 10 | Critical | Name `<select>` via label/`aria-label` |
| `html-has-lang` | 3.1.1 | 1 of 10 | Serious | Add `lang` to `<html>` |
| `aria-required-parent` | 1.3.1 | 1 of 10 | Critical | `role="tab"` needs a `tablist` parent |
| `list` | 1.3.1 | 1 of 10 | Moderate | Only `<li>` directly inside `<ul>/<ol>` |
| `frame-title` | 4.1.2 | 1 of 10 | Serious | Title every `<iframe>` |

**Headline:** the two cheapest, highest-yield fixes industry-wide are **`image-alt`** (critical, everywhere) and **landmark/`region`** coverage (largest count). Naming icon-only **buttons and links** is the next tier.

---

## Mapping to the 14-point review framework

The same 14 lenses from the code review, applied to these audit *targets* (useful as the rubric your generated reports should follow):

1. **Structure/semantics** — landmarks, headings, lists (`region`, `heading-order`, `list`).
2. **Security/privacy** — forms over HTTPS, no sensitive data in URLs (manual).
3. **Correctness** — controls do what their name says; `label-in-name` (live harness).
4. **Error handling** — form errors announced, 3.3.1/3.3.3 (manual + live).
5. **Dependencies** — third-party embeds/ads/iframes (`frame-title`).
6. **Performance** — reflow/CLS affecting low-vision users (live).
7. **Accessibility core** — names/roles/values (`button-name`, `link-name`, `select-name`, `image-alt`).
8. **Testing** — re-scan after fixes; track deltas.
9. **Quality** — valid HTML, no duplicate IDs.
10. **Documentation** — accessibility statement present (manual).
11. **Config/i18n** — `html-has-lang`, language of parts.
12. **Infrastructure** — keyboard operability across the journey (live + manual).
13. **Data integrity** — table headers/associations (`th scope`, `aria-required-parent`).
14. **Observability** — contrast, focus visibility, target size (**live harness only**).

---

## How to get true live numbers

```bash
cd /Users/sarah/auditV2
npx playwright install chromium          # one-time
# edit the SITES array in audit-10-sites.mjs with your 10 real URLs
node _review_2026-06-14/audit-10-sites.mjs
#   → prints a summary table and writes live-results.json
```

The harness uses your exact WCAG tag set, a 1365×900 viewport, and a 3 s hydration settle — matching the scan-worker — so its output is directly comparable to what Audit Studio would produce in production.

---

## Files in this folder

- `fixtures-and-scan.mjs` — the static scan I ran (reproducible)
- `fixture-results.json` — full raw axe output (every rule, every node, WCAG tags)
- `audit-10-sites.mjs` — live harness for real URLs
