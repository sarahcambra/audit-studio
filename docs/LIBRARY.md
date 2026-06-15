# AuditV2 Library Reference

Complete documentation of every utility module in `src/lib/` (excluding `ruleEnrichments.js` which has its own dedicated explorer). These modules form the intellectual property of the audit tool — curated data mappings, DOM helpers, Supabase database clients, and violation processing logic.

---

## supabase.js
**File:** `src/lib/supabase.js`
**Purpose:** Initialise and export the single Supabase client instance used by all database modules.

**Exports:**
- `supabase` — `@supabase/supabase-js` client singleton

**Key functions:** *(none — client creation only)*

**Dependencies:**
- `@supabase/supabase-js` (npm package)
- `import.meta.env.VITE_SUPABASE_URL` — project URL (trailing slash stripped)
- `import.meta.env.VITE_SUPABASE_ANON_KEY` — anon/public key (surrounding quotes stripped)

**Used by:**
- All `src/lib/db/*.js` modules (`audits.js`, `scans.js`, `triage.js`, `kb.js`, `catalog.js`, `manualChecks.js`)
- `src/features/auth/AuthProvider.jsx` (auth state / session)
- `src/features/scan/hooks/useScanRunner.js`
- `src/features/triage/components/TriageTab.jsx`
- `src/features/report/generateConformanceReport.js`

**Notes:** Throws a descriptive error at import time if either environment variable is missing. The key normalisation strips leading/trailing single quotes that sometimes leak into `.env` files.

---

## wcagReferences.js
**File:** `src/lib/wcagReferences.js`
**Purpose:** Static mapping from every WCAG 2.1 success-criterion ID to its official W3C Understanding page title and URL.

**Exports:**
- `WCAG_REFERENCES` — `Object.freeze`’d dictionary keyed by SC ID (`"1.1.1"`, `"1.4.3"`, … `"4.1.3"`)

**Key functions:** *(none — pure data)*

**Dependencies:** *(none)*

**Used by:**
- `src/features/triage/components/TriageTab.jsx` — renders WCAG reference links in triage cards
- `src/features/triage/components/IssueDetailDrawer.jsx` — WCAG References section
- `src/pages/IssueDetailPage.jsx` — same references display

**Notes:** Covers all 2.1 SCs (no 2.2 additions). URLs point to `https://www.w3.org/WAI/WCAG21/Understanding/…`.

---

## wcagScLevels.js
**File:** `src/lib/wcagScLevels.js`
**Purpose:** Map every WCAG 2.1 success criterion to its conformance level (A / AA / AAA) and provide helpers to resolve the level from raw scan/issue data.

**Exports:**
- `WCAG_SC_LEVEL` — frozen `Record<string, "A"|"AA"|"AAA">`
- `normalizeScId(raw)` — strip `"SC "` prefix, trailing commas/semicolons, and extract the `d.d.d(d)?` format
- `resolvedConformanceLevel(issue)` — resolve level from `issue.wcagLevel` first, then fall back to `issue.wcagSC` → `WCAG_SC_LEVEL`

**Dependencies:** *(none)*

**Used by:**
- No direct frontend imports found in `src/` (intended for scan-worker / report generation consumption).
- Unit tested in `tests/unit/wcagScLevels.test.js`.

**Notes:** Includes full AAA coverage so manual testing workflows can reference criteria that axe-core never flags.

---

## wcagScData.js
**File:** `src/lib/wcagScData.js`
**Purpose:** Complete WCAG 2.1 + 2.2 success-criterion catalogue with metadata — name, level, and whether axe can ever test the SC (`alwaysManual`).

**Exports:**
- `WCAG_SC_DATA` — frozen `Record<string, { name, level, alwaysManual }>`
- `PRINCIPLES` — principle labels by first digit (`"1" → "Perceivable"`, `"2" → "Operable"`, …)
- `getAlwaysManualSCs()` — return every SC ID whose `alwaysManual === true` (used to seed manual_checks rows)
- `getScName(scId)` — resolve name or fall back to the raw SC ID
- `getScLevel(scId)` — resolve level or fall back to `'?'`
- `getPrinciple(scId)` — extract the principle number (`"1.4.3"` → `"1"`)

**Dependencies:** *(none)*

**Used by:**
- `src/pages/AuditDetailPage.jsx` — displays SC names in the Manual Checks tab
- Scan worker (`api/scan.js`) — seeds `manual_checks` rows for SCs that axe never touches

**Notes:** `alwaysManual = true` means axe-core produces no automated results for this SC; human verification is always required (e.g. media captions, sign language, orientation lock, etc.).

---

## axeRuleCategories.js
**File:** `src/lib/axeRuleCategories.js`
**Purpose:** Classify axe-core rules into display categories (WCAG, best-practice, experimental, ARIA, contrast) and extract WCAG SC associations from rule tags.

**Exports:**
- `getRuleType(ruleId)` → `"wcag" | "best-practice" | "experimental" | null`
- `isBestPractice(ruleId, tags)` → boolean
- `isExperimental(ruleId, tags)` → boolean
- `isAriaRule(ruleId, tags)` → boolean
- `isContrastRule(ruleId, tags)` → boolean
- `getWcagInfoFromTags(tags)` → `{ sc, level }`
- `categorizeRule(ruleId, tags)` → full categorisation object (`category`, `wcagSC`, `wcagLevel`, booleans, `displayCategory`)
- `getWcagUrl(sc)` → `https://www.w3.org/WAI/WCAG22/Understanding/…`
- `formatSC(sc)` → passthrough or empty string
- `groupViolationsByCategory(violations)` → partitioned arrays (`wcagViolations`, `bestPracticeViolations`, `ariaViolations`, `contrastViolations`, `experimentalViolations`)
- `groupPassesByCategory(passes)` → same partitioning for pass results

**Dependencies:**
- `RULE_ENRICHMENTS` from `./ruleEnrichments.js`

**Used by:**
- Unit tested in `tests/unit/axeRuleCategories.test.js`.
- No direct React-component imports found in `src/` — may be legacy / planned for future reporting views.

**Notes:** Tag parsing decodes `wcag111` → `"1.1.1"`, `wcag2411` → `"2.4.11"`. Level resolution checks `wcag2aaa` → `"AAA"`, `wcag2aa` → `"AA"`, `wcag2a` → `"A"`.

---

## groupViolations.js
**File:** `src/lib/groupViolations.js`
**Purpose:** Group axe violations by `ruleId + nearest landmark` so each card in the triage UI represents a distinct issue location with a node count.

**Exports:**
- `groupViolations(violations, wcagVersion, conformanceLevel)` → array of group objects
- `groupFlowViolations(steps, wcagVersion, conformanceLevel)` → merge flow-step violations then delegate to `groupViolations`

**Key functions (internal):**
- `isWcagFailure(tags)` — true if any tag is in `['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']`
- `getIssueType(ruleId, enrichment, tags)` — priority: explicit `issueType` from `RULE_ENRICHMENTS` → `best-practice` tag → enrichment `ruleType === 'best-practice'` → default `'failure'`

**Dependencies:**
- `RULE_ENRICHMENTS` from `./ruleEnrichments.js`

**Used by:**
- `src/features/scan/components/ScanResults.jsx` — groups raw axe results for display
- Unit tested in `tests/unit/groupViolations.test.js`

**Notes:** Each group carries: `groupId`, `ruleId`, `landmark`, `issueType`, `impact`, `isWcagFailure`, `scIds`, `nodeCount`, `nodes[]`, and enrichment-derived metadata (`auditorTitle`, `auditorNotes`, `clientFix`, `fixDifficulty`, `affectedUsers`, `wcagTechniques`, `wcagFailures`, `ariaPractices`).

---

## enrichViolations.js
**File:** `src/lib/enrichViolations.js`
**Purpose:** Overlay human-friendly metadata from `RULE_ENRICHMENTS` onto raw axe violations so the UI shows curated titles, fix instructions, code examples, and affected-user info without hard-coding rule-specific copy.

**Exports:**
- `enrichViolation(violation)` → enriched single violation
- `enrichResults(results)` → enrich both `violations` and `incomplete` arrays, pass through passes/inapplicable unchanged

**Dependencies:**
- `RULE_ENRICHMENTS` from `./ruleEnrichments.js`

**Used by:**
- No direct React-component imports found in `src/`.
- The scan-worker (`scan-worker/lib/grouping.js`) contains its own independent `enrichViolation` implementation (simpler, normalises impact only) rather than importing this file.

**Notes:** Falls back gracefully: every enrichment field defaults to the original axe value or a safe empty value so the UI never receives `undefined`. Recognises both `violation.id` and `violation.ruleId`.

---

## componentSelectors.js
**File:** `src/lib/componentSelectors.js`
**Purpose:** Generic CSS selector catalogue for the quick-select dropdown in the Component Scan tab and Step 4 scope configuration.

**Exports:**
- `COMPONENT_SELECTORS` — array of `{ label, selector }` objects (58 lines, 18 entries)

**Dependencies:** *(none)*

**Used by:**
- `src/features/audit/components/AuditForm/steps/Step4Scope.jsx` — datalist for scope item selection
- `src/features/scan/components/ComponentScanTab.jsx` — component scan dropdown

**Notes:** Selectors are intentionally generic (not Flowbite-specific), combining semantic HTML, ARIA roles/labels, data attributes, and common class-name conventions to maximise match probability across sites. Examples: `nav, [role="navigation"], [aria-label*="nav" i], .navbar` for Navbar; `[role="dialog"], [role="alertdialog"], .modal, [data-modal], .dialog` for Modal.

---

## componentPatterns.js
**File:** `src/lib/componentPatterns.js`
**Purpose:** W3C ARIA Authoring Practices Guide (APG) pattern reference — maps component types to their ARIA requirements, related WCAG SCs, common selectors, and keyboard interactions.

**Exports:**
- `COMPONENT_PATTERNS` — frozen dictionary keyed by component ID (`accordion`, `alert`, `alertdialog`, `breadcrumb`, `button`, `checkbox`, `combobox`, `dialog`, `disclosure`, `grid`, `link`, `listbox`, `menu`, `menubar`, `meter`, `modal`, `navbar`, `progressbar`, `radiogroup`, `search`, `slider`, `spinbutton`, `switch`, `table`, `tabs`, `textbox`, `toolbar`, `tooltip`, `tree`)
- `getComponentPattern(id)` → pattern object or `null`
- `getAllComponentPatterns()` → array of all patterns
- `searchComponentPatterns(query)` → filter by name, description, or category
- `getPatternsByCategory(category)` → filter by exact category
- `getPatternCategories()` → sorted unique category list
- `matchSelectorToComponent(selector)` → return component ID if a common selector is a substring match

**Dependencies:** *(none)*

**Used by:**
- Referenced in `docs/STRUCTURE.md` but no direct imports found in `src/` React components.
- Available for future component-scan guidance overlays / pattern-matching features.

**Notes:** Each pattern contains: `id`, `name`, `category`, `ariaPatternUrl`, `description`, `requiredRoles[]`, `requiredAttributes[]`, `recommendedAttributes[]`, `relatedSCs[]`, `commonSelectors[]`, `keyboardInteractions[]`.

---

## elementUtils.js
**File:** `src/lib/elementUtils.js`
**Purpose:** DOM element parsing and human-friendly description builders for accessibility auditing.

**Exports:**
- `parseElementInfo(html)` → `{ tag, text, classes, id }`
- `buildFriendlyDescription(html, target)` → human-readable one-liner (e.g. `Button labeled "Submit"`, `Image (missing alt attribute)`)
- `getElementCategory(tag)` → `"Interactive" | "Form" | "Image" | "Heading" | "Landmark" | "Table" | "List" | "Content"`
- `formatSelector(target)` → join array with ` > ` or return string
- `truncateText(text, maxLength = 100)` → ellipsis truncation
- `getAffectedUsers(impact, tags)` → deduplicated array of affected user descriptions
- `buildCustomCheckContext(customCheck)` → contextual info for custom checks (orientation, skip links, headings, reflow, language, etc.)

**Dependencies:** *(none)*

**Used by:**
- No direct React-component imports found in `src/`.
- The scan-worker (`scan-worker/lib/grouping.js`) contains its own independent implementations of `parseElementInfo` and `buildFriendlyDescription` rather than importing this file.

**Notes:** `parseElementInfo` uses regex on HTML snippets (no DOM required). `buildFriendlyDescription` has per-tag description generators with sensible fallbacks. `getLocationHint` (internal) infers structural context from CSS selectors (nav, header, footer, main, aside, form, modal, list, table). `buildCustomCheckContext` maps ~15 custom check IDs to rich context objects used in manual-check reporting.

---

## urlUtils.js
**File:** `src/lib/urlUtils.js`
**Purpose:** URL normalisation and validation for user-typed domain inputs.

**Exports:**
- `normaliseUrl(raw)` → prepend `https://` if no protocol present; returns empty string for empty input
- `isValidUrl(raw)` → `true` only if the normalised URL is structurally valid **and** the hostname contains at least one dot (rejects bare words like `"flowbite"` or `"localhost"`)

**Dependencies:** *(none — native `URL` constructor only)*

**Used by:**
- `src/features/audit/components/AuditForm/NewAuditWizard.jsx` — validate and normalise website URL during audit creation
- `src/features/audit/components/AuditForm/steps/Step2ProjectDetails.jsx` — same validation
- `src/features/audit/components/AuditForm/steps/Step4Scope.jsx` — scope item URL validation
- `src/features/scan/components/PageScanTab.jsx` — page scan URL input
- `src/features/scan/components/FlowScanTab.jsx` — flow scan URL input
- `src/features/scan/components/ComponentScanTab.jsx` — component scan URL input

**Notes:** Explicitly rejects `localhost` and single-word hostnames because `new URL("https://flowbite")` is structurally valid but not a real web URL for the audit tool’s purposes.

---

## scCount.js
**File:** `src/lib/scCount.js`
**Purpose:** Compute the applicable success-criterion count and set for any combination of WCAG version, conformance level, and pre-test questionnaire answers.

**Exports:**
- `WCAG_21` — SC IDs grouped by level for WCAG 2.1
- `WCAG_22_ADDITIONS` — SC IDs added in WCAG 2.2 (grouped by level)
- `PRETEST_SC_MAP` — `questionId → { "2.1": [scIds…], "2.2": [scIds…] }` — which SCs to remove when answer is `"no"`
- `SUPERSESSION_MAP` — `aaaSC → aaSC` — when an AAA SC is in scope, its AA counterpart is satisfied and removed
- `getAllSCsForTarget(wcagVersion, conformanceLevel)` → `Set` of applicable SC IDs
- `getVisibleQuestions(wcagVersion, conformanceLevel)` → array of question IDs that have at least one applicable SC
- `computeSkippedSCs(preTestAnswers, wcagVersion, applicableSCSet, conformanceLevel)` → `Set` of SCs to skip based on `"no"` answers
- `applySupersessions(activeSCSet)` → `Set` with AA counterparts removed where AAA is present
- `getApproxScCount(wcagVersion, conformanceLevel, preTestAnswers)` → full count breakdown (`total`, `skipped`, `superseded`, `active`, `skippedList`, `supersededList`, `activeList`, `visibleQuestions`)

**Dependencies:** *(none)*

**Used by:**
- `src/features/audit/components/AuditForm/steps/Step5Review.jsx` — displays SC count in review step
- `src/features/audit/components/AuditForm/steps/Step4Scope.jsx` — scope preview with supersession info
- `src/features/audit/components/AuditForm/steps/Step3PreTest.jsx` — determines visible questions
- `src/features/audit/components/AuditForm/NewAuditWizard.jsx` — question visibility logic
- `src/features/scan/components/ScanPanel.jsx` — active SC count display

**Notes:** Input normalisation strips `"WCAG "` prefix and `"Level "` prefix. Invalid inputs return `0` counts with an `error` string. The pre-test map covers 7 questions (Q1–Q7); Q8 (data tables) is intentionally omitted because `1.3.1` is never fully removed.

---

## db/audits.js
**File:** `src/lib/db/audits.js`
**Purpose:** Supabase CRUD operations for the `audits` table and the `audit_summary` view.

**Exports:**
- `createAudit(userId, form)` → insert audit row; normalises `wcagVersion` (strips `"WCAG "` prefix for DB constraint)
- `getAudits(userId)` → fetch all audits from `audit_summary` view, newest first
- `getAudit(auditId)` — merges `audit_summary` + raw `audits` row so JSONB fields (`scope_json`, `pre_test_answers`, `notes`, `website_url`, `audit_goal`) are always present
- `updateAudit(auditId, updates)` → generic update
- `archiveAudit(auditId)` → set `status` to `"archived"`
- `deleteAudit(auditId)` → cascade delete (FK constraints handle `scan_jobs`, `triage_items`, `manual_checks`, etc.)
- `updateAuditFavicon(auditId, faviconUrl)` → fire-and-forget favicon save

**Dependencies:**
- `supabase` from `@/lib/supabase`

**Used by:**
- `src/pages/AuditsPage.jsx` — list, archive, update, delete
- `src/pages/AuditDetailPage.jsx` — single audit fetch
- `src/pages/IssueDetailPage.jsx` — audit fetch
- `src/features/audit/hooks/useAudits.js` — list hook
- `src/features/audit/hooks/useAudit.js` — single audit hook
- `src/features/audit/hooks/useCreateAudit.js` — creation hook
- `src/features/audit/hooks/useUpdateAudit.js` — update hook
- `src/features/audit/hooks/useDeleteAudit.js` — delete hook
- `src/features/audit/hooks/useArchiveAudit.js` — archive hook
- `src/features/scan/components/ScanPanel.jsx` — favicon update

---

## db/scans.js
**File:** `src/lib/db/scans.js`
**Purpose:** Supabase CRUD for `scan_jobs`, `scan_results`, and screenshot storage.

**Exports:**
- `createScanJob({ auditId, scanType, url, selector, flowSteps })` → insert pending job
- `updateScanJob(jobId, updates)` → status transitions (`pending` → `running` → `complete` / `error`)
- `saveScanResults(jobId, results)` → insert into `scan_results` with all JSONB arrays and counts
- `getScanJobs(auditId)` → fetch jobs with nested `scan_results`
- `saveScreenshot({ jobId, groupId, base64Png, description })` → validate size (5 MB max), decode base64 to Blob, upload to `screenshots` bucket, record in `screenshots` table

**Dependencies:**
- `supabase` from `@/lib/supabase`

**Used by:**
- `src/pages/AuditDetailPage.jsx` — fetch scan jobs
- `src/features/scan/hooks/useScanRunner.js` — create jobs, update status, save results
- Scan worker calls `saveScreenshot` after capturing page images

**Notes:** `saveScreenshot` returns `{ error, message, skipped }` on validation failure; `{ url, error, message }` on upload failure; and `{ data, url, error: null }` on success. The DB record stores the public URL even if the table insert fails.

---

## db/triage.js
**File:** `src/lib/db/triage.js`
**Purpose:** Supabase operations for triage decisions, evidence uploads, and auditor overrides.

**Exports:**
- `saveTriage({ auditId, jobId, groupId, ruleId, landmark, issueType, decision, dismissalReason, dismissalNote, clientFixOverride, auditorNotes })` — upsert on `audit_id, group_id`
- `getTriageItems(auditId)` → all triage items for an audit
- `getTriageItemById(itemId)` → single item
- `getScanResultsWithViolations(jobId)` → raw `violations_json`, `grouped_violations`, `custom_checks_json`
- `updateTriageItem(triageId, updates)` → generic update
- `saveOverrides(triageId, overrides)` → write `overrides_json` (clientFix, fixDifficulty, badExample, goodExample, affectedUsers)
- `uploadEvidenceFile(triageId, file)` → upload to `triage-evidence` bucket, return 1-hour signed URL
- `appendEvidenceFiles(triageId, newFiles)` — atomic JSONB append via Postgres RPC `append_evidence_files`

**Dependencies:**
- `supabase` from `@/lib/supabase`

**Used by:**
- `src/features/triage/components/TriageTab.jsx` — fetch triage items, update items, get scan results
- `src/features/triage/components/IssueDetailDrawer.jsx` — save overrides, upload evidence, append evidence
- `src/pages/IssueDetailPage.jsx` — fetch triage item, update triage, get scan results

**Notes:** `appendEvidenceFiles` uses a Postgres RPC to atomically append file metadata to the `evidence_files` JSONB column, avoiding the read-then-write race condition.

---

## db/kb.js
**File:** `src/lib/db/kb.js`
**Purpose:** Knowledge-base override storage — per-user customisations of rule metadata (titles, fix instructions, notes).

**Exports:**
- `getKbOverrides(userId)` → all `kb_overrides` rows for a user
- `saveKbOverride(userId, ruleId, updates)` — upsert on `user_id, rule_id`

**Dependencies:**
- `supabase` from `@/lib/supabase`

**Used by:**
- KB management UI (not yet wired into React components found in search).

**Notes:** Intended to let auditors personalise rule guidance without modifying the global `RULE_ENRICHMENTS` database.

---

## db/catalog.js
**File:** `src/lib/db/catalog.js`
**Purpose:** CRUD for reusable audit scope / component catalogue items.

**Exports:**
- `getCatalogItems(userId)` → user-owned + global items, ordered by `sort_order`
- `createCatalogItem(userId, item)` → insert
- `updateCatalogItem(itemId, updates)` → generic update
- `deleteCatalogItem(itemId)` → delete

**Dependencies:**
- `supabase` from `@/lib/supabase`

**Used by:**
- Scope / component catalogue management UI (not yet wired into React components found in search).

---

## db/manualChecks.js
**File:** `src/lib/db/manualChecks.js`
**Purpose:** Operations for the manual-checks workflow — human verification of success criteria that axe cannot test.

**Exports:**
- `getManualChecks(auditId)` → ordered by `sort_order` then `sc_id`
- `saveManualCheckVerdict(checkId, { verdict, auditorNotes })` → update verdict + notes, set `status` to verdict
- `createManualCheck({ auditId, scId, source, sortOrder })` → insert untriaged check
- `updateManualCheck(checkId, updates)` → generic update (status, notes, screenshot path, environment, browser)
- `uploadManualCheckImage(checkId, file)` → upload to `screenshots` bucket, record public URL on the check row

**Dependencies:**
- `supabase` from `@/lib/supabase`

**Used by:**
- `src/pages/AuditDetailPage.jsx` — fetch manual checks, save verdicts
- Scan worker / API — create manual checks for `alwaysManual` SCs

**Notes:** `source` discriminates between `'sc'` (auto-generated from scope) and `'triage'` (escalated from an automated result that needs human confirmation).

---

# Appendix: Legacy / Empty Files

| File | Status |
|---|---|
| `src/lib/axeRunner.test.js` | Intentionally empty — tests moved to `/api/lib/axeRunner.test.js` |
| `src/lib/axeRuleCategories.test.js` | Empty stub |
| `src/lib/wcagScLevels.test.js` | Empty stub |
| `src/lib/wcagReferences.test.js` | Empty stub |

These empty `.test.js` files in `src/lib/` should be removed or consolidated into `tests/unit/` to avoid confusion.
