//80. Implement an undo/redo feature using an array state.

import { useState } from "react"



const Ex80 = () => {
     const [history, setHistory] = useState([])
     const [currentIndex, setCurrentIndex] = useState(0)

     const handleChange = (e) => {
          const value = e.target.value 
          const newHistory = history.slice(0, currentIndex + 1)

          setHistory([...newHistory, value])
          setCurrentIndex(newHistory.length)
     }

     const undo = () => {
          if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1)
         }
     }
     
     const redo = () => {
          if (currentIndex < history.length - 1) {
               setCurrentIndex( currentIndex + 1 )
          }
     }



  return (
    <div>
      <input
        type="text"
        className="input"
        value={history[currentIndex]}
        onChange={handleChange}
      />
            <button
                 className="btn-primary p-2 m-2"
                 onClick={undo}
            >
                 Undo
            </button>
      <button onClick={redo} className="btn-primary p-2 m-2">Redo</button>
    </div>
  );
}

export default Ex80
