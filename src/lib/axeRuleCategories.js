/**
 * Axe rule categorization utilities
 * Maps axe rules to their display categories and WCAG associations
 */

import { RULE_ENRICHMENTS } from './ruleEnrichments.js';

/**
 * Get the rule type from enrichment data
 * @param {string} ruleId - axe rule ID
 * @returns {"wcag" | "best-practice" | "experimental" | null}
 */
export function getRuleType(ruleId) {
  return RULE_ENRICHMENTS[ruleId]?.ruleType || null;
}

/**
 * Check if a rule is a best practice (no WCAG SC)
 * @param {string} ruleId - axe rule ID
 * @param {string[]} tags - axe rule tags
 * @returns {boolean}
 */
export function isBestPractice(ruleId, tags = []) {
  const enrichmentType = getRuleType(ruleId);
  if (enrichmentType === "best-practice") return true;
  if (enrichmentType === "wcag") return false;
  // Fallback: check tags
  return tags.includes("best-practice") && !tags.some((t) => t.startsWith("wcag") && t.length > 4);
}

/**
 * Check if a rule is experimental
 * @param {string} ruleId - axe rule ID
 * @param {string[]} tags - axe rule tags
 * @returns {boolean}
 */
export function isExperimental(ruleId, tags = []) {
  const enrichmentType = getRuleType(ruleId);
  if (enrichmentType === "experimental") return true;
  return tags.includes("experimental");
}

/**
 * Check if a rule is ARIA-related
 * @param {string} ruleId - axe rule ID
 * @param {string[]} tags - axe rule tags
 * @returns {boolean}
 */
export function isAriaRule(ruleId, tags = []) {
  return tags.includes("cat.aria") || ruleId.startsWith("aria-");
}

/**
 * Check if a rule is color/contrast related
 * @param {string} ruleId - axe rule ID
 * @param {string[]} tags - axe rule tags
 * @returns {boolean}
 */
export function isContrastRule(ruleId, tags = []) {
  return tags.includes("cat.color") || ruleId === "color-contrast" || ruleId === "color-contrast-enhanced" || ruleId === "link-in-text-block";
}

/**
 * Get the primary WCAG SC for a rule
 * @param {string[]} tags - axe rule tags
 * @returns {{ sc: string | null, level: string | null }}
 */
export function getWcagInfoFromTags(tags = []) {
  // Find specific WCAG SC tags (wcag111, wcag143, etc.)
  const scTag = tags.find((t) => /^wcag\d{3,4}$/.test(t));
  if (scTag) {
    const n = scTag.replace("wcag", "");
    const sc = `${n[0]}.${n[1]}.${n.slice(2)}`;
    const level = tags.includes("wcag2aaa") ? "AAA" : tags.includes("wcag2aa") ? "AA" : tags.includes("wcag2a") ? "A" : null;
    return { sc, level };
  }

  // Check level-only tags
  if (tags.includes("wcag2aaa")) return { sc: null, level: "AAA" };
  if (tags.includes("wcag2aa")) return { sc: null, level: "AA" };
  if (tags.includes("wcag2a")) return { sc: null, level: "A" };

  return { sc: null, level: null };
}

/**
 * Categorize a rule for display purposes
 * @param {string} ruleId - axe rule ID
 * @param {string[]} tags - axe rule tags
 * @returns {{
 *   category: "wcag" | "best-practice" | "experimental" | "aria" | "contrast",
 *   wcagSC: string | null,
 *   wcagLevel: string | null,
 *   isBestPractice: boolean,
 *   isExperimental: boolean,
 *   isAria: boolean,
 *   isContrast: boolean,
 *   displayCategory: string
 * }}
 */
export function categorizeRule(ruleId, tags = []) {
  const { sc: wcagSC, level: wcagLevel } = getWcagInfoFromTags(tags);
  const bp = isBestPractice(ruleId, tags);
  const exp = isExperimental(ruleId, tags);
  const aria = isAriaRule(ruleId, tags);
  const contrast = isContrastRule(ruleId, tags);

  // Determine primary category for display
  let category = "wcag";
  let displayCategory = "WCAG";

  if (exp) {
    category = "experimental";
    displayCategory = "Experimental";
  } else if (bp) {
    category = "best-practice";
    displayCategory = "Best Practice";
  } else if (contrast) {
    category = "contrast";
    displayCategory = "Color & Contrast";
  } else if (aria) {
    category = "aria";
    displayCategory = "ARIA";
  }

  return {
    category,
    wcagSC,
    wcagLevel,
    isBestPractice: bp,
    isExperimental: exp,
    isAria: aria,
    isContrast: contrast,
    displayCategory,
  };
}

/**
 * Get the WCAG URL for a success criterion
 * @param {string} sc - SC number (e.g., "1.4.3")
 * @returns {string}
 */
export function getWcagUrl(sc) {
  if (!sc || sc === "—") return "";
  const cleanSc = sc.replace(/\s/g, "");
  return `https://www.w3.org/WAI/WCAG22/Understanding/${cleanSc}`;
}

/**
 * Format an SC for display
 * @param {string} sc - SC number
 * @returns {string}
 */
export function formatSC(sc) {
  if (!sc || sc === "—") return "";
  return sc;
}

/**
 * Group violations by category for display
 * @param {Array} violations - axe violations
 * @returns {{
 *   wcagViolations: Array,
 *   bestPracticeViolations: Array,
 *   ariaViolations: Array,
 *   contrastViolations: Array,
 *   experimentalViolations: Array
 * }}
 */
export function groupViolationsByCategory(violations = []) {
  const result = {
    wcagViolations: [],
    bestPracticeViolations: [],
    ariaViolations: [],
    contrastViolations: [],
    experimentalViolations: [],
  };

  for (const v of violations) {
    const cat = categorizeRule(v.id, v.tags || []);
    const enriched = { ...v, ...cat };

    if (cat.isExperimental) {
      result.experimentalViolations.push(enriched);
    } else if (cat.isBestPractice) {
      result.bestPracticeViolations.push(enriched);
    } else if (cat.isContrast) {
      result.contrastViolations.push(enriched);
    } else if (cat.isAria) {
      result.ariaViolations.push(enriched);
    } else {
      result.wcagViolations.push(enriched);
    }
  }

  return result;
}

/**
 * Group passes by category for display
 * @param {Array} passes - axe passes
 * @returns {{
 *   wcagPasses: Array,
 *   bestPracticePasses: Array,
 *   ariaPasses: Array,
 *   contrastPasses: Array,
 *   experimentalPasses: Array
 * }}
 */
export function groupPassesByCategory(passes = []) {
  const result = {
    wcagPasses: [],
    bestPracticePasses: [],
    ariaPasses: [],
    contrastPasses: [],
    experimentalPasses: [],
  };

  for (const p of passes) {
    const cat = categorizeRule(p.id, p.tags || []);
    const enriched = { ...p, ...cat };

    if (cat.isExperimental) {
      result.experimentalPasses.push(enriched);
    } else if (cat.isBestPractice) {
      result.bestPracticePasses.push(enriched);
    } else if (cat.isContrast) {
      result.contrastPasses.push(enriched);
    } else if (cat.isAria) {
      result.ariaPasses.push(enriched);
    } else {
      result.wcagPasses.push(enriched);
    }
  }

  return result;
}
