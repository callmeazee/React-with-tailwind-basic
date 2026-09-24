import  { useState } from 'react'
//1. Build a show/hide image functionality in React.
const Ex1 = () => {
     const [show, setShow] = useState(false)
  return (
    <div>
      <div>
        {show && <img src="./demo.jpg" className="w-full object-cover" />}
      </div>
      <button
        className="px-8 py-2 rounded-lg bg-blue-600"
        onClick={() => setShow(!show)}>
        {show ? "hide" : "show"}
      </button>
    </div>
  );
}

export default Ex1
