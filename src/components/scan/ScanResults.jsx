import { useState } from 'react'
import { Card, Badge, Button, Accordion, Label, Textarea, ToggleSwitch, Select } from 'flowbite-react'

// Impact colors
const IMPACT_COLORS = {
  critical: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  serious: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  moderate: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  minor: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
}

// Issue type colors
const ISSUE_TYPE_COLORS = {
  failure: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  'needs review': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  'failure, needs review': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
}

// Fix difficulty colors
const FIX_DIFFICULTY_COLORS = {
  Easy: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  Medium: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  Hard: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
}

// Left border colors for cards
const BORDER_COLORS = {
  critical: 'border-l-4 border-l-red-600',
  serious: 'border-l-4 border-l-orange-600',
  moderate: 'border-l-4 border-l-amber-600',
  minor: 'border-l-4 border-l-gray-400',
}

export default function ScanResults({ job, onClose }) {
  const [inScopeOnly, setInScopeOnly] = useState(true)
  const [severityFilter, setSeverityFilter] = useState('all')
  const [expandedGroup, setExpandedGroup] = useState(null)
  const [decisionState, setDecisionState] = useState({}) // { groupId: decision }
  const [reportNotes, setReportNotes] = useState({}) // { groupId: note }
  const [auditorNotes, setAuditorNotes] = useState({}) // { groupId: internal note }

  if (!job || job.status !== 'complete' || !job.results) {
    return (
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Scan Results
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {job.status === 'running' ? 'Running scan...' : job.status === 'error' ? `Error: ${job.error}` : 'No results yet'}
            </p>
          </div>
          <Button onClick={onClose} color="light" size="sm">
            Close
          </Button>
        </div>
      </Card>
    )
  }

  const { results, scanType } = job

  // Get violations based on scan type
  let violationGroups = []
  let stepResults = null

  if (scanType === 'flow') {
    stepResults = results.groupedSteps || results.steps || []
    // Flatten for summary
    violationGroups = stepResults.flatMap(step => step.groupedViolations || [])
  } else {
    violationGroups = results.groupedViolations || []
  }

  // Apply filters
  let filteredGroups = violationGroups
  if (inScopeOnly) {
    filteredGroups = filteredGroups.filter(g => g.scIds?.length > 0)
  }
  if (severityFilter !== 'all') {
    filteredGroups = filteredGroups.filter(g => g.impact === severityFilter)
  }

  // Calculate summary
  const summary = {
    violations: filteredGroups.length,
    needsReview: filteredGroups.filter(g => g.issueType === 'needs review').length,
    passes: (results.passes || []).length,
    inapplicable: (results.inapplicable || []).length,
  }

  const handleDecision = (groupId, decision, reason = null) => {
    setDecisionState(prev => ({ ...prev, [groupId]: { decision, reason } }))
  }

  const renderDecisionButtons = (group) => {
    const currentState = decisionState[group.groupId]

    const isFailure = group.issueType === 'failure'
    const isPreSelected = isFailure && currentState?.decision === 'confirmed'

    return (
      <div className="flex flex-wrap gap-2 mt-4">
        <Button onClick={() => handleDecision(group.groupId, 'confirmed')} size="sm">
          Confirmed failure
        </Button>
        <Button onClick={() => handleDecision(group.groupId, 'not-failure')} size="sm">
          Not a failure
        </Button>
        <Button onClick={() => handleDecision(group.groupId, 'needs-check')} size="sm">
          Needs manual check
        </Button>
        <Button onClick={() => handleDecision(group.groupId, 'defer')} size="sm">
          Defer
        </Button>
      </div>
    )
  }

  const renderExpandableDetail = (group) => (
    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
      {/* Auditor Notes */}
      {group.auditorNotes && (
        <div>
          <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
            Auditor Notes
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {group.auditorNotes}
          </p>
        </div>
      )}

      {/* Reference Links */}
      {(group.wcagTechniques?.length > 0 || group.wcagFailures?.length > 0 || group.ariaPractices) && (
        <div>
          <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            References
          </p>
          <div className="flex flex-wrap gap-2">
            {group.wcagTechniques?.map((tech, i) => (
              <a
                key={i}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded text-xs hover:underline"
              >
                {tech.id}
              </a>
            ))}
            {group.wcagFailures?.map((fail, i) => (
              <a
                key={i}
                href={fail.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded text-xs hover:underline"
              >
                {fail.id}
              </a>
            ))}
            {group.ariaPractices && (
              <a
                href={group.ariaPractices}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded text-xs hover:underline"
              >
                ARIA APG
              </a>
            )}
          </div>
        </div>
      )}

      {/* Code Examples */}
      {group.enrichment?.badExample && group.enrichment?.goodExample && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-red-700 dark:text-red-400 mb-1">
              Bad Example
            </p>
            <pre className="text-xs bg-red-50 dark:bg-red-900/20 p-3 rounded overflow-x-auto">
              {group.enrichment.badExample}
            </pre>
          </div>
          <div>
            <p className="text-sm font-medium text-green-700 dark:text-green-400 mb-1">
              Good Example
            </p>
            <pre className="text-xs bg-green-50 dark:bg-green-900/20 p-3 rounded overflow-x-auto">
              {group.enrichment.goodExample}
            </pre>
          </div>
        </div>
      )}

      {/* Client Fix */}
      {group.clientFix && (
        <div>
          <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
            How to Fix
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {group.clientFix}
          </p>
        </div>
      )}

      {/* Affected Nodes */}
      {group.nodes?.length > 0 && (
        <div>
          <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            Affected Elements ({group.nodes.length})
          </p>
          <div className="space-y-2">
            {group.nodes.slice(0, 5).map((node, i) => (
              <div key={i} className="p-2 bg-gray-50 dark:bg-gray-800 rounded text-xs font-mono">
                <p className="text-gray-600 dark:text-gray-400">Target: {node.target}</p>
                {node.html && (
                  <p className="text-gray-900 dark:text-white mt-1 truncate">
                    {node.html}
                  </p>
                )}
                {node.message && (
                  <p className="text-gray-500 dark:text-gray-500 mt-1">
                    {node.message}
                  </p>
                )}
              </div>
            ))}
            {group.nodes.length > 5 && (
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +{group.nodes.length - 5} more elements
              </p>
            )}
          </div>
        </div>
      )}

      {/* Report Notes */}
      <div>
        <Label value="Report notes (included in final report)" />
        <Textarea
          value={reportNotes[group.groupId] || group.clientFix || ''}
          onChange={(e) => setReportNotes(prev => ({ ...prev, [group.groupId]: e.target.value }))}
          rows={3}
          className="mt-1"
        />
      </div>

      {/* Internal Auditor Notes */}
      <div>
        <Label value="Internal notes (not in report)" />
        <Textarea
          value={auditorNotes[group.groupId] || ''}
          onChange={(e) => setAuditorNotes(prev => ({ ...prev, [group.groupId]: e.target.value }))}
          rows={2}
          className="mt-1"
        />
      </div>
    </div>
  )

  return (
    <Card>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {job.scanName}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {new Date(job.completedAt).toLocaleString()}
          </p>
        </div>
        <Button onClick={onClose} size="sm" color="light">
          Close
        </Button>
      </div>

      {/* Screenshot */}
      {results.screenshot && (
        <div className="mb-4">
          <img
            src={`data:image/png;base64,${results.screenshot}`}
            alt="Scan result with violations highlighted"
            className="w-full max-h-[200px] object-cover rounded-lg border border-gray-200 dark:border-gray-700"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Red outlines indicate violation locations
          </p>
        </div>
      )}

      {/* Summary Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <button
          onClick={() => setSeverityFilter(severityFilter === 'violations' ? 'all' : 'violations')}
          className={`p-3 rounded-lg border ${
            severityFilter === 'violations'
              ? 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'
              : 'bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700'
          }`}
        >
          <p className="text-2xl font-bold text-red-600 dark:text-red-400">{summary.violations}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Violations</p>
        </button>
        <button
          onClick={() => setSeverityFilter(severityFilter === 'needsReview' ? 'all' : 'needsReview')}
          className={`p-3 rounded-lg border ${
            severityFilter === 'needsReview'
              ? 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800'
              : 'bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700'
          }`}
        >
          <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">{summary.needsReview}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Needs review</p>
        </button>
        <div className="p-3 rounded-lg border bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">{summary.passes}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Passes</p>
        </div>
        <div className="p-3 rounded-lg border bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <p className="text-2xl font-bold text-gray-600 dark:text-gray-400">{summary.inapplicable}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">N/A</p>
        </div>
      </div>

      {/* Filters */}
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

      {/* Flow scan step accordion */}
      {stepResults && (
        <div className="mb-4">
          <Accordion>
            {stepResults.map((step, i) => (
              <Accordion.Panel key={i}>
                <Accordion.Title>{`Step ${i + 1}: ${step.stepName}`}</Accordion.Title>
                <Accordion.Content>
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
                </Accordion.Content>
              </Accordion.Panel>
            ))}
          </Accordion>
        </div>
      )}

      {/* Violation Groups */}
      <div className="space-y-3">
        {filteredGroups.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              {inScopeOnly ? 'No in-scope violations found' : 'No violations found'}
            </p>
          </div>
        ) : (
          filteredGroups.map((group) => (
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
    </Card>
  )
}

// Separate ViolationCard component for clarity
function ViolationCard({ group, isExpanded, onToggle, renderDecisionButtons, renderExpandableDetail }) {
  return (
    <Card className={`${BORDER_COLORS[group.impact] || 'border-l-4 border-l-gray-400'}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Title row */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-base font-semibold text-gray-900 dark:text-white">
              {group.auditorTitle || group.ruleId}
            </span>
            <Badge className={IMPACT_COLORS[group.impact] || IMPACT_COLORS.minor}>
              {group.impact}
            </Badge>
            {group.isWcagFailure && (
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                WCAG failure
              </Badge>
            )}
            <Badge className={ISSUE_TYPE_COLORS[group.issueType] || ISSUE_TYPE_COLORS['needs review']}>
              {group.issueType === 'failure' ? 'Definite failure' :
               group.issueType === 'needs review' ? 'Needs review' :
               'Swing'}
            </Badge>
          </div>

          {/* Metadata row */}
          <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
            {group.scIds?.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {group.scIds.map(sc => (
                  <span
                    key={sc}
                    className="px-2 py-0.5 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded text-xs"
                  >
                    SC {sc}
                  </span>
                ))}
              </div>
            )}
            <span>{group.nodeCount} element{group.nodeCount !== 1 ? 's' : ''}</span>
            <span>•</span>
            <span className="capitalize">{group.landmark}</span>
            {group.fixDifficulty && (
              <>
                <span>•</span>
                <Badge className={FIX_DIFFICULTY_COLORS[group.fixDifficulty] || FIX_DIFFICULTY_COLORS.Medium}>
                  {group.fixDifficulty} fix
                </Badge>
              </>
            )}
          </div>

          {/* Affected users */}
          {group.affectedUsers?.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {group.affectedUsers.map((user, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded text-xs"
                >
                  {user}
                </span>
              ))}
            </div>
          )}

          {/* Decision buttons */}
          {renderDecisionButtons(group)}
        </div>

        {/* Expand button */}
        <Button
          size="sm"
          color="light"
          onClick={onToggle}
          className="ml-4"
        >
          {isExpanded ? '▼' : '▶'}
        </Button>
      </div>

      {/* Expanded detail */}
      {isExpanded && renderExpandableDetail(group)}
    </Card>
  )
}
