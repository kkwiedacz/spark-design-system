import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkLink from './SprkLink';

Enzyme.configure({ adapter: new Adapter() });

it('should display a link element with the correct base class', () => {
  const wrapper = shallow(<SprkLink/>);
  expect(wrapper.find('a.sprk-b-Link').length).toBe(1);
});

it('should display a link element with correct classes when variant is simple', () => {
  const wrapper = shallow(<SprkLink variant="simple" />);
  expect(wrapper.find('a').hasClass('sprk-b-Link')).toBe(true);
  expect(wrapper.find('a').hasClass('sprk-b-Link--simple')).toBe(true);
});

it('should display a link element with correct classes when variant is has-icon', () => {
  const wrapper = shallow(<SprkLink variant="has-icon" />);
  expect(wrapper.find('a').hasClass('sprk-b-Link')).toBe(true);
  expect(wrapper.find('a').hasClass('sprk-b-Link--simple')).toBe(true);
  expect(wrapper.find('a').hasClass('sprk-b-Link--has-icon')).toBe(true);
});

it('should display a link element with correct classes when variant is plain', () => {
  const wrapper = shallow(<SprkLink variant="plain" />);
  expect(wrapper.find('a').hasClass('sprk-b-Link')).toBe(true);
  expect(wrapper.find('a').hasClass('sprk-b-Link--plain')).toBe(true);
});

it('should display a link element with correct classes when variant is disabled', () => {
  const wrapper = shallow(<SprkLink variant="disabled" />);
  expect(wrapper.find('a').hasClass('sprk-b-Link')).toBe(true);
  expect(wrapper.find('a').hasClass('sprk-b-Link--disabled')).toBe(true);
});
