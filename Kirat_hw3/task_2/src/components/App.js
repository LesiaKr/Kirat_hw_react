import './App.css';
import List from './List';
import List2 from './List2';

// Завдання 2
// Створіть компонент, який зображатиме список імен. Імена не мають повторюватися.

const namesArr = ["Ivan", "Viktoria", "Maria", "Inna", "Vlad"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List names={namesArr} />
        <List2 />
        <p>
          Hello World !!!
        </p>
      </header>
    </div>
  );
}
export default App;
