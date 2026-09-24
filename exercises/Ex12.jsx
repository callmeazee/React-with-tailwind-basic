// Build a show/hide paragraph functionality.

import { useState } from "react"

const Ex12 = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
  { show &&   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste. Minima esse placeat vitae ex, delectus omnis unde itaque maiores sint ab repellendus, adipisci corrupti eligendi inventore. Beatae, cupiditate totam?</p>}
      <button className="btn-primary" onClick={()=> setShow(!show)}>{show ? "hide" : "show" }</button>
    </div>
  )
}

export default Ex12
