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
import { FileSearch, Puzzle, GitBranch, ChevronRight, CheckCircle2, AlertTriangle, XCircle, ChevronDown } from 'lucide-react'
import { customTheme } from '../../theme'

export default function ScanPanel({ audit, auditId, userId }) {
  const [scopeItems, setScopeItems]       = useState(() => audit.scope_json?.items ?? [])
  const [savingScope, setSavingScope]     = useState(false)
  const [selectedJobId, setSelectedJobId] = useState(null)
  const [expandedError, setExpandedError] = useState(null) // jobId whose error is expanded

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
  } = useScanRunner({
    auditId,
    userId,
    audit,
    scResults,
    onProgress: (jobId, status) => {
      if (status === 'complete') setSelectedJobId(jobId)
      if (status === 'error')    setExpandedError(jobId)
    },
  })

  // ── Auto-run: fire runNextJob after state settles (fixes race condition
  //   where runNextJob() called synchronously after addPageScan() would read
  //   stale jobs state and find no pending items)
  useEffect(() => {
    if (!isRunning && jobs.some(j => j.status === 'pending')) {
      runNextJob()
    }
  // runNextJob is stable (useCallback); jobs/isRunning change drives this
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobs, isRunning])

  // ── Scan handlers ────────────────────────────────────────────────────────
  // Just enqueue — the useEffect above triggers runNextJob once state settles
  const handlePageScan = useCallback((url, scanName) => {
    return addPageScan(url, scanName)
  }, [addPageScan])

  const handleComponentScan = useCallback((url, selector, scanName) => {
    return addComponentScan(url, selector, scanName)
  }, [addComponentScan])

  const handleFlowScan = useCallback((url, steps, scanName) => {
    return addFlowScan(url, steps, scanName)
  }, [addFlowScan])

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
  const errorJobs     = jobs.filter(j => j.status === 'error')
  const selectedJob   = jobs.find(j => j.id === selectedJobId)

  const getJobForItem = useCallback((item) => {
    const matches = jobs.filter(j => j.scanName === item.name || j.url === item.url)
    return matches[matches.length - 1] ?? null
  }, [jobs])

  return (
    <div className="space-y-4">

      {/* ── Scan type tabs ───────────────────────────────────────────────── */}
      <Card theme={customTheme.card}>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900/30">
            <FileSearch className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Run Scans</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Select scan type and configure settings</p>
          </div>
        </div>

        <Tabs aria-label="Scan type" variant="underline">
          <Tabs.Item title="Pages" icon={FileSearch}>
            <div className="pt-4">
              <PageScanTab
                pages={pages}
                onScan={handlePageScan}
                onAddItem={(item) => addScopeItem({ ...item, type: 'Page' })}
                onRemoveItem={(idx) => removeScopeItem(idx)}
                getJobForItem={getJobForItem}
                isRunning={isRunning}
                savingScope={savingScope}
              />
            </div>
          </Tabs.Item>

          <Tabs.Item title="Components" icon={Puzzle}>
            <div className="pt-4">
              <ComponentScanTab
                components={components}
                onScan={handleComponentScan}
                onAddItem={(item) => addScopeItem({ ...item, type: 'Component' })}
                onRemoveItem={(idx) => removeScopeItem(idx)}
                getJobForItem={getJobForItem}
                isRunning={isRunning}
                savingScope={savingScope}
              />
            </div>
          </Tabs.Item>

          <Tabs.Item title="Flows" icon={GitBranch}>
            <div className="pt-4">
              <FlowScanTab
                flows={flows}
                onScan={handleFlowScan}
                onAddItem={(item) => addScopeItem({ ...item, type: 'Flow' })}
                onRemoveItem={(idx) => removeScopeItem(idx)}
                getJobForItem={getJobForItem}
                isRunning={isRunning}
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

      {/* ── Scan errors ─────────────────────────────────────────────────── */}
      {errorJobs.length > 0 && (
        <Card theme={customTheme.card} className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/40">
              <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-700 dark:text-red-400">Scan Errors</h3>
              <p className="text-sm text-red-600 dark:text-red-300">{errorJobs.length} error{errorJobs.length !== 1 ? 's' : ''} occurred</p>
            </div>
          </div>
          <div className="divide-y divide-red-200 dark:divide-red-800">
            {errorJobs.map(job => (
              <div key={job.id} className="py-3">
                <button
                  className="flex w-full items-center justify-between gap-2 text-left"
                  onClick={() => setExpandedError(prev => prev === job.id ? null : job.id)}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white truncate">{job.scanName}</span>
                    <span className="text-xs text-gray-500 capitalize shrink-0">({job.scanType})</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-gray-400 shrink-0 transition-transform ${expandedError === job.id ? 'rotate-180' : ''}`} />
                </button>
                {expandedError === job.id && (
                  <div className="mt-2 rounded-lg bg-red-100 dark:bg-red-900/40 border border-red-200 dark:border-red-800 p-3">
                    <p className="text-xs font-mono text-red-700 dark:text-red-300 whitespace-pre-wrap break-all leading-relaxed">
                      {job.error ?? 'Unknown error — check browser console and vercel dev terminal for details.'}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* ── Scan history table ───────────────────────────────────────────── */}
      {completedJobs.length > 0 && (
        <Card theme={customTheme.card}>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-900/30">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Scan History</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{completedJobs.length} completed scan{completedJobs.length !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table
              hoverable
              theme={{
                ...customTheme.table,
                head: {
                  base: 'bg-gray-50 dark:bg-gray-700',
                  cell: { base: 'p-4 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400' }
                }
              }}
            >
              <TableHead>
                <TableRow>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell>Type</TableHeadCell>
                  <TableHeadCell>Result</TableHeadCell>
                  <TableHeadCell><span className="sr-only">View</span></TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody className="divide-y divide-gray-200 dark:divide-gray-700">
                {completedJobs.map(job => (
                  <TableRow key={job.id} className="bg-white dark:bg-gray-800">
                    <TableCell className="p-4 font-medium text-gray-900 dark:text-white">{job.scanName}</TableCell>
                    <TableCell className="p-4 text-sm capitalize text-gray-500 dark:text-gray-400">{job.scanType}</TableCell>
                    <TableCell className="p-4">
                      {(job.summary?.totalViolations ?? 0) > 0 ? (
                        <span className="flex items-center gap-1 text-sm text-red-700 dark:text-red-400">
                          <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                          {job.summary.totalViolations} violation{job.summary.totalViolations !== 1 ? 's' : ''}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-sm text-green-700 dark:text-green-400">
                          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                          Clean
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="p-4">
                      <button
                        onClick={() => setSelectedJobId(prev => prev === job.id ? null : job.id)}
                        className="flex items-center gap-1 text-sm font-medium text-primary-700 hover:underline dark:text-primary-500"
                      >
                        {selectedJobId === job.id ? 'Hide' : 'View'}
                        <ChevronRight className="h-4 w-4" aria-hidden="true" />
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
