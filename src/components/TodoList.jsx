import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
    let todos = [
        "go to the gym",
        "pick up the bus",
        "Eat fruits and vegetables"
    ]
  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
            <TodoCard key={todoIndex}>
                <p>{todo}</p>
            </TodoCard>
        )
      })}
    </ul>
  )
}