import React from 'react'
import './TodoCreateButton.css'
import { TodoContext } from '../TodoContext';


function TodoCreateButton() {
  const {
    setOpenModal,
    openModal,
    saveNewTodo,
    addTodo,
  } = React.useContext(TodoContext)

  return (
      (saveNewTodo === "") ?
      <button className='CreateTodoButton'
      onClick={() => {setOpenModal(!openModal)}}> 
        Agregar
      </button>
      :
      <button className='CreateTodoButton'
      onClick={() => addTodo(saveNewTodo)}> 
        Agregar
      </button>
      
      

  )
}

export  {TodoCreateButton}  