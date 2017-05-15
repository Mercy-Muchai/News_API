import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Sources from './Sources';
import Header from './Header';
import Articles from './Articles';
import Login from './Login';
// import searchNews from './Search';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>NewsAPI</h1>
        <Header />  <Login />
        <Sources />
        {/*<Articles />*/}


    </div>
    )
  }
};


