import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';


const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true},
  { text: 'Tomar curso React.js', completed: true},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'LALALALALA', completed: true},
  { text: 'LOLOLOLO', completed: true}
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState();
  console.log(searchValue)
  
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text;
      const searchText = searchValue;
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text == text
    )
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)
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
          />))}
      </TodoList>  
         
     <TodoCreateButton 
        
     />

    </React.Fragment>
  );
}









export default App;
