import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import ErrorBoundary from '../../shared/ui/ErrorBoundary';

// Component that throws an error
const ErrorComponent = () => {
  throw new Error('This is a test error');
};

export default {
  title: 'Components/Feedback/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Catches JavaScript errors in child components and displays a fallback UI.',
      },
    },
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">ErrorBoundary</h1>
        <p className="text-gray-600">
          Catches JavaScript errors in child components and displays a fallback UI.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Normal State</h2>
        <ErrorBoundary>
          <div className="p-8 bg-gray-100 rounded text-center">
            <p className="text-green-600 font-medium">Everything is working correctly!</p>
          </div>
        </ErrorBoundary>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Error State</h2>
        <ErrorExample />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Guidelines</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-green-700 mb-2">✓ Do</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Wrap top-level routes</li>
              <li>Provide clear error messages</li>
              <li>Allow users to retry</li>
              <li>Log errors for debugging</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-red-700 mb-2">✗ Don't</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Swallow errors silently</li>
              <li>Show technical details to users</li>
              <li>Prevent error reporting</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  ),
};

function ErrorExample() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="space-y-4">
      {!hasError && (
        <Button onClick={() => setHasError(true)}>Trigger Error</Button>
      )}
      <ErrorBoundary>
        {hasError && <ErrorComponent />}
        {!hasError && (
          <div className="p-8 bg-gray-100 rounded text-center">
            <p className="text-gray-600">Click the button to trigger an error</p>
          </div>
        )}
      </ErrorBoundary>
    </div>
  );
}

export const Playground = {
  name: 'Playground',
  render: () => (
    <ErrorBoundary>
      <div className="p-8 bg-gray-100 rounded text-center">
        <p className="text-green-600 font-medium">Content renders here</p>
      </div>
    </ErrorBoundary>
  ),
};
