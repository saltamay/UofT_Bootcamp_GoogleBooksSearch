import React from 'react';
import Book from './Book';

function BookList(props) {
  if (props.type === 'search') {
    return (
      <div className='container'>
        <div className='row'>
          {props.books.map(book => (
            <Book key={book.id} book={book.volumeInfo} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className='container'>
        <div className='row'>
          {props.books.map(book => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>
    );
  }
}

export default BookList;
