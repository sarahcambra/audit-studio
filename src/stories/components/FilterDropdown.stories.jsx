import React, { useState } from 'react';
import { FilterDropdown } from '../../shared/ui/filters/FilterDropdown';

export default {
  title: 'Components/Inputs/FilterDropdown',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Filter dropdown with checkbox sections.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label',
    },
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">FilterDropdown</h1>
        <p className="text-gray-600">
          Filter dropdown with checkbox sections for filtering data.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Single Section</h2>
        <FilterDropdown
          label="Status"
          sections={[
            {
              title: 'Audit Status',
              options: [
                { label: 'Active', value: 'active', checked: true },
                { label: 'Complete', value: 'complete', checked: false },
                { label: 'Archived', value: 'archived', checked: false },
              ],
            },
          ]}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Multiple Sections</h2>
        <MultiSectionFilter />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Guidelines</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-green-700 mb-2">✓ Do</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Group related filters</li>
              <li>Use clear section titles</li>
              <li>Show selected count on button</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-red-700 mb-2">✗ Don't</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Add too many sections</li>
              <li>Use for primary navigation</li>
              <li>Nest dropdowns</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  ),
};

function MultiSectionFilter() {
  const [filters, setFilters] = useState({
    status: { active: true, complete: false },
    priority: { critical: false, serious: false },
  });

  const toggleFilter = (section, value) => {
    setFilters(prev => ({
      ...prev,
      [section]: { ...prev[section], [value]: !prev[section][value] },
    }));
  };

  return (
    <FilterDropdown
      label="Filters"
      sections={[
        {
          title: 'Status',
          options: [
            { label: 'Active', value: 'active', checked: filters.status.active, onToggle: () => toggleFilter('status', 'active') },
            { label: 'Complete', value: 'complete', checked: filters.status.complete, onToggle: () => toggleFilter('status', 'complete') },
          ],
        },
        {
          title: 'Priority',
          options: [
            { label: 'Critical', value: 'critical', checked: filters.priority.critical, onToggle: () => toggleFilter('priority', 'critical') },
            { label: 'Serious', value: 'serious', checked: filters.priority.serious, onToggle: () => toggleFilter('priority', 'serious') },
          ],
        },
      ]}
    />
  );
}

export const Playground = {
  name: 'Playground',
  render: () => {
    const [checked, setChecked] = useState({ active: true, complete: false });

    return (
      <div className="p-8">
        <FilterDropdown
          label="Filter"
          sections={[
            {
              title: 'Status',
              options: [
                { label: 'Active', value: 'active', checked: checked.active, onToggle: () => setChecked(c => ({ ...c, active: !c.active })) },
                { label: 'Complete', value: 'complete', checked: checked.complete, onToggle: () => setChecked(c => ({ ...c, complete: !c.complete })) },
              ],
            },
          ]}
        />
      </div>
    );
  },
};
