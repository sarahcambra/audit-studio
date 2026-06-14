import React from 'react';
import { Loading, FullScreenLoading } from '../../shared/ui/Loading';

const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
const COLORS = ['primary', 'purple', 'success', 'warning', 'danger'];

export default {
  title: 'Components/Feedback/Loading',
  component: Loading,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Loading spinners for various states.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Spinner size',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'purple'],
      description: 'Spinner color',
    },
    text: {
      control: 'text',
      description: 'Optional loading text',
    },
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Loading</h1>
        <p className="text-gray-600">
          Loading spinners for various states. Includes inline and fullscreen variants.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Sizes</h2>
        <div className="flex items-center gap-8">
          {SIZES.map((size) => (
            <div key={size} className="text-center">
              <Loading size={size} />
              <p className="text-xs text-gray-500 mt-2 uppercase">{size}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">With Text</h2>
        <div className="space-y-4">
          <Loading size="md" text="Loading audits..." />
          <Loading size="lg" text="Processing..." color="success" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Colors</h2>
        <div className="flex items-center gap-8">
          {COLORS.map((color) => (
            <div key={color} className="text-center">
              <Loading size="lg" color={color} />
              <p className="text-xs text-gray-500 mt-2 capitalize">{color}</p>
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
              <li>Match spinner size to context</li>
              <li>Provide loading text for longer operations</li>
              <li>Use consistent colors</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-red-700 mb-2">✗ Don't</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Use large spinners for inline loading</li>
              <li>Show spinners without context</li>
              <li>Use multiple spinners on same page</li>
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
    size: 'md',
    color: 'purple',
    text: 'Loading...',
  },
  render: (args) => (
    <div className="p-20 flex items-center justify-center min-h-[300px] bg-gray-50">
      <Loading size={args.size} color={args.color} text={args.text} />
    </div>
  ),
};
