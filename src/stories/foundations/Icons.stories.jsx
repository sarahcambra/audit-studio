import React from 'react';
import {
  Home, User, Settings, Search, Bell, Menu, X, Check, ChevronDown, ChevronRight,
  CheckCircle, AlertCircle, AlertTriangle, Info, HelpCircle, XCircle, Loader,
  Plus, Edit, Trash2, Save, Download, Upload, Copy, Share
} from 'lucide-react';

const ICON_CATEGORIES = {
  interface: {
    name: 'Interface',
    description: 'Common UI actions and states',
    icons: [
      { Component: Home, name: 'Home', usage: 'Dashboard, home navigation' },
      { Component: User, name: 'User', usage: 'Profile, account' },
      { Component: Settings, name: 'Settings', usage: 'Configuration, preferences' },
      { Component: Search, name: 'Search', usage: 'Find, lookup' },
      { Component: Bell, name: 'Bell', usage: 'Notifications, alerts' },
      { Component: Menu, name: 'Menu', usage: 'Navigation toggle' },
      { Component: X, name: 'X', usage: 'Close, dismiss' },
      { Component: Check, name: 'Check', usage: 'Confirm, complete' },
      { Component: ChevronDown, name: 'ChevronDown', usage: 'Expand, dropdown' },
      { Component: ChevronRight, name: 'ChevronRight', usage: 'Next, navigate' },
    ],
  },
  feedback: {
    name: 'Feedback',
    description: 'Status and alert indicators',
    icons: [
      { Component: CheckCircle, name: 'CheckCircle', usage: 'Success confirmation' },
      { Component: AlertCircle, name: 'AlertCircle', usage: 'Warning attention' },
      { Component: AlertTriangle, name: 'AlertTriangle', usage: 'Caution, error' },
      { Component: Info, name: 'Info', usage: 'Information, help' },
      { Component: HelpCircle, name: 'HelpCircle', usage: 'Help, support' },
      { Component: XCircle, name: 'XCircle', usage: 'Error, failure' },
      { Component: Loader, name: 'Loader', usage: 'Loading, processing' },
    ],
  },
  actions: {
    name: 'Actions',
    description: 'User actions and operations',
    icons: [
      { Component: Plus, name: 'Plus', usage: 'Add, create' },
      { Component: Edit, name: 'Edit', usage: 'Modify, edit' },
      { Component: Trash2, name: 'Trash2', usage: 'Delete, remove' },
      { Component: Save, name: 'Save', usage: 'Save, store' },
      { Component: Download, name: 'Download', usage: 'Download, export' },
      { Component: Upload, name: 'Upload', usage: 'Upload, import' },
      { Component: Copy, name: 'Copy', usage: 'Duplicate, copy' },
      { Component: Share, name: 'Share', usage: 'Share, send' },
    ],
  },
};

export default {
  title: 'Foundations/Icons',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Iconography system using Lucide React',
      },
    },
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Icons</h1>
        <p className="text-gray-600">
          We use Lucide React for icons. All icons are 24x24px by default.
        </p>
        <code className="text-sm text-gray-500 mt-2 block">
          import {'{'} IconName {'}'} from 'lucide-react'
        </code>
      </div>

      {Object.entries(ICON_CATEGORIES).map(([key, category]) => (
        <section key={key} className="mb-12">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h2>
            <p className="text-gray-600">{category.description}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {category.icons.map((icon) => {
              const IconComponent = icon.Component;
              return (
                <div
                  key={icon.name}
                  className="p-4 bg-white border border-gray-200 rounded-lg hover:border-primary-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-6 h-6 text-gray-700" />
                    <div>
                      <p className="font-mono text-sm text-gray-900">{icon.name}</p>
                      <p className="text-xs text-gray-400">{icon.usage}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Icon Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Sizing</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Small: 16px (inline with text)</li>
              <li>Default: 24px (buttons, navigation)</li>
              <li>Large: 32px (feature highlights)</li>
              <li>XL: 48px (empty states)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Usage</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Always use with label or tooltip</li>
              <li>Icon-only buttons need aria-label</li>
              <li>Match icon color to text color</li>
              <li>Don't rotate icons unnecessarily</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Interface = {
  name: 'Interface',
  render: () => (
    <div className="p-8 max-w-6xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Interface Icons</h2>
        <p className="text-gray-600">{ICON_CATEGORIES.interface.description}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {ICON_CATEGORIES.interface.icons.map((icon) => {
          const IconComponent = icon.Component;
          return (
            <div key={icon.name} className="p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <IconComponent className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-mono text-sm text-gray-900">{icon.name}</p>
                  <p className="text-xs text-gray-400">{icon.usage}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
};

export const Feedback = {
  name: 'Feedback',
  render: () => (
    <div className="p-8 max-w-6xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Feedback Icons</h2>
        <p className="text-gray-600">{ICON_CATEGORIES.feedback.description}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {ICON_CATEGORIES.feedback.icons.map((icon) => {
          const IconComponent = icon.Component;
          return (
            <div key={icon.name} className="p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <IconComponent className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-mono text-sm text-gray-900">{icon.name}</p>
                  <p className="text-xs text-gray-400">{icon.usage}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
};

export const Actions = {
  name: 'Actions',
  render: () => (
    <div className="p-8 max-w-6xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Action Icons</h2>
        <p className="text-gray-600">{ICON_CATEGORIES.actions.description}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {ICON_CATEGORIES.actions.icons.map((icon) => {
          const IconComponent = icon.Component;
          return (
            <div key={icon.name} className="p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <IconComponent className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-mono text-sm text-gray-900">{icon.name}</p>
                  <p className="text-xs text-gray-400">{icon.usage}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
};
