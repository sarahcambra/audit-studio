import { Badge } from '../Badge'

/**
 * WCAG Badge - Shows WCAG version and conformance level
 * @param {Object} props
 * @param {string} props.version - '2.1' or '2.2'
 * @param {string} props.level - 'A', 'AA', or 'AAA'
 * @param {string} [props.size='sm'] - Badge size
 */
export function WcagBadge({ version, level, size = 'sm' }) {
  // Color by conformance level: A=blue, AA=purple, AAA=red
  const levelColors = {
    'A': 'blue',
    'AA': 'purple',
    'AAA': 'red',
  }

  return (
    <Badge color={levelColors[level] ?? 'gray'} size={size}>
      WCAG {version} {level}
    </Badge>
  )
}

export default WcagBadge
