import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../Styles/Navbar.css'
// import { signal } from '@preact/signals-react';

// let data = signal([]);
// let array=[]

function Navbar() {
  let [data,setData]=useState([])
  useEffect(()=>{
    
    axios.get('http://127.0.0.1:8000/navbar/').then(response => {
        setData(response.data.data);
        // console.log(data)
    })
  },[])

  let navigate=useNavigate()

  let LogoutHandler=()=>{
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    navigate('/login',{replace:true})
  }
       

  return (
    <div className='navbar-container'>
      <h3 >SafetyWhat</h3>
      <hr width="100%" color="green" />
      <div className='navbar-items'>
      {
        data.map((obj, index) => (
          <h3 key={index} className='items'>{obj.name}</h3>
        ))
      }
      </div>
      <button onClick={LogoutHandler} className='logout-button'>Logout</button>
    </div>
  );
}

export default Navbar
