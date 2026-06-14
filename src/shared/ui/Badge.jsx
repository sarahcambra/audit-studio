import { twMerge } from 'tailwind-merge'

/**
 * Badge - Simple label/category indicator
 *
 * Use for: categories, labels, versions, types, counts
 * NOT for: live status/states (use Status component instead)
 *
 * @example
 * <Badge>Default</Badge>
 * <Badge color="green">Passed</Badge>
 * <Badge color="red" variant="solid">Error</Badge>
 */

const colors = {
  gray: {
    subtle: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
    solid: 'bg-gray-600 text-white',
  },
  blue: {
    subtle: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    solid: 'bg-blue-600 text-white',
  },
  green: {
    subtle: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
    solid: 'bg-emerald-600 text-white',
  },
  yellow: {
    subtle: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
    solid: 'bg-amber-500 text-white',
  },
  red: {
    subtle: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    solid: 'bg-red-600 text-white',
  },
  purple: {
    subtle: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    solid: 'bg-purple-600 text-white',
  },
}

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
}

export function Badge({
  children,
  color = 'gray',
  variant = 'subtle',
  size = 'md',
  className,
  ...props
}) {
  const colorStyles = colors[color]?.[variant] || colors.gray.subtle

  return (
    <span
      className={twMerge(
        'inline-flex items-center font-medium whitespace-nowrap rounded-md',
        sizes[size],
        colorStyles,
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

// Convenience wrappers for common semantic use cases
export function ImpactBadge({ impact, size = 'sm' }) {
  const config = {
    critical: { color: 'red', label: 'Critical' },
    serious: { color: 'yellow', label: 'Serious' },
    moderate: { color: 'blue', label: 'Moderate' },
    minor: { color: 'gray', label: 'Minor' },
  }
  const { color, label } = config[impact?.toLowerCase()] || { color: 'gray', label: impact }

  return <Badge color={color} size={size}>{label}</Badge>
}

export function WcagBadge({ version, level, size = 'sm' }) {
  return (
    <Badge color="purple" size={size}>
      WCAG {version} {level}
    </Badge>
  )
}

export default Badge
