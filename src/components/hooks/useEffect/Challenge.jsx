import React, { useEffect, useState } from 'react'

const Challenge = () => {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        console.log(`My name is : ${inputValue}`);
    }, [inputValue])

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
    
    return (
        <div className='center'>
            <h1>useEffect Challenge</h1>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <div>My name is {inputValue}</div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
    )
}

export default Challenge
