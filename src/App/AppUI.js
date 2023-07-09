import React from 'react';

import { ContainerPadre } from '../container/index'
import { TodoCounter } from '../TodoCounter';
import { InputNewTodo } from '../InputNewTodo'
import { TodoSearch } from '../TodoSearch';
import { ContainerMostrar } from '../container/ContainerMostrar'
import {ContainerAgregar} from '../container/ContainerAgregar'
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCreateButton } from '../TodoCreateButton'
import { TodosLoading } from '../TodoIcon/LoadingTodosIcon';
import { SadIcon }  from '../TodoIcon/SadIcon';
import { NotFoundIcon } from '../TodoIcon/NotFoundIcon';
import { TodoContext } from '../TodoContext';


function AppUI({}){

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo
  } = React.useContext(TodoContext)

    return (

    <React.Fragment >
      <ContainerPadre>
        <ContainerAgregar>
          
          <TodoCounter />
          <InputNewTodo />
          <TodoCreateButton />
        
        </ContainerAgregar>
        
        <ContainerMostrar>
        <TodoSearch />


            <TodoList>
              {loading && <TodosLoading/>}
              {error && <SadIcon />}
              {(!loading && !searchedTodos.length) && <NotFoundIcon/>}
            
              {searchedTodos.map(todo =>(
                <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                ondelete={() => deleteTodo(todo.text)}
                />))}
           </TodoList> 
        </ContainerMostrar>    
          
        </ContainerPadre>
    </React.Fragment>)
    
}

export { AppUI }