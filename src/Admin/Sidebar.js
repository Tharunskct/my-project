import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaChartBar, FaDonate } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/aduser"><FaUser /> Users</Link>
        </li>
        <li>
          <Link to="/clist"><FaChartBar /> Complaint Reports</Link>
        </li>
        <li>
          <Link to="/dlist"><FaDonate /> Donate Report</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
