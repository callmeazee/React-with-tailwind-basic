//63. Build a dynamic list where users can add and remove items using state.

import { useState } from "react"



const Ex63 = () => {
     const [items, setItems] = useState(["camera", "laptop", "mobile", "desktop"])
     const [input, setInput] = useState('')

     const handleChange = (e) => {
          const value = e.target.value 
          setInput(value)
     }
     const handleAdd = () => {
          setItems([...items, input])
          setInput('')
     }
     const handleDelete = (key) => {
         setItems((items) => items.filter((_, item) => item !== key))
     }
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        className="input"
                 placeholder="add more items in the list"
                 value={input}
      />
      <button className="btn-primary m-2" onClick={handleAdd}>
        Add
      </button>

      {items.map((item, idx) => (
        <div key={idx}>
          <h1> {item} </h1>

          <button className="btn-danger" onClick={() => handleDelete(idx)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Ex63
