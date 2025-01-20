import { useState, useEffect } from 'react';

function Factorial() {
  const [limit, setLimit] = useState(0);
  const [series, setSeries] = useState(0);
  const factorialFn = (n) => {
    if (n > 1) {
      return n * factorialFn(n - 1);
    } else {
      return 1;
    }
  };
  const findFactorial = () => {
    setSeries(factorialFn(limit));
  };

  return (
    <>
      <h4>Factorial</h4>
      <div>
        Enter Number:{' '}
        <input type="number" onChange={(e) => setLimit(e.target.value)} />
        <button type="submit" onClick={findFactorial}>
          Submit
        </button>
      </div>
      <div>Series: {series}</div>
    </>
  );
}

export default Factorial;
