import {
  FETCH_JOBS_FAILURE,
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
} from '../../actions/types';

const initialState = {
  errors: false,
  isFetching: false,
  jobsById: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_JOBS_SUCCESS:
      return {
        isFetching: false,
        jobsById: {
          ...action.payload.jobs.reduce(
            (acc, job) => ({ ...acc, [job.id]: job }),
            {}
          ),
        },
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: true,
      };
    default:
      return state;
  }
};
