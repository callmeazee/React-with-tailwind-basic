//6. Implement a password visibility toggle in an input field.

import { useState } from "react"

const Ex7 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <input 
        type={visible ? "text" : 'password'}
       
      />
      <button
        className="btn-primary"
        onClick={()=> setVisible(!visible)}
      >Show password</button>
    </div>
  )
}

export default Ex7
