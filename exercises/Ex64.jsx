//64. Implement a feature where a list of colors is stored in state and updated dynamically.

import { useState } from "react"


const Ex64 = () => {
     const [colors, setColors] = useState(["red", "black", "blue", "magenta"])
     const [input, setInput] = useState('')

     const handleChange = (e) => {
          const value = e.target.value 
        
          setInput(value)
     }
     const handleClick = () => {
            if (input.trim() === "") return;
          setColors([...colors, input])
          setInput('')
     }
  return (
    <div>
            <input
                 type="text"
                 placeholder="add colors "
                 onChange={handleChange}
                 value={input}
                 className="input"
            />
            <button className="btn-primary" onClick={handleClick}>Add</button>

            <h1>{ colors.join(", ")}</h1>
    </div>
  )
}

export default Ex64
