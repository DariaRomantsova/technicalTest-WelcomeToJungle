import { combineReducers } from '@reduxjs/toolkit';

import { jobsSlice } from '../jobs';

export const rootReducer = () =>
  combineReducers({
    jobs: jobsSlice.reducer,
  });

  export type AppState = ReturnType<typeof rootReducer>;