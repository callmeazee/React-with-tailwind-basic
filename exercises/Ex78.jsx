//78. Create a dropdown menu where state manages multiple selectable options.

import { useState } from "react"



const Ex78 = () => {
     const [select, setSelect] = useState([])

     const handleChange = (e) => {
          const options = e.target.selectedOptions
          const selectedValues = []

          for (let i = 0; i < options.length; i++){
               selectedValues.push(options[i].value)
          }
          setSelect([...select, selectedValues])
          console.log(select)
  
     }
  return (
    <div>
      <select multiple onChange={handleChange}  >
                 <option value="BMW">BMW</option>
                 <option value="Mercedes">Mercedes</option>
                 <option value="Volvo">Volvo</option>
                 <option value="Benq">Benq</option>
                 <option value="Hyundai">Hyundai</option>
            </select>
            <h3>{select.length > 0 ? select.join(", ") : "none selected"}</h3>
    </div>
  )
}

export default Ex78
