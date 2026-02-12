import React from 'react'
import { BioProvider } from '.'
import Home from './Home'
import About from './About'
import Services from './Services'
import GithubLink from '../../ui/GithubLink'

const ContextApi = () => {
  return (<>
    <BioProvider>
      <h1>Implementation of using Context API and useContext</h1>
      <br />
      <Home />
      <About />
      <Services />
      <br />
      <GithubLink link="https://github.com/dkvaghela25/react-learning/tree/main/src/components/hooks/useContext" />
    </BioProvider>
  </>
  )
}

export default ContextApi
