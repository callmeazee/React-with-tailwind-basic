//17. Build a dropdown that updates the selected value in state.

import { useState } from "react"

const Ex17 = () => {
     const [input, setInput] = useState('')
  return (
    <div>
        <select onChange={(e)=> setInput(e.target.value) } name="Car">
                 <option value={"bmw"}>BMW</option>
                 <option value={"mercedes"}>Mercedes</option>
                 <option value={"porche"}>Porche</option>
                 <option value={"ferrari"}>Ferrari</option>
                 <option value={"rolls-royce"}>Rolls-Royce</option>
            </select>
            
            <h2>{ input}</h2>
    </div>
  )
}

export default Ex17
