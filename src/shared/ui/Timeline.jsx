import { twMerge } from 'tailwind-merge'

/**
 * Timeline — vertical event timeline.
 *
 * Props:
 *   events    {Array<{ actor: string, action: string, time: string, body?: string, variant: 'purple'|'green'|'amber'|'gray'|'red' }>}
 */
export function Timeline({ events = [] }) {
  const dotCls = {
    purple: 'border-primary-600 bg-primary-600',
    green:  'border-success-600 bg-success-600',
    amber:  'border-warning-500 bg-warning-500',
    gray:   'border-gray-400 bg-gray-400',
    red:    'border-danger-600 bg-danger-600',
  }

  return (
    <div className="relative pl-7">
      <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700" />
      <div className="space-y-5">
        {events.map((ev, i) => (
          <div key={i} className="relative">
            <div
              className={twMerge(
                'absolute -left-[25px] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2',
                dotCls[ev.variant] || dotCls.gray
              )}
            />
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-[13px] font-semibold text-gray-900 dark:text-white">
                {ev.actor}
              </span>
              <span className="text-[13px] text-gray-500 dark:text-gray-400">
                {ev.action}
              </span>
              <span className="ml-auto text-[11.5px] text-gray-400 dark:text-gray-500">
                {ev.time}
              </span>
            </div>
            {ev.body && (
              <div className="rounded-lg border border-gray-100 bg-white px-3.5 py-2.5 text-[13px] text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {ev.body}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
