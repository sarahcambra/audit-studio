import { useState, useEffect } from 'react'
import { getAudit } from '@lib/db/audits'

/**
 * Hook to fetch a single audit by ID
 * Returns { data, loading, error, refetch }
 */
export function useAudit(auditId) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchAudit = async () => {
    if (!auditId) {
      setLoading(false)
      return
    }
    setLoading(true)
    const { data: audit, error: err } = await getAudit(auditId)
    if (err) setError(err)
    else setData(audit)
    setLoading(false)
  }

  useEffect(() => {
    fetchAudit()
  }, [auditId])

  return { data, loading, error, refetch: fetchAudit }
}
