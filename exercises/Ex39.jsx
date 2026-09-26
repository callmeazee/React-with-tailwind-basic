//39. Create an object state that tracks the number of clicks for different buttons.

import { useState } from "react"



const Ex39 = () => {
     const [count, setCount] = useState({
          btn1: 0,
          btn2: 0,
          btn3: 0
     })

     const handleClick = (e) => {
          const name = e.target.name 
       

          setCount({
               ...count,
               [name]: count[name] + 1
          })
     }
     console.log(count)
  return (
    <div>
      <input
        type="button"
        className="btn-primary"
        onClick={handleClick}
        name="btn1"
        value="btn1"
      />
      <input
        type="button"
        className="btn-primary"
        onClick={handleClick}
        name="btn2"
        value="btn2"
      />
      <input
        type="button"
        className="btn-primary"
        onClick={handleClick}
        name="btn3"
        value="btn3"
      />
      <p>Button 1 clicked: {count.btn1} times</p>
      <p>Button 2 clicked: {count.btn2} times</p>
      <p>Button 3 clicked: {count.btn3} times</p>
    </div>
  );
}

export default Ex39
