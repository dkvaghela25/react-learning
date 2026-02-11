import React, { useState } from 'react'

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
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button> &nbsp;
            <button onClick={handleDecrement}>Decrement</button>
            <Child count={count} />
        </>
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

export const Sibiling = () => {
    console.log("Sibiling Component Rendered");
    return (
        <>
            <h1>Sibiling Component</h1>
        </>
    )
}

export default State
