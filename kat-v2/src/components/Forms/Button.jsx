import React from 'react';

// eslint-disable-next-line react/prop-types
function Button({ text, onClick, style }) {
  const buttonStyle = {
    ...style,
    cursor: 'pointer',
  };
  return (
    <input
      type="button"
      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      value={text}
      onClick={onClick}
      style={buttonStyle}
    />
  );
}

export default Button;
