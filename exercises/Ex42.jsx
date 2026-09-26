//42. Create an object state that stores RGB values and updates them on input change.

import { useState } from "react"


const Ex42 = () => {

     const [color, setColor] = useState({
          r: 0,
          g: 0,
          b: 0
     })
     const handleChange = (e) => {
          const name = e.target.name 
          const value = e.target.value 

          setColor({
               ...color,
               [name] : value
          })
     }
  return (
    <div>
      <div
        className="w-50 h-70 ml-50 mt-20 "
        style={{
          backgroundColor: `rgb(${color.r},${color.g},${color.b})`,
        }}></div>

      <input
        type="number"
        onChange={handleChange}
        placeholder="enter from 1 to 255"
        value={color.r}
        name="r"
      />
      <input
        type="number"
        onChange={handleChange}
        placeholder="enter your color"
        value={color.g}
        name="g"
      />
      <input
        type="number"
        onChange={handleChange}
        placeholder="enter your color"
        value={color.b}
        name="b"
      />
    </div>
  );
}

export default Ex42
