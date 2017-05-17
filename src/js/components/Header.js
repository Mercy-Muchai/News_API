import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

export default class Logo extends React.Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <h1> <img src={require("../newsicon.png")} alt="Cinque Terre" width="60" height="60" />GET NEWS</h1>
          <div style={{ textAlign: "left", height: "30"}}>
            <Login />
          </div>
        </div>
      </nav>
    )
  }
}
