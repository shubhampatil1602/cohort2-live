const RevenueCard = ({ title, orderCount, amount }) => {
  return (
    <div className='bg-white rounded-md shadow-md p-4'>
      <div className='text-gray-700'>{title} ?</div>
      <div className='flex justify-between'>
        <div className='font-semibold pt-3 text-[30px]'>₹ {amount}</div>
        {orderCount ? (
          <div className='text-blue-600 pt-6'>
            <span className='underline'>{orderCount} orders</span> {'>'}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RevenueCard;
