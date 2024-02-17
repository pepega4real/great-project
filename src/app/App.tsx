import { Suspense } from 'react'

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { classNames } from 'shared/lib/classNames/classNames'

import { AppRouter } from './providers/router'

const App = () => {
  return (
    <Suspense fallback=''>
      <div className={classNames('app', {}, [])}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  )
}

export default App
