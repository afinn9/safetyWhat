import React, { useState, useEffect } from 'react';
import { signal } from '@preact/signals-react';
import '../Styles/Users/UserContent.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Register from './Register'; 
import UsersList from './UsersList';
import ImageUploader from './ImageUploader'

let data = signal('');
let state = signal(false);

function SearchUser() {
  const [list, setList] = useState([]);
  const [user, setUser] = useState([]);
  const [showRegister, setShowRegister] = useState(false); 
  const [usersList, setUsersList] = useState(false); 
  const [imgUpload, setImgUpload] = useState(false); 
  
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
    setShowRegister(!showRegister); 
  };

  const UsersListHandler=()=>{
    setUsersList(!usersList)
  }

  const ImgUploadHandler=()=>{
    setImgUpload(!imgUpload)
  }

  return (
    <div className="search-container">
      <div className="search-bar-container">
        <input
          type="text"
          value={data}
          onChange={(e) => { data.value = e.target.value; }}
          className="search-bar"
          placeholder="search here..."
        />
        <button onClick={SearchHandler} className="button">Search</button>
        <button onClick={AddUserHandler} className="button">Add User</button>
        <button onClick={UsersListHandler} className="button">Users List</button>
        <button onClick={LogoutHandler} className="button">Logout</button>
        <button onClick={ImgUploadHandler} className="button">Upload Img</button>
      </div>
      
      {!showRegister && (
        <div className="user-details">
          {state.value ? (
      <div className="user-details">
      {user && user !== 'User not found' && (
        <table className="user-details-table">
          <thead>
            <tr>
              <th colSpan="2">User Found</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First Name:</td>
              <td>{user.first_name}</td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>{user.last_name}</td>
            </tr>
            <tr>
              <td>Username:</td>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        </table>
      )}
      {user === 'User not found' && <p>User not found</p>}
    </div>
          ) : (
            user === 'User not found' ? <p>User not found</p> : null
          )}
        </div>
      )}
      
      {showRegister && (
        <div className="register-container">
          <Register /> 
        </div>
      )}

      {usersList && (
        <div>
          <UsersList /> 
        </div>
      )}

      {imgUpload && (
        <div>
          <ImageUploader/>
        </div>
      )}
    </div>
  );
}



export default SearchUser;
