# AuditV2 — Technical Documentation

> **Last updated:** May 2026  
> **Project:** Audit Studio — WCAG Accessibility Audit Tool  
> **Stack:** React, Flowbite, Vite, axe-core, Playwright

---

## What this tool does

AuditV2 is an accessibility audit tool that helps auditors check whether a website meets WCAG (Web Content Accessibility Guidelines) standards. It combines two things:

1. **A smart scope calculator** — works out exactly which accessibility rules apply to a specific website based on what the auditor tells it about the site
2. **An automated scanner** — runs the industry-standard axe-core engine against the website and maps findings back to the rules in scope

---

## The WCAG rulebook

### What is WCAG?

WCAG is the international standard for web accessibility, published by the W3C (the organisation that sets web standards). It defines success criteria — specific rules a website must meet to be considered accessible.

### Versions

| Version | Total rules | Notes |
|---------|-------------|-------|
| WCAG 2.1 | 78 | Current legal standard in most countries |
| WCAG 2.2 | 86 | Latest version — adds 9 new rules, removes 1 deprecated rule |

WCAG 2.2 removed SC 4.1.1 (Parsing) because modern browsers now handle the problem it was designed to catch automatically. This rule is excluded from the tool entirely.

### Conformance levels

Rules are organised into three levels. Each level is cumulative — AA includes all of A, AAA includes all of A and AA.

| Level | Rules | Use case |
|-------|-------|----------|
| A | 30 (2.1) / 32 (2.2) | Minimum baseline only |
| AA | 50 (2.1) / 56 (2.2) | Legal requirement in EU, Sweden, UK, most ADA guidance |
| AAA | 78 (2.1) / 86 (2.2) | Voluntary — not achievable for all content types |

**Default in the tool: AA.** This is the correct choice for almost all real-world audits.

### Complete SC count table

| Version | Level A | Level AA (cumulative) | Level AAA (cumulative) |
|---------|---------|----------------------|----------------------|
| WCAG 2.1 | 30 | 50 | 78 |
| WCAG 2.2 | 32 | 56 | 86 |

These numbers are the source of truth for the tool. They are verified against the official W3C specification and encoded as Sets in `src/lib/scCount.js`.

---

## How the scope calculator works

### The problem it solves

Not every WCAG rule applies to every website. A site with no video doesn't need to meet the video captioning rules. A site with no forms doesn't need to meet the form validation rules. Auditing irrelevant rules wastes time and produces noise.

The scope calculator removes rules that don't apply based on what the auditor knows about the site.

### Step 1 — Start with the full rule set

Based on the auditor's choice of WCAG version and level, the tool builds the complete set of applicable rules.

```
getAllSCsForTarget('2.2', 'AA') → Set of 56 SC IDs
```

### Step 2 — Pre-test questionnaire

The auditor answers up to 7 questions about the site. Questions are shown or hidden dynamically based on the version and level chosen — questions that would remove no rules for the current combination are never shown.

| Question | Rules removed on "No" | Visible for |
|----------|----------------------|-------------|
| Q1: Auto-playing or auto-updating content? | 2.2.2, 4.1.3 | All |
| Q2: Prerecorded video or audio? | 1.2.1–1.2.3, 1.2.5 (+ AAA: 1.2.6–1.2.8) | All |
| Q3: Live audio or video? | 1.2.4, 1.2.9 | AA and AAA only |
| Q4: Forms? | 1.3.5, 3.3.1–3.3.4, 3.3.7 (2.2 only) | All |
| Q5: Password/cognitive authentication? | 3.3.8, 3.3.9 | WCAG 2.2 AA/AAA only |
| Q6: Timed interactions or session timeouts? | 2.2.1, 2.2.3–2.2.6 (AAA) | All |
| Q7: Drag-and-drop interactions? | 2.5.7 | WCAG 2.2 AA/AAA only |

**"Unsure" never removes rules** — when in doubt, keep the rule in scope.

### Visibility matrix — which questions appear

| | 2.1 A | 2.1 AA | 2.1 AAA | 2.2 A | 2.2 AA | 2.2 AAA |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Q1 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Q2 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Q3 | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ |
| Q4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Q5 | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Q6 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Q7 | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |

### Step 3 — AAA supersession

When a stricter AAA rule is in scope, its AA counterpart is automatically satisfied and does not need to be audited separately.

| AAA rule in scope | Supersedes AA rule |
|---|---|
| 2.4.12 Focus Not Obscured (Enhanced) | 2.4.11 Focus Not Obscured (Minimum) |
| 1.4.6 Contrast Enhanced (7:1) | 1.4.3 Contrast Minimum (4.5:1) |
| 2.4.9 Link Purpose (Link Only) | 2.4.4 Link Purpose (In Context) |
| 2.2.3 No Timing | 2.2.1 Timing Adjustable |
| 1.4.9 Images of Text (No Exception) | 1.4.5 Images of Text |
| 2.1.3 Keyboard (No Exception) | 2.1.1 Keyboard |
| 3.2.5 Change on Request | 3.2.2 On Input |

Superseded rules are never silently removed — the UI shows: `"SC 1.4.3 — covered by SC 1.4.6 Contrast Enhanced"`

### The final output

```js
getApproxScCount('2.2', 'AA', { 2: 'no', 4: 'no' })

// Returns:
{
  total: 56,        // starting total for version + level
  skipped: 10,      // removed by pre-test answers
  superseded: 0,    // removed by AAA supersession
  active: 46,       // final audit scope
  skippedList: [...],
  supersededList: [...],
  activeList: [...],
}
```

---

## Key rules encoded in the calculator

1. **"Unsure" = keep in scope.** Never remove a rule on an unsure answer.
2. **Hidden questions are ignored.** If Q5 is not shown (WCAG 2.1 audit), a stored "no" answer for Q5 removes nothing.
3. **Q4 and Q5 are independent.** Answering "no" to forms does not remove auth rules. Answering "no" to auth does not remove form rules.
4. **Rules can only be removed if they exist in scope.** AAA-only rules never get removed on an AA audit.
5. **No rule is subtracted twice.** The calculator uses Sets, not counters — duplicates are impossible.
6. **SC 4.1.1 is excluded from everything.** It was removed in WCAG 2.2 and does not appear in either version's data.

---

## The axe-core scan engine

### What is axe-core?

axe-core is the world's most widely used automated accessibility testing engine. It is maintained by Deque Systems and used by Google, Microsoft, the BBC, and thousands of other organisations. It is open source and free.

### What axe can detect

axe automatically finds approximately **57% of WCAG issues**. The other 43% require human judgement — things like whether error messages are actually helpful, whether the reading order makes logical sense, or whether audio descriptions are accurate.

### The four result types

| Type | Meaning | Action required |
|------|---------|-----------------|
| `violations` | Definitive failures — zero false positives | Fix |
| `incomplete` | "Needs review" — axe couldn't be certain | Human decision |
| `passes` | Elements that passed | No action |
| `inapplicable` | Rule didn't run — no matching elements found | No action |

**The tool surfaces all four types.** `incomplete` items are just as important as violations — they need a manual sign-off from the auditor.

### How axe rules map to WCAG SC

axe tags each violation with WCAG SC identifiers in a compressed format:

```
wcag143  →  SC 1.4.3  (3 digits: principle.guideline.criterion)
wcag2412 →  SC 2.4.12 (4 digits: principle.guideline.criterion+criterion)
```

The `mapTagsToSC()` function in `axeRunner.js` converts these tags to the same SC IDs used in `scCount.js`, so every violation is automatically cross-referenced against the auditor's scope.

### In-scope vs out-of-scope violations

When axe finds a violation, the tool checks whether the violated SC is in the auditor's active scope:

- **In scope** — shown as a finding that must be addressed
- **Out of scope** — shown separately, flagged as "outside your audit scope"

This means an auditor who scoped out video rules won't see video-related violations cluttering their results — but the violations are still recorded transparently.

### What axe does NOT test

These SC cannot be automatically checked and always require manual testing:

- Cognitive load or reading complexity (3.1.5)
- Sign language (1.2.6)
- Whether error messages are actually helpful, not just present (3.3.3)
- Whether focus order is logically meaningful (2.4.3) — only that it exists
- Screen reader user experience quality — only structural correctness
- Audio description content accuracy (1.2.3, 1.2.5)

---

## File structure

```
src/
  lib/
    scCount.js          — SC data, visibility logic, scope calculator
    axeRunner.js        — axe-core engine, tag mapping, scan runner
    axeRunner.test.js   — unit tests for pure functions (10 tests, all passing)
    scanQueue.js        — scan job management, status tracking
  components/
    wizard/
      AuditDetailsFields.jsx  — Step 1: audit name, WCAG version, conformance level
      Step2Project.jsx        — Step 2: project details and client info
      Step3PreTest.jsx        — Step 3: pre-test questionnaire
      Step4Scope.jsx          — Step 4: SC count display and scope summary
      Step5Review.jsx         — Step 5: review and confirm
```

---

## Development setup

### Requirements

- **Node 20 LTS** — required. Node 25 causes a segfault with Vitest.
- Use nvm to manage Node versions: `nvm use 20`

### Install

```bash
npm install
```

### Run tests

```bash
./node_modules/.bin/vitest run src/lib/axeRunner.test.js
```

Expected output: 10 tests passing across `mapTagsToSC` (6 tests) and `buildAxeTags` (4 tests).

### Run dev server

```bash
npm run dev
```

---

## What is coming next

| Step | What | Status |
|------|------|--------|
| 1 | SC arrays verified | ✅ Done |
| 2 | Calculation functions built | ✅ Done |
| 3 | Wizard components wired | ✅ Done |
| 4 | axe-core engine + tests | ✅ Done |
| 5 | Scan UI — trigger scan, see live results | 🔜 Next |
| 6 | Playwright interaction scans — modals, dropdowns, forms | ⬜ Planned |
| 7 | Flow testing — onboarding, search, checkout flows | ⬜ Planned |

---

## Decisions log

These are decisions made during development and the reasons behind them.

**Why is 4.1.1 excluded from both WCAG 2.1 and 2.2 arrays?**  
SC 4.1.1 (Parsing) was officially deprecated in WCAG 2.2 because modern browsers handle HTML parsing errors automatically. Including it in 2.1 audits would give auditors a false sense that it matters — in practice no assistive technology is affected by parsing errors in modern browsers. It is excluded from both versions to keep the tool aligned with real-world relevance.

**Why is Level AA the default conformance level?**  
Level AA is the legal requirement under EN 301 549 (EU), DOS-lagen (Sweden), and most ADA-related guidance in the US. The vast majority of real audits target AA. Setting it as default reduces friction for the most common case while keeping A and AAA available for edge cases.

**Why does "Unsure" keep rules in scope?**  
If an auditor is not sure whether a site has a feature, it is safer to keep the related rules in scope and test them than to skip them and miss a real violation. The pre-test questionnaire is a scoping aid, not a checklist — its purpose is to remove certainty, not approximate it.

**Why is Q8 (data tables) not in the questionnaire?**  
SC 1.3.1 covers many things beyond tables — headings, lists, landmarks, form labels. Removing 1.3.1 because a site has no data tables would incorrectly drop testing for all the other things it covers. The question was removed to avoid misleading the auditor. Table-specific testing scope is handled as an auditor note in Step 4 instead.

**Why Node 20 and not a newer version?**  
Node 25 causes a segmentation fault when running Vitest 1.x due to an incompatibility in the V8 engine version. Node 20 LTS is the stable, tested version that all major testing tools are validated against.
