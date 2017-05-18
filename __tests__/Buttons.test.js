import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../src/js/components/Login';

describe('<Login />', () => {
  it('renders a login button', () => {
    const renderedComponent = shallow(<Button />);
    expect(
renderedComponent.find('button').node
  ).toBeDefined();
  });
});
