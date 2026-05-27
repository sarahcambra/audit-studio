const steps = [
  { id: 1, label: 'Audit Details', description: 'Configure your audit' },
  { id: 2, label: 'Project', description: 'Project information' },
  { id: 3, label: 'Pre-test', description: 'Scope questionnaire' },
  { id: 4, label: 'Scope', description: 'Define scope items' },
  { id: 5, label: 'Review', description: 'Review and create' },
]

function CheckmarkIcon() {
  return (
    <svg className="h-5 w-5" fill="#ffffff" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

export default function NewAuditStepper({ currentStep = 1 }) {
  const clampedStep = Math.max(1, Math.min(currentStep, steps.length))

  return (
    <nav className="h-full" pr-6 pl-6 aria-label="Audit progress">
      <ol className="relative flex flex-col gap-10">
        {steps.map((step, index) => {
          const done = step.id < clampedStep
          const active = step.id === clampedStep
          const isLast = index === steps.length - 1

          return (
            <li key={step.id} className="relative flex gap-4 pb-2">
              {/* Connector line - positioned absolutely to connect circles */}
              {!isLast && (
                <div
                  className="absolute left-[19px] top-[52px] w-0.5"
                  style={{ height: 'calc(100% - 28px)' }}
                  aria-hidden="true"
                >
                  <div
                    className={`h-full w-full ${
                      step.id < clampedStep
                        ? 'bg-primary-600 dark:bg-primary-400'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                </div>
              )}

              {/* Step indicator circle */}
              <div className="relative z-10 flex-shrink-0">
                {done ? (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 dark:bg-primary-500">
                    <CheckmarkIcon />
                  </div>
                ) : active ? (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-600 bg-white dark:border-primary-400 dark:bg-gray-800">
                    <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                      {step.id}
                    </span>
                  </div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {step.id}
                    </span>
                  </div>
                )}
              </div>

              {/* Step label */}
              <div className="flex flex-col pt-2">
                <span
                  className={`text-sm font-medium ${
                    active
                      ? 'text-primary-800 dark:text-primary-200'
                      : done
                      ? 'text-gray-900 dark:text-gray-200'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {step.label}
                </span>
                <span
                  className={`text-xs ${
                    active
                      ? 'text-primary-700 dark:text-primary-300'
                      : done
                      ? 'text-gray-600 dark:text-gray-400'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {step.description}
                </span>
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
