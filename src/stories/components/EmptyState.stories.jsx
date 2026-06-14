import React from 'react';
import { EmptyState } from '../../shared/ui/EmptyState';

const EMPTY_STATE_VARIANTS = [
  { name: 'No Data', title: 'No data available', description: 'There is no data to display for the selected time period.', showAction: true },
  { name: 'No Results', title: 'No results found', description: 'Try adjusting your filters or search terms.', showAction: false },
  { name: 'Empty List', title: 'No items yet', description: 'Get started by creating your first item.', showAction: true },
];

export default {
  title: 'Components/Feedback/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'EmptyState displays when there is no data to show.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Main title',
    },
    description: {
      control: 'text',
      description: 'Description text',
    },
    actionLabel: {
      control: 'text',
      description: 'Button label',
    },
    showAction: {
      control: 'boolean',
      description: 'Show action button',
    },
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">EmptyState</h1>
        <p className="text-gray-600">
          EmptyState displays when there is no data to show. Includes optional action button.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EMPTY_STATE_VARIANTS.map((variant) => (
            <div key={variant.name} className="border border-gray-200 rounded-lg">
              <EmptyState
                title={variant.title}
                description={variant.description}
                actionLabel="Add New"
                showAction={variant.showAction}
                onAction={() => alert('Action clicked!')}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Guidelines</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-green-700 mb-2">✓ Do</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Provide clear, helpful messaging</li>
              <li>Include a relevant action when applicable</li>
              <li>Use consistent illustration style</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-red-700 mb-2">✗ Don't</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Use generic "No data" messages</li>
              <li>Hide action button when user can add data</li>
              <li>Use in loading states</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  ),
};

export const Playground = {
  name: 'Playground',
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    actionLabel: { control: 'text' },
    showAction: { control: 'boolean' },
  },
  args: {
    title: 'No audits yet',
    description: 'Get started by creating your first accessibility audit.',
    actionLabel: 'Create Audit',
    showAction: true,
  },
  render: (args) => (
    <div className="p-8 border border-gray-200 rounded-lg">
      <EmptyState
        title={args.title}
        description={args.description}
        actionLabel={args.actionLabel}
        showAction={args.showAction}
        onAction={() => alert('Action clicked!')}
      />
    </div>
  ),
};
