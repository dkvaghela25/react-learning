import React from 'react'

const HOC = () => {
    const GreetingsWithBorder = withBorder(Greetings);
    return (
        <div>
            <Greetings message="How Are You ?" />
            <GreetingsWithBorder message="How Are You ?" />
        </div>
    )
}

const Greetings = ({ message }) => {
    return (
        <h1>Hello World !!! {message}</h1>
    )
}

const withBorder = (WrappedComponent) => {
    return (props) => {
        return (
            <div style={{ border: '2px solid black' }}>
                <WrappedComponent style={{ border: '2px solid black' }} {...props} />
            </div>
        )
    }
}

export default HOC
