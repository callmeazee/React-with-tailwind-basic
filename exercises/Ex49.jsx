//49. Create an object state that stores multiple settings and updates only selected values.

import { useState } from "react";


const Ex49 = () => {
     const [setting, setSetting] = useState({
          fullname: '',
          email: '',
          notification: '',
          checked: '',
          radio: ''
     })

     const handleChange = (e) => {
          const { value, name, type, checked } = e.target
          const checkValue = type === 'checkbox' && type === 'radio' ? checked : value

          setSetting({
               ...setting,
               [name] : checkValue
          })

          console.log(setting)
     }
  return (
    <div>
      <input
        type="text"
        placeholder="enter your fullname"
        onChange={handleChange}
        value={setting.fullname}
        name="fullname"
      />
      <input
        type="email"
        placeholder="enter your fullname"
        onChange={handleChange}
        value={setting.email}
        name="email"
      />
      <label htmlFor="license">i accept</label>
      <input
        id="license"
        type="checkbox"
        onChange={handleChange}
        name="checked"
        className=" m-5"
      />
      <div className="my-2">
        <label htmlFor="indian">Indian</label>
        <input
          id="indian"
          type="radio"
          onChange={handleChange}
          name="radio"
          className="p-2 m-2"
          checked={setting.radio === "indian"}
          value="indian"
        />
        <label htmlFor="foreign">foreign</label>
        <input
          id="foreign"
          type="radio"
          onChange={handleChange}
          name="radio"
          value="foreign"
          checked={setting.radio === "foreign"}
          className="p-2 m-2"
        />
      </div>
      <select onChange={handleChange} name="notification" className="m-5">
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="partially">Partially</option>
      </select>
    </div>
  );
}

export default Ex49
