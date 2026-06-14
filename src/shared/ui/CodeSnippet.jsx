import React from 'react'

/**
 * CodeSnippet - Displays code with highlighted problematic sections
 *
 * @param {Object} props
 * @param {string} props.code - The code to display
 * @param {string} [props.highlight] - Text/pattern to highlight (e.g., 'id="SubscriberForm_trial"' or 'aria-controls=')
 * @param {'dark'|'light'} [props.variant='dark'] - Color variant
 */
export function CodeSnippet({ code, highlight, variant = 'dark' }) {
  if (!code) return null

  // Base styles
  const baseStyles = variant === 'dark'
    ? 'bg-gray-900 text-green-300'
    : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'

  // If no highlight, render plain
  if (!highlight) {
    return (
      <pre className={`text-xs font-mono rounded-lg p-3 overflow-x-auto whitespace-pre-wrap break-all leading-relaxed ${baseStyles}`}>
        {code}
      </pre>
    )
  }

  // Try to highlight the specific text
  // Support wildcards: "id=\"...\"" will match id="anything"
  let regexPattern = highlight
  let isWildcard = false

  // Check for wildcard pattern like id="..."
  if (highlight.includes('...')) {
    isWildcard = true
    // Escape special regex chars except the wildcard
    regexPattern = highlight
      .replace(/[.+^${}()|[\]\\]/g, '\\$&')
      .replace(/"\.\.\."/, '["\'][^"\']+["\']')
      .replace(/'\.\.\.'/, '[^"\']+')
  } else {
    // Exact match - escape regex special characters
    regexPattern = highlight.replace(/[.+^${}()|[\]\\]/g, '\\$&')
  }

  try {
    const regex = new RegExp(`(${regexPattern})`, 'g')
    const parts = code.split(regex)

    return (
      <pre className={`text-xs font-mono rounded-lg p-3 overflow-x-auto whitespace-pre-wrap break-all leading-relaxed ${baseStyles}`}>
        {parts.map((part, idx) => {
          // Check if this part matches the highlight pattern
          const isMatch = isWildcard
            ? part.match(new RegExp(regexPattern))
            : part === highlight

          if (isMatch) {
            return (
              <mark
                key={idx}
                className="bg-primary-700 text-white px-1 rounded font-bold"
                style={{
                  backgroundColor: '#7C3AED',
                  color: 'white',
                  padding: '2px 4px',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                }}
              >
                {part}
              </mark>
            )
          }
          return <span key={idx}>{part}</span>
        })}
      </pre>
    )
  } catch (e) {
    // Fallback to plain text if regex fails
    return (
      <pre className={`text-xs font-mono rounded-lg p-3 overflow-x-auto whitespace-pre-wrap break-all leading-relaxed ${baseStyles}`}>
        {code}
      </pre>
    )
  }
}

/**
 * InlineCode - For inline code highlighting
 */
export function InlineCode({ children, highlight }) {
  if (!highlight) {
    return <code className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">{children}</code>
  }

  const parts = children.split(highlight)

  return (
    <code className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
      {parts.map((part, idx) => (
        <React.Fragment key={idx}>
          {part}
          {idx < parts.length - 1 && (
            <mark
              className="px-1 rounded font-bold"
              style={{
                backgroundColor: '#7C3AED',
                color: 'white',
              }}
            >
              {highlight}
            </mark>
          )}
        </React.Fragment>
      ))}
    </code>
  )
}

export default CodeSnippet
