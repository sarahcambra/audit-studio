import { useState } from 'react'
import { Button } from 'flowbite-react'
import { Copy, Check } from 'lucide-react'

/**
 * CopyButton - Reusable copy to clipboard button with feedback
 *
 * @param {Object} props
 * @param {string} props.text - Text to copy
 * @param {string} [props.size='xs'] - Button size (xs, sm, md)
 * @param {string} [props.color='light'] - Button color
 * @param {string} [props.className] - Additional classes
 * @param {string} [props.label] - Custom label (default: 'Copy')
 * @param {string} [props.copiedLabel] - Label when copied (default: 'Copied')
 * @param {Function} [props.onCopy] - Callback after copy
 */
export function CopyButton({
  text,
  size = 'xs',
  color = 'light',
  className,
  label = 'Copy',
  copiedLabel = 'Copied',
  onCopy,
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!text) return

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      }
      setCopied(true)
      onCopy?.()
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Button size={size} color={copied ? 'success' : color} onClick={handleCopy} className={className}>
      {copied ? (
        <Check className="h-3.5 w-3.5" aria-hidden="true" />
      ) : (
        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      <span className="ml-1.5">{copied ? copiedLabel : label}</span>
    </Button>
  )
}

export default CopyButton
