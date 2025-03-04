import React from 'react'

export default function TodoCard(props) {
    const {children, handleDeleteTodo, index, handleEditTodo} = props
  return (
    
      <li className='todoItem'>
        {children}
        <div className='actionContainer'>
            <button onClick={() => {
                handleEditTodo(index)
            }}>
                <i className="fa-solid fa-pen-to-square icon"></i>
            </button>
            <button onClick={() => {
                handleDeleteTodo(index)
            }}>
                <i className="fa-solid fa-trash icon"></i>
            </button>
        </div>
      </li>
  )
}