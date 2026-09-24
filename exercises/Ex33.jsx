//33. Create an object state to store a user's login credentials and update them.

import { useState } from "react"

const Ex33 = () => {
     const [login, setLogin] = useState({
          email: '',
          password: ''
     })
     const handleChange = (e) => {
          const value = e.target.value 
          const name = e.target.name  

          setLogin({
               ...login,
               [name] : value
          })
     }
     const handleSubmit = (e) => {
          e.preventDefault()
          console.log(login)
          setLogin({email: '', password: ''})
     }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your email"
          name="email"
          className="input"
          onChange={handleChange}
          value={login.email}
        />
                 
        <input
          type="password"
          placeholder="enter your password"
          name="password"
          className="input"
          onChange={handleChange}
          value={login.password}
         />
                 
          <button type="submit" className="btn-primary">Submit </button>
                 
      </form>
    </div>
  );
}

export default Ex33
