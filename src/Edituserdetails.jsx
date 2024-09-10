import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Edituser.css';  // Ensure this file has the appropriate styles

function EditUserDetails() {
  const navigate = useNavigate();

  const handleSave = () => {
    // Add your save functionality here
    console.log('Changes saved!');
  };

  const handleDelete = () => {
    // Add your delete functionality here
    console.log('User deleted!');
  };

  return (
    <div className="homepage-container">
      <header className="navbar">
        <button className="nav-button" onClick={() => navigate('/profile')}>Hello User...</button>
        <button className="nav-button" onClick={() => navigate('/home')}>Home</button>
        <button className="nav-button" onClick={() => navigate('/register')}>Register New Passenger/Driver</button>
        <button className="nav-button orange-button" onClick={() => navigate('/edit-user')}>Edit User Details</button>
        <button className="nav-button" onClick={() => navigate('/reload-wallet')}>Reload Passenger E-Wallet</button>
        <button className="nav-button" onClick={() => navigate('/sos')}>SOS</button>
      </header>

      <div className="form-container">
        <input type="text" placeholder="Full Name" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="text" placeholder="Student / Staff ID" className="input-field" />
        <input type="text" placeholder="Contact No." className="input-field" />
        <input type="text" placeholder="Guardian's Contact No." className="input-field" />
        
        <div className="action-buttons">
          <input type="text" placeholder="Search by User ID / Email" className="input-field search-input" />
          <button className="nav-button" onClick={handleDelete}>Delete User</button>
          <button className="nav-button" onClick={handleSave}>Edit</button>
        </div>

        <button className="save-button" onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
}

export default EditUserDetails;
