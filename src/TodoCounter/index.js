import './TodoCounter.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

  const { completedTodos,totalTodos}=React.useContext(TodoContext)

  return (

    (totalTodos !== completedTodos) ? 
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
    :
    (totalTodos > 0) ? 
    <h1 className="TodoCounter">
      <span>Felicidades has completado todos los todos</span>
    </h1> 
    :
    <h1 className="TodoCounter">
      <span>...</span>
    </h1> 
  );
}

export { TodoCounter };