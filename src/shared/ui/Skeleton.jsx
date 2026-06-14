/**
 * Skeleton - Placeholder for loading states
 * @param {Object} props
 * @param {string} props.className - Additional classes
 * @param {number} props.lines - Number of lines (for text skeleton)
 */
export function Skeleton({ className = '', lines = 1 }) {
  if (lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"
            style={{ width: `${Math.random() * 40 + 60}%` }}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={`animate-pulse rounded bg-gray-200 dark:bg-gray-700 ${className}`}
    />
  )
}

/**
 * SkeletonCard - Card-shaped skeleton
 */
export function SkeletonCard() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    </div>
  )
}

/**
 * SkeletonTable - Table rows skeleton
 * @param {number} props.rows - Number of rows
 */
export function SkeletonTable({ rows = 5 }) {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex space-x-4">
        <Skeleton className="h-8 flex-1" />
        <Skeleton className="h-8 flex-1" />
        <Skeleton className="h-8 flex-1" />
        <Skeleton className="h-8 w-24" />
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex space-x-4">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-24" />
        </div>
      ))}
    </div>
  )
}

export default Skeleton
