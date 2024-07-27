import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Users/Home.css'
import safetyimg from '../Images/safetywhat.png'


function Home() {

    const navigate=useNavigate()

    let ButtonHandler=(data)=>{
        switch(data){
            case 'login':
                navigate('/login')
                break
            case 'register':
              navigate('/register')
              break
            case 'userlist':
              navigate('/userlist')
              break
            default:
                console.log("No matches ")
        }
    }
  return (
    <div className='page'>
      
      <img src={safetyimg} alt="safety img"/>
      <div className='button-container'>
        <button onClick={()=>ButtonHandler('login')} className='button'>Login</button><br/><br/>
        <button onClick={()=>ButtonHandler('register')} className='button'>Register</button><br/><br/>
        <button onClick={()=>ButtonHandler('userlist')} className='button'>Users List</button>
      </div>
    </div>
  )
}

export default Home
