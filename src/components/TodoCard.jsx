import React from 'react'

export default function TodoCard(props) {
    const {children} = props
  return (
    
      <li className='todoItem'>
        {children}
        <div className='actionContainer'>
            <i className="fa-solid fa-pen-to-square icon"></i>
            <i className="fa-solid fa-trash icon"></i>
        </div>
      </li>
  )
}