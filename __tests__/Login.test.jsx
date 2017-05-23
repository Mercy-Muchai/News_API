import React from 'react';
import { shallow, wrapper, mount} from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Login from '../src/js/components/Login.jsx';

describe('Test Header component', () => {
  const wrapper = shallow(<Login />);
  it('should have a div', () => {
    expect(wrapper.node.type).toBe('div');
  });
});


