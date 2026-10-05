//68. Implement a component where users can move an item up or down in an array state.

import { useState } from "react"



const Ex68 = () => {
     const items = ["red", "blue", "magenta", "orange"]
     const [array, setArray] = useState(items)

     const handleUp = (idx) => {
          if (idx === 0) return 
              const newArray = [...array];
              // Swap elements
              [newArray[idx], newArray[idx - 1]] = [newArray[idx - 1],newArray[idx]];
              setArray(newArray);
      
     }
     const handleDown = (idx) => {
          if (idx === items.length - 1) return 
          const newArray = [...array];
          [newArray[idx], newArray[idx + 1]] = [newArray[idx + 1], newArray[idx]];
          setArray(newArray)
     }
  return (
    <div>
      <ul>
        {array.map((arr, idx) => (
          // Important: valid HTML nested inside <ul> should ideally be <li> tags directly
          <li
            key={idx}
            style={{ display: "flex", gap: "10px", margin: "5px 0" }}>
            <span>{arr}</span> {/* Bug fix: changed {items} to {arr} */}
            {/* Bug fix: Wrapped handlers in anonymous arrow functions */}
            <button
              className="btn-primary"
              onClick={() => handleUp(idx)}
              disabled={idx === 0}>
              Up
            </button>
            <button
              className="btn-primary"
              onClick={() => handleDown(idx)}
              disabled={idx === array.length - 1}>
              Down
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ex68
