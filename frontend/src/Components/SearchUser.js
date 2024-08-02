import React, { useState, useEffect } from 'react';
import { signal } from '@preact/signals-react';
import '../Styles/Users/SearchUser.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Register from './Register'; // Import the Register component

let data = signal('');
let state = signal(false);

function SearchUser() {
  const [list, setList] = useState([]);
  const [user, setUser] = useState([]);
  const [showRegister, setShowRegister] = useState(false); // State to control the rendering of the Register component

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/userlist/').then(response => {
      console.log(response.data.data);
      setList(response.data.data);
    });
  }, []);

  const SearchHandler = () => {
    const foundUser = list.find(obj => obj.first_name.toLowerCase() + " " + obj.last_name.toLowerCase() === data.value.toLowerCase());
    if (foundUser) {
      state.value = true;
      setUser(foundUser);
    } else {
      setUser('User not found');
    }
  };

  const navigate = useNavigate();
  const LogoutHandler = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    navigate('/login', { replace: true });
  };

  const AddUserHandler = () => {
    setShowRegister(true); // Show the Register component
  };

  return (
    <div className="search-container">
      {showRegister ? (
        <Register /> // Render the Register component if showRegister is true
      ) : (
        <div>
          <input
            type="text"
            value={data}
            onChange={(e) => { data.value = e.target.value; }}
            className="search-bar"
            placeholder="search here..."
          />
          <button onClick={SearchHandler} className="search-button">Search</button>
          <button onClick={LogoutHandler} className="logout-button">
            Logout
          </button>
          <button onClick={AddUserHandler} className="logout-button">Add User</button>
        </div>
      )}
      {!showRegister && (
        <div className="user-details">
          {state.value ? (
            <div>
              <h3>User Found</h3>
              <p>First Name: {user.first_name}</p>
              <p>Last Name: {user.last_name}</p>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </div>
          ) : (
            user === 'User not found' ? <p>User not found</p> : null
          )}
        </div>
      )}
    </div>
  );
}

export default SearchUser;
