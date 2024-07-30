import React from 'react'
import { signal } from '@preact/signals-react'
import axios from 'axios'


let first_name=signal('')
let last_name=signal('')
let username=signal('')
let password=signal('')
function Register() {

  let submitHandler=(e)=>{
    e.preventDefault()
    let data={'first_name':first_name,"last_name":last_name,"username":username,"password":password}
    axios.post('http://127.0.0.1:8000/register/',data).then(response=>{console.log(response.data)})
  }

  return (
    <div>
    <form onSubmit={submitHandler}>
      First Name:<input type='text' name='f_name' value={first_name} onChange={(e)=>(first_name.value=e.target.value)}/><br/><br/>
      Last Name:<input type='text' name='l_name' value={last_name} onChange={(e)=>(last_name.value=e.target.value)}/><br/><br/>
      Username:<input type='text' name='username' value={username} onChange={(e)=>(username.value=e.target.value)}/><br/><br/>
      Password:<input type='text' name='password' value={password} onChange={(e)=>(password.value=e.target.value)}/><br/><br/>
      <input type='submit' name='submit'/>
    </form>
    
    </div>
  )
}

export default Register
