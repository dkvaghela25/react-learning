import React, { lazy, Suspense, useState } from 'react'
import Greetings from './Greetings'
import GithubLink from '../../ui/GithubLink'
// const Greetings = lazy(() => import('./Greetings'))

const LazyLoading = () => {
    const [load, setLoad] = useState(false)
  return (
    <div className='center'>
      <h1>Implementation of how Lazy loading and suspense works</h1>
        <h1>Lazy Loading</h1>
        <button onClick={() => setLoad(true)}>Click Me!!!</button>
        {/* {load && <Greetings />} */}
        {load && <Suspense fallback={<h1>Loading ...</h1>}><Greetings /></Suspense>}
        <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/Optimization/LazyLoading/LazyLoading.jsx" />
    </div>
  )
}

export default LazyLoading
