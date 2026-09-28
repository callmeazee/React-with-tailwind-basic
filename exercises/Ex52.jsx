//52. Create a form that validates user input and updates an error message in state.

import { useState } from "react";

const Ex52 = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "", // Fixed typo: changed pasword -> password
  });
  const [error, setError] = useState({
    fullname: "",
    email: "",
    password: "", // Fixed typo: changed pasword -> password
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const validator = (name, value) => {
    let errorMsg = "";

    if (name === "fullname") {
      if (value.trim().length < 5) {
        errorMsg = "Fullname must be at least 5 characters long.";
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        errorMsg = "Email is required.";
      } else if (!emailRegex.test(value)) {
        errorMsg = "Please enter a valid email address.";
      }
    }

    if (name === "password") {
      // Matches 'password' exactly
      if (value.length < 6) {
        errorMsg = "Password must be at least 6 characters long.";
      }
    }

    // Fixed: Use functional state update for accurate results
    setError((prevError) => ({
      ...prevError,
      [name]: errorMsg,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    validator(name, value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        {/* Fullname Field */}
        <div>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter fullname"
            name="fullname"
            value={form.fullname}
            className="input"
          />
          {error.fullname && (
            <p style={{ color: "red", margin: "4px 0" }}>{error.fullname}</p>
          )}
        </div>

        {/* Email Field - Fixed name attribute */}
        <div>
          <input
            type="email"
            onChange={handleChange}
            placeholder="Enter email address"
            name="email"
            value={form.email}
            className="input"
          />
          {error.email && (
            <p style={{ color: "red", margin: "4px 0" }}>{error.email}</p>
          )}
        </div>

        {/* Password Field - Fixed name and value variables */}
        <div>
          <input
            type="password"
            onChange={handleChange}
            placeholder="Enter password"
            name="password"
            value={form.password}
            className="input"
          />
          {error.password && (
            <p style={{ color: "red", margin: "4px 0" }}>{error.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn-primary"
          style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Ex52;
