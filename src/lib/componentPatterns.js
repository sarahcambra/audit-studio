/**
 * W3C ARIA Authoring Practices Guide (APG) patterns
 * Maps component types to their ARIA requirements and related WCAG SCs
 * Source: https://www.w3.org/WAI/ARIA/apg/patterns/
 */

export const COMPONENT_PATTERNS = {
  accordion: {
    id: 'accordion',
    name: 'Accordion',
    category: 'Disclosure',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/',
    description: 'Vertically stacked headers that reveal/hide content sections',
    requiredRoles: [],
    requiredAttributes: ['aria-expanded', 'aria-controls'],
    recommendedAttributes: ['aria-labelledby'],
    relatedSCs: ['4.1.2', '2.1.1', '2.4.6'],
    commonSelectors: ['.accordion', '[data-accordion]', '.collapse', '.collapsible'],
    keyboardInteractions: ['Enter/Space to toggle', 'Arrow Down/Up between headers'],
  },
  alert: {
    id: 'alert',
    name: 'Alert',
    category: 'Status Messages',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/alert/',
    description: 'Important, time-sensitive messages that grab attention',
    requiredRoles: ['alert'],
    requiredAttributes: [],
    recommendedAttributes: ['aria-live', 'aria-atomic'],
    relatedSCs: ['4.1.3', '1.4.1', '3.3.1'],
    commonSelectors: ['.alert', '[role="alert"]', '.notification', '.toast'],
    keyboardInteractions: [],
  },
  alertdialog: {
    id: 'alertdialog',
    name: 'Alert Dialog',
    category: 'Dialog',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/',
    description: 'Modal dialog that alerts user to important situation',
    requiredRoles: ['alertdialog'],
    requiredAttributes: ['aria-modal', 'aria-labelledby'],
    recommendedAttributes: ['aria-describedby'],
    relatedSCs: ['4.1.2', '2.1.2', '2.4.3', '1.3.1'],
    commonSelectors: ['.alert-dialog', '[role="alertdialog"]', '.modal-alert'],
    keyboardInteractions: ['Tab cycles through focusable elements', 'Escape to close'],
  },
  breadcrumb: {
    id: 'breadcrumb',
    name: 'Breadcrumb',
    category: 'Navigation',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/',
    description: 'Secondary navigation showing current page location in hierarchy',
    requiredRoles: ['navigation'],
    requiredAttributes: ['aria-label="Breadcrumb"'],
    recommendedAttributes: ['aria-current="page"'],
    relatedSCs: ['2.4.8', '2.4.5', '4.1.2'],
    commonSelectors: ['.breadcrumb', '[aria-label="Breadcrumb"]', 'nav.breadcrumb'],
    keyboardInteractions: ['Standard link navigation'],
  },
  button: {
    id: 'button',
    name: 'Button',
    category: 'Command',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
    description: 'Clickable element that triggers an action',
    requiredRoles: [],
    requiredAttributes: [],
    recommendedAttributes: ['aria-pressed', 'aria-expanded', 'aria-controls'],
    relatedSCs: ['4.1.2', '2.1.1', '2.4.4', '1.4.11'],
    commonSelectors: ['button', '[role="button"]', '.btn', '[type="button"]'],
    keyboardInteractions: ['Enter/Space to activate'],
  },
  checkbox: {
    id: 'checkbox',
    name: 'Checkbox',
    category: 'Form',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/',
    description: 'Binary (checked/unchecked) or tri-state input',
    requiredRoles: ['checkbox'],
    requiredAttributes: ['aria-checked'],
    recommendedAttributes: ['aria-required', 'aria-describedby'],
    relatedSCs: ['4.1.2', '1.3.1', '3.3.2', '2.1.1'],
    commonSelectors: ['input[type="checkbox"]', '[role="checkbox"]', '.checkbox'],
    keyboardInteractions: ['Space to toggle'],
  },
  combobox: {
    id: 'combobox',
    name: 'Combobox',
    category: 'Form',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/',
    description: 'Input with a popup list of options (autocomplete)',
    requiredRoles: ['combobox', 'listbox'],
    requiredAttributes: ['aria-expanded', 'aria-controls', 'aria-autocomplete'],
    recommendedAttributes: ['aria-activedescendant', 'aria-haspopup'],
    relatedSCs: ['4.1.2', '1.3.1', '2.1.1', '2.4.3'],
    commonSelectors: ['.combobox', '[role="combobox"]', '.autocomplete', '[data-autocomplete]'],
    keyboardInteractions: ['Arrow Down/Up through options', 'Enter to select', 'Escape to close'],
  },
  dialog: {
    id: 'dialog',
    name: 'Dialog',
    category: 'Window',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog/',
    description: 'Modal window overlaying main content',
    requiredRoles: ['dialog'],
    requiredAttributes: ['aria-modal', 'aria-labelledby'],
    recommendedAttributes: ['aria-describedby'],
    relatedSCs: ['4.1.2', '2.1.2', '2.4.3', '1.3.1'],
    commonSelectors: ['.modal', '[role="dialog"]', '.dialog', '[data-modal]'],
    keyboardInteractions: ['Tab cycles through focusable elements', 'Escape to close'],
  },
  disclosure: {
    id: 'disclosure',
    name: 'Disclosure',
    category: 'Disclosure',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/',
    description: 'Button that shows/hides additional content',
    requiredRoles: [],
    requiredAttributes: ['aria-expanded', 'aria-controls'],
    recommendedAttributes: [],
    relatedSCs: ['4.1.2', '2.1.1', '2.4.6'],
    commonSelectors: ['.disclosure', '[aria-expanded]', '.toggle', '.show-hide'],
    keyboardInteractions: ['Enter/Space to toggle'],
  },
  grid: {
    id: 'grid',
    name: 'Grid',
    category: 'Composite',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/grid/',
    description: 'Two-dimensional table with row/column navigation',
    requiredRoles: ['grid'],
    requiredAttributes: ['aria-rowcount', 'aria-colcount'],
    recommendedAttributes: ['aria-label', 'aria-describedby'],
    relatedSCs: ['4.1.2', '1.3.1', '2.1.1', '2.4.6'],
    commonSelectors: ['.grid', '[role="grid"]', '.data-grid'],
    keyboardInteractions: ['Arrow keys navigate cells', 'Home/End for row start/end'],
  },
  link: {
    id: 'link',
    name: 'Link',
    category: 'Navigation',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/link/',
    description: 'Clickable text that navigates to another location',
    requiredRoles: [],
    requiredAttributes: [],
    recommendedAttributes: ['aria-current', 'aria-label'],
    relatedSCs: ['2.4.4', '2.4.9', '4.1.2', '1.4.1'],
    commonSelectors: ['a', '[role="link"]', '.link'],
    keyboardInteractions: ['Enter to activate'],
  },
  listbox: {
    id: 'listbox',
    name: 'Listbox',
    category: 'Form',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/listbox/',
    description: 'Scrollable list allowing single or multiple selection',
    requiredRoles: ['listbox'],
    requiredAttributes: ['aria-label or aria-labelledby'],
    recommendedAttributes: ['aria-multiselectable', 'aria-activedescendant'],
    relatedSCs: ['4.1.2', '1.3.1', '2.1.1', '3.3.2'],
    commonSelectors: ['.listbox', '[role="listbox"]', '.select-list'],
    keyboardInteractions: ['Arrow Down/Up', 'Ctrl+A to select all', 'Space to toggle selection'],
  },
  menu: {
    id: 'menu',
    name: 'Menu',
    category: 'Navigation',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu/',
    description: 'Dropdown or popup menu of actions/links',
    requiredRoles: ['menu'],
    requiredAttributes: ['aria-haspopup', 'aria-expanded'],
    recommendedAttributes: ['aria-controls'],
    relatedSCs: ['4.1.2', '2.1.1', '2.4.3'],
    commonSelectors: ['.menu', '[role="menu"]', '.dropdown-menu', '[data-dropdown]'],
    keyboardInteractions: ['Arrow keys navigate', 'Enter/Space to activate', 'Escape to close'],
  },
  menubar: {
    id: 'menubar',
    name: 'Menubar',
    category: 'Navigation',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/menubar/',
    description: 'Horizontal bar containing multiple menus',
    requiredRoles: ['menubar'],
    requiredAttributes: [],
    recommendedAttributes: ['aria-label'],
    relatedSCs: ['4.1.2', '2.1.1', '2.4.3', '2.4.6'],
    commonSelectors: ['.menubar', '[role="menubar"]', '.menu-bar', '.navbar'],
    keyboardInteractions: ['Arrow Left/Right between menus', 'Arrow Down/Up within menu'],
  },
  meter: {
    id: 'meter',
    name: 'Meter',
    category: 'Status',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/meter/',
    description: 'Gauge or progress indicator with known range',
    requiredRoles: ['meter'],
    requiredAttributes: ['aria-valuenow', 'aria-valuemin', 'aria-valuemax'],
    recommendedAttributes: ['aria-valuetext', 'aria-label'],
    relatedSCs: ['4.1.2', '1.4.11', '1.4.1'],
    commonSelectors: ['.meter', '[role="meter"]', 'meter', '.progress'],
    keyboardInteractions: [],
  },
  modal: {
    id: 'modal',
    name: 'Modal Dialog',
    category: 'Window',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog/',
    description: 'Modal window requiring user interaction before returning to main content',
    requiredRoles: ['dialog'],
    requiredAttributes: ['aria-modal="true"', 'aria-labelledby'],
    recommendedAttributes: ['aria-describedby'],
    relatedSCs: ['4.1.2', '2.1.2', '2.4.3', '1.3.1'],
    commonSelectors: ['.modal', '[role="dialog"]', '[data-modal]', '.dialog-overlay'],
    keyboardInteractions: ['Tab cycles through focusable elements', 'Escape to close', 'Focus trapped inside'],
  },
  navbar: {
    id: 'navbar',
    name: 'Navigation Bar',
    category: 'Navigation',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/',
    description: 'Primary navigation bar with links to main sections',
    requiredRoles: ['navigation'],
    requiredAttributes: ['aria-label'],
    recommendedAttributes: ['aria-current'],
    relatedSCs: ['2.4.5', '2.4.6', '4.1.2', '1.3.1'],
    commonSelectors: ['nav', '[role="navigation"]', '.navbar', '.nav', '.main-nav'],
    keyboardInteractions: ['Tab through links', 'Arrow keys within menu'],
  },
  progressbar: {
    id: 'progressbar',
    name: 'Progress Bar',
    category: 'Status',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/progressbar/',
    description: 'Indicator showing completion progress of a task',
    requiredRoles: ['progressbar'],
    requiredAttributes: ['aria-valuenow', 'aria-valuemin', 'aria-valuemax'],
    recommendedAttributes: ['aria-label', 'aria-valuetext'],
    relatedSCs: ['4.1.2', '1.4.11', '4.1.3'],
    commonSelectors: ['.progress', '[role="progressbar"]', '.progress-bar'],
    keyboardInteractions: [],
  },
  radiogroup: {
    id: 'radiogroup',
    name: 'Radio Group',
    category: 'Form',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/radio/',
    description: 'Group of radio buttons where only one can be selected',
    requiredRoles: ['radiogroup'],
    requiredAttributes: ['aria-label or aria-labelledby'],
    recommendedAttributes: [],
    relatedSCs: ['4.1.2', '1.3.1', '3.3.2', '2.1.1'],
    commonSelectors: ['.radio-group', '[role="radiogroup"]', '.radio'],
    keyboardInteractions: ['Arrow keys to change selection', 'Space to select'],
  },
  search: {
    id: 'search',
    name: 'Search',
    category: 'Landmark',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/',
    description: 'Search form or search area of a page',
    requiredRoles: ['search'],
    requiredAttributes: [],
    recommendedAttributes: ['aria-label'],
    relatedSCs: ['2.4.5', '4.1.2', '1.3.1'],
    commonSelectors: ['[role="search"]', '.search', 'form.search', '[data-search]'],
    keyboardInteractions: ['Enter to submit'],
  },
  slider: {
    id: 'slider',
    name: 'Slider',
    category: 'Form',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/slider/',
    description: 'Range input allowing selection by sliding along a track',
    requiredRoles: ['slider'],
    requiredAttributes: ['aria-valuenow', 'aria-valuemin', 'aria-valuemax', 'aria-label'],
    recommendedAttributes: ['aria-valuetext', 'aria-orientation'],
    relatedSCs: ['4.1.2', '2.1.1', '1.3.1', '1.4.11'],
    commonSelectors: ['.slider', '[role="slider"]', 'input[type="range"]', '.range'],
    keyboardInteractions: ['Arrow keys to adjust value', 'Home/End for min/max'],
  },
  spinbutton: {
    id: 'spinbutton',
    name: 'Spinbutton',
    category: 'Form',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/',
    description: 'Numeric input with increment/decrement buttons',
    requiredRoles: ['spinbutton'],
    requiredAttributes: ['aria-valuenow', 'aria-valuemin', 'aria-valuemax'],
    recommendedAttributes: ['aria-valuetext', 'aria-label'],
    relatedSCs: ['4.1.2', '2.1.1', '1.3.1', '3.3.2'],
    commonSelectors: ['.spinbutton', '[role="spinbutton"]', 'input[type="number"]', '.number-input'],
    keyboardInteractions: ['Arrow Up/Down to change value', 'Home/End for min/max'],
  },
  switch: {
    id: 'switch',
    name: 'Switch',
    category: 'Form',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/switch/',
    description: 'Binary on/off toggle control',
    requiredRoles: ['switch'],
    requiredAttributes: ['aria-checked'],
    recommendedAttributes: ['aria-label', 'aria-describedby'],
    relatedSCs: ['4.1.2', '2.1.1', '1.3.1', '1.4.11'],
    commonSelectors: ['.switch', '[role="switch"]', '.toggle', '[data-toggle]'],
    keyboardInteractions: ['Space to toggle'],
  },
  table: {
    id: 'table',
    name: 'Table',
    category: 'Composite',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/table/',
    description: 'Tabular data with rows and columns',
    requiredRoles: ['table'],
    requiredAttributes: [],
    recommendedAttributes: ['aria-label', 'aria-describedby', 'scope on th'],
    relatedSCs: ['1.3.1', '4.1.2', '2.4.6', '1.3.2'],
    commonSelectors: ['table', '[role="table"]', '.table', '.data-table'],
    keyboardInteractions: ['Arrow keys navigate cells', 'Ctrl+Alt+Arrow for headers'],
  },
  tabs: {
    id: 'tabs',
    name: 'Tabs',
    category: 'Navigation',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/tabs/',
    description: 'Tabbed interface with tablist and tabpanels',
    requiredRoles: ['tablist', 'tab', 'tabpanel'],
    requiredAttributes: ['aria-selected', 'aria-controls', 'aria-labelledby'],
    recommendedAttributes: ['aria-orientation'],
    relatedSCs: ['4.1.2', '2.1.1', '2.4.3', '1.3.1'],
    commonSelectors: ['.tabs', '[role="tablist"]', '[role="tab"]', '[data-tabs]'],
    keyboardInteractions: ['Arrow Left/Right between tabs', 'Enter/Space to activate'],
  },
  textbox: {
    id: 'textbox',
    name: 'Text Input',
    category: 'Form',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/textbox/',
    description: 'Single-line or multi-line text input field',
    requiredRoles: [],
    requiredAttributes: ['label or aria-label'],
    recommendedAttributes: ['aria-describedby', 'aria-required', 'aria-invalid'],
    relatedSCs: ['1.3.1', '3.3.2', '4.1.2', '2.4.6'],
    commonSelectors: ['input[type="text"]', 'textarea', '[role="textbox"]', '.input', '.form-input'],
    keyboardInteractions: ['Standard text input'],
  },
  toolbar: {
    id: 'toolbar',
    name: 'Toolbar',
    category: 'Command',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/',
    description: 'Horizontal or vertical bar of related commands',
    requiredRoles: ['toolbar'],
    requiredAttributes: ['aria-label'],
    recommendedAttributes: [],
    relatedSCs: ['4.1.2', '2.1.1', '2.4.6'],
    commonSelectors: ['.toolbar', '[role="toolbar"]', '.tool-bar'],
    keyboardInteractions: ['Arrow keys between tools', 'Enter/Space to activate'],
  },
  tooltip: {
    id: 'tooltip',
    name: 'Tooltip',
    category: 'Status',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/',
    description: 'Popup providing additional information on hover/focus',
    requiredRoles: ['tooltip'],
    requiredAttributes: [],
    recommendedAttributes: ['aria-describedby linking element to tooltip'],
    relatedSCs: ['4.1.2', '1.4.13', '2.4.6'],
    commonSelectors: ['.tooltip', '[role="tooltip"]', '[data-tooltip]'],
    keyboardInteractions: ['Escape to dismiss'],
  },
  tree: {
    id: 'tree',
    name: 'Tree',
    category: 'Navigation',
    ariaPatternUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/tree/',
    description: 'Hierarchical nested list with expand/collapse',
    requiredRoles: ['tree', 'treeitem'],
    requiredAttributes: ['aria-expanded', 'aria-selected'],
    recommendedAttributes: ['aria-label', 'aria-level'],
    relatedSCs: ['4.1.2', '2.1.1', '2.4.3', '1.3.1'],
    commonSelectors: ['.tree', '[role="tree"]', '[role="treeitem"]', '.tree-view'],
    keyboardInteractions: ['Arrow keys navigate', 'Enter/Space to toggle', 'Right/Left expand/collapse'],
  },
}

/**
 * Get component pattern by ID
 * @param {string} id - Component ID (e.g., 'modal', 'tabs')
 * @returns {object|null} Component pattern or null if not found
 */
export function getComponentPattern(id) {
  return COMPONENT_PATTERNS[id.toLowerCase()] || null
}

/**
 * Get all component patterns
 * @returns {Array} Array of all component patterns
 */
export function getAllComponentPatterns() {
  return Object.values(COMPONENT_PATTERNS)
}

/**
 * Search component patterns by name or description
 * @param {string} query - Search query
 * @returns {Array} Matching component patterns
 */
export function searchComponentPatterns(query) {
  const q = query.toLowerCase()
  return Object.values(COMPONENT_PATTERNS).filter(
    pattern =>
      pattern.name.toLowerCase().includes(q) ||
      pattern.description.toLowerCase().includes(q) ||
      pattern.category.toLowerCase().includes(q)
  )
}

/**
 * Get component patterns by category
 * @param {string} category - Category name
 * @returns {Array} Component patterns in that category
 */
export function getPatternsByCategory(category) {
  const cat = category.toLowerCase()
  return Object.values(COMPONENT_PATTERNS).filter(
    pattern => pattern.category.toLowerCase() === cat
  )
}

/**
 * Get unique categories from all patterns
 * @returns {Array} Array of category names
 */
export function getPatternCategories() {
  const categories = new Set(
    Object.values(COMPONENT_PATTERNS).map(p => p.category)
  )
  return [...categories].sort()
}

/**
 * Map CSS selector to likely component type
 * @param {string} selector - CSS selector
 * @returns {string|null} Component ID or null if no match
 */
export function matchSelectorToComponent(selector) {
  const selectorLower = selector.toLowerCase()

  for (const [id, pattern] of Object.entries(COMPONENT_PATTERNS)) {
    for (const commonSelector of pattern.commonSelectors) {
      if (selectorLower.includes(commonSelector.toLowerCase())) {
        return id
      }
    }
  }

  return null
}
