import React from 'react';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Articles from './Articles';
import App from './App';

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='/:sourceId/:sortBy' component={Articles} />
          {/*<Route path='*' component={NotFound} />*/}
        </Route>
      </Router>
    )
  }
}


