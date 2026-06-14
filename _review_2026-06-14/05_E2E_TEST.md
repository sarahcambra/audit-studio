# End-to-End Product Test — Audit Studio (live)

**Date:** 2026-06-14
**Method:** Drove the deployed app (`audit-studio-prod-90ea8.web.app`) in a real Chrome via the Claude extension. Created a real audit, ran real scans on 10 live sites through your GCE worker, walked triage, and attempted report generation.

## Verdict

The pipeline works end-to-end **through triage** and is genuinely impressive. It **dead-ends at report generation**: the "Generate Report" button fires no network request and does nothing. Several smaller issues found, listed below.

## What I ran

Audit "E2E Test — 10-Site Flow", WCAG 2.2 AA, 10 pages across content types. Live scan results (grouped issue badges):

| # | Page | URL | Result |
|---|------|-----|--------|
| 1 | News — BBC | bbc.com/news | 2 issues |
| 2 | E-commerce — Etsy | etsy.com | 4 issues |
| 3 | Government — USA.gov | usa.gov | 3 issues |
| 4 | Video — TED | ted.com/talks | 6 issues |
| 5 | Blog — TechCrunch | techcrunch.com | 6 issues |
| 6 | SaaS — Notion | notion.com/pricing | 3 (badge) / 9 (detail) |
| 7 | Restaurant — McDonald's | mcdonalds.com | **"Clean"** ⚠️ |
| 8 | Travel — Lonely Planet | lonelyplanet.com | 3 issues |
| 9 | Social — Reddit | reddit.com | 6 issues ⚠️ |
| 10 | University — MIT | mit.edu | 2 issues |

Triage aggregated **116 individual issues** across the 10 scans.

## What worked well ✅

- **Auth + dashboard** — already-signed-in session loaded cleanly.
- **New Audit wizard** (5 steps) — validation fires and persists across steps; required-field errors are clear.
- **Pre-test questionnaire → scope** — answering the 7 questions intelligently scoped the audit to **51 of 55 criteria (4 skipped)**. Nicely done.
- **Scan engine** — live progress UI (Opening browser → Loading → axe → contrast → keyboard → screenshots → processing), real page **screenshots captured**, issues categorized (WCAG failures / best practices / needs review).
- **Triage** — 116 issues with severity, WCAG SC, result (failure / needs review), and per-issue Details. Filters work.
- The worker is **stable and alive** — all 10 scans completed without a crash.

## Issues found 🐞 (in priority order)

1. **Report generation is non-functional (blocker).** The per-audit Report tab shows a "Generate Report" button, but clicking it produces **no network request, no loading state, no file, no error** (verified via network + console capture). The handler is effectively a no-op. *(The global `/reports/*` nav pages are separate `PlaceholderPage` stubs.)* This is the finding to fix to complete the flow.
2. **"Clean" on McDonald's is a false negative.** The scan returned Clean, but the captured screenshot shows a **cookie-consent overlay covering the page** — axe almost certainly evaluated the consent wall, not the site. Your cookie-dismiss step didn't clear this banner. Real-world commercial sites will frequently hit this; it silently produces "all clear" results that aren't true.
3. **Bot-protected sites scan the block page.** Reddit returned 6 issues, but its screenshot looks like a **"you've been blocked / network security" interstitial** — i.e. axe ran against the block page, not Reddit. Stealth isn't defeating all bot walls; results on such sites are misleading. Consider detecting block/challenge pages and flagging the scan as "blocked" rather than reporting issues.
4. **Misleading gating text.** The Report tab says *"All triage items are resolved. You can now generate the report."* while **116 items are Untriaged/Pending**. The gate logic and copy don't match reality.
5. **WCAG version mismatch.** Step 1 showed **WCAG 2.1** selected, but the created audit is **WCAG 2.2 AA**. Either the default isn't what the dropdown displayed, or the selection didn't persist. Verify the version control in step 1.
6. **Badge vs detail count mismatch.** Notion shows "3 issues" in the scan list but "9" in its detail panel (and triage counts individual nodes). Not necessarily a bug — grouped vs. instance counts — but it reads as inconsistent; consider labeling ("3 groups / 9 instances").
7. **Throughput / UX.** Worker is one-at-a-time (concurrency 1); there's **no "scan all" button**, so 10 pages = 10 manual clicks, each waiting for the previous. BBC took ~90s; most others 30–60s. A batch "Scan all" + queue would help.

## Bottom line for the morning

The hard parts — wizard, scoping intelligence, live scanning, screenshots, triage — are working well on real sites. To finish the user journey you came for, the two highest-value fixes are **(a) make "Generate Report" actually produce a report** and **(b) handle cookie/consent and bot-block pages** so results like McDonald's "Clean" and Reddit's block-page aren't misleading. Details and a build plan for the report feature are in `01_CODE_REVIEW.md` and `02_USER_FLOW.md`.
