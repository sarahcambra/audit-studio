import { useState, useEffect, useRef } from 'react'

/**
 * Tracks elapsed milliseconds while a scan is running.
 * Resets to 0 each time isRunning flips from false → true.
 */
export function useScanProgress(isRunning) {
  const [elapsedMs, setElapsedMs] = useState(0)
  const startRef = useRef(null)

  useEffect(() => {
    if (!isRunning) {
      setElapsedMs(0)
      startRef.current = null
      return
    }

    startRef.current = Date.now()
    const interval = setInterval(() => {
      setElapsedMs(Date.now() - startRef.current)
    }, 250)

    return () => clearInterval(interval)
  }, [isRunning])

  return {
    elapsedMs,
    elapsedSeconds: Math.floor(elapsedMs / 1000),
  }
}
