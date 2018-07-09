import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import Panel from '../Panel';
import './styles.css';

const PanelList = ({ history, isFetching, jobs }) =>
  isFetching ? (
    <Spinner name="pacman" color="#2c3e50" className="spinner" />
  ) : (
    Object.keys(jobs).map(jobId => (
      <Panel history={history} job={jobs[jobId]} key={jobId} />
    ))
  );

PanelList.propTypes = {
  history: PropTypes.object,
  isFetching: PropTypes.bool,
  jobs: PropTypes.object,
};

export default PanelList;
