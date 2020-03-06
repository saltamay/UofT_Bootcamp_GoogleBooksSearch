const graphql = require('graphql');
const db = require('../models');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

// Dummy books data
// const books = [
//   { id: '001', title: 'Name of the Wind', genre: 'Fantasy', authorId: '001' },
//   { id: '002', title: 'The Final Empire', genre: 'Fantasy', authorId: '002' },
//   { id: '003', title: 'The Long Earth', genre: 'Sci-Fi', authorId: '003' },
//   { id: '004', title: 'The Hero of Ages', genre: 'Sci-Fi', authorId: '002' },
//   {
//     id: '005',
//     title: 'The Colour of Magic',
//     genre: 'Fantasy',
//     authorId: '003'
//   },
//   { id: '006', title: 'The Light Fantastic', genre: 'Fantasy', authorId: '003' }
// ];

// const authors = [
//   { id: '001', name: 'Patrick Rothfuss', age: 44 },
//   { id: '002', name: 'Brandon Sanderson', age: 42 },
//   { id: '003', name: 'Terry Pratchett', age: 66 }
// ];

const Book = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    synopsis: { type: GraphQLString },
    authorId: { type: GraphQLID },
    author: {
      type: Author,
      resolve(parent, _args) {
        return authors.filter(author => author.id === parent.authorId)[0];
      }
    }
  })
});

const Author = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(Book),
      resolve(parent, _args) {
        return books.filter(book => book.authorId === parent.id);
      }
    }
  })
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    book: {
      type: Book,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        return books.filter(book => book.id === args.id)[0];
      }
    },
    author: {
      type: Author,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        return authors.filter(author => author.id === args.id)[0];
      }
    },
    books: {
      type: new GraphQLList(Book),
      resolve(_parent, _args) {
        return books;
      }
    },
    authors: {
      type: new GraphQLList(Author),
      resolve(_parent, _args) {
        return authors;
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addBook: {
      type: Book,
      args: {
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: { type: GraphQLString },
        synopsis: { type: GraphQLString },
        authorId: { type: GraphQLID }
      },
      resolve(_parent, args) {
        const book = new db.Book({
          title: args.title,
          genre: args.genre,
          author: args.author,
          synopsis: args.synopsis,
          authorId: args.authorId
        });

        return book.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
