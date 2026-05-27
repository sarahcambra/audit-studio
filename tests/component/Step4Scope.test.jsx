import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Step4Scope from '../../src/components/wizard/Step4Scope'

const mockForm = {
  scopeItems: [
    { type: 'Page', name: 'Homepage', url: 'https://example.com', componentIdentifier: '' },
  ],
  wcagVersion: 'WCAG 2.2',
  conformanceLevel: 'AA',
  preTestAnswers: {},
}

const mockUpdateForm = vi.fn()

// Reset mock between tests so call history doesn't bleed across assertions
beforeEach(() => {
  mockUpdateForm.mockClear()
})

describe('Step4Scope', () => {
  describe('Rendering', () => {
    it('should render the component title', () => {
      render(<Step4Scope form={mockForm} updateForm={mockUpdateForm} />)

      expect(screen.getByText('Define Audit Scope')).toBeInTheDocument()
    })

    it('should render stats bar with counts', () => {
      render(<Step4Scope form={mockForm} updateForm={mockUpdateForm} />)

      expect(screen.getByText('Total Items')).toBeInTheDocument()
      expect(screen.getByText('Success Criteria')).toBeInTheDocument()
      expect(screen.getByText('Pages')).toBeInTheDocument()
      expect(screen.getByText('Flows / Components')).toBeInTheDocument()
    })

    it('should render table headers', () => {
      render(<Step4Scope form={mockForm} updateForm={mockUpdateForm} />)

      expect(screen.getByText('Type')).toBeInTheDocument()
      expect(screen.getByText('Name')).toBeInTheDocument()
      expect(screen.getByText('URL / Selector')).toBeInTheDocument()
      expect(screen.getByText('Action')).toBeInTheDocument()
    })

    it('should render existing scope items', () => {
      render(<Step4Scope form={mockForm} updateForm={mockUpdateForm} />)

      expect(screen.getByDisplayValue('Homepage')).toBeInTheDocument()
      expect(screen.getByDisplayValue('https://example.com')).toBeInTheDocument()
    })

    it('should render add button', () => {
      render(<Step4Scope form={mockForm} updateForm={mockUpdateForm} />)

      // Component renders spaces around slashes: "+ Add page / flow / component"
      expect(screen.getByText('+ Add page / flow / component')).toBeInTheDocument()
    })
  })

  describe('Type selector', () => {
    it('should have Page, User Flow, and Component options', () => {
      render(<Step4Scope form={mockForm} updateForm={mockUpdateForm} />)

      const typeSelect = screen.getByRole('combobox')
      expect(typeSelect).toBeInTheDocument()

      expect(screen.getByRole('option', { name: 'Page' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: 'User Flow' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: 'Component' })).toBeInTheDocument()
    })

    it('should update form when type changes', () => {
      render(<Step4Scope form={mockForm} updateForm={mockUpdateForm} />)

      const typeSelect = screen.getByRole('combobox')
      fireEvent.change(typeSelect, { target: { value: 'Component' } })

      expect(mockUpdateForm).toHaveBeenCalledWith({
        scopeItems: [
          { type: 'Component', name: 'Homepage', url: 'https://example.com', componentIdentifier: '' },
        ],
      })
    })
  })

  describe('Name input', () => {
    it('should update form when name changes', () => {
      render(<Step4Scope form={mockForm} updateForm={mockUpdateForm} />)

      const nameInput = screen.getByPlaceholderText(/Homepage/i)
      fireEvent.change(nameInput, { target: { value: 'About Page' } })

      expect(mockUpdateForm).toHaveBeenCalledWith({
        scopeItems: [
          { ...mockForm.scopeItems[0], name: 'About Page' },
        ],
      })
    })

    it('should show appropriate placeholder based on type', () => {
      const flowForm = {
        ...mockForm,
        scopeItems: [{ type: 'User Flow', name: '', url: '', componentIdentifier: '' }],
      }

      render(<Step4Scope form={flowForm} updateForm={mockUpdateForm} />)

      expect(screen.getByPlaceholderText(/registration flow/i)).toBeInTheDocument()
    })
  })

  describe('URL/Selector input', () => {
    it('should update url field for Page type', () => {
      render(<Step4Scope form={mockForm} updateForm={mockUpdateForm} />)

      const urlInput = screen.getByPlaceholderText(/example.com/i)
      fireEvent.change(urlInput, { target: { value: 'https://new-url.com' } })

      expect(mockUpdateForm).toHaveBeenCalledWith({
        scopeItems: [
          { ...mockForm.scopeItems[0], url: 'https://new-url.com' },
        ],
      })
    })

    it('should update componentIdentifier field for Component type', () => {
      const componentForm = {
        ...mockForm,
        scopeItems: [{ type: 'Component', name: 'Button', url: '', componentIdentifier: '.btn' }],
      }

      render(<Step4Scope form={componentForm} updateForm={mockUpdateForm} />)

      // Component type shows "Type or pick a component…" as placeholder
      const selectorInput = screen.getByPlaceholderText(/Type or pick a component/i)
      fireEvent.change(selectorInput, { target: { value: '.new-button' } })

      expect(mockUpdateForm).toHaveBeenCalledWith({
        scopeItems: [
          { ...componentForm.scopeItems[0], componentIdentifier: '.new-button' },
        ],
      })
    })

    it('should auto-prefix https:// on blur', () => {
      // Start with a URL that already lacks the protocol so handleUrlBlur
      // can detect it and prepend https://. Firing change + blur on a static
      // mock prop would only read the original form value on blur.
      const noPrefixForm = {
        ...mockForm,
        scopeItems: [{ type: 'Page', name: 'Test', url: 'example.com', componentIdentifier: '' }],
      }
      render(<Step4Scope form={noPrefixForm} updateForm={mockUpdateForm} />)

      const urlInput = screen.getByPlaceholderText(/example.com/i)
      fireEvent.blur(urlInput)

      expect(mockUpdateForm).toHaveBeenCalledWith({
        scopeItems: [
          { ...noPrefixForm.scopeItems[0], url: 'https://example.com' },
        ],
      })
    })

    it('should not modify URL that already has https://', () => {
      const httpsForm = {
        ...mockForm,
        scopeItems: [{ type: 'Page', name: 'Test', url: 'https://already-secure.com', componentIdentifier: '' }],
      }

      render(<Step4Scope form={httpsForm} updateForm={mockUpdateForm} />)

      const urlInput = screen.getByDisplayValue('https://already-secure.com')
      fireEvent.blur(urlInput)

      // Should not call updateForm since URL wasn't changed
      expect(mockUpdateForm).not.toHaveBeenCalled()
    })
  })

  describe('Add item', () => {
    it('should add new scope item when clicking add button', () => {
      render(<Step4Scope form={mockForm} updateForm={mockUpdateForm} />)

      // Component renders spaces around slashes: "+ Add page / flow / component"
      const addButton = screen.getByText('+ Add page / flow / component')
      fireEvent.click(addButton)

      expect(mockUpdateForm).toHaveBeenCalledWith({
        scopeItems: [
          ...mockForm.scopeItems,
          { type: 'Page', name: '', url: '', componentIdentifier: '' },
        ],
      })
    })
  })

  describe('Remove item', () => {
    it('should remove item when clicking remove button', () => {
      // Need at least 2 items — the guard `if (form.scopeItems.length > 1)` prevents
      // removal of the last item, and `dismissible` is false when only one item exists.
      const twoItemForm = {
        ...mockForm,
        scopeItems: [
          { type: 'Page', name: 'Homepage', url: 'https://example.com', componentIdentifier: '' },
          { type: 'Page', name: 'About', url: 'https://example.com/about', componentIdentifier: '' },
        ],
      }

      render(<Step4Scope form={twoItemForm} updateForm={mockUpdateForm} />)

      // Badge renders dismiss button with aria-label "Remove <children>" → "Remove Remove"
      const removeButtons = screen.getAllByRole('button', { name: /Remove/i })
      fireEvent.click(removeButtons[0])

      expect(mockUpdateForm).toHaveBeenCalledWith({
        scopeItems: [twoItemForm.scopeItems[1]],
      })
    })

    it('should not show remove button for last item', () => {
      // With only one item, dismissible=false so no dismiss <button> is rendered at all
      render(<Step4Scope form={mockForm} updateForm={mockUpdateForm} />)

      expect(screen.queryByRole('button', { name: /Remove/i })).not.toBeInTheDocument()
    })
  })

  describe('Validation', () => {
    it('should show validation error when no valid scope items', () => {
      const invalidForm = {
        ...mockForm,
        scopeItems: [{ type: 'Page', name: '', url: '', componentIdentifier: '' }],
      }

      render(<Step4Scope form={invalidForm} updateForm={mockUpdateForm} showValidationErrors />)

      // Actual text: "✕ At least one scope item with name and URL/selector is required to proceed."
      expect(screen.getByText(/At least one scope item/i)).toBeInTheDocument()
    })

    it('should not show validation error when has valid scope items', () => {
      render(<Step4Scope form={mockForm} updateForm={mockUpdateForm} showValidationErrors />)

      expect(screen.queryByText(/At least one scope item/i)).not.toBeInTheDocument()
    })

    it('should show warning (not error) when validation not triggered', () => {
      const invalidForm = {
        ...mockForm,
        scopeItems: [{ type: 'Page', name: '', url: '', componentIdentifier: '' }],
      }

      render(<Step4Scope form={invalidForm} updateForm={mockUpdateForm} showValidationErrors={false} />)

      // Warning text: "⚠ At least one scope item is required with a name and URL/selector to proceed."
      expect(screen.getByText(/⚠ At least one scope item/i)).toBeInTheDocument()
    })
  })

  describe('Stats calculation', () => {
    it('should show correct page count', () => {
      const multiForm = {
        ...mockForm,
        scopeItems: [
          { type: 'Page', name: '1', url: 'a.com', componentIdentifier: '' },
          { type: 'Page', name: '2', url: 'b.com', componentIdentifier: '' },
          { type: 'Component', name: 'Btn', url: '', componentIdentifier: '.btn' },
        ],
      }

      render(<Step4Scope form={multiForm} updateForm={mockUpdateForm} />)

      // Find the stat box labelled "Pages" and verify its count is 2
      const pagesLabel = screen.getByText('Pages')
      const pagesBox = pagesLabel.closest('div')
      expect(pagesBox).toHaveTextContent('2')
    })
  })
})
