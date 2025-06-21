import React, { useState,useState } from 'react'

const Effect = () => {
    const [count,setCount]=useState(0);

    useEffect(() => {
        setTimeout(() =>{
            setCount(count+1);
        }, 2000);
    },[count]);
   
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

export default Effect;