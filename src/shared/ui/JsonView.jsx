import { useMemo } from 'react'

/**
 * JsonView — syntax-highlighted JSON display.
 *
 * Props:
 *   data    {any}   JSON-serializable value
 *   indent  {number} spaces (default 2)
 */
export function JsonView({ data, indent = 2 }) {
  const json = useMemo(() => JSON.stringify(data, null, indent), [data, indent])

  const highlighted = useMemo(() => {
    return json
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(
        /("(?:\\.|[^"\\])*")(\s*:\s*)/g,
        '<span class="json-key">$1</span>$2'
      )
      .replace(
        /(:\s*)("(?:\\.|[^"\\])*")/g,
        '$1<span class="json-str">$2</span>'
      )
      .replace(
        /(:\s*)(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)(\s*[,}\]])/g,
        '$1<span class="json-num">$2</span>$3'
      )
      .replace(
        /(:\s*)(true|false|null|undefined)(\s*[,}\]])/g,
        '$1<span class="json-bool">$2</span>$3'
      )
  }, [json])

  return (
    <pre
      className="overflow-x-auto whitespace-pre rounded-lg bg-gray-900 p-4 text-xs leading-relaxed"
      dangerouslySetInnerHTML={{ __html: highlighted }}
    />
  )
}

export default JsonView
