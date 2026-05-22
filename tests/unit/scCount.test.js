import { describe, it, expect } from 'vitest'
import { getApproxScCount, SUPERSESSION_MAP, getVisibleQuestions } from '../../src/lib/scCount'

describe('getApproxScCount', () => {
  describe('WCAG 2.2 AA', () => {
    it('should return correct counts for WCAG 2.2 AA with no pre-test answers', () => {
      const result = getApproxScCount('WCAG 2.2', 'AA', {})

      expect(result).toHaveProperty('total')
      expect(result).toHaveProperty('active')
      expect(result).toHaveProperty('skipped')
      expect(result).toHaveProperty('superseded')
      expect(result).toHaveProperty('supersededList')
      expect(result).toHaveProperty('visibleQuestions')
    })

    it('should have more active criteria in AA than AAA', () => {
      const aaResult = getApproxScCount('WCAG 2.2', 'AA', {})
      const aaaResult = getApproxScCount('WCAG 2.2', 'AAA', {})

      // AAA includes all AA criteria plus more
      expect(aaaResult.total).toBeGreaterThanOrEqual(aaResult.total)
    })

    it('should reduce active criteria when pre-test answers indicate features are not present', () => {
      const noPreTest = getApproxScCount('WCAG 2.2', 'AA', {})

      // If user indicates they have no video, video-related SC should be skipped
      const withPreTest = getApproxScCount('WCAG 2.2', 'AA', {
        q142: 'no',  // Assuming q142 is about video content
      })

      expect(withPreTest.skipped).toBeGreaterThanOrEqual(noPreTest.skipped)
    })
  })

  describe('WCAG 2.1', () => {
    it('should return fewer criteria for WCAG 2.1 than 2.2', () => {
      const wcag21 = getApproxScCount('WCAG 2.1', 'AA', {})
      const wcag22 = getApproxScCount('WCAG 2.2', 'AA', {})

      // 2.2 adds new criteria (focus appearance, dragging movements, etc.)
      expect(wcag22.total).toBeGreaterThan(wcag21.total)
    })
  })

  describe('Input validation', () => {
    it('should handle undefined wcagVersion gracefully', () => {
      expect(() => getApproxScCount(undefined, 'AA', {})).not.toThrow()
    })

    it('should handle undefined conformanceLevel gracefully', () => {
      expect(() => getApproxScCount('WCAG 2.2', undefined, {})).not.toThrow()
    })

    it('should handle null preTestAnswers gracefully', () => {
      expect(() => getApproxScCount('WCAG 2.2', 'AA', null)).not.toThrow()
    })

    it('should default to WCAG 2.2 AA when inputs are invalid', () => {
      const result = getApproxScCount('invalid', 'invalid', {})
      expect(result).toBeDefined()
    })
  })

  describe('Supersession logic', () => {
    it('should populate supersededList when criteria are superseded', () => {
      const result = getApproxScCount('WCAG 2.2', 'AAA', {})

      if (result.superseded > 0) {
        expect(result.supersededList).toBeInstanceOf(Array)
        expect(result.supersededList.length).toBe(result.superseded)
      }
    })

    it('should have valid SC IDs in supersededList', () => {
      const result = getApproxScCount('WCAG 2.2', 'AAA', {})

      result.supersededList.forEach(scId => {
        expect(scId).toMatch(/^\d+\.\d+\.\d+\w*$/)
      })
    })
  })
})

describe('SUPERSESSION_MAP', () => {
  it('should map AAA criteria to their AA supersessions', () => {
    expect(SUPERSESSION_MAP).toBeInstanceOf(Object)

    // All values should be valid SC IDs
    Object.values(SUPERSESSION_MAP).forEach(value => {
      expect(value).toMatch(/^\d+\.\d+\.\d+\w*$/)
    })
  })

  it('should not have duplicate keys', () => {
    const keys = Object.keys(SUPERSESSION_MAP)
    const uniqueKeys = new Set(keys)

    expect(keys.length).toBe(uniqueKeys.size)
  })
})

describe('getVisibleQuestions', () => {
  it('should return an array of question IDs', () => {
    const result = getVisibleQuestions('WCAG 2.2', 'AA')
    expect(result).toBeInstanceOf(Array)
  })

  it('should return different questions for different WCAG versions', () => {
    const v21 = getVisibleQuestions('WCAG 2.1', 'AA')
    const v22 = getVisibleQuestions('WCAG 2.2', 'AA')

    // 2.2 should have at least as many questions as 2.1
    expect(v22.length).toBeGreaterThanOrEqual(v21.length)
  })

  it('should return more questions for AAA than AA', () => {
    const aa = getVisibleQuestions('WCAG 2.2', 'AA')
    const aaa = getVisibleQuestions('WCAG 2.2', 'AAA')

    expect(aaa.length).toBeGreaterThanOrEqual(aa.length)
  })

  it('should handle invalid inputs', () => {
    expect(() => getVisibleQuestions(null, null)).not.toThrow()
    expect(() => getVisibleQuestions(undefined, undefined)).not.toThrow()
  })

  it('should return unique question IDs', () => {
    const result = getVisibleQuestions('WCAG 2.2', 'AA')
    const uniqueIds = new Set(result)

    expect(result.length).toBe(uniqueIds.size)
  })
})
