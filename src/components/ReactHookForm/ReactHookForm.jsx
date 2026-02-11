import React from 'react'
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleFormSubmit = (data) => {
        console.log("Form Data : ", data)
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <label htmlFor="firstName">First Name : </label>
                    <input
                        className={`${errors.firstName ? "border-red-500!" : ""} focus:outline-none`}
                        type="text"
                        {...register("firstName", {
                            required: { value: true, message: "First Name is required" },
                            minLength: { value: 3, message: "First name should have at least 3 characters" },
                            maxLength: { value: 8, message: "First name should have at most 8 characters" }
                        })}
                    />
                    {errors.firstName && <p className="text-red-500!">{errors.firstName.message}</p>}
                </div>
                <br />
                <div>
                    <label htmlFor="lastName">Last Name : </label>
                    <input
                        type="text"
                        className={`${errors.lastName ? "border-red-500!" : ""} focus:outline-none`}
                        {...register("lastName", {
                            required: { value: true, message: "Last Name is required" },
                            minLength: { value: 3, message: "Last Name should have at least 3 characters" },
                            maxLength: { value: 8, message: "Last Name should have at most 8 characters" }
                        })}
                    />
                    {errors.lastName && <p className="text-red-500!">{errors.lastName.message}</p>}
                </div>
                <br />
                <div>
                    <label htmlFor="gender">Gender : </label>
                    <select {...register("gender")}>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor="age">Age : </label>
                    <input
                        type="number"
                        className={`${errors.age ? "border-red-500!" : ""} focus:outline-none`}
                        {...register("age", {
                            required: { value: true, message: "Age is required" },
                            min : {value: 18, message: "Age should be greater than 18"}
                        })}
                    />
                    {errors.age && <p className="text-red-500!">{errors.age.message}</p>}
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password : </label>
                    <input
                        type="text"
                        className={`${errors.password ? "border-red-500!" : ""} focus:outline-none`}
                        {...register("password", {
                            required: { value: true, message: "Password is required" },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/,
                                message: "Password Should have at least 6 & at most 12 characters, with one uppercase letter, one lowercase letter, one digit, and one special character"
                            }
                        })}
                    />
                    {errors.password && <p className="text-red-500!">{errors.password.message}</p>}
                </div>
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default ReactHookForm
