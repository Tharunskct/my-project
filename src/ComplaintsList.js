import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ComplaintsList.css';

function ComplaintsList() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/complaints');
        setComplaints(response.data);
      } catch (error) {
        console.error('There was an error fetching the complaints!', error);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div>
      <div className="complaints-list-container">
        <h1>All Customer Complaints</h1>
        {complaints.length === 0 ? (
          <p>No complaints found.</p>
        ) : (
          <ul className="complaints-list">
            {complaints.map((complaint) => (
              <li key={complaint.id} className="complaint-item">
                <p><strong>Name:</strong> {complaint.name}</p>
                <p><strong>Mobile:</strong> {complaint.mobile}</p>
                <p><strong>Email:</strong> {complaint.email}</p>
                <p><strong>Address:</strong> {complaint.address}</p>
                <p><strong>Location:</strong> {complaint.location}</p>
                <p><strong>Issue:</strong> {complaint.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ComplaintsList;
