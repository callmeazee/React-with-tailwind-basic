//14. Create a text input that limits the number of characters typed.

import { useState } from "react";

const Ex15 = () => {
  const [input, setInput] = useState("");
  const Max_Length = 20;

  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
        maxLength={Max_Length}
        placeholder="enter the characters"
        className="input"
      />

      {console.log(input)}
    </div>
  );
};

export default Ex15;
