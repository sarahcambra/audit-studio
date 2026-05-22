import { describe, it, expect } from 'vitest'
import { COMPONENT_SELECTORS } from '../../src/lib/componentSelectors'

describe('COMPONENT_SELECTORS', () => {
  describe('Structure', () => {
    it('should be an array', () => {
      expect(COMPONENT_SELECTORS).toBeInstanceOf(Array)
    })

    it('should have at least 17 selectors', () => {
      expect(COMPONENT_SELECTORS.length).toBeGreaterThanOrEqual(17)
    })

    it('should have label and selector properties', () => {
      COMPONENT_SELECTORS.forEach(selector => {
        expect(selector).toHaveProperty('label')
        expect(selector).toHaveProperty('selector')
        expect(typeof selector.label).toBe('string')
        expect(typeof selector.selector).toBe('string')
      })
    })

    it('should have non-empty labels', () => {
      COMPONENT_SELECTORS.forEach(selector => {
        expect(selector.label.trim()).not.toBe('')
      })
    })

    it('should have non-empty selectors', () => {
      COMPONENT_SELECTORS.forEach(selector => {
        expect(selector.selector.trim()).not.toBe('')
      })
    })
  })

  describe('Selector coverage', () => {
    const expectedComponents = [
      'Navbar',
      'Modal',
      'Sidebar',
      'Footer',
      'Table',
      'Form',
      'Video',
    ]

    expectedComponents.forEach(component => {
      it(`should have a selector for ${component}`, () => {
        const found = COMPONENT_SELECTORS.some(s =>
          s.label.toLowerCase().includes(component.toLowerCase())
        )
        expect(found).toBe(true)
      })
    })
  })

  describe('Selector validity', () => {
    it('should have valid CSS selector syntax', () => {
      // Basic validation - selectors should not have obvious syntax errors
      COMPONENT_SELECTORS.forEach(({ selector }) => {
        // Should not be empty
        expect(selector.trim()).not.toBe('')

        // Should not have unbalanced brackets
        const openBrackets = (selector.match(/\[/g) || []).length
        const closeBrackets = (selector.match(/\]/g) || []).length
        expect(openBrackets).toBe(closeBrackets)

        // Should not have unbalanced parentheses
        const openParens = (selector.match(/\(/g) || []).length
        const closeParens = (selector.match(/\)/g) || []).length
        expect(openParens).toBe(closeParens)
      })
    })

    it('should handle multiple selector strategies', () => {
      // Check for semantic HTML selectors
      const hasSemanticSelectors = COMPONENT_SELECTORS.some(s =>
        ['nav', 'footer', 'form', 'table', 'video', 'aside'].some(tag =>
          s.selector.includes(tag)
        )
      )
      expect(hasSemanticSelectors).toBe(true)

      // Check for ARIA selectors
      const hasAriaSelectors = COMPONENT_SELECTORS.some(s =>
        s.selector.includes('role=') || s.selector.includes('aria-')
      )
      expect(hasAriaSelectors).toBe(true)
    })
  })

  describe('Specific selector tests', () => {
    it('Navbar should match semantic and ARIA patterns', () => {
      const navbar = COMPONENT_SELECTORS.find(s => s.label === 'Navbar')
      expect(navbar).toBeDefined()
      expect(navbar.selector).toMatch(/nav/)
    })

    it('Modal should match dialog role patterns', () => {
      const modal = COMPONENT_SELECTORS.find(s => s.label === 'Modal')
      expect(modal).toBeDefined()
      expect(modal.selector).toMatch(/dialog|alertdialog/)
    })

    it('Footer should match semantic footer', () => {
      const footer = COMPONENT_SELECTORS.find(s => s.label === 'Footer')
      expect(footer).toBeDefined()
      expect(footer.selector).toMatch(/footer/)
    })

    it('Table should match table element', () => {
      const table = COMPONENT_SELECTORS.find(s => s.label === 'Table')
      expect(table).toBeDefined()
      expect(table.selector).toMatch(/table/)
    })
  })

  describe('No duplicates', () => {
    it('should not have duplicate labels', () => {
      const labels = COMPONENT_SELECTORS.map(s => s.label.toLowerCase())
      const uniqueLabels = new Set(labels)
      expect(labels.length).toBe(uniqueLabels.size)
    })

    it('should not have duplicate selectors', () => {
      const selectors = COMPONENT_SELECTORS.map(s => s.selector)
      const uniqueSelectors = new Set(selectors)
      expect(selectors.length).toBe(uniqueSelectors.size)
    })
  })

  describe('Maintainability', () => {
    it('labels should be human-readable', () => {
      COMPONENT_SELECTORS.forEach(({ label }) => {
        // Should not contain special characters (except spaces)
        expect(label).toMatch(/^[a-zA-Z\s]+$/)

        // Should be title case or similar
        expect(label[0]).toBe(label[0].toUpperCase())
      })
    })
  })
})
