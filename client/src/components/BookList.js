import React, { useState, useEffect } from 'react';
import Book from './Book';
import { booksData } from '../temp/books-data';

function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        {books.map(book => (
          <Book key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
