import {
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_FAILURE,
} from './types';

export const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST,
});

export const fetchJobsSuccess = jobs => ({
  type: FETCH_JOBS_SUCCESS,
  payload: { jobs },
});

export const fetchJobsFailure = () => ({
  type: FETCH_JOBS_FAILURE,
});
