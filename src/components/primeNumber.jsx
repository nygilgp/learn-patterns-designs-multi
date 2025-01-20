import { useState } from 'react';

function PrimeNumbers() {
  const [limit, setLimit] = useState(0);
  const [isPrime, setIsPrime] = useState(false);
  const primefn = () => {
    setIsPrime(false);
    for (let i = 2; i < limit / 2 + 1; i++) {
      if (limit % i === 0) {
        setIsPrime(true);
        return;
      }
    }
  };

  return (
    <>
      <h4>Prime Numbers</h4>
      <div>
        Enter limit:{' '}
        <input type="number" onChange={(e) => setLimit(e.target.value)} />
        <button type="submit" onClick={primefn}>
          Submit
        </button>
      </div>
      <div>Number is Prime: {isPrime ? 'No' : 'Yes'}</div>
    </>
  );
}

export default PrimeNumbers;
