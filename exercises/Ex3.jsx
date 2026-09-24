//3. Implement a counter app with increment and decrement buttons.

import { useState } from "react"

const Ex3 = () => {
     const [count, setCount] = useState(0)
  return (
       <div className="p-5">
            <button
                 className="btn-primary"
                 onClick={()=>setCount(count +  1 )}
            >
               +
            </button>
            <h1>{ count }</h1>
            <button
                 className="btn-primary"
                 onClick={()=> setCount(count - 1)}
            >
                 -
            </button>
      
    </div>
  )
}

export default Ex3
