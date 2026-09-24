//10. Create a form with a "Submit" button that logs the input value on click.

import { useState } from "react";

const Ex11 = () => {
  const [input, setInput] = useState('')
  const [form, setForm] = useState('')
  return (
    <div>
      <form onSubmit={(e)=> {
        e.preventDefault()
        setForm(input);
      }  }>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit" className="btn-primary">Submit</button>
      </form>
      <h2>{form}</h2>
      {console.log(input)}
    </div>
  );
}

export default Ex11
