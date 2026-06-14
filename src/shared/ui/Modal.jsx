import {
  Modal as FlowbiteModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'flowbite-react'
import { Button } from 'flowbite-react'

/**
 * ConfirmModal - Confirmation dialog
 * @param {Object} props
 * @param {boolean} props.open - Whether modal is open
 * @param {Function} props.onClose - Close handler
 * @param {Function} props.onConfirm - Confirm handler
 * @param {string} props.title - Modal title
 * @param {string} props.message - Modal message
 * @param {string} props.confirmLabel - Confirm button text
 * @param {string} props.cancelLabel - Cancel button text
 * @param {string} props.confirmColor - Confirm button color
 */
export function ConfirmModal({
  open,
  onClose,
  onConfirm,
  title = 'Confirm',
  message = 'Are you sure?',
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  confirmColor = 'failure',
}) {
  return (
    <FlowbiteModal show={open} onClose={onClose} size="md">
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>
        <p className="text-gray-600 dark:text-gray-300">{message}</p>
      </ModalBody>
      <ModalFooter>
        <Button color={confirmColor} onClick={onConfirm}>
          {confirmLabel}
        </Button>
        <Button color="gray" onClick={onClose}>
          {cancelLabel}
        </Button>
      </ModalFooter>
    </FlowbiteModal>
  )
}

/**
 * FormModal - Modal for forms
 * @param {Object} props
 * @param {boolean} props.open - Whether modal is open
 * @param {Function} props.onClose - Close handler
 * @param {Function} props.onSubmit - Submit handler
 * @param {string} props.title - Modal title
 * @param {React.ReactNode} props.children - Form content
 * @param {string} props.submitLabel - Submit button text
 * @param {boolean} props.isSubmitting - Whether form is submitting
 */
export function FormModal({
  open,
  onClose,
  onSubmit,
  title,
  children,
  submitLabel = 'Save',
  isSubmitting = false,
}) {
  return (
    <FlowbiteModal show={open} onClose={onClose} size="lg">
      <ModalHeader>{title}</ModalHeader>
      <form onSubmit={onSubmit}>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary" isProcessing={isSubmitting}>
            {submitLabel}
          </Button>
          <Button color="gray" onClick={onClose} disabled={isSubmitting}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </FlowbiteModal>
  )
}

export { FlowbiteModal as Modal, ModalHeader, ModalBody, ModalFooter }
