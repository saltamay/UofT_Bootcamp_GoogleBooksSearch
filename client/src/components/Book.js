import React from 'react';

function Book(props) {
  let { title, authors, description, imageLinks, infoLink } = props.book;
  if (authors) {
    authors = authors.join(', ');
  } else {
    authors = null;
  }
  return (
    <div className='col s12'>
      <div className='card horizontal hoverable'>
        <div className='card-stacked'>
          <div className='card-content'>
            <div className='card-title valign-wrapper'>{title}</div>
            <div>{authors}</div>
            <div className='col s12'>
              <div className='card horizontal card-nested'>
                <div className='card-image'>
                  {imageLinks ? <img src={imageLinks.thumbnail} /> : null}
                </div>
                <div className='card-stacked'>
                  <div className='card-content'>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='secondary-content'>
              <a href={infoLink} className='btn btn-group-item red lighten-2'>
                View
              </a>
              {props.isSearch ? (
                <span className='btn btn-group-item red lighten-2'>Save</span>
              ) : (
                <span className='btn btn-group-item red lighten-2'>Delete</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
