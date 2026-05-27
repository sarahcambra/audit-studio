import { Button } from 'flowbite-react'
import { customTheme } from '../../theme'

export default function AuditNavFooter({
  currentStep,
  totalSteps,
  onBack,
  onNext,
  canNext,
  isFinalStep,
  onCreate,
  canCreate,
}) {
  return (
    <footer className="flex w-full shrink-0 items-center justify-between gap-4 border-t border-gray-100 py-6 sm:gap-6 dark:border-gray-700">
      <Button onClick={onBack} disabled={currentStep === 1} color="ghost" theme={customTheme.button}>
        Back
      </Button>

      <p className="min-w-0 flex-1 text-center whitespace-nowrap text-sm text-gray-400 dark:text-gray-500">
        Step {currentStep} of {totalSteps}
      </p>

      {isFinalStep ? (
        <Button onClick={onCreate} disabled={!canCreate} color="primary" theme={customTheme.button}>
          Create Audit
        </Button>
      ) : (
        <Button onClick={onNext} disabled={!canNext} color="primary" theme={customTheme.button}>
          Next
        </Button>
      )}
    </footer>
  )
}
