import {
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_FAILURE,
} from './types';

export const fetchJobs = (location = '') => dispatch => {
  dispatch(fetchJobsRequest());

  const locationQuery = `location=${location}`;
  const query = location ? `?${locationQuery}` : '';

  fetch(
    `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json${query}`
  )
    .then(res => res.json())
    .then(json => dispatch(fetchJobsSuccess(json)))
    .catch(() => dispatch(fetchJobsFailure()));
};

const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST,
});

const fetchJobsSuccess = jobs => ({
  type: FETCH_JOBS_SUCCESS,
  payload: { jobs },
});

const fetchJobsFailure = () => ({
  type: FETCH_JOBS_FAILURE,
});
