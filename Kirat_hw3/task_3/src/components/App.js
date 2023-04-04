import './App.css';
import { ClickCounter } from './ClickCounter';

// Завдання 3
// Створіть компонент, який виводитиме 2 кнопки та лічильник. Клацанням на кнопку «+» лічильник збільшується, а натисканням на кнопку «-» – зменшується.

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ClickCounter />
      </header>
    </div>
  );
}

export default App;
