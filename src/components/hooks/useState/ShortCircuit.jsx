import React, { useState } from 'react'

const ShortCircuit = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState("");
    return (
        <div>
            <h1>Short Circuit Evaluation</h1><br /><br />
            <div className="messages">
                {isLoggedIn && "You Are Logged In"} <br />
                {(isLoggedIn && user) && `Hello ${user}`}
            </div> <br /><br />
            <div className="buttons" style={{ display: 'flex', gap: '20px' }}>
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>toggle Login state</button>
                <button onClick={() => setUser("John Doe")}>Set User Value</button>
                <button onClick={() => {
                    setUser("")
                }}>Clear All</button>
            </div>
        </div>
    )
}

export default ShortCircuit
