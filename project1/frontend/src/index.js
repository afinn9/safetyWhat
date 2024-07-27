import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Login from './Components/Login.jsx'
import Register from './Components/Register.js'
import UserHome from './Components/UserHome.js';
import UserList from './Components/UsersList.js'
import Sample2 from './Components/Sample2.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route index element={<App/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/userhome' element={<UserHome/>}/>
      <Route path='/userlist' element={<UserList/>}/>
      <Route path='/sample2' element={<Sample2/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
