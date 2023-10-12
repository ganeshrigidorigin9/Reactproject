import React from 'react'
import {useState} from 'react'
const Counter = () => {
    const[name,setname]=useState(0)
    function increment(){
        setname(name+1)
    }
    function decrement(){
        setname(name-1)
    }
  return (
   <div style={{textAlign:'center'}}>
   <p>{name}</p>
   <button onClick={increment}>Increment</button>
   <button onClick={decrement}>Decrement</button>
   </div>
  )
}

export default Counter