import { useState, memo } from 'react'
import { Card, Button, Accordion, AccordionPanel, AccordionTitle, AccordionContent, Label, Textarea, ToggleSwitch, Select } from 'flowbite-react'
import { Badge } from '@shared/ui'
import { AlertTriangle, ShieldAlert, Sparkles, Eye, ChevronDown, ChevronRight, X, Plus } from 'lucide-react'
import { groupViolations } from '@/lib/groupViolations.js'
import { customTheme } from '@/config/theme.js'

// ─── Standard accessibility user groups (WAI/WCAG aligned) ───────────────────
// Derived from WCAG Understanding docs and WAI personas.
// "Older users" is omitted — it's a demographic, not a disability group.
const ALL_USER_GROUPS = [
  'Screen reader users',
  'Keyboard-only users',
  'Low vision users',
  'Blind users',
  'Deaf users',
  'Hard-of-hearing users',
  'Users with cognitive disabilities',
  'Users with motor disabilities',
  'Speech recognition users',
  'Colorblind users',
  'Users with photosensitive conditions',
  'Braille display users',
  'Touch-only users',
]

// ─── Impact badge colors ────────────────────────────────────────────────────
const IMPACT_COLORS = {
  critical: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  serious:  'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  moderate: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  minor:    'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
}

// ─── Issue type badge colors ────────────────────────────────────────────────
const ISSUE_TYPE_COLORS = {
  failure:               'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  'needs review':        'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  'failure, needs review':'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  'best-practice':       'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300',
}
const ISSUE_TYPE_LABELS = {
  failure:               'Definite failure',
  'needs review':        'Needs review',
  'failure, needs review':'Swing',
  'best-practice':       'Best practice',
}

// ─── Fix difficulty badge colors ────────────────────────────────────────────
const FIX_DIFFICULTY_COLORS = {
  Easy:   'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  Medium: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  Hard:   'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
}

// ─── Left border accent ──────────────────────────────────────────────────────
const BORDER_COLORS = {
  critical: 'border-l-4 border-l-red-600',
  serious:  'border-l-4 border-l-orange-600',
  moderate: 'border-l-4 border-l-amber-600',
  minor:    'border-l-4 border-l-gray-400',
}

// ─── Category chips derived from axe tags ────────────────────────────────────
function getCategoryChips(tags = []) {
  const chips = []
  if (tags.includes('best-practice'))
    chips.push({ label: 'Best practice', cls: 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800' })
  if (tags.includes('cat.aria'))
    chips.push({ label: 'ARIA', cls: 'bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800' })
  if (tags.includes('cat.color-contrast'))
    chips.push({ label: 'Contrast', cls: 'bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800' })
  const hasWcag = tags.some(t => /^wcag\d/.test(t))
  if (hasWcag && !tags.includes('best-practice'))
    chips.push({ label: 'WCAG', cls: 'bg-primary-50 text-primary-700 border border-primary-200 dark:bg-primary-900/20 dark:text-primary-300 dark:border-primary-800' })
  return chips
}

// ─── Stat card (themed) ───────────────────────────────────────────────────────
function StatCard({ icon: Icon, label, value, colorVariant, active, onClick }) {
  const colorMap = customTheme.card?.color ?? {}
  const color = colorMap[colorVariant] ?? colorMap.neutral ?? 'bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700'
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-start gap-1.5 rounded-lg border shadow-sm p-4 w-full text-left transition-all
        ${color}
        ${active ? 'ring-2 ring-primary-400 ring-offset-1' : 'hover:brightness-95'}`}
    >
      <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        {label}
      </div>
      <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
    </button>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
function ScanResults({ job, onClose }) {
  const [inScopeOnly, setInScopeOnly]     = useState(false)
  const [severityFilter, setSeverityFilter] = useState('all')
  const [cardFilter, setCardFilter]       = useState(null) // null | 'wcag' | 'bestpractice' | 'review'
  const [expandedGroup, setExpandedGroup] = useState(null)
  const [decisionState, setDecisionState]     = useState({})
  const [reportNotes, setReportNotes]         = useState({})
  const [auditorNotes, setAuditorNotes]       = useState({})
  const [fixNotes, setFixNotes]               = useState({}) // { [groupId]: string }
  const [includeInReport, setIncludeInReport] = useState({}) // { [groupId]: boolean } — default true
  const [userGroups, setUserGroups]           = useState({}) // { [groupId]: string[] }
  const [ugDropdownOpen, setUgDropdownOpen]   = useState(null) // groupId of open dropdown

  if (!job || job.status !== 'complete' || !job.results) {
    return (
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Scan Results</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {job?.status === 'running'  ? 'Running scan…'
               : job?.status === 'error' ? `Error: ${job.error}`
               : 'No results yet'}
            </p>
          </div>
          <Button onClick={onClose} color="ghost" size="sm">Close</Button>
        </div>
      </Card>
    )
  }

  const { results, scanType } = job

  // ── Violation groups ─────────────────────────────────────────────────────
  let violationGroups = []
  let stepResults     = null

  if (scanType === 'flow') {
    stepResults     = results.groupedSteps || results.steps || []
    violationGroups = stepResults.flatMap(step => step.groupedViolations || [])
  } else {
    violationGroups = results.groupedViolations || []
  }

  const incompleteGroups = groupViolations(results.incomplete || [], null, null)

  // ── Filters (severity + in-scope) ────────────────────────────────────────
  let filteredGroups = violationGroups
  if (inScopeOnly) filteredGroups = filteredGroups.filter(g => g.scIds?.length > 0)
  if (severityFilter !== 'all') filteredGroups = filteredGroups.filter(g => g.impact === severityFilter)

  const filteredIncomplete = inScopeOnly
    ? incompleteGroups.filter(g => g.scIds?.length > 0)
    : incompleteGroups

  // ── Summary counts ────────────────────────────────────────────────────────
  const totalIssues         = filteredGroups.reduce((s, g) => s + g.nodeCount, 0)
  const wcagFailureGroups   = filteredGroups.filter(g => g.isWcagFailure)
  const bestPracticeGroups  = filteredGroups.filter(g => g.issueType === 'best-practice')
  const needsReviewCount    = filteredIncomplete.length

  // ── Card-filter applied to display list ──────────────────────────────────
  let displayGroups = filteredGroups
  if (cardFilter === 'wcag')         displayGroups = wcagFailureGroups
  if (cardFilter === 'bestpractice') displayGroups = bestPracticeGroups

  const showIncomplete = cardFilter === null || cardFilter === 'review'
  const displayIncomplete = cardFilter === 'review' ? filteredIncomplete
    : cardFilter === null ? filteredIncomplete : []

  // ── Helpers ───────────────────────────────────────────────────────────────
  const toggleCard = (key) => setCardFilter(prev => prev === key ? null : key)

  const handleDecision = (groupId, decision) =>
    setDecisionState(prev => ({ ...prev, [groupId]: { decision } }))

  // ── Decision buttons ──────────────────────────────────────────────────────
  const renderDecisionButtons = (group) => (
    <div className="flex flex-wrap gap-2 mt-4">
      <Button onClick={() => handleDecision(group.groupId, 'confirmed')}   size="sm" color="danger">Confirmed failure</Button>
      <Button onClick={() => handleDecision(group.groupId, 'not-failure')} size="sm" color="success">Not a failure</Button>
      <Button onClick={() => handleDecision(group.groupId, 'needs-check')} size="sm" color="warning">Needs manual check</Button>
      <Button onClick={() => handleDecision(group.groupId, 'defer')}       size="sm" color="secondary">Defer</Button>
    </div>
  )

  // ── Expandable detail ─────────────────────────────────────────────────────
  const renderExpandableDetail = (group) => {
    const groupId = group.groupId

    // User groups: local override > enrichment default > empty
    const activeGroups = userGroups[groupId]
      ?? group.affectedUsers?.filter(u => u !== 'Older users') // strip demographic term
      ?? []

    const toggleUserGroup = (name) =>
      setUserGroups(prev => {
        const current = prev[groupId] ?? group.affectedUsers?.filter(u => u !== 'Older users') ?? []
        return {
          ...prev,
          [groupId]: current.includes(name)
            ? current.filter(u => u !== name)
            : [...current, name],
        }
      })

    // Fix notes: local override > enrichment clientFix > empty
    const currentFixNote = fixNotes[groupId] !== undefined
      ? fixNotes[groupId]
      : (group.clientFix ?? '')

    const isInReport = includeInReport[groupId] !== undefined
      ? includeInReport[groupId]
      : true // default: include

    return (
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-5">

        {/* ── 1. Element Location ──────────────────────────────────────── */}
        {group.nodes?.length > 0 && (
          <section aria-label="Element location">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
              Element Location ({group.nodes.length})
            </p>
            <div className="space-y-1.5">
              {group.nodes.map((node, i) => (
                <div key={i} className="flex items-start gap-2 text-xs">
                  <span className="shrink-0 mt-0.5 font-medium text-gray-400 dark:text-gray-500 w-4 text-right">
                    {i + 1}.
                  </span>
                  <code className="font-mono text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800  dark:border-gray-700 rounded px-2 py-0.5 break-all">
                    {node.target}
                  </code>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 2. References ───────────────────────────────────────────── */}
        {(group.wcagTechniques?.length > 0 || group.wcagFailures?.length > 0 || group.ariaPractices) && (
          <section aria-label="References">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
              References
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.wcagTechniques?.map((tech, i) => (
                <a key={i} href={tech.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary-50 text-primary-700 border border-primary-200 dark:bg-primary-900/20 dark:text-primary-300 dark:border-primary-800 rounded text-xs hover:underline">
                  {tech.id}
                </a>
              ))}
              {group.wcagFailures?.map((fail, i) => (
                <a key={i} href={fail.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800 rounded text-xs hover:underline">
                  {fail.id}
                </a>
              ))}
              {group.ariaPractices && (
                <a href={group.ariaPractices} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800 rounded text-xs hover:underline">
                  ARIA APG
                </a>
              )}
            </div>
          </section>
        )}

        {/* ── 3. How to Fix ────────────────────────────────────────────── */}
        <section aria-label="How to fix">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              How to Fix
            </p>
            {/* Include in report toggle */}
            <label className="flex items-center gap-1.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isInReport}
                onChange={e => setIncludeInReport(prev => ({ ...prev, [groupId]: e.target.checked }))}
                className="h-3.5 w-3.5 rounded border-gray-300 text-primary-700 focus:ring-primary-300"
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">Include in report</span>
            </label>
          </div>

          {/* Failing element code — first node as reference */}
          {group.nodes?.[0]?.html && (
            <div className="mb-3">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Failing element</p>
              <pre className="text-xs font-mono text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800  dark:border-gray-700 rounded p-3 overflow-x-auto whitespace-pre-wrap break-words">
                {group.nodes[0].html}
              </pre>
            </div>
          )}

          {/* Editable fix guidance — pre-filled from KB, blank otherwise */}
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              Fix guidance
              {group.clientFix && fixNotes[groupId] === undefined && (
                <span className="ml-1.5 text-gray-400">(from knowledge base — edit to customise)</span>
              )}
            </p>
            <Textarea
              value={currentFixNote}
              onChange={e => setFixNotes(prev => ({ ...prev, [groupId]: e.target.value }))}
              rows={3}
              placeholder="Describe how to fix this issue for the developer…"
            />
          </div>
        </section>

        {/* ── 4. Affected User Groups ──────────────────────────────────── */}
        <section aria-label="Affected user groups">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
            Affected User Groups
          </p>

          {/* Selected chips */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {activeGroups.map(name => (
              <span key={name} className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary-50 text-primary-700 border border-primary-200 dark:bg-primary-900/20 dark:text-primary-300 dark:border-primary-800 rounded-full text-xs">
                {name}
                <button
                  type="button"
                  onClick={() => toggleUserGroup(name)}
                  aria-label={`Remove ${name}`}
                  className="ml-0.5 hover:text-primary-900 dark:hover:text-primary-100"
                >
                  <X className="h-3 w-3" aria-hidden="true" />
                </button>
              </span>
            ))}

            {/* Add group dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setUgDropdownOpen(ugDropdownOpen === groupId ? null : groupId)}
                className="inline-flex items-center gap-1 px-2 py-0.5 border border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 rounded-full text-xs hover:border-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                aria-haspopup="listbox"
                aria-expanded={ugDropdownOpen === groupId}
              >
                <Plus className="h-3 w-3" aria-hidden="true" />
                Add group
              </button>

              {ugDropdownOpen === groupId && (
                <div className="absolute left-0 top-full mt-1 z-20 w-52 rounded-lg  bg-white dark:border-gray-700 dark:bg-gray-800 shadow-lg py-1">
                  {ALL_USER_GROUPS.filter(g => !activeGroups.includes(g)).map(name => (
                    <button
                      key={name}
                      type="button"
                      role="option"
                      onClick={() => { toggleUserGroup(name); setUgDropdownOpen(null) }}
                      className="w-full text-left px-3 py-1.5 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      {name}
                    </button>
                  ))}
                  {ALL_USER_GROUPS.filter(g => !activeGroups.includes(g)).length === 0 && (
                    <p className="px-3 py-2 text-xs text-gray-400">All groups selected</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── 5. Internal auditor notes ────────────────────────────────── */}
        <section aria-label="Internal notes">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
            Internal Notes
            <span className="ml-1.5 text-gray-400 normal-case font-normal">(not included in report)</span>
          </p>
          <Textarea
            value={auditorNotes[groupId] || ''}
            onChange={e => setAuditorNotes(prev => ({ ...prev, [groupId]: e.target.value }))}
            rows={2}
            placeholder="Private notes for the audit team…"
          />
        </section>

      </div>
    )
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <Card>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">{job.scanName}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {new Date(job.completedAt).toLocaleString()}
          </p>
        </div>
        <Button onClick={onClose} size="sm" color="ghost">Close</Button>
      </div>

      {/* Screenshot */}
      {results.screenshot && (
        <div className="mb-4">
          <img
            src={results.screenshot}
            alt="Page screenshot at time of scan"
            className="w-full max-h-[200px] object-cover rounded-lg dark:border-gray-700"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Page screenshot at time of scan</p>
        </div>
      )}

      {/* ── Summary stat cards ───────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <StatCard
          icon={AlertTriangle}
          label="Issues"
          value={totalIssues}
          colorVariant={totalIssues > 0 ? 'critical' : 'neutral'}
          active={cardFilter === null}
          onClick={() => setCardFilter(null)}
        />
        <StatCard
          icon={ShieldAlert}
          label="WCAG Failures"
          value={wcagFailureGroups.length}
          colorVariant={wcagFailureGroups.length > 0 ? 'critical' : 'neutral'}
          active={cardFilter === 'wcag'}
          onClick={() => toggleCard('wcag')}
        />
        <StatCard
          icon={Sparkles}
          label="Best practices"
          value={bestPracticeGroups.length}
          colorVariant={bestPracticeGroups.length > 0 ? 'attention' : 'neutral'}
          active={cardFilter === 'bestpractice'}
          onClick={() => toggleCard('bestpractice')}
        />
        <StatCard
          icon={Eye}
          label="Needs review"
          value={needsReviewCount}
          colorVariant={needsReviewCount > 0 ? 'attention' : 'neutral'}
          active={cardFilter === 'review'}
          onClick={() => toggleCard('review')}
        />
      </div>

      {/* ── Filters ─────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Label value="In-scope only" />
          <ToggleSwitch checked={inScopeOnly} onChange={setInScopeOnly} />
        </div>
        <div>
          <Label value="Severity" />
          <Select
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
            className="w-32"
          >
            <option value="all">All</option>
            <option value="critical">Critical</option>
            <option value="serious">Serious</option>
            <option value="moderate">Moderate</option>
            <option value="minor">Minor</option>
          </Select>
        </div>
      </div>

      {/* ── Flow step accordion ──────────────────────────────────────────── */}
      {stepResults && (
        <div className="mb-4">
          <Accordion>
            {stepResults.map((step, i) => (
              <AccordionPanel key={i}>
                <AccordionTitle>{`Step ${i + 1}: ${step.stepName}`}</AccordionTitle>
                <AccordionContent>
                  <div className="space-y-3">
                    {(step.groupedViolations || []).map((group) => (
                      <ViolationCard
                        key={group.groupId}
                        group={group}
                        isExpanded={expandedGroup === group.groupId}
                        onToggle={() => setExpandedGroup(expandedGroup === group.groupId ? null : group.groupId)}
                        renderDecisionButtons={renderDecisionButtons}
                        renderExpandableDetail={renderExpandableDetail}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionPanel>
            ))}
          </Accordion>
        </div>
      )}

      {/* ── Violations list ──────────────────────────────────────────────── */}
      <div className="space-y-3">
        {displayGroups.length === 0 && cardFilter !== 'review' ? (
          <div className="text-center py-8">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {cardFilter === 'wcag'        ? 'No WCAG failures found'
               : cardFilter === 'bestpractice' ? 'No best-practice issues found'
               : inScopeOnly ? 'No in-scope violations found'
               : 'No violations found'}
            </p>
          </div>
        ) : (
          displayGroups.map((group) => (
            <ViolationCard
              key={group.groupId}
              group={group}
              isExpanded={expandedGroup === group.groupId}
              onToggle={() => setExpandedGroup(expandedGroup === group.groupId ? null : group.groupId)}
              renderDecisionButtons={renderDecisionButtons}
              renderExpandableDetail={renderExpandableDetail}
            />
          ))
        )}
      </div>

      {/* ── Needs manual check (axe incomplete) ─────────────────────────── */}
      {showIncomplete && displayIncomplete.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              Needs manual check ({displayIncomplete.length})
            </h4>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              — axe could not fully verify (e.g. contrast with dynamic backgrounds)
            </span>
          </div>
          <div className="space-y-3">
            {displayIncomplete.map((group) => (
              <ViolationCard
                key={`incomplete-${group.groupId}`}
                group={{ ...group, issueType: 'needs review' }}
                isExpanded={expandedGroup === `incomplete-${group.groupId}`}
                onToggle={() => setExpandedGroup(expandedGroup === `incomplete-${group.groupId}` ? null : `incomplete-${group.groupId}`)}
                renderDecisionButtons={renderDecisionButtons}
                renderExpandableDetail={renderExpandableDetail}
              />
            ))}
          </div>
        </div>
      )}
    </Card>
  )
}

// ─── ViolationCard (must be defined before export) ─────────────────────────────
function ViolationCard({ group, isExpanded, onToggle, renderDecisionButtons, renderExpandableDetail }) {
  const categoryChips = getCategoryChips(group.tags || [])

  return (
    <Card className={`${BORDER_COLORS[group.impact] || 'border-l-4 border-l-gray-400'}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">

          {/* Title row */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {group.auditorTitle || group.ruleId}
            </span>
            {/* Impact */}
            <span className={"inline-flex items-center px-2.5 py-1 text-sm font-medium rounded-md " + (IMPACT_COLORS[group.impact] || IMPACT_COLORS.minor)}>
              {group.impact}
            </span>
            {/* Issue type */}
            <span className={"inline-flex items-center px-2.5 py-1 text-sm font-medium rounded-md " + (ISSUE_TYPE_COLORS[group.issueType] || ISSUE_TYPE_COLORS['needs review'])}>
              {ISSUE_TYPE_LABELS[group.issueType] ?? group.issueType}
            </span>
          </div>

          {/* Metadata row */}
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            {/* WCAG SC chips */}
            {group.scIds?.length > 0 && group.scIds.map(sc => (
              <span key={sc}
                className="px-2 py-0.5 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded text-xs">
                SC {sc}
              </span>
            ))}
            {/* Category chips (cat.aria, contrast, best-practice, WCAG) */}
            {categoryChips.map((chip, i) => (
              <span key={i} className={`px-2 py-0.5 rounded text-xs ${chip.cls}`}>{chip.label}</span>
            ))}
            {/* Element count */}
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {group.nodeCount} element{group.nodeCount !== 1 ? 's' : ''}
            </span>
            {group.landmark && group.landmark !== 'page' && (
              <>
                <span className="text-xs text-gray-400">·</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">{group.landmark}</span>
              </>
            )}
            {/* Fix difficulty — only if explicitly set (no default) */}
            {group.fixDifficulty && (
              <>
                <span className="text-xs text-gray-400">·</span>
                <span className={"inline-flex items-center px-2.5 py-1 text-sm font-medium rounded-md " + (FIX_DIFFICULTY_COLORS[group.fixDifficulty] || FIX_DIFFICULTY_COLORS.Medium)}>
                  {group.fixDifficulty} fix
                </span>
              </>
            )}
          </div>

          {/* Affected users */}
          {group.affectedUsers?.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {group.affectedUsers.map((user, i) => (
                <span key={i}
                  className="px-2 py-0.5 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded text-xs">
                  {user}
                </span>
              ))}
            </div>
          )}

          {renderDecisionButtons(group)}
        </div>

        {/* Expand toggle */}
        <button
          type="button"
          onClick={onToggle}
          className="ml-3 shrink-0 p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
        >
          {isExpanded
            ? <ChevronDown className="h-4 w-4" aria-hidden="true" />
            : <ChevronRight className="h-4 w-4" aria-hidden="true" />}
        </button>
      </div>

      {isExpanded && renderExpandableDetail(group)}
    </Card>
  )
}

// Skip re-render if the job's id, status, and results reference are unchanged.
// ScanPanel polls every 3 s; without this memo the full violation list re-renders
// on every tick even when no new data has arrived.
export default memo(ScanResults, (prev, next) =>
  prev.job?.id      === next.job?.id &&
  prev.job?.status  === next.job?.status &&
  prev.job?.results === next.job?.results
)
