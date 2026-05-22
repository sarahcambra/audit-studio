import { describe, it, expect, vi } from 'vitest'
import { mapTagsToSC, buildAxeTags } from '../../src/lib/axeRunner'

describe('mapTagsToSC', () => {
  describe('WCAG 2.x tag conversion', () => {
    it('should convert 3-digit wcag tags to SC format', () => {
      expect(mapTagsToSC(['wcag143'])).toEqual(['1.4.3'])
      expect(mapTagsToSC(['wcag244'])).toEqual(['2.4.4'])
      expect(mapTagsToSC(['wcag412'])).toEqual(['4.1.2'])
    })

    it('should convert 4-digit wcag tags to SC format', () => {
      expect(mapTagsToSC(['wcag2411'])).toEqual(['2.4.11'])
      expect(mapTagsToSC(['wcag1410'])).toEqual(['1.4.10'])
      expect(mapTagsToSC(['wcag253'])).toEqual(['2.5.3'])  // 3 digits
    })

    it('should handle multiple tags', () => {
      const result = mapTagsToSC(['wcag2a', 'wcag2aa', 'wcag143'])
      expect(result).toContain('1.4.3')
      // wcag2a and wcag2aa are not converted (not SC IDs)
    })

    it('should filter out non-wcag tags', () => {
      const result = mapTagsToSC(['wcag143', 'best-practice', 'cat-image', 'wcag244'])
      expect(result).toEqual(['1.4.3', '2.4.4'])
    })

    it('should filter out malformed wcag tags', () => {
      const result = mapTagsToSC(['wcag12', 'wcag12345', 'wcag', 'wcagabc'])
      expect(result).toEqual([])
    })

    it('should handle empty input', () => {
      expect(mapTagsToSC([])).toEqual([])
      expect(mapTagsToSC()).toEqual([])
      expect(mapTagsToSC(null)).toEqual([])
    })

    it('should handle undefined in array', () => {
      // This tests the regex filter
      const result = mapTagsToSC([undefined, null, 'wcag143'])
      expect(result).toEqual(['1.4.3'])
    })
  })

  describe('Edge cases', () => {
    it('should handle mixed case tags', () => {
      // Regex is case-sensitive, should only match lowercase
      expect(mapTagsToSC(['WCAG143', 'Wcag143'])).toEqual([])
      expect(mapTagsToSC(['wcag143'])).toEqual(['1.4.3'])
    })

    it('should handle tags with extra characters', () => {
      expect(mapTagsToSC(['wcag143-extra', 'prefix-wcag143'])).toEqual([])
    })
  })
})

describe('buildAxeTags', () => {
  describe('WCAG 2.2 AA', () => {
    it('should include wcag2a and wcag2aa for all configurations', () => {
      const tags = buildAxeTags('2.2', 'AA')
      expect(tags).toContain('wcag2a')
      expect(tags).toContain('wcag2aa')
    })

    it('should include wcag21a and wcag21aa for WCAG 2.1+', () => {
      const tags21 = buildAxeTags('2.1', 'AA')
      expect(tags21).toContain('wcag21a')
      expect(tags21).toContain('wcag21aa')

      const tags22 = buildAxeTags('2.2', 'AA')
      expect(tags22).toContain('wcag21a')
      expect(tags22).toContain('wcag21aa')
    })

    it('should include wcag22aa only for WCAG 2.2', () => {
      const tags21 = buildAxeTags('2.1', 'AA')
      expect(tags21).not.toContain('wcag22aa')

      const tags22 = buildAxeTags('2.2', 'AA')
      expect(tags22).toContain('wcag22aa')
    })

    it('should not include wcag2aaa for AA level', () => {
      const tags = buildAxeTags('2.2', 'AA')
      expect(tags).not.toContain('wcag2aaa')
    })
  })

  describe('WCAG 2.2 AAA', () => {
    it('should include wcag2aaa for AAA level', () => {
      const tags = buildAxeTags('2.2', 'AAA')
      expect(tags).toContain('wcag2aaa')
    })
  })

  describe('WCAG 2.1', () => {
    it('should not include wcag22aa for WCAG 2.1', () => {
      const tags = buildAxeTags('2.1', 'AA')
      expect(tags).not.toContain('wcag22aa')
    })

    it('should include all 2.1 tags', () => {
      const tags = buildAxeTags('2.1', 'AA')
      expect(tags).toEqual([
        'wcag2a',
        'wcag2aa',
        'wcag21a',
        'wcag21aa',
      ])
    })
  })

  describe('Edge cases', () => {
    it('should handle undefined wcagVersion', () => {
      const tags = buildAxeTags(undefined, 'AA')
      // Should default to including 2.1 tags but not 2.2
      expect(tags).toContain('wcag2a')
      expect(tags).toContain('wcag2aa')
      expect(tags).toContain('wcag21a')
      expect(tags).toContain('wcag21aa')
      expect(tags).not.toContain('wcag22aa')
    })

    it('should handle undefined conformanceLevel', () => {
      const tags = buildAxeTags('2.2', undefined)
      expect(tags).not.toContain('wcag2aaa')
    })

    it('should handle invalid wcagVersion', () => {
      const tags = buildAxeTags('invalid', 'AA')
      expect(tags).not.toContain('wcag22aa')
    })

    it('should handle invalid conformanceLevel', () => {
      const tags = buildAxeTags('2.2', 'invalid')
      expect(tags).not.toContain('wcag2aaa')
    })
  })

  describe('Return value', () => {
    it('should always return an array', () => {
      expect(Array.isArray(buildAxeTags('2.2', 'AA'))).toBe(true)
      expect(Array.isArray(buildAxeTags(null, null))).toBe(true)
    })

    it('should return at least 4 tags for any valid input', () => {
      const tags = buildAxeTags('2.2', 'AA')
      expect(tags.length).toBeGreaterThanOrEqual(4)
    })
  })
})

describe('Integration: mapTagsToSC + buildAxeTags', () => {
  it('should round-trip: buildAxeTags output can be partially converted by mapTagsToSC', () => {
    const tags = buildAxeTags('2.2', 'AA')
    const scIds = mapTagsToSC(tags)

    // buildAxeTags returns tag names like 'wcag2a', not SC IDs
    // mapTagsToSC converts only SC-specific tags like 'wcag143'
    // So this tests they work together without errors
    expect(Array.isArray(scIds)).toBe(true)
  })
})
