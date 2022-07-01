import { useState } from 'react';

const Test = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((value) => value + 1);
  };

  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Test;
