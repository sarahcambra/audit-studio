import { useState } from 'react'
import { Button, Datepicker, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react'
import { CalendarPlus, Calendar, X } from 'lucide-react'

/**
 * Format date as short human-readable string.
 * Shows "Today" / "Tomorrow" / "Yesterday" for near dates,
 * "5 Jun" for current year, "5 Jun 2025" for other years.
 */
function formatShortDate(date) {
  if (!date) return '—'
  const now = new Date()
  const d = date instanceof Date ? date : new Date(date)
  if (isNaN(d.getTime())) return '—'

  const nowMid = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const tgtMid = new Date(d.getFullYear(), d.getMonth(), d.getDate())
  const diffDays = Math.round((tgtMid - nowMid) / 86400000)

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Tomorrow'
  if (diffDays === -1) return 'Yesterday'

  const day = d.getDate()
  const month = d.toLocaleDateString('en-GB', { month: 'short' })
  return d.getFullYear() === now.getFullYear()
    ? `${day} ${month}`
    : `${day} ${month} ${d.getFullYear()}`
}

/**
 * DueDateDisplay - Shows the formatted due date as plain colored text.
 * Overdue: red + OVERDUE badge. Within 7 days: amber + "· Soon". Normal: gray.
 */
export function DueDateDisplay({ date, onClick, onClear, showClear = true }) {
  if (!date) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-primary-600 dark:text-gray-500 dark:hover:text-primary-400"
      >
        <CalendarPlus className="h-3.5 w-3.5" />
        Set due date
      </button>
    )
  }

  const d = new Date(date)
  const days = Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()) - new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) / 86400000)
  const formatted = formatShortDate(date)
  const isOverdue = days < 0
  const isSoon = days >= 0 && days <= 7

  const textColor = isOverdue
    ? 'text-red-600 dark:text-red-400'
    : isSoon
    ? 'text-warning-700 dark:text-warning-400'
    : 'text-gray-700 dark:text-gray-300'

  return (
    <div className="inline-flex items-center gap-1.5">
      <button
        type="button"
        onClick={onClick}
        className={`inline-flex items-center text-sm font-medium hover:opacity-80 ${textColor}`}
      >
        {formatted}
      </button>
      {isOverdue && (
        <span className="rounded px-1 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400">
          Overdue
        </span>
      )}
      {!isOverdue && isSoon && (
        <span className="text-[11px] font-medium text-warning-600 dark:text-warning-400">· Soon</span>
      )}
      {showClear && onClear && (
        <button
          type="button"
          onClick={e => { e.stopPropagation(); onClear() }}
          className="text-gray-300 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-400"
          aria-label="Clear date"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  )
}

/**
 * DatePickerModal - Modal with enhanced date picker
 */
export function DatePickerModal({
  isOpen,
  onClose,
  value,
  onChange,
  minDate,
  maxDate,
  title = 'Set Due Date',
  presets = true,
}) {
  const [draftDate, setDraftDate] = useState(value || '')

  const handlePreset = (days) => {
    const date = new Date()
    date.setDate(date.getDate() + days)
    setDraftDate(date.toISOString().slice(0, 10))
  }

  const handleEndOfWeek = () => {
    const date = new Date()
    const day = date.getDay()
    const diff = 5 - day // Friday
    date.setDate(date.getDate() + diff)
    setDraftDate(date.toISOString().slice(0, 10))
  }

  const handleEndOfMonth = () => {
    const date = new Date()
    date.setMonth(date.getMonth() + 1, 0)
    setDraftDate(date.toISOString().slice(0, 10))
  }

  const handleSave = () => {
    onChange?.(draftDate)
    onClose?.()
  }

  const handleClear = () => {
    onChange?.('')
    onClose?.()
  }

  return (
    <Modal show={isOpen} onClose={onClose} size="sm">
      <ModalHeader className="border-b border-gray-200">
        <Calendar className="w-5 h-5 mr-2 inline" />
        {title}
      </ModalHeader>
      <ModalBody>
        <div className="space-y-4">
          <div>
            <Label htmlFor="due-date" className="mb-2 block">
              Due date
            </Label>
            <Datepicker
              id="due-date"
              value={draftDate ? new Date(draftDate) : null}
              minDate={minDate}
              maxDate={maxDate}
              onChange={(date) => {
                if (date instanceof Date && !isNaN(date.getTime())) {
                  setDraftDate(date.toISOString().slice(0, 10))
                } else {
                  setDraftDate('')
                }
              }}
              placeholder="Select date"
              className="w-full"
            />
          </div>

          {presets && (
            <div>
              <Label className="mb-2 block text-xs text-gray-500">
                Quick select
              </Label>
              <div className="flex flex-wrap gap-2">
                <Button size="xs" color="light" onClick={() => handlePreset(0)}>
                  Today
                </Button>
                <Button size="xs" color="light" onClick={() => handlePreset(1)}>
                  Tomorrow
                </Button>
                <Button size="xs" color="light" onClick={() => handlePreset(7)}>
                  +7 days
                </Button>
                <Button size="xs" color="light" onClick={handleEndOfWeek}>
                  End of week
                </Button>
                <Button size="xs" color="light" onClick={handleEndOfMonth}>
                  End of month
                </Button>
              </div>
            </div>
          )}
        </div>
      </ModalBody>
      <ModalFooter className="flex justify-between border-t border-gray-200">
        <Button color="gray" size="sm" onClick={handleClear}>
          Clear
        </Button>
        <div className="flex gap-2">
          <Button color="gray" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button color="primary" size="sm" onClick={handleSave}>
            Save
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  )
}

/**
 * DueDate - Combined component with display + picker
 * @param {Object} props
 * @param {string} props.date - ISO date string
 * @param {Function} props.onChange - Callback when date changes (date) => void
 * @param {Date} props.minDate - Minimum selectable date
 * @param {Date} props.maxDate - Maximum selectable date
 * @param {boolean} props.showClear - Show clear button
 * @param {string} props.title - Modal title
 */
export function DueDate({
  date,
  onChange,
  minDate,
  maxDate,
  showClear = true,
  title = 'Set Due Date',
}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <DueDateDisplay
        date={date}
        onClick={handleOpen}
        onClear={showClear ? () => onChange?.('') : undefined}
        showClear={showClear}
      />
      <DatePickerModal
        isOpen={isOpen}
        onClose={handleClose}
        value={date}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        title={title}
      />
    </>
  )
}

export default DueDate
