import React from 'react';
import { PipelineBar } from '../../shared/ui/PipelineBar';

const STEPS = ['Scan', 'Triage', 'Review', 'Done'];

export default {
  title: 'Components/Navigation/PipelineBar',
  component: PipelineBar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'PipelineBar shows progress through a multi-step workflow.',
      },
    },
  },
  argTypes: {
    stage: {
      control: { type: 'range', min: 0, max: 3, step: 1 },
      description: 'Current stage index (0-3)',
    },
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">PipelineBar</h1>
        <p className="text-gray-600">
          PipelineBar shows progress through a multi-step workflow.
        </p>
      </div>

      <section className="mb-12 space-y-8">
        {STEPS.map((stepName, index) => (
          <div key={stepName}>
            <h2 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">
              Stage {index}: {stepName}
            </h2>
            <div className="max-w-2xl">
              <PipelineBar stage={index} />
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Guidelines</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-green-700 mb-2">✓ Do</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Use for sequential workflows</li>
              <li>Keep step names short</li>
              <li>Show current stage clearly</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-red-700 mb-2">✗ Don't</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Use for non-linear flows</li>
              <li>Add too many steps</li>
              <li>Skip steps</li>
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
    stage: { control: { type: 'range', min: 0, max: 3, step: 1 } },
  },
  args: {
    stage: 1,
  },
  render: (args) => (
    <div className="p-8 max-w-2xl">
      <PipelineBar stage={args.stage} />
    </div>
  ),
};
