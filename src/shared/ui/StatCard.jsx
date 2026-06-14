import { twMerge } from 'tailwind-merge'

/**
 * StatCard component for dashboard metrics
 *
 * ## Props
 * - **icon**: Lucide icon component
 * - **label**: Metric label (e.g., "Total Income")
 * - **value**: Metric value (e.g., "$163.4k")
 * - **trend**: Optional trend text (e.g., "+7%")
 * - **trendDirection**: 'up' | 'down' | 'neutral'
 * - **trendLabel**: Optional label after trend (e.g., "vs last month")
 * - **color**: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
 * - **onClick**: Optional click handler — makes the card interactive (clickable filter)
 * - **isActive**: When true, renders a purple ring (active filter state)
 * - **highlightValue**: When true, colors the value with the icon color (e.g. green "0 failures")
 */
export function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  trendDirection = 'neutral',
  trendLabel,
  trendColor: trendColorProp = null,
  color = 'primary',
  onClick,
  isActive = false,
  highlightValue = false,
}) {
  const colorStyles = {
    primary: {
      iconBg: 'bg-primary-50 dark:bg-primary-900/30',
      iconColor: 'text-primary-700 dark:text-primary-300',
      trendUp: 'text-success-700 dark:text-success-400',
      trendDown: 'text-danger-700 dark:text-danger-400',
    },
    secondary: {
      iconBg: 'bg-secondary-50 dark:bg-secondary-900/30',
      iconColor: 'text-secondary-700 dark:text-secondary-300',
      trendUp: 'text-success-700 dark:text-success-400',
      trendDown: 'text-danger-700 dark:text-danger-400',
    },
    success: {
      iconBg: 'bg-success-50 dark:bg-success-900/30',
      iconColor: 'text-success-700 dark:text-success-300',
      trendUp: 'text-success-700 dark:text-success-400',
      trendDown: 'text-danger-700 dark:text-danger-400',
    },
    warning: {
      iconBg: 'bg-warning-50 dark:bg-warning-900/30',
      iconColor: 'text-warning-700 dark:text-warning-300',
      trendUp: 'text-success-700 dark:text-success-400',
      trendDown: 'text-warning-700 dark:text-warning-400',
    },
    danger: {
      iconBg: 'bg-danger-50 dark:bg-danger-900/30',
      iconColor: 'text-danger-700 dark:text-danger-300',
      trendUp: 'text-success-700 dark:text-success-400',
      trendDown: 'text-danger-700 dark:text-danger-400',
    },
    info: {
      iconBg: 'bg-info-50 dark:bg-info-900/30',
      iconColor: 'text-info-700 dark:text-info-300',
      trendUp: 'text-success-700 dark:text-success-400',
      trendDown: 'text-danger-700 dark:text-danger-400',
    },
  }

  const styles = colorStyles[color]
  const trendColor = trendColorProp ?? (
    trendDirection === 'up'
      ? styles.trendUp
      : trendDirection === 'down'
        ? styles.trendDown
        : 'text-gray-500 dark:text-gray-400'
  )

  const Tag = onClick ? 'button' : 'div'

  return (
    <Tag
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={twMerge(
        'overflow-hidden rounded-lg bg-white p-5 border shadow-sm dark:bg-gray-800 dark:border-gray-700',
        'transition-all duration-150',
        onClick && 'cursor-pointer hover:-translate-y-0.5 hover:shadow hover:border-primary-300 dark:hover:border-primary-600',
        isActive
          ? 'border-primary-300 ring-2 ring-primary-100 dark:border-primary-600 dark:ring-primary-900/40'
          : 'border-gray-200',
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            {label}
          </p>
          <p className={twMerge(
            'mt-2 text-2xl font-bold',
            highlightValue ? styles.iconColor : 'text-gray-900 dark:text-white'
          )}>
            {value}
          </p>
          {trend && (
            <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
              <span className={`inline-flex items-center font-medium ${trendColor}`}>
                {trendDirection === 'up' && (
                  <svg className="w-3 h-3 mr-1" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v13m0-13 4 4m-4-4-4 4" />
                  </svg>
                )}
                {trendDirection === 'down' && (
                  <svg className="w-3 h-3 mr-1" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 14-4-4m4 4 4-4" />
                  </svg>
                )}
                {trend}
              </span>
              {trendLabel && <span className="ml-1">{trendLabel}</span>}
            </p>
          )}
        </div>
        <div className={`rounded-lg p-3 ${styles.iconBg}`}>
          <Icon className={`w-6 h-6 ${styles.iconColor}`} aria-hidden="true" />
        </div>
      </div>
    </Tag>
  )
}

export default StatCard
