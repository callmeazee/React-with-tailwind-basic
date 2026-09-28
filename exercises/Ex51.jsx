//51. Implement a state object that tracks the last key pressed by the user.

import { useState } from "react"

const Ex51 = () => {
     const [keyPressed, setKeyPressed] = useState({
          key : ''
     })
     const handleEvent = (e) => {
          const currentKey= e.key 

          setKeyPressed({
              ...keyPressed,
               key: currentKey
          })
       console.log(keyPressed)
     }
  return (
    <div
      className="w-full h-screen bg-amber-500"
      onKeyDown={handleEvent}
      tabIndex={0}>
      <h4 className="fixed top-1 text-black">Key pressed : {keyPressed.key}</h4>
      <div></div>
    </div>
  );
}

export default Ex51
