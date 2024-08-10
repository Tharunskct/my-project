// // src/LoginForm.js
// import React, { useState, useContext } from "react";
// import { FaUser, FaLock, FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "./UserContext"; // Import UserContext
// import "./LoginForm.css";

// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const { addUser } = useContext(UserContext); // Destructure addUser from context

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (username && password) {
//       // Add user to context
//       addUser(username);

//       // Navigate to home page after successful login
//       navigate("/home");
//     } else {
//       alert("Please enter your username and password.");
//     }
//   };

//   const handleSocialLogin = (platform) => {
//     switch (platform) {
//       case "Facebook":
//         window.open("https://www.facebook.com", "_blank");
//         break;
//       case "Twitter":
//         window.open("https://www.twitter.com", "_blank");
//         break;
//       case "Google":
//         window.open("https://www.google.com", "_blank");
//         break;
//       default:
//         console.log(`Continue with ${platform}`);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="left-side">
//         {/* Add any content you like here */}
//       </div>
//       <div className="right-side">
//         <h2 className="login-title">Welcome Back!</h2>
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

//           <div className="pass">
//             <Link to="/forgot-password" className="forgot-password-link">
//               Forgot password?
//             </Link>
//           </div>

//           <button type="submit" className="login-button">
//             LOGIN
//           </button>
//         </form>

//         <div className="separator">
//           <p>Or Login Using</p>
//         </div>

//         <div className="social-login-container">
//           <button
//             onClick={() => handleSocialLogin("Facebook")}
//             className="social-button facebook"
//           >
//             <FaFacebook className="social-icon" />
//           </button>
//           <button
//             onClick={() => handleSocialLogin("Twitter")}
//             className="social-button twitter"
//           >
//             <FaTwitter className="social-icon" />
//           </button>
//           <button
//             onClick={() => handleSocialLogin("Google")}
//             className="social-button google"
//           >
//             <FaGoogle className="social-icon" />
//           </button>
//         </div>

//         <div className="signup-link">
//           <p>Have not account yet?</p>
//           <Link to="/signup">SIGN UP</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState } from "react";
import { FaUser, FaLock, FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa"; // Import all necessary icons
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { saveToLocalStorage } from "./localStorageUtils"; // Import the utility function
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState(""); // Use email instead of username
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // For showing success or error messages
  const navigate = useNavigate();

  // Define the social login handler
  const handleSocialLogin = (platform) => {
    switch (platform) {
      case "Facebook":
        window.open("https://www.facebook.com", "_blank");
        break;
      case "Twitter":
        window.open("https://www.twitter.com", "_blank");
        break;
      case "Google":
        window.open("https://www.google.com", "_blank");
        break;
      default:
        console.log(`Continue with ${platform}`);
    }
  };

  // Handle the login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend with email and password
      const response = await axios.post("http://localhost:8080/login", {
        email, // Change from username to email
        password,
      });

      // Log the response from the server
      console.log("Login response:", response.data);

      // Save the login data to local storage
      saveToLocalStorage("loginData", response.data);

      // Show a success message
      setMessage("Login successful!");

      // Navigate to the home page after successful login
      navigate("/home");
    } catch (error) {
      // Display an error message if the login fails
      setMessage("Invalid email or password.");
      console.error("There was an error logging in!", error);
    }
  };

  return (
    <div className="login-container">
      <div className="left-side">
        {/* Add any content you like here */}
      </div>
      <div className="right-side">
        <h2 className="login-title">Welcome Back!</h2>
        {message && <div className="alert">{message}</div>} {/* Display messages */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="icon">
              <FaUser />
            </span>
            <input
              type="email" // Updated to handle email
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

          <div className="pass">
            <a href="/forgot-password" className="forgot-password-link">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>

        <div className="separator">
          <p>Or Login Using</p>
        </div>

        <div className="social-login-container">
          <button
            onClick={() => handleSocialLogin("Facebook")}
            className="social-button facebook"
          >
            <FaFacebook className="social-icon" />
          </button>
          <button
            onClick={() => handleSocialLogin("Twitter")}
            className="social-button twitter"
          >
            <FaTwitter className="social-icon" />
          </button>
          <button
            onClick={() => handleSocialLogin("Google")}
            className="social-button google"
          >
            <FaGoogle className="social-icon" />
          </button>
        </div>

        <div className="signup-link">
          <p>Don't have an account yet?</p>
          <a href="/signup">SIGN UP</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

