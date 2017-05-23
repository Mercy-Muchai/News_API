import expect from 'expect';
import React from 'react';
import { shallow, wrapper} from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Header from '../src/js/components/Header.jsx';
import Sources from '../src/js/components/Sources.jsx';
import Articles from '../src/js/components/Articles.jsx';
import RenderHeadlines from '../src/js/components/RenderHeadlines.jsx';

describe('Test Articles component', () => {
  const wrapper = shallow(<RenderHeadlines />);
  it('should have a div', () => {
    expect(wrapper.node.type).toBe('div');
  });

  it('expect to find the class', () => {
    expect(wrapper.node.props.children.className).toBe('articles');
  });
});

describe('Test Articles component', () => {
  const wrapper = shallow(<Articles />);
  it('should have a div', () => {
    expect(wrapper.node.type).toBe(RenderHeadlines);
  });
});