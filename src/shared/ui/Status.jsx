import { twMerge } from 'tailwind-merge'

/**
 * Status - State indicator with optional dot
 *
 * Use for: live states, statuses, activity indicators
 * NOT for: categories/labels (use Badge component instead)
 *
 * @example
 * <Status color="green">Active</Status>
 * <Status color="blue" pulse>Scanning</Status>
 * <Status color="yellow" dot={false}>Pending</Status>
 */

const dotColors = {
  gray: 'bg-gray-400',
  blue: 'bg-blue-500',
  green: 'bg-emerald-500',
  yellow: 'bg-amber-500',
  red: 'bg-red-500',
}

export function Status({
  children,
  color = 'gray',
  dot = true,
  pulse = false,
  className,
  ...props
}) {
  return (
    <span
      className={twMerge(
        'inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300',
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={twMerge(
            'h-2 w-2 rounded-full',
            dotColors[color],
            pulse && 'animate-pulse'
          )}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  )
}

// Convenience wrapper for audit statuses
export function AuditStatus({ status }) {
  const config = {
    active: { color: 'green', label: 'Active' },
    complete: { color: 'green', label: 'Complete' },
    archived: { color: 'gray', label: 'Archived' },
    draft: { color: 'yellow', label: 'Draft' },
    pending: { color: 'blue', label: 'Pending' },
    error: { color: 'red', label: 'Error' },
  }
  const { color, label } = config[status?.toLowerCase()] || { color: 'gray', label: status }

  return <Status color={color}>{label}</Status>
}

export default Status
