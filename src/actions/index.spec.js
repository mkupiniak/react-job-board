import * as actions from './';
import * as types from './types';

describe('Actions', () => {
  describe('fetchJobsRequest', () => {
    it('correctly sets type', () => {
      const type = types.FETCH_JOBS_REQUEST;

      expect(actions.fetchJobsRequest()).toEqual({ type });
    });
  });

  describe('fetchJobsSuccess', () => {
    it('correctly sets type and payload', () => {
      const type = types.FETCH_JOBS_SUCCESS;
      const payload = {
        jobs: [],
      };

      expect(actions.fetchJobsSuccess([])).toEqual({ type, payload });
    });
  });

  describe('fetchJobsFailure', () => {
    it('correctly sets type', () => {
      const type = types.FETCH_JOBS_FAILURE;

      expect(actions.fetchJobsFailure()).toEqual({ type });
    });
  });
});
