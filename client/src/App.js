import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import BookList from './components/BookList';
import NavBar from './components/Navbar';

const client = new ApolloClient({
  uri: '/api/v1/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <NavBar />
        <h1 className='center-align'>Hello from Google Books!</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
