/**
 * Component selectors for quick-select dropdown in Component Scan tab.
 * These are generic patterns that work on most websites — not Flowbite-specific.
 * Each selector uses multiple strategies: semantic HTML + ARIA + data attributes + common class names.
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
