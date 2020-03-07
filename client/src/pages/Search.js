import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList';
import { api } from '../lib/api';

function Search() {
  const [books, setBooks] = useState([]);

  const handleSearch = async query => {
    const result = await api.getBooks(query);
    setBooks(result.items);
  };

  return (
    <React.Fragment>
      <SearchForm onFormSubmit={handleSearch} />
      <BookList books={books} type='search' />
    </React.Fragment>
  );
}

export default Search;
