import React from 'react'

const initialValue = { count: 0 };
const reducerfunction = (state,action) => {
    switch(action.type) {
        case "Increment":
            state.count=state.count + 1;
        case "Decrement":
            state.count=state.count - 1;
        case "Reset":
            state.count = 0;
        default:
            state.count = 0;
    }
}

//reducer function
    const Reducer = () => {
        const [count, dispatch] = useReducer(reducefunction, initialValue);
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({type:"Decrement"})}>Decrement</button>
        <button onClick={() => dispatch({type:"Reset"})}>Reset</button>
        <button onClick={() => dispatch({type:"Increment"})}>Increment</button>
    </div>
  )
}

export default Reducer
