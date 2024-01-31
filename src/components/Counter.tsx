import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(prev => prev + 1)
  }

  return (
    <>
      <div>{count}</div>
      <button className={classes.btn} onClick={incrementCount}>
        +1
      </button>
    </>
  )
}
