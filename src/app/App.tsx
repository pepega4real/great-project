import { Link } from 'react-router-dom'

import './styles/index.scss'

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to='/about'>ABOUT</Link>
      <Link to='/'>MAIN</Link>
      <button onClick={toggleTheme}>ChangeTheme</button>
      <AppRouter />
    </div>
  )
}

export default App
