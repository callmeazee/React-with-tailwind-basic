//38. Implement a profile card that updates a user’s details dynamically.

import { useState } from "react";


const Ex38 = () => {
     const [card, setCard] = useState({
          fullname: '',
          email: '',
          mobile: ''
     })

     const handleChange = (e) => {
          const value = e.target.value
          const name = e.target.name 

          setCard({
               ...card,
               [name] : value
          })
     }
  return (
    <div>
      <input
        className="input"
        name="fullname"
        onChange={handleChange}
        type="text"
        placeholder="enter your fullname"
      />
      <input
        className="input"
        name="email"
        onChange={handleChange}
        type="text"
        placeholder="enter your email"
      />
      <input
        className="input"
        name="mobile"
        onChange={handleChange}
        type="number"
        placeholder="enter your mobile number"
      />

      <div className="h-50 w-160 bg-gray-400 ml-60 mt-20 p-4">
        <h1>Fullname: {card.fullname}</h1>
        <h2>Email: {card.email}</h2>
        <h2>Mobile: {card.mobile} </h2>
      </div>
    </div>
  );
}

export default Ex38
