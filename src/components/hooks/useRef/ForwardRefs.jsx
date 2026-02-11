import React, { useRef } from 'react'

const ForwardRefs = () => {

    const username = useRef(null);
    const password = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            username: username.current.value,
            password: password.current.value
        }
        console.log(formData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='center'>
                
                {/* <BeforReactV19Input name="username" ref={username} />
                <BeforReactV19Input name="password" ref={password} /> */}

                <AfterReactV19Input name="username" ref={username} />
                <AfterReactV19Input name="password" ref={password} />
                
                <input type="submit" />
            </form>
        </div>
    )
}

const BeforReactV19Input = React.forwardRef((props,ref) => {
    return(
        <>
            <input type="text" name={props.name} ref={ref} />
        </>
    )
});

const AfterReactV19Input = (props) => {
    return(
        <>
            <input type="text" name={props.name} ref={props.ref} />
        </>
    )
};

export default ForwardRefs
