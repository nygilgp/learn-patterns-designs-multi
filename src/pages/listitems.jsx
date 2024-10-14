import React from 'react';

function ListItems({ children, isComplete }) {
  return (
    <label htmlFor={children}>
      <input type="checkbox" id={children} defaultChecked={isComplete} />{' '}
      {children}
      <br />
    </label>
  );
}

export default ListItems;
