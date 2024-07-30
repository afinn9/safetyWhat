import React, { useState, useEffect } from 'react';
import { signal } from '@preact/signals-react';
import '../Styles/Users/SearchUser.css';
import axios from 'axios';

let data = signal('');
let state = signal(false)

function SearchUser() {
  let [list, setList] = useState([]);
  let [user,setUser]= useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/userlist/').then(response => {
      console.log(response.data.data);
      setList(response.data.data);
    });
  }, []);

  let SearchHandler = () => {
    
    const foundUser = list.find(obj => obj.first_name.toLowerCase()+" "+obj.last_name.toLowerCase() === data.value.toLowerCase());
    if (foundUser) {
      state.value=true
      setUser(foundUser);
    } else {
      setUser('User not found');
    }

  };
  console.log(state.value)

  return (
    <div className="search-container">
      <div>
        <input
          type="text"
          value={data}
          onChange={(e) => { data.value = e.target.value; }}
          className="search-bar"
          placeholder="search here..."
        />
        <button onClick={SearchHandler} className="search-button">Search</button>
      </div>
   
        <div className="user-details">
          { state.value ?( 
            <div>
              <h3>User Found</h3>
              <p>First Name: {user.first_name}</p>
              <p>Last Name: {user.last_name}</p>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </div> ): (user === null ? <p>User not found</p> : null
        )
          }
        </div>
      
    </div>
  );
}

export default SearchUser;
