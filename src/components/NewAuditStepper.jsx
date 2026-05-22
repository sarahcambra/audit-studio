const steps = [
  { id: 1, label: 'Audit Details' },
  { id: 2, label: 'Project' },
  { id: 3, label: 'Pre-test' },
  { id: 4, label: 'Scope' },
  { id: 5, label: 'Review' },
]

function StepConnector({ completed }) {
  return (
    <li
      aria-hidden
      className="flex min-h-px min-w-6 flex-1 list-none items-center self-center"
    >
      <span
        className={`block h-0.5 w-full ${completed ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'}`}
      />
    </li>
  )
}

function CheckmarkIcon() {
  return (
    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

export default function NewAuditStepper({ currentStep = 1 }) {
  // Bounds checking: clamp currentStep between 1 and total steps
  const clampedStep = Math.max(1, Math.min(currentStep, steps.length))

  if (!Number.isInteger(currentStep)) {
    console.warn(`NewAuditStepper: currentStep must be a number, received ${typeof currentStep}. Using step 1.`)
  }

  return (
    <nav className="min-w-0" aria-label="Audit progress">
      <ol className="scrollbar-none flex w-full min-w-0 flex-nowrap items-center gap-y-3 overflow-x-auto py-2 text-center text-sm font-medium [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden list-none">
        {steps.flatMap((step, index) => {
          const done = step.id < clampedStep
          const active = step.id === clampedStep

          const badgeCls = done
            ? 'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary-500 bg-primary-500 text-white'
            : active
              ? 'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary-500 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 ring-4 ring-primary-100 dark:ring-primary-900/40 font-semibold'
              : 'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'

          const liCls = `list-none flex shrink-0 flex-col items-center gap-1 ${
            active
              ? 'font-semibold text-primary-600 dark:text-primary-400'
              : done
                ? 'text-primary-600 dark:text-primary-400'
                : 'text-gray-600 dark:text-gray-400'
          }`

          const stepEl = (
            <li key={step.id} className={liCls} aria-current={active ? 'step' : undefined}>
              <span className={badgeCls}>
                {done ? <CheckmarkIcon /> : step.id}
              </span>
              <span className="hidden text-xs sm:inline-block">{step.label}</span>
            </li>
          )

          if (index >= steps.length - 1) {
            return [stepEl]
          }

          const segmentDone = steps[index].id < clampedStep
          const connector = <StepConnector key={`conn-${step.id}-${steps[index + 1].id}`} completed={segmentDone} />

          return [stepEl, connector]
        })}
      </ol>
    </nav>
  )
}
