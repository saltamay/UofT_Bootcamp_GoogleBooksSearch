require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const path = require('path');
const schema = require('./schema/schema');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/v1/graphql', graphqlHTTP({ schema, graphiql: true }));

require('./database')();

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
  console.log(
    `[server]: Running on ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
