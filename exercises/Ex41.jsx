//41. Implement a feature where an object state tracks the user's scroll position.

import { useState } from "react"

const Ex41 = () => {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  const handleEvent = (e) => {
  const scrollLeft = e.currentTarget.scrollLeft
    const scrollTop = e.currentTarget.scrollTop
    console.log(scrollLeft, scrollTop)
   
    
    setPosition({
      x: scrollLeft,
      y: scrollTop
    })
     
  }
  return (
    <div
      className="h-[400px] w-[400px] overflow-scroll border border-gray-400 relative"
      onScroll={handleEvent}>
      <h3 className="fixed ml-02">X : {position.x}</h3>
      <h3 className="fixed ml-50">Y : {position.y}</h3>
      <div className="h-[1000px] w-[1000px] bg-gradient-to-br from-indigo-100 to-amber-100"></div>
    </div>
  );
}

export default Ex41
