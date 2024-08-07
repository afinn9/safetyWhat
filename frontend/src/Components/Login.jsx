import React from 'react';
import '../Styles/Users/Login.css';
import { signal } from "@preact/signals-react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

    let email = signal("");
    let password = signal("");
    let message = signal("");

    let navigate = useNavigate();
    let SubmitHandler = async (e) => {
        e.preventDefault();
        let data = { "username": email.value, "password": password.value };
        console.log(email, password);
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
        <div className='login-container'>
            <h1 className='head' data-testid="head">LOGIN HERE</h1><br/>
                <form onSubmit={SubmitHandler}>
                    <label>email :</label>
                    <input type='text' value={email} onChange={(e) => (email.value = e.target.value)} placeholder='Enter Email' className='text-box' /><br /><br />
                    <label>Password :</label>
                    <input type='password' value={password} onChange={(e) => (password.value = e.target.value)} placeholder='Enter Password' className='text-box' /><br /><br /><br /><br/>
                    <input type='submit' value='Submit' className='submit'/><br /><br />
                    {message}
                </form>
        </div>
    )
}

export default Login;
