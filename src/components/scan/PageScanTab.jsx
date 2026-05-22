import { useState } from 'react'
import {
  Badge, Button, Label, Spinner, TextInput,
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow,
} from 'flowbite-react'
import { Globe, Play, Trash2, Plus, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react'
import { customTheme } from '../../theme'

export default function PageScanTab({
  pages, onScan, onAddItem, onRemoveItem,
  getJobForItem, isRunning, progress, savingScope,
}) {
  const [showAddForm, setShowAddForm]       = useState(false)
  const [addName, setAddName]               = useState('')
  const [addUrl, setAddUrl]                 = useState('')
  const [addUrlError, setAddUrlError]       = useState('')
  const [runningForIdx, setRunningForIdx]   = useState(null)

  const normaliseUrl = (val) => {
    let u = val.trim()
    if (u && !u.match(/^https?:\/\//i)) u = `https://${u}`
    return u
  }

  const validateAddUrl = (val) => {
    const u = normaliseUrl(val)
    if (!u) { setAddUrlError('URL is required'); return '' }
    try { new URL(u); setAddUrlError(''); return u }
    catch { setAddUrlError('Enter a valid URL (e.g. https://example.com)'); return '' }
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
    if (!job) return <Badge color="gray" size="xs" className="border border-gray-300 dark:border-gray-500">Not scanned</Badge>
    if (job.status !== 'complete') return (
      <Badge color="warning" size="xs" className="capitalize border border-orange-200 dark:border-orange-700">
        {job.status}
      </Badge>
    )
    if (job.results?.violations?.length > 0) return (
      <Badge color="failure" size="xs" icon={AlertTriangle} className="border border-red-200 dark:border-red-700">
        {job.results.violations.length} issue{job.results.violations.length !== 1 ? 's' : ''}
      </Badge>
    )
    return <Badge color="success" size="xs" icon={CheckCircle2} className="border border-emerald-200 dark:border-emerald-700">Clean</Badge>
  }

  // ── Empty state ───────────────────────────────────────────────────────────
  if (pages.length === 0 && !showAddForm) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 rounded-base bg-brand-softer p-3">
          <Globe className="h-7 w-7 text-fg-brand" aria-hidden="true" />
        </div>
        <h3 className="text-sm font-semibold text-heading">No pages in scope</h3>
        <p className="mt-1 mb-5 max-w-xs text-xs text-body-subtle">
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
      {isRunning && (
        <div className="flex items-center gap-3 rounded border border-brand-subtle bg-brand-softer px-4 py-3">
          <Loader2 className="h-4 w-4 shrink-0 animate-spin text-fg-brand" aria-hidden="true" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-heading">Scanning…</p>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-brand-soft">
              <div
                className="h-1.5 rounded-full bg-primary-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          <span className="shrink-0 text-xs text-body-subtle">{progress}%</span>
        </div>
      )}

      {/* ── Pages table ───────────────────────────────────────────────────── */}
      {pages.length > 0 && (
        <div className="overflow-x-auto rounded border border-default">
          <Table hoverable theme={{ root: { wrapper: 'static' } }}>
            <TableHead className="bg-neutral-tertiary text-xs uppercase tracking-wide text-body-subtle">
              <TableHeadCell scope="col" className="px-5 py-3 font-medium">Page name</TableHeadCell>
              <TableHeadCell scope="col" className="px-5 py-3 font-medium">URL</TableHeadCell>
              <TableHeadCell scope="col" className="px-5 py-3 font-medium">Last scan</TableHeadCell>
              <TableHeadCell scope="col" className="px-5 py-3 font-medium">
                <span className="sr-only">Actions</span>
              </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y divide-default">
              {pages.map((item) => {
                const job = getJobForItem(item)
                const isThisRunning = isRunning && runningForIdx === item._idx
                return (
                  <TableRow key={item._idx} className="bg-neutral-primary hover:bg-neutral-tertiary/50">
                    <TableCell className="px-5 py-3 font-medium text-heading">
                      {item.name || '—'}
                    </TableCell>
                    <TableCell className="max-w-[220px] truncate px-5 py-3 font-mono text-xs text-body-subtle">
                      {item.url || '—'}
                    </TableCell>
                    <TableCell className="px-5 py-3">
                      <ScanStatusBadge job={job} />
                    </TableCell>
                    <TableCell className="px-5 py-3">
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
                          className="p-1.5"
                          onClick={() => onRemoveItem(item._idx)}
                          disabled={savingScope}
                          aria-label={`Remove ${item.name} from scope`}
                        >
                          <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      )}

      {/* ── Add page form / button ────────────────────────────────────────── */}
      {showAddForm ? (
        <div className="rounded border border-default bg-neutral-tertiary/40 p-5">
          <h3 className="mb-4 text-sm font-semibold text-heading">Add page to scope</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="add-page-name" className="mb-1.5 block text-xs font-medium text-body">
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
              <Label htmlFor="add-page-url" className="mb-1.5 block text-xs font-medium text-body">
                URL
              </Label>
              <TextInput
                id="add-page-url"
                type="url"
                placeholder="https://example.com"
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
          className="flex items-center gap-1.5 text-xs font-medium text-fg-brand hover:underline"
        >
          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
          Add page to scope
        </button>
      )}

    </div>
  )
}
