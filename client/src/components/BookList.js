import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Book from './Book';
import { booksData } from '../temp/books-data';

const SAVED_BOOKS = gql`
  {
    books {
      id
      title
      description
    }
  }
`;

function BookList() {
  // const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   setBooks(booksData);
  // }, []);

  const { loading, error, data } = useQuery(SAVED_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className='container'>
      <div className='row'>
        {data.books.map(book => (
          <Book key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
