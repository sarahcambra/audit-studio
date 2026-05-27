import React, { useState, useEffect, useMemo } from 'react'
import {
  Button, Badge, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow,
  TextInput, Select, Spinner
} from 'flowbite-react'
import {
  ClipboardList, Search, Check, HelpCircle, XCircle, ChevronDown
} from 'lucide-react'
import { getTriageItems, updateTriageItem } from '../../lib/db/triage'
import { categorizeRule } from '../../lib/axeRuleCategories'
import { RULE_ENRICHMENTS } from '../../lib/ruleEnrichments'
import IssueDetailDrawer from './IssueDetailDrawer'
import { DecisionBadge } from '../audit/OverviewTab'

const IMPACT_COLOR     = { critical: 'failure', serious: 'warning', moderate: 'info', minor: 'gray' }
const IMPACT_ORDER     = { critical: 0, serious: 1, moderate: 2, minor: 3 }
const ISSUE_TYPE_COLOR = { failure: 'failure', 'needs review': 'warning', 'failure, needs review': 'warning' }

export default function TriageTab({ auditId }) {
  const [triageItems, setTriageItems]       = useState([])
  const [loadingTriage, setLoadingTriage]   = useState(true)
  const [triageError, setTriageError]       = useState(null)
  const [selectedItem, setSelectedItem]     = useState(null)
  const [drawerOpen, setDrawerOpen]         = useState(false)
  const [searchQuery, setSearchQuery]       = useState('')
  const [filterImpact, setFilterImpact]     = useState('all')
  const [filterDecision, setFilterDecision] = useState('all')
  const [filterRuleType, setFilterRuleType] = useState('all')
  const [filterPage, setFilterPage]         = useState('all')
  const [sortBy, setSortBy]                 = useState('impact')
  const [expandedId, setExpandedId]         = useState(null)

  useEffect(() => {
    let cancelled = false
    getTriageItems(auditId).then(({ data, error: err }) => {
      if (cancelled) return
      if (err) setTriageError(err.message)
      else setTriageItems(data ?? [])
      setLoadingTriage(false)
    })
    return () => { cancelled = true }
  }, [auditId])

  const handleInlineDecision = async (itemOrId, decision) => {
    const itemId       = typeof itemOrId === 'object' ? itemOrId.id : itemOrId
    const prevDecision = triageItems.find(i => i.id === itemId)?.decision
    setTriageItems(prev => prev.map(i => i.id === itemId ? { ...i, decision } : i))
    if (selectedItem?.id === itemId) setSelectedItem(s => ({ ...s, decision }))
    const { error } = await updateTriageItem(itemId, { decision })
    if (error) {
      setTriageItems(prev => prev.map(i => i.id === itemId ? { ...i, decision: prevDecision } : i))
      console.error('Triage update failed', error)
    }
  }

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
    if (filterImpact   !== 'all' && item.impact   !== filterImpact)   return false
    if (filterDecision !== 'all' && (item.decision ?? 'pending') !== filterDecision) return false
    if (filterRuleType !== 'all') {
      const cat = categorizeRule(item.rule_id, item.tags ?? [])
      if (cat.displayCategory !== filterRuleType) return false
    }
    if (filterPage !== 'all' && item.page_name !== filterPage) return false
    return true
  }), [triageItems, searchQuery, filterImpact, filterDecision, filterRuleType, filterPage])

  const sortedItems = useMemo(() => [...filteredItems].sort((a, b) => {
    if (sortBy === 'impact')   return (IMPACT_ORDER[a.impact]  ?? 9) - (IMPACT_ORDER[b.impact]  ?? 9)
    if (sortBy === 'decision') return (a.decision ?? 'pending').localeCompare(b.decision ?? 'pending')
    if (sortBy === 'wcag')     return (a.wcag_sc ?? '').localeCompare(b.wcag_sc ?? '')
    return 0
  }), [filteredItems, sortBy])

  const selectedIndex = sortedItems.findIndex(i => i.id === selectedItem?.id)
  const navigateDrawer = (dir) => {
    const next = sortedItems[selectedIndex + dir]
    if (next) setSelectedItem(next)
  }

  const uniquePages = useMemo(
    () => [...new Set(triageItems.map(i => i.page_name).filter(Boolean))],
    [triageItems]
  )

  const clearFilters = () => {
    setSearchQuery('')
    setFilterImpact('all')
    setFilterDecision('all')
    setFilterRuleType('all')
    setFilterPage('all')
  }

  const toggleExpand = (itemId) => {
    setExpandedId(prev => prev === itemId ? null : itemId)
  }

  if (loadingTriage) return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
      <div className="flex justify-center py-16">
        <Spinner size="md" color="purple" />
      </div>
    </div>
  )

  if (triageError) return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
      <div className="px-5 py-4 text-sm text-red-600 dark:text-red-400">{triageError}</div>
    </div>
  )

  return (
    <>
      <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-gray-200 px-5 py-4 dark:border-gray-700 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-900/30">
              <ClipboardList className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Triage Items</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{sortedItems.length} issues to review</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">Sort:</span>
            { [['impact', 'Impact'], ['decision', 'Decision'], ['wcag', 'WCAG']].map(([v, l]) => (
              <button
                key={v}
                onClick={() => setSortBy(v)}
                className={`rounded border px-2.5 py-1 text-xs font-medium transition-colors ${
                  sortBy === v
                    ? 'border-primary-700 bg-primary-700 text-white dark:border-primary-600 dark:bg-primary-600'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-primary-300 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-primary-400'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 gap-3 border-b border-gray-200 bg-gray-50 px-5 py-3 dark:border-gray-700 dark:bg-gray-700/50 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <TextInput
              icon={Search}
              placeholder="Search issues…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              sizing="sm"
            />
          </div>
          <Select sizing="sm" value={filterImpact} onChange={e => setFilterImpact(e.target.value)}>
            <option value="all">All impacts</option>
            <option value="critical">Critical</option>
            <option value="serious">Serious</option>
            <option value="moderate">Moderate</option>
            <option value="minor">Minor</option>
          </Select>
          <Select sizing="sm" value={filterDecision} onChange={e => setFilterDecision(e.target.value)}>
            <option value="all">All decisions</option>
            <option value="pending">Untriaged</option>
            <option value="confirmed">Confirmed</option>
            <option value="needs_review">Needs review</option>
            <option value="dismissed">Dismissed</option>
          </Select>
          <Select sizing="sm" value={filterRuleType} onChange={e => setFilterRuleType(e.target.value)}>
            <option value="all">All types</option>
            <option value="WCAG">WCAG</option>
            <option value="ARIA">ARIA</option>
            <option value="Color & Contrast">Contrast</option>
            <option value="Best Practice">Best practice</option>
          </Select>
        </div>

        {/* Page chips */}
        {uniquePages.length > 1 && (
          <div className="flex flex-wrap gap-2 border-b border-gray-200 px-5 py-2.5 dark:border-gray-700">
            {['all', ...uniquePages].map(page => (
              <button
                key={page}
                onClick={() => setFilterPage(page)}
                className={`rounded border px-2.5 py-1 text-xs font-medium transition-colors ${
                  filterPage === page
                    ? 'border-primary-700 bg-primary-700 text-white dark:border-primary-600 dark:bg-primary-600'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-primary-300 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-primary-400'
                }`}
              >
                {page === 'all' ? 'All pages' : page}
              </button>
            ))}
          </div>
        )}

        {/* Table */}
        {sortedItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 rounded-full bg-gray-100 p-3 dark:bg-gray-700">
              <ClipboardList className="h-6 w-6 text-gray-400 dark:text-gray-500" />
            </div>
            <p className="text-base font-semibold text-gray-900 dark:text-white">No issues match your filters</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Try adjusting the filters above.</p>
            <Button size="sm" color="light" className="mt-4" onClick={clearFilters}>
              Clear all filters
            </Button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <TableHead className="bg-gray-50 text-xs uppercase dark:bg-gray-700">
                <TableRow>
                  <TableHeadCell className="w-4 px-4 py-3">
                    <span className="sr-only">Expand</span>
                  </TableHeadCell>
                  <TableHeadCell className="px-4 py-3">Severity</TableHeadCell>
                  <TableHeadCell className="min-w-56 px-4 py-3">Finding</TableHeadCell>
                  <TableHeadCell className="min-w-32 px-4 py-3">Page</TableHeadCell>
                  <TableHeadCell className="px-4 py-3">Type</TableHeadCell>
                  <TableHeadCell className="px-4 py-3">Status</TableHeadCell>
                  <TableHeadCell className="px-4 py-3 text-right">Actions</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody className="divide-y divide-gray-200 dark:divide-gray-700">
                {sortedItems.map(item => {
                  const enrichment = RULE_ENRICHMENTS[item.rule_id] ?? {}
                  const isExpanded = expandedId === item.id
                  return (
                    <React.Fragment key={item.id}>
                      {/* Header Row */}
                      <TableRow
                        id={`triage-header-${item.id}`}
                        onClick={() => toggleExpand(item.id)}
                        className="cursor-pointer border-b bg-white transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700/50"
                        aria-controls={`triage-body-${item.id}`}
                      >
                        <TableCell className="w-4 px-4 py-3">
                          <ChevronDown className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </TableCell>
                        <TableCell className="px-4 py-3">
                          <Badge color={IMPACT_COLOR[item.impact] ?? 'gray'} size="xs">
                            {item.impact ?? '—'}
                          </Badge>
                        </TableCell>
                        <TableCell className="px-4 py-3">
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                {item.rule_id}
                              </code>
                              {item.wcag_sc && (
                                <span className="rounded bg-primary-50 px-1.5 py-0.5 text-xs text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                                  SC {item.wcag_sc}
                                </span>
                              )}
                            </div>
                            <p className="line-clamp-2 text-sm font-medium text-gray-900 dark:text-white">
                              {enrichment.auditorTitle ?? item.rule_id}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell className="px-4 py-3">
                          <span className="block truncate text-sm text-gray-700 dark:text-gray-300" title={item.page_name}>
                            {item.page_name ?? '—'}
                          </span>
                          {item.selector && (
                            <span className="block truncate font-mono text-xs text-gray-500 dark:text-gray-400" title={item.selector}>
                              {item.selector}
                            </span>
                          )}
                        </TableCell>
                        <TableCell className="px-4 py-3">
                          <Badge color={ISSUE_TYPE_COLOR[item.issue_type] ?? 'gray'} size="xs">
                            {item.issue_type ?? 'failure'}
                          </Badge>
                        </TableCell>
                        <TableCell className="px-4 py-3">
                          <DecisionBadge decision={item.decision} />
                        </TableCell>
                        <TableCell className="px-4 py-3">
                          <div className="flex items-center justify-end gap-1" onClick={e => e.stopPropagation()}>
                            <Button
                              size="xs"
                              color="ghost"
                              aria-label="Confirm"
                              onClick={() => handleInlineDecision(item, 'confirmed')}
                              className={item.decision === 'confirmed' ? 'text-green-600 dark:text-green-400' : 'text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400'}
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button
                              size="xs"
                              color="ghost"
                              aria-label="Needs review"
                              onClick={() => handleInlineDecision(item, 'needs_review')}
                              className={item.decision === 'needs_review' ? 'text-amber-600 dark:text-amber-400' : 'text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400'}
                            >
                              <HelpCircle className="h-4 w-4" />
                            </Button>
                            <Button
                              size="xs"
                              color="ghost"
                              aria-label="Dismiss"
                              onClick={() => handleInlineDecision(item, 'dismissed')}
                              className={item.decision === 'dismissed' ? 'text-gray-400 dark:text-gray-500' : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'}
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                            <Button
                              size="xs"
                              color="primary"
                              outline
                              onClick={() => { setSelectedItem(item); setDrawerOpen(true) }}
                            >
                              Detail
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>

                      {/* Expanded Row */}
                      <TableRow
                        id={`triage-body-${item.id}`}
                        className={`${isExpanded ? '' : 'hidden'} border-b dark:border-gray-700`}
                        aria-labelledby={`triage-header-${item.id}`}
                      >
                        <TableCell className="border-b p-4 dark:border-gray-700" colSpan={7}>
                          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                            {/* Details */}
                            <div className="lg:col-span-2 space-y-4">
                              <div>
                                <h6 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                                  Issue Description
                                </h6>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {enrichment.auditorDescription ?? 'No description available.'}
                                </p>
                              </div>
                              {item.nodes && item.nodes.length > 0 && (
                                <div>
                                  <h6 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                                    Affected Elements ({item.nodes.length})
                                  </h6>
                                  <div className="space-y-1">
                                    {item.nodes.slice(0, 3).map((node, idx) => (
                                      <code key={idx} className="block rounded bg-gray-100 px-2 py-1 font-mono text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                        {node.target?.join(' > ') || node.html?.substring(0, 80) || 'Unknown element'}
                                      </code>
                                    ))}
                                    {item.nodes.length > 3 && (
                                      <p className="text-xs text-gray-500 dark:text-gray-400">
                                        +{item.nodes.length - 3} more elements
                                      </p>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Meta info */}
                            <div className="space-y-3">
                              <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
                                <h6 className="mb-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                                  Category
                                </h6>
                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                  {(() => {
                                    const cat = categorizeRule(item.rule_id, item.tags ?? [])
                                    return cat.displayCategory
                                  })()}
                                </div>
                              </div>
                              {item.wcag_sc && (
                                <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
                                  <h6 className="mb-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                                    WCAG Success Criteria
                                  </h6>
                                  <div className="text-sm text-gray-700 dark:text-gray-300">
                                    {item.wcag_sc}
                                  </div>
                                </div>
                              )}
                              <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
                                <h6 className="mb-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                                  First Seen
                                </h6>
                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                  {item.created_at ? new Date(item.created_at).toLocaleDateString() : '—'}
                                </div>
                              </div>
                              <div className="flex gap-2 pt-2">
                                <Button size="xs" color="primary" onClick={() => { setSelectedItem(item); setDrawerOpen(true) }}>
                                  Open Full Detail
                                </Button>
                              </div>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </div>

      <IssueDetailDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        item={selectedItem}
        onPrev={() => navigateDrawer(-1)}
        onNext={() => navigateDrawer(1)}
        hasPrev={selectedIndex > 0}
        hasNext={selectedIndex < sortedItems.length - 1}
        onDecision={handleInlineDecision}
      />
    </>
  )
}
