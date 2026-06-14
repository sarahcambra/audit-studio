/**
 * DataTable Example Usage
 *
 * This file shows how to use the DataTable component with different configurations.
 */

import { DataTable, columnPresets } from './DataTable'
import { Badge } from './Badge'
import { Button } from 'flowbite-react'
import { Edit, Trash2, Eye } from 'lucide-react'

// ============================================================
// Example 1: Basic Table (like AuditsPage)
// ============================================================
export function BasicExample() {
  const columns = [
    {
      key: 'name',
      header: 'Name',
      width: 'min-w-56',
      render: (row) => (
        <div className="flex items-center">
          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100">
            <span className="text-xs font-medium text-primary-700">
              {row.name[0]}
            </span>
          </div>
          <span className="font-medium">{row.name}</span>
        </div>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (row) => (
        <Badge color={row.status === 'active' ? 'green' : 'gray'}>
          {row.status}
        </Badge>
      ),
    },
    {
      key: 'actions',
      header: '',
      width: 'w-16',
      cellClassName: 'text-right',
      render: (row) => (
        <div className="flex items-center justify-end gap-2">
          <Button size="xs" color="gray" onClick={(e) => { e.stopPropagation(); console.log('Edit', row.id) }}>
            <Edit className="h-3.5 w-3.5" />
          </Button>
          <Button size="xs" color="failure" onClick={(e) => { e.stopPropagation(); console.log('Delete', row.id) }}>
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        </div>
      ),
    },
  ]

  const data = [
    { id: 1, name: 'Audit 1', status: 'active' },
    { id: 2, name: 'Audit 2', status: 'archived' },
  ]

  return (
    <DataTable
      columns={columns}
      data={data}
      selectable
      onRowClick={(row) => console.log('Row clicked:', row)}
      onSelectionChange={(selectedIds) => console.log('Selected:', selectedIds)}
    />
  )
}

// ============================================================
// Example 2: Table with Expandable Rows
// ============================================================
export function ExpandableExample() {
  const columns = [
    {
      key: 'product',
      header: 'Product',
      width: 'min-w-56',
      render: (row) => (
        <div className="flex items-center">
          <img src={row.image} alt="" className="mr-3 h-8 w-auto" />
          <span className="font-medium text-gray-900 dark:text-white">
            {row.name}
          </span>
        </div>
      ),
    },
    {
      key: 'category',
      header: 'Category',
      render: (row) => row.category,
    },
    {
      key: 'price',
      header: 'Price',
      render: (row) => <span className="font-medium">${row.price}</span>,
    },
    {
      key: 'stock',
      header: 'Stock',
      render: (row) => row.stock,
    },
    {
      key: 'status',
      header: 'Status',
      render: (row) => (
        <Badge color={row.stock > 0 ? 'green' : 'red'}>
          {row.stock > 0 ? 'Active' : 'Out of stock'}
        </Badge>
      ),
    },
  ]

  const data = [
    {
      id: 1,
      name: 'Apple iMac 27"',
      category: 'PC',
      price: 2999,
      stock: 200,
      image: '/imac.png',
      description: 'High-performance desktop computer with Retina display',
      specs: { processor: 'Intel Core i9', ram: '32GB', storage: '1TB SSD' },
    },
    {
      id: 2,
      name: 'MacBook Pro 16"',
      category: 'Laptop',
      price: 2499,
      stock: 150,
      image: '/macbook.png',
      description: 'Professional laptop for developers and designers',
      specs: { processor: 'M3 Pro', ram: '18GB', storage: '512GB SSD' },
    },
  ]

  // Expanded row content
  const renderExpand = (row) => (
    <div className="space-y-4">
      {/* Product Details Grid */}
      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
          <h6 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
          </h6>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {row.description}
          </p>
        </div>
        <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
          <h6 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Processor
          </h6>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {row.specs.processor}
          </p>
        </div>
        <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
          <h6 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
            RAM
          </h6>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {row.specs.ram}
          </p>
        </div>
        <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
          <h6 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Storage
          </h6>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {row.specs.storage}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <Button size="sm" onClick={() => console.log('Edit', row.id)}>
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </Button>
        <Button size="sm" color="gray" onClick={() => console.log('Preview', row.id)}>
          <Eye className="mr-2 h-4 w-4" />
          Preview
        </Button>
        <Button size="sm" color="failure" onClick={() => console.log('Delete', row.id)}>
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </div>
    </div>
  )

  return (
    <DataTable
      columns={columns}
      data={data}
      selectable
      expandable
      renderExpand={renderExpand}
      onRowClick={(row) => console.log('Row clicked:', row.id)}
    />
  )
}

// ============================================================
// Example 3: Using columnPresets helper
// ============================================================
export function ColumnPresetsExample() {
  const { text, custom, actions } = columnPresets

  const columns = [
    // Simple text column
    text('name', 'Product Name', { width: 'min-w-48' }),

    // Custom rendered column
    custom('details', 'Details', (row) => (
      <div>
        <p className="font-medium">{row.name}</p>
        <p className="text-xs text-gray-500">{row.category}</p>
      </div>
    )),

    // Actions column
    actions(
      (row) => (
        <div className="flex gap-2">
          <Button size="xs" onClick={() => console.log('Edit', row.id)}>
            Edit
          </Button>
          <Button size="xs" color="failure" onClick={() => console.log('Delete', row.id)}>
            Delete
          </Button>
        </div>
      ),
      { width: 'w-24' }
    ),
  ]

  const data = [
    { id: 1, name: 'Item 1', category: 'A' },
    { id: 2, name: 'Item 2', category: 'B' },
  ]

  return <DataTable columns={columns} data={data} />
}

// ============================================================
// Example 4: Table with Styling Overrides
// ============================================================
export function StyledExample() {
  const columns = [
    { key: 'name', header: 'Name', render: (row) => row.name },
    { key: 'value', header: 'Value', render: (row) => row.value },
  ]

  const data = [
    { id: 1, name: 'Item 1', value: 100 },
    { id: 2, name: 'Item 2', value: 200 },
  ]

  return (
    <DataTable
      columns={columns}
      data={data}
      // Override hover effect
      hoverClassName="hover:bg-blue-50 dark:hover:bg-blue-900/20"
      // Custom row class based on data
      rowClassName={(row) => row.value > 150 ? 'bg-green-50' : ''}
      // Remove transition
      rowTransition=""
    />
  )
}

export default DataTable
