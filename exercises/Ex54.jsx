//54. Implement a state object that tracks the visibility of multiple UI elements.

import { useState } from "react"

const Ex54 = () => {
     const [visiblity, setVisiblity] = useState({
          e1: true,
          e2: false,
          e3: false
     })
     const handleClick = (key) => {
          setVisiblity(() => ({
               ...visiblity,
               [key] : !visiblity[key]
          }))
     }
  return (
    <div>
            <p  hidden ={visiblity.e1}>this is first element </p>
            <h1 hidden={visiblity.e2}>This is second element</h1>
            <h3 hidden={visiblity.e3}>This is third element</h3>
            <button className="btn-primary " onClick={() => handleClick('e1')}>Set 1</button>
            <button  className="btn-primary "onClick={() => handleClick('e2')}>Set 2</button>
            <button className="btn-primary " onClick={() => handleClick('e3')}>Set 3</button>
            
    </div>
  )
}

export default Ex54
