//5. Build a simple input field that updates the UI as the user types.

import { useState } from "react"

const Ex6 = () => {
  const [input, setInput]  = useState('')
  return (
    <div>

      <input
        type="text"
        placeholder="enter your text"
        onChange={(e)=>setInput(e.target.value)}
      />

      <h1>{input}</h1>
    
    </div>
  )
}

export default Ex6
