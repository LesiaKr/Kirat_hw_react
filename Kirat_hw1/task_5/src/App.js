import logo from './logo.svg';
import './App.css';

//Завдання 5
//Створіть застосунок за допомогою Create React App і виведіть на сторінку текст «Hello world».

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
      </header>
    </div>
  );
}

export default App;
