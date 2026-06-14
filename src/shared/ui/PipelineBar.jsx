const STEPS = ['Scan', 'Triage', 'Review', 'Done']

export function PipelineBar({ stage }) {
  const currentStage = Math.min(Math.max(stage ?? 0, 0), STEPS.length - 1)

  return (
    <div className="w-full" role="img" aria-label={`Pipeline: ${STEPS[currentStage]}`}>
      <div className="flex items-center gap-1">
        {STEPS.map((stepName, index) => {
          const isDone = index < currentStage
          const isCurrent = index === currentStage
          return (
            <div key={stepName} className="flex-1">
              <div
                className={`h-1.5 rounded-full ${
                  isDone
                    ? 'bg-primary-600 dark:bg-primary-500'
                    : isCurrent
                      ? 'bg-primary-300 dark:bg-primary-700'
                      : 'bg-gray-200 dark:bg-gray-700'
                }`}
                aria-hidden="true"
              />
              <div className={`mt-1 text-center text-[10px] font-medium ${
                isDone
                  ? 'text-primary-700 dark:text-primary-400'
                  : isCurrent
                    ? 'text-primary-500 dark:text-primary-300'
                    : 'text-gray-400 dark:text-gray-500'
              }`}>
                {stepName}
              </div>
            </div>
          )
        })}
      </div>
      <span className="sr-only">
        Pipeline steps: {STEPS.join(', ')}. Current: {STEPS[currentStage]}
      </span>
    </div>
  )
}
