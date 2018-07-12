import {
  fetchJobsFailure,
  fetchJobsRequest,
  fetchJobsSuccess,
} from '../../actions';

const fetchJobs = (location = '') => dispatch => {
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

export default fetchJobs;
