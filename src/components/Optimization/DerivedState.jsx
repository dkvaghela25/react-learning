import React, { useState } from 'react'
import GithubLink from '../ui/GithubLink';

const DerivedState = () => {

    const [users, setUsers] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "Angles", age: 45 }
    ])

    const userCount = users.length;
    const avgAge = users.reduce((acc, curr) => acc + curr.age, 0) / userCount

    return (
        <div className='center'>
            <h1>Derived State : Get some value using state</h1>
            <h1>User List</h1>
            <ul>
                {users.map((curElem, index) => {
                    return <li key={index}>{curElem.name} - {curElem.age} years old.</li>
                })}
            </ul>

            <div>
                <div>User Count : {userCount}</div>
                <div>Average Age : {avgAge}</div>
            </div>
            <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/Optimization/DerivedState.jsx" />
        </div>
    )
}

export default DerivedState
