import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as FlowbiteThemeProvider } from 'flowbite-react'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './shared/context/ThemeContext.jsx'
import { AuthProvider } from './features/auth'
import { ToastProvider } from './shared/context/ToastContext.jsx'
import { customTheme } from './config/theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FlowbiteThemeProvider theme={customTheme}>
        <ThemeProvider>
          <AuthProvider>
            <ToastProvider>
              <App />
            </ToastProvider>
          </AuthProvider>
        </ThemeProvider>
      </FlowbiteThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
