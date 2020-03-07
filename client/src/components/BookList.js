import React from 'react';
import Book from './Book';

function BookList(props) {
  if (props.type === 'search') {
    return (
      <div className='container'>
        <div className='row'>
          {props.books.map(book => {
            let image;
            if (book.volumeInfo.imageLinks) {
              image = book.volumeInfo.imageLinks.thumbnail;
            } else {
              image = null;
            }
            const b = {
              title: book.volumeInfo.title,
              authors: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              image: image,
              link: book.volumeInfo.infoLink
            };
            return <Book key={book.id} book={b} isSearch={true} />;
          })}
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
