//Implement a live character count display for an input field.

import { useState } from "react"

const Ex20 = () => {
  const [count, setCount] = useState(0)

  const handleChange = (e) => {
    const inputValue = e.target.value 
    const length = inputValue.split(" ").length - 1
    setCount(length)
  }
  return (
    <div>
      <input
        className="input"
        onChange={handleChange}
      />
      <h1>{count }</h1>
    </div>
  )
}

export default Ex20
