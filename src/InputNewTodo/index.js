import React from 'react'
import { TodoContext } from '../TodoContext';
import './InputNewTodo.css'

function InputNewTodo() {

  const {setSaveNewTodo}=React.useContext(TodoContext);

  const onChange = (event) => (
    setSaveNewTodo(event.target.value)
  )

  

  return (
    <input type='text' className='InputStyle' placeholder='Mi nueva tarea es...'
    onChange={onChange}>
    </input>
  )
}

export {InputNewTodo}