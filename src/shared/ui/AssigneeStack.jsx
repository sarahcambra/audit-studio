import { twMerge } from 'tailwind-merge'

/**
 * AssigneeStack — overlapping avatar circles with overflow count.
 *
 * Props:
 *   assignees    {Array<{ initials: string, color?: string }>}
 *   maxVisible   {number} default 3
 */
export function AssigneeStack({ assignees = [], maxVisible = 3 }) {
  if (!assignees.length) {
    return (
      <span className="text-xs italic text-gray-400 dark:text-gray-500">Unassigned</span>
    )
  }

  const visible = assignees.slice(0, maxVisible)
  const extra = assignees.length - maxVisible

  return (
    <div className="flex items-center">
      {visible.map((av, i) => (
        <div
          key={i}
          className={twMerge(
            'flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white dark:border-gray-800',
            i > 0 && '-ml-1.5'
          )}
          style={{ backgroundColor: av.color || '#9CA3AF' }}
          title={av.initials}
        >
          {av.initials}
        </div>
      ))}
      {extra > 0 && (
        <div
          className={twMerge(
            'flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-white bg-gray-400 text-[10px] font-bold text-white dark:border-gray-800 -ml-1.5'
          )}
        >
          +{extra}
        </div>
      )}
    </div>
  )
}

export default AssigneeStack
