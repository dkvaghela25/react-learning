import React from 'react'
import GithubLink from '../ui/GithubLink'

const EventProps = () => {

    const handleClick = () => {
        alert("Hello, How Are You?")
    }

    const handleHover = () => {
        alert("Button Hovered")
    }

    return (
        <div className='center'>
            <h1>Pass Events as props to child component</h1>
            <Event handleButtonClick={handleClick} handleMouseHover={handleHover} />
            <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/EventHandlers/EventProps.jsx" />
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
