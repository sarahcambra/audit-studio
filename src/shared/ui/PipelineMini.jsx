import { twMerge } from 'tailwind-merge'

/**
 * PipelineMini — compact dot-dash pipeline indicator for table cells.
 *
 * Props:
 *   stages    {string[]} e.g. ['done','done','current','empty']
 *   labels    {string[]} e.g. ['Scan','Triage','Review','Done']
 */
export function PipelineMini({ stages = [], labels = ['Scan', 'Triage', 'Review', 'Done'] }) {
  const currentIdx = stages.indexOf('current')
  const currentLabel = labels[currentIdx] || 'Done'

  return (
    <div className="flex items-center gap-1">
      {stages.map((s, i) => {
        const isFirst = i === 0
        return (
          <div key={i} className="flex items-center gap-0.5">
            {!isFirst && (
              <div
                className={twMerge(
                  'h-px w-2.5',
                  stages[i - 1] === 'done' ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-600'
                )}
              />
            )}
            <div
              className={twMerge(
                'h-2 w-2 rounded-full',
                s === 'done'
                  ? 'bg-primary-600'
                  : s === 'current'
                    ? 'bg-primary-600 shadow-[0_0_0_2px_var(--tw-shadow-color)] shadow-primary-200 dark:shadow-primary-800'
                    : 'bg-gray-200 dark:bg-gray-600'
              )}
            />
          </div>
        )
      })}
      <span className="ml-1.5 whitespace-nowrap text-xs font-semibold text-primary-700 dark:text-primary-400">
        {currentLabel}
      </span>
    </div>
  )
}

export default PipelineMini
