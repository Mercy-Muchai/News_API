import React from 'react';
import { shallow, wrapper } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import App from '../src/js/components/app.jsx';
import Search from '../src/js/components/Search.jsx';

describe('Test Sources component', () => {
  const wrapper = shallow(<App />);
  it('should have a div', () => {
    expect(wrapper.node.type).toBe('div');
  });
});
// describe ('Search button', ()=> {
//  it('should render a search button', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.containsMatchingElement(<Search />)).toBe(true);
//   });
// });

describe('Home Component', () => {
  it('Should render a home page', () => {
    const homes = shallow(<App />);
    const tree = shallowToJSON();
    expect(tree).toMatchSnapshot();
  });
});
