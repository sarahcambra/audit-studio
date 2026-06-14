import { CheckCircle2, Zap, Circle } from 'lucide-react'
import { useScanProgress } from '@/hooks/useScanProgress'

const SCAN_PHASES = [
  { ms: 0,     label: 'Opening browser' },
  { ms: 4000,  label: 'Loading the page' },
  { ms: 10000, label: 'Running axe analysis' },
  { ms: 22000, label: 'Checking colour contrast' },
  { ms: 34000, label: 'Checking keyboard access' },
  { ms: 46000, label: 'Capturing screenshots' },
  { ms: 56000, label: 'Processing results' },
]

function PhaseChecklist({ elapsedMs }) {
  return (
    <ul className="space-y-1.5 mt-3" aria-live="polite" aria-atomic="false">
      {SCAN_PHASES.map((phase, i) => {
        const done   = elapsedMs >= phase.ms
        const isLast = i === SCAN_PHASES.length - 1
        const active = done && (isLast || elapsedMs < SCAN_PHASES[i + 1].ms)
        return (
          <li
            key={i}
            className={`flex items-center gap-2.5 text-xs transition-colors ${
              done ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            {done ? (
              active ? (
                <Zap
                  className="h-3.5 w-3.5 shrink-0 text-primary-600 dark:text-primary-400 animate-pulse"
                  aria-hidden="true"
                />
              ) : (
                <CheckCircle2
                  className="h-3.5 w-3.5 shrink-0 text-green-600 dark:text-green-400"
                  aria-hidden="true"
                />
              )
            ) : (
              <Circle
                className="h-3.5 w-3.5 shrink-0 text-gray-400/40 dark:text-gray-500/40"
                aria-hidden="true"
              />
            )}
            <span className={active ? 'font-medium' : ''}>{phase.label}</span>
          </li>
        )
      })}
    </ul>
  )
}

/**
 * Drop-in scan progress banner.
 * Pass isRunning — the component manages its own timer internally.
 */
export default function ScanProgressBanner({ isRunning }) {
  const { elapsedMs, elapsedSeconds } = useScanProgress(isRunning)

  if (!isRunning) return null

  return (
    <div
      className="rounded-lg border border-primary-200 bg-primary-50 px-4 py-3 dark:border-primary-800 dark:bg-primary-900/30"
      role="status"
      aria-label="Scan in progress"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Zap
            className="h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400 animate-pulse"
            aria-hidden="true"
          />
          <span className="text-sm font-semibold text-gray-900 dark:text-white">Scan in progress</span>
        </div>
        <span className="shrink-0 text-xs tabular-nums text-gray-500 dark:text-gray-400">
          {elapsedSeconds}s
        </span>
      </div>

      <PhaseChecklist elapsedMs={elapsedMs} />
    </div>
  )
}
