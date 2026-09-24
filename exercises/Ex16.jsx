//16. Create a toggle button to switch between "Light Mode" and "Dark Mode".

import { useState } from "react"

const Ex16 = () => {
 const [mode, setMode] = useState('black')
  return (
    <div style={{ backgroundColor: mode }} className="w-screen h-screen">
      <button
        className="btn-primary"
        onClick={() => setMode(mode === "gray" ? "black" : "gray")}>
        {mode === "gray" ? "dark" : "light"}
      </button>
    </div>
  );
}

export default Ex16
