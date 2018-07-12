import React from 'react';
import { shallow, mount } from 'enzyme';
import Spinner from 'react-spinkit';
import Panel from '../Panel';
import PanelList from './';

describe('PanelList component', () => {
  const props = {
    history: {
      push: jest.fn(),
    },
    isFetching: false,
    jobs: {
      a: {},
      b: {},
    },
  };
  const component = shallow(<PanelList {...props} />);

  it('renders without crashing', () => {
    expect(component.length).toBe(1);
  });

  it('renders Panels when not fetching', () => {
    const component = mount(<PanelList {...props} />);

    expect(component.find(Panel).length).toBe(2);
  });

  it('renders Spinner when fetching', () => {
    const newProps = {
      ...props,
      isFetching: true,
    };
    const component = shallow(<PanelList {...newProps} />);

    expect(component.find(Spinner).length).toBe(1);
  });
});
