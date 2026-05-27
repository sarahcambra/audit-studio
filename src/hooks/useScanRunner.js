import { useState, useCallback, useRef, useEffect } from 'react'
import { supabase } from '../lib/supabase'

/**
 * Hook for managing sequential scan execution via Vercel API.
 * Playwright runs server-side, never in browser.
 * Polls Supabase for status and results.
 *
 * @param {Object} options
 * @param {string} options.auditId - audit ID from database
 * @param {string} options.userId - current user ID
 * @param {Object} options.audit - { wcagVersion, conformanceLevel }
 * @param {Object} options.scResults - from getApproxScCount(), provides activeList
 * @param {Function} options.onProgress - callback when job status changes
 */
export function useScanRunner({ auditId, userId, audit, scResults, onProgress }) {
  const [jobs, setJobs] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  const [currentJobId, setCurrentJobId] = useState(null)
  const pollIntervalsRef = useRef({})
  // Ref to track latest job states for atomic updates (avoids stale closures)
  const latestJobsRef = useRef([])
  // Ref to track isRunning without closure staleness (used in runAll polling loop)
  const isRunningRef = useRef(false)

  // Keep refs in sync with state
  useEffect(() => {
    latestJobsRef.current = jobs
  }, [jobs])

  useEffect(() => {
    isRunningRef.current = isRunning
  }, [isRunning])

  /**
   * Add a page scan job to the queue
   */
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

  /**
   * Add a component scan job to the queue
   */
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

  /**
   * Add a flow scan job to the queue
   */
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
   * Poll Supabase for job status and results
   */
  const pollJobStatus = useCallback(async (supabaseJobId, localJobId) => {
    try {
      const { data, error } = await supabase
        .from('scan_jobs')
        .select('status, error_message')
        .eq('id', supabaseJobId)
        .single()

      if (error) {
        // Supabase query error - update job state and stop polling
        console.error('pollJobStatus: Supabase query error:', error.message)
        setJobs(prev =>
          prev.map(j =>
            j.id === localJobId
              ? {
                  ...j,
                  status: 'error',
                  completedAt: new Date().toISOString(),
                  error: `Database error: ${error.message}`,
                }
              : j
          )
        )
        onProgress?.(localJobId, 'error', error.message)

        if (pollIntervalsRef.current[localJobId]) {
          clearInterval(pollIntervalsRef.current[localJobId])
          delete pollIntervalsRef.current[localJobId]
        }
        setIsRunning(false)
        setCurrentJobId(null)
        return { jobId: supabaseJobId, status: 'error', error: error.message }
      }

      if (data.status === 'complete') {
        // Fetch scan results
        const { data: results, error: resultsError } = await supabase
          .from('scan_results')
          .select('*')
          .eq('job_id', supabaseJobId)
          .single()

        if (resultsError) {
          console.error('pollJobStatus: Failed to fetch results:', resultsError.message)
          throw resultsError
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
                  },
                  summary: results.summary,
                }
              : j
          )
        )

        onProgress?.(localJobId, 'complete')

        // Stop polling
        if (pollIntervalsRef.current[localJobId]) {
          clearInterval(pollIntervalsRef.current[localJobId])
          delete pollIntervalsRef.current[localJobId]
        }

        setIsRunning(false)
        setCurrentJobId(null)
        return { jobId: supabaseJobId, status: 'complete', results }
      } else if (data.status === 'error') {
        setJobs(prev =>
          prev.map(j =>
            j.id === localJobId
              ? {
                  ...j,
                  status: 'error',
                  completedAt: new Date().toISOString(),
                  error: data.error_message,
                }
              : j
          )
        )

        onProgress?.(localJobId, 'error', data.error_message)

        // Stop polling
        if (pollIntervalsRef.current[localJobId]) {
          clearInterval(pollIntervalsRef.current[localJobId])
          delete pollIntervalsRef.current[localJobId]
        }

        setIsRunning(false)
        setCurrentJobId(null)
        return { jobId: supabaseJobId, status: 'error', error: data.error_message }
      }

      // Still polling - job in progress
      return null
    } catch (err) {
      // Catch-all for unexpected errors
      console.error('pollJobStatus: Unexpected error:', err.message)
      setJobs(prev =>
        prev.map(j =>
          j.id === localJobId
            ? {
                ...j,
                status: 'error',
                completedAt: new Date().toISOString(),
                error: err.message,
              }
            : j
        )
      )
      onProgress?.(localJobId, 'error', err.message)

      if (pollIntervalsRef.current[localJobId]) {
        clearInterval(pollIntervalsRef.current[localJobId])
        delete pollIntervalsRef.current[localJobId]
      }
      setIsRunning(false)
      setCurrentJobId(null)
      return { jobId: supabaseJobId, status: 'error', error: err.message }
    }
  }, [onProgress])

  /**
   * Run the next pending job in the queue
   * @returns {Promise<{jobId: string, status: string} | null>} Job execution result or null
   */
  const runNextJob = useCallback(async () => {
    if (isRunning) {
      console.warn('runNextJob: Scan already in progress, job queued')
      return null
    }

    // Priority queue: component (1) > page (2) > flow (3)
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

    // Update job status to running
    setJobs(prev =>
      prev.map(j =>
        j.id === pendingJob.id
          ? { ...j, status: 'running', startedAt: new Date().toISOString() }
          : j
      )
    )

    onProgress?.(pendingJob.id, 'running')

    try {
      // Validate required data before API call
      if (!auditId) {
        throw new Error('Missing audit ID. Please start a new audit.')
      }
      if (!userId) {
        throw new Error('User not authenticated. Please sign in again.')
      }
      if (!pendingJob.url) {
        throw new Error('Missing URL for scan job.')
      }
      // Validate URL format
      try {
        new URL(pendingJob.url)
      } catch {
        throw new Error(`Invalid URL format: ${pendingJob.url}`)
      }
      // Validate flow steps if applicable
      if (pendingJob.scanType === 'flow' && (!pendingJob.steps || !Array.isArray(pendingJob.steps))) {
        throw new Error('Flow scans require valid steps configuration.')
      }

      // Call the server-side API endpoint with retry logic for network errors
      const MAX_RETRIES = 3
      let response
      let lastError

      for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
          response = await fetch('/api/scan', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              auditId,
              userId,
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
          break // Request succeeded (regardless of status code)
        } catch (networkErr) {
          lastError = networkErr
          // Retry on network errors (timeout, DNS failure, lost connection)
          if (attempt < MAX_RETRIES) {
            console.warn(`runNextJob: Request failed (attempt ${attempt}/${MAX_RETRIES}), retrying...`, networkErr.message)
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt)) // Exponential backoff
          }
        }
      }

      if (!response) {
        throw new Error(`Network error after ${MAX_RETRIES} attempts: ${lastError?.message || 'Unknown error'}`)
      }

      if (!response.ok) {
        // Handle non-JSON responses (HTML error pages, etc.)
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
          // Response body is not JSON
          errorMessage = `Server error: ${response.status} ${response.statusText}`
        }
        throw new Error(errorMessage)
      }

      const { jobId, summary } = await response.json()

      // Update job with supabase job ID and summary
      setJobs(prev =>
        prev.map(j =>
          j.id === pendingJob.id
            ? { ...j, supabaseJobId: jobId, summary: { ...summary, scanName: pendingJob.scanName } }
            : j
        )
      )

      // Start polling Supabase for completion
      const pollInterval = setInterval(() => {
        pollJobStatus(jobId, pendingJob.id)
      }, 2000) // Poll every 2 seconds

      pollIntervalsRef.current[pendingJob.id] = pollInterval
    } catch (err) {
      // Update job with error
      setJobs(prev =>
        prev.map(j =>
          j.id === pendingJob.id
            ? {
                ...j,
                status: 'error',
                completedAt: new Date().toISOString(),
                error: err.message,
              }
            : j
        )
      )

      onProgress?.(pendingJob.id, 'error', err.message)
      setIsRunning(false)
      setCurrentJobId(null)
      return { jobId: pendingJob.id, status: 'error', error: err.message }
    }
  }, [isRunning, jobs, auditId, userId, audit, scResults, onProgress, pollJobStatus])

  /**
   * Run all pending jobs sequentially
   */
  const runAll = useCallback(async () => {
    const pendingCount = jobs.filter(j => j.status === 'pending').length
    if (pendingCount === 0) {
      console.log('runAll: No pending jobs to run')
      return []
    }

    const results = []
    for (let i = 0; i < pendingCount; i++) {
      const result = await runNextJob()
      if (result) results.push(result)

      // Wait for current job to complete before starting next
      // Poll isRunning ref with timeout safeguard
      await new Promise((resolve, reject) => {
        const startTime = Date.now()
        const timeout = 300000 // 5 minute timeout per job
        const checkInterval = setInterval(() => {
          // Use ref to read current isRunning value without stale closure
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

  /**
   * Remove a job from the queue
   */
  const removeJob = useCallback((jobId) => {
    // Clear polling interval if exists
    if (pollIntervalsRef.current[jobId]) {
      clearInterval(pollIntervalsRef.current[jobId])
      delete pollIntervalsRef.current[jobId]
    }
    setJobs(prev => prev.filter(j => j.id !== jobId))
  }, [])

  /**
   * Clear all completed jobs
   */
  const clearCompleted = useCallback(() => {
    setJobs(prev => prev.filter(j => j.status === 'pending' || j.status === 'running'))
  }, [])

  /**
   * Load completed scan history for this audit from Supabase on mount.
   * Restores the scan history table when the user navigates away and back.
   */
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
          },
          summary: sr.summary ?? {},
        }
      })
      setJobs(loaded)
    }
    loadHistory()
  }, [auditId])

  /**
   * Cleanup polling intervals on unmount
   */
  useEffect(() => {
    return () => {
      const intervals = pollIntervalsRef.current
      Object.values(intervals).forEach(interval => clearInterval(interval))
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
