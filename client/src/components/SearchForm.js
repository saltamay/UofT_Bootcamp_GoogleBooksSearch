import React, { useState } from 'react';

function SearchForm(props) {
  const [query, SetQuery] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();

    if (props.onFormSubmit) {
      props.onFormSubmit(query);
    }
  };
  return (
    <div className='container'>
      <div className='row'>
        <form className='col s12' onSubmit={handleFormSubmit}>
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
              <button className='col s2 btn right red lighten-2'>Search</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
