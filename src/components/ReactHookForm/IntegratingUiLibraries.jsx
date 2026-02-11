import Select from "react-select"
import { useForm, Controller } from "react-hook-form"
import { Input } from "@mui/material"

const IntegratingUiLibraries = () => {

    const { control, handleSubmit } = useForm()

    const handleFormSubmit = (data) => console.log("Submitting Form", data)

    return (
        <div className='center'>
            <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                    <label htmlFor="firstName">First Name : </label>
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => <Input {...field} />}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="gender">Gender : </label>
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={[
                                    { value: "Male", label: "Male" },
                                    { value: "Female", label: "Female" }
                                ]}
                            />
                        )}
                    />
                </div>
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default IntegratingUiLibraries
