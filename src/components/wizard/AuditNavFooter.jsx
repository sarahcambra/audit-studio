import { Button } from 'flowbite-react'

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
    <footer className="flex w-full shrink-0 items-center justify-between gap-4 border-t border-default py-6 sm:gap-6">
      <Button onClick={onBack} disabled={currentStep === 1} color="light">
        Back
      </Button>

      <p className="min-w-0 flex-1 text-center whitespace-nowrap text-sm text-body-subtle">
        Step {currentStep} of {totalSteps}
      </p>

      {isFinalStep ? (
        <Button onClick={onCreate} disabled={!canCreate} color="blue">
          Create Audit
        </Button>
      ) : (
        <Button onClick={onNext} disabled={!canNext} color="blue">
          Next
        </Button>
      )}
    </footer>
  )
}
