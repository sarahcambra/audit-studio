import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ScanResults from '../../src/components/scan/ScanResults'

const mockJob = {
  id: 'test-job-1',
  scanName: 'Homepage Scan',
  scanType: 'page',
  status: 'complete',
  completedAt: '2026-05-21T12:00:00.000Z',
  results: {
    groupedViolations: [
      {
        groupId: 'color-contrast-main',
        ruleId: 'color-contrast',
        landmark: 'main',
        issueType: 'failure',
        impact: 'serious',
        isWcagFailure: true,
        scIds: ['1.4.3'],
        nodeCount: 2,
        nodes: [
          { target: ['h1'], html: '<h1>Low contrast</h1>', message: 'Element has insufficient color contrast', impact: 'serious' },
        ],
        enrichment: {
          auditorTitle: 'Color contrast failure',
          auditorNotes: 'Check all headings',
          clientFix: 'Increase contrast ratio to 4.5:1',
          badExample: '<h1 style="color: #999">Text</h1>',
          goodExample: '<h1 style="color: #333">Text</h1>',
        },
        wcagTechniques: [{ id: 'G18', url: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G18' }],
        affectedUsers: ['Low vision users', 'Color blind users'],
        fixDifficulty: 'Easy',
        screenshot: null,
      },
    ],
    passes: [],
    inapplicable: [],
  },
}

const mockOnClose = vi.fn()

describe('ScanResults', () => {
  describe('Rendering', () => {
    it('should show "No results yet" when job has no results', () => {
      const emptyJob = { ...mockJob, status: 'complete', results: null }

      render(<ScanResults job={emptyJob} onClose={mockOnClose} />)

      expect(screen.getByText('No results yet')).toBeInTheDocument()
    })

    it('should show scan name and timestamp', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      expect(screen.getByText('Homepage Scan')).toBeInTheDocument()
    })

    it('should show summary bar with violation counts', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      expect(screen.getByText('Violations')).toBeInTheDocument()
      expect(screen.getByText('Needs review')).toBeInTheDocument()
      expect(screen.getByText('Passes')).toBeInTheDocument()
      expect(screen.getByText('N/A')).toBeInTheDocument()
    })

    it('should show close button', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
    })
  })

  describe('Violation cards', () => {
    it('should render violation card with auditor title', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      expect(screen.getByText('Color contrast failure')).toBeInTheDocument()
    })

    it('should show impact badge', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      expect(screen.getByText('serious')).toBeInTheDocument()
    })

    it('should show WCAG failure badge for WCAG violations', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      expect(screen.getByText('WCAG failure')).toBeInTheDocument()
    })

    it('should show issue type badge', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      expect(screen.getByText('Definite failure')).toBeInTheDocument()
    })

    it('should show SC ID pills', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      expect(screen.getByText('SC 1.4.3')).toBeInTheDocument()
    })

    it('should show element count', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      expect(screen.getByText('2 elements')).toBeInTheDocument()
    })

    it('should show landmark', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      expect(screen.getByText('Main')).toBeInTheDocument()
    })

    it('should show affected users', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      expect(screen.getByText('Low vision users')).toBeInTheDocument()
      expect(screen.getByText('Color blind users')).toBeInTheDocument()
    })

    it('should show fix difficulty badge', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      expect(screen.getByText('Easy fix')).toBeInTheDocument()
    })
  })

  describe('Decision buttons', () => {
    it('should render all four decision buttons', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      expect(screen.getByText('Confirmed failure')).toBeInTheDocument()
      expect(screen.getByText('Not a failure')).toBeInTheDocument()
      expect(screen.getByText('Needs manual check')).toBeInTheDocument()
      expect(screen.getByText('Defer')).toBeInTheDocument()
    })

    it('should call handleDecision when clicking Confirmed failure', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      const confirmButton = screen.getByText('Confirmed failure')
      fireEvent.click(confirmButton)

      // Decision state should update (tested via button state change)
      expect(confirmButton).toHaveAttribute('aria-pressed', 'true')
    })
  })

  describe('Expandable detail', () => {
    it('should show expand button', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      const expandButton = screen.getByRole('button', { name: /▶/i })
      expect(expandButton).toBeInTheDocument()
    })

    it('should show auditor notes when expanded', async () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      const expandButton = screen.getByRole('button', { name: /▶/i })
      fireEvent.click(expandButton)

      expect(await screen.findByText('Auditor Notes')).toBeInTheDocument()
      expect(screen.getByText('Check all headings')).toBeInTheDocument()
    })

    it('should show reference links when expanded', async () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      const expandButton = screen.getByRole('button', { name: /▶/i })
      fireEvent.click(expandButton)

      expect(await screen.findByText('References')).toBeInTheDocument()
      expect(screen.getByText('G18')).toBeInTheDocument()
    })

    it('should show code examples when expanded', async () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      const expandButton = screen.getByRole('button', { name: /▶/i })
      fireEvent.click(expandButton)

      expect(await screen.findByText('Bad Example')).toBeInTheDocument()
      expect(await screen.findByText('Good Example')).toBeInTheDocument()
    })

    it('should show how to fix when expanded', async () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      const expandButton = screen.getByRole('button', { name: /▶/i })
      fireEvent.click(expandButton)

      expect(await screen.findByText('How to Fix')).toBeInTheDocument()
      expect(screen.getByText('Increase contrast ratio to 4.5:1')).toBeInTheDocument()
    })

    it('should show affected elements when expanded', async () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      const expandButton = screen.getByRole('button', { name: /▶/i })
      fireEvent.click(expandButton)

      expect(await screen.findByText('Affected Elements (2)')).toBeInTheDocument()
      expect(screen.getByText(/Target:/)).toBeInTheDocument()
    })

    it('should show report notes textarea', async () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      const expandButton = screen.getByRole('button', { name: /▶/i })
      fireEvent.click(expandButton)

      expect(await screen.findByLabelText(/Report notes/i)).toBeInTheDocument()
    })

    it('should show internal notes textarea', async () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      const expandButton = screen.getByRole('button', { name: /▶/i })
      fireEvent.click(expandButton)

      expect(await screen.findByLabelText(/Internal notes/i)).toBeInTheDocument()
    })
  })

  describe('Filters', () => {
    it('should have in-scope only toggle', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      expect(screen.getByText('In-scope only')).toBeInTheDocument()
    })

    it('should have severity filter dropdown', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      expect(screen.getByLabelText('Severity')).toBeInTheDocument()
    })

    it('should filter by severity', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      const severitySelect = screen.getByLabelText('Severity')
      fireEvent.change(severitySelect, { target: { value: 'critical' } })

      // Filter should apply (violations would be filtered)
      expect(severitySelect.value).toBe('critical')
    })
  })

  describe('Flow scan results', () => {
    it('should handle flow scan type with steps', () => {
      const flowJob = {
        ...mockJob,
        scanType: 'flow',
        results: {
          groupedSteps: [
            {
              stepName: 'Open modal',
              groupedViolations: mockJob.results.groupedViolations,
            },
          ],
        },
      }

      render(<ScanResults job={flowJob} onClose={mockOnClose} />)

      expect(screen.getByText('Open modal')).toBeInTheDocument()
    })
  })

  describe('Empty states', () => {
    it('should show "No in-scope violations found" when filtered', () => {
      const emptyResultsJob = {
        ...mockJob,
        results: {
          groupedViolations: [],
          passes: [],
          inapplicable: [],
        },
      }

      render(<ScanResults job={emptyResultsJob} onClose={mockOnClose} />)

      expect(screen.getByText('No in-scope violations found')).toBeInTheDocument()
    })
  })

  describe('Screenshot', () => {
    it('should render screenshot when available', () => {
      const jobWithScreenshot = {
        ...mockJob,
        results: {
          ...mockJob.results,
          screenshot: 'base64-encoded-screenshot',
        },
      }

      render(<ScanResults job={jobWithScreenshot} onClose={mockOnClose} />)

      const screenshot = screen.getByAltText(/Scan result with violations/i)
      expect(screenshot).toBeInTheDocument()
      expect(screenshot).toHaveAttribute('src', 'data:image/png;base64,base64-encoded-screenshot')
    })

    it('should not render screenshot section when null', () => {
      render(<ScanResults job={mockJob} onClose={mockOnClose} />)

      expect(screen.queryByAltText(/Scan result with violations/i)).not.toBeInTheDocument()
    })
  })
})
