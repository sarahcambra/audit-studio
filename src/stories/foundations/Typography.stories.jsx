import React from 'react';

const TYPOGRAPHY_DATA = {
  fontFamilies: [
    {
      name: 'Sans Serif',
      token: 'font-sans',
      value: 'Roboto, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif',
      usage: 'Headings, UI text, body copy',
      example: 'The quick brown fox jumps over the lazy dog',
    },
    {
      name: 'Body',
      token: 'font-body',
      value: 'Open Sans, ui-sans-serif, system-ui, -apple-system, sans-serif',
      usage: 'Long-form reading text',
      example: 'The quick brown fox jumps over the lazy dog',
    },
    {
      name: 'Monospace',
      token: 'font-mono',
      value: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      usage: 'Code, token names, technical content',
      example: 'const x = 42;',
    },
  ],
  fontSizes: [
    { token: 'text-xs', value: '0.75rem', px: '12px', lineHeight: '1rem', usage: 'Badges, labels' },
    { token: 'text-sm', value: '0.875rem', px: '14px', lineHeight: '1.25rem', usage: 'Secondary text' },
    { token: 'text-base', value: '1rem', px: '16px', lineHeight: '1.5rem', usage: 'Body text' },
    { token: 'text-lg', value: '1.125rem', px: '18px', lineHeight: '1.75rem', usage: 'Large body' },
    { token: 'text-xl', value: '1.25rem', px: '20px', lineHeight: '1.75rem', usage: 'H6' },
    { token: 'text-2xl', value: '1.5rem', px: '24px', lineHeight: '2rem', usage: 'H5' },
    { token: 'text-3xl', value: '1.875rem', px: '30px', lineHeight: '2.25rem', usage: 'H4' },
    { token: 'text-4xl', value: '2.25rem', px: '36px', lineHeight: '2.5rem', usage: 'H3' },
    { token: 'text-5xl', value: '3rem', px: '48px', lineHeight: '1', usage: 'H2' },
    { token: 'text-6xl', value: '3.75rem', px: '60px', lineHeight: '1', usage: 'H1' },
  ],
  fontWeights: [
    { token: 'font-light', value: '300', usage: 'Large display text' },
    { token: 'font-normal', value: '400', usage: 'Body text' },
    { token: 'font-medium', value: '500', usage: 'Emphasis, buttons' },
    { token: 'font-semibold', value: '600', usage: 'Subheadings, labels' },
    { token: 'font-bold', value: '700', usage: 'Headings' },
  ],
  lineHeights: [
    { token: 'leading-none', value: '1', usage: 'Headings' },
    { token: 'leading-tight', value: '1.25', usage: 'Compact text' },
    { token: 'leading-snug', value: '1.375', usage: 'Slightly tight' },
    { token: 'leading-normal', value: '1.5', usage: 'Default body' },
    { token: 'leading-relaxed', value: '1.625', usage: 'Comfortable reading' },
    { token: 'leading-loose', value: '2', usage: 'Large headings' },
  ],
};

export default {
  title: 'Foundations/Typography/Overview',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Typography system with font families, sizes, weights, and spacing',
      },
    },
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Typography</h1>
        <p className="text-gray-600">
          A comprehensive type system built for readability and hierarchy. All text meets WCAG AA accessibility standards.
        </p>
      </div>

      {/* Font Families */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Font Families</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TYPOGRAPHY_DATA.fontFamilies.map((font) => (
            <div key={font.token} className="p-6 bg-white border border-gray-200 rounded-lg">
              <div className="mb-4">
                <span className="font-mono text-sm text-gray-500">{font.token}</span>
                <h3 className="font-semibold text-gray-900 mt-1">{font.name}</h3>
              </div>
              <p
                className="text-xl mb-4"
                style={{ fontFamily: font.value.split(',')[0].replace(/"/g, '') }}
              >
                {font.example}
              </p>
              <p className="text-sm text-gray-600">{font.usage}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Type Scale */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Type Scale</h2>
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">Token</th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">Value</th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">Preview</th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">Line Height</th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase">Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {TYPOGRAPHY_DATA.fontSizes.map((size) => (
                <tr key={size.token} className="hover:bg-gray-50">
                  <td className="py-4 px-4 font-mono text-sm text-gray-900">{size.token}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{size.value} ({size.px})</td>
                  <td className="py-4 px-4">
                    <span style={{ fontSize: size.px }}>Aa</span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{size.lineHeight}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{size.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Font Weights */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Font Weights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TYPOGRAPHY_DATA.fontWeights.map((weight) => (
            <div key={weight.token} className="p-4 bg-white border border-gray-200 rounded-lg text-center">
              <div
                className="text-2xl mb-2"
                style={{ fontWeight: weight.value }}
              >
                Aa
              </div>
              <p className="font-mono text-sm text-gray-900">{weight.token}</p>
              <p className="text-xs text-gray-500">{weight.value}</p>
              <p className="text-xs text-gray-400 mt-1">{weight.usage}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Line Heights */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Line Heights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TYPOGRAPHY_DATA.lineHeights.map((lineHeight) => (
            <div key={lineHeight.token} className="p-4 bg-white border border-gray-200 rounded-lg">
              <div className="mb-3">
                <span className="font-mono text-sm text-gray-900">{lineHeight.token}</span>
                <span className="text-xs text-gray-400 ml-2">{lineHeight.value}</span>
              </div>
              <p
                className="text-sm text-gray-700"
                style={{ lineHeight: lineHeight.value }}
              >
                The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
              </p>
              <p className="text-xs text-gray-400 mt-2">{lineHeight.usage}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Heading Hierarchy */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Heading Hierarchy</h2>
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <div className="space-y-6">
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-gray-400 w-12">H1</span>
              <h1 className="text-6xl font-bold text-gray-900">Heading 1</h1>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-gray-400 w-12">H2</span>
              <h2 className="text-5xl font-bold text-gray-900">Heading 2</h2>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-gray-400 w-12">H3</span>
              <h3 className="text-4xl font-bold text-gray-900">Heading 3</h3>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-gray-400 w-12">H4</span>
              <h4 className="text-3xl font-bold text-gray-900">Heading 4</h4>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-gray-400 w-12">H5</span>
              <h5 className="text-2xl font-bold text-gray-900">Heading 5</h5>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-gray-400 w-12">H6</span>
              <h6 className="text-xl font-bold text-gray-900">Heading 6</h6>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">In Tailwind CSS</h3>
            <pre className="text-xs text-gray-700 bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto">
{`<!-- Font family -->
<p class="font-sans">Sans-serif text</p>
<code class="font-mono">Monospace text</code>

<!-- Font size -->
<h1 class="text-4xl">Large heading</h1>
<p class="text-base">Body text</p>

<!-- Font weight -->
<p class="font-bold">Bold text</p>
<p class="font-medium">Medium weight</p>

<!-- Line height -->
<p class="leading-relaxed">Comfortable reading</p>`}
            </pre>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>Minimum body text size: 16px (1rem)</li>
              <li>Line height should be 1.5x minimum for body text</li>
              <li>Use font-weight 400+ for body text readability</li>
              <li>Maintain proper heading hierarchy (H1 → H6)</li>
              <li>Never skip heading levels</li>
              <li>Ensure color contrast meets WCAG AA</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  ),
};

export const FontFamilies = {
  name: 'Font Families',
  render: () => (
    <div className="p-8 max-w-6xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Font Families</h2>
        <p className="text-gray-600">Three font families for different content types</p>
      </div>

      <div className="space-y-8">
        {TYPOGRAPHY_DATA.fontFamilies.map((font) => (
          <div key={font.token} className="p-6 bg-white border border-gray-200 rounded-lg">
            <div className="mb-4">
              <span className="font-mono text-sm text-gray-500">{font.token}</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">{font.name}</h3>              <p className="text-sm text-gray-600 mt-2">{font.usage}</p>
            </div>
            <div
              className="text-3xl py-4 border-t border-gray-100"
              style={{ fontFamily: font.value.split(',')[0].replace(/"/g, '') }}
            >
              {font.example}
            </div>
            <code className="text-xs text-gray-400 mt-2 block">{font.value}</code>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const TypeScale = {
  name: 'Type Scale',
  render: () => (
    <div className="p-8 max-w-6xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Type Scale</h2>
        <p className="text-gray-600">Consistent type scale from 12px to 60px</p>
      </div>

      <div className="space-y-4">
        {TYPOGRAPHY_DATA.fontSizes.map((size) => (
          <div key={size.token} className="flex items-center gap-6 py-4 border-b border-gray-100">
            <div className="w-32">
              <span className="font-mono text-sm text-gray-900">{size.token}</span>
              <p className="text-xs text-gray-400">{size.value}</p>
            </div>
            <div className="flex-1">
              <span style={{ fontSize: size.px }} className="text-gray-900">
                The quick brown fox
              </span>
            </div>
            <div className="w-32 text-right">
              <span className="text-xs text-gray-500">{size.usage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
