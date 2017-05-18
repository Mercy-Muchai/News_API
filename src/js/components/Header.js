import React from 'react';
import Login from './Login';

export default class Logo extends React.Component {
  render() {
    return (
        <nav className="navbar-inverse navbar-fixed-top"style={{backgroundColor: '#ffffff'}}>
            <h1 id="header">
              <img src={require("/Users/mercymuchai/Desktop/CHECKPOINT 1/cp1/src/css/img/newsicon.png")} width="60" height="60" />Get News
           <Login />
            </h1>
        </nav>
    )
  }
}
