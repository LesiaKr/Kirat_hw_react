import './App.css';
import Counter from './Counter';

// Завдання 3
// Створіть компонент, який виводитиме на екран збільшене число щоразу, коли спрацьовує подія componentDidUpdate.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
