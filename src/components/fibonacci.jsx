import { useState, useEffect } from 'react';

function Fibonacii() {
  const [limit, setLimit] = useState(0);
  const [series, setSeries] = useState('');
  const fibonaciiFn = () => {
    let a = 0;
    let b = 1;
    let fn = a + b;
    let list = `${a}, `;

    while (fn < limit) {
      list += `${fn}, `;
      fn = a + b;
      a = b;
      b = fn;
    }

    setSeries(list);
  };

  return (
    <>
      <h4>Fibonacii</h4>
      <div>
        Enter limit:{' '}
        <input type="number" onChange={(e) => setLimit(e.target.value)} />
        <button type="submit" onClick={fibonaciiFn}>
          Submit
        </button>
      </div>
      <div>Series: {series}</div>
    </>
  );
}

export default Fibonacii;
