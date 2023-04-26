import { useContext, useState } from 'react';
import Modal from '../Modal/Modal';
import './App.css';
import Portal from '../Portal/Portal';
import { ContextTheme } from '../../context-api/ContextTheme';


function App() {

  const [isShowModal, setIsShowModal] = useState(false);
  const {handleTheme, ThemeColor} = useContext(ContextTheme);

  return (
    <div className={ThemeColor}>
      <header className="App-header">
        <h1>Modal window</h1>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, tempora sit amet consectetur adipisicing ex nihil magnam amet architecto sit ut similique. Quis, tempora sit amet consectetur adipisicing ex nihil magnam amet architecto sit ut similique. Beatae, nesciunt?</p>
        <p>
          <button onClick={() => setIsShowModal(!isShowModal)}>
            Show modal
          </button>
        </p>

        {isShowModal && 
            <Portal>
              <Modal onCLose={() => setIsShowModal(false)}/>
            </Portal>}

        <div>
          <button onClick={handleTheme}>
            Change theme
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
