import React from 'react'
import GithubLink from './ui/GithubLink'

const PropDrilling = () => {
  return (
    <div>
      <h1>Prop Drilling</h1>
      <br />
      <h1>Parent Component</h1>
      <ChildComponent message={"Hello World!!!"} />
      <br />
      <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/PropsDrilling.jsx" />
    </div>
  )
}


const ChildComponent = ({ message }) => {
  return (
    <div>
      <h1>Child Component</h1>
      <GrandChildComponent message={message} />
    </div>
  )
}

const GrandChildComponent = ({ message }) => {
  return (
    <div>
      <h1>Grand Child Component</h1>
      <GrandGrandChildComponent message={message} />
    </div>
  )
}

const GrandGrandChildComponent = ({ message }) => {
  return (
    <div>
      <h1>Grand Grand Child Component</h1>
      <h1>{message}</h1>
    </div>
  )
}

export default PropDrilling
