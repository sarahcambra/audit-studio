// src/lib/scanQueue.js
// Manages scan jobs so the UI stays responsive during long scans

export const ScanStatus = {
    PENDING:    'pending',
    RUNNING:    'running',
    COMPLETE:   'complete',
    ERROR:      'error',
  }
  
  export function createScanJob({ url, wcagVersion, conformanceLevel, activeSCList }) {
    return {
      id:               crypto.randomUUID(),
      url,
      wcagVersion,
      conformanceLevel,
      activeSCList,
      status:           ScanStatus.PENDING,
      createdAt:        new Date().toISOString(),
      startedAt:        null,
      completedAt:      null,
      results:          null,
      error:            null,
    }
  }
  
  export async function runScanJob(job, onProgress) {
    const { runStaticScan } = await import('./axeRunner')
  
    job.status    = ScanStatus.RUNNING
    job.startedAt = new Date().toISOString()
    onProgress?.(job)
  
    try {
      const results  = await runStaticScan({
        url:              job.url,
        wcagVersion:      job.wcagVersion,
        conformanceLevel: job.conformanceLevel,
        activeSCList:     job.activeSCList,
      })
      job.status      = ScanStatus.COMPLETE
      job.completedAt = new Date().toISOString()
      job.results     = results
    } catch (err) {
      job.status      = ScanStatus.ERROR
      job.completedAt = new Date().toISOString()
      job.error       = err.message
    }
  
    onProgress?.(job)
    return job
  }