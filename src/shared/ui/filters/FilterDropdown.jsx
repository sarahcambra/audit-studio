import { Dropdown, Checkbox, Label } from 'flowbite-react'
import { ChevronDown } from 'lucide-react'

/**
 * FilterDropdown - Generic filter dropdown with checkbox options
 * @param {Object} props
 * @param {string} props.label - Button label
 * @param {Array} props.sections - Array of filter sections
 * @param {Object} props.theme - Flowbite theme override
 */
export function FilterDropdown({
  label = 'Filter',
  sections = [],
  theme = {}
}) {
  return (
    <Dropdown
      theme={theme}
      renderTrigger={() => (
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
            className="h-4 w-4 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
            />
          </svg>
          {label}
          <ChevronDown className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
        </button>
      )}
    >
      <div className="p-3 min-w-[200px]">
        {sections.map((section, index) => (
          <div key={section.title}>
            {index > 0 && <div className="my-2 h-px bg-gray-200 dark:bg-gray-600" />}
            <h6 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              {section.title}
            </h6>
            <ul className="space-y-1 text-sm">
              {section.options.map(option => (
                <li key={option.value}>
                  <Label className="flex w-full cursor-pointer items-center rounded px-1.5 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                    <Checkbox
                      checked={option.checked}
                      onChange={() => option.onToggle?.()}
                      theme={section.checkboxTheme}
                      className="mr-2"
                    />
                    {option.label}
                  </Label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Dropdown>
  )
}

export default FilterDropdown
