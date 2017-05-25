import React from 'react';
import Axios from 'axios';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Sources from './Sources.jsx';
import Articles from './Articles.jsx';
import Login from './Login.jsx';
import Search from './Search.jsx';
import RenderHeadlines from './RenderHeadlines.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    }
  }
  sortArticles(sourceId, sortBy) {
    let url = ''
    url = url + 'https://newsapi.org/v1/articles?';
    url += `source=bbc-news&`;
    if (sortBy) {
      url += `sortBy=top&`;;
    }
    url += 'apiKey=213327409d384371851777e7c7f78dfe'
    Axios.get(url)
      .then((result) => {
        this.setState({
          articles: result.data.articles
        });
      })
  }
  
  componentDidMount() {
    this.sortArticles()
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="navbar-brand">
            <a className="header">
              <span style={{ display: "inline-block" }}>Get News
              </span>
            </a>
          </div>
          <ul className="nav navbar-nav pull-right">
            <li className="active"><Login/></li>
          </ul>
        </nav>
        <Search />
        <Sources />
        {this.props.children ?
          this.props.children :
          <RenderHeadlines articles={this.state.articles} />
        }
      </div>
    )
  }
};
