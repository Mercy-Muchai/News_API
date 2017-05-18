import React from 'react';
import { mount } from 'enzyme';
import Header from '../src/js/components/Header';

describe('Header', () => {
  let wrapper;
  it('has a NewsAPI logo and title', () => {
    wrapper = mount(<Header />);
    expect(wrapper.find('Logo').at(true));
  });
});

