import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'
import { ThemeProvider } from './components/hooks/useContext/LightDark.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>,
)
