import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput.jsx"
import TodoList from "./components/TodoList.jsx"

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState("")

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({
      todos : newList 
    }))
  }

  function handleAddTodos(newTodos){
    const newTodoList = [...todos, newTodos]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if(!localStorage){
      return
    }
    let localTodos =localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos =JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
    <main>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <br />
      <TodoList todos = {todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
    </main>
    </>
  )
}

export default App
