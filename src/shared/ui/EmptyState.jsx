import { Button } from 'flowbite-react'
import { ClipboardList, Plus } from 'lucide-react'

/**
 * EmptyState - Generic empty state component for tables/lists
 * @param {Object} props
 * @param {string} props.title - Main title
 * @param {string} props.description - Description text
 * @param {string} props.actionLabel - Label for the action button (optional)
 * @param {Function} props.onAction - Callback when action button is clicked
 * @param {boolean} props.showAction - Whether to show the action button
 */
export function EmptyState({
  title,
  description,
  actionLabel = 'Add new',
  onAction,
  showAction = false
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 rounded-lg bg-purple-100 p-3 dark:bg-purple-900/30">
        <ClipboardList className="h-7 w-7 text-purple-700 dark:text-purple-300" aria-hidden="true" />
      </div>
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-5 mt-1 max-w-xs text-xs text-gray-500 dark:text-gray-400">
        {description}
      </p>
      {showAction && onAction && (
        <Button color="primary" size="sm" onClick={onAction}>
          <Plus className="mr-1.5 h-4 w-4" aria-hidden="true" />
          {actionLabel}
        </Button>
      )}
    </div>
  )
}

export default EmptyState
