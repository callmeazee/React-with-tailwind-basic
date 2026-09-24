//19. Create a state variable that stores a random number and updates on button click.

import { useState } from "react"

const Ex19 = () => {
  const [random , generateRandom] = useState(0)
  return (
    <div className="flex justify-center items-center">

      <button
        className="btn-primary"
        onClick={()=> generateRandom(Math.floor(Math.random() * 100))}
      >
        Generate Random number 
      </button>

      <h1>{ random}</h1>
      
    </div>
  )
}

export default Ex19
