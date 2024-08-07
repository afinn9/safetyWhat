import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Users/UserList.css'

function UsersList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/userlist/').then((response) => {
      console.log(response.data.data);
      setData(response.data.data);
    });
  }, []);

  return (
    <div className="users-table-container">
      <h1>USERS LIST</h1>
      <table className="users-table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj, index) => (
            <tr key={index}>
              <td>{obj.first_name}</td>
              <td>{obj.last_name}</td>
              <td>{obj.email}</td>
              <td>{obj.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
