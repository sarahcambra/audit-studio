import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NewAuditStepper from './NewAuditStepper'
import Step1Info from './wizard/Step1Info'
import Step2ProjectDetails from './wizard/Step2ProjectDetails'
import Step3PreTest from './wizard/Step3PreTest'
import Step4Scope from './wizard/Step4Scope'
import Step5Review from './wizard/Step5Review'
import { ArrowLeft, X, CheckCircle } from 'lucide-react'
import { Toast, ToastToggle } from 'flowbite-react'
import { getVisibleQuestions } from '../lib/scCount'
import { useAuth } from '../context/AuthContext'
import { createAudit } from '../lib/db/audits'

const STEP_LABELS = {
  1: 'Audit Details',
  2: 'Project',
  3: 'Pre-test',
  4: 'Scope',
  5: 'Review & Create',
}

const defaultForm = {
  auditName: '',
  wcagVersion: 'WCAG 2.2',
  conformanceLevel: 'AA',
  standards: { en301549: false, digg: false },
  evaluateThemeContrast: true,
  mobileEmulationProject: false,
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
  scopeItems: [{ type: 'Page', name: '', url: '', componentIdentifier: '' }],
}

export default function NewAuditWizard({ onClose }) {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [currentStep, setCurrentStep] = useState(1)
  const [form, setForm] = useState(defaultForm)
  const [showValidationErrors, setShowValidationErrors] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveError, setSaveError] = useState(null)

  const updateForm = (updates) => setForm(prev => ({ ...prev, ...updates }))

  const isValidUrl = (url) => {
    if (!url) return false
    try { return Boolean(new URL(url)) } catch { return false }
  }

  const step1Complete = Boolean(form.auditName?.trim())
  const step2Complete = form.projectName?.trim() && isValidUrl(form.websiteUrl) && form.auditorName?.trim()

  // Step 3: All questions must be answered
  const visibleQIds = getVisibleQuestions(form.wcagVersion, form.conformanceLevel)
  const answeredCount = visibleQIds.filter(qId => {
    const answer = form.preTestAnswers?.[`q${qId}`]
    return answer === 'yes' || answer === 'no' || answer === 'unsure'
  }).length
  const step3Complete = answeredCount === visibleQIds.length

  const step4Complete = form.scopeItems.length > 0 &&
    form.scopeItems.some(item =>
      item.name && (item.type === 'Component' ? item.componentIdentifier : item.url)
    )
  const hasValidScope = step4Complete

  const handleNext = () => {
    if (currentStep === 1 && !step1Complete) {
      setShowValidationErrors(true)
      return
    }
    if (currentStep === 2 && !step2Complete) {
      setShowValidationErrors(true)
      return
    }
    if (currentStep === 3 && !step3Complete) {
      setShowValidationErrors(true)
      return
    }
    if (currentStep === 4 && !step4Complete) {
      setShowValidationErrors(true)
      return
    }
    if (currentStep < 5) {
      setShowValidationErrors(false)
      setCurrentStep(s => s + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      // Validate current step data before allowing navigation back
      // This prevents users from bypassing validation by going back and forth
      const targetStep = currentStep - 1

      // Re-validate the step we're leaving to catch any missed validations
      if (currentStep === 2 && !step1Complete) {
        setShowValidationErrors(true)
        return
      }
      if (currentStep === 3 && !step2Complete) {
        setShowValidationErrors(true)
        return
      }
      if (currentStep === 4 && !step3Complete) {
        setShowValidationErrors(true)
        return
      }
      if (currentStep === 5 && !step4Complete) {
        setShowValidationErrors(true)
        return
      }

      setShowValidationErrors(false)
      setCurrentStep(targetStep)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1Info form={form} updateForm={updateForm} showValidationErrors={showValidationErrors} />
      case 2: return <Step2ProjectDetails form={form} updateForm={updateForm} showValidationErrors={showValidationErrors} />
      case 3: return <Step3PreTest form={form} updateForm={updateForm} showValidationErrors={showValidationErrors} />
      case 4: return <Step4Scope form={form} updateForm={updateForm} showValidationErrors={showValidationErrors} />
      case 5: return <Step5Review form={form} />
      default: return null
    }
  }

  const isCreateDisabled = !hasValidScope

  return (
    /*
     * Fills the shell's <main> rounded-2xl card entirely.
     * flex-col with a sticky header, sticky footer, and a scrollable middle.
     */
    <div className="relative flex h-full flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">

      {/* ── Page header ────────────────────────────────────────────────────── */}
      <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-700">
        <div className="flex items-center gap-3">
          {onClose && (
            <button
              onClick={onClose}
              className="flex items-center justify-center rounded-xl p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-200 transition-colors"
              aria-label="Close wizard"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
          <div>
            <h1 className="text-base font-semibold text-gray-900 dark:text-white">New Audit</h1>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
              Step {currentStep} of 5 — {STEP_LABELS[currentStep]}
            </p>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="flex items-center justify-center rounded-xl p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-200 transition-colors"
            aria-label="Cancel"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* ── Stepper ─────────────────────────────────────────────────────────── */}
      <div className="shrink-0 border-b border-gray-100 px-6 py-4 dark:border-gray-700">
        <NewAuditStepper currentStep={currentStep} />
      </div>

      {/* ── Scrollable form content ─────────────────────────────────────────── */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="px-6 py-6 max-w-2xl">
          {renderStep()}
        </div>
      </div>

      {/* ── Success toast ───────────────────────────────────────────────────── */}
      {showToast && (
        <div className="absolute bottom-6 right-6 z-50">
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <CheckCircle className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
              Audit created! Redirecting…
            </div>
            <ToastToggle onDismiss={() => setShowToast(false)} />
          </Toast>
        </div>
      )}

      {/* ── Sticky footer navigation ────────────────────────────────────────── */}
      {/* ── Save error banner ───────────────────────────────────────────────── */}
      {saveError && (
        <div className="shrink-0 border-t border-red-100 bg-red-50 px-6 py-3 dark:border-red-800 dark:bg-red-900/20">
          <p className="text-sm font-medium text-red-700 dark:text-red-300">{saveError}</p>
        </div>
      )}

      <footer className="flex shrink-0 items-center gap-3 border-t border-gray-100 px-6 py-4 dark:border-gray-700">

        {/* Back */}
        <button
          type="button"
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
            currentStep === 1
              ? 'cursor-not-allowed text-gray-300 dark:text-gray-600'
              : 'border border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </button>

        {/* Step counter */}
        <p className="flex-1 text-center text-xs text-gray-400 dark:text-gray-500">
          {currentStep} / 5
        </p>

        {/* Next / Create */}
        {currentStep === 5 ? (
          <button
            type="button"
            disabled={isSaving}
            onClick={async () => {
              if (isCreateDisabled) {
                setShowValidationErrors(true)
                return
              }
              setIsSaving(true)
              setSaveError(null)
              const { data, error } = await createAudit(user?.id, form)
              setIsSaving(false)
              if (error) {
                setSaveError('Could not save audit. Please try again.')
                return
              }
              setShowToast(true)
              setTimeout(() => {
                navigate(`/audits/${data.id}`)
                onClose?.()
              }, 2000)
            }}
            className="rounded-xl px-5 py-2.5 text-sm font-medium text-white transition-colors bg-primary-700 hover:bg-primary-800 disabled:opacity-60 disabled:cursor-not-allowed dark:bg-primary-600 dark:hover:bg-primary-700"
          >
            {isSaving ? 'Saving…' : 'Create Audit'}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className="rounded-xl px-5 py-2.5 text-sm font-medium text-white transition-colors bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700"
          >
            Next
          </button>
        )}
      </footer>
    </div>
  )
}
