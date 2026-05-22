/** WCAG 2.1 success criteria by level */
export const WCAG_21 = {
  A: [
    '1.1.1',
    '1.2.1', '1.2.2', '1.2.3',
    '1.3.1', '1.3.2', '1.3.3',
    '1.4.1', '1.4.2',
    '2.1.1', '2.1.2', '2.1.4',
    '2.2.1', '2.2.2',
    '2.3.1',
    '2.4.1', '2.4.2', '2.4.3', '2.4.4',
    '2.5.1', '2.5.2', '2.5.3', '2.5.4',
    '3.1.1',
    '3.2.1', '3.2.2',
    '3.3.1', '3.3.2',
    '4.1.2',
  ],
  AA: [
    '1.2.4', '1.2.5',
    '1.3.4', '1.3.5',
    '1.4.3', '1.4.4', '1.4.5', '1.4.10', '1.4.11', '1.4.12', '1.4.13',
    '2.4.5', '2.4.6', '2.4.7',
    '3.1.2',
    '3.2.3', '3.2.4',
    '3.3.3', '3.3.4',
    '4.1.3',
  ],
  AAA: [
    '1.2.6', '1.2.7', '1.2.8', '1.2.9',
    '1.3.6',
    '1.4.6', '1.4.7', '1.4.8', '1.4.9',
    '2.1.3',
    '2.2.3', '2.2.4', '2.2.5', '2.2.6',
    '2.3.2', '2.3.3',
    '2.4.8', '2.4.9', '2.4.10',
    '2.5.5', '2.5.6',
    '3.1.3', '3.1.4', '3.1.5', '3.1.6',
    '3.2.5',
    '3.3.5', '3.3.6',
  ],
}

/** WCAG 2.2 additions on top of 2.1 */
export const WCAG_22_ADDITIONS = {
  A: [
    '3.2.6',
    '3.3.7',
  ],
  AA: [
    '2.4.11',
    '2.5.7',
    '2.5.8',
    '3.3.8',
  ],
  AAA: [
    '2.4.12',
    '2.4.13',
    '3.3.9',
  ],
}

/** Pre-test question → SC removal map */
export const PRETEST_SC_MAP = {
  1: {
    '2.1': ['2.2.2', '4.1.3'],
    '2.2': ['2.2.2', '4.1.3'],
  },
  2: {
    '2.1': ['1.2.1', '1.2.2', '1.2.3', '1.2.5', '1.2.6', '1.2.7', '1.2.8'],
    '2.2': ['1.2.1', '1.2.2', '1.2.3', '1.2.5', '1.2.6', '1.2.7', '1.2.8'],
  },
  3: {
    '2.1': ['1.2.4', '1.2.9'],
    '2.2': ['1.2.4', '1.2.9'],
  },
  4: {
    '2.1': ['1.3.5', '3.3.1', '3.3.2', '3.3.3', '3.3.4'],
    '2.2': ['1.3.5', '3.3.1', '3.3.2', '3.3.3', '3.3.4', '3.3.7'],
  },
  5: {
    '2.1': [],
    '2.2': ['3.3.8', '3.3.9'],
  },
  6: {
    '2.1': ['2.2.1', '2.2.3', '2.2.4', '2.2.5', '2.2.6'],
    '2.2': ['2.2.1', '2.2.3', '2.2.4', '2.2.5', '2.2.6'],
  },
  7: {
    '2.1': [],
    '2.2': ['2.5.7'],
  },
  // Q8 (data tables) intentionally omitted — 1.3.1 is never fully removed,
  // only its table-specific application is scoped. Handled as an auditor note in
  // Step 4 scope view, not as a pre-test question.
}

/** AAA supersession map — when AAA SC is in scope, its AA counterpart is satisfied */
export const SUPERSESSION_MAP = {
  '2.4.12': '2.4.11',
  '1.4.6': '1.4.3',
  '2.4.9': '2.4.4',
  '1.2.9': '1.2.4',
  '2.2.3': '2.2.1',
  '1.4.9': '1.4.5',
  '2.1.3': '2.1.1',
  '3.2.5': '3.2.2',
}

/** Build the applicable SC set for version + level */
export function getAllSCsForTarget(wcagVersion = '2.2', conformanceLevel = 'AA') {
  // Normalize inputs
  const versionKey = wcagVersion.includes('2.1') ? '2.1' : '2.2'
  const levelKey = conformanceLevel.replace('Level ', '').trim().toUpperCase()

  // Validate level - default to AA if invalid
  if (!['A', 'AA', 'AAA'].includes(levelKey)) {
    console.warn(`getAllSCsForTarget: Invalid level "${levelKey}", defaulting to AA`)
  }

  const base = WCAG_21
  const additions = versionKey === '2.2'
    ? WCAG_22_ADDITIONS
    : { A: [], AA: [], AAA: [] }

  const scSet = new Set([
    ...base.A,
    ...additions.A,
  ])

  if (levelKey === 'AA' || levelKey === 'AAA') {
    base.AA.forEach(sc => scSet.add(sc))
    additions.AA.forEach(sc => scSet.add(sc))
  }

  if (levelKey === 'AAA') {
    base.AAA.forEach(sc => scSet.add(sc))
    additions.AAA.forEach(sc => scSet.add(sc))
  }

  return scSet
}

/** Get list of questions visible for this version + level combination */
export function getVisibleQuestions(wcagVersion = '2.2', conformanceLevel = 'AA') {
  // Normalize wcagVersion to '2.1' or '2.2' (remove 'WCAG ' prefix if present)
  const versionKey = wcagVersion.includes('2.1') ? '2.1' : '2.2'

  // Normalize conformanceLevel to 'A', 'AA', or 'AAA' (remove 'Level ' prefix if present)
  const levelKey = conformanceLevel.replace('Level ', '').trim().toUpperCase()

  // Validate level - default to AA if invalid
  if (!['A', 'AA', 'AAA'].includes(levelKey)) {
    console.warn(`getVisibleQuestions: Invalid level "${levelKey}", using AA for question visibility`)
  }

  const applicableSCs = getAllSCsForTarget(wcagVersion, levelKey)
  const QUESTION_IDS = [1, 2, 3, 4, 5, 6, 7]

  return QUESTION_IDS.filter(qId => {
    const scList = PRETEST_SC_MAP[qId]?.[versionKey] ?? []
    return scList.some(sc => applicableSCs.has(sc))
  })
}

/** Compute skipped SC based on pre-test answers and WCAG version */
export function computeSkippedSCs(preTestAnswers = {}, wcagVersion = '2.2', applicableSCSet, conformanceLevel = 'AA') {
  // Normalize wcagVersion to '2.1' or '2.2' (remove 'WCAG ' prefix if present)
  const versionKey = wcagVersion.includes('2.1') ? '2.1' : '2.2'
  const toSkip = new Set()
  const visibleQIds = getVisibleQuestions(wcagVersion, conformanceLevel)

  Object.entries(preTestAnswers).forEach(([qId, answer]) => {
    // Strip 'q' prefix from question ID (e.g., 'q1' -> 1)
    const qNum = Number(qId.replace('q', ''))
    // Skip processing if this question was not shown to the user
    if (!visibleQIds.includes(qNum)) return
    if (answer !== 'no') return

    const scList = PRETEST_SC_MAP[qNum]?.[versionKey] ?? []
    scList.forEach(sc => {
      if (applicableSCSet.has(sc)) {
        toSkip.add(sc)
      }
    })
  })

  return toSkip
}

/** Apply AAA supersessions — remove AA SC when AAA SC is in scope */
export function applySupersessions(activeSCSet) {
  const result = new Set(activeSCSet)

  Object.entries(SUPERSESSION_MAP).forEach(([aaaSC, aaSC]) => {
    if (result.has(aaaSC) && result.has(aaSC)) {
      result.delete(aaSC)
    }
  })

  return result
}

/** Get SC count considering WCAG version, conformance level, and pre-test answers */
export function getApproxScCount(wcagVersion = '2.2', conformanceLevel = 'AA', preTestAnswers = {}) {
  // Validate inputs
  const validVersions = ['2.1', '2.2', 'WCAG 2.1', 'WCAG 2.2']
  const validLevels = ['A', 'AA', 'AAA', 'Level A', 'Level AA', 'Level AAA']

  if (!validVersions.includes(String(wcagVersion).trim())) {
    console.error(`getApproxScCount: Invalid WCAG version "${wcagVersion}". Must be one of: ${validVersions.join(', ')}`)
    return {
      total: 0,
      skipped: 0,
      superseded: 0,
      active: 0,
      skippedList: [],
      supersededList: [],
      activeList: [],
      error: `Invalid WCAG version: ${wcagVersion}`,
    }
  }

  const normalizedLevel = String(conformanceLevel).replace('Level ', '').trim().toUpperCase()
  if (!validLevels.includes(String(conformanceLevel).trim()) && !['A', 'AA', 'AAA'].includes(normalizedLevel)) {
    console.error(`getApproxScCount: Invalid conformance level "${conformanceLevel}". Must be one of: ${validLevels.join(', ')}`)
    return {
      total: 0,
      skipped: 0,
      superseded: 0,
      active: 0,
      skippedList: [],
      supersededList: [],
      activeList: [],
      error: `Invalid conformance level: ${conformanceLevel}`,
    }
  }

  if (preTestAnswers && typeof preTestAnswers !== 'object') {
    console.error('getApproxScCount: preTestAnswers must be an object')
    preTestAnswers = {}
  }

  // Step 1 — build full applicable set for version + level
  const allSCs = getAllSCsForTarget(wcagVersion, conformanceLevel)

  // Step 2 — remove SCs based on "no" answers (only for visible questions)
  const skippedSCs = computeSkippedSCs(preTestAnswers, wcagVersion, allSCs, conformanceLevel)
  const afterPretest = new Set([...allSCs].filter(sc => !skippedSCs.has(sc)))

  // Step 3 — apply AAA supersessions
  const activeSCs = applySupersessions(afterPretest)

  // Step 4 — compute superseded SC for display
  const supersededSCs = new Set(
    Object.entries(SUPERSESSION_MAP)
      .filter(([aaaSC, aaSC]) => afterPretest.has(aaaSC) && afterPretest.has(aaSC))
      .map(([, aaSC]) => aaSC)
  )

  return {
    total:          allSCs.size,
    skipped:        skippedSCs.size,
    superseded:     supersededSCs.size,
    active:         activeSCs.size,
    skippedList:    [...skippedSCs],
    supersededList: [...supersededSCs],
    activeList:     [...activeSCs],
  }
}
