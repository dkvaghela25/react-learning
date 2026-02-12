import React from 'react'
import GithubLink from '../ui/GithubLink'

const EventHandlers = () => {
    const handleButtonClick = (event) => {
        console.log(event)
        alert("Button is clicked!!!!")
    }

    return (
        <div className='center' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h1>Event handlers</h1>
            <button onClick={handleButtonClick}>Button 1</button>
            <button onClick={(event) => handleButtonClick(event)}>Button 2</button>             {/* SyntheticBaseEvent */}
            <button onClick={() => handleButtonClick(event)}>Button 3</button>                  {/* PointerEvent */}
            {/* <button onClick={handleButtonClick()}>Button 1</button> */}
            <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/EventHandlers/EventHandlers.jsx" />
        </div>
    )
}

export default EventHandlers
