import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'app/providers/ThemeProvider'

import App from 'app/App'

render(
  <div>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
)
