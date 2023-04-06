import './App.css';
import CounterThree from './CounterThree';

// Завдання 4
// Модифікуйте компонент із завдання 3 так, щоби він не збільшував число, якщо воно більше 3. Використовуйте для цього shouldComponentUpdate.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterThree />
      </header>
    </div>
  );
}

export default App;
