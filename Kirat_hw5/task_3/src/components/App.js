import './App.css';
import ConvertNumber from './ConvertNumber';

// Завдання 3
// Створіть компонент із двома контрольованими компонентами, які рендерять. Вони повинні приймати тільки числа. Після того, як користувач вводить число до input, його вміст виводиться в блоці під ним з конвертацією - number * 0,5 та number * 0,05 відповідно.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ConvertNumber />
      </header>
    </div>
  );
}

export default App;
