import { useState } from 'react';
import todosData from '../../assets/todos.json';
import { TodoItem } from './TodoItem';
import s from './TodoList.module.css';
// ----------------------------------------------
export const TodoList = () => {
  const [todos, setTodos] = useState(todosData);
  const [todoVelue, setTodoValue] = useState('');
// ----------------------------------------------
  const handleDeleteItem = id => {
    console.log(`Delete item logic ${id}`);
    const newData = todos.filter(item => item.id !== id);
    setTodos(newData);
  };
// ----------------------------------------------
  const addTodo = () => {
    const newToDo = {
      id: crypto.randomUUID(),  
      todo: todoVelue,
      completed: false
    }
    setTodos([...todos, newToDo]);
    setTodoValue('');
  }

  const handleChangeInput = event => setTodoValue(event.target.value)
  // --------------------------------------------
  const hangleTogleTodo = id => {
    const newData = todos.map(item => (item.id === id ? {...item, completed: !item.completed} :item ));
    setTodos(newData);
  };
// ----------------------------------------------
  return (
    <div>
      <div className='flex'>
        <input value={todoVelue} onChange={handleChangeInput} className={s.input} />
        <button onClick={addTodo} className='btn border'>Add</button>
      </div>
      <ul className={s.list}>
        {todos.map(item => ( 
          <TodoItem key={item.id} {...item} handleDeleteItem={handleDeleteItem} hangleTogleTodo={hangleTogleTodo} />
        ))}
      </ul>
    </div>
  );
};