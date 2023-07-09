import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  
  const { searchValue,setSearchValue}=React.useContext(TodoContext)

  return (
    <input
      placeholder="Mi nueva tarea..."
      className="TodoSearch"
      onChange={(event) =>{
        setSearchValue(event.target.value);
        }}
    />
  );
}

export { TodoSearch };