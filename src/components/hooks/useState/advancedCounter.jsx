import React, { useState } from 'react'

const AdvancedCounter = () => {
    const [count, setCount] = useState(0);
    const [steps, setSteps] = useState(1);

    const historyDiv = document.getElementById("history")

    const handleChange = (e) => {
        setSteps(Number(e.target.value))
    }

    const handleIncrement = () => {
        setCount(count + steps)
        updateHistory(count,count + steps);
    }

    const handleDecrement = () => {
        setCount(count - steps)
        updateHistory(count,count - steps);
    }

    const handleReset = () => {
        setCount(0)
        updateHistory(count,0);
    }

    const updateHistory = (prev,next) => {
        historyDiv.innerHTML += `Count value changed form ${prev} to ${next} <br />`
    }

    return (
        <div className='center'>
            <h1>Advanced Counter</h1>
            <h2>Count : {count}</h2>
            <form action="">
                Steps : <input type="number" min={1} value={steps} onChange={handleChange} />
            </form>
            <div className="buttons" style={{ display: 'flex', gap: '20px' }}>
                <button onClick={handleIncrement} disabled={count >= 100}>Increment</button>
                <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div id="history">

            </div>
        </div>
    )
}

export default AdvancedCounter
