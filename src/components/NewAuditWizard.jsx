import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isValidUrl, normaliseUrl } from '../lib/urlUtils'
import NewAuditStepper from './NewAuditStepper'
import Step1Info from './wizard/Step1Info'
import Step2ProjectDetails from './wizard/Step2ProjectDetails'
import Step3PreTest from './wizard/Step3PreTest'
import Step4Scope from './wizard/Step4Scope'
import Step5Review from './wizard/Step5Review'
import { ArrowLeft, X, CheckCircle } from 'lucide-react'
import { Toast, ToastToggle, Button } from 'flowbite-react'
import { customTheme } from '../theme'
import { getVisibleQuestions } from '../lib/scCount'
import { useAuth } from '../context/AuthContext'
import { createAudit, updateAuditFavicon } from '../lib/db/audits'

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
    // When leaving Step 2, sync the normalised websiteUrl into the first scope item
    // if that item still has no URL. This runs after validation so websiteUrl is valid.
    if (currentStep === 2 && form.websiteUrl) {
      const normUrl = normaliseUrl(form.websiteUrl)
      const firstItem = form.scopeItems[0]
      if (!firstItem.url) {
        setForm(prev => ({
          ...prev,
          websiteUrl: normUrl,
          scopeItems: [
            { ...prev.scopeItems[0], name: prev.scopeItems[0].name || 'Homepage', url: normUrl },
            ...prev.scopeItems.slice(1),
          ],
        }))
      } else if (!firstItem.name) {
        // URL already set but name is blank — just fill the name
        setForm(prev => ({
          ...prev,
          websiteUrl: normUrl,
          scopeItems: [
            { ...prev.scopeItems[0], name: 'Homepage' },
            ...prev.scopeItems.slice(1),
          ],
        }))
      } else {
        // Just normalise the websiteUrl itself
        setForm(prev => ({ ...prev, websiteUrl: normUrl }))
      }
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
      const targetStep = currentStep - 1

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
     * Vertical stepper layout:
     * Header (full width)
     * Body: Sidebar (stepper) + Content (form)
     * Footer (full width)
     */
    <div className="relative flex h-full flex-col overflow-hidden">

      {/* ── Page header ────────────────────────────────────────────────────── */}
      <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-700">
        <div className="flex items-center gap-3">
          {onClose && (
            <Button
              onClick={onClose}
              color="ghost"
              size="sm"
              theme={customTheme.button}
              aria-label="Close wizard"
              className="rounded-xl"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </Button>
          )}
          <div>
            <h1 className="text-base font-semibold text-gray-900 dark:text-white">New Audit</h1>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
              Step {currentStep} of 5 — {STEP_LABELS[currentStep]}
            </p>
          </div>
        </div>

        {onClose && (
          <Button
            onClick={onClose}
            color="ghost"
            size="sm"
            theme={customTheme.button}
            aria-label="Cancel"
            className="rounded-xl"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </Button>
        )}
      </div>

      {/* ── Main content area with sidebar stepper ──────────────────────────── */}
      <div className="flex flex-1 min-h-0 overflow-hidden">

        {/* Sidebar with vertical stepper - desktop only */}
        <aside className="hidden md:flex flex-col w-64 shrink-0 border-r border-gray-100 bg-gray-50/50 dark:border-gray-700 dark:bg-gray-800/50">
          <div className="flex-1 overflow-y-auto p-6">
            <NewAuditStepper currentStep={currentStep} />
          </div>
        </aside>

        {/* Mobile stepper indicator */}
        <div className="md:hidden shrink-0 border-b border-gray-100 px-4 py-3 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i + 1 === currentStep
                      ? 'w-6 bg-primary-600 dark:bg-primary-400'
                      : i + 1 < currentStep
                      ? 'w-2 bg-primary-400 dark:bg-primary-600'
                      : 'w-2 bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Step {currentStep} of 5
            </span>
          </div>
        </div>

        {/* Content area */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Scrollable form content */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 py-6">
              {renderStep()}
            </div>
          </div>

          {/* Sticky footer navigation */}
          <footer className="flex shrink-0 items-center gap-3 border-t border-gray-100 px-6 py-4 dark:border-gray-700">
            {/* Back */}
            <Button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 1}
              color="ghost"
              theme={customTheme.button}
              className="rounded-xl"
            >
              <ArrowLeft className="h-4 w-4 mr-1.5" aria-hidden="true" />
              Back
            </Button>

            {/* Step counter */}
            <p className="flex-1 text-center text-xs text-gray-400 dark:text-gray-500">
              {currentStep} / 5
            </p>

            {/* Next / Create */}
            {currentStep === 5 ? (
              <Button
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
                    const detail = error.message || error.code || 'unknown error'
                    setSaveError(`Could not save audit — ${detail}. Please try again.`)
                    return
                  }
                  if (form.websiteUrl && data?.id) {
                    fetch(`/api/favicon?url=${encodeURIComponent(form.websiteUrl)}`)
                      .then(r => r.ok ? r.json() : null)
                      .then(json => {
                        if (json?.faviconUrl) updateAuditFavicon(data.id, json.faviconUrl)
                      })
                      .catch(() => {})
                  }
                  setShowToast(true)
                  setTimeout(() => {
                    navigate(`/audits/${data.id}`)
                    onClose?.()
                  }, 2000)
                }}
                color="primary"
                theme={customTheme.button}
                className="rounded-xl"
              >
                {isSaving ? 'Saving…' : 'Create Audit'}
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleNext}
                color="primary"
                theme={customTheme.button}
                className="rounded-xl"
              >
                Next
              </Button>
            )}
          </footer>

          {/* Save error banner */}
          {saveError && (
            <div className="shrink-0 border-t border-red-100 bg-red-50 px-6 py-3 dark:border-red-800 dark:bg-red-900/20">
              <p className="text-sm font-medium text-red-700 dark:text-red-300">{saveError}</p>
            </div>
          )}
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
    </div>
  )
}
