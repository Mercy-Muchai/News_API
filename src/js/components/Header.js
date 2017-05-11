import React from 'react';
import ReactDOM from 'react-dom';

export default class Logo extends React.Component {
  render() {
    return (
      <div>
        <img src={require("../newsicon.png")} />
        <h1> {this.props.name} </h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Logo
    name='TOP NEWS'/>,
  document.getElementById('app')
);
