import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: [],
      search: 'Search Source'
    };
  }
  updateSearch(event) {
    this.setState({ search: event.target.value });

  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v1/sources?language=en`)
      .then((result) => {
        this.setState({
          sources: result.data.sources
        });
      });
  }

  render() {
    let found = this.state.sources.filter(
      (sources) => {
        return sources.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;

      });

    return (
      <div className="col-sm-12" classID="search" style={{ paddingTop: "25px" }}>

        <input type="text" placeholder='Search Source' value={this.state.search} onChange={this.updateSearch.bind(this)} style={{ backgroundColor: '#ffffff' }} className="searchbox" />
        <span id="tweet-container-index" style={{ paddingLeft: '1010px'}}>
          <a href="https://twitter.com/share" className="twitter-share-button" data-url={'https://getnews-api.herokuapp.com/#/abc-news-au/top'} data-text={'Get News here from all over the world'}>Tweet</a>
        </span>
        {found.map((sources) => {
          return (
            <div className="search" key={sources.id}>
              <a href={sources.url}> {sources.name} </a>
            </div>);
        }
        )}

      </div>
    );
  }
};