import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Sources from './Sources';
import Header from './Header';
import Articles from './Articles';
import Login from './Login';
import Search from './Search';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <Sources />
        <Articles />
        {console.log('Children: ', this.props.children)}
        {this.props.children}



      </div>
    )
  }
};


