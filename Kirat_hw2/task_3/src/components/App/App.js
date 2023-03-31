import New from "../NewComponent/New";

// Завдання 3
// Створіть компонент, який прийматиме параметром рядка та зображатиме їх у різних блоках div.

function App() {
  return (
    <div>
      <div> 
        <New 
          name='Ivan' 
          surname='Petriv'
          age='32' />
      </div>
    </div>
  );
}

export default App;
