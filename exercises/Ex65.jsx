//65. Create a component where users can add multiple email addresses to a list.

import { useState } from "react"


const Ex65 = () => {
     const [email, setEmail] = useState(["azee@gmail.com", "john@hotmail.com", "abram@yahoo.com"])
     const [input, setInput] = useState('')

     const handleClick = () => {
          if(input.trim() === "" ) return
          setEmail([...email, input])
          setInput('')
     }
  return (
    <div>
            <input
                 type="email"
                 placeholder="enter your email"
                 className="input"
                 onChange={(e)=> setInput(e.target.value)}
                value={input}
                 
            />
            <button className="btn-primary" onClick={handleClick}>Add</button>

            <h1 className="">{email.join(", ") }</h1>

       </div>
  )
}

export default Ex65
