//8. Build a "Click me" button that tracks the number of times it is clicked.

import { useState } from "react"

const Ex9 = () => {
  const [click, setClick] = useState(0)
  return (
    <div>
      <button
        className="btn-primary"
      onClick={()=> setClick(click + 1)}
      >
        Click Me

      </button>

      <h3>{click}</h3>
      
    </div>
  )
}

export default Ex9
