import { useState } from 'react'
import { Button, Drawer, DrawerHeader, DrawerItems } from 'flowbite-react'
import NewAuditStepper from '../components/NewAuditStepper'
import Step1Info from '../components/wizard/Step1Info'
import Step2ProjectDetails from '../components/wizard/Step2ProjectDetails'
import Step3PreTest from '../components/wizard/Step3PreTest'
import Step4Scope from '../components/wizard/Step4Scope'
import Step5Review from '../components/wizard/Step5Review'

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

export default function CreateAuditDrawer() {
  const [isOpen, setOpen] = useState(false)
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
      setOpen(false)
      setCurrentStep(1)
      setForm(defaultForm)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setCurrentStep(1)
    setForm(defaultForm)
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
    <>
      <Button onClick={() => setOpen(true)}>
        <svg
          className="mr-2 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        New Audit
      </Button>

      <Drawer open={isOpen} onClose={handleClose} className="w-full max-w-md">
        <DrawerHeader title={`NEW AUDIT - STEP ${currentStep}/${TOTAL_STEPS}`} titleIcon={() => <></> } />
        <DrawerItems>
          <form className="mt-5">
            <div className="space-y-4 pb-4">
              <NewAuditStepper currentStep={currentStep} />
              {renderStep()}
            </div>

            <div className="mt-6 flex w-full gap-3 border-t border-gray-200 pt-4 dark:border-gray-700">
              {currentStep > 1 && (
                <Button
                  color="ghost"
                  onClick={handleBack}
                  className="w-full"
                >
                  Back
                </Button>
              )}
              {currentStep < TOTAL_STEPS && (
                <Button
                  onClick={handleNext}
                  disabled={currentStep === 1 && !step1Complete}
                  className="w-full"
                >
                  Next
                </Button>
              )}
              {currentStep === TOTAL_STEPS && (
                <Button
                  onClick={handleCreate}
                  className="w-full"
                  color="success"
                >
                  Create Audit
                </Button>
              )}
              <Button
                color="ghost"
                onClick={handleClose}
                className="w-full"
              >
                <svg
                  aria-hidden
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Close
              </Button>
            </div>
          </form>
        </DrawerItems>
      </Drawer>
    </>
  )
}
