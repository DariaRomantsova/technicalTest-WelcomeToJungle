import { createSlice } from '@reduxjs/toolkit';
import { normalize } from '../../helpers/mapper';

const initialState = {
  itemsById: {},
  itemsIds: [],
  errors: {},
  isLoading: false,
  name: '',
  selectedJob: null,
};

export const jobsSlice = createSlice({
  name: '@@jobs',
  initialState,
  reducers: {
    getJobsList: (state) => {
      state.isLoading = true;
    },
    getJobsListSuccess: (state, { payload: { jobs, name } }) => {
      const { byId, allIds } = normalize(jobs);
      state.name = name;
      state.isLoading = false;
      state.itemsById = byId;
      state.itemsIds = allIds;
    },
    getJobsListFailed: (state, { payload: { error } }) => {
      state.isLoading = false;
      state.errors = error;
    },
    setSelectedJob: (state, { payload: { jobId } }) => {
      state.selectedJob = jobId;
    }
  },
});
