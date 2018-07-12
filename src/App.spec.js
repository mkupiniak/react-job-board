import React from 'react';
import { Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import { Col, Grid, Row } from 'react-bootstrap';
import { App } from './App';

describe('App component', () => {
  const props = {
    errors: false,
    fetchJobs: jest.fn(),
    isFetching: false,
    jobsById: { j1: 'a', j2: 'b' },
  };
  const component = shallow(<App {...props} />);

  it('renders without crashing', () => {
    expect(component.length).toBe(1);
  });

  it('should render Grid, Row and Cols', () => {
    expect(component.find(Grid).length).toBe(2);
    expect(component.find(Row).length).toBe(3);
    expect(component.find(Col).length).toBe(3);
  });

  it('should call fetchJobs function after mounting', () => {
    expect(props.fetchJobs).toHaveBeenCalled();
  });

  it('should show error message when fetching fails', () => {
    const newProps = {
      ...props,
      errors: true,
    };
    const component = shallow(<App {...newProps} />);

    expect(
      component.contains('Sorry, I failed fetching jobs. Please try again.')
    ).toBe(true);
  });

  it('should render Routes', () => {
    expect(component.find(Route).length).toBe(2);
  });
});
