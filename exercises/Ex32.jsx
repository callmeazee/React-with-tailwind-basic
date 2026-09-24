//32. Implement a form with a state object containing firstName and lastName.

import { useState } from "react";

const Ex32 = () => {
     const [form, setForm] = useState({
          fullname: '',
          email: ''
     })
     const handleSubmit = (e) => {
          e.preventDefault()
           console.log(form)
     }
     
     const handleChange = (e) => {
          const value = e.target.value 
          const name = e.target.name   
                   setForm({
                     ...form,
                     [name]: value,
                   });
     }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="enter your name"
          className="input"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="enter your email"
          className="input"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Ex32;
