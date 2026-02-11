import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        console.log("Hello, useEffect");
    }, [])

    useEffect(() => {
        console.log(`Count Value is : ${count}`);
    }, [count])

    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
        }, 1000);
    }, [])

    return (
        <div className='center'>
            <h1>Hello, useEffect</h1>
            <h1>Date : {currentTime}</h1>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default UseEffect
