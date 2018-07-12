import React from 'react';
import { shallow } from 'enzyme';
import JobDetails from './';

describe('JobDetails page', () => {
  const props = {
    details: {
      company: 'a',
      description: 'b',
      how_to_apply: 'c',
      location: 'd',
      title: 'e',
    },
    history: {
      replace: jest.fn(),
      goBack: jest.fn(),
    },
  };

  it('renders correct props without throwing', () => {
    const component = shallow(<JobDetails {...props} />);

    expect(component.length).toBe(1);
    expect(component.find('h1').text()).toBe(props.details.title);
    expect(component.find('h4').text()).toBe(
      `${props.details.company}, ${props.details.location}`
    );
    expect(props.history.replace).not.toHaveBeenCalled();
  });

  it('redirects to home page when details are falsy', () => {
    const newProps = {
      ...props,
      details: undefined,
    };
    const component = shallow(<JobDetails {...newProps} />);

    expect(props.history.replace).toHaveBeenCalled();
  });

  it('goes back when clicked on back button', () => {
    const component = shallow(<JobDetails {...props} />);

    const anchor = component.find('a');
    anchor.simulate('click');

    expect(props.history.goBack).toHaveBeenCalled();
  });
});
