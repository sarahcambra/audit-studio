import { useState, useEffect } from 'react'

/**
 * useLocalStorage - Sync state with localStorage
 * @param {string} key - localStorage key
 * @param {*} initialValue - Default value
 * @returns {[*, Function]} [value, setValue]
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.warn(`Error saving to localStorage: ${e}`)
    }
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
