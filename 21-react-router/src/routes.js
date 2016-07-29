
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Account from './components/Account';

export default (
  <Route path="/digicity/" component={App} >
    <Route path="/digicity/home" component={Home} />
    <Route path="/digicity/about" component={About} />
    <Route path="/digicity/account" component={Account} />
    <IndexRoute component={Home} />
  </Route>
);
