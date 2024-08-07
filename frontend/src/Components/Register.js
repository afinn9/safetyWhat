import React from 'react';
import '../Styles/Users/Register.css';
import { signal } from '@preact/signals-react';
import axios from 'axios';

let first_name = signal('');
let last_name = signal('');
let username = signal('');
let password = signal('');
let email = signal('');
let status = signal(false);

function Register() {
  let submitHandler = (e) => {
    e.preventDefault();
    let data = {
      'first_name': first_name.value,
      'last_name': last_name.value,
      'username': username.value,
      'password': password.value,
      'email': email.value
    };
    axios.post('http://127.0.0.1:8000/add_user/', data)
      .then(response => { 
        console.log(response.data);
        status.value = true;
      })
      .catch(error => {
        console.error("There was an error!", error.response.data); // Log the error details
      });
  }

  return (
    <div className="register-container">
      <h1 className='reg-head'>ADD USERS</h1>
      <form className="register-form" onSubmit={submitHandler}>
        <label>First Name:</label>
        <input type='text' id='first_name' name='f_name' value={first_name} onChange={(e) => (first_name.value = e.target.value)} /><br /><br />
        <label>Last Name:</label>
        <input type='text' id='last_name' name='l_name' value={last_name} onChange={(e) => (last_name.value = e.target.value)} /><br /><br />
        <label>Email:</label>
        <input type='text' id='email' name='email' value={email} onChange={(e) => (email.value = e.target.value)} /><br /><br />
        <label>Username:</label>
        <input type='text' id='username' name='username' value={username} onChange={(e) => (username.value = e.target.value)} /><br /><br />
        <label>Password:</label>
        <input type='text' id='password' name='password' value={password} onChange={(e) => (password.value = e.target.value)} /><br /><br />
        <input type='submit' value='Submit' />
      </form>
      {status.value && <h3>Added User Successfully</h3>}
    </div>
  );
}

export default Register;
