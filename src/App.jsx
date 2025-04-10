import './App.css';
import { ColorPicker } from './components/ColorPicker/ColorPicker';
import { Counter } from './components/Counter/Counter';

function App() {
  return (
    <>
      <h2>Color Picker</h2>
      <ColorPicker />
      <hr />
      <h2>Counter</h2>
      <Counter />
    </>
  );
};

export default App;