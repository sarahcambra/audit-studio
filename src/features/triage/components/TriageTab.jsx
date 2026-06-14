import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button, Card, Dropdown, DropdownItem, Tooltip, Accordion, AccordionPanel, AccordionTitle, AccordionContent
} from 'flowbite-react'
import {
  ClipboardList, FileText, Puzzle, GitBranch,
  ChevronDown, Info, Plus, ImageOff, ExternalLink,
  AlertTriangle, Image as ImageIcon, RefreshCw, MapPin, Gavel,
  Target, Wrench, Layers, BookOpen, Code, ChevronRight
} from 'lucide-react'
import { getTriageItems, updateTriageItem, getScanResultsWithViolations } from '@/lib/db/triage'
import { supabase } from '@/lib/supabase'
import { RULE_ENRICHMENTS } from '@/lib/ruleEnrichments'
import { WCAG_REFERENCES } from '@/lib/wcagReferences'
import IssueDetailDrawer from './IssueDetailDrawer'
import {
  Badge, ImpactBadge, DecisionBadge, DataTable, PageHeader, CodeSnippet,
  SectionHeader, CopyButton, DecisionButtonGroup, EmptyState, Loading
} from '@shared/ui'
import { SearchInput, FilterDropdown } from '@shared/ui/filters'
import { customTheme } from '@/config/theme.js'

const IMPACT_ORDER = { critical: 0, serious: 1, moderate: 2, minor: 3 }
const ISSUE_TYPE_COLOR = { failure: 'red', 'needs review': 'yellow', 'failure, needs review': 'yellow' }

const TABS = [
  { key: 'all', label: 'All' },
  { key: 'pending', label: 'Pending' },
  { key: 'confirmed', label: 'Confirmed' },
  { key: 'needs_review', label: 'Needs Review' },
  { key: 'dismissed', label: 'Dismissed' },
]

// Category badge colors for simplified Badge component
function getCategoryBadgeColor(item) {
  if (item.wcag_sc) return 'purple'  // SC = purple
  if (item.tags?.includes('cat.aria')) return 'blue'  // ARIA = blue
  if (item.tags?.includes('best-practice')) return 'yellow'  // Best Practice = yellow
  return 'gray'  // Default = gray
}

function getCategoryLabel(item) {
  if (item.wcag_sc) return item.wcag_sc
  if (item.tags?.includes('cat.aria')) return 'ARIA'
  if (item.tags?.includes('best-practice')) return 'BP'
  return 'WCAG'
}

function PageIcon({ pageName }) {
  if (!pageName) return <FileText className="h-3.5 w-3.5" />
  const lower = pageName.toLowerCase()
  if (lower.includes('flow') || lower.includes('step')) return <GitBranch className="h-3.5 w-3.5" />
  if (lower.includes('component') || lower.includes('comp')) return <Puzzle className="h-3.5 w-3.5" />
  return <FileText className="h-3.5 w-3.5" />
}

export default function TriageTab({ auditId, refreshKey = 0 }) {
  const [triageItems, setTriageItems] = useState([])
  const [loadingTriage, setLoadingTriage] = useState(true)
  const [triageError, setTriageError] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterImpact, setFilterImpact] = useState('')
  const [activeTab, setActiveTab] = useState('all')
  const [sortBy, setSortBy] = useState('impact')
  const [sortDirection, setSortDirection] = useState('asc')
  const navigate = useNavigate()

  useEffect(() => {
    let cancelled = false
    setLoadingTriage(true)
    getTriageItems(auditId).then(({ data, error: err }) => {
      if (cancelled) return
      if (err) setTriageError(err.message)
      else setTriageItems(data ?? [])
      setLoadingTriage(false)
    })
    return () => { cancelled = true }
  }, [auditId, refreshKey])

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(column)
      setSortDirection('asc')
    }
  }

  const filterDecision = activeTab === 'all' ? '' : activeTab

  const filteredItems = useMemo(() => triageItems.filter(item => {
    const q = searchQuery.toLowerCase()
    if (q) {
      const enrichTitle = RULE_ENRICHMENTS[item.rule_id]?.auditorTitle ?? ''
      if (
        !item.rule_id?.toLowerCase().includes(q) &&
        !enrichTitle.toLowerCase().includes(q) &&
        !item.selector?.toLowerCase().includes(q) &&
        !item.page_name?.toLowerCase().includes(q)
      ) return false
    }
    if (filterImpact && item.impact !== filterImpact) return false
    if (filterDecision && (item.decision ?? 'pending') !== filterDecision) return false
    return true
  }), [triageItems, searchQuery, filterImpact, filterDecision])

  const sortedItems = useMemo(() => {
    const items = [...filteredItems]
    items.sort((a, b) => {
      let result = 0
      if (sortBy === 'impact') {
        result = (IMPACT_ORDER[a.impact] ?? 9) - (IMPACT_ORDER[b.impact] ?? 9)
      } else if (sortBy === 'decision') {
        result = (a.decision ?? 'pending').localeCompare(b.decision ?? 'pending')
      } else if (sortBy === 'scope') {
        result = (a.page_name ?? '').localeCompare(b.page_name ?? '')
      } else if (sortBy === 'finding') {
        const titleA = RULE_ENRICHMENTS[a.rule_id]?.auditorTitle ?? a.rule_id
        const titleB = RULE_ENRICHMENTS[b.rule_id]?.auditorTitle ?? b.rule_id
        result = titleA.localeCompare(titleB)
      } else if (sortBy === 'result') {
        result = (a.issue_type ?? '').localeCompare(b.issue_type ?? '')
      }
      return sortDirection === 'asc' ? result : -result
    })
    return items
  }, [filteredItems, sortBy, sortDirection])

  const selectedIndex = sortedItems.findIndex(i => i.id === selectedItem?.id)
  const navigateDrawer = (dir) => {
    const next = sortedItems[selectedIndex + dir]
    if (next) setSelectedItem(next)
  }

  const clearFilters = () => {
    setSearchQuery('')
    setFilterImpact('')
    setActiveTab('all')
  }

  const openDrawer = (item) => {
    setSelectedItem(item)
    setDrawerOpen(true)
  }

  // Handle screenshot capture success - update local state
  const handleScreenshotCaptured = (triageId, screenshotUrl, onSuccess) => {
    setTriageItems(prev => prev.map(item =>
      item.id === triageId ? { ...item, screenshot_url: screenshotUrl } : item
    ))
    onSuccess?.()
  }

  // ── Expanded Row Content ───────────────────────────────────────────────────
  function ExpandedRowContent({ item, onScreenshotCaptured }) {
    const enrichment = RULE_ENRICHMENTS[item.rule_id] ?? {}
    const [isCapturing, setIsCapturing] = useState(false)
    const [captureError, setCaptureError] = useState(null)
    const [imageError, setImageError] = useState(false)
    const [scanData, setScanData] = useState(null)
    const [loadingScan, setLoadingScan] = useState(false)

    // Fetch full scan data when expanded
    useEffect(() => {
      if (!item.job_id) return
      setLoadingScan(true)
      getScanResultsWithViolations(item.job_id).then(({ data }) => {
        if (data) {
          // Check if this is a custom check (group_id starts with 'custom-')
          if (item.group_id?.startsWith('custom-')) {
            // Find in custom_checks_json
            const customChecks = data.custom_checks_json || []
            const customCheck = customChecks.find(c => {
              const checkGroupId = `${c.checkId}-${item.job_id.slice(0, 8)}`
              return checkGroupId === item.group_id
            })
            if (customCheck) {
              // Convert custom check data to nodes format
              const nodes = []
              if (customCheck.data) {
                if (customCheck.data.elements) {
                  nodes.push(...customCheck.data.elements.map((el, idx) => ({
                    target: [el.selector || el.tag || `element-${idx}`],
                    html: el.html,
                    impact: 'moderate'
                  })))
                } else if (customCheck.data.skips) {
                  nodes.push(...customCheck.data.skips.map((skip, idx) => ({
                    target: [skip.selector || `heading-${idx}`],
                    html: skip.html,
                    impact: 'moderate'
                  })))
                } else if (customCheck.data.duplicates) {
                  nodes.push(...customCheck.data.duplicates.map((dup, idx) => ({
                    target: [dup.selector || `[role="${dup.role}"]`, `duplicate-${idx}`],
                    html: dup.html,
                    impact: 'moderate'
                  })))
                }
              }
              setScanData({ ...customCheck, nodes, isCustomCheck: true })
            }
          } else {
            // Regular axe violation
            const grouped = data.grouped_violations || []
            const violation = grouped.find(v => v.groupId === item.group_id)
            setScanData(violation)
          }
        }
        setLoadingScan(false)
      })
    }, [item.job_id, item.group_id])

    const handleCaptureScreenshot = async () => {
      setIsCapturing(true)
      setCaptureError(null)
      setImageError(false)
      try {
        const { data: { session } } = await supabase.auth.getSession()
        const token = session?.access_token

        if (!token) throw new Error('Not authenticated')

        const response = await fetch('/api/capture-screenshot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ triageId: item.id }),
        })

        const result = await response.json()
        if (!response.ok) throw new Error(result.error || 'Failed to capture screenshot')

        onScreenshotCaptured?.(item.id, result.screenshotUrl, () => setImageError(false))
      } catch (err) {
        console.error('Screenshot capture failed:', err)
        setCaptureError(err.message)
      } finally {
        setIsCapturing(false)
      }
    }

    const handleDecision = async (decision) => {
      try {
        const updates = { decision, updated_at: new Date().toISOString() }
        if (decision === 'not-failure' && !item.dismissal_reason) {
          updates.dismissal_reason = 'false-positive'
        }
        await updateTriageItem(item.id, updates)
        const { data } = await getTriageItems(auditId)
        if (data) setTriageItems(data)
      } catch (err) {
        console.error('Failed to update decision:', err)
      }
    }

    const allNodes = scanData?.nodes || []

    return (
      <div className="space-y-4">
        {/* ── Priority Header ───────────────────────────────────────────────── */}
        <Card className="border-l-4 border-l-primary-500 dark:border-l-primary-600">
          <div className="flex flex-wrap items-start gap-3 mb-3">
            <ImpactBadge impact={item.impact} size="sm" />
            <Badge size="sm" color={getCategoryBadgeColor(item)}>{getCategoryLabel(item)}</Badge>
            {item.issue_type && (
              <Badge size="sm" color={ISSUE_TYPE_COLOR[item.issue_type] || 'gray'}>
                {item.issue_type}
              </Badge>
            )}
          </div>

          <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
            {enrichment.auditorTitle || item.friendly_description || item.rule_id}
          </h4>

          {enrichment.auditorNotes && (
            <p className="text-sm text-gray-600 dark:text-gray-400">{enrichment.auditorNotes}</p>
          )}

          <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1" title="Page/scope where this issue was found">
                <FileText className="h-3.5 w-3.5" />
                {item.page_name || '—'}
              </span>
              {(item.location_context || item.landmark) && (
                <span className="flex items-center gap-1" title="Location on the page">
                  <MapPin className="h-3.5 w-3.5" />
                  {item.location_context || item.landmark}
                </span>
              )}
              <span title="Number of elements with this same issue">
                {item.node_count || allNodes.length || 0} element(s) affected
              </span>
            </div>
          </div>
        </Card>

        {/* ── Who Is Affected ────────────────────────────────────────────── */}
        {(enrichment.affectedUsers || item.impact) && (
          <Card className="bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800">
            <SectionHeader
              title="Who Is Affected"
              icon={AlertTriangle}
            />

            <div className="space-y-3">
              {enrichment.affectedUsers && (
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {enrichment.affectedUsers}
                </p>
              )}

              {!enrichment.affectedUsers && item.impact && (
                <div className="space-y-2">
                  {item.impact === 'critical' && (
                    <>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong className="text-red-700 dark:text-red-400">Critical Impact:</strong> This issue completely blocks access for:
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 ml-2">
                        <li>Screen reader users — cannot perceive or interact with the content</li>
                        <li>Keyboard users — cannot access this functionality</li>
                        <li>All users relying on assistive technology</li>
                      </ul>
                    </>
                  )}
                  {item.impact === 'serious' && (
                    <>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong className="text-orange-700 dark:text-orange-400">Serious Impact:</strong> This issue creates significant barriers for:
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 ml-2">
                        <li>Low vision users — cannot see or identify the element</li>
                        <li>Screen reader users — may miss important information</li>
                        <li>Keyboard users — may lose track of their location</li>
                      </ul>
                    </>
                  )}
                  {item.impact === 'moderate' && (
                    <>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong className="text-blue-700 dark:text-blue-400">Moderate Impact:</strong> This issue may cause confusion for:
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 ml-2">
                        <li>Users with cognitive disabilities</li>
                        <li>Users on mobile devices</li>
                        <li>Users with situational impairments (bright sunlight, slow connections)</li>
                      </ul>
                    </>
                  )}
                  {item.impact === 'minor' && (
                    <>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong className="text-gray-700 dark:text-gray-400">Minor Impact:</strong> This is a best practice issue that may affect:
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 ml-2">
                        <li>Power users who rely on shortcuts</li>
                        <li>Users with specific preferences</li>
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          </Card>
        )}

        {/* ── Screenshot (Prominent) ────────────────────────────────────────── */}
        <Card>
          <SectionHeader
            title="Screenshot / Evidence"
            icon={ImageIcon}
            action={item.screenshot_url && !imageError && (
              <Tooltip content={item.selectors_to_highlight?.length > 0
                ? `Will highlight ${item.selectors_to_highlight.length} element(s) with purple borders`
                : "New scans capture with borders; re-capture may not have borders for old items"
              }>
                <Button
                  size="xs"
                  color="light"
                  onClick={handleCaptureScreenshot}
                  disabled={isCapturing}
                >
                  <RefreshCw className={isCapturing ? 'h-3.5 w-3.5 animate-spin' : 'h-3.5 w-3.5'} />
                  <span className="ml-1.5">Re-capture</span>
                </Button>
              </Tooltip>
            )}
          />

          {item.screenshot_url && !imageError ? (
            <div className="space-y-3">
              <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                <img
                  src={item.screenshot_url}
                  alt={`Screenshot showing: ${enrichment.auditorTitle ?? item.rule_id}`}
                  className="w-full max-h-80 object-contain"
                  onError={() => {
                    console.error('Image failed to load:', item.screenshot_url)
                    setImageError(true)
                  }}
                />
              </div>
              {/* Re-capture button below image */}
              <div className="flex justify-center">
                <Button
                  size="sm"
                  color="light"
                  onClick={handleCaptureScreenshot}
                  disabled={isCapturing}
                >
                  <RefreshCw className={isCapturing ? 'h-4 w-4 animate-spin mr-2' : 'h-4 w-4 mr-2'} />
                  {isCapturing ? 'Capturing...' : 'Take Screenshot Again'}
                </Button>
              </div>
            </div>
          ) : imageError ? (
            <EmptyState
              icon={ImageOff}
              title="Screenshot failed to load"
              description="The screenshot could not be loaded. Try capturing again."
              action={
                <Button
                  size="sm"
                  color="primary"
                  outline
                  onClick={() => {
                    setImageError(false)
                    handleCaptureScreenshot()
                  }}
                  disabled={isCapturing}
                >
                  {isCapturing ? 'Capturing...' : 'Re-capture Screenshot'}
                </Button>
              }
              variant="error"
            />
          ) : (
            <EmptyState
              icon={ImageIcon}
              title="No screenshot available"
              description="Capture a screenshot to see the element in context"
              action={
                <Button
                  size="sm"
                  color="primary"
                  onClick={handleCaptureScreenshot}
                  disabled={isCapturing}
                >
                  {isCapturing ? (
                    <>
                      <div className="animate-spin rounded-full h-3.5 w-3.5 border-b-2 border-current mr-2" />
                      Capturing...
                    </>
                  ) : (
                    <>
                      <Plus className="h-3.5 w-3.5 mr-1.5" />
                      Capture Screenshot
                    </>
                  )}
                </Button>
              }
            />
          )}
          {captureError && (
            <p className="text-xs text-red-600 dark:text-red-400 text-center mt-2">{captureError}</p>
          )}
        </Card>

        {/* ── Issue Location & Context ──────────────────────────────── */}
        <Card>
          <SectionHeader
            title="Issue Location & Context"
            icon={Target}
            variant="primary"
          >
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              What and where the issue is — so you can find it without digging through code
            </p>
          </SectionHeader>

          <div className="space-y-4">
            {/* Primary: What the element is (friendly description) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">What is it?</p>
                  <Tooltip content="A human-readable description of the element">
                    <Info className="h-3.5 w-3.5 text-gray-400 cursor-help" />
                  </Tooltip>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.friendly_description || enrichment.auditorTitle || 'Element with accessibility issue'}
                </p>
              </div>

              {/* Visible text/label */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">What text/label does the user see?</p>
                  <Tooltip content="The actual text content visible to users">
                    <Info className="h-3.5 w-3.5 text-gray-400 cursor-help" />
                  </Tooltip>
                </div>
                <p className="text-sm text-gray-900 dark:text-white">
                  {item.visible_text ? (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">"{item.visible_text}"</span>
                  ) : allNodes[0]?._enriched?.visibleText ? (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">"{allNodes[0]._enriched.visibleText}"</span>
                  ) : (
                    <span className="text-gray-400 italic">No visible text detected</span>
                  )}
                </p>
              </div>
            </div>

            {/* Location context */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-gray-100 dark:border-gray-700">
              <div className="space-y-1">
                <p className="text-xs text-gray-500 dark:text-gray-400">Location on page</p>
                <p className="text-sm text-gray-900 dark:text-white flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-gray-400" />
                  {item.location_context || item.landmark || allNodes[0]?._enriched?.locationContext || 'Page content'}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-gray-500 dark:text-gray-400">Element type</p>
                <p className="text-sm text-gray-900 dark:text-white">
                  {item.tag_name || allNodes[0]?._enriched?.tagName || 'Unknown element'}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-gray-500 dark:text-gray-400">How many affected</p>
                <p className="text-sm text-gray-900 dark:text-white">
                  <span className="font-semibold">{item.node_count || allNodes.length || 0}</span> element(s)
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* ── Technical Details (Collapsible) ───────────────────────────── */}
        <Accordion collapseAll>
          <AccordionPanel>
            <AccordionTitle>
              <span className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Technical Details
                <span className="text-xs text-gray-400 font-normal ml-2">CSS selector, HTML code</span>
              </span>
            </AccordionTitle>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* CSS Selector */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">CSS Selector</p>
                    <Tooltip content="Use this in browser DevTools (Ctrl+F) to find the element">
                      <Info className="h-3.5 w-3.5 text-gray-400 cursor-help" />
                    </Tooltip>
                  </div>
                  <div className="flex items-start gap-2">
                    <code className="flex-1 text-xs font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1.5 rounded break-all">
                      {item.selector || allNodes[0]?._enriched?.formattedSelector || '—'}
                    </code>
                    {(item.selector || allNodes[0]?._enriched?.formattedSelector) && (
                      <CopyButton text={item.selector || allNodes[0]?._enriched?.formattedSelector} size="xs" label="" copiedLabel="" />
                    )}
                  </div>
                </div>

                {/* HTML Code Snippet */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">HTML Code Snippet</p>
                    <Tooltip content="The actual HTML element with the issue">
                      <Info className="h-3.5 w-3.5 text-gray-400 cursor-help" />
                    </Tooltip>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-1 min-w-0">
                      {item.element_snippet ? (
                        <CodeSnippet
                          code={item.element_snippet}
                          highlight={enrichment.codeHighlight}
                          variant="dark"
                        />
                      ) : (
                        <span className="text-sm text-gray-400">—</span>
                      )}
                    </div>
                    {item.element_snippet && (
                      <CopyButton text={item.element_snippet} size="xs" label="" copiedLabel="" />
                    )}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        {/* ── Auditor Decision (Prominent Action Section) ─────────────────── */}
        <Card className="bg-primary-50 dark:bg-primary-900/10 border-primary-200 dark:border-primary-800">
          <SectionHeader
            title="Auditor Decision"
            icon={Gavel}
            variant="primary"
          />

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Based on the evidence above, classify this issue:
          </p>

          <DecisionButtonGroup
            currentDecision={item.decision}
            onDecision={handleDecision}
            disabled={isCapturing}
          />

          {item.decision && (
            <div className="mt-4 pt-4 border-t border-primary-200 dark:border-primary-800">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 dark:text-gray-400">Current:</span>
                <DecisionBadge decision={item.decision} />
                {item.dismissal_reason && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    ({item.dismissal_reason})
                  </span>
                )}
              </div>
            </div>
          )}
        </Card>

        {/* ── Secondary Info (Collapsible) ──────────────────────────────────── */}

        {/* How to Fix */}
        {(enrichment.clientFix || enrichment.fixDifficulty || enrichment.badExample || enrichment.goodExample) && (
          <Accordion collapseAll>
            <AccordionPanel>
              <AccordionTitle>
                <span className="flex items-center gap-2">
                  <Wrench className="h-4 w-4" />
                  How to Fix
                  {enrichment.fixDifficulty && (
                    <Badge
                      size="sm"
                      color={
                        enrichment.fixDifficulty === 'Easy' ? 'green' :
                        enrichment.fixDifficulty === 'Medium' ? 'yellow' : 'red'
                      }
                      className="ml-2"
                    >
                      {enrichment.fixDifficulty}
                    </Badge>
                  )}
                </span>
              </AccordionTitle>
              <AccordionContent className="space-y-4">
                {enrichment.whatThisMeans && (
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <p className="text-xs font-medium text-blue-700 dark:text-blue-300 mb-1">What this means</p>
                    <p className="text-sm text-blue-900 dark:text-blue-200">{enrichment.whatThisMeans}</p>
                  </div>
                )}

                {enrichment.whyItMatters && (
                  <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                    <p className="text-xs font-medium text-amber-700 dark:text-amber-300 mb-1">Why it matters</p>
                    <p className="text-sm text-amber-900 dark:text-amber-200">{enrichment.whyItMatters}</p>
                  </div>
                )}

                {enrichment.clientFix && (
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">How to fix</p>
                    <p className="text-sm text-gray-900 dark:text-white">{enrichment.clientFix}</p>
                  </div>
                )}

                {enrichment.affectedUsers && (
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Affected Users</p>
                    <p className="text-sm text-gray-900 dark:text-white">{enrichment.affectedUsers}</p>
                  </div>
                )}

                {(enrichment.badExample || enrichment.goodExample) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {enrichment.badExample && (
                      <div>
                        <p className="text-xs font-medium text-red-600 dark:text-red-400 mb-1">❌ Before</p>
                        <CodeSnippet
                          code={enrichment.badExample}
                          highlight={enrichment.codeHighlight}
                          variant="dark"
                        />
                      </div>
                    )}
                    {enrichment.goodExample && (
                      <div>
                        <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-1">✓ After</p>
                        <CodeSnippet code={enrichment.goodExample} variant="dark" />
                      </div>
                    )}
                  </div>
                )}
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        )}

        {/* Affected Elements */}
        <Accordion collapseAll>
          <AccordionPanel>
            <AccordionTitle>
              <span className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                All Affected Elements
                <Badge size="sm" color="gray" className="ml-2">{allNodes.length || item.node_count || 0}</Badge>
              </span>
            </AccordionTitle>
            <AccordionContent>
              {loadingScan ? (
                <Loading text="Loading element details..." />
              ) : allNodes.length > 0 ? (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {allNodes.map((node, idx) => {
                    const enriched = node._enriched
                    return (
                      <div
                        key={idx}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge size="sm" color="blue">{idx + 1}</Badge>
                            {enriched?.tagName && (
                              <span className="text-xs text-gray-500">&lt;{enriched.tagName}&gt;</span>
                            )}
                          </div>
                          {node.impact && <ImpactBadge impact={node.impact} size="sm" />}
                        </div>

                        {/* Friendly description first */}
                        {enriched?.friendlyDescription && (
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">What it is</p>
                            <p className="text-sm text-gray-900 dark:text-white">{enriched.friendlyDescription}</p>
                          </div>
                        )}

                        {/* Visible text */}
                        {enriched?.visibleText && (
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Visible text</p>
                            <span className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">"{enriched.visibleText}"</span>
                          </div>
                        )}

                        {/* Technical: Target selector */}
                        {enriched?.formattedSelector && (
                          <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">CSS Selector</p>
                            <code className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded break-all">
                              {enriched.formattedSelector}
                            </code>
                          </div>
                        )}

                        {/* Technical: HTML */}
                        {node.html && (
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">HTML</p>
                            <CodeSnippet code={node.html} variant="dark" />
                          </div>
                        )}

                        {/* Failure Summary */}
                        {node.failureSummary && (
                          <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Failure Details</p>
                            <p className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{node.failureSummary}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              ) : (
                <EmptyState
                  icon={Layers}
                  title="No detailed elements"
                  description="Run a scan to capture individual element details"
                />
              )}
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        {/* WCAG References */}
        {(item.wcag_sc || enrichment.wcagTechniques?.length || enrichment.wcagFailures?.length || enrichment.ariaPractices) && (
          <Accordion collapseAll>
            <AccordionPanel>
              <AccordionTitle>
                <span className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  WCAG References
                  {item.wcag_sc && <Badge size="sm" color="purple" className="ml-2">SC {item.wcag_sc}</Badge>}
                </span>
              </AccordionTitle>
              <AccordionContent className="space-y-4">
                {item.wcag_sc && WCAG_REFERENCES[item.wcag_sc] && (
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">Success Criterion</p>
                    <a
                      href={WCAG_REFERENCES[item.wcag_sc].url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-primary-700 hover:underline flex items-center gap-1.5"
                    >
                      SC {item.wcag_sc} — {WCAG_REFERENCES[item.wcag_sc].title}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}

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
                            {t.id}: {t.title}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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
                            className="text-sm text-red-600 hover:underline flex items-center gap-1.5"
                          >
                            {f.id}: {f.title}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {enrichment.ariaPractices && (
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">ARIA Authoring Practices</p>
                    <a
                      href={enrichment.ariaPractices}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-primary-700 hover:underline flex items-center gap-1.5"
                    >
                      APG Pattern
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        )}

        {/* Raw Data (Last, collapsed by default) */}
        <Accordion collapseAll>
          <AccordionPanel>
            <AccordionTitle>
              <span className="flex items-center gap-2 text-gray-400">
                <Code className="h-4 w-4" />
                Raw Scan Data
                <span className="text-xs text-gray-400 font-normal ml-2">For developers</span>
              </span>
            </AccordionTitle>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Triage Item (with enriched data)</p>
                  <CodeSnippet
                    code={JSON.stringify({
                      id: item.id,
                      audit_id: item.audit_id,
                      job_id: item.job_id,
                      group_id: item.group_id,
                      rule_id: item.rule_id,
                      landmark: item.landmark,
                      location_context: item.location_context,
                      issue_type: item.issue_type,
                      decision: item.decision,
                      dismissal_reason: item.dismissal_reason,
                      impact: item.impact,
                      page_name: item.page_name,
                      selector: item.selector,
                      friendly_description: item.friendly_description,
                      visible_text: item.visible_text,
                      tag_name: item.tag_name,
                      wcag_sc: item.wcag_sc,
                      sc_ids: item.sc_ids,
                      tags: item.tags,
                      node_count: item.node_count,
                      element_snippet: item.element_snippet,
                      screenshot_url: item.screenshot_url,
                    }, null, 2)}
                    variant="dark"
                  />
                </div>

                {scanData && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                      {scanData.isCustomCheck ? 'Custom Check' : 'Axe Violation'}
                    </p>
                    <CodeSnippet code={JSON.stringify(scanData, null, 2)} variant="dark" />
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        {/* ── View Full Details Button ──────────────────────────────────────── */}
        <div className="flex justify-end pt-2">
          <Button
            size="sm"
            color="primary"
            onClick={() => navigate(`/audits/${auditId}/issues/${item.id}`)}
          >
            Open Full Details
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    )
  }

  const untriagedCount = triageItems.filter(i => !i.decision).length

  /* ── Severity counts ── */
  const severityCounts = useMemo(() =>
    triageItems.reduce((acc, item) => {
      acc[item.impact] = (acc[item.impact] ?? 0) + 1
      return acc
    }, {}),
  [triageItems])

  const impactFilterSections = [
    {
      title: 'Impact',
      options: [
        { value: '', label: 'All Impacts', checked: filterImpact === '', onToggle: () => setFilterImpact('') },
        { value: 'critical', label: 'Critical', checked: filterImpact === 'critical', onToggle: () => setFilterImpact('critical') },
        { value: 'serious', label: 'Serious', checked: filterImpact === 'serious', onToggle: () => setFilterImpact('serious') },
        { value: 'moderate', label: 'Moderate', checked: filterImpact === 'moderate', onToggle: () => setFilterImpact('moderate') },
        { value: 'minor', label: 'Minor', checked: filterImpact === 'minor', onToggle: () => setFilterImpact('minor') },
      ]
    }
  ]

  const sortOptions = [
    { key: 'impact', label: 'Severity' },
    { key: 'scope', label: 'Scope' },
    { key: 'finding', label: 'Finding' },
    { key: 'result', label: 'Result' },
    { key: 'decision', label: 'Status' },
  ]

  const columns = useMemo(() => [
    {
      key: 'scope',
      header: (
        <button onClick={() => handleSort('scope')} className="flex items-center gap-1 text-xs uppercase font-medium hover:text-primary-600">
          Scope
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
          </svg>
        </button>
      ),
      width: 'min-w-40',
      render: (item) => (
        <div className="flex items-center gap-2">
          <PageIcon pageName={item.page_name} />
          <span className="max-w-[150px] truncate text-xs" title={item.page_name}>
            {item.page_name || '—'}
          </span>
        </div>
      ),
    },
    {
      key: 'impact',
      header: (
        <button onClick={() => handleSort('impact')} className="flex items-center gap-1 text-xs uppercase font-medium hover:text-primary-600">
          Severity
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
          </svg>
        </button>
      ),
      width: 'min-w-28',
      render: (item) => <ImpactBadge impact={item.impact} size="sm" />,
    },
    {
      key: 'finding',
      header: (
        <button onClick={() => handleSort('finding')} className="flex items-center gap-1 text-xs uppercase font-medium hover:text-primary-600">
          Finding
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
          </svg>
        </button>
      ),
      width: 'min-w-56',
      render: (item) => {
        const enrichment = RULE_ENRICHMENTS[item.rule_id] ?? {}
        return (
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {enrichment.auditorTitle || item.rule_id}
            </span>
            <Badge size="sm" color={getCategoryBadgeColor(item)}>
              {getCategoryLabel(item)}
            </Badge>
          </div>
        )
      },
    },
    {
      key: 'result',
      header: (
        <button onClick={() => handleSort('result')} className="flex items-center gap-1 text-xs uppercase font-medium hover:text-primary-600">
          Result
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
          </svg>
        </button>
      ),
      width: 'min-w-28',
      render: (item) => (
        <Badge color={ISSUE_TYPE_COLOR[item.issue_type] || 'gray'} size="sm">
          {item.issue_type || 'failure'}
        </Badge>
      ),
    },
    {
      key: 'decision',
      header: (
        <button onClick={() => handleSort('decision')} className="flex items-center gap-1 text-xs uppercase font-medium hover:text-primary-600">
          Status
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
          </svg>
        </button>
      ),
      width: 'min-w-28',
      render: (item) => <DecisionBadge decision={item.decision} size="sm" />,
    },
    {
      key: 'actions',
      header: 'Actions',
      width: 'w-20',
      render: (item) => (
        <Button
          size="xs"
          color="primary"
          outline
          onClick={(e) => {
            e.stopPropagation()
            openDrawer(item)
          }}
        >
          Details
        </Button>
      ),
    },
  ], [])

  if (loadingTriage) return (
    <div className="px-4 pt-6">
      <div className="flex justify-center py-16">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    </div>
  )

  if (triageError) return (
    <div className="px-4 pt-6">
      <div className="px-5 py-4 text-sm text-red-600 dark:text-red-400">{triageError}</div>
    </div>
  )

  if (triageItems.length === 0) return (
    <div className="px-4 pt-6">
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 rounded-full bg-gray-100 p-3 dark:bg-gray-700">
          <ClipboardList className="h-6 w-6 text-gray-400 dark:text-gray-500" />
        </div>
        <p className="text-base font-semibold text-gray-900 dark:text-white">No triage items yet</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Run a scan to generate issues to triage.</p>
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 gap-4 px-4 pt-6">
      <PageHeader title="Triage Issues" subtitle="Review and classify accessibility violations" />

      <Card theme={customTheme.card}>
        <div className="mx-4 flex flex-col-reverse items-center justify-between py-3 md:flex-row md:space-x-4">
          <div className="flex w-full flex-col space-y-3 md:flex-row md:items-center md:space-y-0 lg:w-2/3">
            <SearchInput
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search issues..."
              id="triage-search"
            />

            <div className="flex items-center space-x-4">
              <FilterDropdown
                label={filterImpact ? `Impact: ${filterImpact}` : 'Impact'}
                sections={impactFilterSections}
              />

              <Dropdown
                theme={customTheme.dropdown}
                renderTrigger={() => (
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                      className="h-4 w-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      />
                    </svg>
                    Sort: {sortOptions.find(s => s.key === sortBy)?.label || 'Severity'}
                    <ChevronDown className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
                  </button>
                )}
              >
                <div className="w-48 p-3">
                  {sortOptions.map((sort) => (
                    <DropdownItem
                      key={sort.key}
                      onClick={() => handleSort(sort.key)}
                      className={sortBy === sort.key ? 'bg-gray-100 dark:bg-gray-600' : ''}
                    >
                      <div className="flex items-center justify-between">
                        {sort.label}
                        {sortBy === sort.key && (
                          <span className="text-xs text-gray-500">
                            {sortDirection === 'asc' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </DropdownItem>
                  ))}
                </div>
              </Dropdown>
            </div>
          </div>

          <div className="mb-3 flex w-full shrink-0 flex-col items-stretch justify-end md:mb-0 md:w-auto md:flex-row md:items-center md:space-x-3">
            <Button color="light" size="sm" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Severity summary bar */}
        <div className="mx-4 flex items-stretch overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
          {[
            { key: 'critical', label: 'Critical', num: severityCounts.critical || 0, hint: 'Must fix', color: 'text-red-700', bg: 'bg-red-50', dot: 'bg-red-500' },
            { key: 'serious',  label: 'Serious',  num: severityCounts.serious  || 0, hint: 'Fix soon', color: 'text-orange-700', bg: 'bg-orange-50', dot: 'bg-orange-500' },
            { key: 'moderate', label: 'Moderate', num: severityCounts.moderate || 0, hint: 'Plan fix', color: 'text-amber-700', bg: 'bg-amber-50', dot: 'bg-amber-500' },
            { key: 'minor',    label: 'Minor',    num: severityCounts.minor    || 0, hint: 'Backlog',  color: 'text-blue-700',  bg: 'bg-blue-50',  dot: 'bg-blue-500' },
          ].map((seg) => (
            <button
              key={seg.key}
              type="button"
              onClick={() => setFilterImpact(filterImpact === seg.key ? '' : seg.key)}
              className={`flex flex-1 items-center gap-3 border-r border-gray-100 px-4 py-3 transition-colors last:border-r-0 dark:border-gray-700 ${
                filterImpact === seg.key ? 'bg-primary-50 dark:bg-primary-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <div className="text-left">
                <div className={`text-xl font-extrabold tracking-tight ${seg.color} dark:text-red-400`}>{seg.num}</div>
                <div className={`text-[11px] font-semibold uppercase tracking-wide ${seg.color}`}>{seg.label}</div>
              </div>
              <span className="ml-auto text-[11px] text-gray-400 dark:text-gray-500">{seg.hint}</span>
            </button>
          ))}
          <div className="flex-none px-4 py-3">
            <div className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">{triageItems.length}</div>
            <div className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Total</div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="mx-4 flex flex-col-reverse items-center justify-between gap-3 py-3 md:flex-row">
          <div className="flex w-full flex-col gap-3 md:flex-row md:items-center lg:w-2/3">
            <SearchInput
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search issues..."
              id="triage-search"
            />

            <div className="flex items-center gap-3">
              <FilterDropdown
                label={filterImpact ? `Impact: ${filterImpact}` : 'Impact'}
                sections={impactFilterSections}
              />

              <Dropdown
                theme={customTheme.dropdown}
                renderTrigger={() => (
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" />
                    </svg>
                    Sort: {sortOptions.find(s => s.key === sortBy)?.label || 'Severity'}
                    <ChevronDown className="h-3.5 w-3.5 text-gray-400" aria-hidden="true" />
                  </button>
                )}
              >
                <div className="w-48 p-3">
                  {sortOptions.map((sort) => (
                    <DropdownItem
                      key={sort.key}
                      onClick={() => handleSort(sort.key)}
                      className={sortBy === sort.key ? 'bg-gray-100 dark:bg-gray-600' : ''}
                    >
                      <div className="flex items-center justify-between">
                        {sort.label}
                        {sortBy === sort.key && (
                          <span className="text-xs text-gray-500">
                            {sortDirection === 'asc' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </DropdownItem>
                  ))}
                </div>
              </Dropdown>
            </div>
          </div>

          <div className="flex w-full shrink-0 justify-end md:w-auto">
            <Button color="light" size="sm" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Status filter chips */}
        <div className="mx-4 flex flex-wrap items-center gap-2 border-b border-gray-200 pb-3 dark:border-gray-700">
          <span className="mr-1 text-xs font-semibold text-gray-500 dark:text-gray-400">Show:</span>
          {TABS.map((tab) => {
            const counts = {
              all:      triageItems.length,
              pending:  untriagedCount,
              confirmed: triageItems.filter(i => i.decision === 'confirmed').length,
              needs_review: triageItems.filter(i => i.decision === 'needs_review').length,
              dismissed: triageItems.filter(i => i.decision === 'dismissed').length,
            }
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-700 dark:bg-primary-900/20 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
              >
                {tab.label}
                <span className={`min-w-[18px] rounded-full px-1.5 py-0.5 text-center text-xs font-semibold ${
                  activeTab === tab.key
                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-300'
                    : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                }`}>
                  {counts[tab.key]}
                </span>
              </button>
            )
          })}
        </div>

        <div className="relative overflow-x-auto rounded-lg bg-white dark:bg-gray-800">
          {sortedItems.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-gray-500 dark:text-gray-400">No issues match your filters</p>
              <Button size="xs" color="light" className="mt-2" onClick={clearFilters}>Clear filters</Button>
            </div>
          ) : (
            <DataTable
              columns={columns}
              data={sortedItems}
              onRowClick={(row) => openDrawer(row)}
              keyExtractor={(row) => row.id}
              expandable
              renderExpand={(row) => (
                <ExpandedRowContent
                  item={row}
                  onScreenshotCaptured={handleScreenshotCaptured}
                />
              )}
            />
          )}
        </div>

        <div className="flex flex-col items-start justify-between space-y-3 border-t border-gray-200 px-4 py-3 dark:border-gray-700 md:flex-row md:items-center md:space-y-0">
          <div className="flex items-center space-x-5 text-xs">
            <div>
              <div className="mb-1 text-gray-500 dark:text-gray-400">Total Issues</div>
              <div className="font-medium dark:text-white">{triageItems.length}</div>
            </div>
            <div>
              <div className="mb-1 text-gray-500 dark:text-gray-400">Filtered</div>
              <div className="font-medium dark:text-white">{filteredItems.length}</div>
            </div>
          </div>
        </div>
      </Card>

      <IssueDetailDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        item={selectedItem}
        onPrev={() => navigateDrawer(-1)}
        onNext={() => navigateDrawer(1)}
        hasPrev={selectedIndex > 0}
        hasNext={selectedIndex < sortedItems.length - 1}
      />
    </div>
  )
}
