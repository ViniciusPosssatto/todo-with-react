import { FaTrash, FaRegCheckCircle } from 'react-icons/fa';
const todos = ({todo}) => {
  return (
    <div className='todo'>
          <div className='content'>
            <p>{todo.text}</p>
            <p className='category'>{todo.category}</p>
          </div>
          <div>
            <button className='complete'><FaRegCheckCircle width={200} /></button>
            <button className='remove'><FaTrash /></button>
          </div>
        </div>
  )
}

export default todos