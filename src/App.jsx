import { useState } from 'react'
import './App.css'
import Todos from './components/Todos.jsx'
import TodosForm from './components/TodosForm.jsx'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar react",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Date.now(),
      text,
      category,
      isCompleted: false
    }];
    setTodos(newTodos);
  }

  return <div className='app'>
    <h1>Lista de Tarefas com React</h1>
    <TodosForm addTodo={addTodo} />
    <div className='todo-list'>
      {todos.map((todo) => (
        <Todos key={todo.id} todo={todo} />
      ))}
    </div>
  </div>
}

export default App
