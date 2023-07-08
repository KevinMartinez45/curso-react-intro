import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';


function App() {
  let parsedTodos;
  if(!localStorage.getItem('TODOS_V1')){
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorage.getItem('TODOS_V1'));
  }
  

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");
  console.log(searchValue)
  
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos)
  };


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    )
    newTodos[todoIndex].completed === true
			? (newTodos[todoIndex].completed = false)
			: (newTodos[todoIndex].completed = true);
      saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text == text
    )
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }

  

  return (
    <React.Fragment>

   <TodoCounter 
      completed = {completedTodos}
      total = {totalTodos}
      />

    <TodoSearch 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
    />
      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          ondelete={() => deleteTodo(todo.text)}
          />))}
      </TodoList>  
         
     <TodoCreateButton 
        
     />

    </React.Fragment>
  );
}

export default App;
