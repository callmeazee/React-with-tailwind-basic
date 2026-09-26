//44. Build a form that manages multiple input fields using a single state object.

import { useState } from "react"


const Ex44 = () => {
     const [form, setForm] = useState({
          fullname: '',
          email: '',
          password: '',
          age: ''
     })
     const handleChange = (e) => {
          const name = e.target.name
          const value = e.target.value 
          setForm({
               ...form, 
               [name]: value
          })
     }

     const handleSubmit = (e) => {
          e.preventDefault()
           console.log(form)
     }
  return (
       <div>
            <form
            onSubmit={handleSubmit}
            >
            <input
                 type="text"
                 placeholder="enter your fullname"
                 onChange={handleChange}
                 name="fullname"
                 className="input"
            />
            <input
                 type="text"
                 placeholder="enter your email"
                 onChange={handleChange}
                 name="email"
                 className="input"
            />
            <input
                 type="password"
                 placeholder="enter your password"
                 onChange={handleChange}
                 name="password"
                 className="input"
            />
            <input
                 type="number"
                 placeholder="enter your age"
                 onChange={handleChange}
                 name="age"
                 className="input"
                 />
                 <button type="submit" className="btn-primary">
                      Submit
                 </button>
                 </form>
            
                 <h2>{ form.fullname}</h2>
                 <h3>{ form.email}</h3>
                 <h3>{ form.password}</h3>
                 <h3>{ form.age}</h3>
            
      
    </div>
  )
}

export default Ex44
