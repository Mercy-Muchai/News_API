import React from 'react';
import Axios from 'axios';


export default class RenderHeadlines extends React.Component {
  render() {
    return (
      <div className="col-sm-9">
        <div className="row-fluid">
          {this.props.articles.map((article, index) => (
            <div className ="articles" key={index}>
            <div className="card col-xs-12 col-sm-4 col-md-4 m-2" classID="articleDisplay" key={article.id}>
              <div className="card-block">
                <h4 className="card-title"style={{height: '300px', overflow: 'scroll' }}> <a target="_blank" href={article.url} target> <img className="card-img-top" src={article.urlToImage} width="300" height="236"/>{article.title}</a></h4>
                <p className="card-text" style={{height: '100px'}}>{article.description}</p>
              </div>
              </div>
            </div>

          ))
          }
        </div>
      </div>
    )
  }
}
