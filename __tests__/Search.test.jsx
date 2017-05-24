import React from 'react';
import { shallow, wrapper, mount } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Search from '../src/js/components/Search.jsx';
import App from '../src/js/components/app.jsx';

describe('Test Search component', () => {
  const wrapper = shallow(<Search />);
  it('should have a div', () => {
    expect(wrapper.node.type).toBe('div');
  });
  it('expect to find the class', () => {
    expect(wrapper.node.props.className).toBe('col-sm-12');
  });
  it('Should have a search button', () => {
    const homes = shallow(<Search />);
    const tree = shallowToJSON();
    expect(tree).toMatchSnapshot();
  });

  it("trigger Search", () => {
    const onSearch = jest.fn();
  });
});
describe ('Search button', ()=> {
 it('should render a search button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Search />)).toBe(true);
  });
});

const mockSources = {
  sources: [
    {
      id: "al-jazeera-english",
      name: "Al Jazeera English",
      description: "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
      url: "http://www.aljazeera.com",
      category: "general",
      language: "en",
      country: "us",
      urlsToLogos: {
        small: "",
        medium: "",
        large: ""
      },
      sortBysAvailable: [
        "top",
        "latest"
      ]
    },
    {
      id: "ars-technica",
      name: "Ars Technica",
      description: "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
      url: "http://arstechnica.com",
      category: "technology",
      language: "en",
      country: "us",
      urlsToLogos: {
        small: "",
        medium: "",
        large: ""
      },
      sortBysAvailable: [
        "top",
        "latest"
      ]
    },]
}
describe('Sources', () => {
  // user should search any source
  it('the array should have atleast one source', () => {
    const wrapper = mount(
      <Search />,
    );
    wrapper.setState(mockSources)
    wrapper.update();
    const sources = wrapper.find('sources-container col-sm-3')
    expect(sources.length).toBeLessThan(2);
  });
});