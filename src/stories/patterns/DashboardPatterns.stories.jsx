import React from 'react';
import { StatCard } from '../../shared/ui/StatCard';
import { PipelineBar } from '../../shared/ui/PipelineBar';
import { PageHeader } from '../../shared/ui/PageHeader';
import { Button } from 'flowbite-react';
import { Users, AlertTriangle, CheckCircle, Clock, Plus, Download } from 'lucide-react';

export default {
  title: 'Patterns/Dashboards',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Common dashboard patterns for displaying metrics and status.',
      },
    },
  },
};

// Stats Overview Dashboard
export const StatsOverview = {
  name: 'Stats Overview',
  render: () => (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        subtitle="Overview of your accessibility audits"
        actions={(
          <>
            <Button color="gray" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button color="primary" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Audit
            </Button>
          </>
        )}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Users}
          label="Total Audits"
          value="24"
          trend="+3"
          trendDirection="up"
          trendLabel="this month"
          color="primary"
        />
        <StatCard
          icon={CheckCircle}
          label="Completed"
          value="18"
          trend="+5"
          trendDirection="up"
          color="success"
        />
        <StatCard
          icon={Clock}
          label="In Progress"
          value="4"
          color="warning"
        />
        <StatCard
          icon={AlertTriangle}
          label="Critical Issues"
          value="12"
          trend="-4"
          trendDirection="up"
          color="danger"
        />
      </div>
    </div>
  ),
};

// Pipeline Status Dashboard
export const PipelineStatus = {
  name: 'Pipeline Status',
  render: () => (
    <div className="max-w-3xl space-y-6">
      <h3 className="text-lg font-semibold">Active Audits</h3>

      <div className="space-y-4">
        {[
          { name: 'Homepage Audit', stage: 1, started: '2 days ago' },
          { name: 'Product Checkout', stage: 2, started: '5 days ago' },
          { name: 'User Dashboard', stage: 0, started: '1 day ago' },
          { name: 'Mobile App', stage: 3, started: '1 week ago' },
        ].map((audit) => (
          <div
            key={audit.name}
            className="bg-white p-4 rounded-lg border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-medium text-gray-900">{audit.name}</h4>
                <p className="text-sm text-gray-500">Started {audit.started}</p>
              </div>
              <Button size="xs" color="light">
                View
              </Button>
            </div>
            <PipelineBar stage={audit.stage} />
          </div>
        ))}
      </div>
    </div>
  ),
};

// KPI Cards with Trends
export const KPICards = {
  name: 'KPI Cards',
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg p-6 text-white">
        <p className="text-primary-100 text-sm font-medium uppercase tracking-wide">
          Total Scans
        </p>
        <p className="text-3xl font-bold mt-2">1,234</p>
        <p className="text-primary-100 text-sm mt-1">+12% from last month</p>
      </div>

      <div className="bg-gradient-to-br from-success-500 to-success-700 rounded-lg p-6 text-white">
        <p className="text-success-100 text-sm font-medium uppercase tracking-wide">
          Issues Fixed
        </p>
        <p className="text-3xl font-bold mt-2">856</p>
        <p className="text-success-100 text-sm mt-1">+23% from last month</p>
      </div>

      <div className="bg-gradient-to-br from-warning-500 to-warning-700 rounded-lg p-6 text-white">
        <p className="text-warning-100 text-sm font-medium uppercase tracking-wide">
          Pending Review
        </p>
        <p className="text-3xl font-bold mt-2">42</p>
        <p className="text-warning-100 text-sm mt-1">5 urgent</p>
      </div>
    </div>
  ),
};

// Activity Feed Pattern
export const ActivityFeed = {
  name: 'Activity Feed',
  render: () => (
    <div className="max-w-xl">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {[
          { action: 'Scan completed', item: 'Homepage Audit', time: '5 min ago', icon: CheckCircle, color: 'text-success-500' },
          { action: 'New issue found', item: 'Product Page', time: '1 hour ago', icon: AlertTriangle, color: 'text-warning-500' },
          { action: 'Audit created', item: 'Mobile App', time: '3 hours ago', icon: Plus, color: 'text-primary-500' },
          { action: 'Triage completed', item: 'User Dashboard', time: '1 day ago', icon: Clock, color: 'text-gray-500' },
        ].map((activity, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={`mt-0.5 ${activity.color}`}>
              <activity.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                <span className="font-medium">{activity.action}</span>
                {' '}on{' '}
                <span className="text-primary-600">{activity.item}</span>
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
