import React from 'react';
import '../Styles/Users/Register.css';
import { signal } from '@preact/signals-react';
import axios from 'axios';

let first_name = signal('');
let last_name = signal('');
let username = signal('');
let password = signal('');

function Register() {

  let submitHandler = (e) => {
    e.preventDefault();
    let data = {
      'first_name': first_name,
      'last_name': last_name,
      'username': username,
      'password': password
    };
    axios.post('http://127.0.0.1:8000/register/', data).then(response => { console.log(response.data) });
  }

  return (
    <div className="register-container">
      <h1 className='reg-head'>REGISTER HERE</h1>
      <form className="register-form" onSubmit={submitHandler}>
        <label htmlFor="first_name">First Name:</label>
        <input type='text' id='first_name' name='f_name' value={first_name} onChange={(e) => (first_name.value = e.target.value)} /><br /><br />
        <label htmlFor="last_name">Last Name:</label>
        <input type='text' id='last_name' name='l_name' value={last_name} onChange={(e) => (last_name.value = e.target.value)} /><br /><br />
        <label htmlFor="username">Username:</label>
        <input type='text' id='username' name='username' value={username} onChange={(e) => (username.value = e.target.value)} /><br /><br />
        <label htmlFor="password">Password:</label>
        <input type='text' id='password' name='password' value={password} onChange={(e) => (password.value = e.target.value)} /><br /><br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Register;
