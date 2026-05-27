import { describe, test, expect } from 'vitest'
import { WCAG_SC_LEVEL, normalizeScId, resolvedConformanceLevel } from '../../src/lib/wcagScLevels'

describe('WCAG_SC_LEVEL map', () => {
  test('is frozen (immutable)', () => {
    expect(Object.isFrozen(WCAG_SC_LEVEL)).toBe(true)
  })

  test('covers all WCAG 2.1 + 2.2 success criteria (87 total)', () => {
    expect(Object.keys(WCAG_SC_LEVEL).length).toBe(87)
  })

  test('all values are A, AA, or AAA', () => {
    const valid = new Set(['A', 'AA', 'AAA'])
    for (const [sc, level] of Object.entries(WCAG_SC_LEVEL)) {
      expect(valid.has(level), `SC ${sc} has invalid level "${level}"`).toBe(true)
    }
  })

  test('1.1.1 is A', () => expect(WCAG_SC_LEVEL['1.1.1']).toBe('A'))
  test('1.4.3 is AA', () => expect(WCAG_SC_LEVEL['1.4.3']).toBe('AA'))
  test('1.4.6 is AAA', () => expect(WCAG_SC_LEVEL['1.4.6']).toBe('AAA'))
  test('2.1.1 is A', () => expect(WCAG_SC_LEVEL['2.1.1']).toBe('A'))
  test('4.1.2 is A', () => expect(WCAG_SC_LEVEL['4.1.2']).toBe('A'))
  test('4.1.3 is AA', () => expect(WCAG_SC_LEVEL['4.1.3']).toBe('AA'))
})

describe('normalizeScId', () => {
  test('passes through standard SC IDs unchanged', () => {
    expect(normalizeScId('1.4.3')).toBe('1.4.3')
    expect(normalizeScId('2.1.1')).toBe('2.1.1')
    expect(normalizeScId('4.1.2')).toBe('4.1.2')
  })

  test('strips leading "SC " prefix (case-insensitive)', () => {
    expect(normalizeScId('SC 1.4.3')).toBe('1.4.3')
    expect(normalizeScId('sc 2.1.1')).toBe('2.1.1')
    expect(normalizeScId('SC1.4.3')).toBe('1.4.3')
  })

  test('strips trailing ", ..." text', () => {
    expect(normalizeScId('1.4.3, 1.4.6')).toBe('1.4.3')
    expect(normalizeScId('1.4.3; something')).toBe('1.4.3')
  })

  test('returns empty string for null, undefined, "—"', () => {
    expect(normalizeScId(null)).toBe('')
    expect(normalizeScId(undefined)).toBe('')
    expect(normalizeScId('—')).toBe('')
    expect(normalizeScId('')).toBe('')
  })

  test('trims whitespace', () => {
    expect(normalizeScId('  1.4.3  ')).toBe('1.4.3')
  })
})

describe('resolvedConformanceLevel', () => {
  test('returns level from issue.wcagLevel when valid', () => {
    expect(resolvedConformanceLevel({ wcagLevel: 'A',   wcagSC: '1.4.3' })).toBe('A')
    expect(resolvedConformanceLevel({ wcagLevel: 'AA',  wcagSC: '1.4.3' })).toBe('AA')
    expect(resolvedConformanceLevel({ wcagLevel: 'AAA', wcagSC: '1.4.3' })).toBe('AAA')
  })

  test('falls back to WCAG_SC_LEVEL when wcagLevel is absent', () => {
    expect(resolvedConformanceLevel({ wcagSC: '1.1.1' })).toBe('A')
    expect(resolvedConformanceLevel({ wcagSC: '1.4.3' })).toBe('AA')
    expect(resolvedConformanceLevel({ wcagSC: '1.4.6' })).toBe('AAA')
  })

  test('falls back to WCAG_SC_LEVEL when wcagLevel is invalid', () => {
    expect(resolvedConformanceLevel({ wcagLevel: 'NONE', wcagSC: '2.1.1' })).toBe('A')
  })

  test('returns null for unknown SC', () => {
    expect(resolvedConformanceLevel({ wcagSC: '9.9.9' })).toBeNull()
  })

  test('returns null when issue has no wcagLevel or wcagSC', () => {
    expect(resolvedConformanceLevel({})).toBeNull()
    expect(resolvedConformanceLevel(null)).toBeNull()
    expect(resolvedConformanceLevel(undefined)).toBeNull()
  })

  test('handles SC normalisation (strips "SC " prefix)', () => {
    expect(resolvedConformanceLevel({ wcagSC: 'SC 1.4.3' })).toBe('AA')
  })
})
