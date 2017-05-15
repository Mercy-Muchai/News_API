import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

export default class Sources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
    }
  }
  componentWillMount() {
    Axios.get('https://newsapi.org/v1/sources?language=en')
      .then((result) => {
        console.log('getting result: ', result);
        this.setState({
          sources: result.data.sources
        });
      })

  }
  // componentDidMount() {
  //   Axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=213327409d384371851777e7c7f78dfe')
  //     .then((result) => {
  //       console.log('getting result: ', result);
  //       this.setState({
  //         articles: result.data.articles
  //       });
  //     })
  // }
  render() {
    return (
      <div>
        <h1>Sources</h1>
        {this.state.sources.map((sources) => (
          <div>
            {sources.name}

            {/*{sources.description}*/}

          </div>
        ))
        }
      </div>
    )
  }
}
