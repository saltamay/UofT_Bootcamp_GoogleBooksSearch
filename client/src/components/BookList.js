import React from 'react';
import Book from './Book';

function BookList(props) {
  return (
    <div className='container'>
      <div className='row'>
        {props.books.map(book => (
          <Book key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
