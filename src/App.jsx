import './App.css';
import { ColorPicker } from './components/ColorPicker/ColorPicker';
import { Counter } from './components/Counter/Counter';
import { TodoList } from './components/TodoList/TodoList';
import Voting from './components/Voting/Voting';

function App() {
  return (
    <>
      <Voting />
      <hr />
      <h2>ToDo List</h2>
      <TodoList />
      <hr />
      <h2>Color Picker</h2>
      <ColorPicker />
      <hr />
      <h2>Counter</h2>
      <Counter />
    </>
  );
};

export default App;