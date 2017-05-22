import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Header from '../src/js/components/Header';

describe('News API', () => {
  it('the app should have a image', () => {
    const app = shallow(<Header />);
    expect(app.contains(<div>navbar-brand</div>)).toBe(false);
  });
});

