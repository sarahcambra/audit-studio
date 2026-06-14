import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { ConfirmModal, FormModal } from '../../shared/ui/Modal';
import { Label, TextInput, Select } from 'flowbite-react';

const MODAL_SIZES = [
  { name: 'Small (md)', description: 'For confirmations and alerts' },
  { name: 'Large (lg)', description: 'For forms and complex content' },
];

const MODAL_TYPES = [
  { name: 'Confirm', description: 'Delete, archive, or destructive actions' },
  { name: 'Form', description: 'Create, edit, or configure' },
  { name: 'Success', description: 'Completion or success messages' },
  { name: 'Warning', description: 'Important but non-destructive actions' },
];

export default {
  title: 'Components/Overlay/Modal',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Modal dialogs for confirmations, forms, and alerts.',
      },
    },
  },
};

export const Overview = {
  name: 'Overview',
  render: () => (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Modal</h1>
        <p className="text-gray-600">
          Modal dialogs for confirmations, forms, and alerts. Built on Flowbite Modal with consistent styling.
        </p>
      </div>

      {/* Modal Types */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Modal Types</h2>
        <div className="grid grid-cols-2 gap-4">
          {MODAL_TYPES.map((type) => (
            <div key={type.name} className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900">{type.name}</h3>
              <p className="text-sm text-gray-500">{type.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Examples */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Examples</h2>
        <ModalExamples />
      </section>

      {/* Guidelines */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Guidelines</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-green-700 mb-2">✓ Do</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Use clear, action-oriented button labels</li>
              <li>Keep modal content focused</li>
              <li>Provide escape (close button, backdrop click)</li>
              <li>Use appropriate size for content</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-red-700 mb-2">✗ Don't</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Nest modals inside modals</li>
              <li>Use for non-critical confirmations</li>
              <li>Include too much content</li>
              <li>Hide the close button</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  ),
};

function ModalExamples() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [warningOpen, setWarningOpen] = useState(false);

  return (
    <div className="flex flex-wrap gap-4">
      <Button onClick={() => setConfirmOpen(true)} color="failure">
        Open Confirm Modal
      </Button>
      <Button onClick={() => setFormOpen(true)} color="primary">
        Open Form Modal
      </Button>
      <Button onClick={() => setSuccessOpen(true)} color="success">
        Open Success Modal
      </Button>
      <Button onClick={() => setWarningOpen(true)} color="warning">
        Open Warning Modal
      </Button>

      <ConfirmModal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => setConfirmOpen(false)}
        title="Delete Audit"
        message="Are you sure you want to delete this audit? This action cannot be undone."
        confirmLabel="Delete"
        confirmColor="failure"
      />

      <FormModal
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={(e) => { e.preventDefault(); setFormOpen(false); }}
        title="Create New Audit"
        submitLabel="Create"
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Audit Name</Label>
            <TextInput id="name" placeholder="Enter name" />
          </div>
          <div>
            <Label htmlFor="wcag">WCAG Version</Label>
            <Select id="wcag">
              <option>WCAG 2.1</option>
              <option>WCAG 2.2</option>
            </Select>
          </div>
        </div>
      </FormModal>

      <ConfirmModal
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        onConfirm={() => setSuccessOpen(false)}
        title="Mark as Complete"
        message="This will mark the audit as complete."
        confirmLabel="Mark Complete"
        confirmColor="success"
      />

      <ConfirmModal
        open={warningOpen}
        onClose={() => setWarningOpen(false)}
        onConfirm={() => setWarningOpen(false)}
        title="Archive Item"
        message="This will archive the audit. You can restore it later."
        confirmLabel="Archive"
        confirmColor="warning"
      />
    </div>
  );
}

export const Playground = {
  name: 'Playground',
  render: () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('Modal Title');
    const [message, setMessage] = useState('This is a modal message.');

    return (
      <div className="space-y-4">
        <div className="space-y-2 max-w-md">
          <div>
            <Label htmlFor="modal-title">Title</Label>
            <TextInput
              id="modal-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="modal-message">Message</Label>
            <TextInput
              id="modal-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <ConfirmModal
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
          title={title}
          message={message}
        />
      </div>
    );
  },
};
