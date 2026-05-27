/**
 * wcagScData.js
 *
 * Complete WCAG 2.1 + 2.2 success criterion catalogue.
 * Each entry: { name, level, alwaysManual }
 *
 * alwaysManual = true  → axe cannot test this SC at all; always needs human verification
 * alwaysManual = false → axe can produce results for this SC (may still need supplemental manual check)
 *
 * Used for:
 *  1. Displaying SC names in the Manual Checks tab
 *  2. Seeding manual_checks rows for SCs that axe will never flag
 */

export const WCAG_SC_DATA = Object.freeze({
  // ── 1.1 Text Alternatives ──────────────────────────────────────────────────
  '1.1.1': { name: 'Non-text Content',                                     level: 'A',   alwaysManual: false },

  // ── 1.2 Time-based Media ───────────────────────────────────────────────────
  '1.2.1': { name: 'Audio-only and Video-only (Prerecorded)',               level: 'A',   alwaysManual: true  },
  '1.2.2': { name: 'Captions (Prerecorded)',                                level: 'A',   alwaysManual: true  },
  '1.2.3': { name: 'Audio Description or Media Alternative (Prerecorded)',  level: 'A',   alwaysManual: true  },
  '1.2.4': { name: 'Captions (Live)',                                       level: 'AA',  alwaysManual: true  },
  '1.2.5': { name: 'Audio Description (Prerecorded)',                       level: 'AA',  alwaysManual: true  },
  '1.2.6': { name: 'Sign Language (Prerecorded)',                           level: 'AAA', alwaysManual: true  },
  '1.2.7': { name: 'Extended Audio Description (Prerecorded)',              level: 'AAA', alwaysManual: true  },
  '1.2.8': { name: 'Media Alternative (Prerecorded)',                       level: 'AAA', alwaysManual: true  },
  '1.2.9': { name: 'Audio-only (Live)',                                     level: 'AAA', alwaysManual: true  },

  // ── 1.3 Adaptable ─────────────────────────────────────────────────────────
  '1.3.1': { name: 'Info and Relationships',                                level: 'A',   alwaysManual: false },
  '1.3.2': { name: 'Meaningful Sequence',                                   level: 'A',   alwaysManual: false },
  '1.3.3': { name: 'Sensory Characteristics',                               level: 'A',   alwaysManual: true  },
  '1.3.4': { name: 'Orientation',                                           level: 'AA',  alwaysManual: true  },
  '1.3.5': { name: 'Identify Input Purpose',                                level: 'AA',  alwaysManual: false },
  '1.3.6': { name: 'Identify Purpose',                                      level: 'AAA', alwaysManual: true  },

  // ── 1.4 Distinguishable ────────────────────────────────────────────────────
  '1.4.1': { name: 'Use of Color',                                          level: 'A',   alwaysManual: true  },
  '1.4.2': { name: 'Audio Control',                                         level: 'A',   alwaysManual: true  },
  '1.4.3': { name: 'Contrast (Minimum)',                                    level: 'AA',  alwaysManual: false },
  '1.4.4': { name: 'Resize Text',                                           level: 'AA',  alwaysManual: true  },
  '1.4.5': { name: 'Images of Text',                                        level: 'AA',  alwaysManual: true  },
  '1.4.6': { name: 'Contrast (Enhanced)',                                   level: 'AAA', alwaysManual: false },
  '1.4.7': { name: 'Low or No Background Audio',                            level: 'AAA', alwaysManual: true  },
  '1.4.8': { name: 'Visual Presentation',                                   level: 'AAA', alwaysManual: true  },
  '1.4.9': { name: 'Images of Text (No Exception)',                         level: 'AAA', alwaysManual: true  },
  '1.4.10': { name: 'Reflow',                                               level: 'AA',  alwaysManual: true  },
  '1.4.11': { name: 'Non-text Contrast',                                    level: 'AA',  alwaysManual: false },
  '1.4.12': { name: 'Text Spacing',                                         level: 'AA',  alwaysManual: true  },
  '1.4.13': { name: 'Content on Hover or Focus',                            level: 'AA',  alwaysManual: true  },

  // ── 2.1 Keyboard Accessible ───────────────────────────────────────────────
  '2.1.1': { name: 'Keyboard',                                              level: 'A',   alwaysManual: true  },
  '2.1.2': { name: 'No Keyboard Trap',                                      level: 'A',   alwaysManual: true  },
  '2.1.3': { name: 'Keyboard (No Exception)',                               level: 'AAA', alwaysManual: true  },
  '2.1.4': { name: 'Character Key Shortcuts',                               level: 'A',   alwaysManual: true  },

  // ── 2.2 Enough Time ───────────────────────────────────────────────────────
  '2.2.1': { name: 'Timing Adjustable',                                     level: 'A',   alwaysManual: true  },
  '2.2.2': { name: 'Pause, Stop, Hide',                                     level: 'A',   alwaysManual: true  },
  '2.2.3': { name: 'No Timing',                                             level: 'AAA', alwaysManual: true  },
  '2.2.4': { name: 'Interruptions',                                         level: 'AAA', alwaysManual: true  },
  '2.2.5': { name: 'Re-authenticating',                                     level: 'AAA', alwaysManual: true  },
  '2.2.6': { name: 'Timeouts',                                              level: 'AAA', alwaysManual: true  },

  // ── 2.3 Seizures and Physical Reactions ───────────────────────────────────
  '2.3.1': { name: 'Three Flashes or Below Threshold',                      level: 'A',   alwaysManual: true  },
  '2.3.2': { name: 'Three Flashes',                                         level: 'AAA', alwaysManual: true  },
  '2.3.3': { name: 'Animation from Interactions',                           level: 'AAA', alwaysManual: true  },

  // ── 2.4 Navigable ─────────────────────────────────────────────────────────
  '2.4.1': { name: 'Bypass Blocks',                                         level: 'A',   alwaysManual: true  },
  '2.4.2': { name: 'Page Titled',                                           level: 'A',   alwaysManual: false },
  '2.4.3': { name: 'Focus Order',                                           level: 'A',   alwaysManual: true  },
  '2.4.4': { name: 'Link Purpose (In Context)',                             level: 'A',   alwaysManual: false },
  '2.4.5': { name: 'Multiple Ways',                                         level: 'AA',  alwaysManual: true  },
  '2.4.6': { name: 'Headings and Labels',                                   level: 'AA',  alwaysManual: true  },
  '2.4.7': { name: 'Focus Visible',                                         level: 'AA',  alwaysManual: true  },
  '2.4.8': { name: 'Location',                                              level: 'AAA', alwaysManual: true  },
  '2.4.9': { name: 'Link Purpose (Link Only)',                              level: 'AAA', alwaysManual: true  },
  '2.4.10': { name: 'Section Headings',                                     level: 'AAA', alwaysManual: true  },
  '2.4.11': { name: 'Focus Not Obscured',                                   level: 'AA',  alwaysManual: true  },  // WCAG 2.2
  '2.4.12': { name: 'Focus Not Obscured (Enhanced)',                        level: 'AAA', alwaysManual: true  },  // WCAG 2.2
  '2.4.13': { name: 'Focus Appearance',                                     level: 'AAA', alwaysManual: true  },  // WCAG 2.2

  // ── 2.5 Input Modalities ──────────────────────────────────────────────────
  '2.5.1': { name: 'Pointer Gestures',                                      level: 'A',   alwaysManual: true  },
  '2.5.2': { name: 'Pointer Cancellation',                                  level: 'A',   alwaysManual: true  },
  '2.5.3': { name: 'Label in Name',                                         level: 'A',   alwaysManual: false },
  '2.5.4': { name: 'Motion Actuation',                                      level: 'A',   alwaysManual: true  },
  '2.5.5': { name: 'Target Size',                                           level: 'AAA', alwaysManual: true  },
  '2.5.6': { name: 'Concurrent Input Mechanisms',                           level: 'AAA', alwaysManual: true  },
  '2.5.7': { name: 'Dragging Movements',                                    level: 'AA',  alwaysManual: true  },  // WCAG 2.2
  '2.5.8': { name: 'Target Size (Minimum)',                                 level: 'AA',  alwaysManual: true  },  // WCAG 2.2

  // ── 3.1 Readable ──────────────────────────────────────────────────────────
  '3.1.1': { name: 'Language of Page',                                      level: 'A',   alwaysManual: false },
  '3.1.2': { name: 'Language of Parts',                                     level: 'AA',  alwaysManual: true  },
  '3.1.3': { name: 'Unusual Words',                                         level: 'AAA', alwaysManual: true  },
  '3.1.4': { name: 'Abbreviations',                                         level: 'AAA', alwaysManual: true  },
  '3.1.5': { name: 'Reading Level',                                         level: 'AAA', alwaysManual: true  },
  '3.1.6': { name: 'Pronunciation',                                         level: 'AAA', alwaysManual: true  },

  // ── 3.2 Predictable ───────────────────────────────────────────────────────
  '3.2.1': { name: 'On Focus',                                              level: 'A',   alwaysManual: true  },
  '3.2.2': { name: 'On Input',                                              level: 'A',   alwaysManual: true  },
  '3.2.3': { name: 'Consistent Navigation',                                 level: 'AA',  alwaysManual: true  },
  '3.2.4': { name: 'Consistent Identification',                             level: 'AA',  alwaysManual: true  },
  '3.2.5': { name: 'Change on Request',                                     level: 'AAA', alwaysManual: true  },
  '3.2.6': { name: 'Consistent Help',                                       level: 'AA',  alwaysManual: true  },  // WCAG 2.2

  // ── 3.3 Input Assistance ──────────────────────────────────────────────────
  '3.3.1': { name: 'Error Identification',                                  level: 'A',   alwaysManual: true  },
  '3.3.2': { name: 'Labels or Instructions',                                level: 'A',   alwaysManual: true  },
  '3.3.3': { name: 'Error Suggestion',                                      level: 'AA',  alwaysManual: true  },
  '3.3.4': { name: 'Error Prevention (Legal, Financial, Data)',             level: 'AA',  alwaysManual: true  },
  '3.3.5': { name: 'Help',                                                  level: 'AAA', alwaysManual: true  },
  '3.3.6': { name: 'Error Prevention (All)',                                level: 'AAA', alwaysManual: true  },
  '3.3.7': { name: 'Redundant Entry',                                       level: 'A',   alwaysManual: true  },  // WCAG 2.2
  '3.3.8': { name: 'Accessible Authentication (Minimum)',                   level: 'AA',  alwaysManual: true  },  // WCAG 2.2
  '3.3.9': { name: 'Accessible Authentication (Enhanced)',                  level: 'AAA', alwaysManual: true  },  // WCAG 2.2

  // ── 4.1 Compatible ────────────────────────────────────────────────────────
  '4.1.1': { name: 'Parsing',                                               level: 'A',   alwaysManual: false },
  '4.1.2': { name: 'Name, Role, Value',                                     level: 'A',   alwaysManual: false },
  '4.1.3': { name: 'Status Messages',                                       level: 'AA',  alwaysManual: false },
})

/** Principle labels by first digit */
export const PRINCIPLES = {
  '1': 'Perceivable',
  '2': 'Operable',
  '3': 'Understandable',
  '4': 'Robust',
}

/**
 * Get all always-manual SC IDs.
 * Used in api/scan.js to seed manual_checks for SCs axe never touches.
 */
export function getAlwaysManualSCs() {
  return Object.entries(WCAG_SC_DATA)
    .filter(([, data]) => data.alwaysManual)
    .map(([scId]) => scId)
}

/**
 * Resolve a SC ID to its name. Falls back to the SC ID if unknown.
 */
export function getScName(scId) {
  return WCAG_SC_DATA[scId]?.name ?? scId
}

/**
 * Resolve a SC ID to its level (A / AA / AAA). Falls back to '?'.
 */
export function getScLevel(scId) {
  return WCAG_SC_DATA[scId]?.level ?? '?'
}

/**
 * Get the principle number (1–4) from a SC ID.
 * '1.4.3' → '1'
 */
export function getPrinciple(scId) {
  return scId?.split('.')?.[0] ?? '?'
}
