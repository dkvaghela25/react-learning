import React, { useState } from 'react'

const LoginForm = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className="center">
            <h1>Login Form</h1>
            <form action="" className='center' onSubmit={handleSubmit}>

                <label htmlFor="username">Username : </label>
                <input
                    type="text"
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password : </label>
                <input
                    type="password"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default LoginForm
