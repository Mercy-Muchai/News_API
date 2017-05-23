import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './components/App.jsx';
import Articles from './components/Articles.jsx';
import RenderHeadlines from './components/RenderHeadlines.jsx';
require ('../css/common.scss');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/:sourceId/:sortBy' component={Articles} />
    </Route>
  </Router>, document.getElementById('main'));
