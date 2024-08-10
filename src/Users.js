// src/pages/Users.js
import React, { useContext } from "react";
import { UserContext } from "./UserContext"; // Import UserContext
import "./Users.css"; // Import any additional styling

const Users = () => {
  const { users } = useContext(UserContext); // Destructure users from context

  return (
    <div className="users-page">
      <h2>Logged In Users</h2>
      <p>Total Users: {users.length}</p> {/* Display the total number of users */}
      {users.length > 0 ? (
        <ul className="users-list">
          {users.map((user, index) => (
            <li key={user.id} className="user-item">
              {index + 1}. {user.username} {/* Display user number and name */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users have logged in yet.</p>
      )}
    </div>
  );
};

export default Users;
