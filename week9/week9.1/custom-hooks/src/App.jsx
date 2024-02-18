import { useState, useEffect } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 300);
  return (
    <div>
      <input
        type='text'
        placeholder='Debouncing'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <h1>{debouncedValue}</h1>
    </div>
  );
}

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  // console.log(debouncedValue);
  return debouncedValue;
};

export default App;
