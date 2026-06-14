/**
 * Shared SVG Icons - For use when Lucide icons don't match the design
 */

/**
 * Three dots icon (kebab menu)
 */
export function DotsIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  )
}

/**
 * Chevron down icon for dropdowns
 */
export function ChevronDownIcon({ className = "-ml-1 mr-1.5 h-5 w-5" }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      />
    </svg>
  )
}

export default { DotsIcon, ChevronDownIcon }
