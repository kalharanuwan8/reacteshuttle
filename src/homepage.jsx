import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css'; // Ensure the CSS file is in the same directory

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="navbar">
        <button className="nav-button" onClick={() => alert('Hello User...')}>
          Hello User...
        </button>
        <button className="nav-button orange-button" onClick={() => navigate('/')}>
          Home
        </button>
        <button className="nav-button" onClick={() => navigate('/register')}>
          Register New<br />Passenger/Driver
        </button>
        <button className="nav-button" onClick={() => navigate('/edit-user')}>
          Edit User Details
        </button>
        <button className="nav-button" onClick={() => navigate('/reload')}>
          Reload Passenger<br />E-Wallet
        </button>
        <button className="nav-button" onClick={() => navigate('/sos')}>
          SOS
        </button>
      </div>
      <div className="content">
        {/* Main content area */}
      </div>
    </div>
  );
}

export default Homepage;
