import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NewAuditStepper from '@features/audit/components/AuditForm/NewAuditStepper'
import AuditNavFooter from '@features/audit/components/AuditForm/AuditNavFooter'
import Step1Info from '@features/audit/components/AuditForm/steps/Step1Info'
import Step2ProjectDetails from '@features/audit/components/AuditForm/steps/Step2ProjectDetails'
import Step3PreTest from '@features/audit/components/AuditForm/steps/Step3PreTest'
import Step4Scope from '@features/audit/components/AuditForm/steps/Step4Scope'
import Step5Review from '@features/audit/components/AuditForm/steps/Step5Review'
import { ProfilePageHeader } from '@/components/user-profile'

const defaultForm = {
  auditName: '',
  wcagVersion: 'WCAG 2.2',
  conformanceLevel: 'Level AA',
  standards: { en301549: false, digg: false },
  evaluateThemeContrast: true,
  keyboardNav: false,
  screenReader: false,
  projectName: '',
  clientName: '',
  websiteUrl: '',
  startDate: '',
  targetEndDate: '',
  notes: '',
  auditorName: '',
  auditorEmail: '',
  org: '',
  preTestAnswers: {},
  scopeItems: [{ type: 'Page', name: '', url: '', componentIdentifier: '' }]
}

const TOTAL_STEPS = 5

export default function UserProfilePage() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [form, setForm] = useState(defaultForm)

  const updateForm = (updates) => {
    setForm(prev => ({ ...prev, ...updates }))
  }

  const step1Complete = Boolean(form.auditName?.trim())
  const hasValidScope = form.scopeItems.length > 0 && form.scopeItems.some(item => item.name && (item.type === 'Component' ? item.componentIdentifier : item.url))

  const handleNext = () => {
    if (currentStep === 1 && !step1Complete) return
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleCreate = () => {
    if (hasValidScope) {
      console.log('Creating audit:', form)
      navigate('/')
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Info form={form} updateForm={updateForm} />
      case 2:
        return <Step2ProjectDetails form={form} updateForm={updateForm} />
      case 3:
        return <Step3PreTest form={form} updateForm={updateForm} />
      case 4:
        return <Step4Scope form={form} updateForm={updateForm} />
      case 5:
        return <Step5Review form={form} />
      default:
        return null
    }
  }

  return (
    <div className="space-y-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-900">
      <ProfilePageHeader
        title="New Audit"
        belowTitle={<NewAuditStepper currentStep={currentStep} />}
      />

      <div className="w-full max-w-3xl">
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 p-5 sm:p-6">
          {renderStep()}
        </div>
      </div>

      <div className="w-full max-w-3xl">
        <AuditNavFooter
          currentStep={currentStep}
          totalSteps={TOTAL_STEPS}
          onBack={handleBack}
          onNext={handleNext}
          canNext={currentStep === 1 ? step1Complete : true}
          isFinalStep={currentStep === TOTAL_STEPS}
          onCreate={handleCreate}
          canCreate={hasValidScope}
        />
      </div>
    </div>
  )
}
