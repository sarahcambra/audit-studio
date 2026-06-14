import { twMerge } from 'tailwind-merge'
import { Sparkles, AlertTriangle, CheckCircle, Clock } from 'lucide-react'

/**
 * AiInsightsCard — dismissible gradient banner with clickable insight chips.
 *
 * Props:
 *   insights    {Array<{ icon: string, label: string, action: () => void }>}
 *   onDismiss   {() => void}
 */
export function AiInsightsCard({ insights = [], onDismiss }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#5B21B6] via-[#7C3AED] to-[#6D28D9] px-5 py-4 shadow-md">
      {/* Decorative radial glow */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,.25) 0%, transparent 70%)' }}
      />

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white/15 text-xl text-white">
          <Sparkles className="h-5 w-5 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
            <Sparkles className="h-3 w-3" />
            AI Insights
          </div>

          <h3 className="mb-2 text-sm font-bold text-white">
            {insights.length} thing{insights.length !== 1 ? 's' : ''} need your attention today
          </h3>

          <div className="flex flex-wrap gap-2">
            {insights.map((ins, i) => (
              <button
                key={i}
                type="button"
                onClick={ins.action}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/95 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                {ins.icon === 'alert' && <AlertTriangle className="h-3 w-3 opacity-80" />}
                {ins.icon === 'check' && <CheckCircle className="h-3 w-3 opacity-80" />}
                {ins.icon === 'clock' && <Clock className="h-3 w-3 opacity-80" />}
                {ins.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dismiss */}
        <button
          type="button"
          onClick={onDismiss}
          className="flex h-7 w-7 flex-none items-center justify-center rounded-md bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
          aria-label="Dismiss AI insights"
        >
          <span className="text-lg leading-none">&times;</span>
        </button>
      </div>
    </div>
  )
}

export default AiInsightsCard
