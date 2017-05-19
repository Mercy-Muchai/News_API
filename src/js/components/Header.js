import React from 'react';
import Login from './Login';

export default class Logo extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="navbar-brand">
            <a className="header">
              <span style={{ display: "inline-block" }}>Get News
                {/*<img src={require("/Users/mercymuchai/Desktop/CHECKPOINT 1/cp1/src/css/img/newsicon.png")} width="60" height="60" />*/}
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
