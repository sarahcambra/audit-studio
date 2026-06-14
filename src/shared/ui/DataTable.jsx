import {
  Checkbox,
  Label,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState, useCallback } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Column configuration for DataTable
 * @typedef {Object} ColumnConfig
 * @property {string} key - Unique key for the column
 * @property {string} header - Header text
 * @property {string} [width] - Width class (e.g., 'min-w-56', 'w-4')
 * @property {string} [scope='col'] - Scope attribute for th
 * @property {Function} [render] - Custom render function: (row, index) => ReactNode
 * @property {Function} [component] - Component to render with row data: (props) => ReactNode
 * @property {string} [cellClassName] - Additional classes for table cells
 * @property {boolean} [sortable] - Whether column is sortable
 * @property {string} [sortKey] - Key to use for sorting (defaults to column key)
 */

/**
 * DataTable - Reusable table component with selectable and expandable rows
 *
 * @example
 * <DataTable
 *   columns={[
 *     { key: 'name', header: 'Audit', render: (row) => <span>{row.name}</span> },
 *     { key: 'status', header: 'Status', component: StatusBadge },
 *   ]}
 *   data={audits}
 *   selectable
 *   expandable
 *   renderExpand={(row) => <ExpandedContent row={row} />}
 *   onRowClick={(row) => navigate(`/audits/${row.id}`)}
 *   onSelectionChange={(selectedIds) => console.log(selectedIds)}
 * />
 */
export function DataTable({
  columns = [],
  data = [],
  selectable = false,
  expandable = false,
  renderExpand,
  onRowClick,
  onSelectionChange,
  keyExtractor = (row, index) => row?.id || index,
  rowClassName,
  tableClassName,
  headClassName,
  bodyClassName,
  emptyState,
  expandedByDefault = false,
  // Styling overrides
  hoverClassName = 'hover:bg-gray-50 dark:hover:bg-gray-700',
  borderClassName = 'border-b border-gray-100 dark:border-gray-700',
  rowTransition = 'transition',
}) {
  const [selectedIds, setSelectedIds] = useState(new Set())
  const [expandedIds, setExpandedIds] = useState(
    expandedByDefault ? new Set(data.map(keyExtractor)) : new Set()
  )

  // Toggle selection for a single row
  const toggleSelection = useCallback(
    (id, event) => {
      event?.stopPropagation()
      const newSelected = new Set(selectedIds)
      if (newSelected.has(id)) {
        newSelected.delete(id)
      } else {
        newSelected.add(id)
      }
      setSelectedIds(newSelected)
      onSelectionChange?.(newSelected)
    },
    [selectedIds, onSelectionChange]
  )

  // Toggle selection for all rows
  const toggleSelectAll = useCallback(
    (event) => {
      event?.stopPropagation()
      const allIds = new Set(data.map((row, i) => keyExtractor(row, i)))
      const newSelected = selectedIds.size === allIds.size ? new Set() : allIds
      setSelectedIds(newSelected)
      onSelectionChange?.(newSelected)
    },
    [data, selectedIds, keyExtractor, onSelectionChange]
  )

  // Toggle expanded state for a row
  const toggleExpand = useCallback(
    (id, event) => {
      event?.stopPropagation()
      const newExpanded = new Set(expandedIds)
      if (newExpanded.has(id)) {
        newExpanded.delete(id)
      } else {
        newExpanded.add(id)
      }
      setExpandedIds(newExpanded)
    },
    [expandedIds]
  )

  const isAllSelected = data.length > 0 && selectedIds.size === data.length
  const isIndeterminate = selectedIds.size > 0 && selectedIds.size < data.length

  // Render cell content based on column configuration
  const renderCell = (column, row, index) => {
    if (column.render) {
      return column.render(row, index)
    }
    if (column.component) {
      const Component = column.component
      return <Component {...row} />
    }
    return row[column.key] ?? null
  }

  if (data.length === 0 && emptyState) {
    return emptyState
  }

  return (
    <Table className={twMerge('w-full text-left text-sm', tableClassName)}>
      <TableHead className={twMerge('bg-gray-50 text-xs uppercase dark:bg-gray-700', headClassName)}>
        <TableRow>
          {/* Selection header */}
          {selectable && (
            <TableHeadCell scope="col" className="w-4 p-4">
              <div className="flex items-center">
                <Checkbox
                  id="checkbox-all"
                  checked={isAllSelected}
                  indeterminate={isIndeterminate}
                  onChange={toggleSelectAll}
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                />
                <Label htmlFor="checkbox-all" className="sr-only">
                  Select all
                </Label>
              </div>
            </TableHeadCell>
          )}

          {/* Expand header */}
          {expandable && (
            <TableHeadCell scope="col" className="w-4 px-4 py-3">
              <span className="sr-only">Expand/Collapse Row</span>
            </TableHeadCell>
          )}

          {/* Column headers */}
          {columns.map((column) => (
            <TableHeadCell
              key={column.key}
              scope={column.scope || 'col'}
              className={twMerge(
                'px-4 py-3 font-medium text-gray-900 dark:text-white',
                column.width,
                column.headerClassName
              )}
            >
              {column.header || <span className="sr-only">{column.key}</span>}
            </TableHeadCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody className={bodyClassName}>
        {data.map((row, index) => {
          const rowId = keyExtractor(row, index)
          const isSelected = selectedIds.has(rowId)
          const isExpanded = expandedIds.has(rowId)

          return (
            <>
              {/* Main Row */}
              <TableRow
                key={`row-${rowId}`}
                className={twMerge(
                  'cursor-pointer',
                  borderClassName,
                  rowTransition,
                  hoverClassName,
                  isSelected && 'bg-primary-50 dark:bg-primary-900/20',
                  rowClassName?.(row, index)
                )}
                onClick={() => onRowClick?.(row)}
              >
                {/* Selection cell */}
                {selectable && (
                  <TableCell className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id={`checkbox-${rowId}`}
                        checked={isSelected}
                        onChange={(e) => toggleSelection(rowId, e)}
                        onClick={(e) => e.stopPropagation()}
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <Label htmlFor={`checkbox-${rowId}`} className="sr-only">
                        Select row
                      </Label>
                    </div>
                  </TableCell>
                )}

                {/* Expand cell */}
                {expandable && (
                  <TableCell className="w-4 p-3">
                    <button
                      type="button"
                      onClick={(e) => toggleExpand(rowId, e)}
                      className="flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
                      aria-label={isExpanded ? 'Collapse row' : 'Expand row'}
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? (
                        <ChevronDown className="h-5 w-5 shrink-0" aria-hidden="true" />
                      ) : (
                        <ChevronRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                      )}
                    </button>
                  </TableCell>
                )}

                {/* Data cells */}
                {columns.map((column) => (
                  <TableCell
                    key={`${rowId}-${column.key}`}
                    className={twMerge(
                      'px-4 py-3',
                      column.cellClassName
                    )}
                    scope={column.scope || undefined}
                  >
                    {renderCell(column, row, index)}
                  </TableCell>
                ))}
              </TableRow>

              {/* Expanded Row Content */}
              {expandable && isExpanded && renderExpand && (
                <TableRow
                  key={`expand-${rowId}`}
                  id={`expand-${rowId}`}
                  className={twMerge(
                    'w-full flex-1 overflow-x-auto bg-gray-50/50 dark:bg-gray-800/50',
                    borderClassName
                  )}
                >
                  <TableCell
                    colSpan={columns.length + (selectable ? 1 : 0) + 1}
                    className="border-b p-4 dark:border-gray-700"
                  >
                    {renderExpand(row)}
                  </TableCell>
                </TableRow>
              )}
            </>
          )
        })}
      </TableBody>
    </Table>
  )
}

// Preset column configurations for common use cases
export const columnPresets = {
  /**
   * Text column with optional truncation
   */
  text: (key, header, options = {}) => ({
    key,
    header,
    width: options.width || 'min-w-40',
    cellClassName: options.truncate ? 'truncate max-w-xs' : '',
    ...options,
  }),

  /**
   * Column with a component
   */
  component: (key, header, component, options = {}) => ({
    key,
    header,
    component,
    width: options.width,
    ...options,
  }),

  /**
   * Custom render column
   */
  custom: (key, header, render, options = {}) => ({
    key,
    header,
    render,
    width: options.width,
    ...options,
  }),

  /**
   * Actions column (usually last)
   */
  actions: (renderActions, options = {}) => ({
    key: 'actions',
    header: options.header || 'Actions',
    render: renderActions,
    width: options.width || 'w-16',
    cellClassName: 'text-right',
    ...options,
  }),
}

export default DataTable
