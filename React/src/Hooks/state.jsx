import React, { useState } from 'react'

const State = () => {
    const [count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(count+1);
    }  
    const handleDecrement=()=>{
        setCount(count-1);
    }
    const handleReset =()=>{
        setCount(0);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onclick={}>Decrement</button>
        <button>Increment</button>
    </div>
  )
}

export default 