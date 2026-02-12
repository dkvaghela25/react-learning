import React, { lazy, Suspense, useState } from 'react'
import Greetings from './Greetings'
// const Greetings = lazy(() => import('./Greetings'))

const LazyLoading = () => {
    const [load, setLoad] = useState(false)
  return (
    <div className='center'>
        <h1>Lazy Loading</h1>
        <button onClick={() => setLoad(true)}>Click Me!!!</button>
        {load && <Greetings />}
        {/* {load && <Suspense fallback={<h1>Loading ...</h1>}><Greetings /></Suspense>} */}
    </div>
  )
}

export default LazyLoading
