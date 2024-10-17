import React, { useState } from 'react';
import Counter from '../components/counter';

function Home() {
  function slowFunc() {
    console.log('Called always when a state is set.');
    return 'Joe';
  }
  // const [name, setName] = useState(slowFunc());
  const [name, setName] = useState(slowFunc);
  // const [name, setName] = useState(() => {
  //   // A slow code
  //   console.log('I execute only once');
  //   return 'Ani';
  // });
  return (
    <div
      onClick={() => {
        setName('Nyg');
      }}
    >
      Home {name}
      <Counter />
    </div>
  );
}

export default Home;
