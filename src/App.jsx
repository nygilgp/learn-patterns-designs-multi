import React from 'react';
import { authors } from './data/authors';
import { books } from './data/books';
import SmallAuthorsListItems from './components/authors/SmallListItems';
import LargeAuthorsListItems from './components/authors/LargeListItems';
import Regular from './components/lists/Regular';
import SmallBookListItems from './components/books/SmallListItems';
import LargeBookListItems from './components/books/LargeListItems';
import Numberd from './components/lists/Numberd';

export const App = () => {
  return (
    <>
      <Regular
        items={authors}
        sourceName="author"
        ItemComponent={SmallAuthorsListItems}
      />
      <Numberd
        items={authors}
        sourceName="author"
        ItemComponent={LargeAuthorsListItems}
      />

      <Regular
        items={books}
        sourceName="book"
        ItemComponent={SmallBookListItems}
      />
      <Numberd
        items={books}
        sourceName="book"
        ItemComponent={LargeBookListItems}
      />
    </>
  );
};
