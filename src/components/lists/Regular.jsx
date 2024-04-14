import React from 'react';

export default function Regular({ items, sourceName, ItemComponent }) {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
}
