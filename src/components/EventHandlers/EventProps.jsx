import React from 'react'

const EventProps = () => {

    const handleClick = () => {
        alert("Hello, How Are You?")
    }

    const handleHover = () => {
        alert("Button Hovered")
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Event handleButtonClick={handleClick} handleMouseHover={handleHover} />
        </div>
    )

}

const Event = (props) => {
    const { handleButtonClick, handleMouseHover } = props;

    const handleGreetings = () => {
        console.log("Hello!!!!!!!")
        handleButtonClick()
    }
    
    return (
        <>
            <button onClick={handleButtonClick}>handleButtonClick</button>
            <button onMouseEnter={handleMouseHover}>handleMouseHover</button>
            <button onClick={handleGreetings}>greetings</button>
        </>
    )
}

export default EventProps
