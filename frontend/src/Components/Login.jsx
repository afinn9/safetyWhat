import React from 'react';
import '../Styles/Users/Login.css';
import { signal } from "@preact/signals-react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {

    let username = signal("");
    let password = signal("");
    let message = signal("");

    let navigate = useNavigate();
    let SubmitHandler = async (e) => {
        e.preventDefault();
        let data = { "username": username.value, "password": password.value };
        console.log(username, password);
        await axios.post('http://127.0.0.1:8000/login/', data)
            .then(response => {
                const { access,refresh } = response.data;

                console.log("access:",access)
                console.log("refresh:",refresh)
                localStorage.setItem('accessToken', access);
                localStorage.setItem('refreshToken', refresh);
                response.data.status ? navigate('/userhome') : message.value = 'invalid username or password';

            });

            
    }

    return (
        <div className='container'>
            <h1>LOGIN HERE</h1><br/>
            <div className='box-container'>
                <form onSubmit={SubmitHandler}>
                    <label>Username:</label>
                    <input type='text' value={username} onChange={(e) => (username.value = e.target.value)} className='text-box' /><br /><br />
                    <label>Password:</label>
                    <input type='password' value={password} onChange={(e) => (password.value = e.target.value)} className='text-box' /><br /><br /><br />
                    <input type='submit' name='submit' className='submit'/><br /><br />
                    {message}
                </form>
            </div>
        </div>
    )
}

export default Login;
