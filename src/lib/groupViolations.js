/**
 * Groups axe violations by ruleId + nearest landmark for triage display.
 * Each group represents one card in the triage UI.
 *
 * @param {Array} violations - Raw axe violations from scan
 * @param {string} wcagVersion - WCAG version: '2.1' or '2.2'
 * @param {string} conformanceLevel - Conformance level: 'A', 'AA', or 'AAA'
 * @returns {Array} Array of violation groups with metadata for triage
 */

import { RULE_ENRICHMENTS } from './ruleEnrichments.js'

// WCAG tags that indicate a failure (not just best practice)
const WCAG_FAILURE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']

/**
 * Check if a violation is a WCAG failure (vs best practice only).
 *
 * @param {string[]} tags - Axe tags from the violation (e.g. ['wcag2aa', 'best-practice'])
 * @returns {boolean} True if at least one tag is in the WCAG_FAILURE_TAGS list
 */
function isWcagFailure(tags) {
  return tags.some(tag => WCAG_FAILURE_TAGS.includes(tag))
}

/**
 * Determine the issue type for a violation.
 *
 * Priority:
 * 1. Explicit `issueType` from RULE_ENRICHMENTS
 * 2. Axe `best-practice` tag
 * 3. Enrichment `ruleType === 'best-practice'`
 * 4. Default to `'failure'`
 *
 * @param {string} ruleId - Axe rule ID (e.g. 'color-contrast')
 * @param {object|null} enrichment - Entry from RULE_ENRICHMENTS for this rule
 * @param {string[]} [tags=[]] - Axe tags from the violation
 * @returns {'failure'|'best-practice'|'needs review'|string} Categorised issue type
 */
function getIssueType(ruleId, enrichment, tags = []) {
  // Explicit enrichment issueType always wins
  if (enrichment?.issueType) {
    return enrichment.issueType
  }

  // Axe best-practice tag → 'best-practice' (not 'needs review')
  if (tags.includes('best-practice')) {
    return 'best-practice'
  }

  // Enrichment ruleType fallback
  if (enrichment?.ruleType === 'best-practice') {
    return 'best-practice'
  }

  return 'failure'
}

/**
 * Group axe violations by ruleId + nearest landmark for triage display.
 *
 * Each group represents one card in the triage UI. Nodes that share the same
 * ruleId and landmark are collapsed into a single group with a nodeCount.
 *
 * @param {Array} violations - Raw axe violations from scan
 * @param {string} wcagVersion - WCAG version: '2.1' or '2.2'
 * @param {string} conformanceLevel - Conformance level: 'A', 'AA', or 'AAA'
 * @returns {Array} Array of violation groups with metadata for triage
 */
export function groupViolations(violations, wcagVersion, conformanceLevel) {
  const groups = new Map()

  for (const violation of (violations ?? [])) {
    const enrichment = RULE_ENRICHMENTS[violation.id] || null
    const issueType = getIssueType(violation.id, enrichment, violation.tags || [])

    // Group each node by its landmark
    for (const node of violation.nodes) {
      const targetStr = Array.isArray(node.target) ? node.target.join(', ') : node.target?.[0] || 'unknown'
      const landmark = node.landmark || 'page' // landmark is set by axeRunner's findNearestLandmark

      const key = `${violation.id}-${landmark}`

      if (!groups.has(key)) {
        // Collect all unique SC IDs across all nodes in this group
        const scIdsSet = new Set()
        if (violation.tags) {
          violation.tags
            .filter(tag => /^wcag\d{3,4}$/.test(tag))
            .forEach(tag => {
              const digits = tag.replace('wcag', '')
              if (digits.length === 3) {
                scIdsSet.add(`${digits[0]}.${digits[1]}.${digits[2]}`)
              } else if (digits.length === 4) {
                scIdsSet.add(`${digits[0]}.${digits[1]}.${digits[2]}${digits[3]}`)
              }
            })
        }

        groups.set(key, {
          groupId: key,
          ruleId: violation.id,
          landmark,
          issueType,
          impact: violation.impact || 'minor',
          isWcagFailure: isWcagFailure(violation.tags || []),
          scIds: [...scIdsSet],
          tags: violation.tags || [],
          nodeCount: 0,
          nodes: [],
          enrichment,
          screenshot: violation.screenshot || null,
          // Metadata from enrichment
          auditorTitle: enrichment?.auditorTitle || violation.description,
          auditorNotes: enrichment?.auditorNotes || null,
          clientFix: enrichment?.clientFix || null,
          fixDifficulty: enrichment?.fixDifficulty || null,
          affectedUsers: enrichment?.affectedUsers || [],
          wcagTechniques: enrichment?.wcagTechniques || [],
          wcagFailures: enrichment?.wcagFailures || [],
          ariaPractices: enrichment?.ariaPractices || null,
        })
      }

      const group = groups.get(key)
      group.nodeCount++
      group.nodes.push({
        target: targetStr,
        html: node.html || '',
        message: node.message || '',
        impact: node.impact || violation.impact,
      })
    }
  }

  return Array.from(groups.values())
}

/**
 * Group violations for flow scan results, deduplicating across steps.
 *
 * Flow scans run axe against multiple sequential pages. This helper merges
 * violations from every step into one flat array (attaching stepName and
 * screenshot context) before delegating to `groupViolations()` for the
 * actual ruleId + landmark grouping.
 *
 * @param {Array} steps - Flow step objects, each with { violations, stepName, screenshot }
 * @param {string} wcagVersion - WCAG version: '2.1' or '2.2'
 * @param {string} conformanceLevel - Conformance level: 'A', 'AA', or 'AAA'
 * @returns {Array} Array of violation groups with metadata for triage
 */
export function groupFlowViolations(steps, wcagVersion, conformanceLevel) {
  const allViolations = []

  for (const step of steps) {
    for (const violation of step.violations || []) {
      allViolations.push({
        ...violation,
        stepName: step.stepName,
        screenshot: step.screenshot || null,
      })
    }
  }

  return groupViolations(allViolations, wcagVersion, conformanceLevel)
}
