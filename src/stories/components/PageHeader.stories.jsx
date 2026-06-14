import { PageHeader } from '../../shared/ui/PageHeader'
import { Button } from 'flowbite-react'
import { Plus, Settings, Download } from 'lucide-react'

export default {
  title: 'Components/Navigation/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'PageHeader provides consistent page titles with optional subtitle and action buttons.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Main page title',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle',
    },
    actions: {
      description: 'Action buttons',
    },
  },
}

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">PageHeader</h1>
        <p className="text-gray-600">
          PageHeader provides consistent page titles with optional subtitle and action buttons.
        </p>
      </div>

      <section className="mb-12 space-y-8">
        <div>
          <h2 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Basic</h2>
          <PageHeader title="Audits" subtitle="Manage and track accessibility audits" />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">With Actions</h2>
          <PageHeader
            title="Audits"
            subtitle="Manage and track accessibility audits"
            actions={(
              <>
                <Button color="gray" size="sm">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
                <Button color="primary" size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  New Audit
                </Button>
              </>
            )}
          />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Title Only</h2>
          <PageHeader title="Dashboard" />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Long Title</h2>
          <PageHeader
            title="WCAG 2.2 AA Compliance Audit for Enterprise Platform"
            subtitle="Comprehensive accessibility review covering all Level A and AA success criteria"
            actions={(
              <Button color="primary" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            )}
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Guidelines</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-green-700 mb-2">✓ Do</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Keep titles concise</li>
              <li>Use actions for primary page functions</li>
              <li>Include subtitle for context</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-red-700 mb-2">✗ Don't</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Use overly long titles</li>
              <li>Add too many action buttons</li>
              <li>Hide important actions in menus</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  ),
}

export const Playground = {
  name: 'Playground',
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    showActions: { control: 'boolean' },
  },
  args: {
    title: 'Page Title',
    subtitle: 'Page subtitle description',
    showActions: false,
  },
  render: (args) => (
    <div className="p-8">
      <PageHeader
        title={args.title}
        subtitle={args.subtitle}
        actions={args.showActions ? (
          <>
            <Button color="gray" size="sm">Settings</Button>
            <Button color="primary" size="sm">New Item</Button>
          </>
        ) : undefined}
      />
    </div>
  ),
}
