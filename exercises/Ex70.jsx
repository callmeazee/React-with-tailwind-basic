//70. Build a dynamic tags input field  n'    where users can add and remove tags.

import { useState } from "react"


const Ex70 = () => {
     const [tags, setTags] = useState(["React", "Javascript", "Python", "HTML"])
     const [input, setInput] = useState('')

     const handleDelete = (idxToDelete) => {
       setTags(tags.filter((_, tag) => tag !== idxToDelete))
     }
     const handleAdd = () => {
          setTags([...tags, input])
          setInput('')
     }

  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="input"
        placeholder="enter your tags "
        value={input}
      />
      <button className="btn-primary" onClick={handleAdd}>Add</button>
      {tags.map((tag, idx) => (
        <div key={idx}>
          <h1>{tag}</h1>

          <button className="btn-danger" onClick={() => handleDelete(idx)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Ex70
