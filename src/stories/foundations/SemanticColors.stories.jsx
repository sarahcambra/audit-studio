import React, { useState } from 'react';

const SEMANTIC_COLORS = {
  primary: {
    name: 'Primary Semantic',
    description: 'Semantic colors derived from the primary purple palette.',
    baseColor: 'purple',
    colors: [
      { token: 'color-bg-brand', primitive: 'primary-700', hex: '#7C3AED', usage: 'Primary button backgrounds, links' },
      { token: 'color-bg-brand-hover', primitive: 'primary-600', hex: '#6d28d9', usage: 'Primary button hover states' },
      { token: 'color-bg-brand-active', primitive: 'primary-800', hex: '#5B21B6', usage: 'Primary button active states' },
      { token: 'color-bg-brand-subtle', primitive: 'primary-50', hex: '#f5f3ff', usage: 'Subtle brand backgrounds' },
      { token: 'color-text-brand', primitive: 'primary-700', hex: '#7C3AED', usage: 'Brand text, links' },
      { token: 'color-text-brand-hover', primitive: 'primary-800', hex: '#5B21B6', usage: 'Link hover text' },
      { token: 'color-border-brand', primitive: 'primary-200', hex: '#ddd6fe', usage: 'Brand borders' },
      { token: 'color-icon-brand', primitive: 'primary-500', hex: '#8b5cf6', usage: 'Brand icons' },
    ],
  },
  secondary: {
    name: 'Secondary Semantic',
    description: 'Semantic colors for secondary actions and supporting elements.',
    baseColor: 'slate',
    colors: [
      { token: 'color-bg-secondary', primitive: 'secondary-500', hex: '#586e9e', usage: 'Secondary button backgrounds' },
      { token: 'color-bg-secondary-hover', primitive: 'secondary-400', hex: '#7388b3', usage: 'Secondary button hover' },
      { token: 'color-bg-secondary-subtle', primitive: 'secondary-50', hex: '#eef1f7', usage: 'Secondary backgrounds' },
      { token: 'color-text-secondary', primitive: 'secondary-700', hex: '#34426a', usage: 'Secondary text' },
      { token: 'color-border-secondary', primitive: 'secondary-200', hex: '#bbc7db', usage: 'Secondary borders' },
      { token: 'color-icon-secondary', primitive: 'secondary-500', hex: '#586e9e', usage: 'Secondary icons' },
    ],
  },
  feedback: {
    name: 'Feedback Colors',
    description: 'Status colors for success, danger, warning, and info states.',
    colors: [
      // Success
      { token: 'color-bg-success', primitive: 'success-500', hex: '#2e9d5b', usage: 'Success button background' },
      { token: 'color-bg-success-subtle', primitive: 'success-50', hex: '#e8f7ee', usage: 'Success alert background' },
      { token: 'color-text-success', primitive: 'success-700', hex: '#1b643a', usage: 'Success text' },
      { token: 'color-border-success', primitive: 'success-200', hex: '#9fdfb5', usage: 'Success borders' },
      // Danger
      { token: 'color-bg-danger', primitive: 'danger-500', hex: '#d92d4c', usage: 'Danger button background' },
      { token: 'color-bg-danger-subtle', primitive: 'danger-50', hex: '#ffe9eb', usage: 'Error alert background' },
      { token: 'color-text-danger', primitive: 'danger-700', hex: '#8f1c31', usage: 'Error text' },
      { token: 'color-border-danger', primitive: 'danger-200', hex: '#ffa0ab', usage: 'Error borders' },
      // Warning
      { token: 'color-bg-warning', primitive: 'warning-500', hex: '#db7b09', usage: 'Warning button background' },
      { token: 'color-bg-warning-subtle', primitive: 'warning-50', hex: '#fff2e2', usage: 'Warning alert background' },
      { token: 'color-text-warning', primitive: 'warning-700', hex: '#944e05', usage: 'Warning text' },
      { token: 'color-border-warning', primitive: 'warning-200', hex: '#ffca85', usage: 'Warning borders' },
      // Info
      { token: 'color-bg-info', primitive: 'info-500', hex: '#1f93d3', usage: 'Info button background' },
      { token: 'color-bg-info-subtle', primitive: 'info-50', hex: '#e8f5fb', usage: 'Info alert background' },
      { token: 'color-text-info', primitive: 'info-700', hex: '#105d8a', usage: 'Info text' },
      { token: 'color-border-info', primitive: 'info-200', hex: '#9dd5f1', usage: 'Info borders' },
    ],
  },
  neutral: {
    name: 'Neutral Colors',
    description: 'Background, text, and border colors for general UI.',
    colors: [
      // Background
      { token: 'color-bg', primitive: 'white', hex: '#fcfcfd', usage: 'Default page background' },
      { token: 'color-bg-surface', primitive: 'white', hex: '#fcfcfd', usage: 'Card and component backgrounds' },
      { token: 'color-bg-subtle', primitive: 'gray-50', hex: '#F8F9FA', usage: 'Subtle backgrounds' },
      { token: 'color-bg-muted', primitive: 'gray-100', hex: '#f3f4f6', usage: 'Muted backgrounds' },
      { token: 'color-bg-hover', primitive: 'gray-100', hex: '#f3f4f6', usage: 'Hover states' },
      { token: 'color-bg-active', primitive: 'gray-200', hex: '#e5e7eb', usage: 'Active states' },
      { token: 'color-bg-disabled', primitive: 'gray-100', hex: '#f3f4f6', usage: 'Disabled backgrounds' },
      // Text
      { token: 'color-text', primitive: 'gray-900', hex: '#111827', usage: 'Primary text' },
      { token: 'color-text-secondary', primitive: 'gray-500', hex: '#6b7280', usage: 'Secondary text' },
      { token: 'color-text-muted', primitive: 'gray-400', hex: '#9ca3af', usage: 'Muted/placeholder text' },
      { token: 'color-text-disabled', primitive: 'gray-400', hex: '#9ca3af', usage: 'Disabled text' },
      { token: 'color-text-inverse', primitive: 'white', hex: '#fcfcfd', usage: 'Text on dark backgrounds' },
      // Border
      { token: 'color-border', primitive: 'gray-200', hex: '#e5e7eb', usage: 'Default borders' },
      { token: 'color-border-subtle', primitive: 'gray-100', hex: '#f3f4f6', usage: 'Subtle borders' },
      { token: 'color-border-strong', primitive: 'gray-300', hex: '#d1d5db', usage: 'Strong borders' },
      { token: 'color-border-disabled', primitive: 'gray-200', hex: '#e5e7eb', usage: 'Disabled borders' },
      // Icon
      { token: 'color-icon', primitive: 'gray-500', hex: '#6b7280', usage: 'Default icons' },
      { token: 'color-icon-subtle', primitive: 'gray-400', hex: '#9ca3af', usage: 'Subtle icons' },
      { token: 'color-icon-inverse', primitive: 'white', hex: '#fcfcfd', usage: 'Icons on dark backgrounds' },
    ],
  },
};

export default {
  title: 'Foundations/Colors/Semantic Colors',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Semantic color tokens with contextual meaning for UI elements',
      },
    },
  },
};

const SemanticColorCard = ({ token, primitive, hex, usage }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
    <div className="flex items-start gap-4">
      <div
        className="w-16 h-16 rounded-lg border border-gray-100 flex-shrink-0"
        style={{ backgroundColor: hex }}
      />
      <div className="flex-1 min-w-0">
        <p className="font-mono text-sm font-semibold text-gray-900 truncate" title={token}>
          {token}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Primitive: <span className="font-mono text-gray-700">{primitive}</span>
        </p>
        <p className="font-mono text-xs text-gray-400 uppercase mt-1">{hex}</p>
        <p className="text-xs text-gray-600 mt-2">{usage}</p>
      </div>
    </div>
  </div>
);

const SemanticSection = ({ title, description, colors }) => (
  <section className="mb-12">
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {colors.map((color) => (
        <SemanticColorCard key={color.token} {...color} />
      ))}
    </div>
  </section>
);

// Overview showing all semantic categories
export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Semantic Colors</h1>
        <p className="text-gray-600">
          Semantic colors convey meaning and context. They map primitive colors to specific UI purposes.
        </p>
      </div>

      <SemanticSection {...SEMANTIC_COLORS.primary} />
      <SemanticSection {...SEMANTIC_COLORS.secondary} />
      <SemanticSection {...SEMANTIC_COLORS.feedback} />
      <SemanticSection {...SEMANTIC_COLORS.neutral} />

      {/* Usage Guidelines */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Usage Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">When to Use Semantic Tokens</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Use semantic tokens for component styling</li>
              <li>They provide meaning (success, danger, etc.)</li>
              <li>They enable theme switching</li>
              <li>They ensure consistency across the app</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Naming Convention</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li><code>color-bg-*</code> — Background colors</li>
              <li><code>color-text-*</code> — Text colors</li>
              <li><code>color-border-*</code> — Border colors</li>
              <li><code>color-icon-*</code> — Icon colors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Individual pages for each category
export const Primary = {
  name: 'Primary',
  render: () => (
    <div className="p-8 max-w-6xl">
      <SemanticSection {...SEMANTIC_COLORS.primary} />
    </div>
  ),
};

export const Secondary = {
  name: 'Secondary',
  render: () => (
    <div className="p-8 max-w-6xl">
      <SemanticSection {...SEMANTIC_COLORS.secondary} />
    </div>
  ),
};

export const Feedback = {
  name: 'Feedback',
  render: () => (
    <div className="p-8 max-w-6xl">
      <SemanticSection {...SEMANTIC_COLORS.feedback} />
    </div>
  ),
};

export const Neutral = {
  name: 'Neutral',
  render: () => (
    <div className="p-8 max-w-6xl">
      <SemanticSection {...SEMANTIC_COLORS.neutral} />
    </div>
  ),
};
