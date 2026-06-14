import React, { useState } from 'react';
import { SearchInput } from '../../shared/ui/filters/SearchInput';

export default {
  title: 'Components/Inputs/SearchInput',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Search input field with icon and submit button.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">SearchInput</h1>
        <p className="text-gray-600">
          Search input field with icon and submit button.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Default</h2>
        <div className="max-w-md">
          <SearchInput placeholder="Search..." />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Example</h2>
        <InteractiveSearch />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Guidelines</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-green-700 mb-2">✓ Do</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Use clear placeholder text</li>
              <li>Provide search button</li>
              <li>Handle empty searches gracefully</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-red-700 mb-2">✗ Don't</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Use without placeholder</li>
              <li>Require exact matches</li>
              <li>Hide the search button</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  ),
};

function InteractiveSearch() {
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (value.trim()) {
      setResults([
        `Result for "${value}" 1`,
        `Result for "${value}" 2`,
        `Result for "${value}" 3`,
      ]);
    }
  };

  return (
    <div className="space-y-4 max-w-md">
      <form onSubmit={handleSearch}>
        <SearchInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type to search..."
        />
      </form>
      {results.length > 0 && (
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-sm font-medium mb-2">Results:</p>
          <ul className="text-sm space-y-1">
            {results.map((result, i) => (
              <li key={i} className="text-gray-600">{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export const Playground = {
  name: 'Playground',
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="max-w-md">
        <SearchInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search..."
        />
      </div>
    );
  },
};
