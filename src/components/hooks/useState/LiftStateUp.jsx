import React, { useState } from 'react'

const LiftStateUp = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue} />
        </div>
    )
}

const InputComponent = ({ inputValue, setInputValue }) => {
    return (
        <>
            <input
                type="text"
                placeholder='Type something here'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </>
    )
}

const DisplayComponent = ({ inputValue }) => {
    return (
        <>
            <div>Input value is - {inputValue}</div>
        </>
    )
}

export default LiftStateUp
