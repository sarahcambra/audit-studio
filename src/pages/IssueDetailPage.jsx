import { useState, useEffect, useMemo, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Tabs, Button } from 'flowbite-react'
import {
  Layers, Wrench, History, MessageSquare, Code,
  CheckCircle2, XCircle,
  ExternalLink, ImageOff, Target, BookOpen,
  FileText,
} from 'lucide-react'
import { getAudit } from '@/lib/db/audits'
import { getTriageItems, getTriageItemById, getScanResultsWithViolations, updateTriageItem } from '@/lib/db/triage'
import { RULE_ENRICHMENTS } from '@/lib/ruleEnrichments'
import { WCAG_REFERENCES } from '@/lib/wcagReferences'
import IssueHeader from '@/features/issue/components/IssueHeader'
import IssueSidebar from '@/features/issue/components/IssueSidebar'
import { ActivityFeed, CodeSnippet, CopyButton, EmptyState, Loading, JsonView, SectionHeader } from '@shared/ui'

const IMPACT_DOT = {
  critical: 'bg-red-500',
  serious: 'bg-orange-500',
  moderate: 'bg-amber-500',
  minor: 'bg-blue-500',
}

/**
 * IssueDetailPage — full-page view for a single triaged issue.
 * Route: /audits/:auditId/issues/:issueId
 */
export default function IssueDetailPage() {
  const { auditId, issueId } = useParams()
  const navigate = useNavigate()

  const [audit, setAudit] = useState(null)
  const [item, setItem] = useState(null)
  const [scanData, setScanData] = useState(null)
  const [relatedIssues, setRelatedIssues] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [savingDecision, setSavingDecision] = useState(false)
  const [scanError, setScanError] = useState(null)

  /* ── Data fetching ── */
  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    setScanError(null)

    async function load() {
      try {
        // Fetch audit and triage item in parallel
        const [auditRes, itemRes] = await Promise.all([
          getAudit(auditId),
          getTriageItemById(issueId),
        ])

        if (cancelled) return

        if (auditRes.error) {
          setError('Could not load audit.')
          setLoading(false)
          return
        }
        if (itemRes.error || !itemRes.data) {
          setError('Issue not found.')
          setLoading(false)
          return
        }

        const auditData = auditRes.data
        const itemData = itemRes.data

        // Merge enrichment
        const enrichment = RULE_ENRICHMENTS[itemData.rule_id] || {}
        const mergedItem = { ...itemData, enrichment }

        setAudit(auditData)
        setItem(mergedItem)

        // Fetch scan results and related issues in parallel
        const promises = []

        if (itemData.job_id) {
          promises.push(getScanResultsWithViolations(itemData.job_id))
        } else {
          promises.push(Promise.resolve({ data: null }))
        }

        promises.push(getTriageItems(auditId))

        const [scanRes, relatedRes] = await Promise.all(promises)

        if (cancelled) return

        // Parse scan data
        if (scanRes.data) {
          const grouped = scanRes.data.grouped_violations || []
          const violation = grouped.find(v => v.groupId === itemData.group_id)
          if (violation) {
            setScanData(violation)
          } else if (itemData.group_id?.startsWith('custom-')) {
            const customChecks = scanRes.data.custom_checks_json || []
            const custom = customChecks.find(c => c.id === itemData.group_id)
            if (custom) {
              setScanData({
                groupId: custom.id,
                ruleId: custom.ruleId,
                landmark: custom.landmark || 'page',
                issueType: custom.issueType || 'failure',
                impact: custom.impact || 'serious',
                isCustomCheck: true,
                nodes: custom.nodes || [],
                nodeCount: (custom.nodes || []).length,
                ...custom,
              })
            }
          }
        } else if (scanRes.error) {
          setScanError('Could not load scan details for this issue.')
        }

        // Related issues: same page, different id
        if (relatedRes.data) {
          const related = relatedRes.data
            .filter(r => r.id !== issueId && r.page_name === itemData.page_name)
            .slice(0, 5)
            .map(r => {
              const enr = RULE_ENRICHMENTS[r.rule_id] || {}
              return {
                id: r.id,
                title: enr.auditorTitle || r.rule_id,
                impact: r.impact || 'moderate',
                sc: r.wcag_sc || '—',
              }
            })
          setRelatedIssues(related)
        }

        setLoading(false)
      } catch {
        if (!cancelled) {
          setError('Failed to load issue details.')
          setLoading(false)
        }
      }
    }

    load()
    return () => { cancelled = true }
  }, [auditId, issueId])

  /* ── Decision handler ── */
  const handleDecision = useCallback(async (decision) => {
    if (!item) return
    setSavingDecision(true)
    const { error: updError } = await updateTriageItem(item.id, { decision })
    if (!updError) {
      setItem(prev => ({ ...prev, decision }))
    }
    setSavingDecision(false)
  }, [item])

  /* ── Activity items (synthetic audit trail) ── */
  const activityItems = useMemo(() => {
    if (!item) return []
    const items = []

    items.push({
      text: (
        <span>
          Issue detected by <strong>axe-core</strong> scan
          {item.page_name && <> on <strong>{item.page_name}</strong></>}
        </span>
      ),
      time: new Date(item.created_at).toLocaleString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
      }),
      variant: 'purple',
    })

    if (item.decision) {
      const decisionLabel = {
        confirmed: 'Confirmed Failure',
        dismissed: 'Dismissed',
        'needs_review': 'Needs Review',
        'not-failure': 'Not a Failure',
        'manual-check': 'Needs Manual Check',
      }[item.decision] || item.decision

      items.push({
        text: (
          <span>
            Auditor triaged issue as <strong>{decisionLabel}</strong>
          </span>
        ),
        time: new Date(item.updated_at).toLocaleString('en-GB', {
          day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
        }),
        variant: item.decision === 'confirmed' ? 'amber' : item.decision === 'dismissed' ? 'green' : 'gray',
      })
    }

    if (item.client_fix_override || item.auditor_notes) {
      items.push({
        text: <span>Auditor updated remediation guidance</span>,
        time: new Date(item.updated_at).toLocaleString('en-GB', {
          day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
        }),
        variant: 'gray',
      })
    }

    if (item.screenshot_url) {
      items.push({
        text: <span>Evidence screenshot captured</span>,
        time: new Date(item.created_at).toLocaleString('en-GB', {
          day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
        }),
        variant: 'purple',
      })
    }

    return items
  }, [item])

  /* ── Nodes for All Elements tab ── */
  const allNodes = useMemo(() => {
    if (!scanData) return []
    if (scanData.isCustomCheck) {
      return (scanData.nodes || []).map((n, i) => ({
        id: `${scanData.groupId}-${i}`,
        target: n.target || n.selector || '—',
        html: n.html || '',
        impact: n.impact || scanData.impact,
        failureSummary: n.message || '',
        decision: item?.decision || null,
      }))
    }
    return (scanData.nodes || []).map((n, i) => ({
      id: `${scanData.groupId}-${i}`,
      target: Array.isArray(n.target) ? n.target.join(', ') : (n.target || '—'),
      html: n.html || '',
      impact: n.impact || scanData.impact,
      failureSummary: n.failureSummary || '',
      decision: item?.decision || null,
    }))
  }, [scanData, item])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
        <Loading />
      </div>
    )
  }

  if (error || !item) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
        <EmptyState
          title={error || 'Issue not found'}
          description="The issue you're looking for may have been removed or the URL is incorrect."
          action={
            <Button size="sm" color="primary" onClick={() => navigate(`/audits/${auditId}`)}>
              Back to Audit
            </Button>
          }
        />
      </div>
    )
  }

  const enrichment = item.enrichment || {}
  const wcagRef = WCAG_REFERENCES[item.wcag_sc] || null

  return (
    <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 bg-gray-50 dark:bg-gray-950 lg:grid-cols-[1fr_320px]">
      {/* ── Main content ── */}
      <div className="flex flex-col">
        <IssueHeader audit={audit} item={item} />

        <div className="flex-1 px-6 py-5">
          <Tabs
            aria-label="Issue detail tabs"
            variant="underline"
          >
            {/* ── All Elements ── */}
            <Tabs.Item title="All Elements" icon={Layers}>
              <div className="space-y-4 pt-2">
                {/* Scan error banner */}
                {scanError && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/30 dark:bg-red-900/10 dark:text-red-300">
                    {scanError}
                  </div>
                )}

                {/* Stats chips */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/20 dark:text-red-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Failures: {item.node_count || allNodes.length}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                    Unreviewed: 0
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300">
                    Dismissed: 0
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
                    Total: {item.node_count || allNodes.length}
                  </span>
                </div>

                {/* Elements list */}
                {allNodes.length === 0 ? (
                  <EmptyState
                    title="No element data"
                    description="Scan results did not include individual node details for this issue."
                  />
                ) : (
                  <div className="space-y-3">
                    {allNodes.map((node, idx) => (
                      <div
                        key={node.id}
                        className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500">
                                #{idx + 1}
                              </span>
                              <span className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-bold ${
                                node.impact === 'critical' ? 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300' :
                                node.impact === 'serious' ? 'bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300' :
                                node.impact === 'moderate' ? 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300' :
                                'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                              }`}>
                                <span className={`h-1.5 w-1.5 rounded-full ${IMPACT_DOT[node.impact] || 'bg-gray-400'}`} />
                                {node.impact?.charAt(0).toUpperCase() + node.impact?.slice(1)}
                              </span>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                              <Target className="h-3.5 w-3.5 flex-none text-gray-400" />
                              <code className="truncate text-[13px] text-gray-700 dark:text-gray-300">
                                {node.target}
                              </code>
                              <CopyButton text={node.target} />
                            </div>
                            {node.failureSummary && (
                              <p className="mt-2 text-[13px] text-gray-600 dark:text-gray-400">
                                {node.failureSummary}
                              </p>
                            )}
                          </div>
                        </div>
                        {node.html && (
                          <div className="mt-3">
                            <CodeSnippet code={node.html} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Tabs.Item>

            {/* ── Evidence & Fix ── */}
            <Tabs.Item title="Evidence & Fix" icon={Wrench}>
              <div className="space-y-5 pt-2">
                {/* Screenshot + Offending element side by side */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {/* Screenshot */}
                  <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                    <SectionHeader icon={ImageOff} title="Screenshot Evidence" />
                    {item.screenshot_url ? (
                      <img
                        src={item.screenshot_url}
                        alt={`Screenshot showing ${enrichment.auditorTitle || item.rule_id}`}
                        className="mt-3 max-h-80 w-full rounded-lg border border-gray-100 object-contain dark:border-gray-700"
                      />
                    ) : (
                      <EmptyState
                        title="No screenshot"
                        description="A screenshot was not captured for this issue."
                        compact
                      />
                    )}
                  </div>

                  {/* Offending element */}
                  <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                    <SectionHeader icon={Target} title="Offending Element" />
                    <div className="mt-3 space-y-3">
                      {item.selector && (
                        <div>
                          <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                            CSS Selector
                          </p>
                          <div className="flex items-center gap-2">
                            <code className="flex-1 rounded-md bg-gray-50 px-2.5 py-1.5 text-[13px] text-gray-700 dark:bg-gray-900 dark:text-gray-300">
                              {item.selector}
                            </code>
                            <CopyButton text={item.selector} />
                          </div>
                        </div>
                      )}
                      {item.element_snippet && (
                        <div>
                          <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                            Element Snippet
                          </p>
                          <CodeSnippet code={item.element_snippet} />
                        </div>
                      )}
                      {item.html_snippet && (
                        <div>
                          <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                            HTML Snippet
                          </p>
                          <CodeSnippet code={item.html_snippet} />
                        </div>
                      )}
                      {scanData?.nodes?.[0]?.html && !item.element_snippet && !item.html_snippet && (
                        <div>
                          <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                            HTML
                          </p>
                          <CodeSnippet code={scanData.nodes[0].html} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Remediation guidance */}
                <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                  <SectionHeader icon={Wrench} title="How to Fix" />
                  <div className="mt-3 space-y-4">
                    {enrichment.clientFix && (
                      <div className="rounded-lg bg-primary-50 p-3 dark:bg-primary-900/10">
                        <p className="text-sm font-semibold text-primary-800 dark:text-primary-300">
                          Remediation Guidance
                        </p>
                        <p className="mt-1 text-[13px] leading-relaxed text-gray-700 dark:text-gray-300">
                          {enrichment.clientFix}
                        </p>
                      </div>
                    )}

                    {enrichment.whatThisMeans && (
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                          What this means
                        </p>
                        <p className="mt-1 text-[13px] text-gray-700 dark:text-gray-300">
                          {enrichment.whatThisMeans}
                        </p>
                      </div>
                    )}

                    {enrichment.whyItMatters && (
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                          Why it matters
                        </p>
                        <p className="mt-1 text-[13px] text-gray-700 dark:text-gray-300">
                          {enrichment.whyItMatters}
                        </p>
                      </div>
                    )}

                    {!enrichment.clientFix && !enrichment.whatThisMeans && (
                      <EmptyState
                        title="No fix guidance available"
                        description="This rule does not yet have curated remediation guidance. You can add auditor notes below."
                        compact
                      />
                    )}
                  </div>
                </div>

                {/* Before / After */}
                {(enrichment.badExample || enrichment.goodExample) && (
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {enrichment.badExample && (
                      <div className="rounded-xl border border-red-200 bg-red-50/30 p-4 dark:border-red-900/30 dark:bg-red-900/10">
                        <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-red-700 dark:text-red-400">
                          <XCircle className="h-3.5 w-3.5" /> Bad Example
                        </p>
                        <CodeSnippet code={enrichment.badExample} />
                      </div>
                    )}
                    {enrichment.goodExample && (
                      <div className="rounded-xl border border-green-200 bg-green-50/30 p-4 dark:border-green-900/30 dark:bg-green-900/10">
                        <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-green-700 dark:text-green-400">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Good Example
                        </p>
                        <CodeSnippet code={enrichment.goodExample} />
                      </div>
                    )}
                  </div>
                )}

                {/* WCAG References */}
                <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                  <SectionHeader icon={BookOpen} title="WCAG References" />
                  <div className="mt-3 space-y-3">
                    {item.wcag_sc && wcagRef && (
                      <a
                        href={wcagRef.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30"
                      >
                        <BookOpen className="h-4 w-4" />
                        {item.wcag_sc} — {wcagRef.title}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}

                    {enrichment.wcagTechniques?.length > 0 && (
                      <div>
                        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                          Sufficient Techniques
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {enrichment.wcagTechniques.map(t => (
                            <a
                              key={t.id}
                              href={t.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-primary-700 dark:hover:text-primary-400"
                            >
                              {t.id}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {enrichment.wcagFailures?.length > 0 && (
                      <div>
                        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                          Common Failures
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {enrichment.wcagFailures.map(f => (
                            <a
                              key={f.id}
                              href={f.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-700 transition-colors hover:border-red-300 hover:text-red-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-red-700 dark:hover:text-red-400"
                            >
                              {f.id}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {enrichment.ariaPractices && (
                      <div>
                        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">
                          ARIA Authoring Practices
                        </p>
                        <a
                          href={typeof enrichment.ariaPractices === 'string' ? enrichment.ariaPractices : enrichment.ariaPractices?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-primary-700 hover:underline dark:text-primary-400"
                        >
                          {typeof enrichment.ariaPractices === 'string' ? 'ARIA Practices' : enrichment.ariaPractices?.pattern}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Tabs.Item>

            {/* ── Audit Trail ── */}
            <Tabs.Item title="Audit Trail" icon={History}>
              <div className="pt-2">
                {activityItems.length === 0 ? (
                  <EmptyState
                    title="No activity recorded"
                    description="Audit trail events will appear here once scans and triage actions occur."
                  />
                ) : (
                  <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <ActivityFeed items={activityItems} />
                  </div>
                )}
              </div>
            </Tabs.Item>

            {/* ── Comments ── */}
            <Tabs.Item title="Comments" icon={MessageSquare}>
              <div className="space-y-4 pt-2">
                {/* Evidence files */}
                {item.evidence_files && item.evidence_files.length > 0 && (
                  <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                    <SectionHeader icon={ImageOff} title="Evidence Files" />
                    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                      {item.evidence_files.map((file, i) => (
                        <a
                          key={i}
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative block overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
                        >
                          {file.type?.startsWith('image/') ? (
                            <img
                              src={file.url}
                              alt={`Evidence ${i + 1}`}
                              className="h-32 w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-32 items-center justify-center">
                              <FileText className="h-8 w-8 text-gray-400" />
                            </div>
                          )}
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                            <p className="truncate text-[11px] font-medium text-white">{file.name || `Evidence ${i + 1}`}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Comments placeholder */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                  <MessageSquare className="mx-auto h-8 w-8 text-gray-300 dark:text-gray-600" />
                  <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No comments yet</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Comments and threaded discussions will be available in a future update.
                  </p>
                </div>
              </div>
            </Tabs.Item>

            {/* ── Raw Data ── */}
            <Tabs.Item title="Raw Data" icon={Code}>
              <div className="space-y-4 pt-2">
                <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                  <SectionHeader icon={Code} title="Triage Item" />
                  <div className="mt-3 overflow-auto">
                    <JsonView data={item} />
                  </div>
                </div>
                {scanData && (
                  <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                    <SectionHeader icon={Code} title="Scan Group Data" />
                    <div className="mt-3 overflow-auto">
                      <JsonView data={scanData} />
                    </div>
                  </div>
                )}
              </div>
            </Tabs.Item>
          </Tabs>
        </div>
      </div>

      {/* ── Sidebar ── */}
      <aside className="hidden border-l border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 lg:block">
        <IssueSidebar
          item={item}
          audit={audit}
          onDecision={handleDecision}
          relatedIssues={relatedIssues}
        />
        {savingDecision && (
          <div className="border-t border-gray-200 px-5 py-3 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400">Saving decision…</p>
          </div>
        )}
      </aside>
    </div>
  )
}
