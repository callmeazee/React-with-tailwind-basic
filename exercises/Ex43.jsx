//43. Implement a text input that updates only one field of an object state.

import { useState } from "react"


const Ex43 = () => {
  const [card, setCard] = useState({
    title: 'Ramesh powar',
    email: 'ramesh@gmail.com',
    age: 32,
    mobile: 8978969833
  })

  const handleChange = (e) => {
    const name = e.target.name 
    const value = e.target.value 

    setCard({
      ...card,
      [name]: value
    })
   }
  return (
    <div>
      <div className="w-50 h-40 ml-60 mt-20 bg-gray-400">
        <h1>{card.title}</h1>
        <h2>{card.email}</h2>
        <h2>{card.age}</h2>
        <h2>{card.mobile}</h2>
      </div>

      <input
        type="text"
        placeholder="enter your title to update"
        className="input"
        onChange={handleChange}
        name="title"
      />
    </div>
  )
}

export default Ex43
