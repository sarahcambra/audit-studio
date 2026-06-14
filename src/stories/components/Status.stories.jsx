import { Status, AuditStatus } from '../../shared/ui/Status';

const COLORS = ['gray', 'blue', 'green', 'yellow', 'red'];

export default {
  title: 'Components/Status',
  component: Status,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Status indicators with colored dots. Use for live states and activity.',
      },
    },
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: COLORS,
      description: 'Dot color',
      table: { category: 'Appearance' },
    },
    dot: {
      control: 'boolean',
      description: 'Show the colored dot',
      table: { category: 'Appearance' },
    },
    pulse: {
      control: 'boolean',
      description: 'Animate the dot (for in-progress states)',
      table: { category: 'Appearance' },
    },
    children: {
      control: 'text',
      description: 'Status label text',
      table: { category: 'Content' },
    },
  },
  args: {
    color: 'gray',
    dot: true,
    pulse: false,
    children: 'Status',
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Status</h1>
        <p className="text-gray-600">
          Status indicators show live states and activity with a colored dot.
          Use for states that change during a session.
          For category labels, use <code>Badge</code> instead.
        </p>
      </div>

      {/*  Colors  */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Colors</h2>
        <div className="flex flex-wrap gap-6">
          {COLORS.map((color) => (
            <Status key={color} color={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Status>
          ))}
        </div>
      </section>

      {/*  Pulse (Animated)  */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Pulse (Animated)</h2>
        <p className="text-gray-600 mb-4">Use pulse for in-progress or processing states.</p>
        <div className="flex flex-wrap gap-6">
          <Status color="blue" pulse>
            Scanning…
          </Status>
          <Status color="yellow" pulse>
            Processing…
          </Status>
          <Status color="green" pulse>
            Syncing…
          </Status>
        </div>
      </section>

      {/*  Without Dot  */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Without Dot</h2>
        <p className="text-gray-600 mb-4">Set <code>dot=false</code> to hide the dot when it's not needed.</p>
        <div className="flex flex-wrap gap-6">
          <Status color="gray" dot={false}>
            Archived
          </Status>
          <Status color="blue" dot={false}>
            Pending
          </Status>
        </div>
      </section>

      {/*  AuditStatus (Pre-configured)  */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">AuditStatus (Pre-configured)</h2>
        <p className="text-gray-600 mb-4">AuditStatus maps status values to colors automatically.</p>
        <div className="flex flex-wrap gap-6">
          <AuditStatus status="active" />
          <AuditStatus status="complete" />
          <AuditStatus status="pending" />
          <AuditStatus status="draft" />
          <AuditStatus status="archived" />
          <AuditStatus status="error" />
        </div>
      </section>

      {/*  Usage Examples  */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Usage Examples</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Audit States (in a table)</h3>
            <div className="flex flex-wrap gap-4">
              <AuditStatus status="active" />
              <AuditStatus status="complete" />
              <AuditStatus status="draft" />
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Scan Job Status</h3>
            <div className="flex flex-wrap gap-4">
              <Status color="green">Completed</Status>
              <Status color="blue" pulse>Running…</Status>
              <Status color="yellow">Queued</Status>
              <Status color="red">Failed</Status>
            </div>
          </div>
        </div>
      </section>

      {/*  Guidelines  */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">Do</h3>
            <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
              <li>Use Status for live states and activity</li>
              <li>Use pulse for in-progress states</li>
              <li>Keep labels short and descriptive</li>
            </ul>
          </div>
          <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
            <h3 className="font-semibold text-red-900 mb-2">Don't</h3>
            <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
              <li>Don't use Status for categories (use Badge)</li>
              <li>Don't use Status for static labels</li>
              <li>Don't mix Status and Badge arbitrarily</li>
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
                <td className="px-4 py-3 text-sm text-gray-600">'gray' | 'blue' | 'green' | 'yellow' | 'red'</td>
                <td className="px-4 py-3 text-sm text-gray-600">'gray'</td>
                <td className="px-4 py-3 text-sm text-gray-600">Dot color</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-gray-900">dot</td>
                <td className="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600">true</td>
                <td className="px-4 py-3 text-sm text-gray-600">Show colored dot</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-gray-900">pulse</td>
                <td className="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600">false</td>
                <td className="px-4 py-3 text-sm text-gray-600">Animate dot</td>
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
      <Status color={args.color} dot={args.dot} pulse={args.pulse}>
        {args.children}
      </Status>
    </div>
  ),
  args: {
    color: 'green',
    dot: true,
    pulse: false,
    children: 'Active',
  },
};
