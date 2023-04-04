import './App.css';
import { DivComponent } from './DivComponent';

// Завдання 6
// Створіть компонент, що буде рендерити div, всередині якого є кнопка. Клацанням на div виведіть у консоль «Div clicked», а натисканням на кнопку – «Button clicked». Коли ви натиснете кнопку, то побачите «Button clicked» і «Div clicked», а маєте побачити тільки повідомлення від кнопки. Розв'яжіть цю проблему.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DivComponent />
      </header>
    </div>
  );
}

export default App;
