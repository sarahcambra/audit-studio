import { useState, useEffect } from 'react'

/**
 * useMediaQuery - Listen to CSS media query changes
 * @param {string} query - CSS media query (e.g., '(min-width: 768px)')
 * @returns {boolean} Whether the query matches
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)

    const listener = (e) => setMatches(e.matches)
    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

export default useMediaQuery
