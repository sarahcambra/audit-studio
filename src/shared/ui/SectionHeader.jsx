import { twMerge } from 'tailwind-merge'

/**
 * SectionHeader - Consistent section header with optional icon and actions
 *
 * @param {Object} props
 * @param {string} props.title - Section title text
 * @param {React.Component} [props.icon] - Lucide icon component
 * @param {React.ReactNode} [props.action] - Action element (button, link, etc.)
 * @param {string} [props.className] - Additional classes
 * @param {React.ReactNode} [props.children] - Additional content below title
 * @param {'default'|'primary'|'subtle'} [props.variant='default'] - Visual variant
 */
export function SectionHeader({
  title,
  icon: Icon,
  action,
  className,
  children,
  variant = 'default',
}) {
  const variantStyles = {
    default: 'text-gray-500 dark:text-gray-400',
    primary: 'text-primary-700 dark:text-primary-300',
    subtle: 'text-gray-400 dark:text-gray-500',
  }

  return (
    <div className={twMerge('mb-3', className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Icon && (
            <Icon className={twMerge('h-4 w-4', variantStyles[variant])} aria-hidden="true" />
          )}
          <h6
            className={twMerge(
              'text-xs font-semibold uppercase tracking-wide',
              variantStyles[variant]
            )}
          >
            {title}
          </h6>
        </div>
        {action && <div className="flex items-center gap-2">{action}</div>}
      </div>
      {children}
    </div>
  )
}

export default SectionHeader
