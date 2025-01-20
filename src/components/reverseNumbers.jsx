import { useState, useEffect } from 'react';

function ReverseNumbers() {
  const [reverse, setReverse] = useState(0);
  const [number, setNumber] = useState(0);
  const reverseFn = () => {
    let num = number;
    let rev = 0;
    let rem = 0;

    while (num > 0) {
      rem = num % 10;
      rev = rev * 10 + rem;
      num = parseInt(num / 10);
    }

    setReverse(rev);
  };

  return (
    <>
      <h4>Reverse Numbers</h4>
      <div>
        Enter number:{' '}
        <input type="number" onChange={(e) => setNumber(e.target.value)} />
        <button type="submit" onClick={reverseFn}>
          Submit
        </button>
      </div>
      <div>Reverse: {reverse}</div>
    </>
  );
}

export default ReverseNumbers;
