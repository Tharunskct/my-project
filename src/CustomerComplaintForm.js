import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './CustomerComplaintForm.css';
import axios from 'axios';

function Complaint() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    location: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/complaints', form);
      console.log('Complaint submitted:', response.data);
      navigate('/comf'); // Navigate to the complaints page
    } catch (error) {
      console.error('There was an error submitting the complaint!', error);
      alert('Submission failed');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h1>Customer Complaint Form</h1>
        <form onSubmit={handleSubmit} className="complaint-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" id="mobile" name="mobile" value={form.mobile} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea id="address" name="address" value={form.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="location">Current Location</label>
            <select id="location" name="location" value={form.location} onChange={handleChange} required>
              <option value="">Select your location</option>
              <option value="rural">Rural</option>
              <option value="urban">Urban</option>
              <option value="suburban">Suburban</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Issue</label>
            <textarea id="description" name="description" value={form.description} onChange={handleChange} required />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Complaint;
