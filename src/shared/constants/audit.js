/**
 * Audit-related constants
 */

// Audit statuses
export const AUDIT_STATUS = {
  ACTIVE: 'active',
  COMPLETE: 'complete',
  ARCHIVED: 'archived',
  DRAFT: 'draft',
}

// WCAG versions
export const WCAG_VERSIONS = {
  V2_1: '2.1',
  V2_2: '2.2',
}

// Conformance levels
export const CONFORMANCE_LEVELS = {
  A: 'A',
  AA: 'AA',
  AAA: 'AAA',
}

// Pipeline stages
export const PIPELINE_STAGE = {
  SETUP: 0,
  SCOPING: 1,
  TESTING: 2,
  COMPLETE: 3,
}

// Tab filters for audits list
export const AUDIT_TABS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'triage', label: 'Needs triage' },
  { key: 'complete', label: 'Complete' },
  { key: 'archived', label: 'Archived' },
]

// Audit status config for badges
export const AUDIT_STATUS_CONFIG = {
  active: { color: 'primary', label: 'Active' },
  complete: { color: 'success', label: 'Complete' },
  archived: { color: 'gray', label: 'Archived' },
  draft: { color: 'warning', label: 'Draft' },
}

// WCAG color mapping for badges
export const WCAG_BADGE_COLORS = {
  '2.1 A': 'warning',
  '2.1 AA': 'info',
  '2.1 AAA': 'success',
  '2.2 A': 'purple',
  '2.2 AA': 'primary',
  '2.2 AAA': 'indigo',
}
