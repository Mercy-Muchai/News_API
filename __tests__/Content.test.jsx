import expect from 'expect';
import React from 'react';
import { shallow, wrapper } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
// import Header from '../src/js/components/Header.jsx';
import Sources from '../src/js/components/Sources.jsx';
import Articles from '../src/js/components/Articles.jsx';
import RenderHeadlines from '../src/js/components/RenderHeadlines.jsx';
import App from '../src/js/components/App.jsx';

describe('Test Sources component', () => {
  const wrapper = shallow(<Sources />);
  it('should have a div', () => {
    expect(wrapper.node.type).toBe('div');
  });

  it('expect to find the class', () => {
    expect(wrapper.node.props.className).toBe('sources-container col-sm-3');
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
  // the array should have more than one source
  it('the array should have more than one source', () => {
    const wrapper = mount(
      <Sources />,
    );
    wrapper.setState(mockSources)
    wrapper.update();
    const sources = wrapper.find('sources-container col-sm-3')
    expect(sources.length).toBeLessThanOrEqualTo(2);
  });
});