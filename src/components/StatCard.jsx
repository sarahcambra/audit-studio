import { Card } from 'flowbite-react';
import { customTheme } from '../theme';

/**
 * StatCard component for dashboard metrics
 * Uses Flowbite Card with custom theme styling
 *
 * ## Props
 * - **icon**: Lucide icon component
 * - **label**: Metric label (e.g., "Total Income")
 * - **value**: Metric value (e.g., "$163.4k")
 * - **trend**: Optional trend text (e.g., "+7%")
 * - **trendDirection**: 'up' | 'down' | 'neutral'
 * - **trendLabel**: Optional label after trend (e.g., "vs last month")
 * - **color**: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
 */
export function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  trendDirection = 'neutral',
  trendLabel,
  color = 'primary',
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
      trendDown: 'text-danger-700 dark:text-danger-400',
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
  };

  const styles = colorStyles[color];
  const trendColor = trendDirection === 'up' ? styles.trendUp : trendDirection === 'down' ? styles.trendDown : 'text-gray-500 dark:text-gray-400';

  return (
    <Card theme={customTheme.card}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            {label}
          </p>
          <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
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
    </Card>
  );
}

export default StatCard;
