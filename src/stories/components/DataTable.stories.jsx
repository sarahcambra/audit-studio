import React, { useState } from 'react';
import { DataTable } from '../../shared/ui/DataTable';
import { StatusBadge, ImpactBadge } from '../../shared/ui/badges';
import { Button, Dropdown } from 'flowbite-react';
import { MoreVertical, Eye, Edit, Trash2 } from 'lucide-react';

const SAMPLE_DATA = [
  { id: '1', name: 'Homepage Audit', status: 'active', issues: 12, lastScan: '2024-01-15', impact: 'critical' },
  { id: '2', name: 'Product Page', status: 'complete', issues: 0, lastScan: '2024-01-14', impact: null },
  { id: '3', name: 'Checkout Flow', status: 'draft', issues: 5, lastScan: '-', impact: 'serious' },
  { id: '4', name: 'User Dashboard', status: 'active', issues: 3, lastScan: '2024-01-13', impact: 'moderate' },
];

// Define individual columns
const NAME_COLUMN = { key: 'name', header: 'Audit Name', width: 'min-w-48' };
const STATUS_COLUMN = { key: 'status', header: 'Status', component: StatusBadge };
const ISSUES_COLUMN = { key: 'issues', header: 'Issues' };
const LASTSCAN_COLUMN = { key: 'lastScan', header: 'Last Scan' };
const IMPACT_COLUMN = { key: 'impact', header: 'Impact', component: ImpactBadge };
const ACTIONS_COLUMN = {
  key: 'actions',
  header: '',
  width: 'w-16',
  render: (row) => (
    <Dropdown
      label=""
      dismissOnClick={true}
      renderTrigger={() => (
        <button className="p-2 hover:bg-gray-100 rounded" aria-label="Actions">
          <MoreVertical className="w-4 h-4" />
        </button>
      )}
    >
      <Dropdown.Item icon={Eye}>View</Dropdown.Item>
      <Dropdown.Item icon={Edit}>Edit</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item icon={Trash2} className="text-red-600">Delete</Dropdown.Item>
    </Dropdown>
  ),
};

// Predefined column sets
const COLUMN_SETS = {
  basic: [NAME_COLUMN, ISSUES_COLUMN],
  standard: [NAME_COLUMN, STATUS_COLUMN, ISSUES_COLUMN, LASTSCAN_COLUMN],
  full: [NAME_COLUMN, STATUS_COLUMN, ISSUES_COLUMN, IMPACT_COLUMN, LASTSCAN_COLUMN],
};

export default {
  title: 'Components/Data Display/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'DataTable is a reusable table with selection and expansion support.',
      },
    },
  },
  argTypes: {
    // Column configuration
    columnSet: {
      control: { type: 'select' },
      options: ['basic', 'standard', 'full'],
      description: 'Predefined column sets',
      table: { category: 'Columns' },
    },
    showStatus: {
      control: 'boolean',
      description: 'Show status column',
      table: { category: 'Columns' },
    },
    showImpact: {
      control: 'boolean',
      description: 'Show impact column',
      table: { category: 'Columns' },
    },
    showLastScan: {
      control: 'boolean',
      description: 'Show last scan column',
      table: { category: 'Columns' },
    },
    showActions: {
      control: 'boolean',
      description: 'Show action column with dropdown',
      table: { category: 'Columns' },
    },
    // Features
    selectable: {
      control: 'boolean',
      description: 'Enable row selection with checkboxes',
      table: { category: 'Features' },
    },
    expandable: {
      control: 'boolean',
      description: 'Enable expandable rows',
      table: { category: 'Features' },
    },
    // Hide all complex/internal props from controls panel
    columns: { table: { disable: true } },
    data: { table: { disable: true } },
    keyExtractor: { table: { disable: true } },
    expandedByDefault: { table: { disable: true } },
    hoverClassName: { table: { disable: true } },
    borderClassName: { table: { disable: true } },
    rowTransition: { table: { disable: true } },
    rowClassName: { table: { disable: true } },
    tableClassName: { table: { disable: true } },
    headClassName: { table: { disable: true } },
    bodyClassName: { table: { disable: true } },
    renderExpand: { table: { disable: true } },
    onSelectionChange: { table: { disable: true } },
    onRowClick: { table: { disable: true } },
    emptyState: { table: { disable: true } },
  },
  args: {
    columnSet: 'standard',
    showStatus: true,
    showImpact: false,
    showLastScan: true,
    showActions: false,
    selectable: false,
    expandable: false,
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">DataTable</h1>
        <p className="text-gray-600">
          DataTable is a reusable table component with selectable and expandable rows.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Table (2 columns)</h2>
        <DataTable columns={COLUMN_SETS.basic} data={SAMPLE_DATA} />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Standard Table (4 columns)</h2>
        <DataTable columns={COLUMN_SETS.standard} data={SAMPLE_DATA} />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Full Table (5 columns)</h2>
        <DataTable columns={COLUMN_SETS.full} data={SAMPLE_DATA} />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">With Selection</h2>
        <DataTable columns={COLUMN_SETS.standard} data={SAMPLE_DATA} selectable />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">With Expandable Rows</h2>
        <DataTable
          columns={COLUMN_SETS.standard}
          data={SAMPLE_DATA}
          expandable
          renderExpand={(row) => (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">{row.name} Details</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">ID: </span>
                  <span className="font-mono">{row.id}</span>
                </div>
                <div>
                  <span className="text-gray-500">Issues: </span>
                  <span>{row.issues}</span>
                </div>
                <div>
                  <span className="text-gray-500">Impact: </span>
                  <span>{row.impact || 'none'}</span>
                </div>
                <div>
                  <span className="text-gray-500">Status: </span>
                  <span>{row.status}</span>
                </div>
              </div>
            </div>
          )}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">With Actions</h2>
        <DataTable columns={[...COLUMN_SETS.standard, ACTIONS_COLUMN]} data={SAMPLE_DATA} />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Prop</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Type</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Default</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-mono text-gray-900">columns</td>
                <td className="px-4 py-3 text-gray-600">ColumnConfig[]</td>
                <td className="px-4 py-3 text-gray-600">required</td>
                <td className="px-4 py-3 text-gray-600">Column definitions</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-gray-900">data</td>
                <td className="px-4 py-3 text-gray-600">any[]</td>
                <td className="px-4 py-3 text-gray-600">required</td>
                <td className="px-4 py-3 text-gray-600">Table data</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-gray-900">selectable</td>
                <td className="px-4 py-3 text-gray-600">boolean</td>
                <td className="px-4 py-3 text-gray-600">false</td>
                <td className="px-4 py-3 text-gray-600">Enable row selection</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-gray-900">expandable</td>
                <td className="px-4 py-3 text-gray-600">boolean</td>
                <td className="px-4 py-3 text-gray-600">false</td>
                <td className="px-4 py-3 text-gray-600">Enable expandable rows</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-gray-900">renderExpand</td>
                <td className="px-4 py-3 text-gray-600">function</td>
                <td className="px-4 py-3 text-gray-600">-</td>
                <td className="px-4 py-3 text-gray-600">Render expanded content</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-gray-900">onRowClick</td>
                <td className="px-4 py-3 text-gray-600">function</td>
                <td className="px-4 py-3 text-gray-600">-</td>
                <td className="px-4 py-3 text-gray-600">Row click handler</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-gray-900">onSelectionChange</td>
                <td className="px-4 py-3 text-gray-600">function</td>
                <td className="px-4 py-3 text-gray-600">-</td>
                <td className="px-4 py-3 text-gray-600">Selection change handler</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  ),
};

// Playground with column configuration
export const Playground = {
  name: 'Playground',
  render: (args) => {
    // Build columns based on controls
    const columns = [
      NAME_COLUMN,
      ...(args.showStatus ? [STATUS_COLUMN] : []),
      ISSUES_COLUMN,
      ...(args.showImpact ? [IMPACT_COLUMN] : []),
      ...(args.showLastScan ? [LASTSCAN_COLUMN] : []),
      ...(args.showActions ? [ACTIONS_COLUMN] : []),
    ];

    return (
      <div className="p-8 max-w-4xl mx-auto">
        <DataTable
          columns={columns}
          data={SAMPLE_DATA}
          selectable={args.selectable}
          expandable={args.expandable}
          renderExpand={args.expandable ? (row) => (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">{row.name} Details</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">ID: </span>
                  <span className="font-mono">{row.id}</span>
                </div>
                <div>
                  <span className="text-gray-500">Issues: </span>
                  <span>{row.issues}</span>
                </div>
                {row.impact && (
                  <div>
                    <span className="text-gray-500">Impact: </span>
                    <span>{row.impact}</span>
                  </div>
                )}
              </div>
            </div>
          ) : undefined}
        />
      </div>
    );
  },
};
