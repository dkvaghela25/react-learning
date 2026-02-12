import React, { useState } from 'react'
import GithubLink from '../../ui/GithubLink';

const ShortCircuit = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState("");
    return (
        <div className='center'>
            <h1>Short Circuit Evaluation</h1>
            <div className="messages">
                {isLoggedIn && "You Are Logged In"} <br />
                {(isLoggedIn && user) && `Hello ${user}`}
            </div>
            <div className="buttons" style={{ display: 'flex', gap: '20px' }}>
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>toggle Login state</button>
                <button onClick={() => setUser("John Doe")}>Set User Value</button>
                <button onClick={() => {
                    setUser("")
                }}>Clear All</button>
            </div>
            <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/hooks/useState/ShortCircuit.jsx" />
        </div>
    )
}

export default ShortCircuit
