import React, { Component } from 'react';
import Axios from 'axios';

export default class Articles extends Component {
  constructor() {
    super();
    this.state = {
      sourceId: 'bbc-news',
      sortBy: '',
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
    url += 'apiKey=213327409d384371851777e7c7f78dfe';

    Axios.get(url)
      .then((result) => {
        console.log('getting result: ', result);
        this.setState({
          articles: result.data.articles
        });
      })
  }
  componentDidMount() {
    this.sortArticles(this.state.sourceId, this.state.sortBy)
  }

  componentWillReceiveProps(nextProps) {
    console.log('called')
    this.sortArticles(this.nextProps.params.sourceId, this.nextProps.params.sortBy)
  }

  render() {
    return (
      <div className="row">
        {/*<h1 style={{width: '1054px'}}>Articles</h1>*/}
        {console.log('This is the state', this.state)}

        <div className="row-fluid">
          {this.state.articles.map((article) => (

            <div className="card col-xs-12 col-sm-4 col-md-4 m-2" style={{ minHeight: '300px' }} key={article.id}>
              <div className="card-block" >
                <h4 className="card-title"> <a target="_blank" href={article.url} target> <img className="card-img-top" src={article.urlToImage} width="400" height="236" />{article.title}</a></h4>
                <p className="card-text">{article.description}</p>
              </div>
            </div>

          ))
          }
        </div>
      </div>
    )
  }
}