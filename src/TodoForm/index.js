import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoForm.css'


function TodoForm() {

  const {
    setOpenModal
  } = React.useContext(TodoContext)

  return (
    <form>
        <label>ERROR</label>
        <p>Coloca alguna tarea</p>
      
      <button
          type='button'
          className='AcceptBtn'
          onClick={() => setOpenModal(false)}
      >
            Aceptar
      </button>
    </form>
  )
}

export {TodoForm}