import React from 'react';

function App() {
  // return React.createElement('h1', { id: 'hello' }, 'hi there...');
  // return <h1 id="hello">Hi there...</h1>;
  const label = <label htmlFor="inputId">Name</label>;
  return (
    <div className="large" id="largeDiv">
      {label}
      <input id="inputId" value={3} type="number" />
    </div>
  );
}

export default App;
