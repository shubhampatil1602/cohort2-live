import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';
import { useState } from 'react';
function App() {
  return (
    <div>
      <RecoilRoot>
        <Todo />
      </RecoilRoot>
    </div>
  );
}

function Todo() {
  const [title, setTitle] = useState('');
  return (
    <div className='flex'>
      <div>
        <input
          className='border outline-none border-orange-500 p-2 m-3'
          placeholder='title'
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <input
          className='border outline-none border-orange-500 p-2 m-3'
          placeholder='description'
        ></input>
        <button className='border bg-orange-500 text-white p-2 m-3'>
          Add todo
        </button>
      </div>
    </div>
  );
}

// Ugly way without using selectors
// function Even() {
//   const count = useRecoilValue(countAtom);
//   console.log('rerender');
//   return (
//     <div className='text-3xl m-3'>{count % 2 === 0 ? `It is even` : null}</div>
//   );
// }

// Better way using selectors
function Even() {
  const count = useRecoilValue(evenSelector);
  console.log('rerender');
  return (
    <div className='text-3xl m-3'>{count % 2 === 0 ? `It is even` : null}</div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <Even />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div className='text-3xl p-2'>{count}</div>;
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);

  return (
    <div>
      <button
        className='bg-gray-300 p-2 m-2'
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        className='bg-gray-300 p-2 m-2'
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
