import React from 'react';
import { mount } from 'enzyme';

import NewsAPI from '../src/js/components/Header';

describe('Header', () => {
  let wrapper;
  it('has a NewsAPI logo and title', () => {
    wrapper = mount(<NewsAPI />);
    expect(wrapper.find('NewsAPI').at(true));
  });
});

