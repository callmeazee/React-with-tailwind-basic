//71. Implement a state that holds an array of user-selected checkboxes.

import { useState } from "react"


const Ex71 = () => {
     const [checkBoxs, setCheckBoxs] = useState(["CSS", "Python", "typescript"])

     const handleChange = (e) => {
          // const { checked, value } = e.target
          
          const isChecked = e.target.checked
          const value = e.target.value   

          if (isChecked) {
               setCheckBoxs([...checkBoxs, value])
               
          } else {
               setCheckBoxs(checkBoxs.filter((checkbox) => checkbox !== value))
          }
          

     }
  return (
    <div>
      <label htmlFor="js">Javascript</label>
      <input
        id="js"
        type="checkbox"
        value="Javascript"
        className="p-2 m-2"
        onChange={handleChange}
      />
      <label htmlFor="html">HTML</label>
      <input
        id="html"
        type="checkbox"
        value="HTML"
        className="p-2 m-2"
        onChange={handleChange}
      />
      <label htmlFor="react">React</label>
      <input
        id="react"
        type="checkbox"
        value="React"
        className="p-2 m-2"
        onChange={handleChange}
      />
        {checkBoxs
          .map((checkbox) => (
            <ul>
               <li>{checkbox}</li>
            </ul>
        ))}
    </div>
  );
}

export default Ex71
