import { useFormik } from "formik"

const FormikComponent = () => {

  const initialValues = {
    firstName: '',
    lastName: '',
    gender: 'male',
    age: '',
    password: '',
  }

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: values => {
      console.log(values);
    }
  })

  console.log(handleSubmit);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name : </label>
          <input
            type="text"
            name='firstName'
            value={values.firstName}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="lastName">Last Name : </label>
          <input
            type="text"
            name='lastName'
            value={values.lastName}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="gender">Gender : </label>
          <select
            name='gender'
            value={values.gender}
            onChange={handleChange}
          >
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="age">Age : </label>
          <input
            name="age"
            type="number"
            value={values.age}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="text"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default FormikComponent
