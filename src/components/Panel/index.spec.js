import React from 'react';
import { shallow } from 'enzyme';
import { Panel as RBPanel } from 'react-bootstrap';
import Panel from './';

describe('Panel component', () => {
  const props = {
    history: {
      push: jest.fn(),
    },
    job: {
      company_logo: 'logo',
      company: 'company',
      created_at: 'date',
      location: 'location',
      title: 'title',
    },
  };
  const component = shallow(<Panel {...props} />);

  it('renders without crashing', () => {
    expect(component.length).toBe(1);
  });

  it('renders react bootstrap Panel', () => {
    expect(component.find(RBPanel).length).toBe(1);
  });

  it('pushes to history on panel click', () => {
    const panel = component.find(RBPanel);

    panel.simulate('click');
    expect(props.history.push).toHaveBeenCalled();
  });
});
