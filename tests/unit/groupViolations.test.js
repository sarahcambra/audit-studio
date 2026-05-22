import { describe, it, expect, beforeEach } from 'vitest'
import { groupViolations } from '../../src/lib/groupViolations'

describe('groupViolations', () => {
  const mockViolations = [
    {
      id: 'color-contrast',
      impact: 'serious',
      tags: ['wcag2aa', 'wcag143'],
      nodes: [
        {
          target: ['.header', 'h1'],
          html: '<h1>Title</h1>',
          impact: 'serious',
          landmark: 'header',
        },
        {
          target: ['.footer', 'p'],
          html: '<p>Footer text</p>',
          impact: 'serious',
          landmark: 'footer',
        },
      ],
    },
    {
      id: 'link-name',
      impact: 'critical',
      tags: ['wcag2a', 'wcag412'],
      nodes: [
        {
          target: ['.nav', 'a'],
          html: '<a href="#">Link</a>',
          impact: 'critical',
          landmark: 'nav',
        },
      ],
    },
  ]

  describe('Basic grouping', () => {
    it('should group violations by ruleId and landmark', () => {
      const groups = groupViolations(mockViolations, '2.2', 'AA')

      expect(groups).toBeInstanceOf(Array)
      expect(groups.length).toBeGreaterThan(0)

      // Each group should have a unique groupId
      const groupIds = groups.map(g => g.groupId)
      const uniqueGroupIds = new Set(groupIds)
      expect(groupIds.length).toBe(uniqueGroupIds.size)
    })

    it('should include required properties in each group', () => {
      const groups = groupViolations(mockViolations, '2.2', 'AA')

      groups.forEach(group => {
        expect(group).toHaveProperty('groupId')
        expect(group).toHaveProperty('ruleId')
        expect(group).toHaveProperty('landmark')
        expect(group).toHaveProperty('issueType')
        expect(group).toHaveProperty('impact')
        expect(group).toHaveProperty('isWcagFailure')
        expect(group).toHaveProperty('scIds')
        expect(group).toHaveProperty('nodeCount')
        expect(group).toHaveProperty('nodes')
      })
    })

    it('should calculate nodeCount correctly', () => {
      const groups = groupViolations(mockViolations, '2.2', 'AA')

      groups.forEach(group => {
        expect(group.nodeCount).toBe(group.nodes.length)
      })
    })
  })

  describe('WCAG failure detection', () => {
    it('should mark violations with wcag tags as isWcagFailure', () => {
      const groups = groupViolations(mockViolations, '2.2', 'AA')

      // color-contrast has wcag2aa tag
      const contrastGroup = groups.find(g => g.ruleId === 'color-contrast')
      expect(contrastGroup?.isWcagFailure).toBe(true)
    })

    it('should recognize wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa tags', () => {
      const wcagViolations = [
        {
          id: 'test-rule',
          impact: 'moderate',
          tags: ['wcag21a'],
          nodes: [{ target: ['button'], html: '<button>', impact: 'moderate', landmark: 'main' }],
        },
      ]

      const groups = groupViolations(wcagViolations, '2.2', 'AA')
      expect(groups[0]?.isWcagFailure).toBe(true)
    })
  })

  describe('Issue type assignment', () => {
    it('should assign issueType from enrichment data', () => {
      const groups = groupViolations(mockViolations, '2.2', 'AA')

      groups.forEach(group => {
        expect(['failure', 'needs review', 'failure, needs review']).toContain(group.issueType)
      })
    })

    it('should default to "failure" when no enrichment exists', () => {
      const unknownViolations = [
        {
          id: 'unknown-rule',
          impact: 'minor',
          tags: [],
          nodes: [{ target: ['div'], html: '<div>', impact: 'minor', landmark: 'main' }],
        },
      ]

      const groups = groupViolations(unknownViolations, '2.2', 'AA')
      expect(groups[0]?.issueType).toBe('failure')
    })
  })

  describe('SC ID extraction', () => {
    it('should extract SC IDs from wcag tags', () => {
      const groups = groupViolations(mockViolations, '2.2', 'AA')

      const contrastGroup = groups.find(g => g.ruleId === 'color-contrast')
      expect(contrastGroup?.scIds).toContain('1.4.3')
    })

    it('should deduplicate SC IDs across nodes', () => {
      const duplicateScViolations = [
        {
          id: 'test-rule',
          impact: 'serious',
          tags: ['wcag2aa', 'wcag143'],
          nodes: [
            { target: ['a'], html: '<a>', impact: 'serious', landmark: 'main' },
            { target: ['b'], html: '<b>', impact: 'serious', landmark: 'main' },
          ],
        },
      ]

      const groups = groupViolations(duplicateScViolations, '2.2', 'AA')
      const scIds = groups[0]?.scIds

      // Should have unique SC IDs
      expect(scIds.length).toBe(new Set(scIds).size)
    })
  })

  describe('Edge cases', () => {
    it('should handle empty violations array', () => {
      const groups = groupViolations([], '2.2', 'AA')
      expect(groups).toEqual([])
    })

    it('should handle violations with no nodes', () => {
      const emptyNodeViolations = [
        {
          id: 'empty-rule',
          impact: 'minor',
          tags: [],
          nodes: [],
        },
      ]

      const groups = groupViolations(emptyNodeViolations, '2.2', 'AA')
      expect(groups.length).toBe(0)
    })

    it('should handle nodes without landmark', () => {
      const noLandmarkViolations = [
        {
          id: 'no-landmark',
          impact: 'moderate',
          tags: [],
          nodes: [{ target: ['div'], html: '<div>', impact: 'moderate' }],
        },
      ]

      const groups = groupViolations(noLandmarkViolations, '2.2', 'AA')
      expect(groups[0]?.landmark).toBe('page') // Default fallback
    })

    it('should handle null/undefined inputs gracefully', () => {
      expect(() => groupViolations(null, '2.2', 'AA')).not.toThrow()
      expect(() => groupViolations([], null, 'AA')).not.toThrow()
      expect(() => groupViolations([], '2.2', null)).not.toThrow()
    })
  })

  describe('Landmark grouping', () => {
    it('should create separate groups for same rule in different landmarks', () => {
      const multiLandmarkViolations = [
        {
          id: 'color-contrast',
          impact: 'serious',
          tags: ['wcag2aa'],
          nodes: [
            { target: ['.header h1'], html: '<h1>', impact: 'serious', landmark: 'header' },
            { target: ['.footer p'], html: '<p>', impact: 'serious', landmark: 'footer' },
          ],
        },
      ]

      const groups = groupViolations(multiLandmarkViolations, '2.2', 'AA')

      // Should have 2 groups: one for header, one for footer
      const contrastGroups = groups.filter(g => g.ruleId === 'color-contrast')
      expect(contrastGroups.length).toBe(2)

      const landmarks = contrastGroups.map(g => g.landmark)
      expect(landmarks).toContain('header')
      expect(landmarks).toContain('footer')
    })

    it('should group multiple nodes in same landmark together', () => {
      const sameLandmarkViolations = [
        {
          id: 'link-name',
          impact: 'critical',
          tags: ['wcag2a'],
          nodes: [
            { target: ['.nav a:first'], html: '<a>1</a>', impact: 'critical', landmark: 'nav' },
            { target: ['.nav a:last'], html: '<a>2</a>', impact: 'critical', landmark: 'nav' },
          ],
        },
      ]

      const groups = groupViolations(sameLandmarkViolations, '2.2', 'AA')

      // Should have 1 group for nav
      const linkGroups = groups.filter(g => g.ruleId === 'link-name' && g.landmark === 'nav')
      expect(linkGroups.length).toBe(1)
      expect(linkGroups[0]?.nodeCount).toBe(2)
    })
  })
})
