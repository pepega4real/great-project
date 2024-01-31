import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'

import './styles/index.scss'

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to='/about'>ABOUT</Link>
      <Link to='/main'>MAIN</Link>

      <button onClick={toggleTheme}>ChangeTheme</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/main' element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
