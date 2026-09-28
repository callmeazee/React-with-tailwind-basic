//50. Build a settings page where users can enable or disable different options dynamically.


import { useState } from "react";

const Ex50 = () => {
  // 1. Initializing state values as booleans where options are enabled/disabled
  const [setting, setSetting] = useState({

    notification: "yes", // Select fields use string values
    checked: false, // Boolean for checkbox
    radio: "indian", // Radio options use string values to check matches
  });

  // 2. The dynamic change handler that handles both strings and booleans
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setSetting((prevState) => ({
      ...prevState,
      // If the input type is a checkbox, store its boolean 'checked' status, otherwise store the string 'value'
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Settings Page</h2>



      {/* Checkbox - Using the boolean state */}
      <div>
        <label htmlFor="license">I accept: </label>
        <input
          id="license"
          type="checkbox"
          onChange={handleChange}
          name="checked"
          checked={setting.checked} // Linked directly to the boolean state
          className="m-5"
        />
      </div>

      {/* Radio Buttons */}
      <div className="my-2">
        <label htmlFor="indian">Indian</label>
        <input
          id="indian"
          type="radio"
          onChange={handleChange}
          name="radio"
          value="indian"
          checked={setting.radio === "indian"} // Returns a boolean (true/false)
          className="p-2 m-2"
        />

        <label htmlFor="foreign">Foreign</label>
        <input
          id="foreign"
          type="radio"
          onChange={handleChange}
          name="radio"
          value="foreign"
          checked={setting.radio === "foreign"} // Returns a boolean (true/false)
          className="p-2 m-2"
        />
      </div>

      {/* Select Dropdown */}
      <div>
        <label>Notifications: </label>
        <select
          onChange={handleChange}
          name="notification"
          value={setting.notification}
          className="m-5">
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="partially">Partially</option>
        </select>
      </div>

      {/* Live State Debugger Preview */}
      <pre
        style={{ background: "#f4f4f4", padding: "10px", marginTop: "15px" }}>
        {JSON.stringify(setting, null, 2)}
      </pre>
    </div>
  );
};

export default Ex50;

