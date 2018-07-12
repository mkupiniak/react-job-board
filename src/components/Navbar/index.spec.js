import React from 'react';
import { shallow } from 'enzyme';
import { Navbar as RBNavbar } from 'react-bootstrap';
import Navbar from './';

describe('Navbar component', () => {
  const props = {
    onClick: jest.fn(),
  };
  const component = shallow(<Navbar {...props} />);

  it('renders without crashing', () => {
    expect(component.length).toBe(1);
  });

  it('renders correct structure', () => {
    expect(component.find(RBNavbar).length).toBe(1);
    expect(component.find(RBNavbar.Header).length).toBe(1);
    expect(component.find(RBNavbar.Brand).length).toBe(1);
    expect(component.find('a').length).toBe(1);
  });

  it('invokes onClick function when button is clicked', () => {
    const a = component.find('a');
    a.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});
