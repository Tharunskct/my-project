// src/Navbar.js
import React from 'react';
import './Navbar1.css'; // Import the CSS file for styling

const Navbar1 = () => {
  return (
    <nav className="navbar1">
      <div className="navbar-brand1">
        <h1>Admin Dashboard</h1>
      </div>
      <div className="navbar-menu1">
        <ul>
          <li><a href="/home">Logout</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar1;
