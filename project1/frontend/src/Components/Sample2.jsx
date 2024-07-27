import { useState } from "react"
import {useNavigate} from "react-router-dom"

function Sample2() {
  let [count,setCount]=useState(0)
  const navigate=useNavigate()
  return (
    <div>
    <h1>Hello</h1>
      <span data-testid="span">{count}</span>
      <input type="text"></input>
      <button onClick={()=>{setCount(count+1)}}>
      <button onClick={()=>{navigate('/login')}}>login</button>
        increment
      </button>
    </div>
  )
}

export default Sample2