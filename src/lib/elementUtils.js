/**
 * Element utilities for accessibility auditing
 * Extracts user-friendly information from technical element data
 */

/**
 * Parse HTML snippet to extract element info
 * @param {string} html - The HTML snippet
 * @returns {Object} { tag, text, classes, id }
 */
export function parseElementInfo(html) {
  if (!html || typeof html !== 'string') {
    return { tag: 'element', text: '', classes: [], id: null }
  }

  // Extract tag name
  const tagMatch = html.match(/<([a-zA-Z0-9]+)[\s>]/)
  const tag = tagMatch ? tagMatch[1].toLowerCase() : 'element'

  // Extract id
  const idMatch = html.match(/id=["']([^"']+)["']/)
  const id = idMatch ? idMatch[1] : null

  // Extract classes
  const classMatch = html.match(/class=["']([^"']+)["']/)
  const classes = classMatch ? classMatch[1].split(/\s+/).filter(Boolean) : []

  // Extract text content (remove tags, decode entities)
  const text = html
    .replace(/<[^>]+>/g, ' ') // Remove tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim()

  return { tag, text, classes, id }
}

/**
 * Build a friendly description of an element
 * @param {string} html - The HTML snippet
 * @param {Array|string} target - CSS selector target (array of parts or string)
 * @returns {string} Human-friendly description
 */
export function buildFriendlyDescription(html, target) {
  const { tag, text } = parseElementInfo(html)
  const textPreview = text.slice(0, 60) || '(no visible text)'
  const locationHint = getLocationHint(target)

  const descriptions = {
    button: () => `Button labeled "${textPreview}"`,
    a: () => `Link reading "${textPreview}"`,
    input: () => {
      const inputType = html.match(/type=["']([^"']+)["']/)?.[1] || 'text'
      const placeholder = html.match(/placeholder=["']([^"']+)["']/)?.[1]
      if (placeholder) return `${inputType} input with placeholder "${placeholder}"`
      if (textPreview && textPreview !== '(no visible text)') {
        return `${inputType} input with value "${textPreview}"`
      }
      return `${inputType} input field`
    },
    img: () => {
      const alt = html.match(/alt=["']([^"']*)["']/)?.[1]
      return alt !== undefined
        ? `Image with alt text "${alt || '(empty)'}"`
        : 'Image (missing alt attribute)'
    },
    li: () => `List item: "${textPreview}"`,
    h1: () => `Main heading: "${textPreview}"`,
    h2: () => `Section heading: "${textPreview}"`,
    h3: () => `Subsection heading: "${textPreview}"`,
    h4: () => `Subsection heading: "${textPreview}"`,
    h5: () => `Small heading: "${textPreview}"`,
    h6: () => `Small heading: "${textPreview}"`,
    label: () => `Form label: "${textPreview}"`,
    select: () => `Dropdown menu${textPreview !== '(no visible text)' ? ` showing "${textPreview}"` : ''}`,
    textarea: () => `Text area${textPreview !== '(no visible text)' ? ` containing "${textPreview}"` : ''}`,
    table: () => `Data table${textPreview !== '(no visible text)' ? `: "${textPreview}"` : ''}`,
    nav: () => `Navigation section`,
    header: () => `Page header`,
    footer: () => `Page footer`,
    main: () => `Main content area`,
    aside: () => `Sidebar content`,
    form: () => `Form${textPreview !== '(no visible text)' ? `: "${textPreview}"` : ''}`,
    div: () => textPreview !== '(no visible text)' ? `Content section: "${textPreview}"` : 'Content container',
    span: () => textPreview !== '(no visible text)' ? `Text span: "${textPreview}"` : 'Inline text element',
    p: () => `Paragraph${textPreview !== '(no visible text)' ? `: "${textPreview}"` : ''}`,
    title: () => `Page title: "${textPreview}"`,
  }

  const description = descriptions[tag]?.() || `<${tag}> element${textPreview !== '(no visible text)' ? `: "${textPreview}"` : ''}`

  return locationHint ? `${description} ${locationHint}` : description
}

/**
 * Get location hint from CSS selector target
 * @param {Array|string} target - CSS selector parts
 * @returns {string|null} Location context
 */
function getLocationHint(target) {
  if (!target) return null

  const selector = Array.isArray(target) ? target.join(' ') : target
  const lowerSelector = selector.toLowerCase()

  // Navigation patterns
  if (lowerSelector.includes('nav') || lowerSelector.includes('navigation') || lowerSelector.includes('menu')) {
    return 'in navigation'
  }

  // Header patterns
  if (lowerSelector.includes('header') || lowerSelector.includes('banner')) {
    return 'in page header'
  }

  // Footer patterns
  if (lowerSelector.includes('footer')) {
    return 'in page footer'
  }

  // Main content
  if (lowerSelector.includes('main') || lowerSelector.includes('[role="main"]')) {
    return 'in main content'
  }

  // Sidebar
  if (lowerSelector.includes('aside') || lowerSelector.includes('sidebar')) {
    return 'in sidebar'
  }

  // Form patterns
  if (lowerSelector.includes('form')) {
    return 'in form'
  }

  // Modal/dialog
  if (lowerSelector.includes('modal') || lowerSelector.includes('dialog') || lowerSelector.includes('popup')) {
    return 'in modal dialog'
  }

  // List patterns
  if (lowerSelector.includes('ul') || lowerSelector.includes('ol') || lowerSelector.includes('list')) {
    const match = lowerSelector.match(/:(?:nth-child|nth-of-type)\((\d+)\)/)
    if (match) {
      const position = parseInt(match[1])
      const suffix = position === 1 ? 'st' : position === 2 ? 'nd' : position === 3 ? 'rd' : 'th'
      return `, ${position}${suffix} item`
    }
    return 'in list'
  }

  // Table patterns
  if (lowerSelector.includes('table') || lowerSelector.includes('tr') || lowerSelector.includes('td')) {
    return 'in table'
  }

  return null
}

/**
 * Get element category/role for grouping
 * @param {string} tag - HTML tag name
 * @returns {string} Category
 */
export function getElementCategory(tag) {
  const categories = {
    button: 'Interactive',
    a: 'Interactive',
    input: 'Form',
    select: 'Form',
    textarea: 'Form',
    label: 'Form',
    form: 'Form',
    img: 'Image',
    h1: 'Heading',
    h2: 'Heading',
    h3: 'Heading',
    h4: 'Heading',
    h5: 'Heading',
    h6: 'Heading',
    nav: 'Landmark',
    main: 'Landmark',
    header: 'Landmark',
    footer: 'Landmark',
    aside: 'Landmark',
    table: 'Table',
    ul: 'List',
    ol: 'List',
    li: 'List',
  }

  return categories[tag] || 'Content'
}

/**
 * Format a CSS selector for display
 * @param {Array|string} target - CSS selector
 * @returns {string} Formatted selector
 */
export function formatSelector(target) {
  if (!target) return ''
  if (Array.isArray(target)) {
    return target.join(' > ')
  }
  return target
}

/**
 * Truncate text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export function truncateText(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text
  return text.slice(0, maxLength - 3) + '...'
}

/**
 * Extract affected users info from impact and tags
 * @param {string} impact - Axe impact level
 * @param {Array} tags - Axe tags
 * @returns {Array} Array of affected user descriptions
 */
export function getAffectedUsers(impact, tags = []) {
  const users = []

  // Based on impact
  if (impact === 'critical' || impact === 'serious') {
    users.push('Screen reader users')
    users.push('Keyboard users')
  }
  if (impact === 'serious') {
    users.push('Low vision users')
    users.push('Motor impaired users')
  }
  if (impact === 'moderate') {
    users.push('Users with cognitive disabilities')
  }

  // Based on tags
  if (tags.includes('wcag2a') || tags.includes('wcag2aa')) {
    if (!users.includes('Screen reader users')) users.push('Screen reader users')
  }
  if (tags.includes('cat.color-contrast')) {
    users.push('Color blind users')
    users.push('Users in bright light')
  }
  if (tags.includes('cat.keyboard')) {
    users.push('Keyboard-only users')
  }
  if (tags.includes('cat.forms')) {
    users.push('Form users')
  }

  return [...new Set(users)] // Remove duplicates
}

/**
 * Build context info for custom checks
 * @param {Object} customCheck - Custom check finding
 * @returns {Object} Contextual information
 */
export function buildCustomCheckContext(customCheck) {
  const { checkId, data, message } = customCheck || {}

  const contexts = {
    'custom-orientation-rotate-message': () => ({
      elementType: 'Device orientation message',
      userSees: data?.matchedText || 'A message asking to rotate device',
      location: 'Displayed when device is in wrong orientation',
      impact: 'Prevents users from accessing content in their preferred orientation',
    }),
    'custom-orientation-locked': () => ({
      elementType: 'Content container',
      userSees: 'Hidden or rotated content',
      location: 'Main content area',
      impact: 'Content is inaccessible in certain device orientations',
    }),
    'custom-skip-link-missing': () => ({
      elementType: 'Navigation bypass',
      userSees: 'No visible skip option',
      location: 'Beginning of page',
      impact: 'Keyboard users must tab through all navigation on every page',
    }),
    'custom-skip-link-no-target': () => ({
      elementType: 'Skip link',
      userSees: `Link reading "${data?.href || 'Skip to main content'}"`,
      location: 'Top of page',
      impact: 'Skip link does nothing when activated',
    }),
    'custom-skip-link-target-obscured': () => ({
      elementType: 'Skip link target',
      userSees: 'Content hidden behind sticky header',
      location: 'After skip link activation',
      impact: 'Keyboard users cannot see where they navigated to',
    }),
    'custom-page-title': () => ({
      elementType: 'Page title',
      userSees: `Tab/Window title: "${data?.title || 'Untitled'}"`,
      location: 'Browser tab and window',
      impact: 'Screen reader users cannot identify the page',
    }),
    'custom-heading-skip': () => ({
      elementType: 'Heading structure',
      userSees: `Skipped from h${data?.skips?.[0]?.from} to h${data?.skips?.[0]?.to}`,
      location: 'Document outline',
      impact: 'Screen reader users cannot navigate content efficiently',
    }),
    'custom-pseudo-list': () => ({
      elementType: 'Fake list item',
      userSees: `Text with bullet: "${data?.elements?.[0]?.text || 'List item'}"`,
      location: 'Content area',
      impact: 'Screen readers do not announce this as a list',
    }),
    'custom-duplicate-landmark': () => ({
      elementType: 'Landmark region',
      userSees: `Multiple ${data?.duplicates?.[0]?.role} regions without labels`,
      location: 'Page structure',
      impact: 'Screen reader users cannot distinguish between regions',
    }),
    'custom-reflow-content-lost': () => ({
      elementType: 'Content at small viewport',
      userSees: `Hidden content: "${data?.description || 'Text that disappears at 320px'}"`,
      location: data?.selector || 'Content area',
      impact: 'Mobile users cannot access all content',
    }),
    'custom-reflow-horizontal-scroll': () => ({
      elementType: 'Page content',
      userSees: 'Horizontal scrollbar at 320px width',
      location: 'Full page',
      impact: 'Mobile users must scroll sideways to read content',
    }),
    'custom-language-missing': () => ({
      elementType: 'Page language',
      userSees: 'Content with no language declared',
      location: 'Entire document',
      impact: 'Screen readers use wrong pronunciation',
    }),
    'custom-language-invalid': () => ({
      elementType: 'Page language',
      userSees: `Language code: "${data?.lang || 'unknown'}"`,
      location: 'HTML element',
      impact: 'Screen readers may mispronounce content',
    }),
  }

  return contexts[checkId]?.() || {
    elementType: 'Page element',
    userSees: message || 'An accessibility issue',
    location: data?.selector || 'Unknown location',
    impact: 'May affect accessibility',
  }
}
