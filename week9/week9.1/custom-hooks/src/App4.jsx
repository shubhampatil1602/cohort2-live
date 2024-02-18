import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);

  return <div>Timer is at count {count}</div>;
}

const useInterval = (callback, delay) => {
  useEffect(() => {
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [callback, delay]);
};

export default App;
