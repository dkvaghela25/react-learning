import React from 'react'
import { BioProvider } from '.'
import Home from './Home'
import About from './About'
import Services from './Services'

const ContextApi = () => {
  return (<>
    <BioProvider>
      <Home />
      <About />
      <Services />
    </BioProvider>
  </>
  )
}

export default ContextApi
