import { shallow, render, mount } from 'enzyme';

global.shallow = shallow;
global.render = render;
global.mount = mount;

// Make tests fail on any warning
/* eslint-disable no-console */
console.error = (message) => {
  throw new Error(message);
};
