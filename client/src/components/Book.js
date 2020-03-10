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

const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id) {
      title
      authors
      description
      image
      link
    }
  }
`;

function Book(props) {
  let { id, title, authors, description, image, link } = props.book;

  if (authors) {
    authors = authors.join(', ');
  } else {
    authors = null;
  }

  const [addBook] = useMutation(SAVE_BOOK);
  const [deleteBook] = useMutation(DELETE_BOOK);

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
              <a
                href={link}
                target='_blank'
                className='btn btn-group-item indigo darken-4'
              >
                View
              </a>
              {props.isSearch ? (
                <span
                  className='btn btn-group-item indigo darken-4'
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
                    window.M.toast({
                      html: 'Saved!',
                      classes: 'indigo darken-4'
                    });
                    props.handleChange(id);
                  }}
                >
                  Save
                </span>
              ) : (
                <span
                  className='btn btn-group-item indigo darken-4'
                  onClick={() => {
                    deleteBook({
                      variables: {
                        id: id
                      }
                    });
                    window.M.toast({
                      html: 'Deleted!',
                      classes: 'indigo darken-4'
                    });
                    props.handleChange(id);
                  }}
                >
                  Delete
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
