// src/components/UsersList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPage.css';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirm_password: '' });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/get');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch users.');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/delete/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      setError('Failed to delete user.');
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setFormData({
      username: user.username,
      email: user.email,
      password: user.password,
      confirm_password: user.confirm_password
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = async () => {
    try {
      const updatedUser = {
        ...editUser,
        ...formData
      };
      await axios.put(`http://localhost:8080/update/${editUser.id}`, updatedUser);
      setUsers(users.map(user => (user.id === editUser.id ? updatedUser : user)));
      setEditUser(null);
    } catch (error) {
      setError('Failed to update user.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="page-container">
      <h1 className="page-header">Registered Users</h1>
      <ul className="user-list">
        {users.map(user => (
          <div key={user.id} className="user-item-container">
            <li className="user-item">
              <div>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </div>
              <div>
                <button className="action-button" onClick={() => handleEdit(user)}>Edit</button>
                <button className="action-button delete" onClick={() => handleDelete(user.id)}>Delete</button>
              </div>
            </li>
          </div>
        ))}
      </ul>

      {editUser && (
        <div>
          <h2>Edit User</h2>
          <form className="edit-form">
            <label>
              Username:
              <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
            </label>
            <label>
              Confirm Password:
              <input type="password" name="confirm_password" value={formData.confirm_password} onChange={handleInputChange} />
            </label>
            <button type="button" className="save-button" onClick={handleSave}>Save</button>
            <button type="button" className="cancel-button" onClick={() => setEditUser(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UsersList;
