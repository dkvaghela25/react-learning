import React from 'react'
import useCount from '../../store/useCount'

const Zustand = () => {
    const {count, increase, decrease, reset} = useCount();
  return (
    <div className='center'>
      <h1>Count - {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Zustand
