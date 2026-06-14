import { Spinner } from 'flowbite-react'

/**
 * Loading - Generic loading spinner
 * @param {Object} props
 * @param {string} props.size - Spinner size (xs, sm, md, lg, xl)
 * @param {string} props.color - Spinner color
 * @param {string} props.text - Optional loading text
 */
export function Loading({ size = 'md', color = 'purple', text }) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Spinner size={size} color={color} />
      {text && (
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          {text}
        </p>
      )}
    </div>
  )
}

/**
 * FullScreenLoading - Loading overlay for full page
 */
export function FullScreenLoading({ text = 'Loading...' }) {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="text-center">
        <Spinner size="xl" color="purple" />
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          {text}
        </p>
      </div>
    </div>
  )
}

export default Loading
