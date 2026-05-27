/**
 * Icon Library - Audit Studio Design System
 *
 * This file contains all icons used across the auditV2 project.
 * All icons are from Lucide React (https://lucide.dev)
 *
 * Usage:
 *   import { IconName } from 'lucide-react';
 *   import { Icons, ButtonIcons, BadgeIcons } from './icons.js';
 *
 *   // Use directly
 *   <ArrowLeft className="h-4 w-4" />
 *
 *   // Or reference from the registry
 *   const MyIcon = Icons.navigation.arrowLeft;
 */

// =============================================================================
// NAVIGATION ICONS
// =============================================================================
export const NavigationIcons = {
  arrowLeft: 'ArrowLeft',      // Back button, previous step
  arrowRight: 'ArrowRight',    // Next button, forward
  arrowUp: 'ArrowUp',          // Sort ascending, scroll up
  arrowDown: 'ArrowDown',      // Sort descending, scroll down
  chevronRight: 'ChevronRight', // Expand, breadcrumb separator
  chevronDown: 'ChevronDown',  // Dropdown expand
  chevronUp: 'ChevronUp',      // Dropdown collapse
  x: 'X',                      // Close, dismiss, delete
  externalLink: 'ExternalLink', // Open in new tab
};

// =============================================================================
// ACTION ICONS
// =============================================================================
export const ActionIcons = {
  plus: 'Plus',                // Add new item
  trash2: 'Trash2',            // Delete, remove
  play: 'Play',                // Start scan, run
  refreshCw: 'RefreshCw',      // Refresh, reload
  search: 'Search',            // Search, find
  checkCircle: 'CheckCircle',  // Success, complete (v1)
  checkCircle2: 'CheckCircle2', // Success, complete (v2 - preferred)
  alertTriangle: 'AlertTriangle', // Warning, error
  x: 'X',                      // Cancel, close
};

// =============================================================================
// CONTENT ICONS
// =============================================================================
export const ContentIcons = {
  fileSearch: 'FileSearch',    // Scan, audit
  fileText: 'FileText',        // Document, report
  fileCheck: 'FileCheck',      // Completed document
  clipboardList: 'ClipboardList', // Checklist, tasks
  listChecks: 'ListChecks',    // Task list
  globe: 'Globe',              // Website, URL
  puzzle: 'Puzzle',            // Component, extension
  gitBranch: 'GitBranch',      // Flow, branch
  archive: 'Archive',          // Archive, storage
  lock: 'Lock',                // Secure, password
  shield: 'Shield',            // Security, protection
};

// =============================================================================
// STATUS ICONS
// =============================================================================
export const StatusIcons = {
  checkCircle2: 'CheckCircle2', // Success, passed
  alertTriangle: 'AlertTriangle', // Warning, caution
  x: 'X',                      // Error, failed
  loader2: 'Loader2',           // Loading, spinner
  info: 'Info',               // Information
  clock: 'Clock',             // Pending, scheduled
};

// =============================================================================
// USER ICONS
// =============================================================================
export const UserIcons = {
  user: 'User',               // User profile, account
};

// =============================================================================
// DATA VISUALIZATION ICONS
// =============================================================================
export const DataIcons = {
  barChart3: 'BarChart3',     // Analytics, statistics
};

// =============================================================================
// DATE/TIME ICONS
// =============================================================================
export const DateTimeIcons = {
  calendar: 'Calendar',       // Date picker, schedule
  clock: 'Clock',            // Time, duration
};

// =============================================================================
// ALL ICONS REGISTRY
// =============================================================================
export const Icons = {
  navigation: NavigationIcons,
  action: ActionIcons,
  content: ContentIcons,
  status: StatusIcons,
  user: UserIcons,
  data: DataIcons,
  dateTime: DateTimeIcons,
};

// =============================================================================
// RECOMMENDED ICONS BY COMPONENT
// =============================================================================

/**
 * Recommended icons for Button component
 * Usage in Button: import { ButtonIcons } from './icons.js';
 * Or see Storybook: Components/Button -> Icons section
 */
export const ButtonIcons = {
  // Leading icons (before text)
  leading: {
    back: 'ArrowLeft',
    add: 'Plus',
    search: 'Search',
    refresh: 'RefreshCw',
    scan: 'Play',
  },
  // Trailing icons (after text)
  trailing: {
    forward: 'ArrowRight',
    external: 'ExternalLink',
    dropdown: 'ChevronDown',
  },
};

/**
 * Recommended icons for Badge component
 * Usage in Badge: import { BadgeIcons } from './icons.js';
 * Or see Storybook: Components/Badge -> Icon examples
 */
export const BadgeIcons = {
  success: 'CheckCircle2',
  warning: 'AlertTriangle',
  error: 'X',
  info: 'Info',
  loading: 'Loader2',
};

/**
 * Recommended icons for navigation elements
 */
export const NavigationIconSet = {
  home: 'Globe',
  audits: 'ClipboardList',
  reports: 'FileText',
  settings: 'User',
  logout: 'ArrowLeft',
};

/**
 * Recommended icons for scan operations
 */
export const ScanIcons = {
  pageScan: 'FileSearch',
  componentScan: 'Puzzle',
  flowScan: 'GitBranch',
  play: 'Play',
  stop: 'X',
  pause: 'Clock',
};

// =============================================================================
// ICON SIZE GUIDE
// =============================================================================

/**
 * Standard icon sizes for different contexts
 * Usage: <Icon className={IconSizes.sm} />
 */
export const IconSizes = {
  xs: 'h-3 w-3',      // Inline with text, badges
  sm: 'h-4 w-4',      // Buttons, small components (default)
  md: 'h-5 w-5',      // Form inputs, navigation
  lg: 'h-6 w-6',      // Feature highlights, empty states
  xl: 'h-8 w-8',      // Hero sections, illustrations
};

// =============================================================================
// COMPLETE ICON LIST FOR IMPORT
// =============================================================================

/**
 * All icon names for easy reference
 * Copy these to your import statement from 'lucide-react'
 */
export const AllIconNames = [
  // Navigation
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',
  'ChevronRight',
  'ChevronDown',
  'ChevronUp',
  'X',
  'ExternalLink',
  // Actions
  'Plus',
  'Trash2',
  'Play',
  'RefreshCw',
  'Search',
  'CheckCircle',
  'CheckCircle2',
  'AlertTriangle',
  // Content
  'FileSearch',
  'FileText',
  'FileCheck',
  'ClipboardList',
  'ListChecks',
  'Globe',
  'Puzzle',
  'GitBranch',
  'Archive',
  'Lock',
  'Shield',
  // Status
  'Loader2',
  'Info',
  'Clock',
  // User
  'User',
  // Data
  'BarChart3',
  // Date
  'Calendar',
];

// =============================================================================
// ACCESSIBILITY HELPERS
// =============================================================================

/**
 * Returns the appropriate aria-hidden attribute for icons
 * @param {boolean} isDecorational - Whether the icon is purely decorative
 * @returns {object} Props to spread on the icon component
 */
export function getIconA11yProps(isDecorational = true) {
  if (isDecorational) {
    return { 'aria-hidden': 'true' };
  }
  return {};
}

/**
 * Creates an accessible icon button configuration
 * @param {string} ariaLabel - The accessible label for the button
 * @returns {object} Configuration for the icon button
 */
export function createIconButtonConfig(ariaLabel) {
  return {
    'aria-label': ariaLabel,
    'aria-hidden': undefined, // Icon is not hidden if it's the only content
  };
}

export default Icons;
