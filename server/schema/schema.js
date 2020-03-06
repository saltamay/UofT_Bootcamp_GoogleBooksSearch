const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql;

// Dummy books data
const books = [
  { id: '001', name: 'Name of the Wind', genre: 'Fantasy' },
  { id: '002', name: 'The Final Empire', genre: 'Fantasy' },
  { id: '003', name: 'The Long Earth', genre: 'Sci-Fi' }
];

const authors = [
  { id: '001', name: 'Patrick Rothfuss', age: 44 },
  { id: '002', name: 'Brandon Sanderson', age: 42 },
  { id: '003', name: 'Terry Pratchett', age: 66 }
];

const Book = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const Author = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
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
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query
});
