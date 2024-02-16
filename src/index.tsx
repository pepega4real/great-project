import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'app/providers/ThemeProvider'

import App from 'app/App'
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBaundary'

import './app/styles/index.scss'

render(
  <div>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
)
