import React, { useState } from 'react';

const Counter = () => {
    const [error, setError] = useState(false);
    const [count, setCount] = useState(0);
  
    const handleError = () => {
      setError(true);
    }
  
    if(error) {
      return new Error('Error!!!');
    }
  
    return (
      <>
        <p> Ви натиснули {count} разів </p>
        <button onClick={ () => setCount (count + 1)}>
           Натисни мене
        </button>
        <br />
        <button onClick={handleError}>
            Х Помилка Х
        </button>
      </>
    )
  }
  
  export default Counter;