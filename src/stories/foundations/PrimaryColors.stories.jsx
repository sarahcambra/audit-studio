import React from 'react';

const PRIMARY_COLORS = {
  purple: {
    name: 'Primary Purple',
    token: 'primary',
    description: 'Brand color for CTAs, links, and primary actions. Primary-700 (#7C3AED) is the main brand color.',
    colors: [
      { shade: '25', hex: '#faf9ff', usage: 'Lightest backgrounds' },
      { shade: '50', hex: '#f5f3ff', usage: 'Hover states, subtle backgrounds' },
      { shade: '100', hex: '#ede9fe', usage: 'Light accents' },
      { shade: '200', hex: '#ddd6fe', usage: 'Borders, dividers' },
      { shade: '300', hex: '#c4b5fd', usage: 'Disabled states' },
      { shade: '400', hex: '#a78bfa', usage: 'Secondary accents' },
      { shade: '500', hex: '#8b5cf6', usage: 'Icons, secondary buttons' },
      { shade: '600', hex: '#6d28d9', usage: 'Hover on primary' },
      { shade: '700', hex: '#7C3AED', usage: 'Primary buttons, links' },
      { shade: '800', hex: '#5B21B6', usage: 'Active states' },
      { shade: '900', hex: '#4c1d95', usage: 'Text on light' },
      { shade: '950', hex: '#2e1065', usage: 'Dark text' },
    ],
  },
  gray: {
    name: 'Neutral Gray',
    token: 'gray',
    description: 'Text, backgrounds, borders, and UI elements. The foundation of the neutral palette.',
    colors: [
      { shade: '25', hex: '#fcfcfd', usage: 'Off-white surfaces' },
      { shade: '50', hex: '#F8F9FA', usage: 'Light backgrounds' },
      { shade: '100', hex: '#f3f4f6', usage: 'Hover states' },
      { shade: '200', hex: '#e5e7eb', usage: 'Borders, dividers' },
      { shade: '300', hex: '#d1d5db', usage: 'Disabled borders' },
      { shade: '400', hex: '#9ca3af', usage: 'Placeholder text' },
      { shade: '500', hex: '#6b7280', usage: 'Secondary text' },
      { shade: '600', hex: '#4b5563', usage: 'Subtle text' },
      { shade: '700', hex: '#374151', usage: 'Headings' },
      { shade: '800', hex: '#1f2937', usage: 'Body text dark' },
      { shade: '900', hex: '#111827', usage: 'Primary text dark' },
      { shade: '950', hex: '#030712', usage: 'Deep black' },
    ],
  },
  slate: {
    name: 'Secondary Slate',
    token: 'secondary',
    description: 'Cool neutral for secondary UI elements. Complements the primary purple.',
    colors: [
      { shade: '25', hex: '#f7f8fc', usage: 'Subtle backgrounds' },
      { shade: '50', hex: '#eef1f7', usage: 'Card backgrounds' },
      { shade: '100', hex: '#d9dfeb', usage: 'Borders' },
      { shade: '200', hex: '#bbc7db', usage: 'Subtle dividers' },
      { shade: '300', hex: '#97a8c8', usage: 'Icons' },
      { shade: '400', hex: '#7388b3', usage: 'Secondary icons' },
      { shade: '500', hex: '#586e9e', usage: 'Secondary text' },
      { shade: '600', hex: '#445684', usage: 'Labels' },
      { shade: '700', hex: '#34426a', usage: 'Headings' },
      { shade: '800', hex: '#25304f', usage: 'Dark UI' },
      { shade: '900', hex: '#171f36', usage: 'Dark backgrounds' },
      { shade: '950', hex: '#0c111f', usage: 'Deepest dark' },
    ],
  },
  emerald: {
    name: 'Emerald (Success)',
    token: 'emerald',
    description: 'Success states, confirmations, and positive actions. Maps to semantic color-success tokens.',
    colors: [
      { shade: '25', hex: '#f4fbf7', usage: 'Light success backgrounds' },
      { shade: '50', hex: '#e8f7ee', usage: 'Success alert backgrounds' },
      { shade: '100', hex: '#c7eed5', usage: 'Success borders' },
      { shade: '200', hex: '#9fdfb5', usage: 'Success hover states' },
      { shade: '300', hex: '#70cc92', usage: 'Success light accents' },
      { shade: '400', hex: '#49b876', usage: 'Success icons' },
      { shade: '500', hex: '#2e9d5b', usage: 'Success buttons' },
      { shade: '600', hex: '#237f49', usage: 'Success hover' },
      { shade: '700', hex: '#1b643a', usage: 'Success text' },
      { shade: '800', hex: '#13492b', usage: 'Success dark text' },
      { shade: '900', hex: '#0c2f1c', usage: 'Success deep accents' },
      { shade: '950', hex: '#04170d', usage: 'Success darkest' },
    ],
  },
  red: {
    name: 'Red (Danger)',
    token: 'red',
    description: 'Errors, destructive actions, and critical alerts. Maps to semantic color-danger tokens.',
    colors: [
      { shade: '25', hex: '#fff6f7', usage: 'Light error backgrounds' },
      { shade: '50', hex: '#ffe9eb', usage: 'Error alert backgrounds' },
      { shade: '100', hex: '#ffc9cf', usage: 'Error borders' },
      { shade: '200', hex: '#ffa0ab', usage: 'Error hover states' },
      { shade: '300', hex: '#ff7284', usage: 'Error light accents' },
      { shade: '400', hex: '#f0445e', usage: 'Error icons' },
      { shade: '500', hex: '#d92d4c', usage: 'Danger buttons' },
      { shade: '600', hex: '#b4233d', usage: 'Danger hover' },
      { shade: '700', hex: '#8f1c31', usage: 'Error text' },
      { shade: '800', hex: '#691424', usage: 'Error dark text' },
      { shade: '900', hex: '#450d18', usage: 'Error deep accents' },
      { shade: '950', hex: '#24060c', usage: 'Error darkest' },
    ],
  },
  orange: {
    name: 'Orange (Warning)',
    token: 'orange',
    description: 'Warnings, cautions, and attention needed. Maps to semantic color-warning tokens.',
    colors: [
      { shade: '25', hex: '#fff9f2', usage: 'Light warning backgrounds' },
      { shade: '50', hex: '#fff2e2', usage: 'Warning alert backgrounds' },
      { shade: '100', hex: '#ffe0b8', usage: 'Warning borders' },
      { shade: '200', hex: '#ffca85', usage: 'Warning hover states' },
      { shade: '300', hex: '#ffb04d', usage: 'Warning light accents' },
      { shade: '400', hex: '#f9961e', usage: 'Warning icons' },
      { shade: '500', hex: '#db7b09', usage: 'Warning buttons' },
      { shade: '600', hex: '#b86406', usage: 'Warning hover' },
      { shade: '700', hex: '#944e05', usage: 'Warning text' },
      { shade: '800', hex: '#6e3903', usage: 'Warning dark text' },
      { shade: '900', hex: '#472401', usage: 'Warning deep accents' },
      { shade: '950', hex: '#241200', usage: 'Warning darkest' },
    ],
  },
  cyan: {
    name: 'Cyan (Info)',
    token: 'cyan',
    description: 'Information, neutral alerts, and tips. Maps to semantic color-info tokens.',
    colors: [
      { shade: '25', hex: '#f4fafd', usage: 'Light info backgrounds' },
      { shade: '50', hex: '#e8f5fb', usage: 'Info alert backgrounds' },
      { shade: '100', hex: '#c5e6f7', usage: 'Info borders' },
      { shade: '200', hex: '#9dd5f1', usage: 'Info hover states' },
      { shade: '300', hex: '#6ec0e8', usage: 'Info light accents' },
      { shade: '400', hex: '#43aadf', usage: 'Info icons' },
      { shade: '500', hex: '#1f93d3', usage: 'Info buttons' },
      { shade: '600', hex: '#1477b0', usage: 'Info hover' },
      { shade: '700', hex: '#105d8a', usage: 'Info text' },
      { shade: '800', hex: '#0c4566', usage: 'Info dark text' },
      { shade: '900', hex: '#072d42', usage: 'Info deep accents' },
      { shade: '950', hex: '#031622', usage: 'Info darkest' },
    ],
  },
};

export default {
  title: 'Foundations/Colors/Primary Colors',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Primary color palette — the base colors without semantic meaning',
      },
    },
  },
};

const ColorSwatch = ({ shade, hex, usage, tokenPrefix, isBrand = false }) => (
  <div className="group">
    <div
      className={`h-20 w-full rounded-lg shadow-sm border mb-3 transition-transform group-hover:scale-105 ${
        isBrand ? 'ring-2 ring-offset-2 ring-primary-500' : 'border-gray-200'
      }`}
      style={{ backgroundColor: hex }}
    >
      {isBrand && (
        <div className="absolute top-2 right-2 bg-white/90 text-primary-700 text-[10px] font-bold px-2 py-1 rounded-full">
          Brand
        </div>
      )}
    </div>
    <div className="space-y-1">
      <p className="font-mono text-sm font-semibold text-gray-900">
        {tokenPrefix}-{shade}
      </p>
      <p className="font-mono text-xs text-gray-500 uppercase">{hex}</p>
      <p className="text-xs text-gray-400">{usage}</p>
    </div>
  </div>
);

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Primary Colors</h1>
        <p className="text-gray-600">
          The base color palette with 3 families and 12 shades each. These primitive tokens
          are the building blocks for semantic colors.
        </p>
      </div>

      {Object.entries(PRIMARY_COLORS).map(([key, family]) => (
        <section key={key} className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{family.name}</h2>
            <p className="text-gray-600">{family.description}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 gap-4">
            {family.colors.map((color) => (
              <ColorSwatch
                key={color.shade}
                {...color}
                tokenPrefix={family.token}
                isBrand={family.token === 'primary' && color.shade === '700'}
              />
            ))}
          </div>
        </section>
      ))}

      {/* Usage Guidelines */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Usage Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Primary Purple</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Primary-700: Main brand color, CTAs</li>
              <li>Primary-600: Hover states</li>
              <li>Primary-50-100: Light backgrounds</li>
              <li>Primary-300: Disabled states</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Neutral Gray</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Gray-900: Primary text</li>
              <li>Gray-500: Secondary text</li>
              <li>Gray-200: Borders</li>
              <li>Gray-50-100: Backgrounds</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Secondary Slate</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Secondary-500: Secondary text</li>
              <li>Secondary-300: Icons</li>
              <li>Secondary-100: Borders</li>
              <li>Secondary-50: Card backgrounds</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Emerald (Success)</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Emerald-500-600: Success buttons</li>
              <li>Emerald-700: Success text</li>
              <li>Emerald-50: Alert backgrounds</li>
              <li>Emerald-200: Success borders</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Red (Danger)</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Red-500-600: Danger buttons</li>
              <li>Red-700: Error text</li>
              <li>Red-50: Error alert backgrounds</li>
              <li>Red-200: Error borders</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Orange (Warning)</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Orange-500-600: Warning buttons</li>
              <li>Orange-700: Warning text</li>
              <li>Orange-50: Warning alert backgrounds</li>
              <li>Orange-200: Warning borders</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Cyan (Info)</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Cyan-500-600: Info buttons</li>
              <li>Cyan-700: Info text</li>
              <li>Cyan-50: Info alert backgrounds</li>
              <li>Cyan-200: Info borders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Purple = {
  name: 'Purple',
  render: () => (
    <div className="p-8 max-w-6xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Primary Purple</h2>
        <p className="text-gray-600">{PRIMARY_COLORS.purple.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {PRIMARY_COLORS.purple.colors.map((color) => (
          <ColorSwatch
            key={color.shade}
            {...color}
            tokenPrefix="primary"
            isBrand={color.shade === '700'}
          />
        ))}
      </div>
    </div>
  ),
};

export const Gray = {
  name: 'Gray',
  render: () => (
    <div className="p-8 max-w-6xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Neutral Gray</h2>
        <p className="text-gray-600">{PRIMARY_COLORS.gray.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {PRIMARY_COLORS.gray.colors.map((color) => (
          <ColorSwatch key={color.shade} {...color} tokenPrefix="gray" />
        ))}
      </div>
    </div>
  ),
};

export const Slate = {
  name: 'Slate',
  render: () => (
    <div className="p-8 max-w-6xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Secondary Slate</h2>
        <p className="text-gray-600">{PRIMARY_COLORS.slate.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {PRIMARY_COLORS.slate.colors.map((color) => (
          <ColorSwatch key={color.shade} {...color} tokenPrefix="secondary" />
        ))}
      </div>
    </div>
  ),
};

export const Emerald = {
  name: 'Emerald',
  render: () => (
    <div className="p-8 max-w-6xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Emerald (Success)</h2>
        <p className="text-gray-600">{PRIMARY_COLORS.emerald.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {PRIMARY_COLORS.emerald.colors.map((color) => (
          <ColorSwatch key={color.shade} {...color} tokenPrefix="emerald" />
        ))}
      </div>
    </div>
  ),
};

export const Red = {
  name: 'Red',
  render: () => (
    <div className="p-8 max-w-6xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Red (Danger)</h2>
        <p className="text-gray-600">{PRIMARY_COLORS.red.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {PRIMARY_COLORS.red.colors.map((color) => (
          <ColorSwatch key={color.shade} {...color} tokenPrefix="red" />
        ))}
      </div>
    </div>
  ),
};

export const Orange = {
  name: 'Orange',
  render: () => (
    <div className="p-8 max-w-6xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Orange (Warning)</h2>
        <p className="text-gray-600">{PRIMARY_COLORS.orange.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {PRIMARY_COLORS.orange.colors.map((color) => (
          <ColorSwatch key={color.shade} {...color} tokenPrefix="orange" />
        ))}
      </div>
    </div>
  ),
};

export const Cyan = {
  name: 'Cyan',
  render: () => (
    <div className="p-8 max-w-6xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Cyan (Info)</h2>
        <p className="text-gray-600">{PRIMARY_COLORS.cyan.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {PRIMARY_COLORS.cyan.colors.map((color) => (
          <ColorSwatch key={color.shade} {...color} tokenPrefix="cyan" />
        ))}
      </div>
    </div>
  ),
};
