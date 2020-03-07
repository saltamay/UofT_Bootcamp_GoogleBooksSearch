import React from 'react';

function Book(props) {
  const { title, authors, description } = props.book;
  return (
    <div className='col s12'>
      <div className='card horizontal hoverable'>
        <div className='card-image'>
          <img src='https://lorempixel.com/100/190/nature/6' />
        </div>
        <div className='card-stacked'>
          <div className='card-content'>
            <div class='card-title valign-wrapper'>
              {title}
              <div className='btn-group'>
                <span class='btn btn-group-item'>View</span>
                <span class='btn btn-group-item'>Delete</span>
              </div>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
