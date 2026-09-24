//22. Build a checkbox that toggles between "Checked" and "Unchecked".

import { useState } from "react";

const Ex22 = () => {
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <input
        type="checkbox"
        className="p-2 m-2"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
      <label>Onida</label>
    </div>
  );
}

export default Ex22
