import React, { useMemo, useState } from 'react'
import Child from './Child';

const ReactMemo = () => {
    const [count, setCount] = useState(0);
    let bioData = useMemo(() => {
        return { name: "John", age: 30 }
    }, [])
    return (
        <div className='center'>
            <h1>Count - {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Child bioData={bioData} />
        </div>
    )
}

export default ReactMemo
