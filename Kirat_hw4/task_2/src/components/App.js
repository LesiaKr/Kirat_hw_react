import './App.css';
import HideVisible from './HideVisible';

// Завдання 2
// Створіть компонент, який з'являтиметься натисканням на кнопку та ховатиметься під час ще одного натискання. Після додайте методи життєвого циклу, у яких запускатиметься код, що показує «alert()» з інформацією про те, що компонент закрився або відкрився.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HideVisible />
      </header>
    </div>
  );
}

export default App;
