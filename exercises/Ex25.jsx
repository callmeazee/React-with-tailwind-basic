//25. Implement a text input that converts input to uppercase dynamically.

import { useState } from "react"

const Ex25 = () => {
  const [capitalize, setCapitalize] = useState('')
  
  const handleChange = (e) => {
    const inputValue = e.target.value 
    const capitalizeVal = inputValue.toUpperCase()
      setCapitalize(capitalizeVal)
  }

  return (
    <div>
      <input
        className="input"
        type="text"
        onChange={handleChange}
        value={capitalize}
      />
    </div>
  )
}

export default Ex25
