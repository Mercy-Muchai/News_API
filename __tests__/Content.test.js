import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Header from '../src/js/components/Header';
import Sources from '../src/js/components/Sources';
import Articles from '../src/js/components/Articles';
import RenderHeadlines from '../src/js/components/RenderHeadlines';

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
});

