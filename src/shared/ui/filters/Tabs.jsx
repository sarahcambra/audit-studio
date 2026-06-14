import { Badge } from '../Badge'

/**
 * Tabs - Navigation tabs with optional counts
 * @param {Object} props
 * @param {Array} props.tabs - Array of { key, label, count? }
 * @param {string} props.activeTab - Currently active tab key
 * @param {Function} props.onChange - Callback when tab changes
 */
export function Tabs({ tabs = [], activeTab, onChange }) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
        {tabs.map(tab => (
          <li key={tab.key} className="mr-2">
            <button
              onClick={() => onChange?.(tab.key)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-t-lg transition-colors ${
                activeTab === tab.key
                  ? 'text-purple-600 border-b-2 border-purple-600 dark:text-purple-400 dark:border-purple-400 bg-purple-50 dark:bg-purple-900/20'
                  : 'text-gray-500 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab.label}
              {typeof tab.count === 'number' && (
                <Badge
                  color={activeTab === tab.key ? 'purple' : 'gray'}
                  size="sm"
                >
                  {tab.count}
                </Badge>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tabs
