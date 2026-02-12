import React, { memo, useCallback, useState } from 'react'

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
            <h1>Count - {count}</h1>
            <Button onClick={handleIncrement}>Increment</Button>
            <Button onClick={handleDecrement}>Decrement</Button>
        </div>
    )
}

const Button = memo(({ onClick, children }) => {
    console.log("Rendaring Button");

    return (
        <>
            <button onClick={onClick}>{children}</button>
        </>
    )
});

export default UseCallback;