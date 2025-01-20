import { useState, useEffect } from 'react';
import ReverseNumbers from './components/reverseNumbers';
import Fibonacii from './components/fibonacci';
import PrimeNumbers from './components/primeNumber';
import UnionIntersection from './components/union-intersection';
import Factorial from './components/factorial';
import { Fundamentals } from './components/fundamentals';

function App() {
  return (
    <>
      <Fundamentals />
      <UnionIntersection />
      <Factorial />
      <PrimeNumbers />
      <Fibonacii />
      <ReverseNumbers />
    </>
  );
}

export default App;
