import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import BookList from '../components/BookList';
import bookShelves from '../assets/book-shelves.png';

const SAVED_BOOKS = gql`
  {
    books {
      id
      title
      authors
      description
      image
      link
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(SAVED_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <React.Fragment>
      <div className='container'>
        <div className='valign-wrapper'>
          <img
            src={bookShelves}
            style={{
              position: 'relative',
              width: '40%',
              margin: '20px 0'
            }}
          />
          <h4 style={{ display: 'inline-block', margin: '0 auto' }}>Library</h4>
        </div>
      </div>
      <BookList books={data.books} />
    </React.Fragment>
  );
}

export default Books;
