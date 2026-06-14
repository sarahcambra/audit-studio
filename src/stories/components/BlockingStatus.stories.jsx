import React from 'react';
import { BlockingStatus } from '../../shared/ui/BlockingStatus';

export default {
  title: 'Components/Feedback/BlockingStatus',
  component: BlockingStatus,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Shows triage status for an audit with color-coded indicators.',
      },
    },
  },
  argTypes: {
    untriagedCount: {
      control: 'number',
      description: 'Number of untriaged items',
    },
    blockingCount: {
      control: 'number',
      description: 'Number of blocking issues',
    },
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">BlockingStatus</h1>
        <p className="text-gray-600">
          Shows triage status for an audit with color-coded indicators.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">States</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500 mb-2">All Triaged</p>
            <BlockingStatus untriagedCount={0} blockingCount={0} />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Awaiting Review</p>
            <BlockingStatus untriagedCount={5} blockingCount={0} />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Has Blocking Issues</p>
            <BlockingStatus untriagedCount={5} blockingCount={3} />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Guidelines</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-green-700 mb-2">✓ Do</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Use in audit lists and dashboards</li>
              <li>Show blocking count prominently</li>
              <li>Update in real-time</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-red-700 mb-2">✗ Don't</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Use for non-blocking items</li>
              <li>Show stale data</li>
              <li>Use without context</li>
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
    untriagedCount: { control: { type: 'number', min: 0, max: 20 } },
    blockingCount: { control: { type: 'number', min: 0, max: 20 } },
  },
  args: {
    untriagedCount: 5,
    blockingCount: 2,
  },
  render: (args) => (
    <div className="p-8">
      <BlockingStatus
        untriagedCount={args.untriagedCount}
        blockingCount={args.blockingCount}
      />
    </div>
  ),
};
