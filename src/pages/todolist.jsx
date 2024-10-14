import React from 'react';
import ListItems from './listitems';

function Todolist() {
  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        <ListItems isComplete>Abi exam prepare</ListItems>
        <ListItems isComplete={false}>Abi exam take</ListItems>
      </ul>
    </div>
  );
}

export default Todolist;
