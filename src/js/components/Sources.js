import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

const FILTERS = {
  language: {
    au: 'au',
    en: 'en',
    fr: 'fr'
  },
  category: {
    business: 'business',
    entertainment: 'entertainment',
    gaming: 'gaming',
    general: ' general',
    music: 'music',
    politics: 'politics',
    science_and_nature: 'science-and-nature',
    sport: 'sport',
    technology: 'technology'
  }
};

export default class Sources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      articles: [],
      currentFilter: {
        filterKey: 'category',
        filterValue: 'sport',
      },
      filters: FILTERS
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  componentDidMount() {
    this.filterArticles()
  }
  filterArticles() {
    const filterKey = this.state.currentFilter.filterKey
    const filterValue = this.state.currentFilter.filterValue
    const getArticles = `https://newsapi.org/v1/sources?${filterKey}=${filterValue}`
    Axios.get(getArticles)
      .then(({ data }) => {
        this.setState((prevState) => (Object.assign({}, prevState, { sources: data.sources })
        ));
      });
  }

  handleFilterChange(event) {
    const { name, value } = event.target;
    var setFilter = () => {
      this.filterArticles();
    }
    this.setState((prevState) => {
      const newFilter = Object.assign({}, prevState.currentFilter, {
        [name]: value
      });
      return Object.assign({}, prevState, { currentFilter: newFilter });
    }, setFilter);
  }

  render() {
    const {
            filters,
      sources,
      currentFilter: {
        filterKey,
        filterValue
            }
        } = this.state;

    const sourcesToDisplay = sources.filter(source => {
      return source[filterKey] === filterValue;
    });

    return (
      <div style={{ width: '256px' }}>
        <select
          className="form-control c-select mb-2"
          name="filterKey"
          style={{ textAlign: 'left' }}
          onChange={this.handleFilterChange}
          defaultValue={filterKey}
        >
          {Object.keys(filters).map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <select
          className="form-control c-select"
          name="filterValue"
          onChange={this.handleFilterChange}
          defaultValue={filterValue}
        >
          {Object.keys(filters[filterKey]).map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <div className="card col-xs-12 col-sm-6 col-md-3 m-2" classID="sourceBar">
          {sourcesToDisplay.map((source) => {
            const url = "#/" + source.id + "/" + source.sortBysAvailable[0]
            return (
            <div key={source.id}>
            <div className="sources">
              <p><a href={url} >{source.name}</a>{source.articles}</p>
            </div>
          </div>
          )
          })}
        </div>
      </div>
    );
  }
}

