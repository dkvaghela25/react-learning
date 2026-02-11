import React, { useMemo, useState } from 'react'
import { FaDove } from 'react-icons/fa';

const ExpansiveTask = () => {
    const sum = () => {
        let i, sum = 0;
        for (i = 0; i < 1000000000; i++) {
            sum += 1;
        }
        return sum;
    }

    const total = useMemo(() => sum(), []);

    return (<>
        <h1>{total}</h1>
    </>)
}

const UseMemo = () => {
    const [count, setCount] = useState(1);
    return (
        <div className='center'>
            <ExpansiveTask />
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <div>UseMemo Rendered {count} times.</div>
        </div>
    )
}

export default UseMemo
