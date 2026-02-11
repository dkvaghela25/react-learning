import React, { useRef } from 'react'

const UseRef = () => {
    const username = useRef(null);
    const password = useRef(null);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            username : username.current.value,
            password : password.current.value
        }
        console.log(formData);
    }
  
    return (
    <div>
      <form onSubmit={handleSubmit} className='center'>
        <input type="text" name='username' ref={username} />
        <input type="text" name='password' ref={password} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default UseRef
