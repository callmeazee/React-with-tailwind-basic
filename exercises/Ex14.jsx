// Implement a function to clear an input field when a button is pressed.

import { useState } from "react"

const Ex14 = () => {
  const [clear, setClear] = useState('')
  return (
    <div>
      <input
        type="text"
        className="input"
        placeholder="enter your text"
        onChange={(e) => setClear(e.target.value)}
        value={clear}
      />
      <button onClick={() => setClear("")} className="btn-primary">
        Clear
      </button>
    </div>
  );
}

export default Ex14
