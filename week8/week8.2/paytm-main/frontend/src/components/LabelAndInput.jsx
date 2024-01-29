export const LabelAndInput = ({ label, type, placeholder }) => {
  return (
    <>
      <label htmlFor='firstname' className='block font-bold text-sm mb-1'>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className='outline-none border border-gray-300 px-2 py-2 min-w-full rounded mb-3'
      />
    </>
  );
};
