//31. Create a user profile state with name and age, and update them via input fields.

import { useState } from "react";



const Ex31 = () => {
  const [profile, setProfile] = useState({
    fullname: '',
    age: ''
  })
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setProfile({
      ...profile,
      [name] : value
    })
  }
  const handleClick = () => {
    profile
  }
  return (
    <div>
      <input
        className="input"
        onChange={handleChange}
        type="text"
        placeholder="enter your name"
        name="fullname"
      />
      <input
        className="input"
        onChange={handleChange}
        type="number"
        placeholder="enter your age"
        name= "age"
      />
      <button
        onClick={handleClick}
        className="btn-primary"
      >
       Submit
      </button>

      <h1>Name: {profile.fullname}</h1>
      <h1>Age: {profile.age}</h1>
      {console.log(profile)}
    </div>
  );
}

export default Ex31
