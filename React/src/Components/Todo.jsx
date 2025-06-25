import React from 'react'

const Todo = () => {
  return (
    <div>
        <h1>Todo</h1>
        <input type="text" 
        value={task}
        placeholder='Enter the task'
        />
        <button>Add</button>
    </div>
  )
}

export default Todo