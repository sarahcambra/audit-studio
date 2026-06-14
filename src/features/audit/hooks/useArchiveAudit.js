import { useState } from 'react'
import { archiveAudit as archiveAuditApi } from '@lib/db/audits'

/**
 * Hook to archive an audit
 * Returns { archive, loading, error }
 */
export function useArchiveAudit() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const archive = async (auditId) => {
    setLoading(true)
    setError(null)
    const { data, error: err } = await archiveAuditApi(auditId)
    if (err) setError(err)
    setLoading(false)
    return { data, error: err }
  }

  return { archive, loading, error }
}
