//47. Build a form that updates user information but retains previously entered data.

import { useState } from "react"


const Ex47 = () => {
     const [form, setForm] = useState({
          fullname: '',
          email: '',
          password: '',
          radio: '',
          checked: '',
          gender : ''

     })


     const handleSubmit = (e) => {
          e.preventDefault()
          console.log(form)
     }


     const handleChange = (e) => {
          const { name, value, type , checked } = e.target
          const selectedValue = (type === 'checkbox' ? checked : value)

          setForm({
               ...form,
               [name] : selectedValue
          })
     }
  return (
    <div className="flex justify-center ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          onChange={handleChange}
          name="fullname"
          className="input"
          value={form.fullname}
        />
        <input
          type="email"
          placeholder="enter your email"
          onChange={handleChange}
          name="email"
          className="input"
          value={form.email}
        />
        <input
          type="password"
          placeholder="enter your password"
          onChange={handleChange}
          name="password"
          className="input"
          value={form.password}
        />
        <div className="my-2">
          <label htmlFor="indian">Indian</label>
          <input
            id="indian"
            type="radio"
            onChange={handleChange}
            name="radio"
            className="p-2 m-2"
            checked={form.radio === "indian"}
            value='indian'
          />
          <label htmlFor="foreign">foreign</label>
          <input
            id="foreign"
            type="radio"
            onChange={handleChange}
            name="radio"
            value="foreign"
            checked={form.radio === "foreign"}
            className="p-2 m-2"
          />
        </div>
        <label htmlFor="license">i accept</label>
        <input
          id="license"
          type="checkbox"
          onChange={handleChange}
          name="checked"
          className=" m-5"
        />

        <select onChange={handleChange} name="gender" className="m-5">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>

        <button type="submit" className="btn-primary">
          Submit
        </button>
            </form>
            
            <div className="mt-8 ml-40 bg-blue-300 h-45 w-75 p-4 rounded-lg">
                 <h1>Name: {form.fullname}</h1>
                 <h2>Email: {form.email }</h2>
                 <h3>Password: {form.password }</h3>
                 <h2>Citizen: {form.radio }</h2>
                 <h2>Agreement: {form.checked ? "Agree" : 'Not Agree'}</h2>
                 <h2>Gender: {form.gender }</h2>
            </div>
    </div>
  );
}

export default Ex47
