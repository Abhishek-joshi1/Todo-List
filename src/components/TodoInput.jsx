import React, { useState } from 'react'

export default  function TodoInput(props) {
    const {handleAddTodos, todoValue, setTodoValue} = props
    
  return (
    <div>
      <header>
        <input placeholder='Enter Todo...' value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value)
        }}></input>
        <button onClick={() => {
            handleAddTodos(todoValue)
            setTodoValue("")
        }}>Add</button>
      </header>
    </div>
  )
}