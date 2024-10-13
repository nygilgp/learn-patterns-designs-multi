import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-600 text-white">Hello world!</h1>
      <h1 className="border-4 border-blue-600">Hello world!</h1>
      <h1 className="text-vuejs">Hello world!</h1>
      <div className="my-component">
        <p className="text-xs mb-4 sm:text-base md:text-lg lg:text-3xl">
          Some short paragraph
        </p>
        <p className="bg-[#bada55] truncate">
          Am another paragraph, using an inline background style class.
        </p>
      </div>
      <div>
        <h1 className="text-3xl">Title 1</h1>
        <h2 className="text-2xl">Title 2</h2>
        <h3 className="text-xl italic underline decoration-red-500 decoration-wavy underline-offset-4 decoration-3">
          Title 3
        </h3>
        <p className="text-base">A regular paragraph</p>
        <p className="text-sm">A description paragraph</p>
        <p className="note text-xs">A little note</p>
      </div>
    </>
  );
}

export default App;
