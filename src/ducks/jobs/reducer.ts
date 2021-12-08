import { createSlice } from '@reduxjs/toolkit';
import { normalize } from '../mapper';

const initialState = {
  itemsById: {},
  itemsIds: [],
  errors: {},
  isLoading: false,
  name:''
};

export const jobsSlice = createSlice({
  name: '@@jobs',
  initialState,
  reducers: {
    getJobsList: (state) => {
      state.isLoading = true;
    },
    getJobsListSuccess: (state,  {payload:{jobs,name}}) => {
      const { byId, allIds } = normalize(jobs);
      state.name=name;
      state.isLoading = false;
      state.itemsById = byId;
      state.itemsIds = allIds;
    },
    getJobsListFailed: (state, action) => {
      state.isLoading = false;
    },
  },
});
