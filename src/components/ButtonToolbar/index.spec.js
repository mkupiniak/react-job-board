import React from 'react';
import { shallow } from 'enzyme';
import { Button, ButtonToolbar as RBButtonToolbar } from 'react-bootstrap';
import ButtonToolbar from './';

describe('ButtonToolbar component', () => {
  const props = {
    items: ['1', '2'],
    onClick: jest.fn(),
  };
  const component = shallow(<ButtonToolbar {...props} />);

  it('renders without crashing', () => {
    expect(component.length).toBe(1);
  });

  it('renders correct structure', () => {
    expect(component.find('div.toolbar').length).toBe(1);
    expect(component.find(RBButtonToolbar).length).toBe(1);
  });

  it('renders buttons with correct children', () => {
    expect(component.find(Button).length).toBe(2);
    expect(
      component
        .find(Button)
        .at(0)
        .prop('bsSize')
    ).toBe('small');
    expect(
      component
        .find(Button)
        .at(0)
        .prop('children')
    ).toBe(props.items[0]);
  });

  it('invokes onClick function when button clicked', () => {
    const button = component.find(Button).at(0);
    button.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});
