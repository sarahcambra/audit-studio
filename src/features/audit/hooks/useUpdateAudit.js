import { useState } from 'react'
import { updateAudit as updateAuditApi } from '@lib/db/audits'

/**
 * Hook to update an audit
 * Returns { update, loading, error }
 */
export function useUpdateAudit() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const update = async (auditId, updates) => {
    setLoading(true)
    setError(null)
    const { data, error: err } = await updateAuditApi(auditId, updates)
    if (err) setError(err)
    setLoading(false)
    return { data, error: err }
  }

  return { update, loading, error }
}
