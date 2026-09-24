//9. Implement a feature that changes text color when clicking a button.

import { useState } from "react"

const Ex10 = () => {
const [color, setColor] = useState('red')
  return (
    <div>
      <h3 style={{color: color}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quos ipsam reprehenderit? Odio eius exercitationem ullam voluptatem soluta, illum temporibus?</h3>
      
      <button
        className="btn-primary"
        onClick={()=> setColor('green')}
      >
      Change color
      </button>
      
    </div>
  )
}

export default Ex10
