//48. Implement a state object that changes borderColor and borderWidth dynamically.

import { useState } from "react"


const Ex48 = () => {
     const [border, setBorder] = useState({
          width: 8,
          color: 'red'
     }) 

     const handleChange = (e) => {
          const { value, name } = e.target  
          
          setBorder({
               ...border, 
               [name] : value
          })
     }
  return (
       <div>
            <input type="color" className="w-20 p-3" onChange={handleChange} name="color"/>
            <input type="number" className="input" onChange={handleChange} placeholder="enter the width" name="width"/>
            
            <div className="w-20 h-20 bg-blue-400 ml-60 mt-20 " style={{ border: `${border.width}px solid ${border.color}`}}>
                 
            </div>
      
    </div>
  )
}

export default Ex48
