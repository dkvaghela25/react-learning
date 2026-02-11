import React, { useState } from 'react'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        message: ""
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
            <h1>Contact Form</h1>
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
                <label htmlFor="message">Message : </label>
                <textarea name="message" id="" rows={5} cols={30}></textarea>
                <input type="submit" />
            </form>
        </div>
    )
}

export default ContactForm
