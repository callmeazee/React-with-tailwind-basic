//36. Create a toggle button that switches between two themes stored in an object.

import { useState } from "react"

const Ex36 = () => {
     const themes = {
          light: 'gray',
          dark : 'black'
     }
     const [theme, setTheme] = useState('light')
  return (
    <div>
       <div className="w-50 h-50 ml-90 mt-30" style={{backgroundColor: themes[theme]}}>
                 
            </div>
            <button
            onClick={()=> setTheme( theme === "light" ? "dark" : "light")}
            >
                 {theme == "light" ? "dark" : "light"}
            </button>
    </div>
  )
}

export default Ex36
