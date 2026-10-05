//72. Create a to-do list where items can be added and removed dynamically.

import { useState } from "react"

const Ex72 = () => {
     const [lists, setLists] = useState(["BMW", "Mercedes", "Toyota", "GMC"])
     const [input, setInput] = useState('')

     const handleAdd = () => {
          setLists([...lists, input])
          setInput('')
     }
     const handleDelete = (idxToDelete) => {
          setLists(lists.filter((_, idx) => idx !== idxToDelete))
     }
  return (
       <div>
            <input
                 type="text"
                 onChange={(e) => setInput(e.target.value)}
                 className="input"
                 placeholder="enter your to-do to add"
                 value={input}
            />
            <button className="btn-primary" onClick={handleAdd}>
                 Add
            </button>
            {
                 lists.map((list, idx) => (
                      <div key={idx}>
                           <ul>
                                <li>{list}</li>
                           </ul>
                           <button onClick={() => handleDelete(idx)} className="btn-danger">
                                Delete
                           </button>

                      </div>
                 ))
            }
      
    </div>
  )
}

export default Ex72
