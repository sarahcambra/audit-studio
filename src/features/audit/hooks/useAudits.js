import { useState, useEffect } from 'react'
import { getAudits } from '@lib/db/audits'

/**
 * Hook to fetch all audits for a user
 * Returns { data, loading, error, refetch }
 */
export function useAudits(userId) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchAudits = async () => {
    if (!userId) {
      setLoading(false)
      return
    }
    setLoading(true)
    const { data: audits, error: err } = await getAudits(userId)
    if (err) setError(err)
    else setData(audits ?? [])
    setLoading(false)
  }

  useEffect(() => {
    fetchAudits()
  }, [userId])

  return { data, loading, error, refetch: fetchAudits }
}
