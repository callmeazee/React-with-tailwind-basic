//79. Build a feature where users can select multiple values from a list dynamically.

import { useState } from "react";



const Ex79 = () => {
     const [values, setValues] = useState([])

     const handleChange = (e) => {
          const { value, checked} = e.target
          
          if (!checked) return  
          if (checked) {
               setValues([...values, value ])
          }
     }
  return (
    <div>
      <ul>
        <li>
          <label htmlFor="nokia">
            Nokia
            <input
              id="nokia"
              type="checkbox"
              value="nokia"
              name="nokia"
              onChange={handleChange}
            />
          </label>
        </li>
        <li>
          <label htmlFor="apple">
            Apple
            <input
              id="apple"
              type="checkbox"
              value="apple"
            
              onChange={handleChange}
            />
          </label>
        </li>
        <li>
          <label htmlFor="samsung">
            Samsung
            <input
              id="samsung"
              type="checkbox"
              value="samsung"
              name="samsung"
              onChange={handleChange}
            />
          </label>
        </li>
      </ul>
      <div>
        <h3>{values.join(", ")}</h3>
      </div>
    </div>
  );
}

export default Ex79
