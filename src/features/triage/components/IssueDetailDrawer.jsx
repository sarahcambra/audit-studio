import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Drawer,
  Badge,
  Button,
  Accordion,
  AccordionPanel,
  AccordionTitle,
  AccordionContent,
  Modal,
  ModalHeader,
  ModalBody,
} from 'flowbite-react'
import {
  X,
  ChevronUp,
  ChevronDown,
  Copy,
  Check,
  ExternalLink,
  HelpCircle,
  XCircle,
  ImageOff,
  Upload,
} from 'lucide-react'
import { customTheme } from '@/config/theme.js'
import { RULE_ENRICHMENTS } from '@/lib/ruleEnrichments'
import { WCAG_REFERENCES } from '@/lib/wcagReferences'
import { saveOverrides, uploadEvidenceFile, appendEvidenceFiles } from '@/lib/db/triage'

// ── Overrides schema validation ─────────────────────────────────────────────

const ALLOWED_DIFFICULTY = new Set(['Easy', 'Medium', 'Hard', ''])

function validateOverrides(overrides) {
  const stringFields = ['clientFix', 'fixDifficulty', 'badExample', 'goodExample']
  for (const field of stringFields) {
    if (field in overrides && typeof overrides[field] !== 'string') {
      return `Field "${field}" must be a string`
    }
  }
  if ('fixDifficulty' in overrides && !ALLOWED_DIFFICULTY.has(overrides.fixDifficulty ?? '')) {
    return 'fixDifficulty must be Easy, Medium, or Hard'
  }
  if ('affectedUsers' in overrides) {
    if (!Array.isArray(overrides.affectedUsers)) return 'affectedUsers must be an array'
    if (overrides.affectedUsers.some(u => typeof u !== 'string')) {
      return 'affectedUsers must contain only strings'
    }
  }
  return null // valid
}

// ── Color maps ──────────────────────────────────────────────────────────────

const IMPACT_COLOR = {
  critical: 'danger',
  serious:  'warning',
  moderate: 'primary',
  minor:    'alternative',
}

const DIFFICULTY_COLOR = {
  Easy:   'success',
  Medium: 'warning',
  Hard:   'danger',
}

// ── IssueDetailDrawer ───────────────────────────────────────────────────────

/**
 * Props:
 *   isOpen      {boolean}
 *   onClose     {() => void}
 *   item        {object | null}  — selected triage row from Supabase
 *   onPrev      {() => void}
 *   onNext      {() => void}
 *   hasPrev     {boolean}
 *   hasNext     {boolean}
 *   onDecision  {(itemId, decision) => void}
 */
export default function IssueDetailDrawer({
  isOpen,
  onClose,
  item,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  onDecision,
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [copied, setCopied]             = useState(null) // 'element' | 'html' | 'extra'
  const [extraCode, setExtraCode]       = useState('')
  const [overrides, setOverrides]       = useState({})
  const [overridesDirty, setOverridesDirty] = useState(false)
  const [isSaving, setIsSaving]         = useState(false)
  const [saveError, setSaveError]       = useState(null)
  const [isUploading, setIsUploading]   = useState(false)
  const [uploadError, setUploadError]   = useState(null)
  const [newUser, setNewUser]           = useState('')
  const navigate = useNavigate()

  // Restore focus to the element that opened the drawer when it closes
  const triggerRef = useRef(null)
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null
    } else if (triggerRef.current) {
      triggerRef.current.focus()
      triggerRef.current = null
    }
  }, [isOpen])

  // Reset local state when item changes
  useEffect(() => {
    setOverrides(item?.overrides_json ?? {})
    setOverridesDirty(false)
    setExtraCode('')
    setNewUser('')
    setLightboxOpen(false)
    setCopied(null)
  }, [item?.id])

  const enrichment = item ? (RULE_ENRICHMENTS[item.rule_id] ?? {}) : {}

  // val: resolve overrides → enrichment → null
  const val = (field) => overrides[field] ?? enrichment[field] ?? null

  const copyCode = (text, key) => {
    const fallback = (str) => {
      const ta = document.createElement('textarea')
      ta.value = str
      ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0'
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy') } catch { /* best-effort */ }
      document.body.removeChild(ta)
    }
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => fallback(text))
    } else {
      fallback(text)
    }
    setCopied(key)
    setTimeout(() => setCopied(null), 1500)
  }

  const handleDecision = (decision) => {
    onDecision(item.id, decision)
    if (decision === 'dismissed') onClose()
  }

  // ── Save overrides to Supabase ──────────────────────────────────────────────
  const handleSaveOverrides = async () => {
    const err = validateOverrides(overrides)
    if (err) { setSaveError(err); return }
    setSaveError(null)
    setIsSaving(true)
    const { error } = await saveOverrides(item.id, overrides)
    setIsSaving(false)
    if (error) {
      setSaveError(error.message ?? 'Save failed')
    } else {
      setOverridesDirty(false)
    }
  }

  // ── Upload evidence files to Supabase Storage ───────────────────────────────
  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files ?? [])
    if (!files.length) return
    setUploadError(null)
    setIsUploading(true)

    const results = await Promise.all(files.map(f => uploadEvidenceFile(item.id, f)))
    const failed  = results.filter(r => r.error)
    const success = results.filter(r => !r.error)

    if (success.length) {
      const newMeta = success.map((r, i) => ({
        type:       files[i].type,
        url:        r.url,
        path:       r.path,
        name:       files[i].name,
        uploadedAt: new Date().toISOString(),
      }))
      const { error: appendError } = await appendEvidenceFiles(item.id, newMeta)
      if (appendError) failed.push({ error: appendError })
    }

    setIsUploading(false)
    if (failed.length) {
      setUploadError(`${failed.length} file(s) failed to upload.`)
    }
    // Reset input so same file can be re-uploaded if needed
    e.target.value = ''
  }

  // Affected users from overrides or enrichment
  const currentUsers = overrides.affectedUsers ?? enrichment.affectedUsers ?? []

  const addUser = () => {
    if (!newUser.trim()) return
    setOverrides(o => ({ ...o, affectedUsers: [...currentUsers, newUser.trim()] }))
    setOverridesDirty(true)
    setNewUser('')
  }

  const removeUser = (u) => {
    const next = currentUsers.filter(x => x !== u)
    setOverrides(o => ({ ...o, affectedUsers: next }))
    setOverridesDirty(true)
  }

  // ── "How to fix" section visibility
  const showHowToFix =
    val('clientFix') || val('fixDifficulty') || val('badExample') || val('goodExample')

  if (!item) return null

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={onClose}
        position="right"
        className="!w-full !max-w-2xl !p-0 flex flex-col overflow-hidden"
        aria-labelledby="drawer-issue-title"
      >
        {/* ── STICKY HEADER ── */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-5 py-3 flex items-start gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <Badge
                theme={customTheme.badge}
                color={IMPACT_COLOR[item.impact] ?? 'gray'}
                size="sm"
              >
                {item.impact}
              </Badge>
              <code className="text-xs font-mono bg-primary-50 text-primary-700 px-1.5 py-0.5 rounded border border-primary-200/60 font-semibold">
                {item.rule_id}
              </code>
              {item.wcag_sc && (
                <a
                  href={WCAG_REFERENCES[item.wcag_sc]?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded  hover:bg-primary-50 hover:text-primary-700 hover:border-primary-200 transition-colors"
                >
                  SC {item.wcag_sc} ↗
                </a>
              )}
            </div>
            <h2 id="drawer-issue-title" className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
              {enrichment?.auditorTitle ?? item.rule_id}
            </h2>
            {item.page_name && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.page_name}</p>
            )}
          </div>

          <div className="flex items-center gap-0.5 shrink-0 mt-0.5">
            <Button
              size="xs"
              color="gray"
              onClick={onPrev}
              disabled={!hasPrev}
              aria-label="Previous issue"
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
            <Button
              size="xs"
              color="gray"
              onClick={onNext}
              disabled={!hasNext}
              aria-label="Next issue"
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button
              size="xs"
              color="gray"
              onClick={onClose}
              aria-label="Close drawer"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* ── SCROLLABLE BODY ── */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">

          {/* 1 — SCREENSHOT */}
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
              Screenshot / Evidence
            </p>
            {item.screenshot_url ? (
              <button
                onClick={() => setLightboxOpen(true)}
                className="w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 hover:ring-2 hover:ring-primary-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                aria-label="View full-size screenshot"
              >
                <img
                  src={item.screenshot_url}
                  alt={`Screenshot showing: ${enrichment?.auditorTitle ?? item.rule_id}`}
                  className="w-full object-cover"
                />
              </button>
            ) : (
              <div className="w-full rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center py-8 gap-2">
                <ImageOff className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  No screenshot available yet — run scan to capture.
                </p>
              </div>
            )}

            {/* Upload additional evidence */}
            <div className="mt-2 flex items-center gap-2 flex-wrap">
              <label className={`cursor-pointer ${isUploading ? 'opacity-50 pointer-events-none' : ''}`}>
                <input
                  type="file"
                  accept="image/*,video/*"
                  multiple
                  className="sr-only"
                  disabled={isUploading}
                  onChange={handleFileUpload}
                />
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-700 dark:text-primary-300 hover:text-primary-800 dark:hover:text-primary-200 bg-primary-50 dark:bg-primary-900/30 hover:bg-primary-100 dark:hover:bg-primary-900/50 border border-primary-200 dark:border-primary-800 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer">
                  <Upload className="h-3.5 w-3.5" />
                  {isUploading ? 'Uploading…' : 'Add image / video'}
                </span>
              </label>
              <p className="text-xs text-gray-500 dark:text-gray-400">Extra evidence for report</p>
              {uploadError && (
                <p className="w-full text-xs text-red-600 dark:text-red-400 mt-1">{uploadError}</p>
              )}
            </div>
          </div>

          {/* 2 — CODE EVIDENCE */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Code Evidence
            </p>

            {/* 2a — Element */}
            {item.element_snippet && (
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Element</span>
                  <Button
                    size="xs"
                    color="ghost"
                    theme={customTheme.button}
                    onClick={() => copyCode(item.element_snippet, 'element')}
                    aria-label="Copy element"
                  >
                    {copied === 'element'
                      ? <Check className="h-3.5 w-3.5 text-emerald-600" />
                      : <Copy className="h-3.5 w-3.5" />}
                  </Button>
                </div>
                <pre className="text-xs font-mono bg-gray-900 text-green-300 rounded-xl p-3 overflow-x-auto whitespace-pre-wrap break-all leading-relaxed max-h-40">
                  {item.element_snippet}
                </pre>
              </div>
            )}

            {/* 2b — HTML Snippet */}
            {item.html_snippet && (
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">HTML Snippet</span>
                  <Button
                    size="xs"
                    color="ghost"
                    theme={customTheme.button}
                    onClick={() => copyCode(item.html_snippet, 'html')}
                    aria-label="Copy HTML"
                  >
                    {copied === 'html'
                      ? <Check className="h-3.5 w-3.5 text-emerald-600" />
                      : <Copy className="h-3.5 w-3.5" />}
                  </Button>
                </div>
                <pre className="text-xs font-mono bg-gray-900 text-green-300 rounded-xl p-3 overflow-x-auto whitespace-pre-wrap break-all leading-relaxed max-h-48">
                  {item.html_snippet}
                </pre>
                {item.selector && (
                  <p
                    className="text-xs font-mono text-gray-500 dark:text-gray-400 mt-1.5 truncate"
                    title={item.selector}
                  >
                    {item.selector}
                  </p>
                )}
              </div>
            )}

            {/* 2c — Additional code evidence paste box */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Additional code fragment</span>
                <div className="flex gap-1">
                  <Button
                    size="xs"
                    color="ghost"
                    theme={customTheme.button}
                    onClick={() => copyCode(extraCode, 'extra')}
                    aria-label="Copy extra code"
                    disabled={!extraCode}
                  >
                    {copied === 'extra'
                      ? <Check className="h-3.5 w-3.5 text-emerald-600" />
                      : <Copy className="h-3.5 w-3.5" />}
                  </Button>
                  <Button
                    size="xs"
                    color="outline"
                    theme={customTheme.button}
                    disabled={!extraCode || isUploading}
                    onClick={async () => {
                      if (!extraCode.trim()) return
                      setUploadError(null)
                      setIsUploading(true)
                      const blob = new Blob([extraCode], { type: 'text/plain' })
                      const file = new File([blob], `code-fragment-${Date.now()}.txt`, { type: 'text/plain' })
                      const { url, path, error } = await uploadEvidenceFile(item.id, file)
                      if (error) {
                        setUploadError('Failed to save code fragment.')
                      } else {
                        await appendEvidenceFiles(item.id, [{
                          type: 'text/plain',
                          url,
                          path,
                          name: file.name,
                          uploadedAt: new Date().toISOString(),
                        }])
                        setExtraCode('')
                      }
                      setIsUploading(false)
                    }}
                  >
                    {isUploading ? 'Saving…' : 'Save'}
                  </Button>
                </div>
              </div>
              <textarea
                value={extraCode}
                onChange={e => setExtraCode(e.target.value)}
                placeholder="Paste additional code to include as evidence…"
                rows={4}
                className="w-full text-xs font-mono bg-gray-900 text-green-300 border border-gray-700 rounded-xl p-3 resize-y focus:outline-none focus:ring-2 focus:ring-primary-300 placeholder:text-gray-600"
              />
            </div>
          </div>

          {/* 3 — HOW TO FIX (editable, open by default) */}
          {showHowToFix && (
            <Accordion collapseAll={false}>
              <AccordionPanel>
                <AccordionTitle>
                  <span className="flex items-center gap-2">
                    How to fix
                    {val('fixDifficulty') && (
                      <Badge
                        theme={customTheme.badge}
                        size="xs"
                        color={DIFFICULTY_COLOR[val('fixDifficulty')] ?? 'gray'}
                      >
                        {val('fixDifficulty')}
                      </Badge>
                    )}
                    {overridesDirty && (
                      <span className="text-xs text-amber-600 font-normal">● unsaved</span>
                    )}
                  </span>
                </AccordionTitle>
                <AccordionContent className="space-y-4">
                  {/* Editable clientFix */}
                  <div>
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">
                      Fix description
                    </label>
                    <textarea
                      value={val('clientFix') ?? ''}
                      onChange={e => {
                        setOverrides(o => ({ ...o, clientFix: e.target.value }))
                        setOverridesDirty(true)
                      }}
                      rows={3}
                      className="w-full text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-300 resize-y"
                    />
                  </div>

                  {/* fixDifficulty selector */}
                  <div className="flex items-center gap-2">
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400">Complexity</label>
                    <select
                      value={val('fixDifficulty') ?? ''}
                      onChange={e => {
                        setOverrides(o => ({ ...o, fixDifficulty: e.target.value }))
                        setOverridesDirty(true)
                      }}
                      className="text-xs border border-gray-300 rounded-lg px-2 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-primary-300"
                    >
                      <option value="">—</option>
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>

                  {/* Before / After */}
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="text-xs font-medium text-fg-danger mb-1 block">
                        ❌ Before
                      </label>
                      <textarea
                        value={val('badExample') ?? ''}
                        onChange={e => {
                          setOverrides(o => ({ ...o, badExample: e.target.value }))
                          setOverridesDirty(true)
                        }}
                        rows={3}
                        className="w-full text-xs font-mono bg-red-950 text-red-300 border border-red-900 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-red-400 resize-y"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-fg-success mb-1 block">
                        ✓ After
                      </label>
                      <textarea
                        value={val('goodExample') ?? ''}
                        onChange={e => {
                          setOverrides(o => ({ ...o, goodExample: e.target.value }))
                          setOverridesDirty(true)
                        }}
                        rows={3}
                        className="w-full text-xs font-mono bg-emerald-950 text-emerald-300 border border-emerald-900 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-y"
                      />
                    </div>
                  </div>

                  {/* Save / Reset */}
                  {saveError && (
                    <p className="text-xs text-fg-danger">{saveError}</p>
                  )}
                  <div className="flex gap-2">
                    <Button
                      size="xs"
                      color="primary"
                      theme={customTheme.button}
                      disabled={!overridesDirty || isSaving}
                      onClick={handleSaveOverrides}
                    >
                      {isSaving ? 'Saving…' : 'Save changes'}
                    </Button>
                    <Button
                      size="xs"
                      color="ghost"
                      theme={customTheme.button}
                      onClick={() => { setOverrides({}); setOverridesDirty(false) }}
                    >
                      Reset to default
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          )}

          {/* 4 — AFFECTED USERS (editable) */}
          <Accordion collapseAll>
            <AccordionPanel>
              <AccordionTitle>
                <span className="flex items-center gap-2">
                  Affected users
                  {overrides.affectedUsers && (
                    <span className="text-xs text-amber-600 font-normal">● unsaved</span>
                  )}
                </span>
              </AccordionTitle>
              <AccordionContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {currentUsers.map(u => (
                    <span
                      key={u}
                      className="inline-flex items-center gap-1 text-xs font-medium bg-primary-50 text-primary-700 border border-primary-200/60 rounded-full px-2.5 py-1"
                    >
                      {u}
                      <button
                        onClick={() => removeUser(u)}
                        aria-label={`Remove ${u}`}
                        className="hover:text-primary-900"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newUser}
                    onChange={e => setNewUser(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        addUser()
                      }
                    }}
                    placeholder="Add user group…"
                    className="flex-1 text-xs border border-gray-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-300 bg-white dark:bg-gray-800"
                  />
                  <Button
                    size="xs"
                    color="primary" outline
                    theme={customTheme.button}
                    onClick={addUser}
                  >
                    Add
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="xs"
                    color="primary"
                    theme={customTheme.button}
                    disabled={!overridesDirty || isSaving}
                    onClick={handleSaveOverrides}
                  >
                    {isSaving ? 'Saving…' : 'Save'}
                  </Button>
                  <Button
                    size="xs"
                    color="ghost"
                    theme={customTheme.button}
                    onClick={() => {
                      setOverrides(o => { const n = { ...o }; delete n.affectedUsers; return n })
                      setOverridesDirty(false)
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>

          {/* 5 — WCAG REFERENCES */}
          <Accordion collapseAll>
            <AccordionPanel>
              <AccordionTitle>WCAG References</AccordionTitle>
              <AccordionContent className="space-y-4">
                {/* SC Understanding link */}
                {item.wcag_sc && WCAG_REFERENCES[item.wcag_sc] && (
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
                      Success Criterion
                    </p>
                    <a
                      href={WCAG_REFERENCES[item.wcag_sc].url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-primary-700 hover:underline flex items-center gap-1.5"
                    >
                      SC {item.wcag_sc} — {WCAG_REFERENCES[item.wcag_sc].title}
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    </a>
                  </div>
                )}

                {/* Techniques */}
                {enrichment.wcagTechniques?.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">W3C Techniques</p>
                    <ul className="space-y-1.5">
                      {enrichment.wcagTechniques.map(t => (
                        <li key={t.id}>
                          <a
                            href={t.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-primary-700 hover:underline flex items-center gap-1.5"
                          >
                            {t.id}: {t.title}{' '}
                            <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Failures */}
                {enrichment.wcagFailures?.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">Common Failures</p>
                    <ul className="space-y-1.5">
                      {enrichment.wcagFailures.map(f => (
                        <li key={f.id}>
                          <a
                            href={f.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-fg-danger hover:underline flex items-center gap-1.5"
                          >
                            {f.id}: {f.title}{' '}
                            <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* APG */}
                {enrichment.ariaPractices && (
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
                      ARIA Authoring Practices
                    </p>
                    <a
                      href={enrichment.ariaPractices}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-primary-700 hover:underline flex items-center gap-1.5"
                    >
                      APG Pattern <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    </a>
                  </div>
                )}
              </AccordionContent>
            </AccordionPanel>
          </Accordion>

        </div>

        {/* ── STICKY FOOTER ── */}
        <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-5 py-3 flex items-center gap-2 justify-between">
          <div className="flex gap-2 flex-wrap">
            <Button
              size="sm"
              color="primary"
              theme={customTheme.button}
              onClick={() => handleDecision('confirmed')}
              className={item.decision === 'confirmed' ? 'ring-2 ring-offset-1 ring-primary-700' : ''}
            >
              <Check className="h-4 w-4 mr-1.5" /> Confirm failure
            </Button>
            <Button
              size="sm"
              color="primary" outline
              theme={customTheme.button}
              onClick={() => handleDecision('needs_review')}
              className={item.decision === 'needs_review' ? 'ring-2 ring-offset-1 ring-primary-700' : ''}
            >
              <HelpCircle className="h-4 w-4 mr-1.5" /> Needs review
            </Button>
            <Button
              size="sm"
              color="secondary"
              theme={customTheme.button}
              onClick={() => handleDecision('dismissed')}
              className={item.decision === 'dismissed' ? 'ring-2 ring-offset-1 ring-gray-600' : ''}
            >
              <XCircle className="h-4 w-4 mr-1.5" /> Dismiss
            </Button>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {item.audit_id && item.id && (
              <button
                type="button"
                onClick={() => {
                  onClose?.()
                  navigate(`/audits/${item.audit_id}/issues/${item.id}`)
                }}
                className="inline-flex items-center gap-1 text-xs font-medium text-primary-700 hover:text-primary-800 hover:underline dark:text-primary-400 dark:hover:text-primary-300"
              >
                Open Full Page
                <ExternalLink className="h-3 w-3" />
              </button>
            )}
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {item.decision && item.decision !== 'pending'
                ? `Marked: ${item.decision}`
                : 'Not triaged'}
            </span>
          </div>
        </div>
      </Drawer>

      {/* LIGHTBOX MODAL */}
      <Modal
        show={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        size="7xl"
        aria-labelledby="lightbox-title"
        aria-modal="true"
      >
        <ModalHeader id="lightbox-title">
          {enrichment?.auditorTitle ?? item.rule_id}
        </ModalHeader>
        <ModalBody className="p-0">
          {item.screenshot_url && (
            <img
              src={item.screenshot_url}
              alt={`Full-size screenshot: ${enrichment?.auditorTitle ?? item.rule_id}`}
              className="w-full h-auto"
            />
          )}
        </ModalBody>
      </Modal>
    </>
  )
}
