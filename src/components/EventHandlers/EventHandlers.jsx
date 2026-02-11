import React from 'react'

const EventHandlers = () => {
    const handleButtonClick = (event) => {
        console.log(event)
        alert("Button is clicked!!!!")
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button onClick={handleButtonClick}>Button 1</button>
            <button onClick={(event) => handleButtonClick(event)}>Button 2</button>             {/* SyntheticBaseEvent */}
            <button onClick={() => handleButtonClick(event)}>Button 3</button>                  {/* PointerEvent */}
            {/* <button onClick={handleButtonClick()}>Button 1</button> */}
        </div>
    )
}

export default EventHandlers
