import React from 'react';
import ReactDOM from 'react-dom';

export default class Logo extends React.Component {
  render() {
    return (
      <div>
        <img src={require("../newsicon.png")} alt="Cinque Terre" width="80" height="80"/>
        <h1>HOT NEWS</h1>
      </div>
    )
  }
}
