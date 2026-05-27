import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import ApplicationShell from './components/ApplicationShell'
import ErrorBoundary from './components/ErrorBoundary'
import UserProfilePage from './pages/UserProfilePage'
import NewAuditPage from './pages/NewAuditPage'
import AuditsPage from './pages/AuditsPage'
import AuditDetailPage from './pages/AuditDetailPage'
import LoginPage from './pages/LoginPage'
import './App.css'
import './accessibility.css'

/** Redirects unauthenticated users to /login */
function PrivateRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
      <p className="text-sm text-gray-500 dark:text-gray-400">Loading…</p>
    </div>
  )
  return user ? children : <Navigate to="/login" replace />
}

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected — wrapped in shell */}
        <Route path="/*" element={
          <PrivateRoute>
            <ApplicationShell>
              <Routes>
                <Route path="/"                     element={<AuditsPage />} />
                <Route path="/audits"               element={<AuditsPage />} />
                <Route path="/audits/new"           element={<NewAuditPage />} />
                <Route path="/audits/:auditId"      element={<AuditDetailPage />} />
                {/* Legacy scan route — redirect to detail page */}
                <Route path="/audits/:auditId/scan" element={<AuditDetailPage />} />
                <Route path="/users/profile"        element={<UserProfilePage />} />
              </Routes>
            </ApplicationShell>
          </PrivateRoute>
        } />
      </Routes>
    </ErrorBoundary>
  )
}

export default App
