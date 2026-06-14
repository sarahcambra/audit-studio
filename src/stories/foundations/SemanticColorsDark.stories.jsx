import React from 'react';

const DARK_SEMANTIC_COLORS = {
  primary: {
    name: 'Primary Semantic (Dark)',
    description: 'Primary brand colors optimized for dark mode.',
    colors: [
      { token: 'color-bg-brand', primitive: 'primary-400', hex: '#a78bfa', usage: 'Primary buttons on dark' },
      { token: 'color-bg-brand-hover', primitive: 'primary-300', hex: '#c4b5fd', usage: 'Primary button hover' },
      { token: 'color-bg-brand-active', primitive: 'primary-500', hex: '#8b5cf6', usage: 'Primary button active' },
      { token: 'color-bg-brand-subtle', primitive: 'primary-900', hex: '#4c1d95', usage: 'Subtle brand backgrounds' },
      { token: 'color-text-brand', primitive: 'primary-300', hex: '#c4b5fd', usage: 'Brand text, links' },
      { token: 'color-text-brand-hover', primitive: 'primary-200', hex: '#ddd6fe', usage: 'Link hover text' },
      { token: 'color-border-brand', primitive: 'primary-700', hex: '#7C3AED', usage: 'Brand borders' },
      { token: 'color-icon-brand', primitive: 'primary-300', hex: '#c4b5fd', usage: 'Brand icons' },
    ],
  },
  secondary: {
    name: 'Secondary Semantic (Dark)',
    description: 'Secondary colors for dark mode.',
    colors: [
      { token: 'color-bg-secondary', primitive: 'secondary-400', hex: '#7388b3', usage: 'Secondary buttons' },
      { token: 'color-bg-secondary-hover', primitive: 'secondary-300', hex: '#97a8c8', usage: 'Secondary button hover' },
      { token: 'color-bg-secondary-subtle', primitive: 'secondary-900', hex: '#171f36', usage: 'Secondary backgrounds' },
      { token: 'color-text-secondary', primitive: 'secondary-300', hex: '#97a8c8', usage: 'Secondary text' },
      { token: 'color-border-secondary', primitive: 'secondary-700', hex: '#34426a', usage: 'Secondary borders' },
      { token: 'color-icon-secondary', primitive: 'secondary-400', hex: '#7388b3', usage: 'Secondary icons' },
    ],
  },
  feedback: {
    name: 'Feedback Colors (Dark)',
    description: 'Status colors for dark mode.',
    colors: [
      { token: 'color-bg-success', primitive: 'success-400', hex: '#49b876', usage: 'Success buttons' },
      { token: 'color-bg-success-subtle', primitive: 'success-900', hex: '#0c2f1c', usage: 'Success backgrounds' },
      { token: 'color-text-success', primitive: 'success-300', hex: '#70cc92', usage: 'Success text' },
      { token: 'color-border-success', primitive: 'success-700', hex: '#1b643a', usage: 'Success borders' },
      { token: 'color-bg-danger', primitive: 'danger-400', hex: '#f0445e', usage: 'Danger buttons' },
      { token: 'color-bg-danger-subtle', primitive: 'danger-900', hex: '#450d18', usage: 'Error backgrounds' },
      { token: 'color-text-danger', primitive: 'danger-300', hex: '#ff7284', usage: 'Error text' },
      { token: 'color-border-danger', primitive: 'danger-700', hex: '#8f1c31', usage: 'Error borders' },
      { token: 'color-bg-warning', primitive: 'warning-400', hex: '#f9961e', usage: 'Warning buttons' },
      { token: 'color-bg-warning-subtle', primitive: 'warning-900', hex: '#472401', usage: 'Warning backgrounds' },
      { token: 'color-text-warning', primitive: 'warning-300', hex: '#ffb04d', usage: 'Warning text' },
      { token: 'color-border-warning', primitive: 'warning-700', hex: '#944e05', usage: 'Warning borders' },
      { token: 'color-bg-info', primitive: 'info-400', hex: '#43aadf', usage: 'Info buttons' },
      { token: 'color-bg-info-subtle', primitive: 'info-900', hex: '#072d42', usage: 'Info backgrounds' },
      { token: 'color-text-info', primitive: 'info-300', hex: '#6ec0e8', usage: 'Info text' },
      { token: 'color-border-info', primitive: 'info-700', hex: '#105d8a', usage: 'Info borders' },
    ],
  },
  neutral: {
    name: 'Neutral Colors (Dark)',
    description: 'Background, text, and border colors for dark mode.',
    colors: [
      { token: 'color-bg', primitive: 'gray-950', hex: '#030712', usage: 'Default dark background' },
      { token: 'color-bg-surface', primitive: 'gray-900', hex: '#111827', usage: 'Card backgrounds' },
      { token: 'color-bg-subtle', primitive: 'gray-800', hex: '#1f2937', usage: 'Subtle backgrounds' },
      { token: 'color-bg-muted', primitive: 'gray-800', hex: '#1f2937', usage: 'Muted backgrounds' },
      { token: 'color-bg-hover', primitive: 'gray-800', hex: '#1f2937', usage: 'Hover states' },
      { token: 'color-bg-active', primitive: 'gray-700', hex: '#374151', usage: 'Active states' },
      { token: 'color-bg-disabled', primitive: 'gray-800', hex: '#1f2937', usage: 'Disabled backgrounds' },
      { token: 'color-text', primitive: 'white', hex: '#fcfcfd', usage: 'Primary text' },
      { token: 'color-text-secondary', primitive: 'gray-300', hex: '#d1d5db', usage: 'Secondary text' },
      { token: 'color-text-muted', primitive: 'gray-400', hex: '#9ca3af', usage: 'Muted text' },
      { token: 'color-text-disabled', primitive: 'gray-500', hex: '#6b7280', usage: 'Disabled text' },
      { token: 'color-text-inverse', primitive: 'gray-900', hex: '#111827', usage: 'Text on light backgrounds' },
      { token: 'color-border', primitive: 'gray-700', hex: '#374151', usage: 'Default borders' },
      { token: 'color-border-subtle', primitive: 'gray-800', hex: '#1f2937', usage: 'Subtle borders' },
      { token: 'color-border-strong', primitive: 'gray-600', hex: '#4b5563', usage: 'Strong borders' },
      { token: 'color-border-disabled', primitive: 'gray-800', hex: '#1f2937', usage: 'Disabled borders' },
      { token: 'color-icon', primitive: 'gray-300', hex: '#d1d5db', usage: 'Default icons' },
      { token: 'color-icon-subtle', primitive: 'gray-400', hex: '#9ca3af', usage: 'Subtle icons' },
      { token: 'color-icon-inverse', primitive: 'gray-900', hex: '#111827', usage: 'Icons on light backgrounds' },
    ],
  },
};

export default {
  title: 'Foundations/Colors/Semantic Colors Dark',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component: 'Semantic color tokens for dark mode',
      },
    },
  },
};

const DarkSemanticColorCard = ({ token, primitive, hex, usage }) => (
  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors">
    <div className="flex items-start gap-4">
      <div
        className="w-16 h-16 rounded-lg border border-gray-600 flex-shrink-0"
        style={{ backgroundColor: hex }}
      />
      <div className="flex-1 min-w-0">
        <p className="font-mono text-sm font-semibold text-gray-100 truncate" title={token}>
          {token}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Primitive: <span className="font-mono text-gray-300">{primitive}</span>
        </p>
        <p className="font-mono text-xs text-gray-500 uppercase mt-1">{hex}</p>
        <p className="text-xs text-gray-400 mt-2">{usage}</p>
      </div>
    </div>
  </div>
);

const DarkSemanticSection = ({ title, description, colors }) => (
  <section className="mb-12">
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {colors.map((color) => (
        <DarkSemanticColorCard key={color.token} {...color} />
      ))}
    </div>
  </section>
);

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-7xl mx-auto bg-gray-950 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Semantic Colors (Dark)</h1>
        <p className="text-gray-400">
          Semantic colors optimized for dark mode. Lighter shades are used for text and interactive elements to maintain contrast.
        </p>
      </div>

      <DarkSemanticSection {...DARK_SEMANTIC_COLORS.primary} />
      <DarkSemanticSection {...DARK_SEMANTIC_COLORS.secondary} />
      <DarkSemanticSection {...DARK_SEMANTIC_COLORS.feedback} />
      <DarkSemanticSection {...DARK_SEMANTIC_COLORS.neutral} />

      {/* Dark Mode Guidelines */}
      <div className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-800">
        <h3 className="font-semibold text-white mb-4">Dark Mode Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-300 mb-2">Key Principles</h4>
            <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
              <li>Use lighter shades (300-400) for text on dark backgrounds</li>
              <li>Keep the same semantic meaning as light mode</li>
              <li>Surface colors are darker (800-900) for depth</li>
              <li>Maintain WCAG AA contrast ratios (4.5:1)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-300 mb-2">Implementation</h4>
            <pre className="text-xs text-gray-500 bg-gray-950 p-3 rounded overflow-x-auto">
{`// Tailwind dark mode
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-900 dark:text-white">
    Adaptive text
  </p>
</div>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Primary = {
  name: 'Primary',
  render: () => (
    <div className="p-8 max-w-6xl bg-gray-950 min-h-screen">
      <DarkSemanticSection {...DARK_SEMANTIC_COLORS.primary} />
    </div>
  ),
};

export const Secondary = {
  name: 'Secondary',
  render: () => (
    <div className="p-8 max-w-6xl bg-gray-950 min-h-screen">
      <DarkSemanticSection {...DARK_SEMANTIC_COLORS.secondary} />
    </div>
  ),
};

export const Feedback = {
  name: 'Feedback',
  render: () => (
    <div className="p-8 max-w-6xl bg-gray-950 min-h-screen">
      <DarkSemanticSection {...DARK_SEMANTIC_COLORS.feedback} />
    </div>
  ),
};

export const Neutral = {
  name: 'Neutral',
  render: () => (
    <div className="p-8 max-w-6xl bg-gray-950 min-h-screen">
      <DarkSemanticSection {...DARK_SEMANTIC_COLORS.neutral} />
    </div>
  ),
};
