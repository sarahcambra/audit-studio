/**
 * Application routes configuration
 */

export const ROUTES = {
  // Auth
  LOGIN: '/login',

  // Audits
  AUDITS: {
    ROOT: '/audits',
    LIST: '/audits',
    NEW: '/audits/new',
    DETAIL: (id) => `/audits/${id}`,
    SCAN: (id) => `/audits/${id}/scan`,
    PROJECTS: '/audits/projects',
    ARCHIVED: '/audits/archived',
  },

  // Reports
  REPORTS: {
    AUDITS: '/reports/audits',
    COMPLIANCE: '/reports/compliance',
    EXPORT: '/reports/export',
  },

  // Knowledge Base
  KNOWLEDGE: {
    SC_LIBRARY: '/knowledge/sc-library',
    PATTERNS: '/knowledge/patterns',
    FIX_TEMPLATES: '/knowledge/fix-templates',
    COMPONENT_CATALOG: '/knowledge/component-catalog',
    REFERENCE_LINKS: '/knowledge/reference-links',
  },

  // Settings
  SETTINGS: {
    TEAM: '/settings/team',
    BRANDING: '/settings/branding',
    NOTIFICATIONS: '/settings/notifications',
  },

  // User
  USER: {
    PROFILE: '/users/profile',
  },

  // Home
  HOME: '/',
}

/**
 * Get audit detail route
 * @param {string} id - Audit ID
 * @returns {string} Route path
 */
export function getAuditDetailRoute(id) {
  return `/audits/${id}`
}

/**
 * Get audit scan route
 * @param {string} id - Audit ID
 * @returns {string} Route path
 */
export function getAuditScanRoute(id) {
  return `/audits/${id}/scan`
}
