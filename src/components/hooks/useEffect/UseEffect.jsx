import React, { useEffect, useState } from 'react'
import GithubLink from '../../ui/GithubLink';

const UseEffect = () => {

    const [count, setCount] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        console.log("Hello, useEffect");
    }, []) // Executes only on first render 

    useEffect(() => {
        console.log(`Count Value is : ${count}`);
    }, [count]) // Executes wen count value changes 

    useEffect(() => {
        const id = setInterval(() => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
        }, 1000);

        return () => clearInterval(id);
    }, [])

    return (
        <div className='center'>
            <h1>useEffect : Used for executing side effects</h1>
            <h1>Date : {currentTime}</h1>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/hooks/useEffect/UseEffect.jsx" />
        </div>
    )
}

export default UseEffect
