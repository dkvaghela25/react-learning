import React, { useRef } from 'react'
import GithubLink from '../../ui/GithubLink';

const UseRef = () => {
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
    <div className='center'>
    <h1>Use of useRef hook for reference input fields</h1>
    <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit} >
      <div>username : <input type="text" name='username' ref={username} /></div>
      <div>password : <input type="password" name='password' ref={password} /></div>
      <input type="submit" />
    </form>
    <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/hooks/useRef/UseRef.jsx" />
    </div>
  )
}

export default UseRef
