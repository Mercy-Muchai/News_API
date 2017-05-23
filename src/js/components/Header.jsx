import React from 'react';
import Login from './Login.jsx';

export default class Header extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="navbar-brand">
            <a className="header">
              <span style={{ display: "inline-block" }}>Get News
              </span>
            </a>
          </div>
          <ul className="nav navbar-nav pull-right">
            <li className="active"><Login /></li>
          </ul>
        </nav>
        )
  }
}
