import React from 'react';

export default function SmallBookListItems({ book }) {
  const { name, price } = book;
  return (
    <h2>
      {name} / {price}
    </h2>
  );
}
