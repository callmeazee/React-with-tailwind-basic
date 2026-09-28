//62. Implement a state that stores a list of names and allows adding new names dynamically.

import { useState } from "react"

const Ex62 = () => {
     const [names, setNames] = useState(['apple', 'mango', 'grapes', 'kiwi'])
     const [input, setInput] = useState('')
     const handleClick = () => {
          setNames([...names, input])

     }
     const handleChange = (e) => {
          const value = e.target.value 
          setInput(value)
     }
  return (
    <div>
            <input
                 type="text"
                 placeholder="please add more fruits here"
                 onChange={handleChange}
                 name="fruits"
                 className="input"
            />
            <button className="btn-primary" onClick={handleClick}>Add</button>
            <h1 >{ names.join(", ")}</h1>
    </div>
  )
}

export default Ex62
