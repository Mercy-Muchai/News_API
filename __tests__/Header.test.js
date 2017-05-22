import React from 'react';
import { mount } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Header from '../src/js/components/Header';

describe('Header', () => {
  it('Should render a navbar', () => {
    const homes = shallow(<Header/>);
    const tree = shallowToJSON();
    expect(tree).toMatchSnapshot();
  });
});


