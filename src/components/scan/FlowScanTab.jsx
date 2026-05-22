import { useState } from 'react'
import {
  Badge, Button, Label, Select, Spinner, TextInput,
  Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow,
} from 'flowbite-react'
import {
  GitBranch, Play, Trash2, Plus, CheckCircle2, AlertTriangle,
  Loader2, ChevronDown, ChevronUp, ArrowUp, ArrowDown, X,
} from 'lucide-react'
import { customTheme } from '../../theme'

// ── Flow step templates ───────────────────────────────────────────────────────

const FLOW_TEMPLATES = {
  login: {
    name: 'Login Flow',
    steps: [
      { name: 'Enter email',    action: 'fill',  selector: 'input[type="email"]',    value: 'test@example.com', waitFor: 'input[type="password"]', scanAfter: false },
      { name: 'Enter password', action: 'fill',  selector: 'input[type="password"]', value: 'password123',       waitFor: 'button[type="submit"]',  scanAfter: false },
      { name: 'Submit login',   action: 'click', selector: 'button[type="submit"]',  value: '',                  waitFor: '[role="main"]',          scanAfter: true  },
    ],
  },
  search: {
    name: 'Search Flow',
    steps: [
      { name: 'Enter search term', action: 'fill',  selector: 'input[type="search"]',  value: 'accessibility', waitFor: 'button[type="submit"]', scanAfter: false },
      { name: 'Submit search',     action: 'click', selector: 'button[type="submit"]', value: '',              waitFor: '[role="list"]',         scanAfter: true  },
    ],
  },
  modal: {
    name: 'Modal Interaction',
    steps: [
      { name: 'Open modal',  action: 'click', selector: '[data-modal-toggle]', value: '', waitFor: '[role="dialog"]', scanAfter: true },
      { name: 'Close modal', action: 'click', selector: '[data-modal-close]',  value: '', waitFor: '[role="main"]',   scanAfter: true },
    ],
  },
  form: {
    name: 'Form Submission',
    steps: [
      { name: 'Fill name',  action: 'fill',  selector: 'input[name="name"]',    value: 'John Doe',         waitFor: 'input[name="email"]',   scanAfter: false },
      { name: 'Fill email', action: 'fill',  selector: 'input[name="email"]',   value: 'john@example.com', waitFor: 'button[type="submit"]', scanAfter: false },
      { name: 'Submit',     action: 'click', selector: 'button[type="submit"]', value: '',                 waitFor: '[role="alert"]',        scanAfter: true  },
    ],
  },
}

const ACTION_OPTIONS = [
  { value: 'click',    label: 'Click'    },
  { value: 'fill',     label: 'Fill'     },
  { value: 'navigate', label: 'Navigate' },
  { value: 'wait',     label: 'Wait'     },
]

// ── Step builder ──────────────────────────────────────────────────────────────

function StepBuilder({ steps, setSteps }) {
  const addStep = () => setSteps(prev => [
    ...prev,
    { id: Date.now() + Math.random(), name: '', action: 'click', selector: '', value: '', waitFor: '', scanAfter: true },
  ])

  const update = (i, field, val) =>
    setSteps(prev => prev.map((s, idx) => idx === i ? { ...s, [field]: val } : s))

  const remove = (i) => setSteps(prev => prev.filter((_, idx) => idx !== i))

  const move = (i, dir) => setSteps(prev => {
    const arr = [...prev]
    ;[arr[i], arr[i + dir]] = [arr[i + dir], arr[i]]
    return arr
  })

  return (
    <div className="space-y-3">
      {steps.length === 0 && (
        <p className="text-xs text-body-subtle">No steps yet. Add a step or load a template.</p>
      )}
      {steps.map((step, i) => (
        <div key={step.id} className="rounded border border-default bg-neutral-primary p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-heading">Step {i + 1}</span>
            <div className="flex items-center gap-1">
              <Button
                color="gray"
                size="sm"
                className="p-1"
                disabled={i === 0}
                onClick={() => move(i, -1)}
                aria-label="Move step up"
              >
                <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>
              <Button
                color="gray"
                size="sm"
                className="p-1"
                disabled={i === steps.length - 1}
                onClick={() => move(i, 1)}
                aria-label="Move step down"
              >
                <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>
              <Button
                color="failure"
                size="sm"
                className="p-1"
                onClick={() => remove(i)}
                aria-label={`Remove step ${i + 1}`}
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <Label htmlFor={`step-name-${step.id}`} className="mb-1.5 block text-xs font-medium text-body">
                Name
              </Label>
              <TextInput
                id={`step-name-${step.id}`}
                placeholder="e.g. Click submit"
                value={step.name}
                onChange={e => update(i, 'name', e.target.value)}
                sizing="sm"
              />
            </div>
            <div>
              <Label htmlFor={`step-action-${step.id}`} className="mb-1.5 block text-xs font-medium text-body">
                Action
              </Label>
              <Select
                id={`step-action-${step.id}`}
                value={step.action}
                onChange={e => update(i, 'action', e.target.value)}
                sizing="sm"
              >
                {ACTION_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </Select>
            </div>
            {step.action !== 'wait' && (
              <div>
                <Label htmlFor={`step-selector-${step.id}`} className="mb-1.5 block text-xs font-medium text-body">
                  CSS selector
                </Label>
                <TextInput
                  id={`step-selector-${step.id}`}
                  placeholder="e.g. button[type='submit']"
                  value={step.selector}
                  onChange={e => update(i, 'selector', e.target.value)}
                  sizing="sm"
                  className="[&_input]:font-mono"
                />
              </div>
            )}
            {(step.action === 'fill' || step.action === 'wait') && (
              <div>
                <Label htmlFor={`step-value-${step.id}`} className="mb-1.5 block text-xs font-medium text-body">
                  {step.action === 'wait' ? 'Wait (ms)' : 'Value'}
                </Label>
                <TextInput
                  id={`step-value-${step.id}`}
                  type={step.action === 'wait' ? 'number' : 'text'}
                  placeholder={step.action === 'wait' ? '1000' : 'Input value'}
                  value={step.value}
                  onChange={e => update(i, 'value', e.target.value)}
                  sizing="sm"
                />
              </div>
            )}
            <div>
              <Label htmlFor={`step-waitfor-${step.id}`} className="mb-1.5 block text-xs font-medium text-body">
                Wait for <span className="text-body-subtle">(optional)</span>
              </Label>
              <TextInput
                id={`step-waitfor-${step.id}`}
                placeholder="CSS selector"
                value={step.waitFor}
                onChange={e => update(i, 'waitFor', e.target.value)}
                sizing="sm"
                className="[&_input]:font-mono"
              />
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addStep}
        className="flex items-center gap-1.5 text-xs font-medium text-fg-brand hover:underline"
      >
        <Plus className="h-3.5 w-3.5" aria-hidden="true" />
        Add step
      </button>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function FlowScanTab({
  flows, onScan, onAddItem, onRemoveItem,
  getJobForItem, isRunning, progress, savingScope,
}) {
  const [showAddForm, setShowAddForm]   = useState(false)
  const [addName, setAddName]           = useState('')
  const [addUrl, setAddUrl]             = useState('')
  const [addUrlError, setAddUrlError]   = useState('')
  const [configState, setConfigState]   = useState({})
  const [runningForIdx, setRunningForIdx] = useState(null)

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

  const getConfig = (idx) => configState[idx] ?? { open: false, template: '', steps: [] }

  const updateConfig = (idx, patch) =>
    setConfigState(prev => ({ ...prev, [idx]: { ...getConfig(idx), ...patch } }))

  const handleTemplateChange = (idx, tplKey) => {
    const tpl = FLOW_TEMPLATES[tplKey]
    updateConfig(idx, {
      template: tplKey,
      steps: tpl ? tpl.steps.map(s => ({ ...s, id: Date.now() + Math.random() })) : [],
    })
  }

  const handleAdd = () => {
    const validUrl = validateAddUrl(addUrl)
    if (!validUrl || !addName.trim()) return
    onAddItem({ name: addName.trim(), url: validUrl, componentIdentifier: '' })
    setAddName(''); setAddUrl(''); setAddUrlError('')
    setShowAddForm(false)
  }

  const handleRunScan = (item) => {
    const cfg = getConfig(item._idx)
    if (cfg.steps.length === 0) return
    setRunningForIdx(item._idx)
    onScan(item.url, cfg.steps, item.name)
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
  if (flows.length === 0 && !showAddForm) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 rounded-base bg-brand-softer p-3">
          <GitBranch className="h-7 w-7 text-fg-brand" aria-hidden="true" />
        </div>
        <h3 className="text-sm font-semibold text-heading">No flows in scope</h3>
        <p className="mt-1 mb-5 max-w-xs text-xs text-body-subtle">
          Add user flows (login, checkout, search) to test accessibility across multi-step interactions.
        </p>
        <Button color="primary" size="sm" onClick={() => setShowAddForm(true)}>
          <Plus className="mr-1.5 h-4 w-4" aria-hidden="true" />
          Add flow
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
            <p className="text-sm font-medium text-heading">Running flow scan…</p>
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

      {/* ── Flows table ───────────────────────────────────────────────────── */}
      {flows.length > 0 && (
        <div className="overflow-x-auto rounded border border-default">
          <Table hoverable theme={{ root: { wrapper: 'static' } }}>
            <TableHead className="bg-neutral-tertiary text-xs uppercase tracking-wide text-body-subtle">
              <TableHeadCell scope="col" className="px-5 py-3 font-medium">Flow name</TableHeadCell>
              <TableHeadCell scope="col" className="px-5 py-3 font-medium">Starting URL</TableHeadCell>
              <TableHeadCell scope="col" className="px-5 py-3 font-medium">Last scan</TableHeadCell>
              <TableHeadCell scope="col" className="px-5 py-3 font-medium">
                <span className="sr-only">Actions</span>
              </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y divide-default">
              {flows.map((item) => {
                const cfg = getConfig(item._idx)
                const job = getJobForItem(item)
                const isThisRunning = isRunning && runningForIdx === item._idx
                const hasSteps = cfg.steps.length > 0
                return (
                  <>
                    <TableRow key={item._idx} className="bg-neutral-primary hover:bg-neutral-tertiary/50">
                      <TableCell className="px-5 py-3 font-medium text-heading">
                        {item.name || '—'}
                      </TableCell>
                      <TableCell className="max-w-[180px] truncate px-5 py-3 font-mono text-xs text-body-subtle">
                        {item.url || '—'}
                      </TableCell>
                      <TableCell className="px-5 py-3">
                        <ScanStatusBadge job={job} />
                      </TableCell>
                      <TableCell className="px-5 py-3">
                        <div className="flex items-center gap-2">
                          <Button
                            color="gray"
                            size="sm"
                            onClick={() => updateConfig(item._idx, { open: !cfg.open })}
                            aria-expanded={cfg.open}
                            aria-label={`${cfg.open ? 'Collapse' : 'Configure'} ${item.name}`}
                          >
                            Configure
                            {cfg.open
                              ? <ChevronUp className="ml-1 h-3 w-3" aria-hidden="true" />
                              : <ChevronDown className="ml-1 h-3 w-3" aria-hidden="true" />
                            }
                          </Button>
                          {hasSteps && (
                            <Button
                              color="primary"
                              size="sm"
                              onClick={() => handleRunScan(item)}
                              disabled={isRunning || !item.url}
                              aria-label={`Run flow scan for ${item.name}`}
                            >
                              {isThisRunning
                                ? <Spinner size="xs" color="white" />
                                : <Play className="mr-1 h-3 w-3" aria-hidden="true" />
                              }
                              Run
                            </Button>
                          )}
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

                    {/* ── Inline step configurator ───────────────────────── */}
                    {cfg.open && (
                      <TableRow key={`config-${item._idx}`}>
                        <TableCell colSpan={4} className="bg-neutral-tertiary/30 px-5 py-5">
                          <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-sm font-semibold text-heading">
                              Configure steps — {item.name}
                            </h3>
                            <div>
                              <Label htmlFor={`tpl-${item._idx}`} className="sr-only">
                                Load template
                              </Label>
                              <Select
                                id={`tpl-${item._idx}`}
                                value={cfg.template}
                                onChange={e => handleTemplateChange(item._idx, e.target.value)}
                                sizing="sm"
                              >
                                <option value="">Load a template…</option>
                                {Object.entries(FLOW_TEMPLATES).map(([key, tpl]) => (
                                  <option key={key} value={key}>{tpl.name}</option>
                                ))}
                              </Select>
                            </div>
                          </div>
                          <StepBuilder
                            steps={cfg.steps}
                            setSteps={(updater) => {
                              const next = typeof updater === 'function' ? updater(cfg.steps) : updater
                              updateConfig(item._idx, { steps: next })
                            }}
                          />
                          {cfg.steps.length > 0 && (
                            <div className="mt-4 flex items-center gap-2">
                              <Button
                                color="primary"
                                size="sm"
                                onClick={() => handleRunScan(item)}
                                disabled={isRunning || !item.url}
                              >
                                <Play className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                                Run flow scan
                              </Button>
                              <Button
                                color="gray"
                                size="sm"
                                onClick={() => updateConfig(item._idx, { open: false })}
                              >
                                Collapse
                              </Button>
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                )
              })}
            </TableBody>
          </Table>
        </div>
      )}

      {/* ── Add flow form / button ────────────────────────────────────────── */}
      {showAddForm ? (
        <div className="rounded border border-default bg-neutral-tertiary/40 p-5">
          <h3 className="mb-4 text-sm font-semibold text-heading">Add flow to scope</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="add-flow-name" className="mb-1.5 block text-xs font-medium text-body">
                Flow name
              </Label>
              <TextInput
                id="add-flow-name"
                placeholder="e.g. Checkout flow"
                value={addName}
                onChange={e => setAddName(e.target.value)}
                sizing="sm"
              />
            </div>
            <div>
              <Label htmlFor="add-flow-url" className="mb-1.5 block text-xs font-medium text-body">
                Starting URL
              </Label>
              <TextInput
                id="add-flow-url"
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
          <p className="mt-2 text-xs text-body-subtle">
            Steps are configured per session from the flow table.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Button
              color="primary"
              size="sm"
              onClick={handleAdd}
              disabled={savingScope || !addName.trim() || !addUrl.trim()}
            >
              {savingScope ? 'Saving…' : 'Add flow'}
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
          Add flow to scope
        </button>
      )}

    </div>
  )
}
