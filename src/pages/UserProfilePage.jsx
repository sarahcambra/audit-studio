import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NewAuditStepper from '../components/NewAuditStepper'
import AuditNavFooter from '../components/wizard/AuditNavFooter'
import Step1Info from '../components/wizard/Step1Info'
import Step2ProjectDetails from '../components/wizard/Step2ProjectDetails'
import Step3PreTest from '../components/wizard/Step3PreTest'
import Step4Scope from '../components/wizard/Step4Scope'
import Step5Review from '../components/wizard/Step5Review'
import { ProfilePageHeader } from '../components/user-profile'

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

export default function UserProfilePage({ sidebarExpanded = true }) {
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

  const mainMl = sidebarExpanded ? 'sm:ml-80' : 'sm:ml-16'

  return (
    <div className="min-w-0 flex-1 bg-neutral-primary-soft antialiased">
      <main className={`min-w-0 overflow-x-hidden bg-neutral-primary-soft pb-16 ${mainMl} transition-[margin] duration-300 ease-out`}>
        <ProfilePageHeader
          title="New Audit"
          belowTitle={<NewAuditStepper currentStep={currentStep} />}
        />

        <div className="w-full max-w-3xl px-4 pb-4">
          <div className="rounded bg-neutral-primary border border-default shadow-sm p-5 sm:p-6">
            {renderStep()}
          </div>
        </div>

        <div className="w-full max-w-3xl px-4">
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
      </main>
    </div>
  )
}
