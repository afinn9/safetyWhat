import { useState } from "react"

function Sample2() {
  let [count,setCount]=useState(0)
  return (
    <div>
    <h1>Hello</h1>
      <span data-testid="span">{count}</span>
      <input type="text"></input>
      <button onClick={()=>{setCount(count+1)}}>
        increment
      </button>
      {/* <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> */}
    </div>
  )
}

export default Sample2