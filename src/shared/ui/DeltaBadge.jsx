import { twMerge } from 'tailwind-merge'

/**
 * DeltaBadge — scan history delta indicator.
 *
 * Props:
 *   delta   {'up' | 'down' | 'same'}
 *   label   {string} e.g. '↑ 3 new'
 */
export function DeltaBadge({ delta, label }) {
  const cls =
    delta === 'up'
      ? 'bg-danger-50 text-danger-700 dark:bg-danger-900/20 dark:text-danger-300'
      : delta === 'down'
        ? 'bg-success-50 text-success-700 dark:bg-success-900/20 dark:text-success-300'
        : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'

  return (
    <span
      className={twMerge(
        'inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold',
        cls
      )}
    >
      {label}
    </span>
  )
}

export default DeltaBadge
