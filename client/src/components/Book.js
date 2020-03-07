import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const SAVE_BOOK = gql`
  mutation AddBook(
    $title: String!
    $authors: [String]
    $description: String
    $image: String
    $link: String
  ) {
    addBook(
      title: $title
      authors: $authors
      description: $description
      image: $image
      link: $link
    ) {
      title
      authors
      description
      image
      link
    }
  }
`;

function Book(props) {
  let { title, authors, description, image, link } = props.book;

  if (authors) {
    authors = authors.join(', ');
  } else {
    authors = null;
  }

  const [addBook, { data }] = useMutation(SAVE_BOOK);

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
                  <img src={image} />
                </div>
                <div className='card-stacked'>
                  <div className='card-content'>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='secondary-content'>
              <a href={link} className='btn btn-group-item red lighten-2'>
                View
              </a>
              {props.isSearch ? (
                <span
                  className='btn btn-group-item red lighten-2'
                  onClick={() => {
                    addBook({
                      variables: {
                        title: title,
                        authors: authors,
                        description: description,
                        image: image,
                        link: link
                      }
                    });
                  }}
                >
                  Save
                </span>
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
