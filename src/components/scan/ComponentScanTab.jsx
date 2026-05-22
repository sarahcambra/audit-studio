import { useState } from 'react'
import {
  Badge, Button, Label, Select, Spinner, TextInput,
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow,
} from 'flowbite-react'
import { Puzzle, Play, Trash2, Plus, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react'
import { COMPONENT_SELECTORS } from '../../lib/componentSelectors'
import { customTheme } from '../../theme'

export default function ComponentScanTab({
  components, onScan, onAddItem, onRemoveItem,
  getJobForItem, isRunning, progress, savingScope,
}) {
  const [showAddForm, setShowAddForm]           = useState(false)
  const [addName, setAddName]                   = useState('')
  const [addUrl, setAddUrl]                     = useState('')
  const [addSelector, setAddSelector]           = useState('')
  const [addComponentType, setAddComponentType] = useState('')
  const [addUrlError, setAddUrlError]           = useState('')
  const [addSelectorError, setAddSelectorError] = useState('')
  const [runningForIdx, setRunningForIdx]       = useState(null)

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

  const validateAddSelector = (val) => {
    if (!val.trim()) { setAddSelectorError('CSS selector is required'); return false }
    setAddSelectorError('')
    return true
  }

  const handleComponentPreset = (e) => {
    const selected = e.target.value
    setAddComponentType(selected)
    setAddSelectorError('')
    if (selected) {
      const preset = COMPONENT_SELECTORS.find(c => c.label === selected)
      if (preset) setAddSelector(preset.selector)
    }
  }

  const handleAdd = () => {
    const validUrl = validateAddUrl(addUrl)
    const validSelector = validateAddSelector(addSelector)
    if (!validUrl || !validSelector || !addName.trim()) return
    onAddItem({ name: addName.trim(), url: validUrl, componentIdentifier: addSelector.trim() })
    setAddName(''); setAddUrl(''); setAddSelector(''); setAddComponentType('')
    setAddUrlError(''); setAddSelectorError('')
    setShowAddForm(false)
  }

  const handleRunScan = (item) => {
    setRunningForIdx(item._idx)
    onScan(item.url, item.componentIdentifier, item.name)
  }

  const ScanStatusBadge = ({ job }) => {
    if (!job) return <Badge theme={customTheme.badge} color="grayBordered" size="xs">Not scanned</Badge>
    if (job.status !== 'complete') return (
      <Badge theme={customTheme.badge} color="warningBordered" size="xs" className="capitalize">
        {job.status}
      </Badge>
    )
    if (job.results?.violations?.length > 0) return (
      <Badge theme={customTheme.badge} color="dangerBordered" size="xs" icon={AlertTriangle}>
        {job.results.violations.length} issue{job.results.violations.length !== 1 ? 's' : ''}
      </Badge>
    )
    return <Badge theme={customTheme.badge} color="successBordered" size="xs" icon={CheckCircle2}>Clean</Badge>
  }

  // ── Empty state ───────────────────────────────────────────────────────────
  if (components.length === 0 && !showAddForm) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 rounded-base bg-brand-softer p-3">
          <Puzzle className="h-7 w-7 text-fg-brand" aria-hidden="true" />
        </div>
        <h3 className="text-sm font-semibold text-heading">No components in scope</h3>
        <p className="mt-1 mb-5 max-w-xs text-xs text-body-subtle">
          Add UI components you want to test in isolation (e.g. navbar, modal, footer).
        </p>
        <Button color="primary" size="sm" onClick={() => setShowAddForm(true)}>
          <Plus className="mr-1.5 h-4 w-4" aria-hidden="true" />
          Add component
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
            <p className="text-sm font-medium text-heading">Scanning component…</p>
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

      {/* ── Components table ──────────────────────────────────────────────── */}
      {components.length > 0 && (
        <div className="overflow-x-auto rounded border border-default">
          <Table hoverable theme={{ root: { wrapper: 'static' } }}>
            <TableHead className="bg-neutral-tertiary text-xs uppercase tracking-wide text-body-subtle">
              <TableHeadCell scope="col" className="px-5 py-3 font-medium">Component</TableHeadCell>
              <TableHeadCell scope="col" className="px-5 py-3 font-medium">URL</TableHeadCell>
              <TableHeadCell scope="col" className="px-5 py-3 font-medium">Selector</TableHeadCell>
              <TableHeadCell scope="col" className="px-5 py-3 font-medium">Last scan</TableHeadCell>
              <TableHeadCell scope="col" className="px-5 py-3 font-medium">
                <span className="sr-only">Actions</span>
              </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y divide-default">
              {components.map((item) => {
                const job = getJobForItem(item)
                const isThisRunning = isRunning && runningForIdx === item._idx
                return (
                  <TableRow key={item._idx} className="bg-neutral-primary hover:bg-neutral-tertiary/50">
                    <TableCell className="px-5 py-3 font-medium text-heading">
                      {item.name || '—'}
                    </TableCell>
                    <TableCell className="max-w-[180px] truncate px-5 py-3 font-mono text-xs text-body-subtle">
                      {item.url || '—'}
                    </TableCell>
                    <TableCell className="px-5 py-3">
                      {item.componentIdentifier ? (
                        <code className="rounded-xs bg-neutral-tertiary px-1.5 py-0.5 font-mono text-xs text-body">
                          {item.componentIdentifier}
                        </code>
                      ) : (
                        <span className="text-xs text-body-subtle">—</span>
                      )}
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
                          disabled={isRunning || !item.url || !item.componentIdentifier}
                          aria-label={`Run component scan for ${item.name}`}
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

      {/* ── Add component form / button ───────────────────────────────────── */}
      {showAddForm ? (
        <div className="rounded border border-default bg-neutral-tertiary/40 p-5">
          <h3 className="mb-4 text-sm font-semibold text-heading">Add component to scope</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="add-comp-name" className="mb-1.5 block text-xs font-medium text-body">
                Component name
              </Label>
              <TextInput
                id="add-comp-name"
                placeholder="e.g. Main navigation"
                value={addName}
                onChange={e => setAddName(e.target.value)}
                sizing="sm"
              />
            </div>
            <div>
              <Label htmlFor="add-comp-url" className="mb-1.5 block text-xs font-medium text-body">
                URL
              </Label>
              <TextInput
                id="add-comp-url"
                type="url"
                placeholder="https://example.com/page"
                value={addUrl}
                onChange={e => { setAddUrl(e.target.value); if (addUrlError) validateAddUrl(e.target.value) }}
                onBlur={e => validateAddUrl(e.target.value)}
                color={addUrlError ? 'failure' : undefined}
                helperText={addUrlError || undefined}
                sizing="sm"
              />
            </div>
            <div>
              <Label htmlFor="add-comp-type" className="mb-1.5 block text-xs font-medium text-body">
                Component preset <span className="text-body-subtle">(optional)</span>
              </Label>
              <Select
                id="add-comp-type"
                value={addComponentType}
                onChange={handleComponentPreset}
                sizing="sm"
              >
                <option value="">Select to auto-fill selector…</option>
                {COMPONENT_SELECTORS.map(c => (
                  <option key={c.label} value={c.label}>{c.label}</option>
                ))}
              </Select>
            </div>
            <div>
              <Label htmlFor="add-comp-selector" className="mb-1.5 block text-xs font-medium text-body">
                CSS selector
              </Label>
              <TextInput
                id="add-comp-selector"
                placeholder="e.g. nav, [role='dialog'], footer"
                value={addSelector}
                onChange={e => {
                  setAddSelector(e.target.value)
                  setAddComponentType('')
                  if (addSelectorError) validateAddSelector(e.target.value)
                }}
                onBlur={e => validateAddSelector(e.target.value)}
                color={addSelectorError ? 'failure' : undefined}
                helperText={addSelectorError || undefined}
                sizing="sm"
                className="[&_input]:font-mono"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Button
              color="primary"
              size="sm"
              onClick={handleAdd}
              disabled={savingScope || !addName.trim() || !addUrl.trim() || !addSelector.trim()}
            >
              {savingScope ? 'Saving…' : 'Add component'}
            </Button>
            <Button
              color="gray"
              size="sm"
              onClick={() => {
                setShowAddForm(false)
                setAddName(''); setAddUrl(''); setAddSelector(''); setAddComponentType('')
                setAddUrlError(''); setAddSelectorError('')
              }}
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
          Add component to scope
        </button>
      )}

    </div>
  )
}
