import { useState, useEffect } from 'react';

function UnionIntersection() {
  // Intersection and Union
  const a = [1, 3, 5, 7, 8, 9, 2];
  const b = [2, 4, 6, 8, 10];

  const interstion = a.filter((v) => b.includes(v));
  const union = [...new Set([...a, ...b])];

  // How to remove duplicate from an array
  const duplicateArray = [1, 2, 3, 4, 5, 3, 5];
  const indexRemoval = duplicateArray.filter(
    (v, i) => duplicateArray.indexOf(v) === i
  );
  const uniqueValue = duplicateArray.filter(
    (v, i) => duplicateArray.indexOf(v) !== i
  );
  const newSet = [...new Set(duplicateArray)]; // Best way to use Set

  // Remove NaN, 0, null, '', undefined from an array
  const arr1 = [NaN, 6, false, 0, undefined, 90, 'hi'];
  const filteredArr1 = arr1.filter((v, i) => v);

  return (
    <>
      <h4>Remove Duplicates</h4>
      <div>Duplicate Array: {duplicateArray.join(', ')}</div>
      <p>
        Using Filter & indexOf:
        <br />
        <span>
          {`duplicateArray.filter( (v, i) => duplicateArray.indexOf(v) === i );`}
        </span>
        <br />
        {indexRemoval.join(', ')}
      </p>
      <p>
        Getting unique value Using Filter & indexOf:
        <br />
        <span>
          {`duplicateArray.filter( (v, i) => duplicateArray.indexOf(v) !== i );`}
        </span>
        <br />
        {uniqueValue.join(', ')}
      </p>
      <p>
        New Es6 way using Set:
        <br />
        <span>{`[...new Set(duplicateArray)];`}</span>
        <br />
        {newSet.join(', ')}
      </p>

      <h4>Remove NaN, null, undefined, '', false from an array</h4>
      <div>
        <p>
          Using filter: <br /> {`arr1.filter((v, i) => v)`}
        </p>
        <p>{filteredArr1.join(', ')}</p>
      </div>
      <h4>Union & Intersection</h4>
      <div>Array 1 : {a.join(', ')}</div>
      <div>Array 2 : {b.join(', ')}</div>
      <div>Union: {union.join(', ')}</div>
      <div>Intersection: {interstion.join(', ')}</div>
      <div>
        Identify an array type: <br />
        <span>Using typeof: {typeof a}</span>
        <br />
        <span>Using toString.call: {toString.call(a)}</span>
      </div>
    </>
  );
}

export default UnionIntersection;
