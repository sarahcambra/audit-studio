import { Badge } from '../../shared/ui/Badge';
import { Status } from '../../shared/ui/Status';

const COLORS = ['gray', 'blue', 'green', 'yellow', 'red', 'purple'];

const SIZES = [
  { name: 'Small', key: 'sm', usage: 'Inline with text, compact UI' },
  { name: 'Medium', key: 'md', usage: 'Default, most common' },
  { name: 'Large', key: 'lg', usage: 'Standalone, prominent display' },
];

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Badges display category labels. For status indicators with dots, use the Status component.',
      },
    },
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: COLORS,
      description: 'Badge color',
      table: { category: 'Appearance' },
    },
    variant: {
      control: { type: 'select' },
      options: ['subtle', 'solid'],
      description: 'Visual style',
      table: { category: 'Appearance' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Badge size',
      table: { category: 'Appearance' },
    },
    children: {
      control: 'text',
      description: 'Badge label text',
      table: { category: 'Content' },
    },
  },
  args: {
    color: 'gray',
    variant: 'subtle',
    size: 'md',
    children: 'Badge',
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Badge</h1>
        <p className="text-gray-600">
          Badges display category labels, versions, or types. For status indicators with dots,
          use the <code>Status</code> component.
        </p>
      </div>

      {/*  Subtle (Default)  */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Subtle (Default)</h2>
        <div className="flex flex-wrap gap-2">
          {COLORS.map((color) => (
            <Badge key={color} color={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Badge>
          ))}
        </div>
      </section>

      {/*  Solid  */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Solid</h2>
        <div className="flex flex-wrap gap-2">
          {COLORS.map((color) => (
            <Badge key={color} color={color} variant="solid">
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Badge>
          ))}
        </div>
      </section>

      {/*  Sizes  */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Sizes</h2>
        <div className="flex flex-wrap items-center gap-6">
          {SIZES.map((size) => (
            <div key={size.key} className="flex items-center gap-2">
              <Badge size={size.key} color="blue">
                {size.name}
              </Badge>
              <span className="text-sm text-gray-500">{size.usage}</span>
            </div>
          ))}
        </div>
      </section>

      {/*  Usage Examples  */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Usage Examples</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Impact Levels (Category Labels)</h3>
            <div className="flex gap-2">
              <Badge color="red" size="sm">Critical</Badge>
              <Badge color="yellow" size="sm">Serious</Badge>
              <Badge color="blue" size="sm">Moderate</Badge>
              <Badge color="gray" size="sm">Minor</Badge>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-3">WCAG Version</h3>
            <div className="flex gap-2">
              <Badge color="purple" size="sm">WCAG 2.2</Badge>
              <Badge color="purple" size="sm">WCAG 2.1</Badge>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Scope Types</h3>
            <div className="flex gap-2">
              <Badge color="blue" size="sm">Page</Badge>
              <Badge color="purple" size="sm">User Flow</Badge>
              <Badge color="yellow" size="sm">Component</Badge>
            </div>
          </div>
        </div>
      </section>

      {/*  Status Component (with dots)  */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Status Component (with dots)</h2>
        <p className="text-gray-600 mb-4">
          Use <code>Status</code> for live states and activity indicators.
          This is separate from Badge because it includes a colored dot.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Status color="green">Active</Status>
          <Status color="yellow">Pending</Status>
          <Status color="blue" pulse>Scanning</Status>
          <Status color="red">Error</Status>
        </div>
      </section>

      {/*  Guidelines  */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">Do</h3>
            <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
              <li>Use Badge for categories, labels, versions</li>
              <li>Use Status (with dot) for live states</li>
              <li>Keep labels short (1-2 words)</li>
              <li>Use subtle variant by default</li>
            </ul>
          </div>
          <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
            <h3 className="font-semibold text-red-900 mb-2">Don't</h3>
            <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
              <li>Don't use Badge for states that change (use Status)</li>
              <li>Don't use long text in badges</li>
              <li>Don't mix Badge and Status arbitrarily</li>
            </ul>
          </div>
        </div>
      </section>

      {/*  Props Table  */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Prop</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Default</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-gray-900">color</td>
                <td className="px-4 py-3 text-sm text-gray-600">'gray' | 'blue' | 'green' | 'yellow' | 'red' | 'purple'</td>
                <td className="px-4 py-3 text-sm text-gray-600">'gray'</td>
                <td className="px-4 py-3 text-sm text-gray-600">Badge color</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-gray-900">variant</td>
                <td className="px-4 py-3 text-sm text-gray-600">'subtle' | 'solid'</td>
                <td className="px-4 py-3 text-sm text-gray-600">'subtle'</td>
                <td className="px-4 py-3 text-sm text-gray-600">Visual style</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-gray-900">size</td>
                <td className="px-4 py-3 text-sm text-gray-600">'sm' | 'md' | 'lg'</td>
                <td className="px-4 py-3 text-sm text-gray-600">'md'</td>
                <td className="px-4 py-3 text-sm text-gray-600">Badge size</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  ),
};

// Playground with full controls
export const Playground = {
  name: 'Playground',
  render: (args) => (
    <div className="flex items-center justify-center p-20 min-h-[400px] bg-gray-50">
      <Badge
        color={args.color}
        variant={args.variant}
        size={args.size}
      >
        {args.children}
      </Badge>
    </div>
  ),
  argTypes: {
    color: {
      control: { type: 'select' },
      options: COLORS,
    },
    variant: {
      control: { type: 'select' },
      options: ['subtle', 'solid'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    children: {
      control: 'text',
    },
  },
  args: {
    color: 'blue',
    variant: 'subtle',
    size: 'md',
    children: 'Badge',
  },
};
