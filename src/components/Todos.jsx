import { FaTrash, FaRegCheckCircle } from 'react-icons/fa';
const todos = ({todo, removeTodo, completeTodo }) => {
  return (
    <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
          <div className='content'>
            <p>{todo.text}</p>
            <p className='category'>({todo.category})</p>
          </div>
          <div>
            <button className='complete' onClick={() => completeTodo(todo.id)}><FaRegCheckCircle width={200} /></button>
            <button className='remove' onClick={() => removeTodo(todo.id)}><FaTrash /></button>
          </div>
        </div>
  )
}

export default todos