import { RULE_ENRICHMENTS } from './ruleEnrichments'

export function enrichViolation(violation) {
  const enrichment = RULE_ENRICHMENTS[violation.ruleId] ?? {}
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

export function enrichResults(results) {
  if (!results) return null
  return {
    ...results,
    violations: results.violations.map(enrichViolation),
    incomplete: results.incomplete.map(enrichViolation),
  }
}
