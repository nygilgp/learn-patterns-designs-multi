import React from 'react';

export default function Numberd({ items, sourceName, ItemComponent }) {
  return (
    <>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <h3>{i + 1}</h3>
          <ItemComponent {...{ [sourceName]: item }} />
        </React.Fragment>
      ))}
    </>
  );
}
