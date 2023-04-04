import './App.css';
import StudentsLists from './StudentsLists';

// Завдання 5
// Створіть сайт, на якому є 2 списки та кнопка. Після натискання на кнопку перший елемент зі списку 1 переходить на кінець списку 2.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StudentsLists />
      </header>
    </div>
  );
}

export default App;
