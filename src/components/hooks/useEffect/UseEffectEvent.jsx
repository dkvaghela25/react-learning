import React, { useEffect, useEffectEvent, useState } from 'react'

const UseEffectEvent = () => {
    const [count, setCount] = useState(0);

    const handleLog = useEffectEvent(() => console.log(`Count - ${count}`))

    useEffect(() => {
        // const id = setInterval(() => console.log(`Count - ${count}`), 1000)
        const id = setInterval(handleLog, 1000)
        return () => clearInterval(id);
    }, [])

    return (
        <>
            <h1>Count - {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}

export default UseEffectEvent
