import { useState } from 'react';
import todosData from '../../assets/todos.json';
import { TodoItem } from './TodoItem';
import s from './TodoList.module.css';

export const TodoList = () => {

  const [todos, setTodos] = useState(todosData);

  const handleDeleteItem = id => {
    console.log(`Delete item logic ${id}`);
    const newData = todos.filter(item => item.id !== id);
    setTodos(newData);
  };

  return (
    <div>
      <div className='flex'>
        <input className={s.input} />
        <button className='btn border'>Add</button>
      </div>
      <ul className={s.list}>
        {todos.map(item => (
          <TodoItem key={item.id} {...item} handleDeleteItem={handleDeleteItem} />
        ))}
      </ul>
    </div>
  );
};