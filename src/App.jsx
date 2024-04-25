import { useState } from 'react';
import { UserInfo } from './components/user-info';
import { BookInfo } from './components/book-info';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Authors</h2>
      <UserInfo userId={1} />
      <UserInfo userId={2} />
      <UserInfo userId={3} />
      <h2>Books</h2>
      <BookInfo bookId={1} />
      <BookInfo bookId={2} />
      <BookInfo bookId={3} />
    </>
  );
}

export default App;
