import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

it('should render a label', () => {
  const wrapper = shallow(
      <Label>Hello Jest!</Label>
    );
  expect(wrapper).toMatchSnapshot();
});

it('should render a small label', () => {
  const wrapper = shallow(
      <Label small>Hello Jest!</Label>
    );
  expect(wrapper).toMatchSnapshot();
});

it('should render a grayish label', () => {
  const wrapper = shallow(
      <Label light>Hello Jest!</Label>
    );
  expect(wrapper).toMatchSnapshot();
});
