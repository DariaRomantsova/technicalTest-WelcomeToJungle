import { combineReducers } from '@reduxjs/toolkit';
import { Reducer } from 'redux';

import { reducer } from '../jobs';

export const rootReducer = (): Reducer =>
  combineReducers({
    jobs: reducer,
  });

  export type AppState = ReturnType<typeof rootReducer>;