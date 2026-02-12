import React, { useEffect, useEffectEvent, useState } from 'react'
import GithubLink from '../../ui/GithubLink';

const UseEffectEvent = () => {
    const [count, setCount] = useState(0);

    const handleLog = useEffectEvent(() => console.log(`Count - ${count}`))

    useEffect(() => {
        // const id = setInterval(() => console.log(`Count - ${count}`), 1000)
        const id = setInterval(handleLog, 1000)
        return () => clearInterval(id);
    }, [])

    return (
        <div className='center'>
            <h1>useEffectEvent</h1>
            <h1>Count - {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/hooks/useEffect/UseEffectEvent.jsx" />
        </div>
    )
}

export default UseEffectEvent
