import React from 'react';
import { Skeleton, SkeletonCard, SkeletonTable } from '../../shared/ui/Skeleton';

export default {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Skeleton placeholders for loading states.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    lines: {
      control: 'number',
      description: 'Number of lines for text skeleton',
    },
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Skeleton</h1>
        <p className="text-gray-600">
          Skeleton placeholders for loading states. Shows content structure while data loads.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Text Lines</h2>
        <div className="max-w-md">
          <Skeleton lines={3} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Card Skeleton</h2>
        <div className="max-w-sm">
          <SkeletonCard />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Table Skeleton</h2>
        <SkeletonTable rows={3} />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Custom Shapes</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
          <Skeleton className="h-32 w-full rounded-lg" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Guidelines</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-green-700 mb-2">✓ Do</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Match skeleton to content shape</li>
              <li>Use subtle animation</li>
              <li>Replace with content when loaded</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-red-700 mb-2">✗ Don't</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Show skeletons indefinitely</li>
              <li>Use for short operations</li>
              <li>Mix skeleton with spinner</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  ),
};

export const Playground = {
  name: 'Playground',
  args: {
    lines: 3,
  },
  render: (args) => (
    <div className="max-w-md">
      <Skeleton {...args} />
    </div>
  ),
};
