import { useState } from 'react';

function PropDrilling() {
  const [count, setCount] = useState(0);
  return (
    <div className='m-10'>
      <Count count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}

function Count({ count }) {
  return <div className='m-2 text-lg'>{count}</div>;
}

function Buttons({ count, setCount }) {
  return (
    <div className=''>
      <button
        className='px-5 py-3 bg-slate-300 mr-5'
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <button
        className='px-5 py-3 bg-slate-300'
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
    </div>
  );
}

export default PropDrilling;
