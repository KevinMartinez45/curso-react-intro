import './TodoItem.css';
import { CompleteIcon } from "../TodoIcon/CompleteTodoIcon";
import { DeleteIcon } from "../TodoIcon/DeleteTodoIcon";


function TodoItem(props) {
  return (
    <li className="TodoItem">

      <CompleteIcon className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={props.onComplete}
      >
      </CompleteIcon>

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon className="Icon Icon-delete" onClick={props.ondelete}>
      </DeleteIcon>

    </li>
  );
}

export { TodoItem };