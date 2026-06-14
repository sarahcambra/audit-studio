import React from 'react';
import { StatCard } from '../../shared/ui/StatCard';
import {
  Users, DollarSign, ShoppingCart, Activity, TrendingUp, AlertCircle,
  BarChart3, CheckCircle, Clock, FileText, Globe, Home, Mail, Star
} from 'lucide-react';

const STAT_COLORS = [
  { name: 'Primary', color: 'primary', icon: Users },
  { name: 'Secondary', color: 'secondary', icon: TrendingUp },
  { name: 'Success', color: 'success', icon: DollarSign },
  { name: 'Warning', color: 'warning', icon: ShoppingCart },
  { name: 'Danger', color: 'danger', icon: AlertCircle },
  { name: 'Info', color: 'info', icon: Activity },
];

const TREND_DIRECTIONS = [
  { direction: 'up', label: 'Positive', example: '+12%' },
  { direction: 'down', label: 'Negative', example: '-5%' },
  { direction: 'neutral', label: 'Neutral', example: '0%' },
];

// Icon options for the playground
const ICON_OPTIONS = {
  Users: Users,
  DollarSign: DollarSign,
  ShoppingCart: ShoppingCart,
  Activity: Activity,
  TrendingUp: TrendingUp,
  AlertCircle: AlertCircle,
  BarChart3: BarChart3,
  CheckCircle: CheckCircle,
  Clock: Clock,
  FileText: FileText,
  Globe: Globe,
  Home: Home,
  Mail: Mail,
  Star: Star,
};

export default {
  title: 'Components/Data Display/StatCard',
  component: StatCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'StatCard displays key metrics with optional trend indicators. Used for dashboard metrics and KPIs.',
      },
    },
  },
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(ICON_OPTIONS),
      description: 'Icon component name',
      table: { category: 'Content' },
    },
    label: {
      control: 'text',
      description: 'Metric label displayed above value',
      table: { category: 'Content' },
    },
    value: {
      control: 'text',
      description: 'Main metric value displayed',
      table: { category: 'Content' },
    },
    trend: {
      control: 'text',
      description: 'Trend text (e.g., "+7%"). Leave empty to hide trend.',
      table: { category: 'Trend' },
    },
    trendDirection: {
      control: 'select',
      options: ['up', 'down', 'neutral'],
      description: 'Trend direction for color coding',
      table: { category: 'Trend' },
    },
    trendLabel: {
      control: 'text',
      description: 'Additional trend context. Leave empty to hide.',
      table: { category: 'Trend' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
      description: 'Icon background color theme',
      table: { category: 'Appearance' },
    },
  },
  args: {
    icon: 'Users',
    label: 'Total Users',
    value: '12,345',
    trend: '+12%',
    trendDirection: 'up',
    trendLabel: 'vs last month',
    color: 'primary',
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">StatCard</h1>
        <p className="text-gray-600">
          StatCard displays key metrics with optional trend indicators. Used for dashboard metrics and KPIs.
        </p>
      </div>

      {/* Variants */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {STAT_COLORS.map((c) => (
            <StatCard
              key={c.name}
              icon={c.icon}
              label={`${c.name} Metric`}
              value="1,234"
              trend="+12%"
              trendDirection="up"
              color={c.color}
            />
          ))}
        </div>
      </section>

      {/* Trend Directions */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Trend Directions</h2>
        <div className="grid grid-cols-3 gap-4">
          {TREND_DIRECTIONS.map((t) => (
            <StatCard
              key={t.direction}
              icon={TrendingUp}
              label={t.label}
              value="1,234"
              trend={t.example}
              trendDirection={t.direction}
              trendLabel="vs last month"
              color="primary"
            />
          ))}
        </div>
      </section>

      {/* Without Trend */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Without Trend</h2>
        <div className="max-w-sm">
          <StatCard
            icon={Activity}
            label="Current Status"
            value="Active"
            color="info"
          />
        </div>
      </section>

      {/* Do/Don't */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Guidelines</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-green-700 mb-2">✓ Do</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Use consistent colors for metric types</li>
              <li>Keep labels short and descriptive</li>
              <li>Include trend when context matters</li>
              <li>Use appropriate icons</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-red-700 mb-2">✗ Don't</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Use more than 6 cards in a row</li>
              <li>Mix different color schemes</li>
              <li>Include long trend labels</li>
              <li>Use without icons</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Props Table */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Props</h2>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 font-medium text-gray-700">Prop</th>
              <th className="text-left py-2 font-medium text-gray-700">Type</th>
              <th className="text-left py-2 font-medium text-gray-700">Default</th>
              <th className="text-left py-2 font-medium text-gray-700">Description</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-b border-gray-100">
              <td className="py-2 font-mono">icon</td>
              <td>LucideIcon</td>
              <td>required</td>
              <td>Icon component from lucide-react</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 font-mono">label</td>
              <td>string</td>
              <td>required</td>
              <td>Metric label displayed above value</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 font-mono">value</td>
              <td>string</td>
              <td>required</td>
              <td>Main metric value displayed</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 font-mono">trend</td>
              <td>string</td>
              <td>-</td>
              <td>Trend value (e.g., "+12%")</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 font-mono">trendDirection</td>
              <td>'up' | 'down' | 'neutral'</td>
              <td>'neutral'</td>
              <td>Direction for trend color</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 font-mono">trendLabel</td>
              <td>string</td>
              <td>-</td>
              <td>Additional context after trend</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">color</td>
              <td>string</td>
              <td>'primary'</td>
              <td>Color theme for icon background</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  ),
};

// Playground with native Storybook controls
export const Playground = {
  name: 'Playground',
  render: (args) => {
    const IconComponent = ICON_OPTIONS[args.icon] || Users;
    return (
      <div className="flex items-center justify-center p-20 min-h-[400px] bg-gray-50">
        <div className="w-full max-w-xs">
          <StatCard
            icon={IconComponent}
            label={args.label}
            value={args.value}
            color={args.color}
            {...(args.trend ? {
              trend: args.trend,
              trendDirection: args.trendDirection,
              ...(args.trendLabel && { trendLabel: args.trendLabel }),
            } : {})}
          />
        </div>
      </div>
    );
  },
};
