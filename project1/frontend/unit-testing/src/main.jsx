import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Sample2 from '../../src/Components/Sample2.jsx'
import Login from '../../src/Components/Login.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route index element={<App/>}/>
      <Route path='/Sample2' element={<Sample2/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
