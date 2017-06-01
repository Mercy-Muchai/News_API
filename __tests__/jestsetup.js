import { shallow, render, mount } from 'enzyme';

global.shallow = shallow;
global.render = render;
global.mount = mount;

/* eslint-disable no-console */
console.error = (message) => {
  throw new Error(message);
};
