import React from 'react';
import Navbar from './Navbar';
import SearchUser from './SearchUser';
import '../Styles/Users/UserHome.css';

function UserHome() {


  return (
    <div  className="userhome-container">    
        <Navbar />
        <SearchUser />
    </div>

  );
}

export default UserHome;
