// src/AboutUs.js
import React from 'react';
import './Aboutus.css'; // Ensure this line is present for styling
import NavBar from './Navbar';


const Aboutus = () => {
  return (
    <div className="about-container">
      <NavBar/>
      <div className="image-section"></div>
      <div className="content-section">
        <h1><u>About Us</u></h1>
        <p>
          Welcome to our community! We are passionate about bringing people together and 
          creating a place where everyone feels at home. Our goal is to provide a platform 
          where you can connect, share, and grow with others.
        </p>
        <p>
          Our team is dedicated to ensuring that your experience with us is positive and 
          enriching. We believe in the power of community and the importance of supporting 
          each other. Join us in making this a wonderful place for all.
        </p>
      </div>

    </div>
  );
};

export default Aboutus;
