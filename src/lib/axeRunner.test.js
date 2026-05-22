import { mapTagsToSC, buildAxeTags } from './axeRunner'

describe('mapTagsToSC', () => {
  test('maps 3-digit wcag tag correctly', () => {
    expect(mapTagsToSC(['wcag143'])).toEqual(['1.4.3'])
  })

  test('maps 4-digit wcag tag correctly', () => {
    expect(mapTagsToSC(['wcag2412'])).toEqual(['2.4.12'])
  })

  test('ignores non-wcag tags', () => {
    expect(mapTagsToSC(['best-practice', 'cat.aria', 'wcag2a'])).toEqual([])
  })

  test('handles multiple tags and filters correctly', () => {
    expect(mapTagsToSC(['wcag111', 'wcag2a', 'wcag412', 'cat.forms']))
      .toEqual(['1.1.1', '4.1.2'])
  })

  test('returns empty array for empty input', () => {
    expect(mapTagsToSC([])).toEqual([])
  })

  test('returns empty array for undefined input', () => {
    expect(mapTagsToSC(undefined)).toEqual([])
  })
})

describe('buildAxeTags', () => {
  test('WCAG 2.1 AA includes 2.0 and 2.1 tags but not 2.2 or AAA', () => {
    const tags = buildAxeTags('2.1', 'AA')
    expect(tags).toContain('wcag2a')
    expect(tags).toContain('wcag2aa')
    expect(tags).toContain('wcag21a')
    expect(tags).toContain('wcag21aa')
    expect(tags).not.toContain('wcag22aa')
    expect(tags).not.toContain('wcag2aaa')
  })

  test('WCAG 2.2 AA includes 2.2 tag', () => {
    const tags = buildAxeTags('2.2', 'AA')
    expect(tags).toContain('wcag22aa')
    expect(tags).not.toContain('wcag2aaa')
  })

  test('WCAG 2.2 AAA includes AAA tag', () => {
    const tags = buildAxeTags('2.2', 'AAA')
    expect(tags).toContain('wcag22aa')
    expect(tags).toContain('wcag2aaa')
  })

  test('WCAG 2.1 AAA includes AAA tag but not 2.2', () => {
    const tags = buildAxeTags('2.1', 'AAA')
    expect(tags).toContain('wcag2aaa')
    expect(tags).not.toContain('wcag22aa')
  })
})