//73. Build a feature where an array of strings is filtered dynamically based on input.

import { useEffect, useState } from "react"


const Ex73 = () => {
     const [strings] = useState(["Banana", "Mango", "Apple", "Cherry", "Guava", "Orange", "Kiwi", "Apricot"])
     const [input, setInput] = useState('')
     const [debounceInput, setDebounceInput] = useState('')

     const filteredStrings = strings.filter((string) => string.toLowerCase().includes(debounceInput.toLowerCase()))


     useEffect(() => {
       const timer =   setTimeout(() => {
        setDebounceInput(input)
               
          }, 500)    
          
             return  () => {
              clearTimeout(timer)
          }

     }, [input])

  return (
    <div>
            <input
                 type="text"
                 className="input"
                 placeholder="search the fruits"
                 onChange={(e) => setInput(e.target.value)}
             
            />
            {                 filteredStrings.map((string, idx) => (
                      <div key={idx} className="p-2 m-3">
                           <h1>{string}</h1> 
                      </div>
                 ))
            }
    </div>
  )
}

export default Ex73
