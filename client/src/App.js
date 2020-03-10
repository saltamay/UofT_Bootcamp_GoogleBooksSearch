import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/Navbar';
import Search from './pages/Search';
import Books from './pages/Books';
import { SavedBooksProvider } from './lib/SavedBooksStore';

const client = new ApolloClient({
  uri: '/api/v1/graphql'
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div id='main'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Search} />
            <SavedBooksProvider>
              <Route exact path='/books' component={Books} />
            </SavedBooksProvider>
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
