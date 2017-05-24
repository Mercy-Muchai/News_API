import expect, { createSpy, onSpy, isSpy } from 'expect';
import React from 'react';
import sinon from 'sinon';
import { shallow, wrapper } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Articles from '../src/js/components/Articles.jsx';
import RenderHeadlines from '../src/js/components/RenderHeadlines.jsx';

const mockArticles = {
  articles:
  [{
    author: "Rachel Kaser",
    title: "Mark Zuckerberg returns to his Harvard dorm on Facebook Live",
    description: "Mark Zuckerberg, CEO of Facebook, today returned to his old Harvard dorm room 13 years after dropping out -- and he broadcast the whole tour on Facebook Live for several thousand viewers. Zuckerberg ...",
    url: "https://thenextweb.com/facebook/2017/05/24/mark-zuckerberg-returns-harvard-dorm-facebook-live/",
    urlToImage: "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/04/zuckerberg-f8-2017.png",
    publishedAt: "2017-05-24T02:04:37Z"
  }],
}

describe('Test Articles component', () => {
  const wrapper = shallow(<Articles />);
  it('should return a method', () => {
    expect(<RenderHeadlines />).toExist();
  });
});

describe('Articles', () => {
  it('the array should have atleast one article', () => {
    const wrapper = mount(
      <Articles params={{ source_id: 'abc-news-au', sort_by: 'top' }} />,
    );
    wrapper.setState(mockArticles)
    wrapper.update();
    const articles = wrapper.find(<RenderHeadlines/>)
    wrapper.find(<RenderHeadlines/>);
    expect(articles.length).toBeLessThan(1);
  });
});
