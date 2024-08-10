import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src={
            "https://tse2.mm.bing.net/th?id=OIP.by86cojh5lIU8pFGsl_UTAHaHa&pid=Api&P=0&h=220"
          }
          alt="Logo"
          className="logo"
        />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/comf">Compliant</Link>
        </li>
        <li>
          <Link to="/donate">Donate</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="dropdown" onMouseLeave={closeDropdown}>
          <span onClick={toggleDropdown} className="dropdown-link">
            Login
          </span>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/" onClick={closeDropdown}>
                User
              </Link>
              <Link to="/adlogin" onClick={closeDropdown}>
                Admin
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
