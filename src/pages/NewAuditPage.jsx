import { useNavigate } from 'react-router-dom'
import NewAuditWizard from '../components/NewAuditWizard'

export default function NewAuditPage() {
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/audits')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="mx-auto max-w-4xl">
        <NewAuditWizard onClose={handleClose} />
      </div>
    </div>
  )
}
