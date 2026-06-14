/**
 * ToastContext — lightweight toast notification system.
 *
 * Usage:
 *   const { toast } = useToast()
 *   toast.success('Audit created!')
 *   toast.error('Something went wrong')
 *   toast.warning('Are you sure?')
 *   toast.info('Scan queued')
 *
 * Renders a fixed bottom-right stack using Flowbite <Toast>.
 * Auto-dismisses after 4 s. Max 5 visible at once.
 */
import { createContext, useCallback, useContext, useState } from 'react'
import { Toast } from 'flowbite-react'
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react'

const ToastContext = createContext(null)

let idCounter = 0

const ICONS = {
  success: <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />,
  error:   <XCircle     className="h-5 w-5 text-red-500"   aria-hidden="true" />,
  warning: <AlertTriangle className="h-5 w-5 text-yellow-400" aria-hidden="true" />,
  info:    <Info        className="h-5 w-5 text-blue-500"   aria-hidden="true" />,
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const dismiss = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  const addToast = useCallback((type, message) => {
    const id = ++idCounter
    setToasts(prev => [...prev.slice(-4), { id, type, message }])
    setTimeout(() => dismiss(id), 4000)
  }, [dismiss])

  const toast = {
    success: (msg) => addToast('success', msg),
    error:   (msg) => addToast('error',   msg),
    warning: (msg) => addToast('warning', msg),
    info:    (msg) => addToast('info',    msg),
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}

      {/* Toast stack — fixed bottom-right, above all content */}
      <div
        aria-live="polite"
        aria-atomic="false"
        className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-2"
      >
        {toasts.map(t => (
          <Toast key={t.id} className="shadow-lg">
            <div className="flex items-center gap-3">
              {ICONS[t.type]}
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {t.message}
              </span>
            </div>
            <Toast.Toggle
              onDismiss={() => dismiss(t.id)}
              className="ml-auto"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </Toast.Toggle>
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>')
  return ctx
}
