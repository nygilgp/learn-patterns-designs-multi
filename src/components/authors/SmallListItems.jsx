import React from 'react';

export default function SmallListItems({ author }) {
  const { name, age } = author;
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
}
