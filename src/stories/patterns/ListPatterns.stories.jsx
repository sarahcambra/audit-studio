import React, { useState } from 'react';
import { DataTable } from '../../shared/ui/DataTable';
import { StatusBadge, ImpactBadge } from '../../shared/ui/badges';
import { EmptyState } from '../../shared/ui/EmptyState';
import { Loading } from '../../shared/ui/Loading';
import { Button, Dropdown } from 'flowbite-react';
import { MoreVertical, Eye, Edit, Trash2, Plus } from 'lucide-react';

export default {
  title: 'Patterns/Lists',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Common list patterns for displaying and managing data.',
      },
    },
  },
};

const AUDIT_DATA = [
  { id: '1', name: 'Homepage Accessibility Audit', status: 'active', issues: 12, lastScan: '2024-01-15', impact: 'critical' },
  { id: '2', name: 'Product Page Review', status: 'complete', issues: 0, lastScan: '2024-01-14', impact: null },
  { id: '3', name: 'Checkout Flow Analysis', status: 'draft', issues: 5, lastScan: '-', impact: 'serious' },
  { id: '4', name: 'User Dashboard', status: 'active', issues: 3, lastScan: '2024-01-13', impact: 'moderate' },
  { id: '5', name: 'Settings Page', status: 'archived', issues: 8, lastScan: '2024-01-10', impact: 'minor' },
];

// Data Table with Actions
export const DataTableWithActions = {
  name: 'Data Table',
  render: () => {
    const [data, setData] = useState(AUDIT_DATA);
    const [selected, setSelected] = useState(new Set());

    const handleDelete = (id) => {
      setData(data.filter(item => item.id !== id));
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Audits</h3>
          <div className="flex gap-2">
            {selected.size > 0 && (
              <Button color="gray" size="sm">
                Delete Selected ({selected.size})
              </Button>
            )}
            <Button color="primary" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Audit
            </Button>
          </div>
        </div>

        <DataTable
          columns={[
            { key: 'name', header: 'Audit Name', width: 'min-w-48' },
            { key: 'status', header: 'Status', component: StatusBadge },
            { key: 'issues', header: 'Issues' },
            { key: 'lastScan', header: 'Last Scan' },
            {
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
                  <Dropdown.Item
                    icon={Trash2}
                    className="text-red-600"
                    onClick={() => handleDelete(row.id)}
                  >
                    Delete
                  </Dropdown.Item>
                </Dropdown>
              ),
            },
          ]}
          data={data}
          selectable
          onSelectionChange={setSelected}
        />
      </div>
    );
  },
};

// Empty List State
export const EmptyList = {
  name: 'Empty List',
  render: () => (
    <div className="border border-gray-200 rounded-lg">
      <EmptyState
        title="No audits yet"
        description="Get started by creating your first accessibility audit."
        actionLabel="Create Audit"
        showAction={true}
        onAction={() => alert('Create clicked!')}
      />
    </div>
  ),
};

// Loading List State
export const LoadingList = {
  name: 'Loading State',
  render: () => (
    <div className="border border-gray-200 rounded-lg p-8">
      <Loading text="Loading audits..." />
    </div>
  ),
};

// Expandable List Items
export const ExpandableItems = {
  name: 'Expandable Items',
  render: () => {
    const [expandedId, setExpandedId] = useState(null);

    return (
      <div className="max-w-2xl space-y-2">
        {AUDIT_DATA.map((audit) => (
          <div
            key={audit.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
              onClick={() => setExpandedId(expandedId === audit.id ? null : audit.id)}
              aria-expanded={expandedId === audit.id}
            >
              <div className="flex items-center gap-3">
                <StatusBadge status={audit.status} />
                <span className="font-medium">{audit.name}</span>
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  expandedId === audit.id ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedId === audit.id && (
              <div className="px-4 pb-4 border-t border-gray-100">
                <div className="pt-4 grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Issues:</span>{' '}
                    <span className="font-medium">{audit.issues}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Last Scan:</span>{' '}
                    <span>{audit.lastScan}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Impact:</span>{' '}
                    {audit.impact ? <ImpactBadge impact={audit.impact} /> : <span className="text-gray-400">—</span>}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  },
};

// Card Grid Pattern
export const CardGrid = {
  name: 'Card Grid',
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {AUDIT_DATA.map((audit) => (
        <div
          key={audit.id}
          className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between mb-3">
            <StatusBadge status={audit.status} />
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
          <h4 className="font-medium text-gray-900 mb-2">{audit.name}</h4>
          <div className="text-sm text-gray-500 space-y-1">
            <p>{audit.issues} issues found</p>
            <p>Last scan: {audit.lastScan}</p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
            <Button size="xs" color="light" className="flex-1">
              View
            </Button>
            <Button size="xs" color="primary" className="flex-1">
              Scan
            </Button>
          </div>
        </div>
      ))}
    </div>
  ),
};
