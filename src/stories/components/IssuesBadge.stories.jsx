import React from 'react';
import { IssuesBadge } from '../../shared/ui/IssuesBadge';

export default {
  title: 'Components/Data Display/IssuesBadge',
  component: IssuesBadge,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Displays issue counts with severity breakdown or a call-to-action to scan.',
      },
    },
  },
  argTypes: {
    critical: { control: 'number', description: 'Critical issue count' },
    serious: { control: 'number', description: 'Serious issue count' },
    moderate: { control: 'number', description: 'Moderate issue count' },
    minor: { control: 'number', description: 'Minor issue count' },
    isScanned: { control: 'boolean', description: 'Whether the audit has been scanned' },
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">IssuesBadge</h1>
        <p className="text-gray-600">
          Displays issue counts with severity breakdown or a call-to-action to scan.
        </p>
      </div>

      <section className="mb-12 space-y-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Not Scanned</h2>
          <div className="border border-gray-200 rounded-lg p-4">
            <IssuesBadge audit={{ status: 'draft' }} onScanClick={() => alert('Start scan!')} />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">All Clear (0 Issues)</h2>
          <div className="border border-gray-200 rounded-lg p-4">
            <IssuesBadge audit={{ status: 'complete', critical_count: 0, serious_count: 0, moderate_count: 0, minor_count: 0, last_scanned_at: new Date().toISOString() }} />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Single Severity</h2>
          <div className="border border-gray-200 rounded-lg p-4">
            <IssuesBadge audit={{ status: 'active', critical_count: 0, serious_count: 5, moderate_count: 0, minor_count: 0, last_scanned_at: new Date().toISOString() }} />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Mixed Severities</h2>
          <div className="border border-gray-200 rounded-lg p-4">
            <IssuesBadge audit={{ status: 'active', critical_count: 2, serious_count: 5, moderate_count: 12, minor_count: 3, last_scanned_at: new Date().toISOString() }} />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Guidelines</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-900 mb-2">Do</h3>
            <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
              <li>Show "Scan now" for unscanned audits</li>
              <li>Display severity counts clearly</li>
              <li>Stack multiple severities vertically</li>
            </ul>
          </div>
          <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
            <h3 className="font-medium text-red-900 mb-2">Don't</h3>
            <ul className="text-sm text-red-800 space-y-1 list-disc list-inside">
              <li>Show zero counts for all severities</li>
              <li>Hide the scan CTA</li>
              <li>Use for non-issue data</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  ),
};

export const Playground = {
  name: 'Playground',
  argTypes: {
    critical: { control: { type: 'number', min: 0, max: 50 } },
    serious: { control: { type: 'number', min: 0, max: 50 } },
    moderate: { control: { type: 'number', min: 0, max: 50 } },
    minor: { control: { type: 'number', min: 0, max: 50 } },
    isScanned: { control: 'boolean' },
  },
  args: {
    critical: 2,
    serious: 5,
    moderate: 8,
    minor: 3,
    isScanned: true,
  },
  render: (args) => {
    const audit = args.isScanned
      ? {
          status: 'active',
          critical_count: args.critical,
          serious_count: args.serious,
          moderate_count: args.moderate,
          minor_count: args.minor,
          last_scanned_at: new Date().toISOString(),
        }
      : { status: 'draft' };

    return (
      <div className="p-8">
        <IssuesBadge audit={audit} onScanClick={() => alert('Start scan!')} />
      </div>
    );
  },
};
