const STEPS = ['Scan', 'Triage', 'Review', 'Done']

export function PipelineBar({ stage }) {
  const currentStage = Math.min(Math.max(stage ?? 0, 0), STEPS.length - 1)

  return (
    <div className="w-full" role="img" aria-label={`Pipeline: ${STEPS[currentStage]}`}>
      {/* Four segmented bars */}
      <div className="flex items-center gap-1">
        {STEPS.map((stepName, index) => {
          const isComplete = index <= currentStage
          return (
            <div key={stepName} className="flex-1">
              {/* Small bar */}
              <div
                className={`h-1.5 rounded-full ${
                  isComplete ? 'bg-gray-500' : 'bg-gray-200 dark:bg-gray-700'
                }`}
                aria-hidden="true"
              />
              {/* Step label */}
              <div className={`mt-1 text-center text-[10px] font-medium ${
                isComplete ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'
              }`}>
                {stepName}
              </div>
            </div>
          )
        })}
      </div>

      {/* Screen reader announcement */}
      <span className="sr-only">
        Pipeline steps: {STEPS.join(', ')}. Current: {STEPS[currentStage]}
      </span>
    </div>
  )
}
