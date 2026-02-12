import React, { useState } from 'react'
import GithubLink from '../../ui/GithubLink';

const LiftStateUp = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className='center'>
            <h1>Lift State Up : Instead of creating input state in child component define it in parent such that both can access that state</h1>
            <div>
                <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
                <DisplayComponent inputValue={inputValue} />
            </div>
                <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/hooks/useState/LiftStateUp.jsx" />

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
