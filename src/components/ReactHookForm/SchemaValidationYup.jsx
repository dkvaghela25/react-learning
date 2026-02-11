import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';

const SchemaValidationYup = () => {

    const schema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        age: yup.number().positive().integer().required(),
    }).required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })

    const handleFormSubmit = (data) => {
        console.log("Form Data : ", data)
    }

    return (
        <div>
            <div>
                <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
                    <div>
                        <label htmlFor="firstName">First Name : </label>
                        <input
                            className={`${errors.firstName ? "border-red-500!" : ""} focus:outline-none`}
                            type="text"
                            {...register("firstName")}
                        />
                        {errors.firstName && <p className="text-red-500!">{errors.firstName.message}</p>}
                    </div>
                    <br />
                    <div>
                        <label htmlFor="lastName">Last Name : </label>
                        <input
                            type="text"
                            className={`${errors.lastName ? "border-red-500!" : ""} focus:outline-none`}
                            {...register("lastName")}
                        />
                        {errors.lastName && <p className="text-red-500!">{errors.lastName.message}</p>}
                    </div>
                    <br />
                    <div>
                        <label htmlFor="age">Age : </label>
                        <input
                            type="number"
                            className={`${errors.age ? "border-red-500!" : ""} focus:outline-none`}
                            {...register("age")}
                        />
                        {errors.age && <p className="text-red-500!">{errors.age.message}</p>}
                    </div>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default SchemaValidationYup
