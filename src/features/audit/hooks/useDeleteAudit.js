import { useState } from 'react'
import { deleteAudit as deleteAuditApi } from '@lib/db/audits'

/**
 * Hook to delete an audit
 * Returns { deleteAudit, loading, error }
 */
export function useDeleteAudit() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const deleteAudit = async (auditId) => {
    setLoading(true)
    setError(null)
    const { error: err } = await deleteAuditApi(auditId)
    if (err) setError(err)
    setLoading(false)
    return { error: err }
  }

  return { deleteAudit, loading, error }
}
