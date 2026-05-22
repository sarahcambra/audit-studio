import { useState, useCallback, useEffect } from 'react'
import {
  Card, Tabs,
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow,
} from 'flowbite-react'
import PageScanTab from './PageScanTab'
import ComponentScanTab from './ComponentScanTab'
import FlowScanTab from './FlowScanTab'
import ScanResults from './ScanResults'
import { useScanRunner } from '../../hooks/useScanRunner'
import { getApproxScCount } from '../../lib/scCount'
import { updateAudit } from '../../lib/db/audits'
import { FileSearch, Puzzle, GitBranch, ChevronRight, CheckCircle2, AlertTriangle } from 'lucide-react'

export default function ScanPanel({ audit, auditId, userId }) {
  const [scopeItems, setScopeItems]       = useState(() => audit.scope_json?.items ?? [])
  const [savingScope, setSavingScope]     = useState(false)
  const [selectedJobId, setSelectedJobId] = useState(null)
  const [progress, setProgress]           = useState(0)

  const scResults = getApproxScCount(
    audit.wcagVersion,
    audit.conformanceLevel,
    audit.preTestAnswers || {}
  )

  const {
    jobs,
    addPageScan,
    addComponentScan,
    addFlowScan,
    runNextJob,
    isRunning,
    currentJobId,
  } = useScanRunner({
    auditId,
    userId,
    audit,
    scResults,
    onProgress: (jobId, status) => {
      if (status === 'complete') {
        setSelectedJobId(jobId)
        setProgress(100)
      } else if (status === 'running') {
        setProgress(30)
      } else if (status === 'error') {
        setProgress(0)
      }
    },
  })

  // Simulate progress while a scan is running
  useEffect(() => {
    if (isRunning && currentJobId) {
      const interval = setInterval(() => {
        setProgress(prev => (prev >= 90 ? prev : prev + 5))
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isRunning, currentJobId])

  // ── Scan handlers ────────────────────────────────────────────────────────
  const handlePageScan = useCallback((url, scanName) => {
    const jobId = addPageScan(url, scanName)
    runNextJob()
    return jobId
  }, [addPageScan, runNextJob])

  const handleComponentScan = useCallback((url, selector, scanName) => {
    const jobId = addComponentScan(url, selector, scanName)
    runNextJob()
    return jobId
  }, [addComponentScan, runNextJob])

  const handleFlowScan = useCallback((url, steps, scanName) => {
    const jobId = addFlowScan(url, steps, scanName)
    runNextJob()
    return jobId
  }, [addFlowScan, runNextJob])

  // ── Scope management ─────────────────────────────────────────────────────
  const saveScope = useCallback(async (newItems) => {
    setSavingScope(true)
    setScopeItems(newItems)
    await updateAudit(auditId, { scope_json: { items: newItems } })
    setSavingScope(false)
  }, [auditId])

  const addScopeItem = useCallback((item) => {
    saveScope([...scopeItems, item])
  }, [scopeItems, saveScope])

  const removeScopeItem = useCallback((idx) => {
    saveScope(scopeItems.filter((_, i) => i !== idx))
  }, [scopeItems, saveScope])

  // Add _idx so tabs can reference each item's position in the full array
  const allItems   = scopeItems.map((item, idx) => ({ ...item, _idx: idx }))
  const pages      = allItems.filter(i => i.type === 'Page')
  const components = allItems.filter(i => i.type === 'Component')
  const flows      = allItems.filter(i => i.type === 'Flow')

  const completedJobs = jobs.filter(j => j.status === 'complete')
  const selectedJob   = jobs.find(j => j.id === selectedJobId)

  const getJobForItem = useCallback((item) => {
    const matches = jobs.filter(j => j.scanName === item.name || j.url === item.url)
    return matches[matches.length - 1] ?? null
  }, [jobs])

  return (
    <div className="space-y-4">

      {/* ── Scan type tabs ───────────────────────────────────────────────── */}
      <Card className="border border-default shadow-sm rounded bg-neutral-primary p-0 overflow-hidden">
        <Tabs aria-label="Scan type" variant="underline">

          <Tabs.Item title="Page scan" icon={FileSearch}>
            <div className="p-5">
              <PageScanTab
                pages={pages}
                onScan={handlePageScan}
                onAddItem={(item) => addScopeItem({ ...item, type: 'Page' })}
                onRemoveItem={(idx) => removeScopeItem(idx)}
                getJobForItem={getJobForItem}
                isRunning={isRunning}
                progress={progress}
                savingScope={savingScope}
              />
            </div>
          </Tabs.Item>

          <Tabs.Item title="Component scan" icon={Puzzle}>
            <div className="p-5">
              <ComponentScanTab
                components={components}
                onScan={handleComponentScan}
                onAddItem={(item) => addScopeItem({ ...item, type: 'Component' })}
                onRemoveItem={(idx) => removeScopeItem(idx)}
                getJobForItem={getJobForItem}
                isRunning={isRunning}
                progress={progress}
                savingScope={savingScope}
              />
            </div>
          </Tabs.Item>

          <Tabs.Item title="Flow scan" icon={GitBranch}>
            <div className="p-5">
              <FlowScanTab
                flows={flows}
                onScan={handleFlowScan}
                onAddItem={(item) => addScopeItem({ ...item, type: 'Flow' })}
                onRemoveItem={(idx) => removeScopeItem(idx)}
                getJobForItem={getJobForItem}
                isRunning={isRunning}
                progress={progress}
                savingScope={savingScope}
              />
            </div>
          </Tabs.Item>

        </Tabs>
      </Card>

      {/* ── Inline scan results ──────────────────────────────────────────── */}
      {selectedJob && (
        <ScanResults job={selectedJob} onClose={() => setSelectedJobId(null)} />
      )}

      {/* ── Scan history table ───────────────────────────────────────────── */}
      {completedJobs.length > 0 && (
        <Card className="border border-default shadow-sm rounded bg-neutral-primary p-0 overflow-hidden">
          <div className="border-b border-default px-5 py-4">
            <h2 className="text-base font-semibold text-heading">Scan history</h2>
          </div>
          <div className="overflow-x-auto">
            <Table hoverable theme={{ root: { wrapper: 'static' } }}>
              <TableHead className="bg-neutral-tertiary text-xs uppercase tracking-wide text-body-subtle">
                <TableHeadCell scope="col" className="px-5 py-3 font-medium">Name</TableHeadCell>
                <TableHeadCell scope="col" className="px-5 py-3 font-medium">Type</TableHeadCell>
                <TableHeadCell scope="col" className="px-5 py-3 font-medium">Result</TableHeadCell>
                <TableHeadCell scope="col" className="px-5 py-3 font-medium">
                  <span className="sr-only">View</span>
                </TableHeadCell>
              </TableHead>
              <TableBody className="divide-y divide-default">
                {completedJobs.map(job => (
                  <TableRow key={job.id} className="bg-neutral-primary hover:bg-neutral-tertiary/50">
                    <TableCell className="px-5 py-3 font-medium text-heading">{job.scanName}</TableCell>
                    <TableCell className="px-5 py-3 text-xs capitalize text-body-subtle">{job.scanType}</TableCell>
                    <TableCell className="px-5 py-3 text-xs">
                      {job.results?.violations?.length > 0 ? (
                        <span className="flex items-center gap-1 text-fg-danger">
                          <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
                          {job.results.violations.length} violation{job.results.violations.length !== 1 ? 's' : ''}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-fg-success">
                          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                          Clean
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="px-5 py-3">
                      <button
                        onClick={() => setSelectedJobId(prev => prev === job.id ? null : job.id)}
                        className="flex items-center gap-1 text-xs font-medium text-fg-brand hover:underline"
                      >
                        {selectedJobId === job.id ? 'Hide' : 'View'}
                        <ChevronRight className="h-3 w-3" aria-hidden="true" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}

    </div>
  )
}
