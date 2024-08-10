import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoginForm.css";

const AdLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to validate form inputs
  const validate = () => {
    const newErrors = {};

    // Basic validation rules
    if (!username) {
      newErrors.username = "Username is required";
    } else if (username.length < 4) {
      newErrors.username = "Username must be at least 4 characters long";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Username:", username);
      console.log("Password:", password);

      // Simulate login validation
      if (username === "admin" && password === "123456") {
        // Navigate to home page after successful login
        navigate("/adhome"); // Change "/1" to the actual path of your homepage
      } else {
        alert("Invalid username or password.");
      }
    }
  };

  return (
    <div className="login-container">
      {/* Left Side with Gradient Background */}
      <div className="left-side">
        {/* You can add any content or leave it as is for the background */}
      </div>

      {/* Right Side with Form */}
      <div className="right-side">
        <h1>ADMIN LOGIN</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className={`input-group ${errors.username ? "error" : ""}`}>
            <span className="icon">
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
              required
            />
            {errors.username && (
              <span className="error-message">{errors.username}</span>
            )}
          </div>

          <div className={`input-group ${errors.password ? "error" : ""}`}>
            <span className="icon">
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdLoginForm;
