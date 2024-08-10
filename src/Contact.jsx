// src/components/Contact.js

import React from "react";
import "./Contact.css";
import NavBar from "./Navbar";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="contact-page">
      <NavBar />
      <div className="contact-container">
        <div className="contact-left">
          <img
            src="https://www.rd.usda.gov/sites/default/files/styles/media_full_width/public/call-center-v2.jpg?itok=Ot_m2ZUx"
            alt="Contact"
            className="contact-image"
          />
        </div>
        <div className="contact-right">
          <h1>Contact Us</h1>
          <ul className="contact-list">
            <li>
              <FaPhone className="icon" />
              <span>91+ 9342351477</span>
            </li>
            <li>
              <FaEnvelope className="icon" />
              <span>Tharun2566@gmail.com</span>
            </li>
            <li>
              <FaMapMarkerAlt className="icon" />
              <span>
                USDA Rural Development, Servicing Office, PO Box 66889 St. Louis,
                MO 63166
              </span>
            </li>
          </ul>
          <a href="/1" className="view-all">
            View all Contact Us &rarr;
          </a>

          <h2>Get in Touch</h2>
          <p>
            Have questions or need assistance? Fill out the form below and we
            will get back to you as soon as possible.
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
