import React, { useState } from 'react'
import GithubLink from '../../ui/GithubLink';

const State = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    console.log("Parent Component Rendered");
    return (
        <div className='center'>
            <h1>How State Management works and pass state to child component</h1>
            <h1>Count - {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <Child count={count} />
            <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/hooks/useState/State.jsx" />
        </div>
    )
}

const Child = ({ count }) => {
    console.log("Child Component Rendered");
    return (
        <>
            <h1>Child Component {count}</h1>
        </>
    )
}

export const Sibling = () => {
    console.log("Sibling Component Rendered");
    return (
        <>
            <h1>Sibling Component</h1>
        </>
    )
}

export default State
