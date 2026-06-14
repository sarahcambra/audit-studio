import React from 'react';

const SPACING_SCALE = [
  { token: '0', value: '0px', rem: '0', usage: 'No spacing' },
  { token: 'px', value: '1px', rem: '1px', usage: 'Hairline borders' },
  { token: '0.5', value: '0.125rem', px: '2px', usage: 'Micro spacing' },
  { token: '1', value: '0.25rem', px: '4px', usage: 'Extra small' },
  { token: '1.5', value: '0.375rem', px: '6px', usage: 'Very small' },
  { token: '2', value: '0.5rem', px: '8px', usage: 'Small, default gap' },
  { token: '2.5', value: '0.625rem', px: '10px', usage: 'Compact' },
  { token: '3', value: '0.75rem', px: '12px', usage: 'Medium small' },
  { token: '3.5', value: '0.875rem', px: '14px', usage: 'Between small/medium' },
  { token: '4', value: '1rem', px: '16px', usage: 'Base unit, medium' },
  { token: '5', value: '1.25rem', px: '20px', usage: 'Medium large' },
  { token: '6', value: '1.5rem', px: '24px', usage: 'Large' },
  { token: '8', value: '2rem', px: '32px', usage: '2x large' },
  { token: '10', value: '2.5rem', px: '40px', usage: '2.5x large' },
  { token: '12', value: '3rem', px: '48px', usage: '3x large' },
  { token: '16', value: '4rem', px: '64px', usage: '4x large' },
  { token: '20', value: '5rem', px: '80px', usage: '5x large' },
  { token: '24', value: '6rem', px: '96px', usage: '6x large' },
];

const BORDER_RADIUS = [
  { token: 'none', value: '0px', usage: 'Square corners' },
  { token: 'sm', value: '0.125rem (2px)', usage: 'Subtle rounding' },
  { token: 'DEFAULT', value: '0.25rem (4px)', usage: 'Default rounding' },
  { token: 'md', value: '0.375rem (6px)', usage: 'Medium rounding' },
  { token: 'lg', value: '0.5rem (8px)', usage: 'Large, cards' },
  { token: 'xl', value: '0.75rem (12px)', usage: 'Extra large, modals' },
  { token: '2xl', value: '1rem (16px)', usage: '2x large' },
  { token: '3xl', value: '1.5rem (24px)', usage: '3x large' },
  { token: 'full', value: '9999px', usage: 'Pills, circles' },
];

const SHADOWS = [
  { token: 'none', value: 'none', usage: 'Flat' },
  { token: 'sm', value: '0 1px 2px rgba(0,0,0,0.05)', usage: 'Subtle elevation' },
  { token: 'DEFAULT', value: '0 1px 3px rgba(0,0,0,0.1)', usage: 'Default elevation' },
  { token: 'md', value: '0 4px 6px rgba(0,0,0,0.1)', usage: 'Medium, cards' },
  { token: 'lg', value: '0 10px 15px rgba(0,0,0,0.1)', usage: 'High, modals' },
  { token: 'xl', value: '0 20px 25px rgba(0,0,0,0.1)', usage: 'Extra high' },
  { token: '2xl', value: '0 25px 50px rgba(0,0,0,0.25)', usage: 'Maximum' },
  { token: 'inner', value: 'inset 0 2px 4px rgba(0,0,0,0.06)', usage: 'Inset shadow' },
];

export default {
  title: 'Foundations/Spacing',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Spacing scale, border radius, and shadow tokens',
      },
    },
  },
};

export const SpacingScale = {
  name: 'Spacing Scale',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Spacing Scale</h1>
        <p className="text-gray-600">
          Base unit is 1rem (16px). All spacing values are multiples of 0.25rem (4px).
        </p>
      </div>

      <div className="space-y-4">
        {SPACING_SCALE.map((space) => (
          <div key={space.token} className="flex items-center gap-6">
            <div className="w-24">
              <span className="font-mono text-sm text-gray-900">{space.token}</span>
            </div>
            <div className="w-32 text-sm text-gray-500">
              {space.value}
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div
                className="h-8 bg-primary-500 rounded"
                style={{ width: space.px || space.rem }}
              />
              <span className="text-xs text-gray-400">{space.usage}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Usage Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Common Patterns</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>space-4 (16px) for component padding</li>
              <li>space-2 (8px) for small gaps</li>
              <li>space-6 (24px) for section margins</li>
              <li>space-8-12 for larger sections</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">In Tailwind</h4>
            <code className="text-sm text-gray-600 block">
              className="p-4 gap-2 mb-6"
            </code>
            <p className="text-xs text-gray-400 mt-1">padding, gap, margin</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const BorderRadius = {
  name: 'Border Radius',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Border Radius</h1>
        <p className="text-gray-600">Corner rounding for containers and components</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {BORDER_RADIUS.map((radius) => (
          <div key={radius.token} className="text-center">
            <div
              className="w-24 h-24 mx-auto mb-3 bg-primary-500"
              style={{ borderRadius: radius.value.split(' ')[0] }}
            />
            <span className="font-mono text-sm text-gray-900">{radius.token}</span>
            <p className="text-xs text-gray-500 mt-1">{radius.value}</p>
            <p className="text-xs text-gray-400 mt-1">{radius.usage}</p>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Shadows = {
  name: 'Shadows',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Shadows</h1>
        <p className="text-gray-600">Elevation levels for depth and hierarchy</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {SHADOWS.map((shadow) => (
          <div key={shadow.token} className="text-center">
            <div
              className="w-24 h-24 mx-auto mb-3 bg-white rounded-lg border border-gray-100"
              style={{ boxShadow: shadow.value }}
            />
            <span className="font-mono text-sm text-gray-900">{shadow.token}</span>
            <p className="text-xs text-gray-400 mt-1">{shadow.usage}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Elevation Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Level 0</h4>
            <p>Flat elements, backgrounds</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Level 1-2</h4>
            <p>Cards, buttons, inputs</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Level 3-4</h4>
            <p>Modals, dropdowns, popovers</p>
          </div>
        </div>
      </div>
    </div>
  ),
};
