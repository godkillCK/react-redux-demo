import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Index from '../components/index.jsx';

export default class View extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={ Index }></Route>
      </Router>
    );
  }
};
