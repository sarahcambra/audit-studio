import { twMerge } from 'tailwind-merge'
import { Check } from 'lucide-react'

/**
 * PipelineSteps — full 4-step pipeline progress with numbered dots and labels.
 *
 * Props:
 *   stages    {string[]} e.g. ['done','current','empty','empty']
 *   labels    {string[]} e.g. ['Scan','Triage','Review','Done']
 */
export function PipelineSteps({ stages = [], labels = ['Scan', 'Triage', 'Review', 'Done'] }) {
  return (
    <div className="flex items-center">
      {stages.map((s, i) => {
        const isLast = i === stages.length - 1
        const isDone = s === 'done'
        const isCurrent = s === 'current'

        return (
          <div key={i} className="relative flex flex-1 flex-col items-center">
            {/* connector line */}
            {!isLast && (
              <div
                className={twMerge(
                  'absolute top-[14px] left-1/2 h-0.5 w-full',
                  isDone ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
                )}
                style={{ zIndex: 0 }}
              />
            )}

            {/* dot */}
            <div
              className={twMerge(
                'relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 text-[11px] font-bold transition-all',
                isDone
                  ? 'border-primary-600 bg-primary-600 text-white'
                  : isCurrent
                    ? 'border-primary-600 bg-white text-primary-700 shadow-[0_0_0_4px_var(--tw-shadow-color)] shadow-primary-100 dark:bg-gray-800 dark:shadow-primary-900/40'
                    : 'border-gray-200 bg-white text-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-500'
              )}
            >
              {isDone ? <Check className="h-3.5 w-3.5" /> : i + 1}
            </div>

            {/* label */}
            <span
              className={twMerge(
                'mt-1.5 text-[11px] font-medium',
                isDone
                  ? 'text-primary-700 dark:text-primary-400'
                  : isCurrent
                    ? 'text-primary-700 font-bold dark:text-primary-400'
                    : 'text-gray-400 dark:text-gray-500'
              )}
            >
              {labels[i]}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default PipelineSteps
