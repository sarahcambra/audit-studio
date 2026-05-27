import { CheckCircle2, Zap, Circle } from 'lucide-react'
import { useScanProgress } from '../../hooks/useScanProgress'

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
              done ? 'text-heading' : 'text-body-subtle'
            }`}
          >
            {done ? (
              active ? (
                <Zap
                  className="h-3.5 w-3.5 shrink-0 text-fg-brand animate-pulse"
                  aria-hidden="true"
                />
              ) : (
                <CheckCircle2
                  className="h-3.5 w-3.5 shrink-0 text-fg-success"
                  aria-hidden="true"
                />
              )
            ) : (
              <Circle
                className="h-3.5 w-3.5 shrink-0 text-body-subtle/40"
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
      className="rounded border border-brand-subtle bg-brand-softer px-4 py-3"
      role="status"
      aria-label="Scan in progress"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Zap
            className="h-4 w-4 shrink-0 text-fg-brand animate-pulse"
            aria-hidden="true"
          />
          <span className="text-sm font-semibold text-heading">Scan in progress</span>
        </div>
        <span className="shrink-0 text-xs tabular-nums text-body-subtle">
          {elapsedSeconds}s
        </span>
      </div>

      <PhaseChecklist elapsedMs={elapsedMs} />
    </div>
  )
}
