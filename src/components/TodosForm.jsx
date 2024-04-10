import { useState } from 'react'
import { Input } from './InputComp.jsx'
import { FaPlusCircle } from "react-icons/fa";

const TodosForm = ({ addTodo }) => {
    const [categories, setCategories] = useState([
        {name: "Selecione uma categoria", value: "default"}, {name: "Trabalho", value: "work"}, {name: "Pessoal", value: "personal"}, {name: "Estudos", value: "study"}, {name: "Mercado", value: "marketplace"}
    ])
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [invalidForm, setInvalidForm] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        console.log(title, category)

        if (!title || !category) return setInvalidForm(true)

        addTodo(title, category)

        setCategory("");
        setTitle("")
    };
    const titleHandleChange = (e) => {
        setTitle(e.target.value)
    };

  return <div className='todo-form'>
    <h2>Criar tarefa</h2>
    <form onSubmit={handleSubmit} value={invalidForm}>
        {/* <input value={title} type="text" placeholder='Digite o título' onChange={(e) => setTitle(e.target.value)} /> */}
        <Input 
        id={"title-input"} 
        type={"text"} 
        placeholder={"Digite o título"} 
        value={title} 
        titleChange={titleHandleChange}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map(({name, value}, index) => (
                <option key={index} value={value}>{name}</option>
            ))}
        </select>
        <button type='submit' className='btn-submit'>Criar tarefa <FaPlusCircle /></button>
    </form>
  </div>
}

export default TodosForm;