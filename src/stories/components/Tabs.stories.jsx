import React, { useState } from 'react';
import { Tabs } from '../../shared/ui/filters/Tabs';

const TAB_EXAMPLES = [
  { key: 'overview', label: 'Overview', count: null },
  { key: 'audits', label: 'Audits', count: 12 },
  { key: 'issues', label: 'Issues', count: 45 },
  { key: 'settings', label: 'Settings', count: null },
];

export default {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Navigation tabs with optional count badges.',
      },
    },
  },
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Array of tab objects',
    },
    activeTab: {
      control: 'text',
      description: 'Currently active tab key',
    },
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tabs</h1>
        <p className="text-gray-600">
          Navigation tabs with optional count badges.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">With Counts</h2>
        <TabsWithCounts />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Without Counts</h2>
        <TabsWithoutCounts />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Guidelines</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-green-700 mb-2">✓ Do</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Use counts to show item totals</li>
              <li>Keep tab labels short</li>
              <li>Limit to 5-7 tabs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-red-700 mb-2">✗ Don't</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Use tabs for multi-step flows</li>
              <li>Nest tabs within tabs</li>
              <li>Show too many tabs</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  ),
};

function TabsWithCounts() {
  const [active, setActive] = useState('overview');
  return (
    <Tabs
      tabs={TAB_EXAMPLES}
      activeTab={active}
      onChange={setActive}
    />
  );
}

function TabsWithoutCounts() {
  const [active, setActive] = useState('overview');
  return (
    <Tabs
      tabs={[
        { key: 'overview', label: 'Overview' },
        { key: 'details', label: 'Details' },
        { key: 'settings', label: 'Settings' },
      ]}
      activeTab={active}
      onChange={setActive}
    />
  );
}

export const Playground = {
  name: 'Playground',
  render: () => {
    const [active, setActive] = useState('overview');
    return (
      <Tabs
        tabs={TAB_EXAMPLES}
        activeTab={active}
        onChange={setActive}
      />
    );
  },
};
