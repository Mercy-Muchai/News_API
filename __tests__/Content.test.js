import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Header from '../src/js/components/app';

describe('News API', () => {
  it('the app should have a logo and image', () => {
    const app = shallow(<newsAPI />);
    expect(app.contains(<div>App</div>)).toBe(false);
  });
});

// it('should render a title', () => {
//   const tree = shallow(<Header>News API</Header>
//     );
//   expect(tree).toMatchSnapshot();
// });


// it('should render a small label', () => {
//   const wrapper = shallow(
//     <Header small>Hello Jest!</Header>
//     );
//   expect(wrapper).toMatchSnapshot();
// });

// it('should render a grayish label', () => {
//   const wrapper = shallow(
//     <Label light>Hello Jest!</Label>
//     );
//   expect(wrapper).toMatchSnapshot();
// });
