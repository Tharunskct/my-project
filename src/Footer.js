// Footer.js

import React from 'react';
import './Footer.css'; // Import CSS for Footer

function Footer() {
  const currentYear = new Date().getFullYear(); // Fetch current year

  return (
    <footer className="footer-container">
      <div className="footer-bottom">
        <p>&copy; {currentYear} Rural Development. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
