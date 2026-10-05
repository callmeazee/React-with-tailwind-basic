//66. Implement a feature where clicking a button reverses an array stored in state.

import { useState } from "react"



const Ex66 = () => {
     const [array, setArray] = useState(["cake", "ballon", "birthday"])
      
     const handleClick = () => {
          setArray([...array].reverse())
     }
  return (
       <div>
            <h1>{ array.join(", ")}</h1>
            <button
                 onClick={handleClick}
                 className="btn-primary"
            >
           Change the order      
      </button>
    </div>
  )
}

export default Ex66
