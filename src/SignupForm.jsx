// import React, { useState } from "react";
// import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import "./LoginForm.css";
// import axios from 'axios';

// const SignupForm = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setMessage("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/api/auth/signup', {
//         username,
//         email,
//         password
//       });
//       setMessage("Signup successful!");
//       // Redirect to login page after 2 seconds
//       setTimeout(() => {
//         navigate("/");
//       }, 2000);
//     } catch (error) {
//       setMessage("There was an error signing up!");
//       console.error("There was an error signing up!", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="left-side"></div>
//       <div className="right-side">
//         <h2 className="login-title">SignUp</h2>
//         {message && <div className="alert">{message}</div>}
//         <form className="login-form" onSubmit={handleSubmit}>
//           <div className="input-group">
//             <span className="icon">
//               <FaUser />
//             </span>
//             <input
//               type="text"
//               placeholder="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="input-field"
//               required
//             />
//           </div>
//           <div className="input-group">
//             <span className="icon">
//               <FaEnvelope />
//             </span>
//             <input
//               type="email"
//               placeholder="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="input-field"
//               required
//             />
//           </div>

//           <div className="input-group">
//             <span className="icon">
//               <FaLock />
//             </span>
//             <input
//               type="password"
//               placeholder="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="input-field"
//               required
//             />
//           </div>
//           <div className="input-group">
//             <span className="icon">
//               <FaLock />
//             </span>
//             <input
//               type="password"
//               placeholder="confirm password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="input-field"
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">
//             SIGNUP
//           </button>
//         </form>
//         <div className="signup-link">
//           <p>Already have an account?</p>
//           <a href="/">LOGIN</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;


import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { saveToLocalStorage } from "./localStorageUtils"; // Import utility to save data to localStorage
import "./LoginForm.css";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Validate email format using regular expressions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle the form submission for user signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the email format is valid
    if (!validateEmail(email)) {
      setMessage("Invalid email format!");
      return;
    }

    // Check if the passwords match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      // Send a POST request to the server with the user's credentials
      const response = await axios.post("http://localhost:8080/signup", {
        username,
        email,
        password,
        confirm_password: confirmPassword,
      });

      // Log the server's response to the console
      console.log("Signup response:", response.data);

      // Display a success message
      setMessage("Signup successful!");

      // Save the user data to local storage
      saveToLocalStorage("signupData", response.data);

      // Redirect to the login page after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      // Display an error message if the signup fails
      setMessage("There was an error signing up!");
      console.error("There was an error signing up!", error);
    }
  };

  return (
    <div className="login-container">
      <div className="left-side"></div>
      <div className="right-side">
        <h2 className="login-title">Sign Up</h2>
        {message && <div className="alert">{message}</div>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="icon">
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <span className="icon">
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div className="input-group">
            <span className="icon">
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <span className="icon">
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="login-button">
            SIGN UP
          </button>
        </form>
        <div className="signup-link">
          <p>Already have an account?</p>
          <a href="/">LOGIN</a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
