//67. Build a state that holds multiple selected items in a list.

import { useState } from "react"


const Ex67 = () => {
     const [selected, setSelected] = useState([])
     // const [input, setInput] = useState('')

     const handleCheckboxChange = (e) => {
          const value = e.target.value   
          const checked = e.target.checked
          if (checked) {
               setSelected([...selected, value])
                
          } else {
               setSelected(selected.filter((topping)=> topping !== value ))
           }
     }

  return (
    <div>

     <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
          <label htmlFor="topping-bo" className="text-gray-700 font-medium cursor-pointer select-none flex-1 py-1">
            Black Olives 🫒
          </label>
          <input
            id="topping-bo"
            type="checkbox"
            value="Black Olives"
            onChange={handleCheckboxChange}
            className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
          />
        </div>

        {/* Topping 2 */}
        <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
          <label htmlFor="topping-rp" className="text-gray-700 font-medium cursor-pointer select-none flex-1 py-1">
            Red Peppers 🫑
          </label>
          <input
            id="topping-rp"
            type="checkbox"
            value="Red Peppers"
            onChange={handleCheckboxChange}
            className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
          />
        </div>

        {/* Topping 3 */}
        <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
          <label htmlFor="topping-m" className="text-gray-700 font-medium cursor-pointer select-none flex-1 py-1">
            Mushrooms 🍄
          </label>
          <input
            id="topping-m"
            type="checkbox"
            value="Mushrooms"
            onChange={handleCheckboxChange}
            className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
          />
        </div>

        {/* Topping 4 */}
        <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
          <label htmlFor="topping-p" className="text-gray-700 font-medium cursor-pointer select-none flex-1 py-1">
            Pineapple 🍍
          </label>
          <input
            id="topping-p"
            type="checkbox"
            value="Pineapple"
            onChange={handleCheckboxChange}
            className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
          />
        </div>
            <h1>{ selected.join(", ")}</h1>
      </div>

  
  );
}

export default Ex67
