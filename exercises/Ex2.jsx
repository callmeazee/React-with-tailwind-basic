//2. Create a button that toggles text between "Show" and "Hide".

import { useState } from "react"

const Ex2 = () => {
     const [show, setShow] = useState(false)
  return (
    <div>
      {show && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, fuga?
        </p>
      )}
      <button className="btn-primary" onClick={() => setShow(!show)}>
        show/hide
      </button>
    </div>
  );
}

export default Ex2
