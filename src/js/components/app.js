import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Sources from './Sources';
import Header from './Header';
import Articles from './Articles';
import Login from './Login';
import Search from './Search';
import RenderHeadlines from './RenderHeadlines';

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
        <Header />
        <Search />
        <Sources />
        {this.props.children ?
        this.props.children:
          <RenderHeadlines articles = {this.state.articles} />
        }
      </div>
    )
  }
};


