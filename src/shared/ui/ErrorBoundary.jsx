import { Component } from 'react'
import { Card, Button } from 'flowbite-react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this)
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    })
    console.error('Error caught by boundary:', error, errorInfo)
  }

  resetErrorBoundary() {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  render() {
    if (this.state.hasError) {
      // If a custom fallback is provided, render it with resetErrorBoundary prop
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error} resetErrorBoundary={this.resetErrorBoundary} />
      }

      // Default fallback
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
          <Card className="w-full max-w-2xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-red-600 dark:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Something went wrong
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {this.state.error?.message}
                </p>
                {this.state.errorInfo && (
                  <details className="text-xs mb-4 p-3 rounded font-mono whitespace-pre-wrap overflow-auto max-h-48 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <summary className="cursor-pointer font-semibold mb-2">Error details</summary>
                    {this.state.errorInfo.componentStack}
                  </details>
                )}
                <Button onClick={this.resetErrorBoundary} color="danger" size="sm">
                  Try Again
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
}
