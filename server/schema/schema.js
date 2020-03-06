const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// Dummy books data
const books = [
  { id: '001', name: 'Name of the Wind', genre: 'Fantasy' },
  { id: '002', name: 'The Final Empire', genre: 'Fantasy' },
  { id: '003', name: 'The Long Earth', genre: 'Sci-Fi' }
];

const Book = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    book: {
      type: Book,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return books.filter(book => book.id === args.id)[0];
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query
});
