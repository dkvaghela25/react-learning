import React, { useState } from 'react'

const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        emailId: "",
        password: "",
        phoneNo: ""
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
            <h1>Registration Form</h1>
            <div>Hello my name is {formData.firstName} {formData.lastName}, My email address is {formData.emailId} and my phone no is {formData.phoneNo}</div>
            <form action="" className='center' onSubmit={handleSubmit}>

                <label htmlFor="firstName">First Name : </label>
                <input
                    type="text"
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <label htmlFor="lastName">Last Name : </label>
                <input
                    type="text"
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <label htmlFor="emailId">Email ID : </label>
                <input
                    type="text"
                    name='emailId'
                    value={formData.emailId}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password : </label>
                <input
                    type="password"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
                <label htmlFor="phoneNo.">Phone No. : </label>
                <input
                    type="text"
                    name='phoneNo'
                    value={formData.phoneNo}
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default RegistrationForm
