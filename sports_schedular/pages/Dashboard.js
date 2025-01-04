import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Dashboard specific CSS

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to your Dashboard</h2>
      <div className="dashboard-actions">
        <Link to="/create-game" className="btn btn-success">Create New Game</Link>
        <Link to="/manage-teams" className="btn btn-info">Manage Teams</Link>
        <Link to="/view-schedule" className="btn btn-warning">View Schedule</Link>
      </div>
    </div>
  );
};

export default Dashboard;
