import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Custom CSS for Home

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to the Sports Scheduler!</h1>
        <p>Your one-stop platform to manage teams, schedules, and stay on top of upcoming games.</p>
        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/register" className="btn btn-secondary">Register</Link>
      </div>

      <div className="features-section">
        <h2>Key Features</h2>
        <div className="features">
          <div className="feature-card">
            <i className="fa fa-users fa-3x"></i>
            <h3>Team Management</h3>
            <p>Create and manage teams, add players, and track performance.</p>
          </div>
          <div className="feature-card">
            <i className="fa fa-calendar fa-3x"></i>
            <h3>Game Scheduling</h3>
            <p>Create, view, and edit game schedules with ease.</p>
          </div>
          <div className="feature-card">
            <i className="fa fa-bell fa-3x"></i>
            <h3>Notifications</h3>
            <p>Get reminders and stay updated with game notifications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
