import { useState } from 'react'
import './App.css'
import Todos from './components/Todos.jsx'
import TodosForm from './components/TodosForm.jsx'
import Search from './components/Search.jsx'
import Filter from './components/Filter.jsx'

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

  const removeTodo = (id) => {
    const attTodos = todos.filter(item => item.id !== id)
    setTodos(attTodos)
  }

  const completeTodo = (id) => {
    const completedTodos = [...todos]
    completedTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo )
    setTodos(completedTodos)
  }

  const [filter, setFilter] = useState("all")
  const [sort, setSort] = useState("asc")

  const [search, setSearch] = useState("")

  return <div className='app'>
    <h1>Lista de Tarefas com React</h1>
    <TodosForm addTodo={addTodo} />
    <br />
    <Search search={search} setSearch={setSearch} />
    <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
    <br />
    <div className='todo-list'>
      {todos
      .filter((todo) => filter === "all" ? true : filter === "completed" ? todo.isCompleted : !todo.isCompleted)
      .sort((a, b) => sort === "asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
      .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
        <Todos key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
      ))}
    </div>
  </div>
}

export default App
