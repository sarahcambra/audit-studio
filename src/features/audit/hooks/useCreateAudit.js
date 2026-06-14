import { useState } from 'react'
import { createAudit as createAuditApi } from '@lib/db/audits'

/**
 * Hook to create a new audit
 * Returns { create, loading, error }
 */
export function useCreateAudit() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const create = async (userId, form) => {
    setLoading(true)
    setError(null)
    const { data, error: err } = await createAuditApi(userId, form)
    if (err) setError(err)
    setLoading(false)
    return { data, error: err }
  }

  return { create, loading, error }
}
