import { useState, useCallback, useRef, useEffect } from 'react'
import { supabase } from '@lib/supabase'

/**
 * Hook for managing sequential scan execution via Vercel API.
 * Uses Supabase Realtime subscriptions instead of polling for instant updates.
 *
 * @param {Object} options
 * @param {string} options.auditId - audit ID from database
 * @param {string} options.userId - current user ID
 * @param {Object} options.audit - { wcagVersion, conformanceLevel }
 * @param {Object} options.scResults - from getApproxScCount(), provides activeList
 * @param {Function} options.onProgress - callback when job status changes
 * @param {Function} options.onError - callback for scan errors (for toast display)
 */
export function useScanRunner({ auditId, userId, audit, scResults, onProgress, onError }) {
  const [jobs, setJobs] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  const [currentJobId, setCurrentJobId] = useState(null)
  const subscriptionsRef = useRef({})
  const isRunningRef = useRef(false)

  useEffect(() => { isRunningRef.current = isRunning }, [isRunning])

  /**
   * Subscribe to Supabase Realtime for a specific job ID.
   * Replaces the old 3s polling approach — updates arrive within ~1s.
   */
  const subscribeToJob = useCallback((supabaseJobId, localJobId) => {
    const channel = supabase
      .channel(`scan-job-${supabaseJobId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'scan_jobs',
          filter: `id=eq.${supabaseJobId}`,
        },
        async (payload) => {
          const { status, error_message } = payload.new

          if (status === 'complete') {
            // Fetch full results
            const { data: results, error: resultsError } = await supabase
              .from('scan_results')
              .select('*')
              .eq('job_id', supabaseJobId)
              .single()

            if (resultsError) {
              console.error('Realtime: Failed to fetch results:', resultsError.message)
              handleJobError(localJobId, supabaseJobId, resultsError.message)
              return
            }

            setJobs(prev =>
              prev.map(j =>
                j.id === localJobId
                  ? {
                      ...j,
                      status: 'complete',
                      completedAt: new Date().toISOString(),
                      results: {
                        groupedViolations: results.grouped_violations ?? [],
                        incomplete:        results.incomplete_json    ?? [],
                        passes:            results.passes_json        ?? [],
                        inapplicable:      results.inapplicable_json  ?? [],
                        screenshot:        results.summary?.screenshotUrl ?? null,
                      },
                      summary: results.summary,
                    }
                  : j
              )
            )
            onProgress?.(localJobId, 'complete')
            cleanupSubscription(localJobId)
            setIsRunning(false)
            setCurrentJobId(null)

          } else if (status === 'error') {
            handleJobError(localJobId, supabaseJobId, error_message)
          }
        }
      )
      .subscribe(async (status) => {
        // CRITICAL FIX: Check status immediately after subscription is ready.
        // Realtime might miss updates that happen between subscribe() and channel-ready.
        if (status === 'SUBSCRIBED') {
          const { data: currentJob } = await supabase
            .from('scan_jobs')
            .select('status, error_message, completed_at')
            .eq('id', supabaseJobId)
            .single()

          if (currentJob?.status === 'complete') {
            // Job finished while we were subscribing - fetch results
            const { data: results } = await supabase
              .from('scan_results')
              .select('*')
              .eq('job_id', supabaseJobId)
              .single()

            if (results) {
              setJobs(prev =>
                prev.map(j =>
                  j.id === localJobId
                    ? {
                        ...j,
                        status: 'complete',
                        completedAt: currentJob.completed_at || new Date().toISOString(),
                        results: {
                          groupedViolations: results.grouped_violations ?? [],
                          incomplete:        results.incomplete_json    ?? [],
                          passes:            results.passes_json        ?? [],
                          inapplicable:      results.inapplicable_json  ?? [],
                          screenshot:        results.summary?.screenshotUrl ?? null,
                        },
                        summary: results.summary,
                      }
                    : j
                )
              )
              onProgress?.(localJobId, 'complete')
              cleanupSubscription(localJobId)
              setIsRunning(false)
              setCurrentJobId(null)
            }
          } else if (currentJob?.status === 'error') {
            handleJobError(localJobId, supabaseJobId, currentJob.error_message)
          }
          // If still 'running', Realtime will catch the update when it finishes
        }
      })

    subscriptionsRef.current[localJobId] = channel

    // POLLING BACKUP: Check every 3 seconds for 2 minutes (Realtime might miss)
    // This catches the completion even if Realtime subscription fails
    let pollCount = 0
    const maxPolls = 40 // 40 * 3s = 2 minutes
    const pollInterval = setInterval(async () => {
      pollCount++

      const { data: jobStatus } = await supabase
        .from('scan_jobs')
        .select('status, error_message, completed_at')
        .eq('id', supabaseJobId)
        .single()

      if (jobStatus?.status === 'complete') {
        clearInterval(pollInterval)
        const { data: results } = await supabase
          .from('scan_results')
          .select('*')
          .eq('job_id', supabaseJobId)
          .single()

        if (results) {
          setJobs(prev =>
            prev.map(j =>
              j.id === localJobId
                ? {
                    ...j,
                    status: 'complete',
                    completedAt: jobStatus.completed_at || new Date().toISOString(),
                    results: {
                      groupedViolations: results.grouped_violations ?? [],
                      incomplete:        results.incomplete_json    ?? [],
                      passes:            results.passes_json        ?? [],
                      inapplicable:      results.inapplicable_json  ?? [],
                      screenshot:        results.summary?.screenshotUrl ?? null,
                    },
                    summary: results.summary,
                  }
                : j
            )
          )
          onProgress?.(localJobId, 'complete')
          cleanupSubscription(localJobId)
          setIsRunning(false)
          setCurrentJobId(null)
        }
      } else if (jobStatus?.status === 'error') {
        clearInterval(pollInterval)
        handleJobError(localJobId, supabaseJobId, jobStatus.error_message)
      }

      // Stop polling after max attempts or if subscription was cleaned up
      if (pollCount >= maxPolls || !subscriptionsRef.current[localJobId]) {
        clearInterval(pollInterval)
      }
    }, 3000)

    // Store interval for cleanup
    subscriptionsRef.current[`${localJobId}-poll`] = pollInterval

    // Stale-job watchdog: fires after 10 minutes.
    // Our scan worker has a 5-min hard timeout, so any job still 'running'
    // at 10 min is dead (container was killed, network dropped, etc.).
    const fallbackTimer = setTimeout(async () => {
      const { data } = await supabase
        .from('scan_jobs')
        .select('status, error_message, started_at')
        .eq('id', supabaseJobId)
        .single()

      if (!data) return // query failed — leave job as-is, user can refresh

      if (data.status === 'complete') {
        // Realtime missed it — resolve normally
        const { data: results } = await supabase
          .from('scan_results')
          .select('*')
          .eq('job_id', supabaseJobId)
          .single()

        setJobs(prev =>
          prev.map(j =>
            j.id === localJobId
              ? {
                  ...j,
                  status: 'complete',
                  completedAt: new Date().toISOString(),
                  results: {
                    groupedViolations: results?.grouped_violations ?? [],
                    incomplete:        results?.incomplete_json    ?? [],
                    passes:            results?.passes_json        ?? [],
                    inapplicable:      results?.inapplicable_json  ?? [],
                    screenshot:        results?.summary?.screenshotUrl ?? null,
                  },
                  summary: results?.summary,
                }
              : j
          )
        )
        onProgress?.(localJobId, 'complete')
        cleanupSubscription(localJobId)
        setIsRunning(false)
        setCurrentJobId(null)

      } else if (data.status === 'error') {
        // Realtime missed the error — surface it now
        handleJobError(localJobId, supabaseJobId, data.error_message)

      } else {
        // Still 'running' or 'pending' after 10 min → the worker is dead
        const staleMessage = 'Scan timed out — the scan worker may have restarted. Please try again.'
        console.warn(`[useScanRunner] Stale job detected: ${supabaseJobId}`)
        // Mark it as error in the DB so it doesn't stay stuck across page reloads
        void supabase
          .from('scan_jobs')
          .update({ status: 'error', error_message: staleMessage, completed_at: new Date().toISOString() })
          .eq('id', supabaseJobId)
          .then(null, () => {})
        handleJobError(localJobId, supabaseJobId, staleMessage)
      }
    }, 600_000) // 10 min watchdog — worker hard limit is 5 min, so anything beyond is stale

    // Store timer for cleanup
    subscriptionsRef.current[`${localJobId}-timer`] = fallbackTimer
  }, [onProgress, onError])

  function handleJobError(localJobId, supabaseJobId, errorMessage) {
    setJobs(prev =>
      prev.map(j =>
        j.id === localJobId
          ? { ...j, status: 'error', completedAt: new Date().toISOString(), error: errorMessage }
          : j
      )
    )
    onProgress?.(localJobId, 'error', errorMessage)
    onError?.(errorMessage)
    cleanupSubscription(localJobId)
    setIsRunning(false)
    setCurrentJobId(null)
  }

  function cleanupSubscription(localJobId) {
    const channel = subscriptionsRef.current[localJobId]
    if (channel) {
      supabase.removeChannel(channel)
      delete subscriptionsRef.current[localJobId]
    }
    const timer = subscriptionsRef.current[`${localJobId}-timer`]
    if (timer) {
      clearTimeout(timer)
      delete subscriptionsRef.current[`${localJobId}-timer`]
    }
    const poll = subscriptionsRef.current[`${localJobId}-poll`]
    if (poll) {
      clearInterval(poll)
      delete subscriptionsRef.current[`${localJobId}-poll`]
    }
  }

  const addPageScan = useCallback((url, scanName) => {
    const jobId = `job-${Date.now()}-${Math.random().toString(36).slice(2)}`
    const job = {
      id: jobId,
      scanType: 'page',
      url,
      scanName: scanName || new URL(url).hostname,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }
    setJobs(prev => [...prev, job])
    return jobId
  }, [])

  const addComponentScan = useCallback((url, selector, scanName) => {
    const jobId = `job-${Date.now()}-${Math.random().toString(36).slice(2)}`
    const job = {
      id: jobId,
      scanType: 'component',
      url,
      selector,
      scanName: scanName || `Component: ${selector}`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }
    setJobs(prev => [...prev, job])
    return jobId
  }, [])

  const addFlowScan = useCallback((url, steps, scanName) => {
    const jobId = `job-${Date.now()}-${Math.random().toString(36).slice(2)}`
    const job = {
      id: jobId,
      scanType: 'flow',
      url,
      steps,
      scanName: scanName || `Flow: ${steps[0]?.name || 'Unnamed'}`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }
    setJobs(prev => [...prev, job])
    return jobId
  }, [])

  /**
   * Run the next pending job in the queue
   */
  const runNextJob = useCallback(async () => {
    if (isRunning) {
      console.warn('runNextJob: Scan already in progress, job queued')
      return null
    }

    const PRIORITY = { component: 1, page: 2, flow: 3 }
    const pendingJob = jobs
      .filter(j => j.status === 'pending')
      .sort((a, b) => PRIORITY[a.scanType] - PRIORITY[b.scanType])[0]

    if (!pendingJob) {
      console.warn('runNextJob: No pending jobs in queue')
      return null
    }

    setIsRunning(true)
    setCurrentJobId(pendingJob.id)

    setJobs(prev =>
      prev.map(j =>
        j.id === pendingJob.id
          ? { ...j, status: 'running', startedAt: new Date().toISOString() }
          : j
      )
    )

    onProgress?.(pendingJob.id, 'running')

    try {
      if (!auditId) throw new Error('Missing audit ID. Please start a new audit.')
      if (!userId) throw new Error('User not authenticated. Please sign in again.')
      if (!pendingJob.url) throw new Error('Missing URL for scan job.')
      try { new URL(pendingJob.url) } catch { throw new Error(`Invalid URL format: ${pendingJob.url}`) }
      if (pendingJob.scanType === 'flow' && (!pendingJob.steps || !Array.isArray(pendingJob.steps))) {
        throw new Error('Flow scans require valid steps configuration.')
      }

      const { data: { session } } = await supabase.auth.getSession()
      if (!session?.access_token) throw new Error('Session expired. Please sign in again.')

      const MAX_RETRIES = 3
      let response
      let lastError

      for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
          response = await fetch('/api/scan', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${session.access_token}`,
            },
            body: JSON.stringify({
              auditId,
              scanType: pendingJob.scanType,
              url: pendingJob.url,
              scanName: pendingJob.scanName,
              selector: pendingJob.scanType === 'component' ? pendingJob.selector : undefined,
              steps: pendingJob.scanType === 'flow' ? pendingJob.steps : undefined,
              wcagVersion: audit.wcagVersion,
              conformanceLevel: audit.conformanceLevel,
              activeSCList: scResults?.activeList || [],
            }),
          })
          break
        } catch (networkErr) {
          lastError = networkErr
          if (attempt < MAX_RETRIES) {
            console.warn(`runNextJob: Request failed (attempt ${attempt}/${MAX_RETRIES}), retrying...`, networkErr.message)
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt))
          }
        }
      }

      if (!response) {
        throw new Error(`Network error after ${MAX_RETRIES} attempts: ${lastError?.message || 'Unknown error'}`)
      }

      if (!response.ok) {
        let errorMessage = 'Scan request failed'
        try {
          const contentType = response.headers.get('content-type')
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json()
            errorMessage = errorData.message || errorMessage
          } else {
            errorMessage = `Server error: ${response.status} ${response.statusText}`
          }
        } catch {
          errorMessage = `Server error: ${response.status} ${response.statusText}`
        }
        throw new Error(errorMessage)
      }

      const { jobId } = await response.json()

      setJobs(prev =>
        prev.map(j =>
          j.id === pendingJob.id
            ? { ...j, supabaseJobId: jobId, status: 'running', summary: { scanName: pendingJob.scanName } }
            : j
        )
      )

      // Subscribe to Realtime updates instead of polling
      subscribeToJob(jobId, pendingJob.id)

    } catch (err) {
      setJobs(prev =>
        prev.map(j =>
          j.id === pendingJob.id
            ? { ...j, status: 'error', completedAt: new Date().toISOString(), error: err.message }
            : j
        )
      )
      onProgress?.(pendingJob.id, 'error', err.message)
      onError?.(err.message)
      setIsRunning(false)
      setCurrentJobId(null)
      return { jobId: pendingJob.id, status: 'error', error: err.message }
    }
  }, [isRunning, jobs, auditId, userId, audit, scResults, onProgress, onError, subscribeToJob])

  /**
   * Run all pending jobs sequentially
   */
  const runAll = useCallback(async () => {
    const pendingCount = jobs.filter(j => j.status === 'pending').length
    if (pendingCount === 0) return []

    const results = []
    for (let i = 0; i < pendingCount; i++) {
      const result = await runNextJob()
      if (result) results.push(result)

      // Wait for current job to complete before starting next
      await new Promise((resolve, reject) => {
        const startTime = Date.now()
        const timeout = 300000
        const checkInterval = setInterval(() => {
          if (!isRunningRef.current) {
            clearInterval(checkInterval)
            resolve()
          } else if (Date.now() - startTime > timeout) {
            clearInterval(checkInterval)
            reject(new Error('Job execution timeout'))
          }
        }, 100)
      }).catch(err => {
        console.error('runAll: Job timeout -', err.message)
        results.push({ status: 'timeout', error: err.message })
      })
    }
    return results
  }, [jobs, runNextJob])

  const removeJob = useCallback((jobId) => {
    cleanupSubscription(jobId)
    setJobs(prev => prev.filter(j => j.id !== jobId))
  }, [])

  const clearCompleted = useCallback(() => {
    setJobs(prev => prev.filter(j => j.status === 'pending' || j.status === 'running'))
  }, [])

  // Load completed scan history on mount
  useEffect(() => {
    if (!auditId) return
    async function loadHistory() {
      const { data, error } = await supabase
        .from('scan_jobs')
        .select(`
          id, scan_type, url, selector, flow_steps, status, completed_at,
          scan_results ( grouped_violations, incomplete_json, passes_json, inapplicable_json, summary )
        `)
        .eq('audit_id', auditId)
        .eq('status', 'complete')
        .order('completed_at', { ascending: false })
        .limit(20)

      if (error) {
        console.error('useScanRunner: Failed to load scan history:', error.message)
        return
      }
      if (!data?.length) return

      const loaded = data.map(job => {
        const sr = job.scan_results?.[0] ?? {}
        return {
          id:             job.id,
          supabaseJobId:  job.id,
          scanType:       job.scan_type,
          scanName:       sr.summary?.scanName || job.url,
          url:            job.url,
          selector:       job.selector,
          steps:          job.flow_steps,
          status:         'complete',
          completedAt:    job.completed_at,
          results: {
            groupedViolations: sr.grouped_violations ?? [],
            incomplete:        sr.incomplete_json    ?? [],
            passes:            sr.passes_json        ?? [],
            inapplicable:      sr.inapplicable_json  ?? [],
            screenshot:        sr.summary?.screenshotUrl ?? null,
          },
          summary: sr.summary ?? {},
        }
      })
      setJobs(loaded)
    }
    loadHistory()
  }, [auditId])

  // Cleanup all subscriptions on unmount
  useEffect(() => {
    return () => {
      Object.entries(subscriptionsRef.current).forEach(([key, val]) => {
        if (typeof val === 'number') {
          clearTimeout(val)
        } else if (typeof val === 'object' && val?.unsubscribe) {
          supabase.removeChannel(val)
        }
      })
    }
  }, [])

  return {
    jobs,
    addPageScan,
    addComponentScan,
    addFlowScan,
    runNextJob,
    runAll,
    removeJob,
    clearCompleted,
    isRunning,
    currentJobId,
  }
}
