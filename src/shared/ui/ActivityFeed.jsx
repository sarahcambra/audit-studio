import { twMerge } from 'tailwind-merge'

/**
 * ActivityFeed — list of recent audit activity events.
 *
 * Props:
 *   items    {Array<{ text: ReactNode, time: string, variant: 'purple'|'green'|'amber'|'gray' }>}
 */
export function ActivityFeed({ items = [] }) {
  const dotCls = {
    purple: 'bg-primary-500',
    green:  'bg-success-500',
    amber:  'bg-warning-500',
    gray:   'bg-gray-400',
  }

  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3 py-2.5 px-4">
          <div className={twMerge('mt-1 h-2 w-2 flex-none rounded-full', dotCls[item.variant] || dotCls.gray)} />
          <div className="min-w-0 flex-1">
            <div className="text-[13px] text-gray-900 dark:text-white">{item.text}</div>
            <div className="mt-0.5 text-[11.5px] text-gray-400 dark:text-gray-500">{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ActivityFeed
