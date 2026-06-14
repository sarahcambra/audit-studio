import React from 'react';
import {
  CheckCircle,
  Plus,
  Trash2,
  ChevronRight,
  Settings,
  Download,
  Loader2,
  Search
} from 'lucide-react';

// Icon mapping for playground
const ICONS = {
  none: null,
  check: CheckCircle,
  plus: Plus,
  trash: Trash2,
  chevron: ChevronRight,
  settings: Settings,
  download: Download,
  loader: Loader2,
  search: Search,
};

const BUTTON_VARIANTS = [
  { name: 'Primary', className: 'bg-primary-700 text-white hover:bg-primary-800', usage: 'Main CTAs, important actions' },
  { name: 'Secondary', className: 'bg-secondary-600 text-white hover:bg-secondary-700', usage: 'Secondary actions' },
  { name: 'Success', className: 'bg-emerald-600 text-white hover:bg-emerald-700', usage: 'Positive confirmations' },
  { name: 'Danger', className: 'bg-red-600 text-white hover:bg-red-700', usage: 'Destructive actions' },
  { name: 'Ghost', className: 'bg-transparent text-primary-700 hover:bg-primary-50', usage: 'Low emphasis' },
  { name: 'Outline', className: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50', usage: 'Alternative to secondary' },
];

const BUTTON_SIZES = [
  { name: 'Small', className: 'px-3 py-1.5 text-sm', px: '12px 24px' },
  { name: 'Default', className: 'px-4 py-2 text-base', px: '16px 32px' },
  { name: 'Large', className: 'px-6 py-3 text-lg', px: '24px 48px' },
];

export default {
  title: 'Components/Button',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Buttons trigger actions or navigate. Use variants to communicate importance and size for hierarchy.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'ghost', 'outline', 'link'],
      description: 'Visual style of the button',
      table: { category: 'Appearance' },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size of the button',
      table: { category: 'Appearance' },
    },
    block: {
      control: { type: 'boolean' },
      description: 'Make button full-width (block)',
      table: { category: 'Appearance' },
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'active', 'focus', 'disabled'],
      description: 'Visual state to preview',
      table: { category: 'Appearance' },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
      table: { category: 'State' },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading spinner',
      table: { category: 'State' },
    },
    leadingIcon: {
      control: { type: 'select' },
      options: ['none', 'check', 'plus', 'trash', 'download', 'search'],
      description: 'Icon before the label',
      table: { category: 'Content' },
    },
    trailingIcon: {
      control: { type: 'select' },
      options: ['none', 'chevron', 'settings'],
      description: 'Icon after the label',
      table: { category: 'Content' },
    },
    label: {
      control: { type: 'text' },
      description: 'Button label text',
      table: { category: 'Content' },
    },
  },
  args: {
    variant: 'primary',
    size: 'default',
    block: false,
    state: 'default',
    disabled: false,
    loading: false,
    leadingIcon: 'none',
    trailingIcon: 'none',
    label: 'Button',
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Button</h1>
        <p className="text-gray-600">
          Buttons trigger actions or navigate. Use variants to communicate importance.
        </p>
      </div>

      {/* Variants */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Variants</h2>
        <div className="flex flex-wrap gap-4">
          {BUTTON_VARIANTS.map((variant) => (
            <button
              key={variant.name}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${variant.className}`}
            >
              {variant.name}
            </button>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-500">
          {BUTTON_VARIANTS.map((variant) => (
            <div key={variant.name}>
              <span className="font-medium text-gray-700">{variant.name}:</span> {variant.usage}
            </div>
          ))}
        </div>
      </section>

      {/* Link Style */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Link Style</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-sm text-gray-500">Used for:</span>
          <button className="text-sm font-medium text-primary-600 underline hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300">
            Scan now
          </button>
          <button className="text-sm font-medium text-primary-600 underline hover:text-primary-800">
            View details
          </button>
          <button className="text-sm font-medium text-primary-600 underline hover:text-primary-800">
            Edit settings
          </button>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Link buttons look like text links but behave like buttons. Use for secondary actions that need to stand out less than regular buttons.
        </p>
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          {BUTTON_SIZES.map((size) => (
            <button
              key={size.name}
              className={`bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-800 ${size.className}`}
            >
              {size.name} Button
            </button>
          ))}
        </div>
      </section>

      {/* Block Buttons */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Block (Full Width)</h2>
        <div className="max-w-md space-y-3">
          <button className="w-full px-4 py-2 bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-800">
            Block Button (Primary)
          </button>
          <button className="w-full px-4 py-2 bg-transparent border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50">
            Block Button (Outline)
          </button>
          <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700">
            Block Button (Danger)
          </button>
        </div>
      </section>

      {/* With Icons */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-800 flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Item
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 flex items-center gap-2">
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
          <button className="px-4 py-2 bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-800 flex items-center gap-2">
            Continue
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Success
          </button>
        </div>
      </section>

      {/* Loading State */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Loading State</h2>
        <div className="flex flex-wrap gap-4">
          <button
            disabled
            className="px-4 py-2 bg-primary-700 text-white rounded-lg font-medium opacity-70 cursor-not-allowed flex items-center gap-2"
          >
            <Loader2 className="w-4 h-4 animate-spin" />
            Loading...
          </button>
          <button
            disabled
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium opacity-70 cursor-not-allowed flex items-center gap-2"
          >
            <Loader2 className="w-4 h-4 animate-spin" />
            Saving...
          </button>
        </div>
      </section>

      {/* States */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">States</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-primary-700 text-white rounded-lg font-medium">
            Default
          </button>
          <button className="px-4 py-2 bg-primary-800 text-white rounded-lg font-medium">
            Hover
          </button>
          <button className="px-4 py-2 bg-primary-900 text-white rounded-lg font-medium">
            Active
          </button>
          <button className="px-4 py-2 bg-primary-700 text-white rounded-lg font-medium ring-2 ring-offset-2 ring-primary-300">
            Focus
          </button>
          <button
            disabled
            className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed"
          >
            Disabled
          </button>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">Do</h3>
            <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
              <li>Use Primary for the most important action</li>
              <li>Use Ghost or Outline for secondary actions</li>
              <li>Use Link style for subtle actions</li>
              <li>Keep button text concise (1-3 words)</li>
              <li>Use Danger for destructive actions only</li>
              <li>Disabled state for unavailable actions</li>
            </ul>
          </div>
          <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
            <h3 className="font-semibold text-red-900 mb-2">Don't</h3>
            <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
              <li>Don't use multiple Primary buttons in one view</li>
              <li>Don't use Danger for non-destructive actions</li>
              <li>Don't make buttons too small for touch targets</li>
              <li>Don't use vague labels like "Click Here"</li>
              <li>Don't disable without explanation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Props Table */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                  Prop
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                  Default
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-gray-900">variant</td>
                <td className="px-4 py-3 text-sm text-gray-600">string</td>
                <td className="px-4 py-3 text-sm text-gray-600">'primary'</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  Visual style: primary, secondary, success, danger, ghost, outline, link
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-gray-900">size</td>
                <td className="px-4 py-3 text-sm text-gray-600">string</td>
                <td className="px-4 py-3 text-sm text-gray-600">'default'</td>
                <td className="px-4 py-3 text-sm text-gray-600">Button size: small, default, large</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-gray-900">block</td>
                <td className="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600">false</td>
                <td className="px-4 py-3 text-sm text-gray-600">Make button full-width</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-gray-900">disabled</td>
                <td className="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600">false</td>
                <td className="px-4 py-3 text-sm text-gray-600">Whether the button is disabled</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-gray-900">loading</td>
                <td className="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600">false</td>
                <td className="px-4 py-3 text-sm text-gray-600">Show loading spinner</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-gray-900">leadingIcon</td>
                <td className="px-4 py-3 text-sm text-gray-600">IconComponent</td>
                <td className="px-4 py-3 text-sm text-gray-600">-</td>
                <td className="px-4 py-3 text-sm text-gray-600">Icon displayed before the label</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-gray-900">trailingIcon</td>
                <td className="px-4 py-3 text-sm text-gray-600">IconComponent</td>
                <td className="px-4 py-3 text-sm text-gray-600">-</td>
                <td className="px-4 py-3 text-sm text-gray-600">Icon displayed after the label</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-gray-900">onClick</td>
                <td className="px-4 py-3 text-sm text-gray-600">function</td>
                <td className="px-4 py-3 text-sm text-gray-600">-</td>
                <td className="px-4 py-3 text-sm text-gray-600">Click event handler</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-gray-900">label</td>
                <td className="px-4 py-3 text-sm text-gray-600">string</td>
                <td className="px-4 py-3 text-sm text-gray-600">'Button'</td>
                <td className="px-4 py-3 text-sm text-gray-600">Button label text</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  ),
};

// Playground with native Storybook controls
export const Playground = {
  name: 'Playground',
  render: (args) => {
    // Base variant classes (without hover states for non-default states)
    const variantClasses = {
      primary: {
        default: 'bg-primary-700 text-white',
        hover: 'bg-primary-800 text-white',
        active: 'bg-primary-900 text-white',
        focus: 'bg-primary-700 text-white ring-2 ring-offset-2 ring-primary-300',
        disabled: 'bg-primary-700 text-white opacity-50 cursor-not-allowed',
      },
      secondary: {
        default: 'bg-secondary-600 text-white',
        hover: 'bg-secondary-700 text-white',
        active: 'bg-secondary-800 text-white',
        focus: 'bg-secondary-600 text-white ring-2 ring-offset-2 ring-secondary-300',
        disabled: 'bg-secondary-600 text-white opacity-50 cursor-not-allowed',
      },
      success: {
        default: 'bg-emerald-600 text-white',
        hover: 'bg-emerald-700 text-white',
        active: 'bg-emerald-800 text-white',
        focus: 'bg-emerald-600 text-white ring-2 ring-offset-2 ring-emerald-300',
        disabled: 'bg-emerald-600 text-white opacity-50 cursor-not-allowed',
      },
      danger: {
        default: 'bg-red-600 text-white',
        hover: 'bg-red-700 text-white',
        active: 'bg-red-800 text-white',
        focus: 'bg-red-600 text-white ring-2 ring-offset-2 ring-red-300',
        disabled: 'bg-red-600 text-white opacity-50 cursor-not-allowed',
      },
      ghost: {
        default: 'bg-transparent text-primary-700',
        hover: 'bg-primary-50 text-primary-800',
        active: 'bg-primary-100 text-primary-900',
        focus: 'bg-primary-50 text-primary-700 ring-2 ring-offset-2 ring-primary-300',
        disabled: 'bg-transparent text-primary-700 opacity-50 cursor-not-allowed',
      },
      outline: {
        default: 'bg-transparent border border-gray-300 text-gray-700',
        hover: 'bg-gray-50 border-gray-400 text-gray-800',
        active: 'bg-gray-100 border-gray-500 text-gray-900',
        focus: 'bg-gray-50 border-gray-300 text-gray-700 ring-2 ring-offset-2 ring-gray-300',
        disabled: 'bg-transparent border-gray-300 text-gray-700 opacity-50 cursor-not-allowed',
      },
      link: {
        default: 'bg-transparent text-primary-600 underline',
        hover: 'bg-transparent text-primary-800 underline',
        active: 'bg-transparent text-primary-900 underline',
        focus: 'bg-transparent text-primary-600 underline ring-2 ring-offset-2 ring-primary-300',
        disabled: 'bg-transparent text-primary-600 underline opacity-50 cursor-not-allowed',
      },
    };

    const sizeClasses = {
      small: 'px-3 py-1.5 text-sm',
      default: 'px-4 py-2 text-base',
      large: 'px-6 py-3 text-lg',
    };

    const LeadingIconComponent = ICONS[args.leadingIcon];
    const TrailingIconComponent = ICONS[args.trailingIcon];

    const isDisabled = args.disabled || args.loading || args.state === 'disabled';

    return (
      <div className="flex items-center justify-center p-20 min-h-[400px] bg-gray-50">
        <button
          className={`rounded-lg font-medium transition-all inline-flex items-center gap-2 ${
            variantClasses[args.variant][args.state]
          } ${sizeClasses[args.size]} ${
            args.block ? 'w-full justify-center' : ''
          } ${
            args.variant === 'link' ? 'text-sm' : ''
          }`}
          disabled={isDisabled}
        >
          {args.loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {!args.loading && LeadingIconComponent && <LeadingIconComponent className="w-4 h-4" />}
          {args.label}
          {!args.loading && TrailingIconComponent && <TrailingIconComponent className="w-4 h-4" />}
        </button>
      </div>
    );
  },
};
