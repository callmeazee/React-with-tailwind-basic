//61. Create a state that holds an array of numbers and updates it on button click.

import { useState } from "react"



const Ex61 = () => {
     const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8])

     const handleClick = () => {
       
          
          setNumbers(numbers.map((num) => (num + 1)))
     }
  return (
    <div>
            <h3 className="mb-2">{numbers.join(", ")}</h3>
            <button onClick={handleClick} className="btn-primary">Update </button>
    </div>
  )
}

export default Ex61
