import React, { useState, useEffect } from 'react';
import Book from './Book';

function BookList(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(props.books);
  }, [props.books]);

  const handleChange = id => {
    const newBooksList = books.filter(book => book.id !== id);

    setBooks(newBooksList);
  };

  if (props.type === 'search') {
    return (
      <div className='container'>
        <div className='row'>
          {books.map(book => {
            let image;
            if (book.volumeInfo.imageLinks) {
              image = book.volumeInfo.imageLinks.thumbnail;
            } else {
              image = null;
            }
            const b = {
              id: book.id,
              title: book.volumeInfo.title,
              authors: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              image: image,
              link: book.volumeInfo.infoLink
            };
            return (
              <Book
                key={book.id}
                book={b}
                isSearch={true}
                handleChange={handleChange}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className='container'>
        <div className='row'>
          {books.map(book => (
            <Book key={book.id} book={book} handleChange={handleChange} />
          ))}
        </div>
      </div>
    );
  }
}

export default BookList;
