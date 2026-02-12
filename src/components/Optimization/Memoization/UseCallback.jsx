import React, { memo, useCallback, useState } from 'react'
import GithubLink from '../../ui/GithubLink';

const UseCallback = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = useCallback(() => {
        console.log("inside handleIncrement");
        setCount((prev) => prev + 1)
    }, [])

    const handleDecrement = useCallback(() => {
        console.log("inside handleDecrement");
        setCount((prev) => prev - 1)
    }, [])


    return (
        <div className='center'>
            <h1>useCallback : used for preventing functions from recreating at every time component is re-render</h1>
            <h1>Count - {count}</h1>
            <div className='flex gap-10'>
                <Button onClick={handleIncrement}>Increment</Button>
                <Button onClick={handleDecrement}>Decrement</Button>
            </div>
            <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/Optimization/Memoization/UseCallback.jsx" />
        </div>
    )
}

const Button = memo(({ onClick, children }) => {
    console.log("Rendering Button");

    return (
        <>
            <button onClick={onClick}>{children}</button>
        </>
    )
});

export default UseCallback;