import { twMerge } from 'tailwind-merge'

const SEVERITY_META = {
  critical: { color: '#DC2626', label: 'Critical' },
  serious:  { color: '#EA580C', label: 'Serious' },
  moderate: { color: '#D97706', label: 'Moderate' },
  minor:    { color: '#2563EB', label: 'Minor' },
}

/**
 * SeverityBar — stacked horizontal bar with clickable severity segments.
 *
 * Props:
 *   counts    {Record<string, number>} e.g. { critical: 3, serious: 3, moderate: 4, minor: 2 }
 *   onClick   {(severity: string) => void}
 *   active    {string | null} currently selected severity
 */
export function SeverityBar({ counts = {}, onClick, active }) {
  const total = Object.values(counts).reduce((s, n) => s + n, 0)
  const keys = ['critical', 'serious', 'moderate', 'minor']

  if (!total) {
    return (
      <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700" />
    )
  }

  return (
    <div className="flex h-2 w-full overflow-hidden rounded-full gap-0.5">
      {keys.map((key) => {
        const count = counts[key] ?? 0
        const pct = total ? (count / total) * 100 : 0
        if (!count) return null
        return (
          <button
            key={key}
            type="button"
            onClick={() => onClick?.(key)}
            className={twMerge(
              'h-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1',
              active === key ? 'ring-2 ring-primary-300 ring-offset-1' : ''
            )}
            style={{
              width: `${pct}%`,
              backgroundColor: SEVERITY_META[key]?.color,
              minWidth: pct < 3 ? '4px' : undefined,
            }}
            aria-label={`${SEVERITY_META[key]?.label}: ${count}`}
          />
        )
      })}
    </div>
  )
}

/**
 * SeverityStats — clickable stat boxes below the bar.
 */
export function SeverityStats({ counts = {}, onClick, active }) {
  const keys = ['critical', 'serious', 'moderate', 'minor']

  return (
    <div className="grid grid-cols-4 gap-2">
      {keys.map((key) => {
        const count = counts[key] ?? 0
        const meta = SEVERITY_META[key]
        return (
          <button
            key={key}
            type="button"
            onClick={() => onClick?.(key)}
            className={twMerge(
              'rounded-lg px-2 py-2.5 text-center transition-colors cursor-pointer',
              'hover:bg-gray-50 dark:hover:bg-gray-700',
              active === key ? 'bg-primary-50 dark:bg-primary-900/20 ring-1 ring-primary-200' : ''
            )}
          >
            <div
              className="text-xl font-extrabold tracking-tight"
              style={{ color: meta.color }}
            >
              {count}
            </div>
            <div
              className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide"
              style={{ color: meta.color }}
            >
              {meta.label}
            </div>
          </button>
        )
      })}
    </div>
  )
}

export default SeverityBar
