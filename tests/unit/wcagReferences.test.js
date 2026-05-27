import { describe, test, expect } from 'vitest'
import { WCAG_REFERENCES } from '../../src/lib/wcagReferences'

describe('WCAG_REFERENCES', () => {
  test('covers all WCAG 2.1 + 2.2 success criteria (87 total)', () => {
    expect(Object.keys(WCAG_REFERENCES).length).toBe(87)
  })

  test('every entry has a non-empty title string', () => {
    for (const [sc, ref] of Object.entries(WCAG_REFERENCES)) {
      expect(typeof ref.title, `SC ${sc} title`).toBe('string')
      expect(ref.title.length, `SC ${sc} title is empty`).toBeGreaterThan(0)
    }
  })

  test('every entry has a URL pointing to w3.org', () => {
    for (const [sc, ref] of Object.entries(WCAG_REFERENCES)) {
      expect(typeof ref.url, `SC ${sc} url`).toBe('string')
      expect(ref.url, `SC ${sc} url domain`).toMatch(/^https:\/\/www\.w3\.org/)
    }
  })

  test('all keys are valid WCAG 2.1 SC IDs (d.d.d format)', () => {
    for (const sc of Object.keys(WCAG_REFERENCES)) {
      expect(sc, `"${sc}" does not match SC format`).toMatch(/^\d+\.\d+\.\d+$/)
    }
  })

  test('specific known entries are correct', () => {
    expect(WCAG_REFERENCES['1.1.1'].title).toBe('Non-text Content')
    expect(WCAG_REFERENCES['1.4.3'].title).toBe('Contrast (Minimum)')
    expect(WCAG_REFERENCES['2.1.1'].title).toBe('Keyboard')
    expect(WCAG_REFERENCES['4.1.2'].title).toBe('Name, Role, Value')
  })

  test('SC 1.1.1 URL is the W3C Understanding page', () => {
    expect(WCAG_REFERENCES['1.1.1'].url).toBe(
      'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content'
    )
  })
})
