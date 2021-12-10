import { combineReducers } from '@reduxjs/toolkit';

import { reducer } from '../jobs';

export const rootReducer = () =>
  combineReducers({
    jobs: reducer,
  });

  export type AppState = ReturnType<typeof rootReducer>;