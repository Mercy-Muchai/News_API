import expect from 'expect';
import React from 'react';
import { shallow, wrapper} from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Header from '../src/js/components/Header.jsx';
import Sources from '../src/js/components/Sources.jsx';
import Articles from '../src/js/components/Articles.jsx';
import RenderHeadlines from '../src/js/components/RenderHeadlines.jsx';

describe('Test Header component', () => {
  const wrapper = shallow(<Header/>);
  it('should have a navbar', () => {
    expect(wrapper.node.type).toBe('nav');
  });
});

describe('Test Sources component', () => {
  const wrapper = shallow(<Sources/>);
  it('should have a div', () => {
    expect(wrapper.node.type).toBe('div');
  });

  it('expect to find the class', () => {
    expect(wrapper.node.props.className).toBe('sources-container col-sm-3');
  });
});

