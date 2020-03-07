import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import BookList from '../components/BookList';

const SAVED_BOOKS = gql`
  {
    books {
      id
      title
      description
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(SAVED_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <BookList books={data.books} />;
}

export default Books;
