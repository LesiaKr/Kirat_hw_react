import './App.css';
import ControlForm from './ControlForm';

// Завдання 2
// Створити компонент форми з трьома контрольованими вводами. Після відправки форми – сторінка не перезавантажується, а вміст полів виводиться у вигляді json під формою (json-об'єкт потрібно перевести в рядок).

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ControlForm />
      </header>
    </div>
  );
}

export default App;
