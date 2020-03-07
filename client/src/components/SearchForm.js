import React, { useState } from 'react';

function SearchForm() {
  const [query, SetQuery] = useState('');

  return (
    <div className='container'>
      <div className='row'>
        <form className='col s12'>
          <h5>Book Search</h5>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                placeholder='Title'
                id='firstName'
                type='text'
                className='validate'
                autoComplete='off'
                value={query}
                onChange={e => SetQuery(e.target.value)}
              />
              <label htmlFor='firstName'>Book</label>
            </div>
          </div>
          <div className='row'>
            <div className='col s12'>
              <button className='col s2 btn right'>Search</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
