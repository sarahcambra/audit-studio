import { useState, useMemo } from 'react'
import { Button, Label, Spinner, TextInput } from 'flowbite-react'
import { Globe, Play, Trash2, Plus, CheckCircle2, AlertTriangle } from 'lucide-react'
import ScanProgressBanner from './ScanProgressBanner'
import { normaliseUrl, isValidUrl } from '@/lib/urlUtils'
import { DataTable, Badge } from '@shared/ui'

export default function PageScanTab({
  pages, onScan, onAddItem, onRemoveItem,
  getJobForItem, isRunning, savingScope,
}) {
  const [showAddForm, setShowAddForm]       = useState(false)
  const [addName, setAddName]               = useState('')
  const [addUrl, setAddUrl]                 = useState('')
  const [addUrlError, setAddUrlError]       = useState('')
  const [runningForIdx, setRunningForIdx]   = useState(null)

  const validateAddUrl = (val) => {
    const u = normaliseUrl(val)
    if (!u) { setAddUrlError('URL is required'); return '' }
    if (!isValidUrl(u)) { setAddUrlError('Enter a valid URL (e.g. example.com)'); return '' }
    setAddUrlError(''); return u
  }

  const handleAdd = () => {
    const validUrl = validateAddUrl(addUrl)
    if (!validUrl || !addName.trim()) return
    onAddItem({ name: addName.trim(), url: validUrl, componentIdentifier: '' })
    setAddName(''); setAddUrl(''); setAddUrlError('')
    setShowAddForm(false)
  }

  const handleRunScan = (item) => {
    setRunningForIdx(item._idx)
    onScan(item.url, item.name)
  }

  const ScanStatusBadge = ({ job }) => {
    if (!job) return <Badge color="gray" size="sm">Not scanned</Badge>
    if (job.status === 'error') return (
      <Badge color="red" size="sm" title={job.error ?? 'Scan failed'}>
        Error
      </Badge>
    )
    if (job.status === 'running') return (
      <Badge color="yellow" size="sm">
        Running…
      </Badge>
    )
    if (job.status === 'pending') return (
      <Badge color="blue" size="sm">
        Queued
      </Badge>
    )
    if ((job.summary?.totalViolations ?? 0) > 0) return (
      <Badge color="red" size="sm">
        {job.summary.totalViolations} issue{job.summary.totalViolations !== 1 ? 's' : ''}
      </Badge>
    )
    return <Badge color="green" size="sm">Clean</Badge>
  }

  // Columns for DataTable
  const columns = useMemo(() => [
    { key: 'name', header: 'Page name', width: 'min-w-48', render: (item) => (
      <span className="font-medium text-gray-900 dark:text-white">{item.name || '—'}</span>
    )},
    { key: 'url', header: 'URL', width: 'min-w-56', render: (item) => (
      <span className="max-w-[220px] truncate font-mono text-xs text-gray-500 dark:text-gray-400">
        {item.url || '—'}
      </span>
    )},
    { key: 'scan', header: 'Last scan', width: 'w-40', render: (item) => {
      const job = getJobForItem(item)
      return <ScanStatusBadge job={job} />
    }},
    { key: 'actions', header: '', width: 'w-40', render: (item) => {
      const job = getJobForItem(item)
      const isThisRunning = isRunning && runningForIdx === item._idx
      return (
        <div className="flex items-center gap-2">
          <Button
            color="primary"
            size="sm"
            onClick={() => handleRunScan(item)}
            disabled={isRunning || !item.url}
            aria-label={`Run scan for ${item.name}`}
          >
            {isThisRunning
              ? <Spinner size="xs" color="white" />
              : <Play className="mr-1 h-3 w-3" aria-hidden="true" />
            }
            Scan
          </Button>
          <Button
            color="gray"
            size="sm"
            onClick={() => onRemoveItem(item._idx)}
            disabled={savingScope}
            aria-label={`Remove ${item.name} from scope`}
          >
            <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
          </Button>
        </div>
      )
    }},
  ], [getJobForItem, isRunning, runningForIdx, savingScope])

  // Prepare data with _idx preserved
  const data = useMemo(() => pages, [pages])

  // ── Empty state ───────────────────────────────────────────────────────────
  if (pages.length === 0 && !showAddForm) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 rounded-lg bg-primary-50 p-3 dark:bg-primary-900/30">
          <Globe className="h-7 w-7 text-primary-600 dark:text-primary-400" aria-hidden="true" />
        </div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">No pages in scope</h3>
        <p className="mt-1 mb-5 max-w-xs text-xs text-gray-500 dark:text-gray-400">
          Add the pages you want to scan for accessibility issues.
        </p>
        <Button color="primary" size="sm" onClick={() => setShowAddForm(true)}>
          <Plus className="mr-1.5 h-4 w-4" aria-hidden="true" />
          Add page
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">

      {/* ── Scanning progress banner ──────────────────────────────────────── */}
      <ScanProgressBanner isRunning={isRunning} />

      {/* ── Pages table ───────────────────────────────────────────────────── */}
      {pages.length > 0 && (
        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
          <DataTable
            columns={columns}
            data={data}
            keyExtractor={(item) => item._idx}
            hoverClassName="hover:bg-gray-100 dark:hover:bg-gray-700"
            borderClassName="border-b border-gray-200 dark:border-gray-700"
          />
        </div>
      )}

      {/* ── Add page form / button ────────────────────────────────────────── */}
      {showAddForm ? (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
          <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">Add page to scope</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="add-page-name" className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">
                Page name
              </Label>
              <TextInput
                id="add-page-name"
                placeholder="e.g. Homepage"
                value={addName}
                onChange={e => setAddName(e.target.value)}
                sizing="sm"
              />
            </div>
            <div>
              <Label htmlFor="add-page-url" className="mb-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300">
                URL
              </Label>
              <TextInput
                id="add-page-url"
                type="text"
                placeholder="example.com"
                value={addUrl}
                onChange={e => { setAddUrl(e.target.value); if (addUrlError) validateAddUrl(e.target.value) }}
                onBlur={e => validateAddUrl(e.target.value)}
                color={addUrlError ? 'failure' : undefined}
                helperText={addUrlError || undefined}
                sizing="sm"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Button
              color="primary"
              size="sm"
              onClick={handleAdd}
              disabled={savingScope || !addName.trim() || !addUrl.trim()}
            >
              {savingScope ? 'Saving…' : 'Add page'}
            </Button>
            <Button
              color="gray"
              size="sm"
              onClick={() => { setShowAddForm(false); setAddName(''); setAddUrl(''); setAddUrlError('') }}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-1.5 text-xs font-medium text-primary-700 hover:underline dark:text-primary-500"
        >
          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
          Add page to scope
        </button>
      )}

    </div>
  )
}
