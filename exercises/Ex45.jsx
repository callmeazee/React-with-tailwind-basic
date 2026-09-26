//45. Implement a login form where state tracks email, password, and rememberMe.

import { useState } from "react";

const Ex45 = () => {
     const [form, setForm] = useState({
          email: '',
          password: '',
          checked : ''
     })
     const handleSubmit = (e) => {
          e.preventDefault()
          console.log(form)
     }
     const handleChange = (e) => {
          const name = e.target.name 
          const value = e.target.value 
          const check = e.target.checked
          const type = e.target.type
          
          setForm({
               ...form,
           [name] : type === 'checkbox' ? check : value
               
          })
        
     }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="enter your email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="input"
          placeholder="enter your password"
          name="password"
          onChange={handleChange}
        />
        <input
          type="checkbox"
          className="input"
          placeholder="enter your email"
          name="checked"
          checked={form.checked}
          onChange={handleChange}
        />
                 
        <button
          type="submit"
          className="btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Ex45
