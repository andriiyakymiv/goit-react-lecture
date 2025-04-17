import s from './TodoList.module.css';

export const TodoItem = ({ id, completed, todo, handleDeleteItem, hangleTogleTodo }) => {
  return (
    <li className={s.item}>
      <input checked={completed} onChange={() => hangleTogleTodo(id)} type='checkbox' />
      <span>{todo}</span>
      <button onClick={() => handleDeleteItem(id)} className='btn border'>Delete</button>
    </li>
  );
};