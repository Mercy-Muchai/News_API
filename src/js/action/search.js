import React from 'react';

class searchNews extends React.Component{
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }
  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,
      15)});
  }
  render() {
    const filteredNews = this.props.news.filter(

    );
    return (
      <div>
        <ul>
          {filteredNews.map((news) => {
            return <News news = {news}
            key = {news.id}/>
          }}
          </ul>
          <input type = 'text'
          value = {this.state.search}
          onChange = {this.updateSearch.bind(this)}/>
          </div>
    )
  }
}