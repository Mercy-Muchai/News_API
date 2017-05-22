import React, { Component } from 'react';
import Axios from 'axios';
import RenderHeadlines from './RenderHeadlines';

export default class Articles extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    }
  }
  sortArticles(sourceId, sortBy) {
    let url = ''
    url = url + 'https://newsapi.org/v1/articles?';
    url += `source=${sourceId}&`;
    if (sortBy) {
      url += `sortBy=${sortBy}&`;;
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
    this.sortArticles(this.props.params.sourceId, this.props.params.sortBy)
  }

  componentWillReceiveProps(nextProps) {
    this.sortArticles(nextProps.params.sourceId, nextProps.params.sortBy)
  }

  render() {
    return (
     <RenderHeadlines articles = {this.state.articles} />
    )
  }
}