import { twMerge } from 'tailwind-merge'
import { AlertTriangle, CheckCircle, HelpCircle, X } from 'lucide-react'

/**
 * CheckItem — manual check row with pass/fail/na icon.
 *
 * Props:
 *   status    {'pass'|'fail'|'na'}
 *   sc        {string} e.g. '1.1.1'
 *   name      {string}
 *   level     {string} e.g. 'A' | 'AA'
 */
export function CheckItem({ status, sc, name, level, onClick }) {
  const meta = {
    pass: { icon: CheckCircle, color: 'text-success-600', bg: 'bg-success-600', border: 'border-success-600' },
    fail: { icon: X, color: 'text-danger-600', bg: 'bg-danger-600', border: 'border-danger-600' },
    na:   { icon: X, color: 'text-gray-400', bg: 'bg-gray-100', border: 'border-gray-300' },
  }[status] || meta.na

  const Icon = meta.icon
  const resultLabel = status === 'pass' ? 'Pass' : status === 'fail' ? 'Fail' : 'N/A'
  const resultColor =
    status === 'pass' ? 'text-success-700 dark:text-success-300'
    : status === 'fail' ? 'text-danger-700 dark:text-danger-300'
    : 'text-gray-400 dark:text-gray-500'

  return (
    <div
      onClick={onClick}
      className={twMerge(
        'flex cursor-pointer items-center gap-3 border-b border-gray-100 px-4 py-3 transition-colors dark:border-gray-700',
        'hover:bg-primary-50 dark:hover:bg-primary-900/10'
      )}
    >
      {/* Status icon circle */}
      <div
        className={twMerge(
          'flex h-5 w-5 flex-none items-center justify-center rounded-full border-2',
          meta.border,
          status === 'na' ? 'bg-gray-100 dark:bg-gray-700' : meta.bg
        )}
      >
        <Icon
          className={twMerge(
            'h-3 w-3',
            status === 'na' ? 'text-gray-400' : 'text-white'
          )}
        />
      </div>

      {/* SC */}
      <span className="w-12 flex-none text-xs font-bold text-gray-500 dark:text-gray-400">
        {sc}
      </span>

      {/* Name */}
      <span className="flex-1 text-[13px] font-medium text-gray-900 dark:text-white">
        {name}
      </span>

      {/* Level */}
      <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[11px] font-semibold text-gray-500 dark:bg-gray-700 dark:text-gray-400">
        {level}
      </span>

      {/* Result */}
      <span className={twMerge('w-14 text-right text-xs font-semibold', resultColor)}>
        {resultLabel}
      </span>
    </div>
  )
}

export default CheckItem
