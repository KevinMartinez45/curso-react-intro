import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (

    (total !== completed) ? 
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
    :
    (total > 0) ? 
    <h1 className="TodoCounter">
      <span>Felicidades has completado todos los todos</span>
    </h1> 
    :
    <h1 className="TodoCounter">
      <span>Comienza agregando Todos</span>
    </h1> 
  );
}

export { TodoCounter };