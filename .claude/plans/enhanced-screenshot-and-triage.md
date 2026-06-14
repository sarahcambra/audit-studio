# Plan: Enhanced Screenshot Highlighting + Auditor Display

## Context Gathered

### What axe-core returns
Each violation has:
- `id` (rule ID like `"color-contrast"`, `"aria-hidden-focus"`)
- `impact`: `critical` | `serious` | `moderate` | `minor`
- `nodes[]`: each with `target` (selector array), `html`, `failureSummary`
- `tags[]`: `wcag2aa`, `wcag22aa`, `cat.aria`, `best-practice`, `experimental`
- `help`, `description`, `helpUrl`

### What custom checks return
Each finding has:
- `checkId` (e.g. `custom-focus-not-visible`, `custom-placeholder-contrast`)
- `sc` (e.g. `1.4.3`, `2.4.7`) — maps to WCAG principle
- `confidence`: `CONFIRMED_FAIL` | `NEEDS_REVIEW`
- `failureBasis`: `F78`, `F55`, etc.
- `message`: human-readable summary
- `data`: raw evidence (`elements[]`, `skips[]`, `duplicates[]`, etc.)
- `nodeCount`, `elementSnippet`

### What RULE_ENRICHMENTS provides
129 of ~160 rules have `auditorTitle`. Each entry has:
- `auditorTitle`, `auditorNotes` — human-readable guidance
- `clientFix`, `badExample`, `goodExample` — developer remediation
- `affectedUsers` — who is impacted
- `fixDifficulty`: Easy | Medium | Hard
- `issueType`: failure | needs review | failure, needs review
- `ruleType`: wcag | best-practice | experimental
- `wcagTechniques[]`, `wcagFailures[]`, `ariaPractices`
- `codeHighlight` — string to highlight in code snippets

### Current screenshot engine
- Highlights max 20 elements with a 3px outline + shadow
- Colors: critical=red, serious=orange, moderate/minor=purple (brand)
- Adds a fixed label in top-right corner: "N Issues Detected"
- Scrolls to first highlighted element before capture
- `fullPage: false` (viewport only)

### Current TriageTab expanded row
8+ accordion sections:
1. Priority header (impact + category badges)
2. "Who Is Affected" (impact-based generic text)
3. Screenshot (prominent)
4. "Issue Location & Context"
5. Technical Details (collapsible)
6. Auditor Decision
7. How to Fix (collapsible)
8. All Affected Elements (collapsible)
9. WCAG References (collapsible)
10. Raw Data (collapsible)

**Problem: Overwhelming. Auditors scroll forever.**

---

## Phase 1: Screenshot Highlighting Overhaul

### 1a. Color-by-Category System (instead of only impact)

Replace the simple impact-only coloring with a **category + impact** matrix:

| Category | Color | Hex | Use Case |
|----------|-------|-----|----------|
| WCAG Critical failure | Red | `#dc2626` | Critical impact + WCAG rule |
| WCAG Serious failure | Orange | `#ea580c` | Serious impact + WCAG rule |
| WCAG Moderate/Minor | Purple | `#540cac` | Moderate/minor + WCAG rule |
| Best Practice | Amber | `#f59e0b` | `ruleType: "best-practice"` |
| Experimental | Gray | `#6b7280` | `ruleType: "experimental"` |
| Custom Check | Teal | `#0891b2` | Custom checks (placeholder contrast, focus visible, etc.) |
| Needs Review | Blue outline | `#2563eb` | `confidence: "NEEDS_REVIEW"` — dashed border |

**Why:** An auditor triaging 50 violations needs to see at a glance: "this is a hard WCAG failure (red)" vs "this is a best-practice suggestion (amber)" vs "this is a custom check finding (teal)".

### 1b. Numbered Element Labels

Add a small circular badge next to each highlighted element:
```
┌─────────┐
│  ①      │  ← badge positioned top-left of element
│ [button]│  ← element with outline
└─────────┘
```

Badge style: white circle, colored number, 14px font. The number corresponds to the violation's position in the triage list. This lets the auditor cross-reference the screenshot with the triage table: "Element ③ is the contrast failure on the Submit button."

### 1c. Clustered Multi-Screenshots

**Problem:** With `fullPage: false`, if violations are spread across a long page, only the first cluster is visible.

**Solution:** When violations are vertically dispersed (span > 2 viewport heights), take **multiple screenshots** — one per cluster:
1. Sort elements by vertical position
2. Group into clusters where elements are within 1 viewport height of each other
3. For each cluster, scroll to cluster center and capture
4. Store all screenshots in `screenshots[]` array (not just one)
5. TriageTab shows a thumbnail gallery: "Screenshot 1 of 3" with next/prev

**Fallback:** If only one cluster, keep single screenshot behavior.

### 1d. Legend Overlay

Add a small legend at the bottom-left of every screenshot:
```
┌────────────────────────────┐
│  [page content]            │
│                            │
│  ● WCAG failure  ● Custom  │
│  ● Best practice  ● Review │
└────────────────────────────┘
```

This makes screenshots self-explanatory when shared with clients.

---

## Phase 2: TriageTab Display Overhaul

### 2a. Simplify Expanded Row to 3 Sections

Current: 8+ accordion sections. **Target: 3 cards.**

**Card 1: "What the Issue Is"**
- Impact badge + Category badge + Issue type badge
- `auditorTitle` (large)
- `auditorNotes`
- `affectedUsers` as icon chips (👁 low vision, ⌨️ keyboard, etc.)
- `fixDifficulty` chip (Easy=green, Medium=yellow, Hard=red)
- Screenshot (if available)

**Card 2: "Evidence & Location"**
- Element count
- First element: friendly description, visible text, selector, HTML snippet
- "Show all N elements" toggle (replaces current accordion)
- Location context (landmark, page section)

**Card 3: "How to Fix & Decide"**
- `clientFix` text
- `badExample` / `goodExample` side by side (no accordion — always visible)
- Decision buttons (Confirmed / Not a failure / Manual check / Deferred)
- Dismissal reason dropdown

**Why 3 cards:** Auditors triage 50-200 issues per audit. Every extra click or scroll adds friction. The most actionable content (what is it, where is it, how to fix) should be immediately visible.

### 2b. Pre-Select Triage Decision from `issueType`

`RULE_ENRICHMENTS` has `issueType`:
- `"failure"` → Pre-select "Confirmed failure" button, show red emphasis
- `"needs review"` → No pre-selection, but show yellow "Needs auditor review" banner
- `"failure, needs review"` → Pre-select "Manual check", show amber banner

This saves auditors from reading the same guidance 50 times.

### 2c. Principle-Based Grouping

Add a toggle in TriageTab filter bar: **Group by Principle** vs **Group by Impact**

When grouped by principle:
- Perceivable (1.x) — teal header
- Operable (2.x) — amber header
- Understandable (3.x) — blue header
- Robust (4.x) — rose header

This matches how WCAG conformance reports are structured and helps auditors think in terms of "all keyboard issues together" rather than scattered by impact.

### 2d. Smart Default for Custom Checks

Custom checks currently appear in triage with generic fallback text. Enhance `toTriageRow()` in the worker to:
1. Look up `RULE_ENRICHMENTS[finding.checkId]` for `auditorTitle`, `clientFix`, `fixDifficulty`
2. Store `ruleType` and `issueType` from enrichment into `triage_items` columns
3. For checks with `data.elements[]`, create one triage row per element (or keep grouped — decision point)

### 2e. Show Raw Data Only on Demand

The "Raw Scan Data" accordion is developer-facing. Move it to a "Developer Details" toggle at the very bottom, collapsed by default. Most auditors never need it.

---

## Phase 3: Rule Enrichment Coverage Gap

### 3a. Fill Missing `auditorTitle` Entries

~31 rules lack `auditorTitle` (out of ~160 total). The TriageTab falls back to `rule_id` which is ugly (e.g. `"aria-braille-equivalent"`).

Priority fill order:
1. Rules that appear frequently in real scans (check scan results DB for frequency)
2. Rules with `issueType: "failure"` (these auto-triage to violations)
3. Rules from custom checks that don't yet have enrichment entries

### 3b. Add `principle` Field to Enrichments

Add `principle: "1" | "2" | "3" | "4"` to each enrichment entry. Derive from the SC number or tags. This enables principle-based grouping without runtime lookup.

---

## Implementation Order (Priority)

| Phase | Task | Effort | Impact |
|-------|------|--------|--------|
| 1a | Color-by-category highlighting | Small | High — screenshots become self-documenting |
| 1b | Numbered element badges | Small | High — cross-ref screenshot ↔ triage list |
| 2a | Simplify expanded row to 3 cards | Medium | Very High — reduces auditor friction |
| 2b | Pre-select triage from `issueType` | Small | Medium — saves clicks |
| 1c | Clustered multi-screenshots | Medium | Medium — solves long-page problem |
| 2c | Principle-based grouping | Medium | Medium — matches WCAG report structure |
| 1d | Legend overlay | Small | Low — nice-to-have for client sharing |
| 3a | Fill missing auditorTitles | Large (ongoing) | Medium — polish |
| 2d | Custom check enrichment lookup | Small | Medium — fixes generic custom check display |
| 2e | Move raw data to bottom | Small | Low — declutter |
| 3b | Add principle field | Small | Low — enables grouping |

---

## Open Decision: Screenshot Strategy

The user should choose between:

**Option A: Enhanced Single Screenshot** (recommended for now)
- Keep one screenshot per scan
- Add numbered badges + color legend + category colors
- Scroll to the first critical element (or first element if no critical)
- Simpler to implement, faster to capture

**Option B: Multiple Clustered Screenshots**
- Take 1-3 screenshots per scan when violations are spread out
- TriageTab gets a thumbnail carousel
- More complete coverage but increases storage cost and complexity
- Best for long landing pages with scattered issues

**Recommendation:** Start with Option A. Add Option B only if users complain about missing violations in screenshots.

---

## Files to Modify

| File | Changes |
|------|---------|
| `scan-worker/index.js` | `takeScreenshot()`: color matrix, numbered badges, legend overlay, smart scroll target |
| `scan-worker/index.js` | `groupViolations()`: include `ruleType` from enrichment in group data |
| `src/features/triage/components/TriageTab.jsx` | Collapse expanded row to 3 cards, pre-select decision, move raw data |
| `src/lib/ruleEnrichments.js` | Add `principle` field; fill missing titles (ongoing) |
| `src/lib/db/triage.js` | `getTriageItems`: include new columns if schema changes |
| `src/shared/ui/` | May need new `DifficultyBadge`, `PrincipleBadge` components |

---

## Database Changes Needed

None for Phase 1-2. The existing `triage_items` schema already has:
- `impact`, `tags`, `rule_id`, `issue_type`, `wcag_sc`

If adding `rule_type` or `principle` columns later, run:
```sql
ALTER TABLE triage_items ADD COLUMN rule_type text;
ALTER TABLE triage_items ADD COLUMN principle text;
```

---

## Success Metrics

1. Screenshot clarity: Auditor can identify the violation element without reading the selector
2. Triage speed: Auditor makes a decision in <30 seconds per issue (vs. current ~60s with all the scrolling)
3. Coverage: No more "I can't find this element in the screenshot" complaints
