import { Badge, ImpactBadge, WcagBadge } from '../../shared/ui'
import { Status, AuditStatus } from '../../shared/ui/Status'
import { DecisionBadge } from '../../shared/ui/badges/DecisionBadge'
import { ManualCheckBadge } from '../../shared/ui/badges/ManualCheckBadge'
import { IssuesBadge } from '../../shared/ui/IssuesBadge'

export default {
  title: 'Components/Feedback/Semantic Badges',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Semantic badge components that map values to colors automatically.',
      },
    },
  },
}

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Semantic Badges</h1>
        <p className="text-gray-600">
          Pre-configured badge components that automatically map values to appropriate colors.
        </p>
      </div>

      <div className="space-y-8">
        {/* ImpactBadge - category labels */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">ImpactBadge</h2>
          <p className="text-sm text-gray-500 mb-2">Used in triage tables to show severity</p>
          <div className="flex flex-wrap gap-2">
            <ImpactBadge impact="critical" />
            <ImpactBadge impact="serious" />
            <ImpactBadge impact="moderate" />
            <ImpactBadge impact="minor" />
          </div>
        </section>

        {/* WcagBadge - category labels */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">WcagBadge</h2>
          <p className="text-sm text-gray-500 mb-2">Shows WCAG version and conformance level</p>
          <div className="flex flex-wrap gap-2">
            <WcagBadge version="2.2" level="AA" />
            <WcagBadge version="2.1" level="AA" />
            <WcagBadge version="2.2" level="AAA" />
          </div>
        </section>

        {/* DecisionBadge - category labels */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">DecisionBadge</h2>
          <p className="text-sm text-gray-500 mb-2">Shows triage decision status</p>
          <div className="flex flex-wrap gap-2">
            <DecisionBadge decision="confirmed" />
            <DecisionBadge decision="needs_review" />
            <DecisionBadge decision="dismissed" />
            <DecisionBadge decision="not-failure" />
          </div>
        </section>

        {/* ManualCheckBadge - category labels */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">ManualCheckBadge</h2>
          <p className="text-sm text-gray-500 mb-2">Shows manual check status</p>
          <div className="flex flex-wrap gap-2">
            <ManualCheckBadge status="pass" />
            <ManualCheckBadge status="fail" />
            <ManualCheckBadge status="untriaged" />
          </div>
        </section>

        {/* Status (with dot) vs Badge distinction */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Status Component (with dot)</h2>
          <p className="text-sm text-gray-500 mb-2">
            Use <code>Status</code> for live states and activity. Shows a colored dot.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <AuditStatus status="active" />
            <AuditStatus status="complete" />
            <AuditStatus status="draft" />
            <AuditStatus status="archived" />
          </div>
        </section>

        {/* IssuesBadge */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">IssuesBadge</h2>
          <p className="text-sm text-gray-500 mb-2">Shows issue counts or scan CTA</p>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-500 mb-1">Not Scanned</p>
              <IssuesBadge audit={{ status: 'draft' }} onScanClick={() => alert('Start scan!')} />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">All Clear</p>
              <IssuesBadge audit={{ status: 'complete', critical_count: 0, serious_count: 0, moderate_count: 0, minor_count: 0, last_scanned_at: new Date() }} />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">With Issues</p>
              <IssuesBadge audit={{ status: 'complete', critical_count: 2, serious_count: 5, moderate_count: 3, minor_count: 8, last_scanned_at: new Date() }} />
            </div>
          </div>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">When to use what?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Badge (no dot)</h3>
            <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
              <li>ImpactBadge, WcagBadge, DecisionBadge</li>
              <li>Categories and types</li>
              <li>Labels that don't change often</li>
            </ul>
          </div>
          <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">Status (with dot)</h3>
            <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
              <li>AuditStatus, AuditStatus</li>
              <li>Live states and activity</li>
              <li>Things that change during a session</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  ),
}

export const Playground = {
  name: 'Playground',
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Base Badge (color: blue)</h3>
        <Badge color="blue">Label</Badge>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">ImpactBadge</h3>
        <ImpactBadge impact="critical" />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">WcagBadge</h3>
        <WcagBadge version="2.2" level="AA" />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">DecisionBadge</h3>
        <DecisionBadge decision="confirmed" />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">AuditStatus (with dot)</h3>
        <AuditStatus status="active" />
      </div>
    </div>
  ),
}
