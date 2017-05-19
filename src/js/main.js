// import React from 'react';
// import ReactDOM from 'react-dom';
// import Routes from './components/Routes';
// require ('../css/common.scss');

// 

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './components/App';
import Articles from './components/Articles';

console.log('hashHist: ', hashHistory)
ReactDOM.render(<Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='/:sourceId/:sortBy' component={Articles} />
          {/*<Route path='*' component={NotFound} />*/}
        </Route>
      </Router> , document.getElementById('main'));
