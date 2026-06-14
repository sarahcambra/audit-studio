import { twMerge } from 'tailwind-merge'

/**
 * ScoreRing — SVG circular progress chart with center label.
 *
 * Props:
 *   score     {number} 0–100
 *   size      {number} px diameter (default 120)
 *   stroke    {number} px ring thickness (default 10)
 *   label     {string} center label text (default 'Partial')
 */
export function ScoreRing({ score, size = 120, stroke = 10, label }) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const offset = c - (score / 100) * c

  const color =
    score >= 80 ? '#059669' : score >= 60 ? '#D97706' : '#DC2626'

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#E9E5F0"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute text-center">
        <div
          className="text-3xl font-extrabold tracking-tight"
          style={{ color, lineHeight: 1 }}
        >
          {score}%
        </div>
        {label && (
          <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
            {label}
          </div>
        )}
      </div>
    </div>
  )
}

export default ScoreRing
