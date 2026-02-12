import React, { useId, useRef } from 'react'
import GithubLink from '../../ui/GithubLink';

const UseId = () => {
  const id = useId();

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
      <h1>Use of useId hook for creating unique id</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
        <div>
          <label htmlFor={id + "usernameId"}>Username : </label>
          <input id={id + "usernameId"} type="text" name='username' />
        </div>
        <div>
          <label htmlFor={id + "passwordId"}>Password : </label>
          <input id={id + "passwordId"} type="text" name='password' />
        </div>
        <input type="submit" />
      </form>
      <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/hooks/useId/UseId.jsx" />
    </div>
  )
}

export default UseId
