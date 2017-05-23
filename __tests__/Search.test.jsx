import React from 'react';
import { shallow, wrapper, mount} from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Search from '../src/js/components/Search.jsx'

describe('Test Header component', () => {
  const wrapper = shallow(<Search/>);
  it('should have a div', () => {
    expect(wrapper.node.type).toBe('div');
  });
    it('expect to find the class', () => {
    expect(wrapper.node.props.className).toBe('col-sm-12');
  });
  it('expect to find the class', () => {
    expect(wrapper.node.props.classID).toBe('search');
  });
  it('Should render a navbar', () => {
    const homes = shallow(<Search />);
    const tree = shallowToJSON();
    expect(tree).toMatchSnapshot();
  });
});
