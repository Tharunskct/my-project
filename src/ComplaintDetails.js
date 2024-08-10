import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import './ComplaintDetails.css';

function ComplaintDetails() {
  const location = useLocation();
  const { form } = location.state || {};

  return (
    <div>
      <Navbar />
      <div className="details-container">
        <h1>Complaint Details</h1>
        {form ? (
          <div className="details-content">
            <p><strong>Name:</strong> {form.name}</p>
            <p><strong>Mobile Number:</strong> {form.mobile}</p>
            <p><strong>Email ID:</strong> {form.email}</p>
            <p><strong>Address:</strong> {form.address}</p>
            <p><strong>Current Location:</strong> {form.location}</p>
            <p><strong>Issue:</strong> {form.description}</p>
          </div>
        ) : (
          <p>No complaint details available.</p>
        )}
      </div>
    </div>
  );
}

export default ComplaintDetails;