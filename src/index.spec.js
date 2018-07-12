import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const props = {
  errors: false,
  fetchJobs: jest.fn(),
  isFetching: false,
  jobsById: {},
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App {...props} />, div);
});
