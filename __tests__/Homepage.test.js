import React from 'react';
import { shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import App from '../src/js/components/app';

describe('Home Component', () => {
  it('Should render a home page', () => {
    const homes = shallow(<App />);
    const tree = shallowToJSON();
    expect(tree).toMatchSnapshot();
  });
});
