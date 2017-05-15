import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    }
  }
  componentDidMount() {
    Axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=213327409d384371851777e7c7f78dfe')
      .then((result) => {
        console.log('getting result: ', result);
        this.setState({
          articles: result.data.articles
        });
      })

  }
render() {
    return (
      <div>
        <h1>Articles</h1>
        {this.state.articles.map((articles) => (
          <div>{articles.title}
            {articles.description}
          </div>
        ))
        }
      </div>
    )
  }
}