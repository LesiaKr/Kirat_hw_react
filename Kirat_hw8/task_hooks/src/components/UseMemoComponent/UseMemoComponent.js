import React, { useState, useMemo } from "react";

const counterFunc = (number) => {
    console.log('render!');
    for(let i = 0; i < 100; i++) {};
    return number * 2;
  }

const UseMemoComponent = () => {
  const [count1, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  const computed = useMemo(() => counterFunc(count2), [count2]);

  return(
    <div>
      <h2>UseMemoComponent</h2>
      <h3> {count1} (+1)</h3>
      <h3> {computed} (useMemo)</h3>
     
      <button onClick={() => setCount(count1 + 1)}>
        Click 1
      </button>

      <button onClick={() => setCount2(count2 + 1)}>
        Click 2
      </button>
    </div>
  )
}

export default UseMemoComponent;