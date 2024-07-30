import React from 'react';
import Navbar from './Navbar';
import SearchUser from './SearchUser';
import '../Styles/Users/UserHome.css'; // Import your CSS file

function UserHome() {
  return (
    <div className="userhome-container">
      <Navbar />
      <div className="main-content">
        <SearchUser />
      </div>
    </div>
  );
}

export default UserHome;
