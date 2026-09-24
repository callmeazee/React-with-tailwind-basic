//34. Build a color picker that updates an object state with backgroundColor.

import { useState } from "react"



const Ex34 = () => {
     const [color, setColor] = useState({
          color: 'black'
     })

     const handleChange = (e) => {
          const value = e.target.value
          const name = e.target.name 

          setColor({
               ...color, 
               [name] : value
          })

     }
     console.log(color)
  return (
    <div>
     <div className="ml-50 mr-30 h-50 w-50" style={{backgroundColor: color.color}}>
                 
            </div>
            <input 
                 type="color"
                 placeholder="please select your desired color" 
                 onChange={handleChange}
                 name="color"
            />
    </div>
  )
}

export default Ex34
