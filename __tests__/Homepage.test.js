import React from 'react';
import { shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Home from '../src/js/components/Homepage';

describe('Home Component', () => {
  it('Should render a home page', () => {
    const homes = shallow(<Home />);
    const tree = shallowToJSON(homes);
    expect(tree).toMatchSnapshot();
  });
});
