import React from 'react';
import Sources from './Sources';
import Header from './Header';
import Articles from './Articles';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>NewsAPI</h1>
        <Header />
        <Sources />
        <Articles />

    </div>
    )
  }
};
