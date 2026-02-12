import React, { useRef } from 'react'
import GithubLink from '../../ui/GithubLink';

const ForwardRefs = () => {

    const username = useRef(null);
    const password = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            username: username.current.value,
            password: password.current.value
        }
        alert(JSON.stringify(formData));
    }

    return (
        <>
            <div className='center'>
                <h1>Access ref of parent component in child component</h1>
                <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit} >
                    <div>username : <AfterReactV19Input name="username" ref={username} /></div>
                    <div>password : <AfterReactV19Input name="password" ref={password} /></div>
                    <input type="submit" />
                </form>
                <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/hooks/useRef/ForwardRefs.jsx" />
            </div>
        </>
    )
}

const BeforReactV19Input = React.forwardRef((props, ref) => {
    return (
        <>
            <input type="text" name={props.name} ref={ref} />
        </>
    )
});

const AfterReactV19Input = (props) => {
    return (
        <>
            <input type="text" name={props.name} ref={props.ref} />
        </>
    )
};

export default ForwardRefs
