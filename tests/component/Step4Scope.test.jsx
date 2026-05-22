import { describe, it, expect, vi } from 'vitest'
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

      expect(screen.getByText('+ Add page/flow/component')).toBeInTheDocument()
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

      const selectorInput = screen.getByPlaceholderText(/\.button/i)
      fireEvent.change(selectorInput, { target: { value: '.new-button' } })

      expect(mockUpdateForm).toHaveBeenCalledWith({
        scopeItems: [
          { ...componentForm.scopeItems[0], componentIdentifier: '.new-button' },
        ],
      })
    })

    it('should auto-prefix https:// on blur', () => {
      render(<Step4Scope form={mockForm} updateForm={mockUpdateForm} />)

      const urlInput = screen.getByPlaceholderText(/example.com/i)
      fireEvent.change(urlInput, { target: { value: 'example.com' } })
      fireEvent.blur(urlInput)

      expect(mockUpdateForm).toHaveBeenCalledWith({
        scopeItems: [
          { ...mockForm.scopeItems[0], url: 'https://example.com' },
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

      const addButton = screen.getByText('+ Add page/flow/component')
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
      render(<Step4Scope form={mockForm} updateForm={mockUpdateForm} />)

      const removeButton = screen.getByRole('button', { name: /✕/i })
      fireEvent.click(removeButton)

      expect(mockUpdateForm).toHaveBeenCalledWith({
        scopeItems: [],
      })
    })

    it('should not remove last item', () => {
      const singleItemForm = {
        ...mockForm,
        scopeItems: [{ type: 'Page', name: 'Only', url: 'https://only.com', componentIdentifier: '' }],
      }

      render(<Step4Scope form={singleItemForm} updateForm={mockUpdateForm} />)

      const removeButton = screen.getByRole('button', { name: /✕/i })
      expect(removeButton).toBeDisabled()
    })
  })

  describe('Validation', () => {
    it('should show validation error when no valid scope items', () => {
      const invalidForm = {
        ...mockForm,
        scopeItems: [{ type: 'Page', name: '', url: '', componentIdentifier: '' }],
      }

      render(<Step4Scope form={invalidForm} updateForm={mockUpdateForm} showValidationErrors />)

      expect(screen.getByText(/At least one valid scope item/i)).toBeInTheDocument()
    })

    it('should not show validation error when has valid scope items', () => {
      render(<Step4Scope form={mockForm} updateForm={mockUpdateForm} showValidationErrors />)

      expect(screen.queryByText(/At least one valid scope item/i)).not.toBeInTheDocument()
    })

    it('should show warning (not error) when validation not triggered', () => {
      const invalidForm = {
        ...mockForm,
        scopeItems: [{ type: 'Page', name: '', url: '', componentIdentifier: '' }],
      }

      render(<Step4Scope form={invalidForm} updateForm={mockUpdateForm} showValidationErrors={false} />)

      // Warning should be present but styled differently
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

      // Should show 2 pages
      const pageCountElement = screen.getAllByRole('status').find(el =>
        el.textContent === '2'
      )
      expect(pageCountElement).toBeInTheDocument()
    })
  })
})
