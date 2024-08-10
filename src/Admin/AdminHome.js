// src/AdminHome.js
import React from 'react';
import Navbar1 from './Navbar1';
import Sidebar from './Sidebar';
import './AdminHome.css'; // Import the CSS file for styling

const AdminHome = () => {
  return (
    <div className="admin-container">
      <Navbar1 />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          {/* This is where the main content will go */}
          
          
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
