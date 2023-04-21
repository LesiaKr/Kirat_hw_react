import { useState } from "react";

const Contacts = () => {
    const [error, setError] = useState(false);

    const handleError = () => {
      setError(true);
    }

    if(error) {
      return new Error('Error!!!');
    }
    return (
      <div className="Menu-block"
          style={{backgroundColor:"lightGreen"}}>
            Contacts page
        <h2>Our contacts</h2> 
        <p>
          <a href="tel:#">+380987755625</a>
        </p>
        <p>
         <a href="mailto:#">example@gmail.com</a>
        </p>
        <p>
          <button onClick={handleError}>
            X Помилка X
          </button>
        </p>
      </div>
      )
}
export default Contacts;