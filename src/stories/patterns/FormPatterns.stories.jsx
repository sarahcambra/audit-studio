import React, { useState } from 'react';
import { Button, Label, TextInput, Select, Checkbox, Textarea } from 'flowbite-react';
import { PageHeader } from '../../shared/ui/PageHeader';
import { Save, X } from 'lucide-react';

export default {
  title: 'Patterns/Forms',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Common form patterns and layouts used across the application.',
      },
    },
  },
};

// Simple Form Pattern
export const SimpleForm = {
  name: 'Simple Form',
  render: () => (
    <div className="max-w-xl mx-auto space-y-6">
      <PageHeader
        title="Create Audit"
        subtitle="Set up a new accessibility audit"
      />
      <form className="space-y-4">
        <div>
          <Label htmlFor="audit-name" value="Audit Name *" />
          <TextInput
            id="audit-name"
            placeholder="e.g., Homepage Accessibility Audit"
            required
          />
        </div>
        <div>
          <Label htmlFor="url" value="Website URL *" />
          <TextInput
            id="url"
            type="url"
            placeholder="https://example.com"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="wcag-version" value="WCAG Version" />
            <Select id="wcag-version">
              <option>WCAG 2.1</option>
              <option>WCAG 2.2</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="conformance" value="Conformance Level" />
            <Select id="conformance">
              <option>Level A</option>
              <option>Level AA</option>
              <option>Level AAA</option>
            </Select>
          </div>
        </div>
        <div className="flex gap-2 pt-4">
          <Button color="primary" type="submit">
            <Save className="mr-2 h-4 w-4" />
            Create Audit
          </Button>
          <Button color="gray" type="button">
            <X className="mr-2 h-4 w-4" />
            Cancel
          </Button>
        </div>
      </form>
    </div>
  ),
};

// Multi-step Form Pattern
export const MultiStepForm = {
  name: 'Multi-step Form',
  render: () => {
    const [step, setStep] = useState(1);
    const steps = [
      { number: 1, label: 'Basic Info' },
      { number: 2, label: 'Scope' },
      { number: 3, label: 'Review' },
    ];

    return (
      <div className="max-w-2xl mx-auto">
        {/* Step Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <React.Fragment key={s.number}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= s.number
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {s.number}
                  </div>
                  <span className="mt-2 text-sm text-gray-600">{s.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      step > s.number ? 'bg-primary-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Basic Information</h3>
              <div>
                <Label htmlFor="name" value="Project Name" />
                <TextInput id="name" placeholder="Enter project name" />
              </div>
              <div>
                <Label htmlFor="client" value="Client Name" />
                <TextInput id="client" placeholder="Enter client name" />
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button color="primary" onClick={() => setStep(2)}>
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Define Scope</h3>
              <div>
                <Label htmlFor="pages" value="Pages to Test" />
                <Textarea
                  id="pages"
                  placeholder="Enter URLs, one per line"
                  rows={4}
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="components" />
                <Label htmlFor="components">Include component testing</Label>
              </div>
              <div className="flex justify-between pt-4">
                <Button color="gray" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button color="primary" onClick={() => setStep(3)}>
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Review</h3>
              <div className="bg-gray-50 p-4 rounded space-y-2 text-sm">
                <p><strong>Project:</strong> Sample Project</p>
                <p><strong>Client:</strong> Acme Corp</p>
                <p><strong>Pages:</strong> 5 pages selected</p>
                <p><strong>Components:</strong> Yes</p>
              </div>
              <div className="flex justify-between pt-4">
                <Button color="gray" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button color="success">Create Audit</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  },
};

// Inline Edit Pattern
export const InlineEdit = {
  name: 'Inline Edit',
  render: () => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState('Homepage Accessibility Audit');

    return (
      <div className="max-w-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Audit Details</h3>
          {!isEditing && (
            <Button size="sm" color="gray" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <Label value="Audit Name" />
            {isEditing ? (
              <div className="flex gap-2">
                <TextInput
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="flex-1"
                />
                <Button size="sm" color="success" onClick={() => setIsEditing(false)}>
                  Save
                </Button>
                <Button size="sm" color="gray" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </div>
            ) : (
              <p className="text-gray-900 py-2">{value}</p>
            )}
          </div>

          <div>
            <Label value="Status" />
            <p className="text-gray-900 py-2">Active</p>
          </div>

          <div>
            <Label value="Created" />
            <p className="text-gray-900 py-2">Jan 15, 2024</p>
          </div>
        </div>
      </div>
    );
  },
};

// Search & Filter Pattern
export const SearchAndFilter = {
  name: 'Search & Filter',
  render: () => (
    <div className="max-w-4xl space-y-4">
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-64">
          <Label htmlFor="search" value="Search" />
          <TextInput
            id="search"
            placeholder="Search audits..."
            icon={() => (
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          />
        </div>
        <div>
          <Label htmlFor="filter-status" value="Status" />
          <Select id="filter-status">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Complete</option>
            <option>Draft</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="filter-date" value="Date Range" />
          <Select id="filter-date">
            <option>All Time</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Year</option>
          </Select>
        </div>
        <Button color="primary">Filter</Button>
      </div>
    </div>
  ),
};
