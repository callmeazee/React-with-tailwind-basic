//7. Create a button that disables itself after being clicked once.

import { useState } from "react"

const Ex8 = () => {
  const [disable, setDisable] = useState(false)
  return (
    <div>
      <button
        className="btn-primary"
        disabled={disable}
        onClick={()=> setDisable(true)}
      >
        disable
      </button>
    </div>
  )
}

export default Ex8
