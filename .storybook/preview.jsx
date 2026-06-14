import '../src/index.css'
import { ThemeProvider } from '../src/shared/context/ThemeContext'

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#111827' },
      ],
    },
    a11y: {
      test: "todo"
    },
    docs: {
      toc: true,
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Getting Started',
          ['Introduction'],
          'Foundations',
          ['Overview', 'Colors', 'Typography', 'Spacing', 'Icons'],
          'Components',
          [
            'Button',
            'Badges',
            'Data Display',
            ['StatCard', 'DataTable', 'DueDate'],
            'Feedback',
            ['Badges', 'BlockingStatus', 'EmptyState', 'ErrorBoundary', 'Loading', 'Skeleton'],
            'Inputs',
            ['FilterDropdown', 'SearchInput'],
            'Navigation',
            ['PageHeader', 'PipelineBar', 'Tabs'],
            'Overlay',
            ['Modal'],
          ],
          'Patterns',
          ['Overview', 'Dashboards', 'Forms', 'Lists'],
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;