import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

// ESTADOS


function TodoProvider({children}){

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1',[]);
  const [searchValue, setSearchValue] = React.useState("");

  const [openModal, setOpenModal] = React.useState(false);

  const [saveNewTodo, setSaveNewTodo] = React.useState("");

  //BUSCAMOS CUANTOS TODOS ESTAN MARCADOS COMO COMPLETADOS
  const completedTodos = todos.filter(todo => todo.completed).length;
  //CUANTOS TODOS EXISTEN ACTUALMENTE
  const totalTodos = todos.length;

  //BUSCADOR DE LOS TODOS 

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText =  searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  //MARCAMOS O DESMARCAMOS LOS TODOS COMPLETADOS
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    )
    newTodos[todoIndex].completed === false
			? (newTodos[todoIndex].completed = true)
			: (newTodos[todoIndex].completed = false);
      saveTodos(newTodos)
  }

  //BORRAMOS LOS TODOS
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    )
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }

  //AGREGAR UN TODO
  const addTodo =  (text) =>{
    const newTodos = [...todos];
    newTodos.push({
      text: text,
      complete: false,
    })
    saveTodos(newTodos);
  }

    return (
        <TodoContext.Provider
        value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            saveNewTodo,
            setSaveNewTodo,
            addTodo,
        }}>
          {children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider }
