import React, { Component } from 'react';
import Axios from 'axios';

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
        console.log('getting result: ', result);
        this.setState({
          articles: result.data.articles
        });
      })
  }
  componentDidMount() {
    this.sortArticles(this.props.params.sourceId, this.props.params.sortBy)
  }

  componentWillReceiveProps(nextProps) {
    console.log('called')
    this.sortArticles(nextProps.params.sourceId, nextProps.params.sortBy)
  }

  render() {
    return (
      <div className="col-sm-9">
        <div className="row-fluid">
          {this.state.articles.map((article) => (
            <div className="card col-xs-12 col-sm-4 col-md-4 m-2" classID="articleDisplay" key={article.id}>
              <div className="card-block">
                <h4 className="card-title"style={{height: '280px', overflow: 'scroll' }}> <a target="_blank" href={article.url} target> <img className="card-img-top" src={article.urlToImage} width="400" height="236" />{article.title}</a></h4>
                <p className="card-text" style={{height: '100px', overflow: 'scroll' }}>{article.description}</p>
              </div>
            </div>

          ))
          }
        </div>
      </div>
    )
  }
}