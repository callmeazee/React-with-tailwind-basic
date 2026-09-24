//4. Create a toggle switch for enabling/disabling a feature.

import { useState } from "react"

const Ex5 = () => {
  const [enable, setEnable] = useState(false)
  return (
    <div>
      <button
      onClick={()=> setEnable(!enable)}
      >
        {enable ? "disable" : "enable"}
      </button>
    {enable &&  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo inventore iusto eius? Veritatis, iste voluptate quia provident quisquam ratione?</h1>}
    </div>
  )
}

export default Ex5
