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

const Book = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    authors: { type: GraphQLList(GraphQLString) },
    // genre: { type: GraphQLString },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    link: { type: GraphQLString }
    // authorId: { type: GraphQLID },
    // author: {
    //   type: Author,
    //   resolve(parent, _args) {
    //     return authors.filter(author => author.id === parent.authorId)[0];
    //   }
    // }
  })
});

// const Author = new GraphQLObjectType({
//   name: 'Author',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     age: { type: GraphQLInt },
//     books: {
//       type: new GraphQLList(Book),
//       resolve(parent, _args) {
//         return books.filter(book => book.authorId === parent.id);
//       }
//     }
//   })
// });

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
    books: {
      type: new GraphQLList(Book),
      resolve(_parent, _args) {
        return db.Book.find({});
      }
    }
    // author: {
    //   type: Author,
    //   args: { id: { type: GraphQLID } },
    //   resolve(_parent, args) {
    //     return authors.filter(author => author.id === args.id)[0];
    //   }
    // },
    // authors: {
    //   type: new GraphQLList(Author),
    //   resolve(_parent, _args) {
    //     return authors;
    //   }
    // }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addBook: {
      type: Book,
      args: {
        title: { type: GraphQLString },
        authors: { type: GraphQLList(GraphQLString) },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        link: { type: GraphQLString }
      },
      resolve(_parent, args) {
        const book = new db.Book({
          title: args.title,
          authors: args.authors,
          description: args.description,
          image: args.image,
          link: args.link
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
