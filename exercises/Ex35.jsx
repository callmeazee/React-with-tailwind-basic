//35. Implement a state object that stores and updates width and height dynamically.

import { useState } from "react";



const Ex35 = () => {
     const [dimension, setDimentions] = useState({
          width: "30px"
     })

     const handleChange = (e) => {
          const value = e.target.value 
          const name = e.target.name  

          setDimentions({
               ...dimension,
               [name] : value
          })
     }
  return (
    <div>
      <input
        type="number"
        name="width"
        placeholder="enter your width"
        onChange={handleChange}
      />
      <input
        type="number"
        name="height"
        placeholder="enter your height"
        onChange={handleChange}
      />
      <div
        className="bg-black  ml-90 mt-30"
        style={{  width: `${dimension.width}px`, height: `${dimension.height}px` }}></div>
    </div>
  );
}

export default Ex35
