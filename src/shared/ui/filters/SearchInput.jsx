import { Label } from 'flowbite-react'
import { Search } from 'lucide-react'

/**
 * SearchInput - Search field with icon and button
 * @param {Object} props
 * @param {string} props.value - Current search value
 * @param {Function} props.onChange - Callback when value changes
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.id - Input ID for accessibility
 */
export function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
  id = 'search-input'
}) {
  return (
    <form className="w-full flex-1 md:mr-4 md:max-w-sm" onSubmit={e => e.preventDefault()}>
      <Label htmlFor={id} className="sr-only">Search</Label>
      <div className="flex">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id={id}
            name={id}
            type="search"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="block w-full rounded-l-lg rounded-r-none border border-r-0 border-gray-300 bg-white py-1.5 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-purple-400"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchInput
