import { describe, test, expect, vi, beforeEach } from 'vitest'

// Mock ruleEnrichments so tests are self-contained
vi.mock('../../src/lib/ruleEnrichments.js', () => ({
  RULE_ENRICHMENTS: {
    'aria-required-attr': { ruleType: 'wcag' },
    'best-practice-rule': { ruleType: 'best-practice' },
    'experimental-rule':  { ruleType: 'experimental' },
    'color-contrast':     { ruleType: 'wcag' },
  },
}))

import {
  getRuleType,
  isBestPractice,
  isExperimental,
  isAriaRule,
  isContrastRule,
  getWcagInfoFromTags,
  categorizeRule,
  getWcagUrl,
  formatSC,
  groupViolationsByCategory,
} from '../../src/lib/axeRuleCategories'

// ── getRuleType ───────────────────────────────────────────────────────────────

describe('getRuleType', () => {
  test('returns ruleType from RULE_ENRICHMENTS', () => {
    expect(getRuleType('aria-required-attr')).toBe('wcag')
    expect(getRuleType('best-practice-rule')).toBe('best-practice')
    expect(getRuleType('experimental-rule')).toBe('experimental')
  })

  test('returns null for unknown rules', () => {
    expect(getRuleType('unknown-rule')).toBeNull()
  })
})

// ── isBestPractice ────────────────────────────────────────────────────────────

describe('isBestPractice', () => {
  test('returns true for enrichment-declared best-practice', () => {
    expect(isBestPractice('best-practice-rule', [])).toBe(true)
  })

  test('returns false for enrichment-declared wcag rule', () => {
    expect(isBestPractice('aria-required-attr', ['best-practice'])).toBe(false)
  })

  test('falls back to tags when no enrichment', () => {
    expect(isBestPractice('unknown-rule', ['best-practice'])).toBe(true)
    // Has both best-practice and a wcag tag → not a best practice
    expect(isBestPractice('unknown-rule', ['best-practice', 'wcag2aa'])).toBe(false)
  })
})

// ── isExperimental ────────────────────────────────────────────────────────────

describe('isExperimental', () => {
  test('returns true for enrichment-declared experimental', () => {
    expect(isExperimental('experimental-rule', [])).toBe(true)
  })

  test('falls back to tags when no enrichment', () => {
    expect(isExperimental('unknown-rule', ['experimental'])).toBe(true)
    expect(isExperimental('unknown-rule', [])).toBe(false)
  })
})

// ── isAriaRule ────────────────────────────────────────────────────────────────

describe('isAriaRule', () => {
  test('matches cat.aria tag', () => {
    expect(isAriaRule('some-rule', ['cat.aria'])).toBe(true)
  })

  test('matches rules whose ID starts with "aria-"', () => {
    expect(isAriaRule('aria-required-attr', [])).toBe(true)
    expect(isAriaRule('aria-hidden-body', [])).toBe(true)
  })

  test('returns false for non-ARIA rules', () => {
    expect(isAriaRule('color-contrast', ['cat.color'])).toBe(false)
  })
})

// ── isContrastRule ────────────────────────────────────────────────────────────

describe('isContrastRule', () => {
  test('matches cat.color tag', () => {
    expect(isContrastRule('some-rule', ['cat.color'])).toBe(true)
  })

  test('matches specific contrast rule IDs', () => {
    expect(isContrastRule('color-contrast', [])).toBe(true)
    expect(isContrastRule('color-contrast-enhanced', [])).toBe(true)
    expect(isContrastRule('link-in-text-block', [])).toBe(true)
  })

  test('returns false for non-contrast rules', () => {
    expect(isContrastRule('aria-label', ['cat.aria'])).toBe(false)
  })
})

// ── getWcagInfoFromTags ───────────────────────────────────────────────────────

describe('getWcagInfoFromTags', () => {
  test('extracts 3-digit SC tag correctly', () => {
    expect(getWcagInfoFromTags(['wcag143', 'wcag2aa'])).toEqual({ sc: '1.4.3', level: 'AA' })
  })

  test('extracts 4-digit SC tag correctly', () => {
    // wcag1411 → SC 1.4.11
    expect(getWcagInfoFromTags(['wcag1411', 'wcag2aa'])).toEqual({ sc: '1.4.11', level: 'AA' })
  })

  test('returns level only when no SC tag', () => {
    expect(getWcagInfoFromTags(['wcag2a'])).toEqual({ sc: null, level: 'A' })
    expect(getWcagInfoFromTags(['wcag2aa'])).toEqual({ sc: null, level: 'AA' })
    expect(getWcagInfoFromTags(['wcag2aaa'])).toEqual({ sc: null, level: 'AAA' })
  })

  test('returns AAA level for wcag2aaa tag', () => {
    expect(getWcagInfoFromTags(['wcag412', 'wcag2aaa'])).toEqual({ sc: '4.1.2', level: 'AAA' })
  })

  test('returns nulls for empty or unrecognised tags', () => {
    expect(getWcagInfoFromTags([])).toEqual({ sc: null, level: null })
    expect(getWcagInfoFromTags(['best-practice'])).toEqual({ sc: null, level: null })
  })

  test('handles undefined tags gracefully', () => {
    expect(getWcagInfoFromTags()).toEqual({ sc: null, level: null })
  })
})

// ── categorizeRule ────────────────────────────────────────────────────────────

describe('categorizeRule', () => {
  test('categorises as Best Practice when tags include best-practice', () => {
    const result = categorizeRule('unknown-rule', ['best-practice'])
    expect(result.category).toBe('best-practice')
    expect(result.displayCategory).toBe('Best Practice')
    expect(result.isBestPractice).toBe(true)
  })

  test('categorises as Experimental when enriched as experimental', () => {
    const result = categorizeRule('experimental-rule', ['experimental'])
    expect(result.category).toBe('experimental')
    expect(result.displayCategory).toBe('Experimental')
    expect(result.isExperimental).toBe(true)
  })

  test('categorises as ARIA for aria- prefixed rules', () => {
    const result = categorizeRule('aria-label', ['cat.aria', 'wcag2a'])
    expect(result.category).toBe('aria')
    expect(result.displayCategory).toBe('ARIA')
    expect(result.isAria).toBe(true)
  })

  test('categorises as Color & Contrast for color-contrast rule', () => {
    const result = categorizeRule('color-contrast', ['cat.color', 'wcag143', 'wcag2aa'])
    expect(result.category).toBe('contrast')
    expect(result.displayCategory).toBe('Color & Contrast')
    expect(result.isContrast).toBe(true)
  })

  test('categorises as WCAG by default', () => {
    const result = categorizeRule('unknown-rule', ['wcag143', 'wcag2aa'])
    expect(result.category).toBe('wcag')
    expect(result.displayCategory).toBe('WCAG')
  })

  test('includes wcagSC and wcagLevel from tags', () => {
    const result = categorizeRule('some-rule', ['wcag143', 'wcag2aa'])
    expect(result.wcagSC).toBe('1.4.3')
    expect(result.wcagLevel).toBe('AA')
  })

  test('Experimental takes priority over Best Practice', () => {
    const result = categorizeRule('experimental-rule', ['experimental', 'best-practice'])
    expect(result.category).toBe('experimental')
  })
})

// ── getWcagUrl ────────────────────────────────────────────────────────────────

describe('getWcagUrl', () => {
  test('returns W3C Understanding URL for a valid SC', () => {
    expect(getWcagUrl('1.4.3')).toBe('https://www.w3.org/WAI/WCAG22/Understanding/1.4.3')
  })

  test('strips spaces from SC ID', () => {
    expect(getWcagUrl('1.4.3')).not.toContain(' ')
  })

  test('returns empty string for null, undefined, "—"', () => {
    expect(getWcagUrl(null)).toBe('')
    expect(getWcagUrl(undefined)).toBe('')
    expect(getWcagUrl('—')).toBe('')
  })
})

// ── formatSC ──────────────────────────────────────────────────────────────────

describe('formatSC', () => {
  test('returns the SC as-is for valid IDs', () => {
    expect(formatSC('1.4.3')).toBe('1.4.3')
  })

  test('returns empty string for null, undefined, "—"', () => {
    expect(formatSC(null)).toBe('')
    expect(formatSC(undefined)).toBe('')
    expect(formatSC('—')).toBe('')
  })
})

// ── groupViolationsByCategory ─────────────────────────────────────────────────

describe('groupViolationsByCategory', () => {
  const violations = [
    { id: 'aria-required-attr', tags: ['cat.aria', 'wcag2a', 'wcag412'] },
    { id: 'best-practice-rule', tags: ['best-practice'] },
    { id: 'color-contrast',     tags: ['cat.color', 'wcag2aa', 'wcag143'] },
    { id: 'experimental-rule',  tags: ['experimental'] },
    { id: 'unknown-rule',       tags: ['wcag2a', 'wcag131'] },
  ]

  test('returns all five category arrays', () => {
    const result = groupViolationsByCategory(violations)
    expect(result).toHaveProperty('wcagViolations')
    expect(result).toHaveProperty('bestPracticeViolations')
    expect(result).toHaveProperty('ariaViolations')
    expect(result).toHaveProperty('contrastViolations')
    expect(result).toHaveProperty('experimentalViolations')
  })

  test('distributes violations into correct buckets', () => {
    const result = groupViolationsByCategory(violations)
    expect(result.ariaViolations.map(v => v.id)).not.toContain('best-practice-rule')
    expect(result.bestPracticeViolations.map(v => v.id)).toContain('best-practice-rule')
    expect(result.contrastViolations.map(v => v.id)).toContain('color-contrast')
    expect(result.experimentalViolations.map(v => v.id)).toContain('experimental-rule')
    expect(result.wcagViolations.map(v => v.id)).toContain('unknown-rule')
  })

  test('handles empty input', () => {
    const result = groupViolationsByCategory([])
    for (const key of Object.keys(result)) {
      expect(result[key]).toHaveLength(0)
    }
  })

  test('handles undefined input', () => {
    expect(() => groupViolationsByCategory()).not.toThrow()
  })
})
