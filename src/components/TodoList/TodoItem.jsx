import s from './TodoList.module.css';

export const TodoItem = ({ id, completed, todo, handleDeleteItem }) => {
  return (
    <li className={s.item}>
      <input type='checkbox' />
      <span>{todo}</span>
      <button onClick={() => handleDeleteItem(id)} className='btn border'>Delete</button>
    </li>
  );
};