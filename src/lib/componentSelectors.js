/**
 * Component selectors for quick-select dropdown in Component Scan tab.
 *
 * These are generic CSS selector patterns that work on most websites — they are
 * intentionally not Flowbite-specific. Each entry combines multiple discovery
 * strategies: semantic HTML, ARIA roles/labels, data attributes, and common
 * class-name conventions. This maximises the chance of matching a component
 * regardless of how the target site is built.
 *
 * When a user picks an item from the datalist in Step4Scope or the Component
 * Scan tab, the UI stores the raw `selector` string and passes it to the scan
 * worker as the `selector` field. The worker uses Playwright's `page.locator()`
 * or `page.$()` to target that element for axe-core testing.
 *
 * @example
 * // Used in Step4Scope.jsx datalist
 * <datalist id={`component-selectors-${index}`}>
 *   {COMPONENT_SELECTORS.map(({ label, selector }) => (
 *     <option key={label} value={`${label} — ${selector}`} />
 *   ))}
 * </datalist>
 *
 * @type {Array<{label: string, selector: string}>}
 */
export const COMPONENT_SELECTORS = [
  // Navigation
  { label: 'Navbar',         selector: 'nav, [role="navigation"], [aria-label*="nav" i], .navbar' },
  { label: 'Sidebar',        selector: 'aside, [aria-label="Sidebar"], [aria-label*="menu" i], .sidebar, .sidenav' },
  { label: 'Breadcrumb',     selector: 'nav[aria-label="Breadcrumb"], .breadcrumb, [aria-label*="breadcrumb" i]' },
  { label: 'Pagination',     selector: 'nav[aria-label="Pagination"], .pagination, [role="navigation"][aria-label*="page" i]' },

  // Dialogs & Overlays
  { label: 'Modal',          selector: '[role="dialog"], [role="alertdialog"], .modal, [data-modal], .dialog' },
  { label: 'Toast',          selector: '[role="alert"], [role="status"], .toast, .notification, [data-toast]' },
  { label: 'Dropdown',       selector: '[role="menu"], .dropdown, [data-dropdown], [aria-haspopup="menu"]' },

  // Interactive sections
  { label: 'Accordion',      selector: '[data-accordion], .accordion, .collapse, [role="region"][aria-labelledby]' },
  { label: 'Tabs',           selector: '[role="tablist"], .tabs, [data-tabs]' },
  { label: 'Carousel',       selector: '[data-carousel], .carousel, .slider, [role="region"][aria-label*="slide" i]' },

  // Content structures
  { label: 'Footer',         selector: 'footer, .footer, [role="contentinfo"], [data-footer]' },
  { label: 'Table',          selector: 'table, [role="grid"], [role="table"], .table' },
  { label: 'Form',           selector: 'form, [role="form"], .form' },

  // Search
  { label: 'Search',         selector: '[role="search"], form[aria-label*="search" i], .search, [data-search]' },

  // Media
  { label: 'Video player',   selector: 'video, [role="application"][aria-label*="video" i], .video-player, iframe[src*="youtube"], iframe[src*="vimeo"]' },

  // Accessibility
  { label: 'Skip link',      selector: 'a[href="#main"], a[href="#content"], .skip-link, [aria-label*="skip" i]' },

  // Banners
  { label: 'Cookie banner',  selector: '[aria-label*="cookie" i], [aria-label*="consent" i], .cookie-banner, [data-cookie]' },
]
