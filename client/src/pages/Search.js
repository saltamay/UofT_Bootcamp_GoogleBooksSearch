import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList';
import { api } from '../lib/api';
import bookLover from '../assets/book-lover.png';

function Search() {
  const [books, setBooks] = useState([]);
  const [searching, setSearching] = useState(false);

  const handleSearch = async query => {
    setSearching(true);

    const result = await api.getBooks(query);
    setBooks(result.items);
  };

  return (
    <React.Fragment>
      <div className='container'>
        <div className='valign-wrapper'>
          <img
            src={bookLover}
            style={{
              position: !searching ? 'relative' : 'absolute',
              width: '60%',
              top: '80px'
            }}
          />
          <h2>Discover</h2>
        </div>
      </div>
      <SearchForm onFormSubmit={handleSearch} />
      <BookList books={books} type='search' />
    </React.Fragment>
  );
}

export default Search;
