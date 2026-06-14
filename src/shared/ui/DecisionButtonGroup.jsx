import { Button, Tooltip } from 'flowbite-react'
import { AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react'

/**
 * DecisionButtonGroup - Three decision buttons for triage workflow
 *
 * @param {Object} props
 * @param {string} [props.currentDecision] - Currently selected decision
 * @param {Function} props.onDecision - Callback when decision is made (receives decision string)
 * @param {boolean} [props.disabled] - Disable all buttons
 * @param {string} [props.size='sm'] - Button size
 */
export function DecisionButtonGroup({
  currentDecision,
  onDecision,
  disabled = false,
  size = 'sm',
}) {
  const buttons = [
    {
      decision: 'confirmed',
      color: 'failure',
      icon: AlertTriangle,
      label: 'Confirmed Failure',
      tooltip: 'Mark as a real accessibility violation that needs fixing',
    },
    {
      decision: 'not-failure',
      color: 'success',
      icon: CheckCircle,
      label: 'Not a Failure',
      tooltip: 'This is a false positive or not an actual violation',
      outline: true,
    },
    {
      decision: 'manual-check',
      color: 'warning',
      icon: HelpCircle,
      label: 'Needs Manual Check',
      tooltip: 'Need to investigate further outside the tool',
      outline: true,
    },
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {buttons.map(({ decision, color, icon: Icon, label, tooltip, outline }) => {
        const isSelected = currentDecision === decision
        const shouldOutline = outline || !isSelected

        return (
          <Tooltip key={decision} content={tooltip}>
            <Button
              size={size}
              color={color}
              outline={shouldOutline}
              disabled={disabled}
              onClick={() => onDecision(decision)}
              className={isSelected ? `ring-2 ring-${color}-400` : ''}
            >
              <Icon className="h-4 w-4 mr-1.5" aria-hidden="true" />
              {label}
            </Button>
          </Tooltip>
        )
      })}
    </div>
  )
}

export default DecisionButtonGroup
