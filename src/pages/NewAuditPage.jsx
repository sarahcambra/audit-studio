import { useNavigate } from 'react-router-dom'
import { Card } from 'flowbite-react'
import { customTheme } from '@config/theme.js'
import NewAuditWizard from '@features/audit/components/AuditForm/NewAuditWizard'

export default function NewAuditPage() {
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/audits')
  }

  return (
    <div className="grid grid-cols-1 gap-4 px-4 pt-6">
      {/* Page header */}
      <div className="col-span-full mb-2">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <button
            onClick={handleClose}
            className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            aria-label="Back to audits"
          >
            <span>Audits</span>
          </button>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">New Audit</span>
        </div>
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Create New Audit</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Set up a new accessibility audit with project details and scope</p>
      </div>

      {/* Main content card */}
      <Card theme={customTheme.card} className="col-span-full min-h-[600px]">
        <NewAuditWizard onClose={handleClose} />
      </Card>
    </div>
  )
}
