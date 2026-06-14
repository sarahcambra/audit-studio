import { RULE_ENRICHMENTS } from './ruleEnrichments.js'

/**
 * Enrich a single axe violation with human-friendly metadata from RULE_ENRICHMENTS.
 *
 * Axe violations only carry machine-oriented fields (`description`, `help`, `id`).
 * This function overlays curated content (titles, fix instructions, affected users,
 * code examples) so the triage UI can show actionable guidance without hard-coding
 * rule-specific copy in components.
 *
 * Falls back gracefully: every enrichment field defaults to the original axe value
 * or a safe empty value so the UI never receives `undefined`.
 *
 * @param {object} violation - Raw axe violation (or incomplete result)
 * @param {string} violation.id - Axe rule ID (e.g. 'color-contrast')
 * @param {string} violation.description - Axe-generated description
 * @returns {object} Enriched violation with additional `auditorTitle`,
 *   `auditorNotes`, `clientFix`, `badExample`, `goodExample`, `affectedUsers`,
 *   `fixDifficulty`, `wcagTechniques`, `wcagFailures`, and `ariaPractices`
 */
export function enrichViolation(violation) {
  // axe violations use `id`, not `ruleId`
  const enrichment = RULE_ENRICHMENTS[violation.id ?? violation.ruleId] ?? {}
  return {
    ...violation,
    auditorTitle:   enrichment.auditorTitle   ?? violation.description,
    auditorNotes:   enrichment.auditorNotes   ?? null,
    clientFix:      enrichment.clientFix      ?? null,
    badExample:     enrichment.badExample     ?? null,
    goodExample:    enrichment.goodExample    ?? null,
    affectedUsers:  enrichment.affectedUsers  ?? [],
    fixDifficulty:  enrichment.fixDifficulty  ?? null,
    wcagTechniques: enrichment.wcagTechniques ?? [],
    wcagFailures:   enrichment.wcagFailures   ?? [],
    ariaPractices:  enrichment.ariaPractices  ?? null,
  }
}

/**
 * Enrich an entire axe-core results object.
 *
 * Maps `enrichViolation()` over both the `violations` and `incomplete` arrays.
 * Passes and inapplicable results through unchanged because they do not need
 * human-friendly enrichment for the triage workflow.
 *
 * @param {object|null} results - Axe results object from a scan
 * @param {object[]} [results.violations] - Axe violations array
 * @param {object[]} [results.incomplete] - Axe incomplete (needs review) array
 * @returns {object|null} Same shape as input with enriched violations and incomplete items
 */
export function enrichResults(results) {
  if (!results) return null
  return {
    ...results,
    violations: results.violations.map(enrichViolation),
    incomplete: results.incomplete.map(enrichViolation),
  }
}
