import React, { useId, useRef } from 'react'

const UseId = () => {
    const id = useId();
  
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
        <label htmlFor={id + "usernameId"}>Username : </label>
        <input id={id + "usernameId"} type="text" name='username' />
        <label htmlFor={id + "passwordId"}>Username : </label>
        <input id={id + "passwordId"} type="text" name='password' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default UseId
