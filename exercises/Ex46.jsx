//46. Create an object state that updates dynamically when a user selects a dropdown option.

import { useState } from "react"



const Ex46 = () => {
     const [dropdown, setDropdown] = useState({
          cars: ''
     })

     const handleChange = (e) => {
         const {name, value} = e.target
          setDropdown({
               ...dropdown,
               [name] : value
          })
     }
  return (
    <div>
      <select onChange={handleChange} name="cars">
                 <option value= "beamer">Beamer</option>
                 <option value= "rolls-royce">Rolls-royce</option>
                 <option value= "mercedes">Mercedes</option>
                 <option value= "volvo">Volvo</option>
            </select>
            <h2 className="capitalize">{ dropdown.cars}</h2>
    </div>
  )
}

export default Ex46
