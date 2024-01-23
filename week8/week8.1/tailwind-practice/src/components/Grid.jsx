const Grid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-6'>
      <div className='bg-slate-500 col-span-2'>Hello</div>
      <div className='bg-blue-500 col-span-2'>Hello</div>
      <div className='bg-red-500 col-span-2'>Hello</div>
      <div className='bg-green-500 col-span-2'>Hello</div>
      <div className='bg-pink-500 col-span-2'>Hello</div>
      <div className='bg-orange-500 col-span-2'>Hello</div>
    </div>
  );
};

export default Grid;
