// useMemo() -> only runs when [inputValue] changes. (Saves extra re-render and state variable)
import { useMemo, useState } from 'react';

const Four = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let count = 0;
    for (let i = 1; i <= inputValue; i++) {
      count = count + i;
    }
    return count;
  }, [inputValue]);

  return (
    <div>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder={'Find sum from 1 to n'}
      ></input>
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
};

export default Four;
