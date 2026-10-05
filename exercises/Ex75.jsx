//75. Create a search bar that filters an array of items in real-time.

import { useEffect, useState } from "react"


const Ex75 = () => {
     //i m doing via array of object but it ask normal array items and same question we have done in 73 thats why array of objects 
     const [items] = useState([
       { id: 1, name: "Mobile" },
       { id: 2, name: "Computer" },
       { id: 3, name: "Laptop" },
       { id: 4, name: "Tablet" },
       { id: 5, name: "Trolley" },
       { id: 6, name: "Earphones" },
       { id: 7, name: "iphone" },
     ]);
     const [input, setInput] = useState('')
     const [debounce, setDebounce] = useState('')

     const filtereditems = items.filter((item) => item.name.toLowerCase().includes(debounce.toLowerCase()))

     useEffect(() => {
          const timer = setTimeout(() => {
               setDebounce(input)
          }, 500)
       
          return () => {
               clearTimeout(timer)
          }
     }, [input])

  return (
       <div>
            <input
                 type="text"
                 onChange={(e) => setInput(e.target.value)}
                 className="input"
                 placeholder="enter your search items"
            />
      {filtereditems.map((item, idx) => (
        <ul key={idx}>
          <li>
            <h1>{item.name}</h1>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Ex75
