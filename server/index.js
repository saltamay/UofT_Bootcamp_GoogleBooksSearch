require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/api/v1/graphql', graphqlHTTP({ schema, graphiql: true }));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
  console.log(
    `[server]: Running on ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
