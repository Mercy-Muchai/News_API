import React from 'react';
import { shallow, wrapper } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import nock from 'nock';

import App from '../src/js/components/app.jsx';

describe('Test App', () => {
  const wrapper = shallow(<App />);
  it('should have a div', () => {
    expect(wrapper.node.type).toBe('div');
  });

  it('Should render a home page', () => {
    const homes = shallow(<App />);
    const tree = shallowToJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Intercepts URL and return empty array', () => {
    const abc = new App();
    // Intercept URL
    const mockHeadlines = nock('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=213327409d384371851777e7c7f78dfe')
      .get('/')
      .reply(200, 'headlines');
    abc.sortArticles()
    expect(abc.state.articles).toEqual([]);
  });
});
