import { twMerge } from 'tailwind-merge'
import { Calendar } from 'lucide-react'

/**
 * DueDateUrgent — due date display with urgency badges.
 *
 * Props:
 *   date      {string} ISO date or null
 *   onSet     {() => void} click handler for unset dates
 */
export function DueDateUrgent({ date, onSet }) {
  if (!date) {
    return (
      <button
        type="button"
        onClick={onSet}
        className="inline-flex items-center gap-1 text-xs text-gray-400 transition-colors hover:text-primary-600 dark:text-gray-500 dark:hover:text-primary-400"
      >
        <Calendar className="h-3 w-3" />
        Set due date
      </button>
    )
  }

  const dt = new Date(date)
  const now = new Date()
  const diffDays = Math.ceil((dt - now) / (1000 * 60 * 60 * 24))
  const isOverdue = diffDays < 0
  const isSoon = diffDays >= 0 && diffDays <= 3

  const fmt = dt.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })

  return (
    <div className="flex items-center gap-1.5">
      <span
        className={twMerge(
          'text-[13px]',
          isOverdue
            ? 'font-semibold text-danger-600 dark:text-danger-400'
            : isSoon
              ? 'font-semibold text-warning-600 dark:text-warning-400'
              : 'text-gray-500 dark:text-gray-400'
        )}
      >
        {fmt}
      </span>
      {isOverdue && (
        <span className="rounded bg-danger-50 px-1 py-0.5 text-[10px] font-bold uppercase tracking-wide text-danger-700 dark:bg-danger-900/20 dark:text-danger-300">
          Overdue
        </span>
      )}
      {isSoon && !isOverdue && (
        <span className="rounded bg-warning-50 px-1 py-0.5 text-[10px] font-bold uppercase tracking-wide text-warning-700 dark:bg-warning-900/20 dark:text-warning-300">
          Soon
        </span>
      )}
    </div>
  )
}

export default DueDateUrgent
