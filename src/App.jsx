import React from 'react';
import { authors } from './data/authors';
import { books } from './data/books';
import SmallAuthorsListItems from './components/authors/SmallListItems';
import LargeAuthorsListItems from './components/authors/LargeListItems';
import Regular from './components/lists/Regular';
import SmallBookListItems from './components/books/SmallListItems';
import LargeBookListItems from './components/books/LargeListItems';
import Numberd from './components/lists/Numberd';
import Modal from './components/Modal';

export const App = () => {
  return (
    <>
      <Modal>
        <LargeBookListItems book={books[0]} />
      </Modal>
    </>
  );
};
