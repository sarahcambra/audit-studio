import React, { useState } from 'react';

// Color data for contrast calculations
const COLORS = {
  white: { name: 'White', hex: '#fcfcfd' },
  gray100: { name: 'Gray 100', hex: '#f3f4f6' },
  gray200: { name: 'Gray 200', hex: '#e5e7eb' },
  gray300: { name: 'Gray 300', hex: '#d1d5db' },
  gray400: { name: 'Gray 400', hex: '#9ca3af' },
  gray500: { name: 'Gray 500', hex: '#6b7280' },
  gray600: { name: 'Gray 600', hex: '#4b5563' },
  gray700: { name: 'Gray 700', hex: '#374151' },
  gray800: { name: 'Gray 800', hex: '#1f2937' },
  gray900: { name: 'Gray 900', hex: '#111827' },
  black: { name: 'Black', hex: '#030712' },
  primary700: { name: 'Primary 700', hex: '#7C3AED' },
  primary600: { name: 'Primary 600', hex: '#6d28d9' },
  primary500: { name: 'Primary 500', hex: '#8b5cf6' },
  success600: { name: 'Success 600', hex: '#237f49' },
  success500: { name: 'Success 500', hex: '#2e9d5b' },
  danger600: { name: 'Danger 600', hex: '#b4233d' },
  danger500: { name: 'Danger 500', hex: '#d92d4c' },
  warning600: { name: 'Warning 600', hex: '#b86406' },
  warning500: { name: 'Warning 500', hex: '#db7b09' },
  info600: { name: 'Info 600', hex: '#1477b0' },
  info500: { name: 'Info 500', hex: '#1f93d3' },
};

// Calculate contrast ratio between two colors
function getContrastRatio(hex1, hex2) {
  const luminance1 = getLuminance(hex1);
  const luminance2 = getLuminance(hex2);
  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);
  return (lighter + 0.05) / (darker + 0.05);
}

function getLuminance(hex) {
  const rgb = hexToRgb(hex);
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((val) => {
    const sRGB = val / 255;
    return sRGB <= 0.03928
      ? sRGB / 12.92
      : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

function getContrastRating(ratio) {
  if (ratio >= 7) return { label: 'AAA', color: 'bg-green-600 text-white' };
  if (ratio >= 4.5) return { label: 'AA', color: 'bg-green-500 text-white' };
  if (ratio >= 3) return { label: 'AA Large', color: 'bg-yellow-500 text-gray-900' };
  return { label: 'Fail', color: 'bg-red-500 text-white' };
}

// Predefined accessible combinations
const ACCESSIBLE_COMBINATIONS = {
  text: [
    { fg: COLORS.gray900, bg: COLORS.white, usage: 'Primary text on white' },
    { fg: COLORS.gray700, bg: COLORS.white, usage: 'Secondary text on white' },
    { fg: COLORS.gray500, bg: COLORS.white, usage: 'Muted text on white' },
    { fg: COLORS.white, bg: COLORS.gray900, usage: 'Text on dark background' },
    { fg: COLORS.gray300, bg: COLORS.gray900, usage: 'Secondary text on dark' },
    { fg: COLORS.white, bg: COLORS.primary700, usage: 'Text on primary button' },
    { fg: COLORS.white, bg: COLORS.success600, usage: 'Text on success button' },
    { fg: COLORS.white, bg: COLORS.danger600, usage: 'Text on danger button' },
  ],
  borders: [
    { border: COLORS.gray200, bg: COLORS.white, usage: 'Default borders' },
    { border: COLORS.gray300, bg: COLORS.white, usage: 'Stronger borders' },
    { border: COLORS.gray700, bg: COLORS.gray900, usage: 'Dark mode borders' },
  ],
  interactive: [
    { default: COLORS.primary700, hover: COLORS.primary600, active: COLORS.primary800, usage: 'Primary button states' },
    { default: COLORS.success600, hover: COLORS.success500, usage: 'Success button' },
    { default: COLORS.danger600, hover: COLORS.danger500, usage: 'Danger button' },
    { default: COLORS.warning600, hover: COLORS.warning500, usage: 'Warning button' },
  ],
};

export default {
  title: 'Foundations/Colors/Accessible Colors',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'WCAG accessibility compliance for color combinations',
      },
    },
  },
};

// Contrast Matrix Component
const ContrastMatrixTable = () => {
  const [selectedBg, setSelectedBg] = useState(null);

  const backgrounds = [
    COLORS.white,
    COLORS.gray100,
    COLORS.gray200,
    COLORS.gray900,
    COLORS.black,
    COLORS.primary700,
    COLORS.success600,
    COLORS.danger600,
  ];

  const foregrounds = [
    COLORS.white,
    COLORS.gray300,
    COLORS.gray400,
    COLORS.gray500,
    COLORS.gray600,
    COLORS.gray700,
    COLORS.gray800,
    COLORS.gray900,
    COLORS.black,
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-left text-xs font-semibold text-gray-600 sticky left-0 bg-white z-10">
              Background
            </th>
            {foregrounds.map((fg) => (
              <th key={fg.name} className="p-2 text-center">
                <div
                  className="w-8 h-8 rounded mx-auto border border-gray-200"
                  style={{ backgroundColor: fg.hex }}
                  title={fg.name}
                />
                <span className="text-[10px] text-gray-500 mt-1 block">{fg.name.split(' ')[0]}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {backgrounds.map((bg) => (
            <tr key={bg.name} className="border-b border-gray-100">
              <td className="p-2 sticky left-0 bg-white z-10">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded border border-gray-200"
                    style={{ backgroundColor: bg.hex }}
                  />
                  <span className="text-xs text-gray-600 whitespace-nowrap">{bg.name}</span>
                </div>
              </td>
              {foregrounds.map((fg) => {
                const ratio = getContrastRatio(fg.hex, bg.hex);
                const rating = getContrastRating(ratio);

                return (
                  <td key={fg.name} className="p-1 text-center">
                    <div
                      className="w-12 h-12 mx-auto rounded flex items-center justify-center text-sm font-bold cursor-pointer hover:ring-2 hover:ring-primary-500 transition-all border border-gray-100"
                      style={{
                        backgroundColor: bg.hex,
                        color: fg.hex,
                      }}
                      title={`${fg.name} on ${bg.name}: ${ratio.toFixed(2)}:1 (${rating.label})`}
                    >
                      Aa
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Accessible Colors</h1>
        <p className="text-gray-600">
          WCAG 2.2 AA compliance guidelines for color combinations. All color pairings used in the design system meet minimum contrast requirements.
        </p>
      </div>

      {/* WCAG Requirements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">AA</div>
            <h3 className="font-semibold text-green-900">Normal Text</h3>
          </div>
          <p className="text-sm text-green-800">4.5:1 contrast ratio minimum</p>
          <p className="text-xs text-green-600 mt-1">Required for body text and UI components</p>
        </div>

        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-gray-900 text-xs font-bold">AA</div>
            <h3 className="font-semibold text-yellow-900">Large Text</h3>
          </div>
          <p className="text-sm text-yellow-800">3:1 contrast ratio minimum</p>
          <p className="text-xs text-yellow-600 mt-1">18px+ text or 14px+ bold</p>
        </div>

        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold">AAA</div>
            <h3 className="font-semibold text-green-900">Enhanced</h3>
          </div>
          <p className="text-sm text-green-800">7:1 contrast ratio minimum</p>
          <p className="text-xs text-green-600 mt-1">Recommended for optimal readability</p>
        </div>
      </div>

      {/* Recommended Text Combinations */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended Text Combinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACCESSIBLE_COMBINATIONS.text.map((combo, index) => {
            const ratio = getContrastRatio(combo.fg.hex, combo.bg.hex).toFixed(2);
            return (
              <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                <div
                  className="w-24 h-16 rounded-lg flex items-center justify-center px-3"
                  style={{ backgroundColor: combo.bg.hex }}
                >
                  <span style={{ color: combo.fg.hex, fontSize: '14px' }}>
                    Text
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 font-medium">{combo.usage}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {combo.fg.name} on {combo.bg.name}
                  </p>
                  <p className="text-xs font-semibold text-green-600 mt-1">
                    {ratio}:1 ratio
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive States */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACCESSIBLE_COMBINATIONS.interactive.map((combo, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-900 font-medium mb-3">{combo.usage}</p>
              <div className="flex gap-2">
                <div
                  className="px-4 py-2 rounded-lg text-white text-sm font-medium"
                  style={{ backgroundColor: combo.default.hex }}
                >
                  Default
                </div>
                <div
                  className="px-4 py-2 rounded-lg text-white text-sm font-medium"
                  style={{ backgroundColor: combo.hover.hex }}
                >
                  Hover
                </div>
                {combo.active && (
                  <div
                    className="px-4 py-2 rounded-lg text-white text-sm font-medium"
                    style={{ backgroundColor: combo.active.hex }}
                  >
                    Active
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const ContrastMatrix = {
  name: 'Contrast Matrix',
  render: () => (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Contrast Matrix</h2>
        <p className="text-gray-600">
          WCAG compliance for all foreground and background color combinations.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Each cell shows the foreground color as text on the background color. Hover to see the contrast ratio.
        </p>
      </div>

      <div className="p-4 bg-white border border-gray-200 rounded-lg">
        <ContrastMatrixTable />
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Each cell displays the foreground color as "Aa" text on the background color. Hover over any cell to see the exact contrast ratio and WCAG rating. Values are calculated using the WCAG luminance formula.
      </p>
    </div>
  ),
};

export const ColorBlindness = {
  name: 'Color Blindness',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Color Blindness Simulation</h2>
        <p className="text-gray-600">
          How our color palette appears to users with different types of color vision deficiency.
          Always pair color with icons or text labels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Normal Vision */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Normal Vision</h3>
          <div className="flex gap-2">
            {['#7C3AED', '#2e9d5b', '#d92d4c', '#db7b09', '#1f93d3'].map((color) => (
              <div
                key={color}
                className="w-16 h-16 rounded-lg shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">Primary, Success, Danger, Warning, Info</p>
        </div>

        {/* Deuteranopia (Green-Blind) */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Deuteranopia (Green-Blind)</h3>
          <div className="flex gap-2">
            {['#7C3AED', '#8a8a8a', '#c45c5c', '#c49c5c', '#5c9cc4'].map((color, i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-lg shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">Success and neutral colors appear similar</p>
        </div>

        {/* Protanopia (Red-Blind) */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Protanopia (Red-Blind)</h3>
          <div className="flex gap-2">
            {['#3c3c9c', '#8a8a8a', '#9c9c9c', '#b49c5c', '#5c9cb4'].map((color, i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-lg shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">Danger becomes harder to distinguish</p>
        </div>

        {/* Tritanopia (Blue-Blind) */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Tritanopia (Blue-Blind)</h3>
          <div className="flex gap-2">
            {['#5c3c8a', '#5c8a5c', '#b45c5c', '#b48a5c', '#8a8a8a'].map((color, i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-lg shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">Info color becomes neutral</p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-semibold text-yellow-900 mb-2">Accessibility Note</h4>
        <p className="text-sm text-yellow-800">
          Never rely on color alone to convey meaning. Always include icons, text labels, or patterns
          alongside color coding. For example, error messages should include an error icon and descriptive text.
        </p>
      </div>
    </div>
  ),
};
