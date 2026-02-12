import React from 'react'
import GithubLink from './ui/GithubLink';

const HOC = () => {
    const GreetingsWithBorder = withBorder(Greetings);
    return (
        <div className='center'>
            <h1>HOC : Wrap component with some extra styles or content</h1>
            <Greetings message="How Are You ?" />
            <GreetingsWithBorder message="How Are You ?" />
            <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/HOC.jsx" />
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
